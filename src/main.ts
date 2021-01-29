import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// 异步函数 将应用程序启动过程
/**
 * NestFactory暴露了一些静态方法用于创建应用程序的实例。create方法返回了一个应用程序的对象，实现了INestApplication接口
 * listen启用了http监听器，可以监听入栈的http请求
 * 不管使用什么平台 都会将平台的application接口暴露出来，它们分别是NestExpressApplication(express平台)和NestFastifyApplication(fastify平台)
 */

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

/**
 * app对象具有特定平台的专用方法，除非确实需要访问底层平台API，否则无需指定平台
 */
// const app = await NestFactory.create<NestExpressApplication>(AppModule)