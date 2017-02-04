import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { BasketballPlayer } from './models/player';

@Injectable()
export class PlayerService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private playersUrl = 'app/players';

    constructor(private http:Http) {}
    
    getPlayers(): Promise<BasketballPlayer[]> {
        return this.http.get(this.playersUrl)
                        .toPromise()
                        .then(response => response.json().data as BasketballPlayer[])
                        .catch(this.handleError);
    }

    deletePlayer(player: BasketballPlayer): Promise<any> {
        let updateUrl = `${this.playersUrl}/${player.id}`;
        return this.http.delete(updateUrl)
                        .toPromise()
                        .then(this.success)
                        .catch(this.handleError);
    }

    insertPlayer(player: BasketballPlayer): Promise<BasketballPlayer> {
        return this.http.post(this.playersUrl, JSON.stringify(player), { headers: this.headers })
                        .toPromise()
                        .then(response => response.json().data as BasketballPlayer)
                        .catch(this.handleError);
    }

    updatePlayer(player: BasketballPlayer): Promise<any> {
        let updateUrl = `${this.playersUrl}/${player.id}`;

        return this.http.put(updateUrl, JSON.stringify(player), { headers: this.headers })
                        .toPromise()
                        .then(this.success)
                        .catch(this.handleError);
    }

    private success(): Promise<any> {
        return Promise.resolve();
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}