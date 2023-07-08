import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { Injectable } from '@nestjs/common';

@Injectable()
export class KeysRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getKeys() {
    return await this.prisma.key.findMany();
  }

  async getKeyById(id: number) {
    try {
      return await this.prisma.key.findUnique({
        where: { id },
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  async getKeyByValue(value: string) {
    return await this.prisma.key.findUnique({
      where: { value },
    });
  }

  async createKey(value: string) {
    return await this.prisma.key.create({
      data: {
        value,
      },
    });
  }

  async updateKey(value: string, data: Prisma.KeyUpdateInput) {
    return await this.prisma.key.update({
      where: { value },
      data,
    });
  }

  async deleteKey(value: string) {
    return await this.prisma.key.delete({
      where: { value },
    });
  }
}
