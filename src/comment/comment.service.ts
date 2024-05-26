import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
@Injectable()
export class CommentService {
  constructor(private readonly databaseService: DatabaseService) { }
  async create(createCommentDto: Prisma.CommentCreateInput) {
    return this.databaseService.comment.create({ data: createCommentDto });
  }

  async findAll() {
    return this.databaseService.comment.findMany();
  }

  async findOne(id: number) {
    return this.databaseService.comment.findUnique({ where: { id } });
  }

  async update(id: number, updateCommentDto: Prisma.CommentUpdateInput) {
    return this.databaseService.comment.update({ where: { id }, data: updateCommentDto })
  }

  async remove(id: number) {
    return this.databaseService.comment.delete({ where: { id } })
  }
}
