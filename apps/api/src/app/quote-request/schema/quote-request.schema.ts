import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Date, Number } from 'mongoose';

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

  @Prop({ required: true})
  clientId: Number;

  @Prop({ required: true})
  portFrom: String;

  @Prop({ required: true})
  portTo: String;

  @Prop({ required: true})
  age: Number;

  @Prop({ required: true})
  breed: String;
}

export const QuoteRequestSchema = SchemaFactory.createForClass(QuoteRequest);