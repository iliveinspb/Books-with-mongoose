import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { isValidObjectId } from 'mongoose';

import { BooksService } from './books.service.js';
import { CreateBookDto } from './dto/create-book.dto.js';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  getBooks() {
    return this.booksService.getBooks();
  }

  @Post()
  createBook(@Body() dto: CreateBookDto) {
    return this.booksService.createBook(dto);
  }

  @Put(':id')
  updateBook(@Param('id') id: string, @Body() dto: CreateBookDto) {
    this.assertValidId(id);
    return this.booksService.updateBook(id, dto);
  }

  @Delete(':id')
  deleteBook(@Param('id') id: string) {
    this.assertValidId(id);
    return this.booksService.deleteBook(id);
  }

  private assertValidId(id: string) {
    if (!isValidObjectId(id)) {
      throw new BadRequestException(`Некорректный id: "${id}"`);
    }
  }
}
