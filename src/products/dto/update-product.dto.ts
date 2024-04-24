import { PartialType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';
import { IsNumber, IsPositive } from 'class-validator';
import { CreateProductDto } from './create-product.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  @IsNumber()
  @IsPositive()
  @Type(() => Number)
  id: number;
}
