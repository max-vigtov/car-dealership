import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from '.';
import { CreateCarDto, UpdateCarDto } from './dtos';

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
		return this.carsService.updateCar( id, body );
	}

	@Delete(':id')
	deleteCar( @Param('id', ParseUUIDPipe) id: string ){	
		return this.carsService.deleteCar( id );
	}
}
