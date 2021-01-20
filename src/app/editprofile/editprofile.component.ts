import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../crud.service';
// import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  profileValue :any;
  ProfileUrlRec : any;
  
  constructor(private act:ActivatedRoute, private crud:CrudService, private route:Router) { }


  Imageurl="http://localhost:4200/assets/images/Untitled.png"
  selectFile(event){
    if(event.target.files){
      var render=new FileReader()
      render.readAsDataURL(event.target.files[0])
      render.onload=(event:any)=>{
        this.Imageurl=event.target.result
      }
    }
  }


  ngOnInit(): void {
    let recordOFUrl = this.act.snapshot.params['myid'];
    this.profileValue = this.act.snapshot.params['myid'];
    console.log(recordOFUrl);
    this.crud.selectCondition("userdata", recordOFUrl).subscribe(
      (res)=>{
        console.log(res);
        this.ProfileUrlRec = res[0];
      }
    )
    console.log(recordOFUrl);
    
  }

  

  
  updateProfileRec(a1,a2,a3,a4,a5,a6,a7,a8){
    var obj = {
      firstname: a1.value,
      lastname: a2.value,
      email: a3.value,
      mobile:a4.value,
      age:a5.value,
      state:a6.value,
      country:a7.value,
      address:a8.value

    }
    console.log("updateProfileRec");
    console.log("profileValue");
    
    

    this.crud.updatedata("userdata", obj, this.profileValue).subscribe(
      (res)=>{
        console.log(res);
        this.route.navigate(['/profile']);
      }
    )
  }



  

}
