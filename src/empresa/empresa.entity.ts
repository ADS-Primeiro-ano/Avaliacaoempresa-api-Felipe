import { Avaliacao } from 'src/avaliacao/avaliacao.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm';

@Entity()
export class Empresa {
    @PrimaryGeneratedColumn()
    idempresa: number;

    @Column()
    nomeEmpresa: string;

    @Column()
    cnpj: string;

    @OneToMany(type => Avaliacao, avaliacao => avaliacao.pessoa)
    rankings: Avaliacao[];
}
