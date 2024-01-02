export default class CardAuthor extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' })
    }
    connectedCallback() {
        this.render();
    }
    static get styles() {
        return /* CSS */ `
            :host{
                display: flex;
            }
            ::slotted(.avatar){
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            .content{
                display: flex;
                place-items: center;
                place-content: center;
                gap: 1rem;
                padding: 20px;
            }
            .container{
                display: flex;
                flex-direction: column;
            }
            .container-avatar{
                width: 36px;
                height: 36px;
                border-radius: 50%;
                overflow: hidden;
            }
            ::slotted(.name-author){
                font-size: medium;
            }
            ::slotted(.description){
                font-size: small;
            }
        `
    }
    render() {
        this.shadowRoot.innerHTML = /*html*/ `
            <style>${CardAuthor.styles}</style>
            
            <section class="content" >
                <article class="container-avatar">
                    <slot name="avatar"></slot>
                </article>
                <article class="container">
                    <slot name="name-author"></slot>
                    <slot name="description"></slot>
                </article>
            </section>
        `;
    }
    disconnectedCallback() {
        this.shadowRoot.innerHTML = /* html */ "";
    }
}
globalThis.customElements.define('card-author', CardAuthor);