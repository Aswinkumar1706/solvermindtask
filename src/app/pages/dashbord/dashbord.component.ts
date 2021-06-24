import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../app-service/api.service'
@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent implements OnInit {
   post:any;
   comments:any;
   albums:any;
   photos:any;
   users:any;
  constructor(private apiService : ApiService) { }

  ngOnInit(): void {

    this.apiService.getAllPost().subscribe((res)=>{
      console.log(res)
    })
  this.apiService.getDashboardData().subscribe(results => {
    // results[0] is our character
    // results[1] is our character homeworld
    console.log(results);
    this.post = results[0];
    this.comments = results[1];
    this.albums = results[2];
    this.photos = results[3];
    this.users = results[4];

  });
   
  }

}
