// Page components
import Home from '../../pages/Home/Home';
import EmployeeList from '../../pages/EmployeeList/EmployeeList';
import Error404 from '../../pages/Error404/Error404';
import Header from '../layout/Header/Header';

// Routing
import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/employee-list" element={<EmployeeList />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
        </div>
    );
}

export default App;
