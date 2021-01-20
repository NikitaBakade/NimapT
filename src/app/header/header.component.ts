import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../crud.service';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  values_from_json : any;
  public profileForm : FormGroup;
  
  constructor(private route:Router, private crud:CrudService, private fb:FormBuilder) { }

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
    // console.log(this.fb);
    this.profileForm = this.fb.group({
      img : ['', Validators.required],
      firstname : ['', [Validators.required,Validators.pattern(/^[A-Z]{2,20}$/)]],
      lastname : ['', [Validators.required,Validators.minLength(2),Validators.maxLength(20)]],
      email : ['', [Validators.required, Validators.email]],
      mobile : ['', [Validators.required,Validators.pattern(/^[1-9][0-9]{9}$/)]],
      age : ['', [Validators.required]],
      address : ['', [Validators.required]]
    })
  }


  addProfile(obj){
    // alert("hello");
    // console.log(obj);
    // console.log(obj.value)
    this.crud.postdata("userdata",obj.value).subscribe(
      (res)=>{
        console.log(res);
        // this.route.navigate(['/profile']);
      }
    )
    this.route.navigate(['/profile']);
  }


  

  
}