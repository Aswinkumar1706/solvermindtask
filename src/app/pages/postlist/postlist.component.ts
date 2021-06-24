import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  EventEmitter,
} from '@angular/core';
import { Postmodel } from 'src/app/app-model/postmodel';
import { ApiService } from '../../app-service/api.service';
@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.scss'],
})
export class PostlistComponent implements OnInit, OnDestroy {
  @Input() selecteduser: string;
  @Output() reset = new EventEmitter<boolean>();
  postlist: any;
  selectedUser: any = [1];
  filterpostlist: Postmodel[];
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getAllPost().subscribe((res) => {
      this.postlist = res;
      console.log(this.postlist);
      this.filterpostlist = this.postlist;
    });
  }

  filterByUserId() {
    this.filterpostlist = this.postlist.filter((post) =>
      this.selectedUser.includes(post.userId)
    );
    console.log(this.filterpostlist);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes.selecteduser.currentValue);
    this.selectedUser = changes.selecteduser.currentValue;
    if (this.selectedUser && this.selectedUser.length) {
      this.filterByUserId();
    } else {
      this.filterpostlist = this.postlist;
    }
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
  }
  filterreset() {
    this.reset.emit(true);
  }
}
