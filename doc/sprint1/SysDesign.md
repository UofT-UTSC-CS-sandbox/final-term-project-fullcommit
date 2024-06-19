# System Design

## High-level Overview of Classes

### Overview:
<i> We are building a Hospital Management web app. It will use the MERN techstack and an MVC pattern.
</i>

### Modules: 
1. Authentication and Login
2. Users (Patient, Physician)
3. Profile
4. Directories


#### CRC Cards:
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
        <td> </td>
        <td> Patient, Physical </td>
        <td>
            <ul> 
            <li> State: Logged in/out
            <li>Access website, aka. Individuals who are neither should be denied
            </li>
            </ul>
        </td>
    </tr>
    <tr>
        <td> Patient </td>
        <td> User </td>
        <td> </td>
        <td>
            <ul>
            <li> Access physician directory </li>
            <li> Access endpoint </li>
            </ul>
        </td>
    </tr>
    <tr>
        <td> Physican </td>
        <td> User </td>
        <td> </td>
        <td>
            <ul>
            <li> Access physician directory </li>
            <li> Access patient directory  </li>
            </ul>
        </td>
    </tr>
   </tbody>
</table>   

##### Authentication and Login:


## Environment
<i> OS Dependencies </i>
<ul>
<li> cd backend/ </li>
<li> node start </li>
<li> cd frontend </li>
<li> npm start </li>
</ul>

## Component System Architeture: 
<i> Describe the architecture of the system that is the most abstract view of how your system
is divided into components and how those components are interconnected. The
architecture should be described with a diagram showing components and how they are
related (or equivalent in words). Beware of designs based on a large number of
components, they may signal a design that is overly complex. </i>


## System Responses
<i> The system decomposition should relate the system architecture to the detailed design,
to identify the role of each component in the higher-level architectural view. Description of
strategy for dealing with errors and exceptional cases (e.g. invalid user input, network or
external system failure) that might arise in the use of the software. For anticipated errors
and exceptions, a summary of how the software will respond in these situations. </i>

### Errors and Responses:
* Invalid credentials - user state remains not logged in. Response error notifying incorrect email or password.


 
