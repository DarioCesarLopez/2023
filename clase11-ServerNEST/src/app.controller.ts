// eslint-disable-next-line prettier/prettier
import {
  Controller,
  Get,
  Param,
} from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('saludar')
  getSaludar(): string {
    return`Saludo desde el controlador`;
  }

  @Get('saludar/:id')
  getSaludarId(@Param() params): string {
    return`Saludo desde el controlador ID=${params.id}`;
  }

  @Get('/buscar/:persona/:id')
  getBuscarPersona(@Param() params): string {
    return `Persona 1 buscada ${params.persona} de id=${params.id}`;
  }
}
