
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.services';
import { stat } from 'fs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly prisma: PrismaService) {}

  @Get()
  getHello(): string {
    return "Hola";
  }

  @Get('test')
  async getTest() {
    try {
      await this.prisma.$queryRaw`SELECT 1 as test`;
      return { message: 'Test successful', stat };
    } catch (error) {
      return { message: 'Test failed', error: error.message };
    }
  }
}