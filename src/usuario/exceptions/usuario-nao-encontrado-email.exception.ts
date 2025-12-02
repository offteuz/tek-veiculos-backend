import { NotFoundException } from "@nestjs/common";

export class UsuarioNaoEncontradoPorEmailException extends NotFoundException {
    constructor(email: string) {
        super(`Usuario com email '${email}' não encontrado.`)
    } 
}