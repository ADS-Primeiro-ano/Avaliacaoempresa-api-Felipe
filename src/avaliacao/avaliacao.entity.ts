import { Empresa } from 'src/empresa/empresa.entity';
import { Pessoa } from 'src/pessoa/pessoa.entity';
import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from 'typeorm';

@Entity()
export class Avaliacao {
    @PrimaryGeneratedColumn()
    idavaliacao: number;
    
    @Column()
    codpessoa: number;

    @Column()
    codempresa: number;

    @Column()
    nota: number;

    @ManyToOne(() => Pessoa)
    @JoinColumn({name: 'codpessoa'})
    pessoa: Pessoa;

    @ManyToOne(() => Empresa)
    @JoinColumn({name: 'codempresa'})
    empresa: Empresa;
}