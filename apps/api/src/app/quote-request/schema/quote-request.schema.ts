import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Date, Number } from 'mongoose';

import { Client } from '../../client/schema/client.schema';

export type QuoteRequestDocument = QuoteRequest & Document;

@Schema()
export class QuoteRequest {
  @Prop({ required: true})
  typeMerchandising: String;

  @Prop({ required: true})
  priceMerchandising: Number;

  @Prop({ required: true})
  typeContainer: String;

  @Prop({ required: true})
  insurance: Boolean;

  @Prop({ required: true, default: Date.now})
  dateCreated: Date;

  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'Client'})
  clientId: Client;

  @Prop({ required: true})
  portFrom: String;

  @Prop({ required: true})
  portTo: String;
}

export const QuoteRequestSchema = SchemaFactory.createForClass(QuoteRequest);