// export class Key {
//   id?: number;
//   value: string;
//   createdAt?: Date;
//   totalRequestCount?: number;
//   requestCountSinceLastReset?: number;
//   lastRequestAt?: Date;
//   status?: KeyStatus;
//   state?: KeyState;
//   resetAt?: Date;
//   resetCount?: number;
//   usedBy?: Consumer[];
// }
//
// export enum KeyStatus {
//   AVAILABLE = 'AVAILABLE',
//   NEAR_AVAILABILITY = 'NEAR_AVAILABILITY',
//   NEAR_EXHAUSTION = 'NEAR_EXHAUSTION',
//   EXHAUSTED = 'EXHAUSTED',
//   EXPIRED = 'EXPIRED',
// }
// export enum KeyState {
//   WORKING = 'WORKING',
//   NOT_WORKING = 'NOT_WORKING',
//   RESTING = 'RESTING',
// }
//
// export type Consumer = {
//   id?: number;
//   name: string;
//   usedAt?: Date;
// };
import {
  IsNumber,
  IsOptional,
  IsString,
  IsDate,
  ValidateNested,
  IsEnum,
  ArrayMinSize,
} from 'class-validator';
import { Type } from 'class-transformer';

export enum KeyStatus {
  AVAILABLE = 'AVAILABLE',
  NEAR_AVAILABILITY = 'NEAR_AVAILABILITY',
  NEAR_EXHAUSTION = 'NEAR_EXHAUSTION',
  EXHAUSTED = 'EXHAUSTED',
  EXPIRED = 'EXPIRED',
}

export enum KeyState {
  WORKING = 'WORKING',
  NOT_WORKING = 'NOT_WORKING',
  RESTING = 'RESTING',
}

export class Consumer {
  @IsOptional()
  @IsNumber()
  id?: number;

  @IsString()
  name: string;

  @IsOptional()
  @IsDate()
  usedAt?: Date;
}

export class Key {
  @IsOptional()
  @IsNumber()
  id?: number;

  @IsString()
  value: string;

  @IsOptional()
  @IsDate()
  createdAt?: Date;

  @IsOptional()
  @IsNumber()
  totalRequestCount?: number;

  @IsOptional()
  @IsNumber()
  requestCountSinceLastReset?: number;

  @IsOptional()
  @IsDate()
  lastRequestAt?: Date;

  @IsOptional()
  @IsEnum(KeyStatus)
  status?: KeyStatus;

  @IsOptional()
  @IsEnum(KeyState)
  state?: KeyState;

  @IsOptional()
  @IsDate()
  resetAt?: Date;

  @IsOptional()
  @IsNumber()
  resetCount?: number;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => Consumer)
  @ArrayMinSize(1)
  usedBy?: Consumer[];
}
