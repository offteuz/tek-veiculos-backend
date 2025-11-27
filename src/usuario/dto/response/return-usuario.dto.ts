import { TipoUsuario } from "src/usuario/enums/tipo-usuario.enum";

export default class ReturnUsuarioDto {
  id: number;

  nome: string;

  email: string;

  tipoUsuario: TipoUsuario;
}
