import { Component, OnInit } from '@angular/core';
import { Car } from '../../domain/car';
import { CarService } from '../../service/carservice';

interface Column {
    field: string;
    header: string;
}

@Component({
    selector: 'table-virtual-scroll-demo',
    templateUrl: 'table-virtual-scroll-demo.html'
})
export class TableVirtualScrollDemo implements OnInit{
    cars!: Car[];

    virtualCars!: Car[];

    cols!: Column[];

    constructor(private carService: CarService) {}

    ngOnInit() {
        this.cols = [
            { field: 'id', header: 'Id' },
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];

        this.cars = Array.from({ length: 10000 }).map((_, i) => this.carService.generateCar(i + 1));
        this.virtualCars = Array.from({ length: 10000 });
    }
}