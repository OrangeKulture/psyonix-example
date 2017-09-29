import { Component, OnInit } from '@angular/core';
import {ContentService} from '../../services/content/content.service';

@Component({
  selector: 'app-sample-work',
  templateUrl: './sample-work.component.html',
  styleUrls: ['./sample-work.component.css']
})
export class SampleWorkComponent implements OnInit {
  items: Array<any> = [];

  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.contentService.getProjects()
      .subscribe((data) => {
        this.items = data;
      });
  }

}
