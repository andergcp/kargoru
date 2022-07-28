import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { SuppliersService } from './supplier.service';
import { ISupplier } from '@kargoru/data';

@Controller('suppliers')
export class SuppliersController {
    constructor(private readonly suppliersService: SuppliersService) {}

    @Post()
    async create(@Body() iSupplier: ISupplier) {
        return await this.suppliersService.create(iSupplier);
    }

    @Get()
    async getAll() {
        return await this.suppliersService.getAll();
    }

    @Get(':id')
    async getOne(@Param() params) {
        return await this.suppliersService.getOne(params.id);
    }

}

