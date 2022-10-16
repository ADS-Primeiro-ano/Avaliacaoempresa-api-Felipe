import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

import { EmpresaService } from "./empresa.service";

@Controller('empresa')
class EmpresaController {
    constructor(private readonly service: EmpresaService) {}

    @Post('/')
    async create(@Req() request: Request, @Res() response: Response) {
        const { nomeEmpresa, cnpj } = request.body;

        const empresa = await this.service.create({ nomeEmpresa, cnpj });

        return response.json(empresa).send();
    }

    @Get('/')
    async findAll(@Res() response: Response) {
        const empresa = await this.service.findAll();

        return response.json(empresa).send();
    }
}

export { EmpresaController };