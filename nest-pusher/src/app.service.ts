import { Injectable } from '@nestjs/common';
import { CreatePusherDto } from './create-pusher.dto';

@Injectable()
export class AppService {  

  generatePusher(createPusherDto: CreatePusherDto){  
    const Pusher = require('pusher');
    var pusher = new Pusher({
      appId: process.env.APP_ID,
      key: process.env.APP_KEY,
      secret: process.env.APP_SECRET,
      cluster: process.env.APP_CLUSTER
    })

    const {
      channel, event, payload
    } =  createPusherDto

    pusher.trigger(channel, event, {payload})

    return {
      message: `your message is sent to channel ${channel} and event ${event}`,
      payload
    }
  }
}
