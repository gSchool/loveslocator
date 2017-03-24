requirejs([
    '../../node_modules/vue/dist/vue',
    'text!template/LocationSelector.html'
], (Vue, template) => {
    Vue.component('location-selector', {
        template: template
    })
    const div = document.createElement('div');
    div.id = 'myDiv';
    div.innerHTML = template;
    document.body.appendChild(div);
    new Vue({
        el: '#myDiv',
        data: {
            message: 'Hello Vue.js!'
        }
    });
    console.log(document.body.children.length);
})