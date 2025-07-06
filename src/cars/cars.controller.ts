import { Controller, Get } from '@nestjs/common';

@Controller('cars')
export class CarsController {

	private cars = ['toyota', 'ford', 'chevrolet'];

	@Get()
	getCars() {
		return this.cars;
	}
}
