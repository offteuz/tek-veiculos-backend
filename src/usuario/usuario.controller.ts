import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CriaUsuarioDto } from './dto/request/cria-usuario.dto';
import { AtualizaUsuarioDto } from './dto/request/atualiza-usuario.dto';

@Controller('usuarios')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  cria(@Body() dto: CriaUsuarioDto) {
    return this.usuarioService.cria(dto);
  }

  @Get()
  buscaTodos() {
    return this.usuarioService.buscaTodos();
  }

  @Get('id/:id')
  buscaPorId(@Param('id') id: string) {
    return this.usuarioService.buscaPorId(+id);
  }

  @Get('email/:email')
  buscaPorEmail(@Param('email') email: string) {
    return this.usuarioService.buscaPorEmail(email);
  }

  @Get('nome/:nome')
  buscaPorNome(@Param('nome') nome: string) {
    return this.usuarioService.buscaPorNome(nome);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: AtualizaUsuarioDto) {
    return this.usuarioService.atualiza(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuarioService.exclui(+id);
  }
}
