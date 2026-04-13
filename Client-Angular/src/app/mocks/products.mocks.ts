import { Product } from "../interfaces/products.interface";

/**
 * Mock de productos para pruebas unitarias.
 *
 * @remarks
 * Contiene un conjunto de datos ficticios de tipo `Product`
 * utilizados para simular respuestas del servicio en tests.
 */
export const PRODUCTS_MOCK: Product[] = [
    {
        id: 1,
        name: 'Leche entera',
        category: 'Lacteos',
        price: 4500,
    },
    {
        id: 2,
        name: 'Manzana roja',
        category: 'Frutas',
        price: 3200,
    }
];