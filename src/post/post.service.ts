import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class PostService {
  constructor(private readonly databaseService: DatabaseService) { }  
  async create(createPostDto: Prisma.PostCreateInput) {
    return this.databaseService.post.create({data: createPostDto});  
  } 
  

  async findAll() {
    return this.databaseService.post.findMany({include: { author: true }});
  }

  async findOne(id: number) {
    return this.databaseService.post.findUnique({ where: { id }, include: { author: true , comments: true},});
  }

  async update(id: number, updatePostDto: Prisma.PostUpdateInput) {
    return this.databaseService.post.update({ where: { id }, data: updatePostDto });
  }

  async remove(id: number) {
    return this.databaseService.post.delete({ where: { id } });
  }
}
