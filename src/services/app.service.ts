import { Injectable, Req } from '@nestjs/common';
import { admin } from './app.interface';
import { Request } from 'express';
@Injectable()
export class AppService {
  private readonly admins: admin[]= []
  getHello(): string {
    return 'Hello World!';
  }
  getHome(request: Request): string {
     return `this is th req path: ${request.url}`;
  }
 createAmin(Admin: admin) {
   this.admins.push(Admin)
}
findAll() {
  return this.admins
}
}
 