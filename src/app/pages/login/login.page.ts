import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  emailCheck = '^[a-z0-9._*+-]+@[a-z0-9.-]+\\.[a-z]{2,5}$';

  emailReq() {
    return this.miFormulario.controls['email']?.errors?.['required'] &&
          this.miFormulario.controls['email']?.touched;
  }

  emailPattern() {
    return this.miFormulario.controls['email']?.errors?.['pattern'] &&
           this.miFormulario.controls['email']?.touched;
  }
  
  miFormulario: FormGroup = this.fb.group({
    email: ['',[Validators.required, Validators.minLength(5), Validators.maxLength(255)]],
    password: ['',[Validators.required, Validators.minLength(8), Validators.maxLength(255)]],
  });

  constructor(private fb: FormBuilder, private router: Router, private AS: AuthService) {}

  ngOnInit() {
    this.miFormulario.setValue({
      email: '',
      password: ''
    });
  }
  campoValido(campo: string) {
    return this.miFormulario.controls[campo].errors &&
           this.miFormulario.controls[campo].touched;
  }
  save() {
    console.log(this.miFormulario.value);
    this.AS.login(this.miFormulario.value).subscribe((data: any) =>{
      console.log(data);
      if(data.resultado){
        this.router.navigate(['/home']);
      }else{
        alert(data.mensaje);
      }
    });
  }
}
