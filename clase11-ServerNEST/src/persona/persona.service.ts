import { Injectable } from '@nestjs/common';

import { PersonaEntity } from './persona.entity/persona.entity';

@Injectable()
export class PersonaService {
  private personas: PersonaEntity[] = [
    { id: 1, nombre: 'Juan', apellido: 'Perez' },
    { id: 2, nombre: 'Carlos', apellido: 'Messi' },
    { id: 3, nombre: 'Eva', apellido: 'Martinez' },
  ];

  getPersona(): string {
    return 'se retorno una persona'
  }

  getPersonas(): PersonaEntity[] {
    return this.personas;
  }
}
