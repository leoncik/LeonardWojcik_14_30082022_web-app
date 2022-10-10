export interface IEmployees {
    id: number;
    firstName: string;
    lastName: string;
    startDate: string | undefined;
    department: string;
    dateOfBirth: string | undefined;
    street: string;
    city: string;
    state: string;
    zipCode: number;
}

export const mockedEmployees: Array<IEmployees> = [
    {
        id: 1464027914332,
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
        id: 1364027914332,
        firstName: 'Bond',
        lastName: 'James',
        startDate: '09/14/2022',
        department: 'Engineering',
        dateOfBirth: '1920',
        street: '007 Bucket of Blood Street',
        city: 'Holbrook',
        state: 'VT',
        zipCode: 11007,
    },
    {
        id: 1364027914332,
        firstName: 'Maya',
        lastName: 'Fey',
        startDate: '08/08/2022',
        department: 'Human Ressources',
        dateOfBirth: '1988',
        street: ' 12 Ramen-Burger Street',
        city: 'Kurain',
        state: 'MI',
        zipCode: 88000,
    },
];
