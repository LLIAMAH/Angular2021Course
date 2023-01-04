export interface IServer {
  title: string;
  description: string;
  type: string;
}

export class Server implements IServer{
  constructor(public title:string, public description:string, public type: string) {  }
}

export class Ingredient {
  constructor(public name: string, public amount: number) {  }
}

export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;

  constructor(name: string, description: string, imagePath: string) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
  }
}
