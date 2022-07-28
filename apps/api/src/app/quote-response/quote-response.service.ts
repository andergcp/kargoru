import { Model, ObjectId } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { QuoteResponse, QuoteResponseDocument } from './schema/quote-response.schema';
import { IQuoteResponse } from '@kargoru/data';

@Injectable()
export class QuoteResponsesService {
    constructor(
        @InjectModel(QuoteResponse.name) private readonly quoteResponseModel: Model<QuoteResponseDocument>,
    ) {}
        
    async create( iQuoteResponse: IQuoteResponse ): Promise<QuoteResponse> {
        const createdQuoteResponse = await this.quoteResponseModel.create(iQuoteResponse);
        return createdQuoteResponse;
    }

    async getAll(): Promise<QuoteResponse[]> {
        return this.quoteResponseModel.find().exec();
    }

    async getOne(id: ObjectId ): Promise<QuoteResponse> {
        return this.quoteResponseModel.findById(id).exec();
    }

}