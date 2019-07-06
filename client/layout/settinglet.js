import { LitElement, html, css } from 'lit-element'

export class SettingLet extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          display: block;

          padding: 20px;
          text-transform: capitalize;
        }

        slot {
          display: block;
        }

        slot[name='title']::slotted(*) {
          color: #c0504d;
          text-align: left;
          font-size: 1em;
        }
      `
    ]
  }

  render() {
    return html`
      <slot name="title"></slot>
      <slot name="content"></slot>
    `
  }
}

customElements.define('setting-let', SettingLet)
