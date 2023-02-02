import {Component, OnDestroy, OnInit} from '@angular/core';
import {EnumResponseStatus, ResponseStatus} from "../general-types/IResponses";
import {IPost, Post} from "./types/Post";
import {PostsService} from "../services/posts.service";
import {NgForm} from "@angular/forms";
import {ISubscriptionsStorage, SubscriptionsStorage} from "../general-types/SubscriptionStorage";
import {IResponsePosts} from "./types/IResponsePost";

@Component({
  selector: 'app-experiments-http',
  templateUrl: './experiments-http.component.html',
  styleUrls: ['./experiments-http.component.css']
})
export class ExperimentsHttpComponent implements OnInit, OnDestroy {
  posts: IPost[] = [];
  alert: ResponseStatus = new ResponseStatus(EnumResponseStatus.Unknown);
  alertRequired: boolean = false;
  error: string = '';
  private subscriptionStorage: ISubscriptionsStorage = new  SubscriptionsStorage();

  constructor(private postsService: PostsService) {
  }

  ngOnInit(): void {
    this.subscriptionStorage.addSubscription(
      this.postsService.error.subscribe((errorMessage: string) => {
        this.error = errorMessage;
      }));

    this.onGetPosts();
  }

  ngOnDestroy(): void {
    this.subscriptionStorage.clear();
  }

  onGetPosts(): void {
    this.postsService.fetchPosts().subscribe((response: IResponsePosts) => {
      this.posts = response.data;
      this.alert = new ResponseStatus(response.status.value, response.status.message);
      this.alertRequired = this.alert.isAlertReq();
    });
  }

  onCreatePost(postData: Post) {
    this.postsService.createAndStorePost(postData.title, postData.description).subscribe(
      (response:IResponsePosts) => {
        this.posts = response.data;
        this.alert = new ResponseStatus(response.status.value, response.status.message);
        this.alertRequired = this.alert.isAlertReq();
      }
    )
  }

  sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

  async onSubmit(f: NgForm) {
    if (f.valid) {
      console.log('Add post started');
      const title = f.value.title;
      const description = f.value.description;
      const post = new Post(0, title, description)
      console.log(post);
      this.onCreatePost(post);
      f.resetForm();
      console.log('Add post finished');
      return;
    }
    console.log("Form invalid");
    console.log(f);
  }
}
