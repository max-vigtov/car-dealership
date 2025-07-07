import { IsString, MinLength } from "class-validator";


export class CreateCarDto {
	@IsString({ message: 'The brand must be a string' })
	readonly brand: string;

	@IsString({ message: 'The model must be a string' })
	@MinLength(3, { message: 'The model must be at least 3 characters long' })
	readonly model: string;
}