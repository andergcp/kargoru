import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { QuoteRequestModule } from './quote-request/quote-request.module';
import { QuoteResponseModule } from './quote-response/quote-response.module';
import { ClientModule } from './client/client.module';
import { SupplierModule } from './supplier/supplier.module';

@Module({
  imports: [
    ConfigModule,
    // MongoDB Connection
    MongooseModule.forRootAsync({
        inject: [ConfigService],
        useFactory: async (configService: ConfigService) => configService.getMongoConfig(),
    }),
    QuoteRequestModule,
    QuoteResponseModule,
    ClientModule,
    SupplierModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
