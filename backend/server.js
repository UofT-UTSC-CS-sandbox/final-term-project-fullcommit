// Load environment variables from .env file into process.env
require("dotenv").config();

// IMPORTS
const express = require("express"); // Express framework for creating the server
const mongoose = require("mongoose"); // Mongoose for connecting to MongoDB
const path = require("path"); // Path module for handling file paths
const fs = require('fs');
const multer = require('multer');
const { SpeechClient } = require('@google-cloud/speech');
const wavFileInfo = require('wav-file-info');
const patientRoutes = require("./routes/patients"); // patient routes
const employeeRoutes = require("./routes/employees"); // employee routes
const medicineRoutes = require("./routes/medicine"); // medicine routes
const appointmentRoutes = require("./routes/appointmentRoutes"); // appointment routes
const { exec } = require('child_process');
const cors = require('cors'); // To handle CORS issues
const fs = require('fs');
const multer = require('multer');
const { SpeechClient } = require('@google-cloud/speech');
const wavFileInfo = require('wav-file-info');
const { exec } = require('child_process'); // Import exec for running shell commands
const { promisify } = require('util'); // Import promisify to handle async/await with exec

const execAsync = promisify(exec); // Convert exec to a promise-based function
const Appointment = require('./models/appointment');

// Ensure the uploads directory exists
const uploadsDir = path.join(__dirname, 'uploads');

if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Create an Express app
const app = express();

// to parse incoming JSON requests (If request has a body, attach it to request object)
app.use(express.json());

// Enable CORS for all routes
app.use(cors());

// to log the request path and method for every request
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next(); // Move on to the next middleware or route handler
});

// Multer configuration for audio file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Google Cloud Speech-to-Text setup
const speechClient = new SpeechClient({
  keyFilename: path.join(__dirname, 'fullcommit-ba75fe0b0a4a.json')
});

const transcribeAudio = async (filePath, sampleRateHertz) => {
  try {
    const file = fs.readFileSync(filePath);
    const audioBytes = file.toString('base64');

    const request = {
      audio: {
        content: audioBytes,
      },
      config: {
        encoding: 'LINEAR16',
        sampleRateHertz: sampleRateHertz,
        languageCode: 'en-US',
      },
    };

    const [response] = await speechClient.recognize(request);
    const transcription = response.results
      .map(result => result.alternatives[0].transcript)
      .join('\n');

    return transcription;
  } catch (error) {
    console.error('Error transcribing audio:', error);
    throw error;
  }
};

app.post('/api/appointments/uploadAudio', upload.single('audio'), async (req, res) => {
  try {
    const filePath = req.file.path;
    console.log('File path:', filePath);

    // Convert audio to mono using ffmpeg
    const monoFilePath = filePath.replace('.wav', '-mono.wav');
    const ffmpegCommand = `ffmpeg -i ${filePath} -ac 1 ${monoFilePath}`;

    await execAsync(ffmpegCommand); // Use the promisified execAsync

    wavFileInfo.infoByFilename(monoFilePath, async (err, info) => {
      if (err) {
        console.error('Error reading WAV file info:', err);
        return res.status(500).json({ message: 'Error reading WAV file info', error: err });
      }

      const sampleRateHertz = info.header.sample_rate;
      console.log('Sample rate:', sampleRateHertz);

      const transcription = await transcribeAudio(monoFilePath, sampleRateHertz);

      // Save the transcript to the appointment in the database
      const appointmentId = req.body.appointmentId; // Ensure the appointment ID is sent with the request
      await Appointment.findByIdAndUpdate(appointmentId, { transcript: transcription });
      console.log('Updating appointment with ID:', appointmentId);

      res.status(200).json({ message: 'Audio uploaded and transcribed successfully', transcription });
    });
  } catch (error) {
    console.error('Error uploading and transcribing audio:', error);
    res.status(500).json({ message: 'Error uploading and transcribing audio', error });
  }
});

// ROUTES
app.post('/api/appointments/uploadAudio', upload.single('audio'), async (req, res) => {
  try {
    const filePath = req.file.path;
    console.log('File path:', filePath);

    // Convert audio to mono using ffmpeg
    const monoFilePath = filePath.replace('.wav', '-mono.wav');
    const ffmpegCommand = `ffmpeg -i ${filePath} -ac 1 ${monoFilePath}`;

    exec(ffmpegCommand, async (err) => {
      if (err) {
        console.error('Error converting audio to mono:', err);
        return res.status(500).json({ message: 'Error converting audio to mono', error: err });
      }

      wavFileInfo.infoByFilename(monoFilePath, async (err, info) => {
        if (err) {
          console.error('Error reading WAV file info:', err);
          return res.status(500).json({ message: 'Error reading WAV file info', error: err });
        }

        const sampleRateHertz = info.header.sample_rate;
        console.log('Sample rate:', sampleRateHertz);

        const transcription = await transcribeAudio(monoFilePath, sampleRateHertz);

        res.status(200).json({ message: 'Audio uploaded and transcribed successfully', transcription });
      });
    });
  } catch (error) {
    console.error('Error uploading and transcribing audio:', error);
    res.status(500).json({ message: 'Error uploading and transcribing audio', error });
  }
});
app.use("/api/patients", patientRoutes);
app.use("/api/employees", employeeRoutes);
app.use("/api/medicine", medicineRoutes);
app.use("/api/appointments", appointmentRoutes);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "../frontend/build")));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Handle any other routes with the React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
});

// CONNECT TO DB
// Connect to MongoDB using the URI stored in environment variables
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    // Start the server and listen on the port specified in environment variables
    app.listen(process.env.PORT, () => {
      console.log(
        "Successfully connected to database, and listening on port",
        process.env.PORT,
      );
    });
  })
  .catch((error) => {
    // Log any errors that occur during connection
    console.log(error);
  });
