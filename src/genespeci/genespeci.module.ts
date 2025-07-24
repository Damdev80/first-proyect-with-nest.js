import { Module } from '@nestjs/common';
import { GenespeciController } from './genespeci.controller';
import { GenespeciService } from './genespeci.service';
import { PrismaModule } from '../prisma/prisma.modules';

@Module({
  imports: [PrismaModule],
  controllers: [GenespeciController],
  providers: [GenespeciService],
  exports: [GenespeciService],
})
export class GenespeciModule {}
