import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './reducers';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private store: Store<AppState>) {

  }

  ngOnInit() {
    this.store.select('foo').subscribe(val => console.log('testy', val));

    Observable.of('baz').subscribe(val => console.log('some val', val));
  }
}
