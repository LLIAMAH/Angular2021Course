export interface IResponseMany<T> {
  status: ResponseStatus;
  data: T[];
}

export interface IResponseOne<T> {
  status: ResponseStatus;
  data: T;
}

export interface IResponseBool extends IResponseOne<boolean> { }

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

export class ResponseBool implements IResponseBool {

  constructor(public data: boolean, public status: ResponseStatus) { }
}
