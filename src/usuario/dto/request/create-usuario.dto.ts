import { IsEmail, IsEnum, IsNotEmpty, IsString, IsStrongPassword } from 'class-validator';
import { TipoUsuario } from '../../enums/tipo-usuario.enum';

export class CreateUsuarioDto {
  @IsString({ message: 'Por favor, forneça um nome válido. Por exemplo: Matheus Jesus' })
  @IsNotEmpty({ message: 'O campo de não pode estar vazio.' })
  nome: string;

  @IsEmail({}, { message: 'Por favor, forneça um endereço de email com formato válido. Por exemplo: admin@email.com' })
  @IsNotEmpty({ message: 'O campo de não pode estar vazio.' })
  email: string;

  @IsStrongPassword({}, { message: 'A senha deve conter no mínimo 8 caracteres, uma letra maiúscula, uma minúscula, um número e um caractere especial.' })
  senha: string;

  @IsEnum(TipoUsuario, { message: 'O tipo do usuário deve ser ADMINISTRADOR ou USUARIO' })
  tipoUsuario: TipoUsuario;
}
