import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { BasketballPlayer } from './models/player';

@Injectable()
export class PlayerService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private playersUrl = 'http://localhost:8081/api/players';

    constructor(private http:Http) {}
    
    getPlayers(): Observable<BasketballPlayer[]> {
        return this.http.get(this.playersUrl)
                        .map(response => response.json() as BasketballPlayer[])
                        .catch(this.handleError);
    }

    deletePlayer(player: BasketballPlayer): Observable<any> {
        let updateUrl = `${this.playersUrl}/${player.id}`;
        return this.http.delete(updateUrl)
                        .map(this.success)
                        .catch(this.handleError);
    }

    insertPlayer(player: BasketballPlayer): Observable<BasketballPlayer> {
        return this.http.post(this.playersUrl, JSON.stringify(player), { headers: this.headers })
                        .map(response => response.json() as BasketballPlayer)
                        .catch(this.handleError);
    }

    updatePlayer(player: BasketballPlayer): Observable<any> {
        let updateUrl = `${this.playersUrl}/${player.id}`;

        return this.http.put(updateUrl, JSON.stringify(player), { headers: this.headers })
                        .catch(this.handleError);
    }

    private success(): Observable<any> {
        return Observable.create();
    }

    private handleError(response: Response): Observable<any> {
        let errorMessage = `${response.status} - ${response.statusText}`;
        return Observable.throw(errorMessage);
    }
}