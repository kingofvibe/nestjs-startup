import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { admin } from 'src/services/app.interface';
import { AppService } from '../services/app.service';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('Home')
  getHome(@Req() request: Request): string {
    return this.appService.getHome(request);
  }
  @Post('admin')
  createAdmin(@Req() req: Request): void {
    console.log(req.body)
    return this.appService.createAmin(req.body)
  }
  @Get('admin')
  getAdmin(): admin[] {
    return this.appService.findAll()
  }
}
