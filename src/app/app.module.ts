import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PaginationComponent } from './pagination/pagination.component';
import { RepositoryComponent } from './repository/repository.component';
import { RouterModule, Routes, Router } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users/:name', component: GithubProfileComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    GithubProfileComponent,
    HomeComponent,
    NavbarComponent,
    PaginationComponent,
    RepositoryComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatIconModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
