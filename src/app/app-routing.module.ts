import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleAddComponent } from './components/article-add/article-add.component';
import { ArticleDetailComponent } from './components/article-detail/article-detail.component';
import { ArticleUpdateComponent } from './components/article-update/article-update.component';
import { ArticleComponent } from './components/article/article.component';
import { CategoryComponent } from './components/category/category.component';
import { GetStartComponent } from './components/get-start/get-start.component';
import { HistoryComponent } from './components/history/history.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:ArticleComponent},
  {path:"categories/all",component:CategoryComponent},
  {path:"articles/all",component:ArticleComponent},
  {path:"articles/category/:categoryId",component:ArticleComponent},
  {path:"articles/:articleId",component:ArticleDetailComponent},
  {path:"article/add",component:ArticleAddComponent},
  {path:"getStart",component:GetStartComponent},
  {path:"history",component:HistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
