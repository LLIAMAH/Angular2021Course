import {Injectable} from '@angular/core';
import {EnumServerStatus, IServer, Server} from "../general-types/Server";

@Injectable({
  providedIn: 'root'
})
export class ServersService {

  servers: IServer[] = [
    new Server('medium', 'Production Server', EnumServerStatus.Success, new Date(2002, 1, 15)),
    new Server('large', 'User Database', EnumServerStatus.Success, new Date(2022, 1, 16)),
    new Server('small', 'Development Server', EnumServerStatus.Danger, new Date(2022, 1, 17)),
    new Server('small', 'Testing Environment Server', EnumServerStatus.Warning, new Date(2022, 1, 18))
  ];

  constructor() { }
}
