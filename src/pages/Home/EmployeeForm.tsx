// Redux
import { useDispatch } from 'react-redux';
import { employeesActions } from '../../features/slices/employeesSlice';

// React Hooks
import { useState, useRef } from 'react';

// Libraries
// Personal library
import { SelectMenu } from '@leoncik/p14-hrnet-plugin';
// PrimeReact
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { Fieldset } from 'primereact/fieldset';
import { InputNumber } from 'primereact/inputnumber';

// Data
import { states } from '../../data/states';
import { departments } from '../../data/departments';

// Interfaces
import { IStates } from '../../data/states';

function EmployeeForm() {
    // Redux
    const dispatch = useDispatch();

    // Refs
    /* eslint-disable @typescript-eslint/no-explicit-any */
    const firstName: any = useRef();
    const lastName: any = useRef();
    const dateOfBirth = useRef<Calendar>(null);
    const startDate = useRef<Calendar>(null);
    const street: any = useRef();
    const city: any = useRef();
    const state: any = useRef();
    const zipCode: any = useRef();
    const department: any = useRef();
    /* eslint-enable @typescript-eslint/no-explicit-any */

    const [isDialogVisible, setIsDialogVisible] = useState(false);
    const [hoverStyle, setHoverStyle] = useState<boolean>(false);

    /**
     * Creates an array with of all states names from data.
     * @param {Array<IStates>} statesList data file.
     * @returns {string[]}
     */
    const getStateNames = (statesList: Array<IStates>): Array<string> => {
        const statesNames: Array<string> = [];
        statesList.map((state) => statesNames.push(state.name));
        return statesNames;
    };
    /**
     * Creates an array with of all states abbreviation from data.
     * @param {Array<IStates>} statesList data file.
     * @returns {string[]}
     */
    const getStatesAbbreviations = (
        statesList: Array<IStates>
    ): Array<string> => {
        const statesAbbreviations: Array<string> = [];
        statesList.map((state) => statesAbbreviations.push(state.abbreviation));
        return statesAbbreviations;
    };

    /**
     * Saves employee in localStorage on submit.
     * @param {React.FormEvent<HTMLFormElement>} e
     */
    const handleSaveEmployee = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const employee = {
            id: Date.now(),
            firstName: firstName.current.value,
            lastName: lastName.current.value,
            dateOfBirth: dateOfBirth?.current?.getInput().value,
            startDate: startDate?.current?.getInput().value,
            street: street.current.value,
            city: city.current.value,
            state: state.current.value,
            zipCode: zipCode.current.getInput().value,
            department: department.current.value,
        };
        dispatch(employeesActions.saveEmployee(employee));
        // employees.push(employee);
        // localStorage.setItem('employees', JSON.stringify(employees));
    };

    return (
        <div className="form-container flex flex-col items-center pb-4 justify-center bg-green-600">
            <form
                className="flex flex-col justify-center md:w-11/12 lg:w-7/12"
                onSubmit={(e) => {
                    setIsDialogVisible(true);
                    handleSaveEmployee(e);
                }}
            >
                <div className="form-container gap-12 mb-3 mt-3 bg-white p-5 rounded-md flex flex-col md:flex-row md:justify-around">
                    <div className="employee-primary-info">
                        <label htmlFor="firstName">
                            First Name <span className="text-red-600">*</span>
                        </label>
                        <InputText
                            required
                            ref={firstName}
                            id="firstName"
                            className="first-name"
                        ></InputText>

                        <label htmlFor="lastName">
                            Last Name <span className="text-red-600">*</span>
                        </label>
                        <InputText
                            required
                            id="lastName"
                            className="last-name"
                            ref={lastName}
                        ></InputText>

                        <label htmlFor="date-of-birth">Date of Birth</label>
                        <Calendar
                            inputId="date-of-birth"
                            ref={dateOfBirth}
                        ></Calendar>

                        <label htmlFor="start-date">
                            Start Date <span className="text-red-600">*</span>
                        </label>
                        <Calendar
                            required
                            inputId="start-date"
                            className="start-date"
                            ref={startDate}
                        ></Calendar>

                        <label htmlFor="department">Department</label>
                        <SelectMenu
                            mainColor="rgb(34 197 94)"
                            options={departments}
                            id={'department'}
                            inputRef={department}
                        />
                    </div>

                    <div className="employee-secondary-info">
                        <Fieldset className="mt-5" legend="Address">
                            <label htmlFor="city">City</label>
                            <InputText id="city" ref={city}></InputText>

                            <label htmlFor="street">Street</label>
                            <InputText id="street" ref={street}></InputText>

                            <label htmlFor="state">State</label>
                            <SelectMenu
                                mainColor="rgb(34 197 94)"
                                options={getStateNames(states)}
                                optionsValues={getStatesAbbreviations(states)}
                                id={'state'}
                                inputRef={state}
                            />

                            <label htmlFor="zip-code">Zip Code</label>
                            <InputNumber inputId="zip-code" ref={zipCode} />
                        </Fieldset>
                    </div>
                </div>

                <Button
                    className="p-button-raised p-button-success"
                    label="SAVE EMPLOYEE"
                    style={{
                        background: 'white',
                        color: 'rgb(34 197 94)',
                        opacity: hoverStyle ? '0.9' : '1',
                    }}
                    onMouseEnter={() => setHoverStyle(true)}
                    onMouseLeave={() => setHoverStyle(false)}
                />
            </form>
            <Dialog
                visible={isDialogVisible}
                dismissableMask={true}
                draggable={false}
                onHide={() => setIsDialogVisible(false)}
            >
                Employee Created!
            </Dialog>
        </div>
    );
}

export default EmployeeForm;
