import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AvaliacaoController } from './avaliacao.controller';
import { Avaliacao } from './avaliacao.entity';
import { AvaliacaoService } from './avaliacao.service';

@Module({
    imports: [TypeOrmModule.forFeature([Avaliacao])],
    controllers: [AvaliacaoController],
    providers: [AvaliacaoService],
})

export class AvaliacaoModule {}