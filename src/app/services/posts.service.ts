import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {IResponsePosts, ResponsePosts} from "../experiments-http/types/IResponsePost";
import {catchError, exhaustMap, Observable, of, retry, Subject, take, throwError} from "rxjs";
import {Post} from "../experiments-http/types/Post";
import {map} from "rxjs/operators";
import {EnumResponseStatus, ResponseStatus} from "../general-types/IResponses";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  error: Subject<string> = new Subject<string>()

  constructor(private httpClient: HttpClient) { }

  createAndStorePost(title: string, content: string): Observable<IResponsePosts> {
    if (title === '' || content === '')
      return of(new ResponsePosts([], new ResponseStatus(EnumResponseStatus.Error, 'title or content values - are empty.')));

    const postData: Post = new Post(0, title, content);
    return this.httpClient.post<IResponsePosts>('https://localhost:7035/Posts/', postData)
      .pipe(
        take(1),
        exhaustMap((response: IResponsePosts) => {
          return this.fetchPosts()
        })
      );
    // .subscribe(
    //   (response: IResponsePosts) => {
    //     console.log(response);
    //     return response;
    //   });
  }

  fetchPosts(): Observable<IResponsePosts> {
    return this.httpClient.get<IResponsePosts>('https://localhost:7035/Posts/')
      .pipe(
        retry(3),
        catchError(this.handleError),
        map((responseData: IResponsePosts) => {
        return responseData;
      }));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      this.error.next('An error occurred:' + error.error);
    } else {
      this.error.next(`Backend returned code ${error.status}, body was: ` + error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

}
