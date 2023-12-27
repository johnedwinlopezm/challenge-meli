import { of } from 'rxjs';
import { Search } from '../../search-products/models/search';
import { ItemDesResponse } from '../../search-products/models/itemdesResponse';

export class MockSearchProductsService {
    getProducts = jasmine.createSpy('getProducts(name: string)').and.callFake(function (name: string) {
        const products: Search = {
            author: {
                name: 'john',
                lastname: 'lopez'
            },
            categories: [
                'Autos, Motos y Otros',
                'Autos y Camionetas'
            ],
            items: [
                {
                    title: 'Renault Koleos Intens 2.5 Cvt 4x4 2019 Hermosa! (aes)',
                    id: 'MLA1590776010',
                    picture: 'http://http2.mlstatic.com/D_998066-MLA73279960175_122023-I.jpg',
                    free_shipping: false,
                    condition: 'used',
                    price: {
                        amount: 32000,
                        currency: 'USD',
                        decimals: 0
                    }
                },
                {
                    title: 'Renault Koleos Privilege',
                    id: 'MLA1597688004',
                    picture: 'http://http2.mlstatic.com/D_609824-MLA73321489928_122023-I.jpg',
                    free_shipping: false,
                    condition: 'used',
                    price: {
                        amount: 12000000,
                        currency: 'ARS',
                        decimals: 0
                    }
                }
            ],
        }
        return of(products);
    });

    getDescriptionProduct = jasmine.createSpy('getDescriptionProduct(idProduct: string)').and.callFake(function (idProduct: string) {
        const item: ItemDesResponse = {
            author: {
                name: 'john',
                lastname: 'lopez'
            },
            item: {
                id: 'MLA935813685',
                condition: 'new',
                description: 'La notebook más delgada y ligera de Apple viene con los superpoderes del chip M1. Termina todos tus proyectos mucho más rápido con el CPU de 8 núcleos y disfruta como nunca antes de apps y juegos con gráficos avanzados gracias al GPU de hasta 8 núcleos. Además, el Neural Engine de 16 núcleos se encarga de acelerar todos los procesos de aprendizaje automático. Todo en un diseño silencioso sin ventilador que te ofrece la mayor duración de batería en una MacBook Air: hasta 18 horas. (1) Portátil como siempre, más poderosa que nunca.\n\n\nAvisos Legales\nNo todos los recursos y configuraciones están disponibles en todos los países.\n(1) La duración de la batería varía según el uso y la configuración.\n(2) Comparado con la generación anterior.\n(3) El tamaño de la pantalla se mide en diagonal.',
                free_shipping: true,
                picture: 'https://http2.mlstatic.com/D_648428-MLA46516517286_062021-O.jpg',
                price: {
                    amount: 1489999,
                    currency: 'ARS',
                    decimals: 0
                },
                title: 'Apple Macbook Air (13 Pulgadas, 2020, Chip M1, 256 Gb De Ssd, 8 Gb De Ram) - Plata',
                sold_quantity: 133
            }
        }
        return of(item);
    });

    getCategorias = jasmine.createSpy('getDescriptionProduct(idProduct: string)').and.callFake(function (idProduct: string) {
        return [
            'Autos, Motos y Otros',
            'Autos y Camionetas'
        ];
    });
}

export class MockHttp {
    get = jasmine.createSpy('getProducts(name: string)').and.callFake(function (name: string) {
        const products: Search = {
            author: {
                name: 'john',
                lastname: 'lopez'
            },
            categories: [
                'Autos, Motos y Otros',
                'Autos y Camionetas'
            ],
            items: [
                {
                    title: 'Renault Koleos Intens 2.5 Cvt 4x4 2019 Hermosa! (aes)',
                    id: 'MLA1590776010',
                    picture: 'http://http2.mlstatic.com/D_998066-MLA73279960175_122023-I.jpg',
                    free_shipping: false,
                    condition: 'used',
                    price: {
                        amount: 32000,
                        currency: 'USD',
                        decimals: 0
                    }
                },
                {
                    title: 'Renault Koleos Privilege',
                    id: 'MLA1597688004',
                    picture: 'http://http2.mlstatic.com/D_609824-MLA73321489928_122023-I.jpg',
                    free_shipping: false,
                    condition: 'used',
                    price: {
                        amount: 12000000,
                        currency: 'ARS',
                        decimals: 0
                    }
                }
            ],
        }
        return of(products);
    });
}