export interface IEmployees {
    firstName: string;
    lastName: string;
    startDate: string;
    department: string;
    dateOfBirth: string;
    street: string;
    city: string;
    state: string;
    zipCode: number;
}

export const mockedEmployees: Array<IEmployees> = [
    {
        firstName: 'Herlock',
        lastName: 'Sholmes',
        startDate: '09/13/2022',
        department: 'Legal',
        dateOfBirth: '1854',
        street: '221B Baker Street',
        city: 'London',
        state: 'AK',
        zipCode: 88000,
    },
    {
        firstName: 'Bond',
        lastName: 'James',
        startDate: '09/14/2022',
        department: 'Engineering',
        dateOfBirth: '1920',
        street: 'Bucket of Blood Street',
        city: 'Holbrook',
        state: 'VT',
        zipCode: 11007,
    },
];
