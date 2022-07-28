import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { QuoteResponsesController } from './quote-response.controller';
import { QuoteResponsesService } from './quote-response.service';
import { QuoteResponse, QuoteResponseSchema } from './schema/quote-response.schema';

@Module({
    imports: [MongooseModule.forFeature([{name: QuoteResponse.name, schema: QuoteResponseSchema}])],
    controllers: [QuoteResponsesController],
    providers: [QuoteResponsesService]
})
export class QuoteResponsesModule {}
