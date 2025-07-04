import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { baseStyles, jetbrainsFont } from './styles';

@customElement('main-navigation')
export class MainNavigation extends LitElement {
  static styles = [
    baseStyles,
    jetbrainsFont,
    css`
      :host {
        font-size: 1rem;
      }
    `
  ];
  render() {
    return html`
      <nav>
        <a href="/">Home</a>
        <a href="/3cutetimers">3cuteTimers</a>
        <a href="/about">About</a>
      </nav>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'main-navigation': MainNavigation;
  }
}
