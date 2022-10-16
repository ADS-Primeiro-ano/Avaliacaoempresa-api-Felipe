import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

import { PessoaService } from './pessoa.service';

@Controller('pessoa')
class PessoaController {
    constructor(private readonly service: PessoaService) {}

    @Post('/')
    async create(@Req() request: Request, @Res() response: Response) {
        const { nomePessoa, cpf } = request.body;

        console.log(nomePessoa, cpf);

        const pessoa = await this.service.create({ nomePessoa, cpf });

        return response.json(pessoa).send();
    }

    @Get('/')
    async findAll(@Res() response: Response) {
        const pessoa = await this.service.findAll();

        return response.json(pessoa).send();
    }
}

export { PessoaController };