import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { CompositionType } from './composition';
import { makeRandomColor } from './util';

const styles = css`
  div {
    aspect-ratio: 1;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    box-sizing: border-box;
  }

  .one {
    min-block-size: 100px;
    min-inline-size: 100px;
    max-block-size: calc(100vh - 2rem);
    background-color: var(--square-color-1);
    margin: auto;
  }
  
  .two {
    inline-size: 80%;
    background-color: var(--square-color-2);
    margin-block-end: calc(1/20 * 100%);
  }
  
  .three {
    inline-size: 75%;
    background-color: var(--square-color-3);
    margin-block-end: calc(1/16 * 100%);
  }
  
  .four {
    inline-size: calc(2/3 * 100%);
    background-color: var(--square-color-4);
    margin-block-end: calc(1/12 * 100%);
  }
`;

@customElement('homage-to-the-square')
export class HomageToTheSquare extends LitElement {
  static styles = [styles];

  @property({ attribute: 'composition-type', reflect: true })
  compositionType: CompositionType = CompositionType.ONE;

  @property({ type: Boolean, reflect: true })
  random = false;

  @property({ reflect: true })
  colors = 'rgb(132,200,237) rgb(196,196,194) rgb(253,250,243) rgb(255,226,10)';

  private randomizeColors() {
    this.colors = `${makeRandomColor()} ${makeRandomColor()} ${makeRandomColor()} ${makeRandomColor()}`;
  }

  private randomizeComposition() {
    const randomNumber = (Math.floor(Math.random() * 4) + 1).toString() as CompositionType;
    this.compositionType = randomNumber;
  }

  private configureComposition() {
    if(this.compositionType !== CompositionType.ONE) return `--square-color-${this.compositionType}: transparent;\n`;
    else return '';
  }

  private configureColors() {
    let colorConfig = ''
    const colors = this.colors.split(' ');
    colors.forEach((color, index) => {
      colorConfig += `--square-color-${index + 1}: ${color};\n`;
    });
    return colorConfig;
  }

  private configure() {
    let config = '';
    if (this.random) {
      this.randomizeColors();
      this.randomizeComposition(); 
    } 
    config += this.configureColors();
    config += this.configureComposition();
    return config;
  }

  render() {
    return html`<figure style="${this.configure()}">
                  <div class="one">
                    <div class="two">
                      <div class="three">
                        <div class="four"></div>
                      </div>
                    </div>
                  </div>
                  <figcaption><slot></slot></figcaption>
                </figure>`;
  }
}
