import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { QuoteResponsesService } from './quote-response.service';
import { IQuoteResponse } from '@kargoru/data';

@Controller('responses')
export class QuoteResponsesController {
    constructor(private readonly quoteResponseService: QuoteResponsesService){}

    @Post()
    async create(@Body() iQuoteResponse: IQuoteResponse) {
        return await this.quoteResponseService.create(iQuoteResponse);
    }

    @Get()
    async getAll() {
        return await this.quoteResponseService.getAll();
    }

    @Get(':id')
    async getOne(@Param() params) {
        return await this.quoteResponseService.getOne(params.id);
    }
}
/*
{
"quoteRequestId":"62e1eaf6f118180657a4bf06",
"supplierId":"62e1eaf6f118180657a4bf03",
"basicPrice":"120",
"additionalValues":
    {"additionalValue1":"50",
    "additionalValue2":"70"}
}
response
{
    "supplierId": "62e1eaf6f118180657a4bf03",
    "quoteRequestId": "62e1eaf6f118180657a4bf06",
    "basicPrice": 120,
    "additionalValues": {
        "additionalValue1": "50",
        "additionalValue2": "70"
    },
    "_id": "62e1edfd300bf2bff3139236",
    "__v": 0
}
*/