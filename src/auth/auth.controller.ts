import { Controller, Get, UseGuards } from '@nestjs/common';
import { GoogleAuthGuard } from './guards/auth.guard';

@UseGuards(GoogleAuthGuard)
@Controller('auth/google')
export class AuthController {
  @Get('login')
  handlLogin() {
    return { message: 'Logged in' };
  }

  @Get('redirect')
  handlRedirect() {
    return { message: 'Ok' };
  }
}
