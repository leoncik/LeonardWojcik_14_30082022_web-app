// Redux
import { Provider } from 'react-redux';
import { store } from './store';

// Routing
import { BrowserRouter } from 'react-router-dom';

// React
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import './index.css';
// PrimeReact styles
import 'primereact/resources/themes/lara-light-indigo/theme.css'; // Theme
import 'primereact/resources/primereact.min.css'; // Core css
import 'primeicons/primeicons.css'; // Icons

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
        <React.StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </React.StrictMode>
    </Provider>
);
