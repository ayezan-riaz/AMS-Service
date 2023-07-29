import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateSurveyDto {
  @ApiProperty({
    description:
      'Please rate the improvement of your main skill acquired through this university after completing four years of learning. Kindly provide your assessment of your domain skill level now(Management ,Engineering,Math,IR,Other) \nA-F with A being best and F being poor',
    example: 'A',
  })
  @IsNotEmpty()
  q1: string;

  @ApiProperty({
    description:
      'Rate your improvement in soft skills after completing four years of learning at this university. Please provide your assessment of your soft skills upon graduating, as part of this formal survey. \nProblem Identification',
    example: 'B',
  })
  @IsNotEmpty()
  q2: string;

  @ApiProperty({
    description: 'Ability to Evaluate and Analyze Data',
    example: 'C',
  })
  @IsNotEmpty()
  q3: string;

  @ApiProperty({ description: 'Research Skills', example: 'A' })
  @IsNotEmpty()
  q4: string;

  @ApiProperty({
    description: 'Ability to link theory to practice',
    example: 'A',
  })
  @IsNotEmpty()
  q5: string;

  @ApiProperty({
    description: 'Ability to design a system component or process',
    example: 'B',
  })
  @IsNotEmpty()
  q6: string;

  @ApiProperty({ description: 'IT knowledge/Computer Skills', example: 'B' })
  @IsNotEmpty()
  q7: string;

  @ApiProperty({ description: 'Oral Communication', example: 'B' })
  @IsNotEmpty()
  q8: string;

  @ApiProperty({ description: 'Report Writing', example: 'B' })
  @IsNotEmpty()
  q9: string;

  @ApiProperty({ description: 'Ability to work in teams', example: 'B' })
  @IsNotEmpty()
  q10: string;

  @ApiProperty({
    description: 'Ability to work in challenging situations',
    example: 'B',
  })
  @IsNotEmpty()
  q11: string;

  @ApiProperty({ description: 'Independant Thinking', example: 'B' })
  @IsNotEmpty()
  q12: string;

  @ApiProperty({ description: 'Research Skills', example: 'B' })
  @IsNotEmpty()
  q13: string;

  @ApiProperty({ description: 'Appreciation of Ethical Values', example: 'B' })
  @IsNotEmpty()
  q14: string;

  @ApiProperty({
    description: 'Resource and Time Management Skills',
    example: 'B',
  })
  @IsNotEmpty()
  q15: string;

  @ApiProperty({ description: 'Judgement', example: 'B' })
  @IsNotEmpty()
  q16: string;

  @ApiProperty({ description: 'Discipline', example: 'B' })
  @IsNotEmpty()
  q17: string;

  @ApiProperty({
    description:
      'Did the curriculum at DSU teach you the skills most relevant to your field of specialization in the job market?',
    example: 'Yes',
  })
  @IsNotEmpty()
  q18: string;

  @ApiProperty({
    description:
      'Which of the following activities appeal to you as a n oppurtunity to stay connected to DSU',
    example: 'Program/Major Reunions',
  })
  @IsNotEmpty()
  q19: string;

  @ApiProperty({
    description:
      'Are You Employed in the field of your DSU degree?If not why(Choose 1 response)',
    example: 'Yes, I am employed in my major field',
  })
  @IsNotEmpty()
  q20: string;

  @ApiProperty({
    description: 'Your overall experience with this university',
    example: 'Poor',
  })
  @IsNotEmpty()
  q21: string;

  @ApiProperty({
    description:
      'Please type the skills that you acquired from our university that helped you in your professional life.',
    example: 'Communication,Presentataion,Coding,Analytical',
  })
  @IsNotEmpty()
  q22: string;

  @ApiProperty({ description: 'Rate Infrastructure (A-F)', example: 'B' })
  @IsNotEmpty()
  q23: string;

  @ApiProperty({ description: 'Rate Faculty (A-F)', example: 'B' })
  @IsNotEmpty()
  q24: string;

  @ApiProperty({ description: 'Rate Academics (A-F)', example: 'B' })
  @IsNotEmpty()
  q25: string;

  @ApiProperty({
    description: 'Your First Drawn Salary (PKR)',
    example: '70,000',
  })
  @IsNotEmpty()
  q26: string;

  @ApiProperty({
    description: 'Your Last Drawn Salary (PKR)',
    example: '80,000',
  })
  @IsNotEmpty()
  q27: string;
}
