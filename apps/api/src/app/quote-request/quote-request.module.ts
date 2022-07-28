import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { QuoteRequestsController } from './quote-request.controller';
import { QuoteRequestsService } from './quote-request.service';
import { QuoteRequest, QuoteRequestSchema } from './schema/quote-request.schema';

@Module({
    imports: [MongooseModule.forFeature([{name: QuoteRequest.name, schema:QuoteRequestSchema}])],
    controllers: [QuoteRequestsController],
    providers: [QuoteRequestsService]
})
export class QuoteRequestsModule {}
