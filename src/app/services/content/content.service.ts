import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ContentService {

  constructor(private http: Http) {
  }

  fetchData() {
    return this.http.get('assets/data/main-content.json')
      .map( res => res.json());
  }

  getProjects() {
    return this.http.get('assets/data/projects.json')
      .map(res => res.json());
  }


}
