requirejs(['../node_modules/vue/dist/vue', 'text!template/hello.html'], (Vue, template) => {
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

/*
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAr46SsAFfMgfQWc_AUZ5MFmaGPK8Ec3KM&callback=initMap" async defer></script>
var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8
    });
}
*/