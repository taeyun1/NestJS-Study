import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardRepository } from './boadrd.reopsitory';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';

@Module({
	imports: [
		TypeOrmModule.forFeature([BoardRepository])
	],
  controllers: [BoardsController],
  providers: [BoardsService]
})
export class BoardsModule {}
