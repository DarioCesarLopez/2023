import {
  Body,
  Controller,
  Get,
  Post,
} from '@nestjs/common';

import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('saludar')
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('despedir')
  getDespedir(): string {
    return this.appService.getDespedir();
  }

  @Post('crear')
  crearPersona(@Body() body): string {
    return this.appService.crearPersona(body);
  }
 
  @Get('listar')
  listarPersonas(): string[] {
    return this.appService.getListarPersonas();
  }

}
