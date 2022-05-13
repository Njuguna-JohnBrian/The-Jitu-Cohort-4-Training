import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline',
  templateUrl: './inline.component.html',
  styles: [
    `
      p {
        color: red;
      }
    `,
  ],
})
export class InlineComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
