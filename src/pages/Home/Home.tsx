// Routing
import { Link } from 'react-router-dom';

function Home() {

    return (
      <div className="App">
        <p>Home page.</p>
        <Link to="/employee-list">To the employee list page</Link>
      </div>
    )
  }
  
  export default Home
  