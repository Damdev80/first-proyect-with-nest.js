import { Controller, Get, Param, Query, ParseIntPipe } from '@nestjs/common';
import { GenespeciService } from './genespeci.service';

@Controller('genespeci')
export class GenespeciController {
  constructor(private readonly genespeciService: GenespeciService) {}

  // GET /genespeci - Obtener todas las especialidades
  @Get()
  async findAll() {
    return await this.genespeciService.findAll();
  }

  // GET /genespeci/count - Contar especialidades
  @Get('count')
  async count() {
    return await this.genespeciService.count();
  }

  // GET /genespeci/active - Obtener especialidades activas
  @Get('active')
  async findActive() {
    return await this.genespeciService.findActive();
  }

  // GET /genespeci/triage - Especialidades con triage
  @Get('triage')
  async findWithTriage() {
    return await this.genespeciService.findWithTriage();
  }

  // GET /genespeci/paginated?page=1&limit=10 - Paginación
  @Get('paginated')
  async findPaginated(
    @Query('page', ParseIntPipe) page: number = 1,
    @Query('limit', ParseIntPipe) limit: number = 10,
  ) {
    return await this.genespeciService.findPaginated(page, limit);
  }

  // GET /genespeci/search/code?codigo=CAR - Buscar por código
  @Get('search/code')
  async findByCode(@Query('codigo') codigo: string) {
    if (!codigo) {
      throw new Error('El parámetro código es requerido');
    }
    return await this.genespeciService.findByCode(codigo);
  }

  // GET /genespeci/search/description?descripcion=cardiologia - Buscar por descripción
  @Get('search/description')
  async findByDescription(@Query('descripcion') descripcion: string) {
    if (!descripcion) {
      throw new Error('El parámetro descripción es requerido');
    }
    return await this.genespeciService.findByDescription(descripcion);
  }

  // GET /genespeci/:id - Obtener especialidad por ID
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const especialidad = await this.genespeciService.findOne(id);
    if (!especialidad) {
      throw new Error(`Especialidad con ID ${id} no encontrada`);
    }
    return especialidad;
  }
}
