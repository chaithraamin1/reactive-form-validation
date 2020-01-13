import { Component } from '@angular/core';
import{FormBuilder,FormGroup,Validators}from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reactiveform-validation';
  rForm:any;
  post:any;
  description:string='';
  name:string=''
  constructor(private fb:FormBuilder){
    this.rForm=fb.group({
      'name':['',Validators.required],
      'description':['',([Validators.required,
        Validators.minLength(3),
        Validators.maxLength(500)])],
       'validate':''
    });
  }
  addPost(post)
  {
this.description=post.description;
this.name=post.name;

  }
}
