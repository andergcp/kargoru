import { Model, ObjectId } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Client, ClientDocument } from './schema/client.schema';
import { IClient } from '@kargoru/data';

@Injectable()
export class ClientsService {
    constructor(    
        @InjectModel(Client.name) private readonly clientModel: Model<ClientDocument>,
    ) {}

    async create( iClient: IClient): Promise<Client> {
        const createdClient = await this.clientModel.create(iClient);
        return createdClient;
    }

    async getAll(): Promise<Client[]> {
        return this.clientModel.find().exec();
    }

    async getOne( id: ObjectId ): Promise<Client> {
        return this.clientModel.findById(id).exec();
    }
}    

