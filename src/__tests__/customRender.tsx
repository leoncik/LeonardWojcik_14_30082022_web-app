import React, { PropsWithChildren } from 'react';
import { render as rtlRender } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

// Redux
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import employeeSlice from '../features/slices/employeesSlice';

/**
 * A custom render function
 * @param ui
 */
export function render(ui: React.ReactElement) {
    const store = configureStore({
        reducer: {
            employee: employeeSlice.reducer,
        },
    });

    function Wrapper({ children }: PropsWithChildren<unknown>) {
        return (
            <MemoryRouter>
                <Provider store={store}>{children}</Provider>
            </MemoryRouter>
        );
    }
    rtlRender(ui, { wrapper: Wrapper });
}
