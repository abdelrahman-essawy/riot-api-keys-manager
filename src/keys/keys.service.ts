import { Prisma } from '@prisma/client';
import { KeysRepository } from './keys.repository';
import { Injectable } from '@nestjs/common';
@Injectable()
export class KeysService {
  constructor(private readonly keyRepository: KeysRepository) {}

  create(value: string) {
    return this.keyRepository.createKey(value);
  }

  findAll() {
    return this.keyRepository.getKeys();
  }

  findOne(value: string);
  findOne(id: number);
  findOne(arg: string | number) {
    try {
      if (typeof arg === 'number') {
        return this.keyRepository.getKeyById(arg);
      } else if (typeof arg === 'string') {
        return this.keyRepository.getKeyByValue(arg);
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  update(value: string, newData: Prisma.KeyUpdateInput) {
    return this.keyRepository.updateKey(value, newData);
  }

  remove(value: string) {
    return this.keyRepository.deleteKey(value);
  }
}
