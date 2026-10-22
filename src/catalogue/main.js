import {createApp} from 'vue';
import Catalogue from './Catalogue.vue';
import Access from '../account/Access.vue';
import Proposal from '../account/Proposal.vue';
export function mountCatalogue(element, options) { return createApp(Catalogue, options).mount(element); }

export function mountAccess(element, options) { return createApp(Access, options).mount(element); }
export function mountProposal(element, options) { return createApp(Proposal, options).mount(element); }
