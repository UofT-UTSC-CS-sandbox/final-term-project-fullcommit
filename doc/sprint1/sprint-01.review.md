# YOUR PRODUCT/TEAM NAME

 > _Note:_ This document is meant to be written during (or shortly after) your review meeting, which should happen fairly close to the due date.      
 >      
 > _Suggestion:_ Have your review meeting a day or two before the due date. This way you will have some time to go over (and edit) this document, and all team members should have a chance to make their contribution.


## Iteration XX - Review & Retrospect

 * When: June 16 2024
 * Where: Online

## Process - Reflection

(Optional) Short introduction:  
In this iteration, our primary focus was on integrating directories with filter functionalities and developing detailed profile pages for both physicians and patients. This addition aims to enhance the system’s usability by providing comprehensive and easily accessible information for users. Our group originally had 6 members, but on Jun 13 one teammate dropped the course and on Jun 16 two more teammates dropped the course, which lead to some severe problems we need to solve.

#### Decisions that turned out well

List process-related (i.e. team organization) decisions that, in retrospect, turned out to be successful.

 * 2 - 4 decisions.
 * Ordered from most to least important.
 * Explain why (i.e. give a supporting argument) you consider a decision to be successful.
 * Feel free to refer/link to process artifact(s).  

##### Answer:

 * With how we divided the project into features, we were able to successfully focus on specific parts of the project and produced visible features for our demo.
 * By choosing to have the group focus on frontend (at the time, 4 members working on it and 2 in backend/interconnection), we were able to share common resources and chose a frontend framework that reduces redundant coding (of basic components like navbar, cards, etc.).
 * User-Centered Design Approach: This helped us gather valuable insights, leading to features that address user needs. User-centered design influenced the design of the profile pages, making them more intuitive and functional. For example, physicians need to have the authority to edit patients’ notes to record essential information, while having the notes stored and updated immediately in the database.

#### Decisions that did not turn out as well as we hoped

List process-related (i.e. team organization) decisions that, in retrospect, were not as successful as you thought they would be.
 * 2 - 4 decisions.
 * Ordered from most to least important.
 * Feel free to refer/link to process artifact(s).

##### Answer:
* Management of Roles and Responsibilities: There was some confusion regarding roles, which led to duplicated efforts and inefficiencies. Also, since three teammates dropped out of the course within four days, which left some undone or unrecognized work, our team met great difficulty in clarifying and picking up resposibilities.
* Delayed Testing Phase: Testing was delayed due to an underestimation of the complexity involved in integrating new features. This resulted in a tighter timeline for bug fixes and refinements.
* Github / version control organization could have been better discussed. Members accidentally pushed to master branch instead of separate branch. Not enough discussion of pull requests, some confusion on including packages (i.e. node_modules rather than using .gitignore).
* Filling out goal tracking/jira tickets alongside work to have a better grasp of progress.


#### Planned changes

List any process-related changes you are planning to make (if there are any)

 * Ordered from most to least important.
 * Explain why you are making a change.

##### Answer:
* Review number/freequency of meetings to ensure more communication, including policies on goal tracking and version control.
* We plan to define roles more clearly to avoid overlapping responsibilities and improve efficiency. 
* Potentially set up guards on pushing to master.
* To avoid delays, we will integrate testing earlier in the development cycle and conduct it continuously.


## Product - Review

#### Goals and/or tasks that were met/completed:

 * From most to least important.
 * Refer/link to artifact(s) that show that a goal/task was met/completed.
 * If a goal/task was not part of the original iteration plan, please mention it.

##### Answer:
 * Patient Directory with Filter: successfully implemented a searchable and filterable patient directory, allowing users to easily find patient information based on various criteria.

 * Physician and Patient Profile Pages: Developed detailed profile pages for both physicians and patients that include comprehensive information and relevant notes that can be updated in real-time.


#### Goals and/or tasks that were planned but not met/completed:

 * From most to least important.
 * For each goal/task, explain why it was not met/completed.      
   e.g. Did you change your mind, or did you just not get to it yet?

##### Answer:
 * Database implementation: The teammate who was in charge of the database had to drop the course, so the current one was temporarily created by us while implementing features. We need to refine and reorganize it in the future.
 * Login feature: The situation is similar to our database implementation.

## Meeting Highlights

Going into the next iteration, our main insights are:

 * 2 - 4 items
 * Short (no more than one short paragraph per item)
 * High-level concepts that should guide your work for the next iteration.
 * These concepts should help you decide on where to focus your efforts.
 * Can be related to product and/or process.

##### Answer:

 * Strengthening Team Collaboration: Improved collaboration practices will be adopted to enhance communication and efficiency within the team. Regular check-ins and clear role definitions will help in avoiding past issues of role overlap and inefficiency.
 * Prioritizing Quality Assurance: Emphasis on early and continuous testing will be a key focus to ensure high-quality releases.
 * Scalability Considerations: Future iterations will consider scalability aspects to handle increased data loads and user interactions as the system grows. This will involve reviewing and optimizing current system architecture and database design.