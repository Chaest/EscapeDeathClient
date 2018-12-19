import {Player} from "./player.model";

export class Room {
    id: number;
    name: string;
    localPlayers: Array<Player>;
    neighbourRooms: Array<number>;
}