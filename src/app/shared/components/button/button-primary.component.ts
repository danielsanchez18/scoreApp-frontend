import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-button-primary',
  template: `
  <button
    class="px-4 py-2 text-xs items-center font-semibold flex text-white bg-red-600 rounded-md hover:bg-red-700 active:bg-red-800">
    <span>{{ title }}</span>
  </button>
  `
})
export class ButtonPrimaryComponent {

  @Input() title: string = 'Button';

}
