import { Header, HttpCode, Post, Res, Redirect } from '@nestjs/common';
import { Response } from 'express';
const { Controller, Get } = require('@nestjs/common');

@Controller('/album')
export class AlbumController {
  @Post()
  //   @Redirect('/album/acount')
  getProfile(@Res({ passthrough: true }) res: Response) {
    const rn = Math.random() * 10 + 1;
    if (rn < 5) {
      res.status(200);
      return {
        url: '/album/acount',
        statusCode: 302,
      };
    } else {
      return {
        url: '/album/picture',
        statusCode: 302,
      };
    }
  }
  @Get('/acount')
  redirectRoute() {
    return 'Working Acount';
  }
  @Get('picture')
  redirect2() {
    return 'This is redirect 2 route';
  }
}
