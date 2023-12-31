import { Module } from '@nestjs/common';
import { ExerciseService } from './exercise.service';

@Module({
  providers: [ExerciseService]
})
export class ExerciseModule {}
