import { NotFoundException } from "@nestjs/common";

export class UsuarioNaoEncontradoPorNomeException extends NotFoundException {
    constructor(nome: string) {
        super(`Usuario com nome '${nome}' não encontrado.`)
    } 
}