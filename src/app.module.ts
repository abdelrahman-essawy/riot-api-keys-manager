import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KeysModule } from './keys/keys.module';

@Module({
  imports: [KeysModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
