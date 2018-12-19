import { Component, OnInit } from '@angular/core';
import { RoomService } from '../../services/room.service';
import { PlayerService } from '../../services/player.service';
import { Player } from '../../models/player.model';
import { Room } from '../../models/room.model';

@Component({
	selector: 'app-game',
	templateUrl: './game.component.html',
	styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
	rooms: Array<Room>;
	players: Array<Player>;

	constructor(private roomService: RoomService, private playerService: PlayerService) { }

	ngOnInit() {
		this.roomService.getAll().subscribe(data => {
			this.rooms = data;
		});
		this.playerService.getAll().subscribe(data => {
			this.players = data;
		});
	}
	
	getColorFromPlayer(player: Player): string {
		var colorMap = {
			'Tueur': 'dark',
			'Proie violette': 'link',
			'Proie bleue': 'info',
			'Proie rouge': 'danger',
			'Proie orange': 'warning',
			'Proie blanche': 'light',
		};
		return colorMap[player.name];
	}
}
