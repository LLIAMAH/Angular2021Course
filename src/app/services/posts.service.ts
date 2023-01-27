import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IResponsePost} from "../experiments-http/types/IResponsePost";
import {Observable, Subject} from "rxjs";
import {Post} from "../experiments-http/types/Post";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  error: Subject<string> = new Subject<string>()

  constructor(private httpClient: HttpClient) { }

  createAndStorePost(title: string, content: string) {
    const postData: Post = new Post(0, title, content);
    return this.httpClient.post<IResponsePost>('https://localhost:7035/Posts/', postData)
      .subscribe(
        (response: IResponsePost) => {
          console.log(response);
          return response;
        }, error => {
          this.error.next(error.message);
        });
  }

  fetchPosts(): Observable<IResponsePost> {
    return this.httpClient.get<IResponsePost>('https://localhost:7035/Posts/')
      .pipe(map((responseData: IResponsePost) => {
        return responseData;
      }));
  }
}
