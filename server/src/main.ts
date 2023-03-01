import {NestFactory} from '@nestjs/core';
import {SwaggerModule, DocumentBuilder} from '@nestjs/swagger';
import {AppModule} from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix('api/v1')
    const config = new DocumentBuilder()
        .setTitle('BugTracker API')
        .setDescription('The BugTracker API description')
        .setVersion('1.0')
        .addApiKey({
            type: 'apiKey',
            name: 'X-API-KEY',
            in: 'header',
            description: "Enter your API key here"
        }, "X-API-KEY")
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
    await app.listen(3000);
    console.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();
