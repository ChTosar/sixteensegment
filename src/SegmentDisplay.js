import { SixteenSegment } from './SixteenSegment.js';

class SegmentDisplay extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.canvas = document.createElement('canvas');
        this.shadowRoot.appendChild(this.canvas);
        
        this.settings = {
            SegmentWidth: 0.12,
            BevelWidth: 0.49,
            SegmentInterval: 0.025,
            SideBevelEnabled: false,
            Padding: 15,
            Spacing: 10,
            FillLight: '#9eff0d',
            FillDark: '#0c1401',
            StrokeLight: '#ff0000',
            StrokeDark: '#550000',
            StrokeWidth: 0
        };

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

    render() {
        this.canvas.width = this.offsetWidth;
        this.canvas.height = 130;
    }

    initializeSegment() {
        this.segment = new SixteenSegment(1, this.canvas);
        this.updateDisplay();
    }

    updateDisplay() {
        const text = this.getAttribute('text') || '';
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