import { Injectable } from '@nestjs/common';
import { CriaUsuarioDto } from './dto/request/cria-usuario.dto';
import { AtualizaUsuarioDto } from './dto/request/atualiza-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Repository } from 'typeorm';
import RetornaUsuarioDto from './dto/response/retorna-usuario.dto';
import { UsuarioNaoEncontradoPorIdException } from './exceptions/usuario-nao-encontrado-id.exception';
import { plainToInstance } from 'class-transformer';
import { UsuarioNaoEncontradoPorEmailException } from './exceptions/usuario-nao-encontrado-email.exception';
import { UsuarioNaoEncontradoPorNomeException } from './exceptions/usuario-nao-encontrado-nome.exception';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  async cria(dto: CriaUsuarioDto): Promise<RetornaUsuarioDto> {
    const usuarioCriado = await this.usuarioRepository.create(dto);

    const usuarioSalvo = await this.usuarioRepository.save(usuarioCriado);

    return plainToInstance(RetornaUsuarioDto, usuarioSalvo, {
      excludeExtraneousValues: true,
    });
  }

  async buscaTodos(): Promise<RetornaUsuarioDto[]> {
    const usuarios = await this.usuarioRepository.find();

    return plainToInstance(RetornaUsuarioDto, usuarios, {
      excludeExtraneousValues: true,
    });
  }

  async buscaPorId(id: number): Promise<RetornaUsuarioDto> {
    const usuario = await this.usuarioRepository.findOneBy({ id });

    if (!usuario) {
      throw new UsuarioNaoEncontradoPorIdException(id);
    }

    return plainToInstance(RetornaUsuarioDto, usuario, {
      excludeExtraneousValues: true,
    });
  }

  async buscaPorEmail(email: string): Promise<RetornaUsuarioDto> {
    const usuario = await this.usuarioRepository.findOneBy({ email });

    if (!usuario) {
      throw new UsuarioNaoEncontradoPorEmailException(email);
    }

    return plainToInstance(RetornaUsuarioDto, usuario, {
      excludeExtraneousValues: true,
    });
  }

  async buscaPorNome(nome: string): Promise<RetornaUsuarioDto> {
    const usuario = await this.usuarioRepository.findOneBy({ nome });

    if (!usuario) {
      throw new UsuarioNaoEncontradoPorNomeException(nome);
    }

    return plainToInstance(RetornaUsuarioDto, usuario, {
      excludeExtraneousValues: true,
    });
  }

  async atualiza(id: number, dto: AtualizaUsuarioDto): Promise<RetornaUsuarioDto | null> {
    const usuario = await this.usuarioRepository.findOneBy({ id });

    if (!usuario) {
      throw new UsuarioNaoEncontradoPorIdException(id);
    }

    // Atualiza a Entidade com os dados do DTO
    this.usuarioRepository.merge(usuario, dto);

    const usuarioSalvo = await this.usuarioRepository.save(usuario);

    return plainToInstance(RetornaUsuarioDto, usuario, {
      excludeExtraneousValues: true,
    });
  }

  async exclui(id: number) {
    const usuario = await this.usuarioRepository.findOneBy({ id });

    if (!usuario) {
      throw new UsuarioNaoEncontradoPorIdException(id);
    }

    this.usuarioRepository.remove(usuario);
  }
}
