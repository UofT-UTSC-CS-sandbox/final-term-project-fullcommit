# System Design: Physician Collaboration Platform

## High-level Overview of Classes

### Overview:
<i>Our Physician Collaboration Platform will use the MERN tech stack and an MVC pattern.</i>

### High Level Over Modules:
1. Authentication and Login
2. Users (Doctor)
3. Case Management
4. Document Management
5. Appointment Management
6. Basic Search
7. Note-taking and Case Management
8. Activity Logging and Auditing

### CRC Cards:

<table>
  <tbody>
    <tr>
      <th> Class Name / Modules </th>
      <th> Parent </th>
      <th> Sub </th>
      <th> Responsibilities </th>
    </tr>
    <tr>
        <td> User </td>
        <td> None </td>
        <td> Doctor </td>
        <td>
            <ul> 
            <li> State: Logged in/out </li>
            <li> Access platform functionalities </li>
            </ul>
        </td>
    </tr>
    <tr>
        <td> Authentication </td>
        <td> None </td>
        <td> None </td>
        <td>
            <ul>
            <li> Authenticate user credentials </li>
            <li> Manage user sessions </li>
            <li> Issue authentication tokens </li>
            </ul>
        </td>
    </tr>
    <tr>
        <td> Logger </td>
        <td> None </td>
        <td> None </td>
        <td>
            <ul>
            <li> Log user activities </li>
            <li> Maintain audit trails </li>
            <li> Store error and access logs </li>
            </ul>
        </td>
    </tr>
    <tr>
        <td> Doctor </td>
        <td> User </td>
        <td> None </td>
        <td>
            <ul> 
            <li> Log cases/appointments </li>
            <li> Access patient documents </li>
            <li> Search and retrieve appointments </li>
            <li> Take notes and save specific cases </li>
            </ul>
        </td>
    </tr>
    <tr>
        <td> CaseManagement </td>
        <td> None </td>
        <td> None </td>
        <td>
            <ul>
            <li> Maintain case records including transcriptions, X-rays, and other documents </li>
            <li> Ensure cases are updated with outcomes (diagnosed/undiagnosed) </li>
            </ul>
        </td>
    </tr>
    <tr>
        <td> DocumentManagement </td>
        <td> None </td>
        <td> None </td>
        <td>
            <ul>
            <li> Upload and manage documents related to appointments </li>
            </ul>
        </td>
    </tr>
    <tr>
        <td> AppointmentManagement </td>
        <td> None </td>
        <td> None </td>
        <td>
            <ul>
            <li> Log and track appointments </li>
            <li> Manage appointment outcomes </li>
            </ul>
        </td>
    </tr>
    <tr>
        <td> BasicSearch </td>
        <td> None </td>
        <td> None </td>
        <td>
            <ul>
            <li> Search cases/appointments by disease name </li>
            <li> Retrieve and display search results </li>
            </ul>
        </td>
    </tr>
    <tr>
        <td> NoteTaking </td>
        <td> None </td>
        <td> None </td>
        <td>
            <ul>
            <li> Allow users to take notes on cases </li>
            <li> Save specific cases for later review </li>
            </ul>
        </td>
    </tr>
  </tbody>
</table>

## Environment
OS independent.
```npm install``` </br>
```cd backend/``` </br>
```node app.js``` </br>
```cd frontend/``` </br>
```npm start``` </br>

Programming Languages: JavaScript (Node.js 14)  
Compilers / Virtual Machines: Node.js for JavaScript  
Databases: MongoDB  

## Component System Architecture:
<i>Describe the architecture of the system that is the most abstract view of how your system is divided into components and how those components are interconnected. The architecture should be described with a diagram showing components and how they are related (or equivalent in words). Beware of designs based on a large number of components, they may signal a design that is overly complex.</i>

### Components:
- UserInterface: Handles all user interactions (web and mobile interfaces).
- AuthenticationService: Manages user authentication and session management.
- Logger: Logs user activities and system events.
- CaseManagement: Manages cases, including documents and outcomes.
- DocumentManagement: Manages appointment-related documents.
- AppointmentManagement: Manages appointment logging and tracking.
- BasicSearch: Provides search functionality for cases/appointments.
- NoteTaking: Allows users to take notes and save specific cases.
- Database: Serves as the central repository for all data.

### Relationships:
- UserInterface interacts with all other components.
- AuthenticationService ensures secure access to all components.
- Logger records activities and events from all components.
- Database serves as the central repository for all data.
- AppointmentManagement collaborates with CaseManagement and DocumentManagement for appointment details.
- BasicSearch retrieves data from CaseManagement.
- NoteTaking interacts with CaseManagement for saving notes.

## System Responses
<i>The system decomposition should relate the system architecture to the detailed design, to identify the role of each component in the higher-level architectural view. Description of strategy for dealing with errors and exceptional cases (e.g. invalid user input, network or external system failure) that might arise in the use of the software. For anticipated errors and exceptions, a summary of how the software will respond in these situations.</i>

### System Decomposition
- User Interface
    - Role: Manages user interactions, sends requests to backend services.
    - Error Handling: Validates user input, displays error messages.
- Case Management
    - Role: Manages case records, including documents and outcomes.
    - Error Handling: Ensures data integrity, handles missing or incorrect case data.
- Document Management
    - Role: Manages appointment-related documents.
    - Error Handling: Handles document upload errors and conflicts.
- Appointment Management
    - Role: Manages appointment logging and tracking.
    - Error Handling: Ensures accurate logging, handles appointment conflicts.
- Basic Search
    - Role: Provides search functionality for cases/appointments.
    - Error Handling: Validates search queries, handles no results found.
- Note Taking
    - Role: Allows users to take notes and save specific cases.
    - Error Handling: Ensures note data integrity, handles save errors.
- Error Handling Strategy
    - Invalid User Input: Input validation on frontend and backend.
    - Network Failures: Implement retries, fallback mechanisms.
    - External System Failures: Use circuit breaker patterns for robustness.
