import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as process from 'node:process';
import { ConfigModule } from '@nestjs/config';
import { ArticleModule } from './article/article.module';
import { UserModule } from './user/user.module';
import { Article } from './article/entities/article.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.RDS_HOST,
      port: 3306,
      username: process.env.RDS_USER,
      password: process.env.RDS_PSWORD,
      database: process.env.RDS_DATABASE,
      entities: [Article],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Article]),
    ArticleModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
