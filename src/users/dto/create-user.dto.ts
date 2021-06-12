import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length, IsEmail } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'email@provider.com', description: 'User email' })
  @IsString({ message: 'Должно быть строкой' })
  @IsEmail({}, { message: 'некорректный email' })
  readonly email: string;

  @ApiProperty({ example: 'qwer1234', description: 'User password' })
  @IsString({ message: 'Должно быть строкой' })
  @Length(4, 16, {
    message: 'Должен быть не меньше 4 и не больше 16 символов',
  })
  readonly password: string;
}
