import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from '.';
import { CreateCarDto } from './dtos/create-car.dto';

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
	@UsePipes( ValidationPipe )
	createCar( @Body() createCarDto: CreateCarDto ) {
		return createCarDto
	}

	@Patch(':id')
	updateCar( @Param('id', ParseIntPipe) id: number, @Body() body: any ) {
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
