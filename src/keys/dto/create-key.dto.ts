import { Key } from '../entities/key.entity';
import { IsString } from 'class-validator';

export class CreateKeyDto implements Key {
  @IsString()
  value: string;
}
