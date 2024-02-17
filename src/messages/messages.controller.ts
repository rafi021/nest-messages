import { Body, Controller, Get, Headers, Param, Post, Query } from '@nestjs/common';
import { CreateMessageDTO } from './DTOs/create-message.dto';
import { MessageService } from './messages.service';

@Controller('messages')
export class MessagesController {
    messageService: MessageService

    constructor(){
        this.messageService = new MessageService();
    }

    @Get()
    listMessages(){
        return this.messageService.findAll();
    }

    @Post()
    createMessage(@Body() body: CreateMessageDTO){
        console.log(body);
        return this.messageService.create(body.content)
    }

    @Get('/:id')
    getMessage(@Param('id') id:string){
        console.log(id);
        return this.messageService.findOne(id);
    }
}
