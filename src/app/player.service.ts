import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { BasketballPlayer } from './models/player';

@Injectable()
export class PlayerService {
    private playersUrl = 'http://localhost:8081/api/players';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http:Http) {}

    getPlayers(): Promise<BasketballPlayer[]> {
        return this.http.get(this.playersUrl)
                        .toPromise()
                        .then(response => response.json() as BasketballPlayer[])
                        .catch(this.handleError);
    }

    deletePlayer(player: BasketballPlayer): Promise<any> {
        let deleteUrl = `${this.playersUrl}/${player.id}`;

        return this.http.delete(deleteUrl)
                        .toPromise()
                        .then(this.success)
                        .catch(this.handleError);
    }

    insertPlayer(player: BasketballPlayer): Promise<BasketballPlayer> {
        return this.http.post(this.playersUrl, JSON.stringify(player), { headers: this.headers })
                        .toPromise()
                        .then(response => response.json() as BasketballPlayer)
                        .catch(this.handleError);
    }

    updatePlayer(player: BasketballPlayer): Promise<any> {
        let updateUrl = `${this.playersUrl}/${player.id}`;

        return this.http.put(updateUrl, JSON.stringify(player), { headers: this.headers })
                        .toPromise()
                        .then(this.success)
                        .catch(this.handleError);
    }

    private handleError(error: any) {
        console.log('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    private success(): Promise<any> {
        return Promise.resolve();
    }
}