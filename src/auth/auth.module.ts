import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { GoogleStratgy } from './strategies/google-strategy';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { SessionSerializer } from './serializers/session.serializer';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    PassportModule.register({ session: true }),
  ],
  controllers: [AuthController],
  providers: [AuthService, GoogleStratgy, SessionSerializer],
})
export class AuthModule {}
