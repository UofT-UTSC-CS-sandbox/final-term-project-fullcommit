# Impaction/FullCommit
 > _Note:_ This document is meant to be written during (or shortly after) your initial planning meeting.     
 > It does not really make sense for you to edit this document much (if at all) while working on the project - Instead, at the end of the planning phase, you can refer back to this document and decide which parts of your plan you are happy with and which parts you would like to change.


## Iteration 02

 * Start date: June 25th, 2024
 * End date: July 5th, 2024

## Process

_This entire section is optional. Note that you will have to fill it out and more for the next 3 deliverables so it's good to start soon and get feedback._ 

#### Roles & responsibilities

Describe the different roles on the team and the responsibilities associated with each role.
* Feature developers - Xiaoran, Catherine
* Database - Daren

#### Events

Describe meetings (and other events) you are planning to have:
* Written standups, spaced out, informing progress and blockers
* Voice call meetings twice per week to finalize document submission and demo of features

*What's the purpose of each meeting?*

The purpose of each meeting is to discuss what was done since the last meeting and to revise any roles and responsibilities as needed.

#### Meeting Descriptions

1. **STANDUP JUNE 25**
   - **Purpose**: Decide the plan for the sprint, set priorities, assign tasks, and outline goals.
   - **Participants**: All three team members.

2. **STANDUP JUNE 28**
   - **Purpose**: Discuss progress made so far, identify any blockers, and adjust the plan as necessary.
   - **Participants**: All three team members.

3. **STANDUP JULY 3**
   - **Purpose**: Review completed tasks, update on ongoing tasks, and address any issues or changes needed.
   - **Participants**: All three team members.

4. **STANDUP JULY 4**
   - **Purpose**: Assess progress towards sprint goals, discuss any new blockers, and ensure alignment on remaining tasks.
   - **Participants**: All three team members.

5. **STANDUP JULY 5**
   - **Purpose**: Final review of sprint progress, prepare for the review meeting, and ensure all tasks are on track for completion.
   - **Participants**: All three team members.

6. **Review Meeting JULY 5**
   - **Purpose**: Conduct a final review of the sprint, demonstrate completed features, collect feedback, and finalize documentation for submission.
   - **Participants**: All three team members.

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

4. **Prioritization Matrix**
   - **Purpose**: Determine the priority of tasks based on impact and urgency.
   - **Usage**: A prioritization matrix is used during planning meetings to evaluate and rank tasks. High-impact, high-urgency tasks are given top priority.
   - **Details**: Tasks are plotted on a matrix to visualize their importance and urgency. This helps in making informed decisions about which tasks to focus on first.

These artifacts collectively help the team stay organized, prioritize effectively, and ensure clear communication and accountability.





## Product

_This entire section is mandatory._

#### Goals and tasks
* Describe your goals for this iteration and the tasks that you will have to complete in order to achieve these goals.
* Feel free (but not obligated) to specify some/all tasks as user stories.

**Goals:**
1. Develop a functional Physician Directory.
2. Create a Bed Availability management page.
3. Create an Equipment Availability management page.
4. Ensure all components are integrated and functioning correctly.
5. Refine our database for Patient, Physician, EquipmentTracker, ShiftManager parts(optional).

**Tasks:**
1. **Physician Directory**
   * User Story: As a user, I want to search for physicians by name, so I can quickly find a specific doctor.
     - Implement search functionality.
     - Develop a filter form to filter physicians by role and age.
     - Display physician details in a card format.
2. **Bed Availability**
   * User Story: As a physician, I want to know if hospital beds are available so I can book them or send a patient to another hospital.
     - Create a mock data file for beds.
     - Implement functionality to display bed availability.
     - Develop booking and releasing functionality for beds.
3. **Equipment Availability**
   * User Story: As a physician, I want to know when hospital equipment is available so I can book them.
     - Create a mock data file for equipment.
     - Implement functionality to display equipment availability.
     - Develop booking and releasing functionality for equipment.
4. **Integration and Testing**
   * Ensure all pages are integrated into the main application.
   * Test all functionalities to ensure they work as expected.
   * Fix any bugs or issues found during testing.
5. **Database Refinement**
   * Refine database schema and relationships for Patient, Physician, EquipmentTracker, and ShiftManager(optional).
   * Ensure database normalization and integrity.
   * Migrate existing data to the new schema if necessary.

#### Artifacts

List/describe the artifacts you will produce in order to present your project idea.

* Artifacts can be text, code, images, videos, interactive mock-ups and/or any other useful artifact you can think of.
* Make sure to explain the purpose of each artifact (i.e. Why is it on your to-do list? Why is it useful for your team?)
* Be concise, yet precise. For example: "Build the website" is not precise at all, but "Build a static home page and upload it somewhere, so that it is publicly accessible" is much clearer.

**Our Artifacts:**
1. **Code for Features:**
   * **Physician Directory:**
     - Implement search and filter functionality.
     - Display physician information in a card layout.
   * **Bed Availability:**
     - Develop a page to display bed availability status.
     - Implement booking and releasing functionality for beds.
   * **Equipment Availability:**
     - Develop a page to display equipment availability status.
     - Implement booking and releasing functionality for equipment.
   * **Integration:**
     - Ensure all features are integrated into the main application.
     - Setup initial routing so all features are accessible.

2. **Mock Data:**
   * Hardcode sample data for patients, physicians, beds, and equipment.
   * This data will be used for initial testing and demonstration of features.
   * Will be replaced with database data if available.

3. **Documentation:**
   * Write comprehensive documentation for all features.
   * This includes usage instructions, code explanations, and setup guides.
   * Finalize documentation for submission to ensure clarity and completeness.

5. **Presentations:**
   * Prepare a demo presentation to showcase the features and functionality of the application to our TA.

By producing these artifacts, we ensure that the project is well-documented, functional, and easy to understand.
