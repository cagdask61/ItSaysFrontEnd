import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleAddComponent } from './components/article-add/article-add.component';
import { ArticleDetailComponent } from './components/article-detail/article-detail.component';
import { ArticleUpdateComponent } from './components/article-update/article-update.component';
import { ArticleComponent } from './components/article/article.component';
import { CategoryAddComponent } from './components/category-add/category-add.component';
import { CategoryComponent } from './components/category/category.component';
import { ComposerComponent } from './components/composer/composer.component';
import { GetStartComponent } from './components/get-start/get-start.component';
import { HistoryComponent } from './components/history/history.component';
import { LoginComponent } from './components/login/login.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  //{path:"",pathMatch:"full",redirectTo:"login"},

  {path:"",pathMatch:"full",component:ArticleComponent},
  {path:"categories/all",component:CategoryComponent},
  {path:"articles/all",component:ArticleComponent},
  {path:"articles/category/:categoryId",component:ArticleComponent},
  {path:"articles/:articleId",component:ArticleDetailComponent},
  {path:"article/add",component:ArticleAddComponent, canActivate:[LoginGuard]},
  {path:"getStart",component:GetStartComponent},
  {path:"history",component:HistoryComponent, canActivate:[LoginGuard]},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"category/add",component:CategoryAddComponent, canActivate:[LoginGuard]},
  {path:"article/update/:id",component:ArticleUpdateComponent,canActivate:[LoginGuard]},
  {path:"myprofile",component:MyProfileComponent,canActivate:[LoginGuard]},
  {path:"composers",component:ComposerComponent,canActivate:[LoginGuard]},
  {path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
