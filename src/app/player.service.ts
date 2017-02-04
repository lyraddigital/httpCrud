import { Injectable } from '@angular/core';

import { BasketballPlayer } from './models/player';

@Injectable()
export class PlayerService {
    players: BasketballPlayer[] = [
            new BasketballPlayer("Lebron", "James", "Captain of the Cavaliers and a 3 time champion."),
            new BasketballPlayer("Kyrie", "Irving", "One of the best ball handlers and scorers in the NBA."),
            new BasketballPlayer("Kevin", "Love", "A three point threat and a rebounding machine."),
    ];
    
    getPlayers(): Promise<BasketballPlayer[]> {
        return new Promise(resolve => {
            setTimeout(() => resolve(this.players), 2000);
        });
    }

    deletePlayer(player: BasketballPlayer): Promise<any> {
        return new Promise(resolve => {
            setTimeout(() => {
                var index = this.players.indexOf(player, 0);

                if (index > -1) {
                   this.players.splice(index, 1);
                }
            }, 1000);
        });
    }

    insertPlayer(player: BasketballPlayer): Promise<any> {
        return new Promise(resolve => {
            setTimeout(() => {
                this.players.push(player);
            }, 1000);
        });
    }

    updatePlayer(player: BasketballPlayer): Promise<any> {
        // We aren't doing anything for this.
        return Promise.resolve();
    }
}