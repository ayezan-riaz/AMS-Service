import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'registrations' })
export class Registration {
  @ApiProperty({ description: 'Id', example: '1' })
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @ApiProperty({
    description: 'University Email / Verification Email',
    example: 'saad.luqman@dsu.edu.pk',
  })
  @Column({ type: 'varchar', length: 200, unique: true })
  uni_email: string;

  @ApiProperty({ description: 'first name', example: 'Syed' })
  @Column()
  first_name: string;

  @ApiProperty({ description: 'middle name', example: 'Saad' })
  @Column()
  middle_name: string;

  @ApiProperty({ description: 'last name', example: 'Luqman' })
  @Column({ nullable: true })
  last_name: string;

  @ApiProperty({ description: 'qualification', example: 'Masters' })
  @Column()
  qualification: string;

  @ApiProperty({ description: 'area', example: 'Computer Science' })
  @Column()
  area: string;

  @ApiProperty({
    description: 'Time of Registration',
    example: '2018-06-01 00:00:00',
  })
  @Column()
  resitration_time: Date;

  @ApiProperty({
    description: 'Time of Graduation',
    example: '2022-06-01 00:00:00',
  })
  @Column()
  graduation_time: Date;

  @ApiProperty({ description: 'cgpa', example: '3.7' })
  @Column()
  cgpa: number;

  @ApiProperty({ description: 'Count of email sent', example: '0' })
  @Column({ default: 0 })
  email_sent: number;

  @ApiProperty({ description: 'email verified', example: 'false' })
  @Column({ default: false })
  email_verified: boolean;

  @ApiProperty()
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty()
  @UpdateDateColumn()
  updatedAt: Date;
}
