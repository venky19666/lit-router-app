import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators';

@customElement('home-page')
export class HomePage extends LitElement {
  render():unknown {
    return html`
      <div>
        Home page
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'home-page': HomePage
  }
}
