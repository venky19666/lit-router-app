import { LitElement, PropertyValues, html } from 'lit';
import { customElement } from 'lit/decorators';
import { getAPIData } from '../utils/common-services';

@customElement('home-page')
export class HomePage extends LitElement {
  async fetchData() {
    const query = `{
          countries {
            code
            name
            emoji
          }
        }`;
    const data = await getAPIData(this, query, false);
    console.log(data);
  }

  protected async firstUpdated(_changedProperties: PropertyValues) {
    this.fetchData();
  }

  render(): unknown {
    return html` <div>Home page</div> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'home-page': HomePage;
  }
}
