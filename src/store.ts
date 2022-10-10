// Redux Toolkit
import { configureStore } from '@reduxjs/toolkit';

// Slices
import employeeSlice from './features/slices/employeesSlice';

// Interfaces
import { IEmployees } from './__mocks__/mockedEmployees';

export interface IRootState {
    employee: Array<IEmployees>;
}

export const store = configureStore({
    reducer: {
        employee: employeeSlice.reducer,
    },
});
