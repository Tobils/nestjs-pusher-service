# Pusher Notification
pusher with nestjs
```bash
# run service
docker-compose up

# post data => channel and event is describe by use for simple practice
post 127.0.0.1:3001
body payload:
export class CreatePusherDto {
    event: string
    channel: string
    payload: Object
}
```