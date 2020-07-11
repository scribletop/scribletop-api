import { Party } from '../parties/party.entity';
import { User } from '../users/user.entity';

export type Entity = typeof User | typeof Party;