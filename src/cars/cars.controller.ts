import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CarsService } from '.';

@Controller('cars')
export class CarsController {

	constructor( private readonly carsService: CarsService ){}

	@Get()
	getCars() {
		return this.carsService.getAllCars();
	}

	@Get(':id')
	getCarById( @Param('id', ParseIntPipe) id: number ){	
		return this.carsService.getCarById(id);
	}
}
