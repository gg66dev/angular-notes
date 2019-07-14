import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-routes-default',
  templateUrl: './using-routes-default.component.html',
})
export class UsingRoutesDefaultComponent implements OnInit, OnDestroy {

  key: string;

  subscription: Subscription;

  constructor(private route: ActivatedRoute,  private router: Router) {}

  ngOnInit() {
      this.subscription = this.route.paramMap.subscribe(
        params => this.key = params.get('key')
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onBack() {
    this.router.navigate(['ex-routes']);
  }

}

