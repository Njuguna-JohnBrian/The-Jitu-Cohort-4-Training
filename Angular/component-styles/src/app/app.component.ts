import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<style>
    *{background: yellow;}
  </style>
  <section>
    <link rel="stylesheet" href="../styles.css">
      <p class="red"></p>
      <p class="green"></p>
      <p class="red"></p>
      <p class="green"></p>
      <p class="red"></p>
      <p class="green"></p>
      <p class="red"></p>
      <p class="green"></p>
      <p class="red"></p>
      <p class="green"></p>
      <p class="red"></p>
      <p class="green"></p>
      <p class="red"></p>
      <p class="green"></p>
      <p class="red"></p>
      <p class="green"></p>
      <p class="red"></p>
      <p class="green"></p>
    </section>

    <app-inline></app-inline>`,
  styles: [
    `
      section {
        height: auto;
        width: 100vw;
        display: grid;
        grid-template-columns: repeat(3, minmax(200px, 1fr));
      }
      .red {
        background-color: red;
        height: 10em;
        width: 10em;
      }

      .green {
        background-color: green;
        height: 10em;
        width: 10em;
      }
    `,
  ],
})
export class AppComponent {
  title = 'component-styles';
}
