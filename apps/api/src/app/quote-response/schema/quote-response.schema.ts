import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Date, Number } from 'mongoose';

import { Supplier } from '../../supplier/schema/supplier.schema';
import { QuoteRequest } from '../../quote-request/schema/quote-request.schema';

export type QuoteResponseDocument = QuoteResponse & Document;

@Schema()
export class QuoteResponse {
  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'Supplier'})
  supplierId: Supplier;

  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'QuoteRequest'})
  quoteRequestId: QuoteRequest;

  @Prop({ required: false, default: Date.now})
  dateCreated: Date;

  @Prop({ required: true})
  basicPrice: Number;

  @Prop()
  additionalValues: Map<String, Number>;
}

export const QuoteResponseSchema = SchemaFactory.createForClass(QuoteResponse);