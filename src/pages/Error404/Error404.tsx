// Page components
import Error404Message from '../../components/Error404Message/Error404Message';

function Error404() {
    return (
        <div className="error-page-container h-[80vh] flex flex-col items-center justify-center">
            <Error404Message />
        </div>
    );
}

export default Error404;
