import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Empresa } from './empresa.entity';

interface Request {
    nomeEmpresa: string;
    cnpj: string;
}

@Injectable()
export class EmpresaService {
    constructor(
        @InjectRepository(Empresa)
        private empresaRepository: Repository<Empresa>,
    ) {}

    async create({ nomeEmpresa, cnpj }: Request): Promise<Empresa> {
        const empresa = await this.empresaRepository.create({
            nomeEmpresa,
            cnpj,
        });

        await this.empresaRepository.save(empresa);

        return empresa;
    }

    async findAll(): Promise<Empresa[]> {
        const empresa = await this.empresaRepository.find();

        return empresa;
    }
}