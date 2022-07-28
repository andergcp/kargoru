import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { QuoteRequestsModule } from './quote-request/quote-request.module';
import { QuoteResponsesModule } from './quote-response/quote-response.module';
import { ClientsModule } from './client/client.module';
import { SuppliersModule } from './supplier/supplier.module';

@Module({
  imports: [
    ConfigModule,
    // MongoDB Connection
    MongooseModule.forRootAsync({
        inject: [ConfigService],
        useFactory: async (configService: ConfigService) => configService.getMongoConfig(),
    }),
    QuoteRequestsModule,
    QuoteResponsesModule,
    ClientsModule,
    SuppliersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
