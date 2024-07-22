import {Component} from 'react'; // Import the Component class from React
import './employees-add-form.css'; // Import CSS styles for the EmployeesAddForm component

// Define the EmployeesAddForm class component
class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        // Initialize component state with name and salary fields
        this.state = {
            name: '',
            salary: ''
        }
    }

    // Handler to update state when input values change
    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value // Dynamically set state key based on input name
        })
    }

    // Handler for form submission
    onSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        // Validate input: name must be at least 3 characters, salary must not be empty
        if (this.state.name.length < 3 || !this.state.salary) return;
        // Call the onAdd prop function with name and salary from state
        this.props.onAdd(this.state.name, this.state.salary);
        // Reset the form fields
        this.setState({
            name: '',
            salary: ''
        })
    }
    
    render() {
        // Destructure name and salary from state for easier access
        const {name, salary} = this.state;

        return (
            <div className="app-add-form">
                <h3>Add a new employee</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}> {/* Attach onSubmit handler */}
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="New employee name"
                        name="name" // Set input name to "name" for state mapping
                        value={name} // Bind input value to state
                        onChange={this.onValueChange}/> {/* Attach onChange handler */}
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="New employee salary"
                        name="salary" // Set input name to "salary" for state mapping
                        value={salary} // Bind input value to state
                        onChange={this.onValueChange}/> {/* Attach onChange handler */}
                    <button type="submit"
                            className="btn btn-outline-light">
                                Add {/* Button to submit form */}
                    </button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm; // Export the EmployeesAddForm component as the default export
