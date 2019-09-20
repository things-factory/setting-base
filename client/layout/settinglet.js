import { LitElement, html, css } from 'lit-element'

export class SettingLet extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          display: block;

          padding: var(--setting-content-padding);
          text-transform: capitalize;
        }

        slot {
          display: block;
        }

        slot[name='title']::slotted(*) {
          color: var(--setting-title-color);
          font: var(--setting-title-font);
        }

        slot[name='content']::slotted(*) {
          font: var(--setting-content-font);
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
