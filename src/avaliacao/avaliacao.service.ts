import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Avaliacao } from './avaliacao.entity';

interface Request {
    codpessoa: number;
    codempresa: number;
    nota: number;
}

@Injectable()
export class AvaliacaoService {
    constructor(
        @InjectRepository(Avaliacao)
        private avaliacaoRepository: Repository<Avaliacao>,
    ) {}

    async create({ codpessoa, codempresa, nota }: Request): Promise<Avaliacao> {
        const avaliacao = await this.avaliacaoRepository.create({
            codpessoa,
            codempresa,
            nota,
        });

        await this.avaliacaoRepository.save(avaliacao);

        return avaliacao;
    }

    async findAll(): Promise<Avaliacao[]> {
        const avaliacao = await this.avaliacaoRepository.find();
        
        return avaliacao.sort();
    }
}