import { SixteenSegment } from './SixteenSegment.js';
import { SevenSegment } from './SevenSegment.js';

class SegmentDisplay extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.canvas = document.createElement('canvas');
        this.shadowRoot.appendChild(this.canvas);
      
        this.style.width = '100%';
        this.style.display = 'block';

        this.context = this.canvas.getContext('2d');
        this.segment = null;
        
        window.addEventListener('resize', () => {
            this.render();
            this.updateDisplay();
        });
    }

    connectedCallback() {
        this.render();
        this.initializeSegment();
    }

    initConfig() {
        var settings = {
            X : 0,
            Y : 0,
            SegmentWidth : 0.12,
            BevelWidth : 0.49,
            SegmentInterval : 0.025,
            SideBevelEnabled : false,
            Padding : 15,
            Spacing : 10,
            FillLight : '#9eff0d',
            FillDark : '#0c1401',
            StrokeLight : '#ff0000',
            StrokeDark : '#550000',
            StrokeWidth : 0
        };

        Object.assign(this.segment, settings);
    }

    render() {
        this.canvas.width = this.offsetWidth;
        this.canvas.height = 130;
    }

    initializeSegment() {
        const type = this.getAttribute('type');

        if (!type) {
            throw new Error('Type is required');
        } else {
            if (type == 'sixteen') {
                this.segment = new SixteenSegment(1, this.canvas);
            } else if (type == 'seven') {
                this.segment = new SevenSegment(1, this.canvas);
            }
            this.initConfig();
            this.updateDisplay();
        }        
    }

    updateDisplay() {
        const text = this.getAttribute('text') || ' ';
        this.segment.DispayText(text.toUpperCase());
    }

    static get observedAttributes() {
        return ['text'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'text') {
            this.updateDisplay();
        }
    }
}

customElements.define('segment-display', SegmentDisplay);