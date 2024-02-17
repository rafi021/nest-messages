import { MessagesRepository } from "./messages.repository";
export class MessageService{
    messagesRepo: MessagesRepository
    constructor(repo: MessagesRepository) {
        this.messagesRepo = repo;
    }

    findOne(id: string){
        return this.messagesRepo.findOne(id);
    }

    findAll(){
        return this.messagesRepo.findAll();
    }

    create(message: string){
        return this.messagesRepo.create(message);
    }
}