import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }


  setItem(key: string, value: string) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key: string) {
    const data = localStorage.getItem(key);
    if(data){
      return JSON.parse(data);
    }
    return null;
  }
}