import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'test',
        password: 'test',
        database: 'test',
        entities: ['src/entity/**/*.ts'],
        synchronize: true,
      }),
  },
];
