import { Module } from '@nestjs/common';
import { userController } from './users.controller';
import { AlbumController } from './album.controller';
import { UserData } from './userCrud.controller';
import { UserStore } from './store/users.store';
import { ClientData } from './client.controller';
import { Store } from './store/Store';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';

@Module({
  controllers: [ClientData],
  providers: [UserStore,{ provide: Store, useClass: UserStore }],
})
export class AppModule {}
