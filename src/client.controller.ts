import { Controller, Get, Inject } from '@nestjs/common';
import { UserStore } from './store/users.store';

@Controller('/client')
export class ClientData {
  constructor(@Inject('STORE') private store: UserStore) {
    console.log(this.store);
  }
}
