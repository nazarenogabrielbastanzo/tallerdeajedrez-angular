import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  formSignUp: FormGroup;
  formLogin: FormGroup;

  // Expresión regular para validar el formato de un email
  emailRegex = /^\w+[\.-]?\w+@\w+[\.-]?\w+\.\w{2,3}$/;

  constructor(
    private formBuilder: FormBuilder,
    public afAuth: AngularFireAuth,
    private router: Router
  ) {
    // métodos para construir la lógica de los formularios
    this.buildFormLogin();
    this.buildFormSingUp();
  }

  ngOnInit() { }

  buildFormLogin() {
    // lógica del formulario del login
    this.formLogin = this.formBuilder.group({
      emailLogin: ['', [Validators.required, Validators.pattern(this.emailRegex)]],
      passwordLogin: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(50)]],
    });
  }

  buildFormSingUp() {
    // lógica del formulario de registro
    // es necesario que se valide el mínimo de caracteres de la contraseña dado que firebase requiere al menos 6 caracteres
    this.formSignUp = this.formBuilder.group({
      emailSingUp: ['', [Validators.required, Validators.pattern(this.emailRegex)]],
      passwordSingUp: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(50)]],
    });
  }

  // método para registrar un usuario
  singUp() {
    const email = this.formSignUp.value.emailSingUp;
    const password = this.formSignUp.value.passwordSingUp;
    // el método createUserWithEmailAndPassword recibe un email y una contraseña que son de tipo string
    this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(result => {
      console.log(result);
      // se redirecciona al admin dado que luego de un registro Firebase hace un login automático
      // En este caso es admin, pero se puede redirigir a otro path
      this.router.navigate(['/admin']);
    }).catch(error => {
      console.log(error);
    });
  } // end singUp

  // método para iniciar sesión
  singIn() {
    const email = this.formLogin.value.emailLogin;
    const password = this.formLogin.value.passwordLogin;
    // el método signInWithEmailAndPassword recibe un email y una contraseña que son de tipo string
    this.afAuth.auth.signInWithEmailAndPassword(email, password).then(result => {
      console.log(result);
      // se redirecciona al admin si los datos del usuario son validos
      // En este caso es admin, pero se puede redirigir a otro path
      this.router.navigate(['/admin']);
    }).catch(error => {
      // se ejecuta este código, si se tiene un error o los datos del usuario no son válidos
      console.log(error);
    });
  }// end singIn

}
