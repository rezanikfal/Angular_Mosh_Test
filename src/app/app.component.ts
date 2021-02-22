import { Component, OnInit } from '@angular/core';
import { interval, of, from, timer, throwError } from 'rxjs';
import { buffer, catchError, map, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  ngOnInit() {
    // interval(100).pipe(
    //   buffer(interval(1001)),
    //   take(3)
    // ).subscribe(val => console.log(val))


    // of('a').pipe(
    throwError('test').pipe(
      catchError(err => {
        // return of(undefined)
        return err
      })
    ).subscribe(x => console.log(x))
  }
}
