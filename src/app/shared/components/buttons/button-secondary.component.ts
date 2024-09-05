import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-button-secondary',
  template: `
    <button
      class="bg-white border border-aztec-500 text-aztec-500 rounded-lg font-medium px-4 py-2 hover:shadow-md hover:bg-aztec-50 hover:text-aztec-600 active:bg-aztec-100 active:text-aztec-700">
      {{ title }}
    </button>

  `
})
export class ButtonSecondaryComponent {

  @Input() title!: string;

}
