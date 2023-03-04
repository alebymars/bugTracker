import {NestFactory} from '@nestjs/core';
import {SwaggerModule, DocumentBuilder} from '@nestjs/swagger';
import {AppModule} from './app.module';
import {JwtAuthGuard} from "./guards/jwt-guard";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix('api/v1')
    const config = new DocumentBuilder()
        .setTitle('BugTracker API')
        .setDescription('The BugTracker API description')
        .setVersion('1.0')
        .addBearerAuth({
            type: 'http',
            scheme: 'bearer',
        })
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
    app.enableCors();
    await app.listen(3001);
    console.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();
