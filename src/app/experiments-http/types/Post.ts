export interface IPost {
  id: number,
  title: string,
  description: string
}

export class Post implements IPost {
  constructor(public id: number,
              public title: string,
              public description: string) {
  }
}
