import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return "Hola soy jose!";
  }

  @Get('Saludo')
  getSaludo(): string {
    return 'Hola soy jose!';
  }

  @Get('Concepcion')
  getClinica(): string {
    return 'Hola concepcion';
  }
}


