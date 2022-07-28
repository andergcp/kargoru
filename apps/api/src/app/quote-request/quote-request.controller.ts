import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { QuoteRequestsService } from './quote-request.service';
import { IQuoteRequest } from '@kargoru/data';

@Controller('requests')
export class QuoteRequestsController {
    constructor (private readonly quoteRequestService: QuoteRequestsService) {}

    @Post()
    async create(@Body() iQuoteRequest: IQuoteRequest) {
        return await this.quoteRequestService.create(iQuoteRequest);
    }

    @Get()
    async getAll() {
        return await this.quoteRequestService.getAll();
    }

    @Get(':id')
    async getOne(@Param() params) {
        return await this.quoteRequestService.getOne(params.id);
    }
}
/*
{
  "clientId":"62e131f731d6e6c550427361",
  "portFrom":"CAR",
  "portTo":"TUR",
  "typeMerchandising":"Cosas",
  "priceMerchandising":"100",
  "typeContainer":"40S",
  "insurance": "true"
}
response:
{
    "_id": "62e1eaf6f118180657a4bf06",
    "typeMerchandising": "Cosas",
    "priceMerchandising": 100,
    "typeContainer": "40S",
    "insurance": true,
    "clientId": "62e131f731d6e6c550427361",
    "portFrom": "CAR",
    "portTo": "TUR",
    "__v": 0
}
*/