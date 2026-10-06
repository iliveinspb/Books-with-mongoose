import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Book } from './schemas/book.schema.js';
import { CreateBookDto } from './dto/create-book.dto.js';

@Injectable()
export class BooksService {
  constructor(
    @InjectModel(Book.name)
    private readonly bookModel: Model<Book>,
  ) {}

  getBooks() {
    return this.bookModel.find().exec();
  }

  createBook(dto: CreateBookDto) {
    return this.bookModel.create(dto);
  }

  updateBook(id: string, dto: CreateBookDto) {
    return this.bookModel
      .findByIdAndUpdate(id, dto, { returnDocument: 'after' })
      .exec();
  }

  deleteBook(id: string) {
    return this.bookModel.findByIdAndDelete(id).exec();
  }
}
