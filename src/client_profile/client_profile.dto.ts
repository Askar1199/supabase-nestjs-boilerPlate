import { ApiProperty } from '@nestjs/swagger';
import { IsUUID, IsNumber, IsIn } from 'class-validator';

export class CreateClientProfileDto {
  @ApiProperty()
  @IsNumber()
  age: number;

  @ApiProperty()
  @IsIn(['beginner', 'intermediate', 'advance'])
  level: 'beginner' | 'intermediate' | 'advance';
}
