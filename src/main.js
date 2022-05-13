import App from './App.vue'

import { defineCustomElement } from 'vue'

const SocialCardElement = defineCustomElement(App)

customElements.define('social-card-element', SocialCardElement)
