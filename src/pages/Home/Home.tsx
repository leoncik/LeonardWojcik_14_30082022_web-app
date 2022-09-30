import EmployeeForm from './EmployeeForm';

function Home() {
    return (
        <div className="page-wrapper md:flex md:flex-col md:justify-center md:items-center md:h-screen">
            <div className="home-page md:w-full">
                <EmployeeForm />
            </div>
        </div>
    );
}

export default Home;
