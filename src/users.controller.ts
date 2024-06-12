import {
  Controller,
  Get,
  Param,
  Post,
  Query,
  Req,
  Headers,
  Body,
} from '@nestjs/common';
import { Request } from 'express';

interface QueryParams {
  age: number;
  name: string;
}
@Controller('/users')
export class userController {
  @Post('/profile')
  getProfile(@Req() req: Request) {
    console.log(req.params);
    return {
      hello: 'Saad Karim',
    };
  }
  @Get('/videos')
  getVideos(@Headers('user-agent') header: Record<string, any>) {
    console.log(header);
    return 'success';
  }
  @Post('/userData')
  getUserData(@Body() requestBody: Record<string, any>) {
    console.log(requestBody);

    return { success: true };
  }
}
