import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { SharedService } from 'src/app/shared/shared.service';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  toggleMask = false;
  validCpf = false;

  constructor(
    private fb: FormBuilder,
    private sharedService: SharedService,
    private loginService: LoginService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      cpf: ['', [Validators.required]],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.loginForm.valueChanges.subscribe((value) => {
      if (this.validationCpf(value.cpf)) {
        this.validCpf = true;
      } else this.validCpf = false;
    });
  }

  submit() {
    if (this.loginForm.valid && this.loginService.login()) {
      this.router.navigate(['/dash']);
    }
  }

  validationCpf(paramCpf: string) {
    // deixei o fakeService sem subscribe para facilitar
    return this.sharedService.cpfValidation();
  }
}
