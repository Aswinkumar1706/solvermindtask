import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../app-service/api.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  selectedUser = '';
  selecteduser: string;
  users: any = [];
  constructor(private apiService: ApiService) {
    this.apiService.getAllUsers().subscribe((res) => {
      this.users = res;
    });
  }

  ngOnInit(): void {}
  applyFilter() {
    this.selecteduser = this.selectedUser;
  }
  clearFilter() {
    this.selecteduser = '';
    this.selectedUser = '';
  }
  resetItem(value) {
    if (value) {
      this.clearFilter();
    }
  }
}
