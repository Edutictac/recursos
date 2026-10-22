import {createApp} from 'vue';
import Catalogue from './Catalogue.vue';
export function mountCatalogue(element, options) { return createApp(Catalogue, options).mount(element); }
