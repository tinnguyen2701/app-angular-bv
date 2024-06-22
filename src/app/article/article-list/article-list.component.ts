import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { Observable } from 'rxjs';
import { Article } from '../../model/article';
@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
})
export class ArticleListComponent implements OnInit {
  articles$: Observable<Article[]>;
  constructor(private _api: ArticleService) {}

  ngOnInit(): void {
    this.articles$ = this._api.getArticles();
  }
}
