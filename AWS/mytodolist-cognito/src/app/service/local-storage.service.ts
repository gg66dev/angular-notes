import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  private getLocalStorage() {
    let storage = window.localStorage || localStorage;
    if (!localStorage) {
      throw new Error('Browser does not support local storage');
    }
    return storage;
  }

  public set(key: string, value: string): void {
    this.getLocalStorage().setItem(key, value);
  }

  public get(key: string): string {
    return this.getLocalStorage().getItem(key);
  }

  public setObject(key: string, value: any): void {
    this.set(key, JSON.stringify(value));
  }

  public getObject(key: string): any {
    return JSON.parse(this.get(key) || '{}');
  }

  public remove(key: string): any {
    this.getLocalStorage().removeItem(key);
  }

}
