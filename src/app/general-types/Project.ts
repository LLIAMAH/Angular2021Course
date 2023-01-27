import {IResponse} from "./IResponse";

export interface IProject{
  id: number;
  name: string;
  description: string;
}

export interface IResponseProject extends IResponse<IProject> { }

export class Project implements IProject {
  constructor(public id: number, public name: string, public description: string) { }
}
