import { LightningElement } from 'lwc';

export default class IteratorTemplateLooping extends LightningElement {
    carList = [
        {
            id: 1,
            model: 'Innova Crysta',
            brand: 'Toyota',
        },
        {
            id: 2,
            model: 'Creta',
            brand: 'Hyundai',
        },
        {
            id: 3,
            model: 'Seltos',
            brand: 'Kia',
        },
        {
            id: 4,
            model: 'Fortuner',
            brand: 'Toyota',
        },
        {
            id: 5,
            model: 'XUV700',
            brand: 'Mahindra',
        },
        {
            id: 6,
            model: 'Thar',
            brand: 'Mahindra',
        }
    ];
}