import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  allUsers:any;
  constructor(private crud:CrudService, private route:Router) { }

  ngOnInit(): void {
    this.crud.selectdata("userdata").subscribe(
      (res)=>{
        // console.log("Response from service");
        console.log(res);
        this.allUsers = res;
      }
    );
  }

  closetBtn(obj){
    // alert("hello");
    this.route.navigate(['/']);
  }

}
