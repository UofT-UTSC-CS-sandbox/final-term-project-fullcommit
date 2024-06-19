# System Design

## High-level Overview of Classes

### Overview:
<i> Our Hospital Management web app will use the MERN techstack and an MVC pattern.
</i>

### Modules: 
1. Authentication and Login
2. Users (Patient, Physician)
3. Profiles
4. Directories  
5. Patient Management  
6. Inventory Management  
7. Scheduling and Shifts  
8. Medical Equipment Management  
9. Activity Logging and Auditing  


### CRC Cards:

<table>
  <tbody>
    <tr>
      <th> Class Name </th>
      <th> Parent </th>
      <th> Sub </th>
      <th> Responsibilities </th>
    </tr>
    <tr>
        <td> User </td>
        <td> None </td>
        <td> StaffRegistry, PatientRegistry </td>
        <td>
            <ul> 
            <li> State: Logged in/out </li>
            <li> Access website, aka. Individuals who are neither should be denied </li>
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
        <td> StaffRegistry </td>
        <td> User </td>
        <td> None </td>
        <td>
            <ul> 
            <li> Add or remove members of staff </li>
            <li> Facilitate virtual communication between colleagues </li>
            <li> Provide information about physicians' specialties for patient referrals </li>
            </ul>
        </td>
    </tr>
    <tr>
        <td> PatientRegistry </td>
        <td> User </td>
        <td> None </td>
        <td>
            <ul>
            <li> Maintain detailed patient records including vaccine shots, blood work tests, and appointment history </li>
            <li> Allow physicians to write notes for future reference </li>
            </ul>
        </td>
    </tr>
    <tr>
        <td> EquipmentTracker </td>
        <td> None </td>
        <td> None </td>
        <td>
            <ul>
            <li> Monitor availability of medical equipment including hospital beds </li>
            </ul>
        </td>
    </tr>
    <tr>
        <td> ShiftsManager </td>
        <td> None </td>
        <td> None </td>
        <td>
            <ul>
            <li> Allocate staff shifts and patient assignments </li>
            <li> Implement algorithms to map patients to doctors </li>
            </ul>
        </td>
    </tr>
    <tr>
        <td> InventoryManager </td>
        <td> None </td>
        <td> None </td>
        <td>
            <ul>
            <li> Predict inventory needs using data analytics </li>
            <li> Manage orders and track their statuses </li>
            </ul>
        </td>
    </tr>
    <tr>
        <td> StaffHistory </td>
        <td> None </td>
        <td> None </td>
        <td>
            <ul>
            <li> Provide information on current and previous workplaces of healthcare professionals </li>
            </ul>
        </td>
    </tr>
    <tr>
        <td> PatientScheduler </td>
        <td> None </td>
        <td> None </td>
        <td>
            <ul>
            <li> Prioritize and schedule patients based on their medical needs </li>
            </ul>
        </td>
    </tr>
   </tbody>
</table>



## Environment
<i> OS Dependencies </i>
<ul>
<li> cd backend </li>
<li> node server.js </li>
<li> cd frontend </li>
<li> npm start </li>
</ul>
Operating System: Linux (Ubuntu 20.04) 
 
Programming Languages: JavaScript (Node.js 14)  
Compilers / Virtual Machines: Node.js for JavaScript  
Databases: MongoDB  

## Component System Architeture: 
<i> Describe the architecture of the system that is the most abstract view of how your system
is divided into components and how those components are interconnected. The
architecture should be described with a diagram showing components and how they are
related (or equivalent in words). Beware of designs based on a large number of
components, they may signal a design that is overly complex. </i>

### Components:  
- UserInterface: Handles all user interactions (web and mobile interfaces).  
- AuthenticationService: Manages user authentication and session management.  
- Logger: Logs user activities and system events.  
- StaffRegistry: Manages staff information and communication.
- PatientRegistry: Manages patient records and history.  
- EquipmentTracker: Monitors the availability of medical equipment.  
- ShiftsManager: Manages staff shifts and patient assignments.  
- InventoryManager: Manages medical supplies and equipment.  
- StaffHistory: Tracks previous and current workplaces of staff.  
- PatientScheduler: Schedules and prioritizes patient appointments.  
- Database: Serves as the central repository for all data.  

### Relationships:
- UserInterface interacts with all other components.  
- AuthenticationService ensures secure access to all components.  
- Logger records activities and events from all components.  
- Database serves as the central repository for all data.  
- InventoryManager collaborates with EquipmentTracker for inventory details.  
- ShiftsManager collaborates with StaffRegistry and PatientRegistry to allocate resources efficiently.  
- AuthenticationService interacts with UserInterface and Database to manage user sessions and authentication.  
- Logger interacts with Database to store logs.  

## System Responses
<i> The system decomposition should relate the system architecture to the detailed design,
to identify the role of each component in the higher-level architectural view. Description of
strategy for dealing with errors and exceptional cases (e.g. invalid user input, network or
external system failure) that might arise in the use of the software. For anticipated errors
and exceptions, a summary of how the software will respond in these situations. </i>

### System Decomposition
- User Interface  
    - Role: Manages user interactions, sends requests to backend services.  
    - Error Handling: Validates user input, displays error messages.  
- Staff Registry  
    - Role: Manages staff information and communication.
    - Error Handling: Validates staff data, handles communication errors.  
- Patient Registry  
    - Role: Manages patient records and history.  
    - Error Handling: Ensures data integrity, handles missing or incorrect patient data.  
- Equipment Tracker  
    - Role: Monitors medical equipment availability.  
    - Error Handling: Handles equipment booking conflicts.  
- Shifts Manager  
    - Role: Manages staff shifts and patient assignments.  
    - Error Handling: Ensures optimal staff allocation, handles scheduling conflicts.  
- Inventory Manager  
    - Role: Manages medical supplies and equipment.  
    - Error Handling: Predicts inventory needs, handles order tracking issues.  
- Staff History  
    - Role: Tracks previous and current workplaces of staff.  
    - Error Handling: Validates staff history data, ensures data accuracy.  
- Patient Scheduler   
    - Role: Schedules and prioritizes patient appointments.  
    - Error Handling: Ensures accurate scheduling, handles appointment conflicts.  
- Error Handling Strategy  
    - Invalid User Input: Input validation on frontend and backend. (Invalid credentials - user state remains not logged in. Response error notifying incorrect email or password.)
    - Network Failures: Implement retries, fallback mechanisms.
    - External System Failures: Use circuit breaker patterns for robustness.  

 
