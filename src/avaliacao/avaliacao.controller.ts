import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

import { AvaliacaoService } from './avaliacao.service';

@Controller('avaliacao')
class AvaliacaoController {
    constructor(private readonly service: AvaliacaoService) {}

    @Post('/')
    async create(@Req() request: Request, @Res() response: Response) {
        const { codempresa, codpessoa, nota } = request.body;

        const avaliacao = await this.service.create({ codempresa, codpessoa, nota });

        return response.json(avaliacao).send();
    }

    @Get('/')
    async findAll(@Res() response: Response) {
        const avaliacao = await this.service.findAll();

        return response.json(avaliacao).send();
    }
    
}

export { AvaliacaoController };