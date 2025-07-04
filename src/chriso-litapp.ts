import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Router } from '@lit-labs/router';
import { baseStyles } from './styles';
import './main-navigation';
import './timer/my-timer';
import './buncha-timers';

@customElement('chriso-litapp')
export class ChrisoLitapp extends LitElement {
  static styles = [baseStyles];

  private router = new Router(this, [
    {
      path: '/3cutetimers',
      render: () => html`<buncha-timers></buncha-timers>`
    },
    { path: '/about', render: () => html`<h1>About</h3>` },
    {
      path: '/',
      render: () => {
        console.log('rendered default route');
        return html`<p>Welcome to Home</p>`;
      }
    }
  ]);

  render() {
    return html`
      <main-navigation></main-navigation>
      <main>${this.router.outlet()}</main>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'chriso-litapp': ChrisoLitapp;
  }
}
