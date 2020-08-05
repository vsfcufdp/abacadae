import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteController } from './cliente/cliente.controller';
import { ClienteService } from './cliente/cliente.service';
import { ControleController } from './controle/controle.controller';
import { ControleService } from './controle/controle.service';
import { MedicamentoController } from './medicamento/medicamento.controller';
import { MedicamentoService } from './medicamento/medicamento.service';
import { VendaController } from './venda/venda.controller';
import { VendaService } from './venda/venda.service';
import { Cliente } from './cliente/cliente.entity';
import { Medicamento } from './medicamento/medicamento.entity';
import { Venda } from './venda/venda.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'prova-sub-web',
      entities: [ Cliente, Medicamento, Venda, ],

      synchronize: true,
      logging: true,

    }),

    TypeOrmModule.forFeature([ Cliente, Medicamento, Venda, ])

  ],
  controllers: [AppController, ClienteController, ControleController, MedicamentoController, VendaController],
  providers: [AppService, ClienteService, ControleService, MedicamentoService, VendaService],
})
export class AppModule {}
