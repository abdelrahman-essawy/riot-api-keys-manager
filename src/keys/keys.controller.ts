import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Version,
  VERSION_NEUTRAL,
} from '@nestjs/common';
import { KeysService } from './keys.service';
import { UpdateKeyDto } from './dto/update-key.dto';

@Controller('keys')
export class KeysController {
  constructor(private readonly keysService: KeysService) {}

  @Post(':value')
  create(@Param('value') value: string) {
    return this.keysService.create(value);
  }
  @Get()
  findAll() {
    return this.keysService.findAll();
  }

  @Get(':value')
  findOne(@Param('value') value: string) {
    return this.keysService.findOne(value);
  }

  @Patch(':value')
  update(@Param('value') value: string, @Body() newData: UpdateKeyDto) {
    return this.keysService.update(value, newData);
  }

  @Delete(':value')
  remove(@Param('value') value: string) {
    return this.keysService.remove(value);
  }
}
