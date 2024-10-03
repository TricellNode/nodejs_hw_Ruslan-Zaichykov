// import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
// import { LogIpMiddleware } from './middleware/log-ip.middleware'; // Подключаю мой middleware

// @Module({
//   imports: [],
// })
// export class AppModule implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer.apply(LogIpMiddleware).forRoutes('*'); // Добавляем middleware для всех маршрутов
//   }
// }
// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';

// @Module({
//   imports: [],
//   controllers: [AppController], // Регистрируем контроллер
//   providers: [],
// })
// export class AppModule {}

import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { LogIpMiddleware } from './middleware/log-ip.middleware'; // Импортируем middleware
import { AppController } from './app.controller'; // Подключаем контроллер

@Module({
  imports: [],
  controllers: [AppController],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // Добавляем middleware для всех маршрутов
    consumer.apply(LogIpMiddleware).forRoutes('*');
  }
}
