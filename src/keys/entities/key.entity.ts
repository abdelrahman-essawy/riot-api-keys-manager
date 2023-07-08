export class Key {
  id: number;
  value: string;
  createdAt: Date;
  totalRequestCount: number;
  requestCountSinceLastReset: number;
  lastRequestAt: Date;
  status: KeyStatus;
  state: KeyState;
  resetAt: Date;
  resetCount: number;
  usedBy: Consumer[];
}

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

export type Consumer = {
  id: number;
  name: string;
  usedAt: Date;
};
