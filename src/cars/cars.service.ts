import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dtos';
import { Car } from './interfaces/car.interface';

@Injectable()
export class CarsService {

	private cars: Car[] = [
		{
			id: uuid(),
			brand: 'Toyota',
			model: 'Corolla',			
		},
		{
			id: uuid(),
			brand: 'Ford',
			model: 'Mustang',			
		},
		{
			id: uuid(),
			brand: 'Chevrolet',
			model: 'Camaro',			
		},
	];

	getAllCars(){
		return this.cars;
	}

	getCarById( id: string ){
		const car = this.cars.find( car => car.id === id );
		if( !car ) throw new NotFoundException(`Car with id ${ id } not found`);
		return car;
	}

	createCar( createCarDto: CreateCarDto ){
		const newCar = {
			id: uuid(),
			...createCarDto
		}
		this.cars.push( newCar );
		return newCar;
	}

}