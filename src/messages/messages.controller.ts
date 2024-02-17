import { Body, Controller, Get, Headers, Param, Post, Query, NotFoundException } from '@nestjs/common';
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
        return this.messageService.create(body.content)
    }

    @Get('/:id')
    async getMessage(@Param('id') id:string){
        const message = this.messageService.findOne(id);
        if(!message){
            throw new NotFoundException('message not found!');
        }
        return message;
    }
}
