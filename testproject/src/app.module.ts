import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { LogIpMiddleware } from './middleware/log-ip.middleware';
import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LogIpMiddleware).forRoutes('*');
  }
}
