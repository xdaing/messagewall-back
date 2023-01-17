import { NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express'
import rateLimit from 'express-rate-limit'
import { join } from 'path'
import { AppModule } from '@/app.module'
import { AllExceptionsFilter } from '@/filter/all-exception.filter'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)
  app.useStaticAssets(join(__dirname, './public'))
  app.enableCors()
  app.use(rateLimit({ windowMs: 10 * 60 * 1000, max: 500 }))
  app.useGlobalFilters(new AllExceptionsFilter())
  await app.listen(3000)
}
bootstrap()
