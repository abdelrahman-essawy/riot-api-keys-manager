import { KeysService } from './keys.service';
import { KeysController } from './keys.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { KeysRepository } from './keys.repository';
import { Module } from '@nestjs/common';

@Module({
  imports: [PrismaModule],
  controllers: [KeysController],
  providers: [KeysService, KeysRepository],
})
export class KeysModule {}
