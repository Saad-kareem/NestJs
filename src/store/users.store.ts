import { Injectable } from '@nestjs/common';

interface User {
  name: String;
  age: number;
  id: number;
}

@Injectable()
export class UserStore {
  private store = new Map<number, User>();

  addUser(user: User) {
    this.store.set(user.id, user);
  }
  getUser(id: number) {
    return this.store.get(id);
  }
  getUsers() {
    return Array.from(this.store).map((user) => user);
  }
  updateUser(id: number, user: User) {
    this.store.set(id, user);
  }
  deleteUser(id: number) {
    this.store.delete(id);
  }
}
