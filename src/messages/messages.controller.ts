import { Body, Controller, Get, Headers, Param, Post, Query } from '@nestjs/common';
import { CreateMessageDTO } from './DTOs/create-message.dto';

@Controller('messages')
export class MessagesController {
    @Get()
    listMessages(){
        return "Messages";
    }

    @Post()
    createMessage(@Body() body: CreateMessageDTO){
        console.log(body);
    }

    @Get('/:id')
    getMessage(@Param('id') id:string){
        console.log(id);
    }
}
