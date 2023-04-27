import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  personas = [
    { id: 1, nombre: 'Juan', apellido: 'Perez' },
    { id: 2, nombre: 'Carlos', apellido: 'Messi' },
    { id: 3, nombre: 'Eva', apellido: 'Martinez' },
  ];

  getHello(): string {
    return 'Hello World!';
  }
  getDespedir(): string {
    return 'Chauuuu!!!!';
  }

  crearPersona(body): string {
    this.personas.push(body);
    return `persona creada ${body.nombre}`;
  }

  getListarPersonas(): any[]{
    return this.personas;
  }
}
