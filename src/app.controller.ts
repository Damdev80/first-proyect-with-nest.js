import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
<<<<<<< HEAD
    return "Hola";
=======
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

  @Get('jugar')
  getJugar(): string {
    return 'Hola juego';
>>>>>>> 7f5c63ed09bade5f18e9e94631048f1f54637222
  }
}


