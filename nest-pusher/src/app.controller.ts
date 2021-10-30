import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { CreatePusherDto } from './create-pusher.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  view(@Res() res){
    res.render('index')
  }

  @Post()
  generatePusher(
    @Body() createPusherDto: CreatePusherDto
  ){
    return this.appService.generatePusher(createPusherDto)
  }
}
