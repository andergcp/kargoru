import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ClientDocument = Client & Document;

@Schema()
export class Client {
  @Prop({ required: true})
  //@Prop()
  name: String;

  //@Prop({ required: true})
  @Prop()
  email: String;

  //@Prop({ required: true})
  @Prop()
  pwd: String;
}

export const ClientSchema = SchemaFactory.createForClass(Client);