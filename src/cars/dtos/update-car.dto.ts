import { IsOptional, IsString, IsUUID, MinLength } from "class-validator";


export class UpdateCarDto {
	
	@IsOptional()
	@IsUUID()
	@IsString()
	readonly id?: string;

	@IsOptional()
	@IsString({ message: 'The brand must be a string' })	
	readonly brand?: string;
	
	@IsOptional()
	@IsString({ message: 'The model must be a string' })
	@MinLength(3, { message: 'The model must be at least 3 characters long' })
	readonly model?: string;

}