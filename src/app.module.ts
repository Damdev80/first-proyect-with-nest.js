import { PrismaModule } from './prisma/prisma.modules';
import { GenespeciModule } from './genespeci/genespeci.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [PrismaModule, GenespeciModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
