import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-table-lineups',
  templateUrl: './table-lineups.component.html',
})

export class TableLineupsComponent {


  @Input() title!: string;
  @Input() type!: string;

}
