import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ContentService} from '../../services/content/content.service';

@Component({
  selector: 'app-projects-details',
  templateUrl: './projects-details.component.html',
  styleUrls: ['./projects-details.component.css']
})
export class ProjectsDetailsComponent implements OnInit {
  projectName: String;
  project: Array<any> = [];

  constructor(private route: ActivatedRoute, private content: ContentService) { }

  ngOnInit() {
    this.route.params
      .map(params => params['name'])
      .subscribe( (name) => {
        this.projectName = name;
        this.content.getProjects()
          .subscribe((data) => {
            this.project = data.filter((item) => {
              return item.name === this.projectName;
            })[0];
          });
      });
  }

}
