import { Model, ObjectId } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { QuoteRequest, QuoteRequestDocument } from './schema/quote-request.schema';
import { IQuoteRequest } from '@kargoru/data';

@Injectable()
export class QuoteRequestsService {
    constructor(
        @InjectModel(QuoteRequest.name) private readonly quoteRequestModel: Model<QuoteRequestDocument>,
    ) {}

    async create( iQuoteRequest: IQuoteRequest ): Promise<QuoteRequest> {
        const createdQuoteRequest = await this.quoteRequestModel.create(iQuoteRequest);
        return createdQuoteRequest;
    }

    async getAll(): Promise<QuoteRequest[]> {
        return this.quoteRequestModel.find().exec();
    }

    async getOne(id: ObjectId ): Promise<QuoteRequest> {
        return this.quoteRequestModel.findById(id).exec();
    }
}


