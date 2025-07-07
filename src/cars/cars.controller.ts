import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from '.';
import { CreateCarDto } from './dtos/create-car.dto';
import { UpdateCarDto } from './dtos/update-car.dto';

@Controller('cars')
export class CarsController {

	constructor( private readonly carsService: CarsService ){}

	@Get()
	getCars() {
		return this.carsService.getAllCars();
	}

	@Get(':id')
	getCarById( @Param('id', ParseUUIDPipe) id: string ){	
		return this.carsService.getCarById(id);
	}

	@Post()
	createCar( @Body() createCarDto: CreateCarDto ) {
		return this.carsService.createCar( createCarDto );
	}

	@Patch(':id')
	updateCar( 
		@Param('id', ParseUUIDPipe) id: string, 
		@Body() body: UpdateCarDto ) 
	{
		return body
	}

	@Delete(':id')
	deleteCar( @Param('id', ParseIntPipe) id: number ){	
		return {
			message: 'Car deleted',
			id
		}
	}
}
