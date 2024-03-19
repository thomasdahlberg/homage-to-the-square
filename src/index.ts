import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('homage-to-the-square')
export class HomageToTheSquare extends LitElement {
  @property()
  sample = ''

  render() {
    return html`<p>Welcome to ${this.sample}</p>`;
  }
}
