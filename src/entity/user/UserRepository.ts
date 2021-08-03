import { EntityRepository, Repository } from 'typeorm';
import { User } from './User';

@EntityRepository(User)
export class UserRepository extends Repository<User> {}
