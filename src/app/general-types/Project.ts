import {IResponseMany} from "./IResponses";

export interface IProject{
  id: number;
  name: string;
  description: string;
}

export interface IResponseProject extends IResponseMany<IProject> { }

export class Project implements IProject {
  constructor(public id: number, public name: string, public description: string) { }
}
