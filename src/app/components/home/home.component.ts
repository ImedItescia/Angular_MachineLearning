import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loanValidatorForm: FormGroup;

  datas = [
    {
      "question":"What is your job ?",
      "answers":["admin","blue-collar","technician","services","management","retired","entrepreneur","self-employed","housemaid","unemployed","student","unknown"]
    },
    {
      "question":"What is your marital status ?",
      "answers":["married","single","divorced","unknown"]
    },
    {
      "question":"What is your school career ?",
      "answers":["university degree","high school","basic.9y","professional course","basic.4y","basic.6y", "unknown", "illiterate"]
    },
    {
      "question":"Are you house owner ?",
      "answers":["yes","no","unknown"]
    },
    {
      "question":"Are you a tenant ?",
      "answers":["yes","no","unknown"]
    },
    {
      "question":"Contact",
      "answers":["cellular","telephone","unknown"]
    },
    {
      "question":"Month",
      "answers":["may","jul","aug","jun","nov","apr","oct","mar","sep","dec"]
    },
    {
      "question":"Day of week",
      "answers":["thu","mon","tue","wed","fri"]
    },
    {
      "question":"poutcome",
      "answers":["nonexistant","success","failure"]
    }
  ]


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.loanValidatorForm = this.formBuilder.group({
      age : ['', Validators.required],
      duration : ['', Validators.required],
      compaign : ['', Validators.required],
      pdays : ['', Validators.required],
      previous : ['', Validators.required],
      question_form_0: ['', Validators.required],
      question_form_1: ['', Validators.required],
      question_form_2: ['', Validators.required],
      question_form_3: ['', Validators.required],
      question_form_4: ['', Validators.required],
      question_form_5: ['', Validators.required],
      question_form_6: ['', Validators.required],
      question_form_7: ['', Validators.required],
      question_form_8: ['', Validators.required]
    })
  }

  onSubmit(){
    console.log("ok")
  }

}
