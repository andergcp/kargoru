import { Model, ObjectId } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Supplier, SupplierDocument } from './schema/supplier.schema';
import { ISupplier } from '@kargoru/data';

@Injectable()
export class SuppliersService {
    constructor(
        @InjectModel(Supplier.name) private readonly supplierModel: Model<SupplierDocument>
    ) {}

    async create( iSupplier: ISupplier): Promise<Supplier> {
        const createdSupplier = await this.supplierModel.create(iSupplier);
        return createdSupplier;
    }

    async getAll(): Promise<Supplier[]> {
        return this.supplierModel.find().exec();
    }

    async getOne( id: ObjectId ): Promise<Supplier> {
        return this.supplierModel.findById(id).exec();
    }
}
