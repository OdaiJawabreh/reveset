# Dynamic Signup Form Application

  

This is a responsive application built with **Next.js** and **TypeScript**, allowing users to create and add their custom components based on dynamic JSON data. The form includes validation using **React Hook Form** and is styled using **Material UI**.

  

## Features

  

1.  **Dynamic Form Rendering**: Form fields like Full Name, Email, and Gender are dynamically generated based on JSON data.

2.  **Field Types**: Support for different field types (Text, List, Radio buttons). If the `fieldType` in the JSON changes, the component adjusts accordingly.

3.  **Form Validation**: Validation is handled using **React Hook Form**, ensuring required fields and other rules like minimum/maximum length.

4.  **Customizable**: The form can be updated by changing the JSON data. Labels, default values, field types, and validation rules are all modifiable via the JSON configuration.

5.  **Responsive Design**: Uses **Material UI** to provide a responsive and visually appealing design.

6.  **Data Persistence**: The form data can be persisted using local storage or a custom JSON file.

  

## Technologies Used

  

- Next.js

- TypeScript

- React Hook Form

- Material UI

  

## How to Run the Project

  

1. Clone the repository:

git clone <https://github.com/OdaiJawabreh/reveset>

2. Install dependencies:

npm install

3. Start the development server:

npm run dev

4. Open your browser and navigate to http://localhost:3000.

  

## JSON Configuration

The form fields are generated based on the JSON data located in data.json. You can modify this file to add or change the fields. Each field can specify properties such as name, fieldType, defaultValue, required, etc.

  

Example JSON Structure

```bash
[

{

"id": 1,

"name": "fullName",

"fieldType": "TEXT",

"defaultValue": "",

"required": true,

"minLength": 3,

"maxLength": 50

},

{

"id": 2,

"name": "email",

"fieldType": "TEXT",

"defaultValue": "",

"required": true

},

{

"id": 3,

"name": "gender",

"fieldType": "RADIO",

"defaultValue": "Male",

"listOfValues1": ["Male", "Female", "Other"],

"required": true

}

]

```