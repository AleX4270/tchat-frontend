import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-friend-box',
  templateUrl: './friend-box.component.html',
  styleUrls: ['./friend-box.component.scss']
})
export class FriendBoxComponent {
    @Input() username: string = '';
    @Input() status: string = '';
    @Input() pictureUrl: string = '';
}
