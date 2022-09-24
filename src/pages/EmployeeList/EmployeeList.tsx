// React Hooks
import { useState } from 'react';

// Libraries
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { FilterMatchMode } from 'primereact/api';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

// Mocked data
import { mockedEmployees } from '../../__mocks__/mockedEmployees';

function EmployeeList() {
    // TABLE
    const savedEmployees =
        JSON.parse(localStorage.getItem('employees') || '[]') || [];
    const employees = [...savedEmployees, ...mockedEmployees];

    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    });
    const [globalFilterValue, setGlobalFilterValue] = useState('');

    /* eslint-disable @typescript-eslint/no-explicit-any */
    const onGlobalFilterChange = (e: any) => {
        const value = e.target.value;
        const _filters = { ...filters };
        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    };
    /* eslint-enable @typescript-eslint/no-explicit-any */

    // MODAL AND LOCALSTORAGE CLEAR
    const [isDialogVisible, setIsDialogVisible] = useState(false);
    const handleDeleteEmployees = () => {
        localStorage.clear();
        console.log('all clear !');
    };

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

    return (
        <div
            id="employee-div"
            className="flex flex-col items-center justify-center bg-green-600 h-screen"
        >
            <DataTable
                value={employees}
                header={header}
                emptyMessage="No employee found."
                paginator
                rows={5}
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                filters={filters}
            >
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
                style={{ marginTop: '23px' }}
                label="DELETE SAVED EMPLOYEES"
                onClick={() => {
                    setIsDialogVisible(true);
                }}
            />
            <Dialog
                visible={isDialogVisible}
                onHide={() => setIsDialogVisible(false)}
            >
                <div>
                    <p>Are you sure? This will delete all created employees.</p>
                    <div className="mt-4 gap-4 flex items-center justify-center">
                        <Button
                            className="p-button-danger"
                            label="DELETE EMPLOYEES"
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
