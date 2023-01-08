export interface IServer {
  title: string;
  description: string;
  type: string;
}

export interface IIngredient {
  name:string;
  amount:number;
}

export class Ingredient implements IIngredient {
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

export interface IAccount {
  name: string;
  status: string
}

export class Account implements IAccount {
  constructor(public name: string, public status: string) {
  }
}
