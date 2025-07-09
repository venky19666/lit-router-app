import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Router } from '@lit-labs/router';
import { baseStyles } from './styles';
import './pages/home';
import './components/layout'


@customElement('chriso-litapp')
export class ChrisoLitapp extends LitElement {
  static readonly styles = [baseStyles];

  private readonly router = new Router(this, [
    
    {
      path: '/',
      render: () => {
        return html`<home-page></home-page>`;
      }
    }
  ]);

  render():unknown {
    return html`
      <main-layout></main-layout>
      <main>${this.router.outlet()}</main>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'chriso-litapp': ChrisoLitapp;
  }
}
