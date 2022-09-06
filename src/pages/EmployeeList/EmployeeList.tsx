// Routing
import { Link } from 'react-router-dom';

function EmployeeList() {
    return (
        <div
            id="employee-div"
            className="flex flex-col items-center justify-center bg-green-600 h-screen"
        >
            <h1>Current Employees</h1>
            <table id="employee-table" className="display"></table>
            <Link className="font-bold" to="/">
                Home
            </Link>
        </div>
    );
}

export default EmployeeList;
