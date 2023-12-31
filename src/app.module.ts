import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KeysModule } from './keys/keys.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [KeysModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
