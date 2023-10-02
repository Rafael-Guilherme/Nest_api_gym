import { Module } from '@nestjs/common';
import { UsersTokenService } from './users-token.service';

@Module({
  providers: [UsersTokenService]
})
export class UsersTokenModule {}
