import {IResponseMany, IResponseOne, ResponseStatus} from "../../general-types/IResponses";
import {Post} from "./Post";
import {Recipe} from "../../general-types/Recipe";

export interface IResponsePosts extends IResponseMany<Post> { }

export interface IResponsePost extends IResponseOne<Post> { }

export class ResponsePosts implements IResponsePosts {
  constructor(public data: Post[],
              public status: ResponseStatus) { }
}

export class ResponsePost implements IResponsePost {
  constructor(public data: Post,
              public status: ResponseStatus) { }
}

export interface IResponseRecipes extends IResponseMany<Recipe> { }

export class ResponseRecipes implements IResponseRecipes {
  constructor(public data: Recipe[],
              public status: ResponseStatus) { }
}

export interface IResponseRecipe extends IResponseOne<Recipe> { }

export class ResponseRecipe implements IResponseRecipe {
  constructor(public data: Recipe,
              public status: ResponseStatus) { }
}
