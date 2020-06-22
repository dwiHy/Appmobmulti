import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ServiceProvider {
  API_KEY = 'https://newsapi.org/v2/top-headlines?country=id&apiKey=a9190def866e4af19bf9cac5fc75beeb';

  constructor(public httpClient: HttpClient) {
    console.log('Hello ServiceProvider Provider');
  }

  getNews(){
    return this.httpClient.get(this.API_KEY);
  }

}



