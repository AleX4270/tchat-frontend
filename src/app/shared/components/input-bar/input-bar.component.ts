import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-bar',
  templateUrl: './input-bar.component.html',
  styleUrls: ['./input-bar.component.scss']
})
export class InputBarComponent {
    @Input() iconSrc: string = '';
    @Input() placeholder: string = '';
}
