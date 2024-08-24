# Impaction/FullCommit
 > _Note:_ This document is meant to be written during (or shortly after) your initial planning meeting.     
 > It does not really make sense for you to edit this document much (if at all) while working on the project - Instead, at the end of the planning phase, you can refer back to this document and decide which parts of your plan you are happy with and which parts you would like to change.


## Iteration 04

 * Start date: July 23rd, 2024
 * End date: August 2nd, 2024

## Process

_This entire section is optional. Note that you will have to fill it out and more for the next 3 deliverables so it's good to start soon and get feedback._ 

#### Roles & responsibilities

Describe the different roles on the team and the responsibilities associated with each role.
* Feature developers - Xiaoran, Catherine, Darren
* UI touchups - Xiaoran, Catherine, Darren
* Jira management - Darren
* Docs: Xiaoran, Darren

#### Events

Describe meetings (and other events) you are planning to have:
* Written standups, spaced out, informing progress and blockers
* Voice call meetings twice per week to finalize document submission and demo of features

*What's the purpose of each meeting?*

The purpose of each meeting is to discuss what was done since the last meeting and to revise any roles and responsibilities as needed.

#### Meeting Descriptions

1. **STANDUP JULY 29**
   - **Purpose**: Decide the plan for the sprint, set priorities, assign tasks, and outline goals.
   - **Participants**: All three team members.
   - Online

2. **STANDUP JULY 30**
   - **Purpose**: Discuss progress made so far, identify any blockers, and adjust the plan as necessary.
   - **Participants**: All three team members.
   - Online

3. **STANDUP July 31**
   - **Purpose**: Review completed tasks, update on ongoing tasks, and address any issues or changes needed.
   - **Participants**: All three team members.
   - Online

4. **STANDUP August 1**
   - **Purpose**: Assess progress towards sprint goals, discuss any new blockers, and ensure alignment on remaining tasks.
   - **Participants**: All three team members.
   - Online

5. **STANDUP August 2**
   - **Purpose**: Final review of sprint progress, prepare for the review meeting, and ensure all tasks are on track for completion.
   - **Participants**: All three team members.
   - Online

6. **Review Meeting August 2**
   - **Purpose**: Conduct a final review of the sprint, demonstrate completed features, collect feedback, and finalize documentation for submission.
   - **Participants**: All three team members.
   - Online

#### Artifacts

<!-- List/describe the artifacts you will produce in order to organize your team.

* Artifacts can be To-do lists, Task boards, schedule(s), etc.
* We want to understand:
  * How do you keep track of what needs to get done?
  * How do you prioritize tasks?
  * How do tasks get assigned to team members? -->

1. **To-do Lists**
   - **Purpose**: Track individual and team tasks.
   - **Usage**: Every team member maintains a to-do list that includes tasks assigned to them. These lists are reviewed during standups to ensure progress and address any blockers.
   - **Details**: Tasks are broken down into manageable steps with deadlines and priority levels (High, Medium, Low).

2. **Task Boards**
   - **Purpose**: Visualize tasks and their current status (To-do, In Progress, Done).
   - **Usage**: A shared digital task board (e.g., jira) is used by the team to monitor and update task statuses in real-time.
   - **Details**: Tasks are created and updated to reflect their current status. Each task card contains a description, assignee, due date, and any relevant comments or attachments.

3. **Meeting Notes and Action Items**
   - **Purpose**: Document discussions, decisions, and next steps from meetings.
   - **Usage**: Notes are taken during each meeting to capture key points, decisions made, and action items. These notes are shared with the team and stored for future reference.
   - **Details**: Includes meeting agendas, summaries of discussions, assigned action items with due dates, and any follow-up needed. Action items are tracked until completion.

These artifacts collectively help the team stay organized, prioritize effectively, and ensure clear communication and accountability.





## Product

_This entire section is mandatory._

#### Goals and tasks
* Describe your goals for this iteration and the tasks that you will have to complete in order to achieve these goals.
* Feel free (but not obligated) to specify some/all tasks as user stories.

**Goals:**
1. Implement the log in feature
2. Touch up the UI for Navbar and Pages
3. Remove non-existent Navbar items and make the it grow horizontally
4. Ensure all features are dynamic, instead of operating with hardcoded data
5. Implement audio upload, which parses the text/transcription from the audio files 
6. Develop page where uploaded files can be viewed
7. Ensure all components are integrated and functioning correctly.

**Tasks:**
1. **Login Feature**
   * User Story: As a doctor, I want to log into the app using my credentials, so that I can access patient appointments and related documents shared by other physicians
     - The login page should have fields for entering a username and password.
     - Displays feedback for incorrect login attempts.
     - On success, user should be directed to a page on the app
     - Implement outcome selection for each appointment (Diagnosed/Undiagnosed).

2. **Appointment Details Page**
   * User Story: As a doctor, I want to view the details of a specific appointment, including the patient’s name, date of appointment, and a list of related documents, so that I can review the appointment history and access necessary files for diagnosis or consultation.
     - Should display patient information, appointment date, and diagnosis.
     - The page should list all files uploaded with the appointment, each with a clickable link to view the document.
     - Files should be displayed in an organized manner, either in a vertical list or grid.

#### Artifacts

List/describe the artifacts you will produce in order to present your project idea.

* Artifacts can be text, code, images, videos, interactive mock-ups and/or any other useful artifact you can think of.
* Make sure to explain the purpose of each artifact (i.e. Why is it on your to-do list? Why is it useful for your team?)
* Be concise, yet precise. For example: "Build the website" is not precise at all, but "Build a static home page and upload it somewhere, so that it is publicly accessible" is much clearer.

**Our Artifacts:**
1. **Code for Features:**
   * **Appointment Details:**
     - Develop a page that displays all documents uploaded for a particular appointment
     - Enable preview functionality for uploaded files
     - Display Appointment information (date, patient, etc)
   * **Search Appointments:**
     - Develop the search page UI.
     - Integrate with the backend database.
     - Integrate with Appointment Details Page
   * **Login Page:**
     - Implement page for logging users into the application
     - Display form for entering username/passowrd 
   * **Document Visibility for Appointments:**
     - Develop the UI to display related documents for appointments.
   * **Integration:**
     - Ensure all features are integrated into the main application.
     - Setup initial routing so all features are accessible.

2. **Documentation:**
   * Write comprehensive documentation for all features.
   * This includes usage instructions, code explanations, and setup guides.
   * Finalize documentation for submission to ensure clarity and completeness.

3. **Presentations:**
   * Prepare a demo presentation to showcase the login feature and Appointment Details page, as well as show off our updated UI.

By producing these artifacts, we ensure that the project is well-documented, functional, and easy to understand.
