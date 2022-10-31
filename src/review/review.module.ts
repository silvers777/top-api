import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { TelegramModule } from 'src/telegram/telegram.module';
import { ReviewController } from './review.controller';
import { ReviewModel } from './review.model';
import { ReviewService } from './review.service';

@Module({
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: ReviewModel,
        schemaOptions: {
          collection: 'Review',
        },
      },
    ]),
    TelegramModule,
  ],
  controllers: [ReviewController],
  providers: [ReviewService],
})
export class ReviewModule {}
