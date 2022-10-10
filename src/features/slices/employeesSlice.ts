import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Interfaces
import { IEmployees } from '../../__mocks__/mockedEmployees';

const initialState: Array<IEmployees> = [];

const employeesSlice = createSlice({
    name: 'employee',
    initialState: initialState,
    reducers: {
        saveEmployee: (
            draft: Array<IEmployees>,
            action: PayloadAction<IEmployees>
        ) => {
            draft.push(action.payload);
        },
        deleteEmployee: (
            draft: Array<IEmployees>,
            action: PayloadAction<number>
        ) => {
            draft.splice(action.payload, 1);
        },
    },
});

export default employeesSlice;

export const employeesActions = employeesSlice.actions;
