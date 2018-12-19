import { Component, OnInit } from '@angular/core';
import { RoomService } from '../shared/room/room.service';

@Component({
	selector: 'app-room-list',
	templateUrl: './room-list.component.html',
	styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {
	rooms: Array<any>;


	constructor(private roomService: RoomService) { }

	ngOnInit() {
		this.roomService.getAll().subscribe(data => {
			this.rooms = data;
		});
	}
}
