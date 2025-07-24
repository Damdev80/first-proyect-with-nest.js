import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.services';

@Injectable()
export class GenespeciService {
  constructor(private prisma: PrismaService) {}

  // Obtener todas las especialidades
  async findAll() {
    try {
      return await this.prisma.gENESPECI.findMany({
        select: {
          OID: true,
          GEECODIGO: true,
          GEEDESCRI: true,
          GEETIEMPO: true,
          GEECTLCON: true,
          GEENOTRIAGE: true,
        },
        orderBy: {
          GEEDESCRI: 'asc',
        },
      });
    } catch (error) {
      throw new Error(`Error al obtener especialidades: ${error.message}`);
    }
  }

  // Obtener especialidad por ID
  async findOne(id: number) {
    try {
      return await this.prisma.gENESPECI.findUnique({
        where: { OID: id },
        select: {
          OID: true,
          GEECODIGO: true,
          GEEDESCRI: true,
          GEETIEMPO: true,
          GEECTLCON: true,
          GEENOTRIAGE: true,
          GECODSIUS: true,
          GENOSOLINTCON: true,
          GECODHOEF: true,
        },
      });
    } catch (error) {
      throw new Error(`Error al obtener especialidad con ID ${id}: ${error.message}`);
    }
  }

  // Buscar especialidades por código
  async findByCode(codigo: string) {
    try {
      return await this.prisma.gENESPECI.findMany({
        where: {
          GEECODIGO: {
            contains: codigo,
          },
        },
        select: {
          OID: true,
          GEECODIGO: true,
          GEEDESCRI: true,
          GEETIEMPO: true,
        },
      });
    } catch (error) {
      throw new Error(`Error al buscar especialidades por código: ${error.message}`);
    }
  }

  // Buscar especialidades por descripción
  async findByDescription(descripcion: string) {
    try {
      return await this.prisma.gENESPECI.findMany({
        where: {
          GEEDESCRI: {
            contains: descripcion,
          },
        },
        select: {
          OID: true,
          GEECODIGO: true,
          GEEDESCRI: true,
          GEETIEMPO: true,
        },
        orderBy: {
          GEEDESCRI: 'asc',
        },
      });
    } catch (error) {
      throw new Error(`Error al buscar especialidades por descripción: ${error.message}`);
    }
  }

  // Obtener especialidades activas (que tienen control de consulta)
  async findActive() {
    try {
      return await this.prisma.gENESPECI.findMany({
        where: {
          GEECTLCON: true,
        },
        select: {
          OID: true,
          GEECODIGO: true,
          GEEDESCRI: true,
          GEETIEMPO: true,
        },
        orderBy: {
          GEEDESCRI: 'asc',
        },
      });
    } catch (error) {
      throw new Error(`Error al obtener especialidades activas: ${error.message}`);
    }
  }

  // Obtener especialidades con triage
  async findWithTriage() {
    try {
      return await this.prisma.gENESPECI.findMany({
        where: {
          GEENOTRIAGE: true,
        },
        select: {
          OID: true,
          GEECODIGO: true,
          GEEDESCRI: true,
          GEETIEMPO: true,
        },
        orderBy: {
          GEEDESCRI: 'asc',
        },
      });
    } catch (error) {
      throw new Error(`Error al obtener especialidades con triage: ${error.message}`);
    }
  }

  // Contar total de especialidades
  async count() {
    try {
      return await this.prisma.gENESPECI.count();
    } catch (error) {
      throw new Error(`Error al contar especialidades: ${error.message}`);
    }
  }

  // Obtener especialidades con paginación
  async findPaginated(page: number = 1, limit: number = 10) {
    try {
      const skip = (page - 1) * limit;
      
      const [data, total] = await Promise.all([
        this.prisma.gENESPECI.findMany({
          skip,
          take: limit,
          select: {
            OID: true,
            GEECODIGO: true,
            GEEDESCRI: true,
            GEETIEMPO: true,
            GEECTLCON: true,
            GEENOTRIAGE: true,
          },
          orderBy: {
            GEEDESCRI: 'asc',
          },
        }),
        this.prisma.gENESPECI.count(),
      ]);

      return {
        data,
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      };
    } catch (error) {
      throw new Error(`Error al obtener especialidades paginadas: ${error.message}`);
    }
  }
}
