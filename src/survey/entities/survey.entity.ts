import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/users/entities/users.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'survey' })
export class Survey {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    description:
      'Please rate the improvement of your main skill acquired through this university after completing four years of learning. Kindly provide your assessment of your domain skill level now(Management ,Engineering,Math,IR,Other) \nA-F with A being best and F being poor',
    example: 'A',
  })
  @Column()
  q1: string;

  @ApiProperty({
    description:
      'Rate your improvement in soft skills after completing four years of learning at this university. Please provide your assessment of your soft skills upon graduating, as part of this formal survey. \nProblem Identification',
    example: 'B',
  })
  @Column()
  q2: string;

  @ApiProperty({
    description: 'Ability to Evaluate and Analyze Data',
    example: 'C',
  })
  @Column()
  q3: string;

  @ApiProperty({ description: 'Research Skills', example: 'A' })
  @Column()
  q4: string;

  @ApiProperty({
    description: 'Ability to link theory to practice',
    example: 'A',
  })
  @Column()
  q5: string;

  @ApiProperty({
    description: 'Ability to design a system component or process',
    example: 'B',
  })
  @Column()
  q6: string;

  @ApiProperty({ description: 'IT knowledge/Computer Skills', example: 'B' })
  @Column()
  q7: string;

  @ApiProperty({ description: 'Oral Communication', example: 'B' })
  @Column()
  q8: string;

  @ApiProperty({ description: 'Report Writing', example: 'B' })
  @Column()
  q9: string;

  @ApiProperty({ description: 'Ability to work in teams', example: 'B' })
  @Column()
  q10: string;

  @ApiProperty({
    description: 'Ability to work in challenging situations',
    example: 'B',
  })
  @Column()
  q11: string;

  @ApiProperty({ description: 'Independant Thinking', example: 'B' })
  @Column()
  q12: string;

  @ApiProperty({ description: 'Research Skills', example: 'B' })
  @Column()
  q13: string;

  @ApiProperty({ description: 'Appreciation of Ethical Values', example: 'B' })
  @Column()
  q14: string;

  @ApiProperty({
    description: 'Resource and Time Management Skills',
    example: 'B',
  })
  @Column()
  q15: string;

  @ApiProperty({ description: 'Judgement', example: 'B' })
  @Column()
  q16: string;

  @ApiProperty({ description: 'Discipline', example: 'B' })
  @Column()
  q17: string;

  @ApiProperty({
    description:
      'Did the curriculum at DSU teach you the skills most relevant to your field of specialization in the job market?',
    example: 'Yes',
  })
  @Column()
  q18: string;

  @ApiProperty({
    description:
      'Which of the following activities appeal to you as a n oppurtunity to stay connected to DSU',
    example: 'Program/Major Reunions',
  })
  @Column()
  q19: string;

  @ApiProperty({
    description:
      'Are You Employed in the field of your DSU degree?If not why(Choose 1 response)',
    example: 'Yes, I am employed in my major field',
  })
  @Column()
  q20: string;

  @ApiProperty({
    description: 'Your overall experience with this university',
    example: 'Poor',
  })
  @Column()
  q21: string;

  @ApiProperty({
    description:
      'Please type the skills that you acquired from our university that helped you in your professional life.',
    example: 'Communication,Presentataion,Coding,Analytical',
  })
  @Column()
  q22: string;

  @ApiProperty({ description: 'Rate Infrastructure (A-F)', example: 'B' })
  @Column()
  q23: string;

  @ApiProperty({ description: 'Rate Faculty (A-F)', example: 'B' })
  @Column()
  q24: string;

  @ApiProperty({ description: 'Rate Academics (A-F)', example: 'B' })
  @Column()
  q25: string;

  @ApiProperty({
    description: 'Your First Drawn Salary (PKR)',
    example: '70,000',
  })
  @Column()
  q26: string;

  @ApiProperty({
    description: 'Your Last Drawn Salary (PKR)',
    example: '80,000',
  })
  @Column()
  q27: string;

  @ApiProperty()
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty()
  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;
}
