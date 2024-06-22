import { Injectable } from '@angular/core';
import { Article } from '../model/article';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

const Articles: Article[] = [
  {
    id: '1',
    slug: 'bai-viet-1',
    title: 'Bai viet 1',
    content: 'Day la noi dung bai viet 1',
    updateAt: '2020-07-06T13:26:31.785Z',
    author: 'TiepPhan',
  },
  {
    id: '2',
    slug: 'bai-viet-2',
    title: 'Bai viet 2',
    content: 'Day la noi dung bai viet 2 nhe ',
    updateAt: '2020-07-15:00:00.000Z',
    author: 'ChauTran',
  },
];
@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor() {}

  getArticles(): Observable<Article[]> {
    return of(Articles).pipe(delay(500));
  }

  getArticleBySlug(slug: string): Observable<Article> {
    let article = Articles.find(x => x.slug === slug)
    return of(article).pipe(delay(500));
  }
}
