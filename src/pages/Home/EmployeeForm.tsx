// React Hooks
import { useState, useRef } from 'react';

// Libraries
// Final version.
import { SelectMenu } from '@leoncik/p14-plugin-test';
// Test version.
// import { SelectMenu } from '@leoncik/p14-hrnet-plugin';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { Fieldset } from 'primereact/fieldset';
import { InputNumber } from 'primereact/inputnumber';

// Data
import { states } from '../../data/states';
import { departments } from '../../data/departments';

function EmployeeForm() {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    const firstName: any = useRef();
    const lastName: any = useRef();
    const dateOfBirth: any = useRef();
    const startDate: any = useRef();
    const street: any = useRef();
    const city: any = useRef();
    const state: any = useRef();
    const zipCode: any = useRef();
    const department: any = useRef();
    /* eslint-enable @typescript-eslint/no-explicit-any */

    const [isDialogVisible, setIsDialogVisible] = useState(false);

    const getStateNames = (
        statesList: Array<{ name: string; abbreviation: string }>
    ) => {
        const statesNames: Array<string> = [];
        statesList.map((state) => statesNames.push(state.name));
        return statesNames;
    };

    const handleSaveEmployee = () => {
        console.log('Employee saved.');
        console.log(`First name :${firstName.current.value}`);
        console.log(`Last name :${lastName.current.value}`);
        console.log(`Birth date :${dateOfBirth.current.getInput().value}`);
        console.log(`Start date :${startDate.current.getInput().value}`);
        console.log(`Street :${street.current.value}`);
        console.log(`City :${city.current.value}`);
        console.log(`State :${state.current.value}`);
        console.log(`Zip code :${zipCode.current.getInput().value}`);
        console.log(`Department :${department.current.value}`);
    };

    return (
        <div className="form-container flex flex-col items-center pb-4 justify-center bg-green-600">
            <form className="mb-3 mt-3 bg-white p-5 rounded-md">
                <label htmlFor="firstName">First Name</label>
                <InputText ref={firstName} id="firstName"></InputText>

                <label htmlFor="lastName">Last Name</label>
                <InputText id="lastName" ref={lastName}></InputText>

                <label htmlFor="date-of-birth">Date of Birth</label>
                <Calendar id="date-of-birth" ref={dateOfBirth}></Calendar>

                <label htmlFor="start-date">Start Date</label>
                <Calendar id="start-date" ref={startDate}></Calendar>

                <Fieldset className="mt-5" legend="Address">
                    <label htmlFor="street">Street</label>
                    <InputText id="street" ref={street}></InputText>

                    <label htmlFor="city">City</label>
                    <InputText id="city" ref={city}></InputText>

                    <label htmlFor="state">State</label>
                    <SelectMenu
                        options={getStateNames(states)}
                        label="Alaska"
                        id={'state'}
                        inputRef={state}
                    />

                    <label htmlFor="zip-code">Zip Code</label>
                    <InputNumber inputId="zip-code" ref={zipCode} />
                </Fieldset>

                <label htmlFor="department">Department</label>
                <SelectMenu
                    options={departments}
                    label="Sales"
                    id={'department'}
                    inputRef={department}
                />
            </form>
            <Dialog
                visible={isDialogVisible}
                onHide={() => setIsDialogVisible(false)}
            >
                Employee Created!
            </Dialog>
            <Button
                label="Save"
                onClick={() => {
                    setIsDialogVisible(true);
                    handleSaveEmployee();
                }}
            />
        </div>
    );
}

export default EmployeeForm;
