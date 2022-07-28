import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ClientsService } from './client.service';
import { IClient } from '@kargoru/data';

@Controller('clients')
export class ClientsController {
    constructor(private readonly clientsService: ClientsService) {}

    @Post()
    async create(@Body() iClient: IClient) {
        return await this.clientsService.create(iClient);
    }

    @Get()
    async getAll() {
        return await this.clientsService.getAll();
    }

    @Get(':id')
    async getOne(@Param() params) {
        return await this.clientsService.getOne(params.id);
    }
}