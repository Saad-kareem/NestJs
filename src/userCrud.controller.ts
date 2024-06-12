import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDTO } from './dto';

let Users = [];

@Controller('/user')
export class UserData {
  @Post()
  addUser(@Body() createUserDto: CreateUserDTO) {
    Users.push(createUserDto);
    return 'User Added';
  }
  @Get()
  getUsers() {
    return Users;
  }

  @Get(':id')
  getUser(@Param('id') id: number) {
    return Users.find((user) => +user.id === +id);
  }

  @Put(':id')
  UpdateUser(@Param('id') id: number, @Body() updateUserDto: CreateUserDTO) {
    const userIndex = Users.findIndex((user) => user.id === +id);
    if (!userIndex) {
      return;
    } else {
      return (Users[userIndex] = updateUserDto);
    }
  }
  @Delete(':id')
  deleteUser(@Param('id') id: number) {
    Users = Users.filter((user) => +user.id !== id);
    return 'success true';
  }
}
