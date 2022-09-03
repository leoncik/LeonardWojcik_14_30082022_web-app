// Routing
import { Link } from 'react-router-dom';

// Libraries
import { SelectMenu } from '@leoncik/p14-hrnet-plugin';

function Home() {
    return (
        <div className="App">
            <p>Home page.</p>
            <SelectMenu label="I am a test :-)" />
            <Link to="/employee-list">To the employee list page</Link>
        </div>
    );
}

export default Home;
