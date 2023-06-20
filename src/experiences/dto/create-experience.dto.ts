import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateExperienceDto {
  @ApiProperty({ description: 'company', example: 'SPARCO' })
  @IsNotEmpty()
  company: string;

  @ApiProperty({ description: 'designation', example: 'Trainee' })
  @IsNotEmpty()
  designation: string;

  @ApiProperty({ description: 'start year', example: '2020-12-25 05:00:00' })
  @IsNotEmpty()
  start_year: Date;

  @ApiProperty({ description: 'end year', example: '2022-11-25 05:10:00' })
  @IsNotEmpty()
  end_year: Date;
}
