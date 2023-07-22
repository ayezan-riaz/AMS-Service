import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { UniEmailExists } from './DoesUniEmailExists';
import { IsUniEmailUnique, UniEmailAvailable } from './IsUniEmailUnique';

export class VerifyUniEmailDto {
  @ApiProperty({
    description: 'University Email / Verification Email',
    example: 'saad.luqman@dsu.edu.pk',
  })
  @IsEmail()
  @IsNotEmpty()
  @UniEmailExists({
    message: 'Requested Email not exists in Examination Records: Registration',
  })
  uni_email: string;
}
