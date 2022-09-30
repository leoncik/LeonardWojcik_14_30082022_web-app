// Routing
import { Link } from 'react-router-dom';

function Error404Message() {
    return (
        <>
            <p className="text-7xl">404 PAGE NOT FOUND</p>
            <p className="text-2xl mt-2">
                Unfortunately, this page does not exist.
            </p>
            <Link to="/" className="text-l text-white underline mt-6">
                Go back to the home page
            </Link>
        </>
    );
}

export default Error404Message;
