import { html, LitElement } from "lit-element";
import { customElement } from "lit/decorators";

@customElement('main-layout')
export class MainLayout extends LitElement {
    protected render(): unknown {
        return html`
            MainLayout
        `
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'main-layout': MainLayout
    }
}