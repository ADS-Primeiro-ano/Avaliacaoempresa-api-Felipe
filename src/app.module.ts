import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Empresa } from './empresa/empresa.entity';
import { EmpresaModule } from './empresa/empresa.module';
import { Pessoa } from './pessoa/pessoa.entity';
import { PessoaModule } from './pessoa/pessoa.module';
import { Avaliacao } from './avaliacao/avaliacao.entity';
import { AvaliacaoModule } from './avaliacao/avaliacao.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'f14tomcat20e20#',
      database: 'avaliacaoempresa',
      entities: [Empresa, Pessoa, Avaliacao],
      synchronize: true,
    }),
    EmpresaModule,
    PessoaModule,
    AvaliacaoModule
    
  ],
})
export class AppModule {}
