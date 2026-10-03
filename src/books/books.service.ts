import { Injectable } from '@nestjs/common';

@Injectable()
export class BooksService {
  private books = [
    {
      id: 1,
      title: 'Свечи апокалиписа',
      author: 'Татьяна Замировская',
    },
    {
      id: 2,
      title: 'Клара и солнце',
      author: 'Кадзуо Исигуро',
    },
  ];

  getBooks() {
    return this.books;
  }
}
