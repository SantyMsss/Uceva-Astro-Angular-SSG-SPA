import { User } from "../interfaces/users.interface";

/**
 * Mock de usuarios para pruebas unitarias.
 *
 * @remarks
 * Contiene un conjunto de datos ficticios de tipo `User`
 * utilizados para simular respuestas del servicio en tests.
 */
export const USERS_MOCK: User[] = [
    {
        id: 1,
        name: 'Carlos',
        lastName: 'Ramírez',
        age: 22,
        email: 'carlos.ramirez@example.com',
        engineering: 'Sistemas',
    },
    {
        id: 2,
        name: 'Ana',
        lastName: 'Gómez',
        age: 24,
        email: 'ana.gomez@example.com',
        engineering: 'Industrial',
    }
];