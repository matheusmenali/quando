import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor() {}

  cpfValidation() {
    //fake api service
    return true;
  }
}
