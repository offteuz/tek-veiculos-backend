import { CreateDateColumn, UpdateDateColumn } from 'typeorm';

export abstract class Auditoria {
  @CreateDateColumn({ name: 'criado_em', type: 'timestamp' })
  criadoEm: Date;

  @UpdateDateColumn({ name: 'alterado_em', type: 'timestamp' })
  alteradoEm: Date;
}
