import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ClientsService } from './client.service';
import { IClient } from '@kargoru/data';
import { Client } from './schema/client.schema';

@Controller('clients')
export class ClientsController {
    constructor(private readonly clientsService: ClientsService) {}

    @Post()
    async create(@Body() iClient: IClient) {
        console.log('Ander iClient ')
        await this.clientsService.create(iClient);
    }
}