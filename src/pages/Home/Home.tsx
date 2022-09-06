// Routing
import { Link } from 'react-router-dom';

// Libraries
// Final version. Not currently working
// import { SelectMenu } from '@leoncik/p14-plugin-test';
// Test version. Working.
import { SelectMenu } from '@leoncik/p14-plugin-test';

function Home() {
    return (
        <div className="App">
            <p>Home page.</p>
            <SelectMenu
                options={['First option', 'Second option', 'Last option']}
                label="I am a test :-)"
            />
            <Link to="/employee-list">To the employee list page</Link>
        </div>
    );
}

export default Home;
