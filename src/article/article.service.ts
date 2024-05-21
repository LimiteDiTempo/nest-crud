import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from './entities/article.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(Article)
    private readonly articleRepository: Repository<Article>,
  ) {}

  create(createArticleDto: CreateArticleDto) {
    this.articleRepository.save(createArticleDto);
    return 'This action adds a new article';
  }

  findAll() {
    return this.articleRepository.find();
  }

  findOne(id: number) {
    return this.articleRepository.findOneBy({ id });
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    this.articleRepository.update(id, updateArticleDto);
    return `This action updates a #${id} article`;
  }

  remove(id: number) {
    this.remove(id);
    return `This action removes a #${id} article`;
  }
}
