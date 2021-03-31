import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatRippleModule} from '@angular/material/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatChipsModule} from '@angular/material/chips';
import {MatTreeModule} from '@angular/material/tree';
import {MatListModule} from '@angular/material/list';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import {MatRadioModule} from '@angular/material/radio';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './components/article/article.component';
import { CategoryComponent } from './components/category/category.component';
import { NavbarComponent } from './components/navbar/navbar.component';


import {ToastrModule} from 'ngx-toastr';
import { GetStartComponent } from './components/get-start/get-start.component';
import { FilterPipePipe } from './Pipes/filter-pipe.pipe';
import { CategoryPipePipe } from './Pipes/category-pipe.pipe';
import { ArticleAddComponent } from './components/article-add/article-add.component';
import { ArticleUpdateComponent } from './components/article-update/article-update.component';
import { ArticleDeleteComponent } from './components/article-delete/article-delete.component';
import { ArticleDetailComponent } from './components/article-detail/article-detail.component';
import { HistoryComponent } from './components/history/history.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MessageComponent } from './components/message/message.component';
import { FooterComponent } from './components/footer/footer.component';
import { CategoryAddComponent } from './components/category-add/category-add.component';
import { LoginGuard } from './guards/login.guard';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { ComposerComponent } from './components/composer/composer.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    CategoryComponent,
    NavbarComponent,
    GetStartComponent,
    FilterPipePipe,
    CategoryPipePipe,
    ArticleAddComponent,
    ArticleUpdateComponent,
    ArticleDeleteComponent,
    ArticleDetailComponent,
    HistoryComponent,
    LoginComponent,
    RegisterComponent,
    MessageComponent,
    FooterComponent,
    CategoryAddComponent,
    NotFoundComponent,
    MyProfileComponent,
    ComposerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatProgressBarModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    MatSnackBarModule,
    MatRippleModule,
    MatExpansionModule,
    MatCardModule,
    MatSidenavModule,
    MatChipsModule,
    MatTreeModule,
    MatListModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatGridListModule,
    MatMenuModule,
    MatRadioModule,
    MatPaginatorModule,
    MatBottomSheetModule,
    MatDialogModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-left"
    })
  ],
  providers: [
    LoginGuard,
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
