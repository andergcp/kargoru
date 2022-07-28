import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { SuppliersController } from './supplier.controller';
import { SuppliersService } from './supplier.service';
import { Supplier, SupplierSchema } from './schema/supplier.schema';

@Module({
    imports: [MongooseModule.forFeature([{name: Supplier.name, schema: SupplierSchema}])],
    controllers: [SuppliersController],
    providers: [SuppliersService]
})
export class SuppliersModule {}
