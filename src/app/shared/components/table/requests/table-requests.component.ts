import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-table-requests',
  templateUrl: './table-requests.component.html',
})
export class TableRequestsComponent {

  @Input()
  title: string = 'Solicitudes de registro';

  revised: boolean = true;
}
