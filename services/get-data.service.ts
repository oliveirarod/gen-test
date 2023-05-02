import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Post } from "src/app/models/Post";

@Injectable({
  providedIn: "root",
})
export class GetDataService {
  // Service used to get data from given URL
  constructor(private httpClient: HttpClient) {}

  jsonDataUrl = "http://jsonplaceholder.typicode.com";
  postsUrl = "/posts";
  // usersUrl = "/users";

  getPostsData(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.jsonDataUrl + this.postsUrl);
  }

  // getUsersData(){
  //   return this.httpClient.get(this.jsonDataUrl + this.usersUrl);
  // }
}
