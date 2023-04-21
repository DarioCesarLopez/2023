// eslint-disable-next-line prettier/prettier
import {
  Controller,
  Get,
  Param,
} from '@nestjs/common';

import { PersonaEntity } from './persona.entity/persona.entity';
import { PersonaService } from './persona.service';

@Controller('persona')
export class PersonaController {
  constructor(private personaServise: PersonaService) {}

  @Get('')
  getPersona(): string {
    return this.personaServise.getPersona();
  }
  @Get('lista')
  getPersonas(): PersonaEntity[] {
    return this.personaServise.getPersonas();
  }
  @Get(':id')
  getPersonaId(@Param() params): PersonaEntity {
    //return this.personaServise.getPersonas()[params.id]; //Este es el codigo original.

    const auxPersonas = this.personaServise.getPersonas();
    const auxPersona = auxPersonas.find((p) => p.id === +params.id);
    // Aquí debes implementar la lógica para encontrar la persona correcta en la lista personas
    // y retornar una instancia de PersonaEntity en lugar de un arreglo
    return auxPersona;
  }
}
