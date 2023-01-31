import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {IResponsePost} from "../experiments-http/types/IResponsePost";
import {catchError, Observable, retry, Subject, throwError} from "rxjs";
import {Post} from "../experiments-http/types/Post";
import {map} from "rxjs/operators";
import {EnumResponseStatus, ResponseStatus} from "../general-types/IResponses";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  error: Subject<string> = new Subject<string>()

  constructor(private httpClient: HttpClient) { }

  createAndStorePost(title: string, content: string) {
    if(title === '' || content === '')
      return new ResponseStatus(EnumResponseStatus.Error, 'title or content values - is empty.');

    const postData: Post = new Post(0, title, content);
    return this.httpClient.post<IResponsePost>('https://localhost:7035/Posts/', postData)
      .subscribe(
        (response: IResponsePost) => {
          console.log(response);
          return response;
        });
  }

  fetchPosts(): Observable<IResponsePost> {
    return this.httpClient.get<IResponsePost>('https://localhost:7035/Posts/',{
      headers: new HttpHeaders({


      })
    })
      .pipe(
        retry(3),
        catchError(this.handleError),
        map((responseData: IResponsePost) => {
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
