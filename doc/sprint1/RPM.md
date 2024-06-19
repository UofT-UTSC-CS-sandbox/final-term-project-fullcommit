## Release Planning Meeting

<i> The release planning meeting document RPM.md, document the
Release Planning Meeting. This document has to indicate clearly the release goal,
the scope of the project (at least in terms of epics/key features) and the
participants</i>

#### Scope of the Project
(Will have some changes later since the group size went down to three members.)
- Medical Equipment Availability  
Goal: Ensure physicians can check and book the availability of hospital equipment and beds.  
Epic 1: Availability of hospital equipment  
Epic 2: Availability of hospital beds 
- Shifts Manager  
Goal: Enable hospital managers to efficiently manage employee shifts and map patients to doctors.  
Epic 3: Employee shift management  
Epic 4: Patient-to-doctor mapping algorithm  
- Inventory Management  
Goal: Provide inventory managers with predictive analytics and a centralized order management system.  
Epic 5: Predictive analytics for inventory needs  
Epic 6: Centralized order management  
Epic 7: Access to diagnostic test statuses  
- Previous/New Workplaces for Staff  
Goal: Allow physicians to trace the previous workplaces of their patients' doctors.  
Epic 8: Track previous workplaces of doctors
- Patient Scheduler/Categorizer  
Goal: Aid physicians in categorizing and scheduling patients.  
Epic 9: Categorize patients by health complexity  
Epic 10: Automated patient scheduling  

#### Sprints
* Sprint 2 - July 5th
    * Release goal - functioning database, backend (storage, calls) and model (api service).
    * Features to be covered: Medical Equipment Availability, Inventory Management.
    * Participants:
        * Coding: Backend focus subteam and Frontend sub team (finishing any backlog from sprint 1).
        * Testing: Testing api calls with postman / thunderclient.
* Sprint 3 - July 19th
    * Release goal - bridging frontend and backend.
    * Key features - data should propagate when entered from the frontend to be saved in the backend. (Shifts Manager, Patient Scheduler/Categorizer.)
    * Features to be covered: 
    * Key features - retrieval of data should be correct.
    * Participants:
        * Coding: Backend focus subteam and Frontend sub team (finishing any backlog from sprint 1).
        * Testing: Testing api calls with postman / thunderclient.
* Sprint 4 - Aug 2nd
    * At this point, the fullstack app is fully functional. We need to fulfill any missing features we would like to implement. (Previous/New Workplaces for Staff).
    * Participants:
        * Coding team will complete any backlog tasks
        * Presentors will prepare for our in tutorial final demos.
