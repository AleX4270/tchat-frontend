import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-bar',
  templateUrl: './input-bar.component.html',
  styleUrls: ['./input-bar.component.scss']
})
export class InputBarComponent {
    public inputValue: string = '';

    @Input() iconSrc: string = '';
    @Input() placeholder: string = '';

    @Output() onInput: EventEmitter<string> = new EventEmitter<string>();

    constructor() {

    }

    public onInputChange() {
        this.onInput.emit(this.inputValue);
    }

}
