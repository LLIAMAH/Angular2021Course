export enum EnumServerStatus {
  Standard,
  Primary,
  Secondary,
  Success,
  Danger,
  Warning,
  Info,
  Light,
  Dark
}

export interface IServer {
  instanceType: string;
  name: string;
  status: EnumServerStatus;
  started: Date
}

export class Server implements IServer {
  constructor(public instanceType: string, public name: string, public status: EnumServerStatus, public started: Date) { }
}
