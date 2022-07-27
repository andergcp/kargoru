import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SupplierDocument = Supplier & Document;

@Schema()
export class Supplier {
  @Prop({ required: true})
  name: String;

  @Prop({ required: true})
  email: String;

  @Prop({ required: true})
  pwd: String;
}

export const SupplierSchema = SchemaFactory.createForClass(Supplier);