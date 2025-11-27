import { Auditoria } from 'src/commom/entities/auditoria.entity';
import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { TipoUsuario } from '../enums/tipo-usuario.enum';

@Entity('USUARIO')
export class Usuario extends Auditoria {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column({ unique: true })
  email: string;

  @Column()
  senha: string;

  @Column({
    type: 'simple-enum',
    enum: TipoUsuario,
    default: TipoUsuario.Usuario,
  })
  tipoUsuario: TipoUsuario;
}
