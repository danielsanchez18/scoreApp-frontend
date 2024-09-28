import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-button-secondary',
  template: `
  <button
    class="px-4 py-1.5 text-xs font-semibold border border-zinc-800 flex text-gray-800 hover:text-black bg-white rounded-md hover:bg-gray-100 active:bg-gray-200">
    <span class="mr-2">{{icon}}</span>
    {{title}}
  </button>
  `
})
export class ButtonSecondaryComponent {

  @Input() icon?: string ;
  @Input() title: string = 'Button';

}
