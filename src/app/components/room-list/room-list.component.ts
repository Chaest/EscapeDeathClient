import { Component, OnInit } from '@angular/core';
import { Room } from '../../models/room.model';
import { RoomService } from '../../services/room.service';

@Component({
	selector: 'app-room-list',
	templateUrl: './room-list.component.html',
	styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {
	rooms: Array<Room>;


	constructor(private roomService: RoomService) { }

	ngOnInit() {
		this.roomService.getAll().subscribe(data => {
			this.rooms = data;
		});
	}
}
