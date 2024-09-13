import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-button-primary',
  template: `
    <button
      class="bg-aztec-500 border border-aztec-500 text-white rounded-lg font-medium px-4 py-2 hover:shadow-md hover:bg-aztec-600 hover:border-aztec-600 active:bg-aztec-700 active:border-aztec-700">
      {{ title }}
    </button>

  `
})
export class ButtonPrimaryComponent {

  @Input() title!: string;

}
