import Vue from 'vue'
import Variate from '@variate/vue';

let nuxtConfig = {};
let reporter = null;

<% if(options) { %>
nuxtConfig = <%= JSON.stringify(options, {}) %>;
<% } %>

<% if(options.reporter) { %>
reporter = eval(<%= JSON.stringify(options.reporter, (key, value) => value.toString()) %>);
<% } %>

const options = reporter ? {
    reporter,
    ...nuxtConfig,
}: nuxtConfig;

export default (context, inject) => {
    if(!context.$variate) {
        inject('variate', Variate.install(Vue, options));
    }
}
