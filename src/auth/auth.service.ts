import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { UserDto } from './dtos/user.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async valdiateUser(userDetails: UserDto) {
    const user = await this.userModel.findOne({ email: userDetails.email });

    if (user) return user;

    const newUser = await this.userModel.create(userDetails);
    newUser.save();
    return newUser;
  }

  async findUser(id: string) {
    return await this.userModel.findById(id);
  }
}
