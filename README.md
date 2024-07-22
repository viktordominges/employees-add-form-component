# employees-add-form-component

Explanation:
Imports: The code starts by importing the Component class from React and the necessary CSS styles for the component.

EmployeesAddForm Class Component: This class component manages the form state and handles user input for adding new employees.

Constructor and State Initialization: The constructor initializes the component state with name and salary fields set to empty strings.

onValueChange Handler: This method updates the component state when the input values change. It uses computed property names to dynamically set the state key based on the input's name attribute.

onSubmit Handler: This method handles form submission:

It prevents the default form submission behavior.
Validates the input fields to ensure the name is at least 3 characters long and the salary is not empty.
Calls the onAdd prop function passed from the parent component with the name and salary values from the state.
Resets the form fields by setting the state back to empty strings.
Render Method:

The method destructures name and salary from the state for easier access.
Returns JSX for rendering the form with appropriate class names and handlers.
The form includes two input fields for the employee name and salary, each bound to the corresponding state values and handlers.
The submit button triggers the onSubmit handler.
Export: The component is exported as the default export, making it available for import in other files.
