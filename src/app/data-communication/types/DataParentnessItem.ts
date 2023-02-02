export interface IDataParentItem {
  name: string;
  amount: number;
}

export class DataParentItem implements IDataParentItem {
  constructor(public name: string, public amount: number) { }
}
