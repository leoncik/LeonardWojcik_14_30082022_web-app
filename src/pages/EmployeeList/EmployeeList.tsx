// React Hooks
import { useEffect, useRef, useState } from 'react';

// Libraries
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { FilterMatchMode } from 'primereact/api';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Toast } from 'primereact/toast';

// Interfaces
import { IEmployees } from '../../__mocks__/mockedEmployees';

// Mocked data
// import { mockedEmployees } from '../../__mocks__/mockedEmployees';

function EmployeeList() {
    // TABLE
    const savedEmployees =
        JSON.parse(localStorage.getItem('employees') || '[]') || [];
    // const employees = [...savedEmployees, ...mockedEmployees];
    const employees = savedEmployees;

    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    });
    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const [selectedEmployees, setSelectedEmployees] =
        useState<Array<IEmployees> | null>(null);
    const [isDeleteButtonActive, setIsDeleteButtonActive] = useState(false);

    /* eslint-disable @typescript-eslint/no-explicit-any */
    const onGlobalFilterChange = (e: any) => {
        const value = e.target.value;
        const _filters = { ...filters };
        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    };
    /* eslint-enable @typescript-eslint/no-explicit-any */

    // DELETING EMPLOYEE
    const [isDialogVisible, setIsDialogVisible] = useState(false);
    const handleDeleteEmployees = () => {
        selectedEmployees?.map((selectedEmployee: IEmployees) => {
            employees?.map((employee: IEmployees, index: number) => {
                if (selectedEmployee.id === employee.id) {
                    employees.splice(index, 1);
                }
            });
            localStorage.setItem('employees', JSON.stringify(employees));
            toast?.current?.show({
                severity: 'success',
                summary:
                    selectedEmployees.length === 1
                        ? 'Selected employee deleted.'
                        : 'Selected employees deleted.',
                life: 4000,
            });
            // Reset selection in order to set delete button style to disabled.
            setSelectedEmployees([]);
        });
    };

    useEffect(() => {
        selectedEmployees !== null && selectedEmployees.length > 0
            ? setIsDeleteButtonActive(true)
            : setIsDeleteButtonActive(false);
    }, [selectedEmployees]);

    const renderHeader = () => {
        return (
            <div className="flex justify-between items-center">
                <h1 className="m-0">Current Employees</h1>
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText
                        value={globalFilterValue}
                        onChange={onGlobalFilterChange}
                        placeholder="Keyword Search"
                    />
                </span>
            </div>
        );
    };
    const header = renderHeader();
    const toast = useRef<Toast>(null);

    return (
        <div
            id="employee-div"
            className="flex flex-col items-center justify-center bg-green-600 h-screen"
        >
            <Toast ref={toast} position="bottom-right" />

            <DataTable
                value={employees}
                header={header}
                emptyMessage="No employee found."
                paginator
                rows={5}
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                filters={filters}
                selection={selectedEmployees}
                onSelectionChange={(e) => setSelectedEmployees(e.value)}
                responsiveLayout="scroll"
            >
                <Column
                    selectionMode="multiple"
                    headerStyle={{ width: '3em' }}
                ></Column>
                <Column
                    field="firstName"
                    header="First Name"
                    sortable={true}
                ></Column>
                <Column
                    field="lastName"
                    header="Last Name"
                    sortable={true}
                ></Column>
                <Column
                    field="startDate"
                    header="Start Date"
                    sortable={true}
                ></Column>
                <Column
                    field="department"
                    header="Department"
                    sortable={true}
                ></Column>
                <Column
                    field="dateOfBirth"
                    header="Date of Birth"
                    sortable={true}
                ></Column>
                <Column field="street" header="Street" sortable={true}></Column>
                <Column field="city" header="City" sortable={true}></Column>
                <Column field="state" header="State" sortable={true}></Column>
                <Column
                    field="zipCode"
                    header="Zip Code"
                    sortable={true}
                ></Column>
            </DataTable>

            <Button
                className="p-button-danger"
                style={{
                    marginTop: '23px',
                    opacity: isDeleteButtonActive ? '1' : '0.5',
                    pointerEvents: isDeleteButtonActive ? 'auto' : 'none',
                }}
                label={
                    selectedEmployees !== null && selectedEmployees.length > 1
                        ? 'DELETE SELECTED EMPLOYEES'
                        : 'DELETE SELECTED EMPLOYEE'
                }
                onClick={() => {
                    setIsDialogVisible(true);
                }}
            />
            <Dialog
                visible={isDialogVisible}
                onHide={() => setIsDialogVisible(false)}
            >
                <div>
                    <p>
                        {selectedEmployees !== null &&
                        selectedEmployees.length > 1
                            ? 'Are you sure? This will delete all the selected employees.'
                            : 'Are you sure? This will delete the selected employee.'}
                    </p>
                    <div className="mt-4 gap-4 flex items-center justify-center">
                        <Button
                            className="p-button-danger"
                            label={
                                selectedEmployees !== null &&
                                selectedEmployees.length > 1
                                    ? 'DELETE EMPLOYEES'
                                    : 'DELETE EMPLOYEE'
                            }
                            onClick={() => {
                                setIsDialogVisible(false);
                                handleDeleteEmployees();
                            }}
                        />
                        <Button
                            className="p-button-secondary"
                            label="CANCEL"
                            onClick={() => {
                                setIsDialogVisible(false);
                            }}
                        />
                    </div>
                </div>
            </Dialog>
        </div>
    );
}

export default EmployeeList;
