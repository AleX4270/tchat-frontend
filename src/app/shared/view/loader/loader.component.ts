import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit{
    private token: string = '';

    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) {

    }

    ngOnInit(): void {
        this.route.queryParams.subscribe(params => {
            this.token = params['token'];
        });
    }

    redirectToView(): void {
        if(this.token) {
            this.router.navigate(['/'], { queryParams: { token: this.token } });
        }
    }
}
