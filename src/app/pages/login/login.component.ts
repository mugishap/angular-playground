import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private titleService: Title) { }
  ngOnInit() {
    this.titleService.setTitle('Login | GIPHY');
  }
}

