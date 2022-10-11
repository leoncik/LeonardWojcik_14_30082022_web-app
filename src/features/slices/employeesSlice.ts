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
            action: PayloadAction<Array<IEmployees>>
        ) => {
            action.payload.map((selectedEmployee: IEmployees) => {
                draft.map((employee: IEmployees, index: number) => {
                    if (selectedEmployee.id === employee.id) {
                        draft.splice(index, 1);
                    }
                });
            });
        },
    },
});

export default employeesSlice;

export const employeesActions = employeesSlice.actions;
