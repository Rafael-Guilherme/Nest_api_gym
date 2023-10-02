import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { ExerciseModule } from './exercise/exercise.module';
import { HistoryModule } from './history/history.module';
import { UsersTokenModule } from './users-token/users-token.module';
import { GroupModule } from './group/group.module';
import { AvatarModule } from './avatar/avatar.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }), 
    AuthModule, 
    UserModule, 
    PrismaModule, 
    ExerciseModule, 
    HistoryModule, 
    UsersTokenModule, 
    GroupModule, 
    AvatarModule
  ],
})
export class AppModule {}
