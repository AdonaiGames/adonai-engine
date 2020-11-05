import { Component, template, define, animate } from '../import.js';
import html from '../templates/engine.js';

export class Engine extends Component {
    plugins = {};

    constructor() {
        super();

        this.setAttribute('tabindex', 0);
    }

    static template = template(html);

    static get observedAttributes() { return ['src']; }

    slotChangedCallback(slot, addedElements, deletedElements) {
        addedElements.forEach(element => element.adapt(this.plugins));
    }

    attributeChangedCallback(attribute, previousValue, currentValue) {
        fetch(currentValue).then(response => response.json()).then(options => this.load?.(options));
    }

    connectedCallback() {
        animate((delta, elapsed) => {
            this.update?.(delta, elapsed);
            return this.isConnected;
        });
    }
}

define('quantum-engine', Engine);