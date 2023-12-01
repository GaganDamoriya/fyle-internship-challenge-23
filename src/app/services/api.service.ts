import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  setLastUsedUsername(username: string): void {
    // Implementation for setLastUsedUsername if needed
  }

  getUser(githubUsername: string) {
    return this.httpClient
      .get(`https://api.github.com/users/${githubUsername}`)
      .pipe(
        tap((data) => {
          // Optional: Do something with the data
        }),
        catchError((error) => this.handleError(error))
      );
  }

  getRepos(githubUsername: string, currentPage: number, pageSize: number = 10) {
    const url = `https://api.github.com/users/${githubUsername}/repos?page=${currentPage}&per_page=${pageSize}`;
    return this.httpClient.get(url).pipe(
      tap((data) => {
        // Optional: Do something with the data
      }),
      catchError((error) => this.handleError(error))
    );
  }
  private handleError(error: any): Observable<never> {
    // Handle the error as needed, e.g., log it
    console.error('An error occurred:', error);

    // Rethrow the error wrapped in an Observable
    return throwError('Username does not exist; please try again later.');
  }
}
