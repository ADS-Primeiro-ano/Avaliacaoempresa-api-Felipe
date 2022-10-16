import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Pessoa } from './pessoa.entity';

interface Request {
    nomePessoa: string;
    cpf: string;
}

@Injectable()
export class PessoaService {
    constructor(
        @InjectRepository(Pessoa)
        private pessoaRepository: Repository<Pessoa>,
    ) {}

    async create({ nomePessoa, cpf }: Request): Promise<Pessoa> {
        const pessoa = await this.pessoaRepository.create({
            nomePessoa,
            cpf,
        });

        await this.pessoaRepository.save(pessoa);

        return pessoa;
    }

    async findAll(): Promise<Pessoa[]> {
        const pessoa = await this.pessoaRepository.find();
        
        return pessoa;
    }
}