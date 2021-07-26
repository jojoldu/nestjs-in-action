import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserService } from './service/UserService';
import { UserRepository } from './entity/UserRepository';
import { DatabaseModule } from './DatabaseModule';

@Module({
  imports: [ConfigModule.forRoot(), TypeOrmModule.forRoot(), DatabaseModule],
  controllers: [AppController, UserController],
  providers: [AppService, UserService, UserRepository],
})
export class AppModule {}
