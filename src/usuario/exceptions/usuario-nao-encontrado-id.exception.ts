import { NotFoundException } from "@nestjs/common";

export class UsuarioNaoEncontradoPorIdException extends NotFoundException {
    constructor(id: number) {
        super(`Usuario com id '${id}' não encontrado.`)
    } 
}