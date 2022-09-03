// Routing
import { Link } from 'react-router-dom';

function EmployeeList() {

    return (
      <div className="App">
        <p>Employee list page.</p>
        <Link to="/">To the home page</Link>
      </div>
    )
  }
  
  export default EmployeeList
  