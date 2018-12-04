import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../../restaurants/restaurant.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>

  constructor(private restaurantsService : RestaurantsService,
              private route : ActivatedRoute) { }

  ngOnInit() {
    // pipe Async faz um subscribe
    this.reviews = this.restaurantsService
      .reviewsOfRestaurant(this.route.parent.snapshot.params['id'])
  }

}
