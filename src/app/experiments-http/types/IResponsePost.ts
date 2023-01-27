import {IResponse, ResponseStatus} from "../../general-types/IResponse";
import {Post} from "./Post";

export interface IResponsePost extends IResponse<Post> { }

export class ResponsePost implements IResponsePost {
  constructor(public data: Post[],
              public status: ResponseStatus) { }
}
