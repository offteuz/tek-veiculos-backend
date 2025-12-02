import { Expose } from "class-transformer";
import { TipoUsuario } from "src/usuario/enums/tipo-usuario.enum";

export default class RetornaUsuarioDto {
  @Expose()
  id: number;

  @Expose()
  nome: string;

  @Expose()
  email: string;

  @Expose()
  tipoUsuario: TipoUsuario;

  @Expose()
  criadoEm: Date;

  @Expose()
  alteradoEm: Date;
}
