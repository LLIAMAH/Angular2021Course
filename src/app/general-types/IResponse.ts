export interface IResponse<T> {
  status: ResponseStatus;
  data: T[];
}

export enum EnumResponseStatus {
  Unknown,
  OK,
  Warning,
  Error
}


export class ResponseStatus {

  constructor(public value: EnumResponseStatus, public message: string = '') { }

  isAlertReq(): boolean {
    return this.value === EnumResponseStatus.Warning || this.value === EnumResponseStatus.Error;
  }
}
