import { PassportSerializer } from '@nestjs/passport';
import { AuthService } from '../auth.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(private readonly authService: AuthService) {
    super();
  }

  serializeUser(user: any, done: Function) {
    done(null, user);
  }
  deserializeUser(payload: any, done: Function) {
    const user = this.authService.findUser(payload.id);
    return user ? done(null, user) : done(null, null);
  }
}
