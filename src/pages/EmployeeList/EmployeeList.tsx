// Routing
import { Link } from 'react-router-dom';

// Libraries
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

function EmployeeList() {
    const products = ['a', 'b', 'c', 'd'];

    return (
        <div
            id="employee-div"
            className="flex flex-col items-center justify-center bg-green-600 h-screen"
        >
            <h1>Current Employees</h1>
            <DataTable value={products}>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
            <table id="employee-table" className="display"></table>
            <Link className="font-bold" to="/">
                Home
            </Link>
        </div>
    );
}

export default EmployeeList;
