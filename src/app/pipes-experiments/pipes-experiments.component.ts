import {Component, OnInit} from '@angular/core';
import {ServersService} from "../services/servers.service";
import {EnumServerStatus, IServer} from "../general-types/Server";

@Component({
  selector: 'app-pipes-experiments',
  templateUrl: './pipes-experiments.component.html',
  styleUrls: ['./pipes-experiments.component.css']
})
export class PipesExperimentsComponent implements OnInit {
  servers!: IServer[];
  filteringParam: string = '';

  constructor(private serversService: ServersService) { }

  ngOnInit(): void {
    this.servers = this.serversService.servers;
  }

  getListBoxStatus(status: EnumServerStatus): string {
    switch(status){
      case EnumServerStatus.Primary: return 'list-group-item-primary';
      case EnumServerStatus.Secondary: return 'list-group-item-secondary';
      case EnumServerStatus.Success: return 'list-group-item-success';
      case EnumServerStatus.Danger: return 'list-group-item-danger';
      case EnumServerStatus.Warning: return 'list-group-item-warning';
      case EnumServerStatus.Info: return 'list-group-item-info';
      case EnumServerStatus.Light: return 'list-group-item-light';
      case EnumServerStatus.Dark: return 'list-group-item-dark';
      default: return '';
    }
  }
}
