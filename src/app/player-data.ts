import { InMemoryDbService } from 'angular-in-memory-web-api';

export class BasketballPlayerData implements InMemoryDbService {
  createDb() {
    let players = [
      { id: 1, firstName: 'Lebron', lastName: 'James', description: 'Captain of the Cavaliers and a 3 time champion.' },
      { id: 2, firstName: 'Kyrie', lastName: 'Irving', description: 'One of the best ball handlers and scorers in the NBA.' },
      { id: 3, firstName: 'Kevin', lastName: 'Love', description: 'A three point threat and a rebounding machine.' }
    ];
    
    return {players};
  }
}