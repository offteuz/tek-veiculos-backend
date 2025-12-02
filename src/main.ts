import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Aplica a validacao e transformacao de dados em toda a aplicacao, de forma global
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, // Habilita a transformação automática de tipos
      whitelist: true, // Remove propriedades não definidas no DTO
    }),
  );
  
  await app.listen(process.env.APP_PORT ?? 3000);
}
bootstrap();
