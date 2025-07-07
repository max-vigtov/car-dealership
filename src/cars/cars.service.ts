import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
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

	updateCar( id: string, updateCarDto: UpdateCarDto ){
		let carDB = this.getCarById( id );
		if( updateCarDto.id && updateCarDto.id !== id ) throw new BadRequestException(`Car id is not valid inside body`);

		this.cars = this.cars.map( car => {
			if( car.id === id ){
				carDB = { ...carDB, ...updateCarDto, id };
				return carDB;
			}
			return car;
		})
		return carDB;
	}

	deleteCar( id: string ){
		let carDB = this.getCarById( id );
		if( !carDB ) throw new NotFoundException(`Car with id ${ id } not found`);
		
		this.cars = this.cars.filter( car => car.id !== id );

		return {
			message: 'Car deleted',
			id
		}
	}	
}