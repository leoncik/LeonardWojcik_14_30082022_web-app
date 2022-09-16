// React Hooks
import { useState } from 'react';

// Routing
import { Link } from 'react-router-dom';

// Libraries
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { FilterMatchMode } from 'primereact/api';

function EmployeeList() {
    const mockedEmployees = [
        {
            firstName: 'Pierre',
            lastName: 'Dac',
            startDate: 'Today',
            department: 'Writings',
            dateOfBirth: 'Long ago',
            street: '11 Rue Pierre Arnaud',
            city: 'Paris',
            state: 'Okay',
            zipCode: 1829,
        },
        {
            firstName: 'Francis',
            lastName: 'Blanche',
            startDate: '12/12/1952',
            department: 'Writings',
            dateOfBirth: '11/11/1911',
            street: '44 Rue Napoli',
            city: 'Rome',
            state: 'Melting',
            zipCode: 9,
        },
        {
            firstName: 'Matt',
            lastName: 'Moissa',
            startDate: 'Tomorrow',
            department: 'Law',
            dateOfBirth: '11/11/1111',
            street: '11 detctive street',
            city: 'Tokyo',
            state: 'Investigating',
            zipCode: 18119,
        },
        {
            firstName: 'Aa',
            lastName: 'Bb',
            startDate: 'Tomorrow',
            department: 'Law',
            dateOfBirth: '11/11/1111',
            street: '11 detctive street',
            city: 'Tokyo',
            state: 'Investigating',
            zipCode: 18119,
        },
        {
            firstName: 'Cc',
            lastName: 'Dd',
            startDate: 'Tomorrow',
            department: 'Law',
            dateOfBirth: '11/11/1111',
            street: '11 detctive street',
            city: 'Tokyo',
            state: 'Investigating',
            zipCode: 18119,
        },
        {
            firstName: 'Ee',
            lastName: 'Ff',
            startDate: 'Tomorrow',
            department: 'Law',
            dateOfBirth: '11/11/1111',
            street: '11 detctive street',
            city: 'Tokyo',
            state: 'Investigating',
            zipCode: 18119,
        },
        {
            firstName: 'Gg',
            lastName: 'Hh',
            startDate: 'Tomorrow',
            department: 'Law',
            dateOfBirth: '11/11/1111',
            street: '11 detctive street',
            city: 'Tokyo',
            state: 'Investigating',
            zipCode: 18119,
        },
        {
            firstName: 'Ii',
            lastName: 'Jj',
            startDate: 'Tomorrow',
            department: 'Law',
            dateOfBirth: '11/11/1111',
            street: '11 detctive street',
            city: 'Tokyo',
            state: 'Investigating',
            zipCode: 18119,
        },
        {
            firstName: 'Kk',
            lastName: 'Ll',
            startDate: 'Tomorrow',
            department: 'Law',
            dateOfBirth: '11/11/1111',
            street: '11 detctive street',
            city: 'Tokyo',
            state: 'Investigating',
            zipCode: 18119,
        },
        {
            firstName: 'Mm',
            lastName: 'Nn',
            startDate: 'Tomorrow',
            department: 'Law',
            dateOfBirth: '11/11/1111',
            street: '11 detctive street',
            city: 'Tokyo',
            state: 'Investigating',
            zipCode: 18119,
        },
    ];

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
                value={mockedEmployees}
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
            <table id="employee-table" className="display"></table>
            <Link className="font-bold" to="/">
                Home
            </Link>
        </div>
    );
}

export default EmployeeList;
