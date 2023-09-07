//import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  
  signupUsers: any[]=[];
  signupObj: any={
    userName: '',
    email: '',
    password :''
  };
  loginObj: any ={

    userName:'',
    password:''

  }

  constructor(){ }
  ngOnInit(): void{

    const localdata= localStorage.getItem('signUpUsers');
    if (localdata != null){
      this.signupUsers = JSON.parse(localdata);

    }
     
  }
  onSignUp(){
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signUpUsers',JSON.stringify(this.signupUsers));

    this.signupObj={
      userName: '',
      email:'',
      password:''
    };

  }
  onLogin(){

    debugger

    const isUser =this.signupUsers.find(m=> m.userName == this.loginObj.userName && m.password == this.loginObj.password);

    if(isUser != undefined){
      alert("User login sucessfully");
    }else{
      alert("Invalid user id and password");
    }


  }

}
