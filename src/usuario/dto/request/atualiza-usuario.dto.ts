import { PartialType } from '@nestjs/mapped-types';
import { CriaUsuarioDto } from './cria-usuario.dto';

export class AtualizaUsuarioDto extends PartialType(CriaUsuarioDto) {}
