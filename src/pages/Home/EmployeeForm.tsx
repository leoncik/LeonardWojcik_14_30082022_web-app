// Libraries
// Final version. Not currently working
// import { SelectMenu } from '@leoncik/p14-plugin-test';
// Test version. Working.
import { SelectMenu } from '@leoncik/p14-plugin-test';

function EmployeeForm() {
    const handleSaveEmployee = () => {
        console.log('Employee saved.');
    };

    return (
        <div className="form-container flex flex-col items-center justify-center bg-green-600">
            <form className="mb-3">
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" />

                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" />

                <label htmlFor="date-of-birth">Date of Birth</label>
                <input id="date-of-birth" type="text" />

                <label htmlFor="start-date">Start Date</label>
                <input id="start-date" type="text" />

                <fieldset className="address">
                    <legend>Address</legend>

                    <label htmlFor="street">Street</label>
                    <input id="street" type="text" />

                    <label htmlFor="city">City</label>
                    <input id="city" type="text" />

                    <label htmlFor="state">State</label>
                    <SelectMenu
                        options={[
                            'First option',
                            'Second option',
                            'Last option',
                        ]}
                        label="Alaska"
                    />

                    <label htmlFor="zip-code">Zip Code</label>
                    <input id="zip-code" type="number" />
                </fieldset>

                <label htmlFor="department">Department</label>
                <select name="department" id="department">
                    <option>Sales</option>
                    <option>Marketing</option>
                    <option>Engineering</option>
                    <option>Human Resources</option>
                    <option>Legal</option>
                </select>
            </form>
            <button
                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                onClick={handleSaveEmployee}
            >
                Save
            </button>
        </div>
    );
}

export default EmployeeForm;
