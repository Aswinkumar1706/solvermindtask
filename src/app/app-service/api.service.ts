import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { forkJoin } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getAllPost() {
    return this.http.get(this.apiUrl + 'posts');
  }
  getDashboardData() {
    let posts = this.http.get(this.apiUrl + 'posts');
    let comments = this.http.get(this.apiUrl + 'comments');
    let albums = this.http.get(this.apiUrl + 'albums');
    let photos = this.http.get(this.apiUrl + 'photos');
    let users = this.http.get(this.apiUrl + 'users');

    return forkJoin([posts, comments, albums, photos, users]);
  }

  getAllUsers() {
    return this.http.get(this.apiUrl + 'users');
  }
  getAllPhotos() {
    return this.http.get(this.apiUrl + 'photos');
  }
}
