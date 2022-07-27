import { Model } from 'mongoose';
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
        console.log('Anders' + createdClient)
        return createdClient;
    }
}    

