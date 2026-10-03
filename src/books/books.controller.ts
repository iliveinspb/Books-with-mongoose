import { Controller, Get } from '@nestjs/common';
import { BooksService } from './books.service.js';


@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  getBooks() {
    return this.booksService.getBooks();
  }    
}
