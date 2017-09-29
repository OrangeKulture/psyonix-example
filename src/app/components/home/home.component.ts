import { Component, OnInit } from '@angular/core';
import {ContentService} from '../../services/content/content.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: Array<any> = [];


  constructor(private contentService: ContentService) {}

  ngOnInit() {
    this.contentService.fetchData()
      .subscribe((data) => {
        this.items = data;
      });
  }

  getWidth(){
    if(window.screen.width > 960) {
      return '1250';
    }else if(window.screen.width < 500) {
      return '300';
    }
  }


}
