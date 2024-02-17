import { MessagesRepository } from "./messages.repository";
export class MessageService{
    messagesRepo: MessagesRepository

    constructor() {
        // Service is creating its own dependencies
        // DONT DO this on Real APPS
        this.messagesRepo = new MessagesRepository();
    }

    findOne(id: string){
        return this.messagesRepo.findOne(id);
    }

    findAll(id: string){
        return this.messagesRepo.findAll();
    }

    create(message: string){
        return this.messagesRepo.create(message);
    }
}