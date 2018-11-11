import "./public/styles/main.scss";
const NaviBar = require('./navi-bar');


document.addEventListener('DOMContentLoaded', () => {
    loadData();
});

function loadData() {

    var xhr = new XMLHttpRequest();
    var url = "http://localhost:3400/api/nav.json";
    xhr.open("GET", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = () => {

        if (xhr.readyState === 4 && xhr.status === 200) {
            var json = JSON.parse(xhr.responseText);
            let eventCal = new NaviBar(json);
            eventCal.renderHugeNagiBar();
        }
    };

    xhr.send();

}