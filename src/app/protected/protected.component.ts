import { Component } from '@angular/core';
import { AuthenticationService } from '../_services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-protected',
  templateUrl: 'protected.component.html'
})
export class ProtectedComponent { 
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  logout() {
    this.authenticationService.logout();
    this.router.navigateByUrl('/home');
  }
}