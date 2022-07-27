import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientsController } from './client.controller';
import { ClientsService } from './client.service';
import { Client, ClientSchema } from './schema/client.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: Client.name, schema: ClientSchema}])],
    controllers: [ClientsController],
    providers: [ClientsService]
})
export class ClientsModule {}
