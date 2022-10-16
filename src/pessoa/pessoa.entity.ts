import { Avaliacao } from 'src/avaliacao/avaliacao.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Pessoa {
    @PrimaryGeneratedColumn()
    idpessoa: number;

    @Column()
    nomePessoa: string;

    @Column()
    cpf: string;

    @OneToMany(type => Avaliacao, avaliacao => avaliacao.pessoa)
    rankings: Avaliacao[];

}