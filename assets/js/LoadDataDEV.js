window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'G-KW15Q1QG97');
var can_redirect = false;

function LoadData() {
    var TitleData = localStorage.getItem("Title");
    var FaviData = localStorage.getItem("Favi");
    console.log("Loaded title `" + TitleData + "` with icon `" + "/" + FaviData + "`");
    if (TitleData === null) {
        document.title = "JustStudy";
        document.querySelector("link[rel='shortcut icon']").href = '/assets/img/favicon.ico';
    }
    else {
        document.title = TitleData;
        document.querySelector("link[rel='shortcut icon']").href = "/" + FaviData;
    }

};

let key_input_data = "";
document.addEventListener('keydown', function (event) {
    key_input_data = "";
    const keys = new Set();

    if (event.ctrlKey) keys.add('Ctrl');
    if (event.altKey) keys.add('Alt');
    if (event.shiftKey) keys.add('Shift');
    if (event.metaKey) keys.add('Meta');
    keys.add(event.key);
    key_input_data = Array.from(keys).join('+');

    const urls = [
        "https://senecalearning.com/",
        "https://www.sparxmaths.com",
        "https://www.tassomai.com"
    ];

    if (key_input_data == localStorage.getItem("panickey")) {
        if (localStorage.getItem("Title") == "Seneca - Learn 2x Faster") {
            window.location.href = urls[0];
        } else if (localStorage.getItem("Title") == "Sparx Maths - Home") {
            window.location.href = urls[1];
        } else if (localStorage.getItem("Title") == "Tassomai") {
            window.location.href = urls[2];
        } else if (localStorage.getItem("Title") == "JustStudy") {
            window.location.href = urls[Math.floor(Math.random() * 3)];
        }
    }

});
window.addEventListener("blur", () => {
    if (key_input_data == "Alt" && localStorage.getItem("redirect") === 'true') {
        const urls = [
            "https://senecalearning.com/",
            "https://www.sparxmaths.com",
            "https://www.tassomai.com"
        ];
        if (localStorage.getItem("Title") == "Seneca - Learn 2x Faster") {
            console.log("redirecting")
            window.location.href = urls[0];
        } else if (localStorage.getItem("Title") == "Sparx Maths - Home") {
            window.location.href = urls[1];
        } else if (localStorage.getItem("Title") == "Tassomai") {
            window.location.href = urls[2];
        } else if (localStorage.getItem("Title") == "JustStudy") {
            console.log("redirecting")
            window.location.href = urls[Math.floor(Math.random() * 3)];
        }
    }
})

function MakeThing() {
    if (!document.body || !document.head) {
        console.error("DOM not ready, delaying script execution.");
        document.addEventListener("DOMContentLoaded", MakeThing);
        return;
    }

    const style = document.createElement('style');
    style.innerHTML = `body { overflow: hidden; }`;
    document.head.appendChild(style);

    const script = document.createElement("script");
    script.src = "/assets/js/teacher.js";
    script.onerror = function () {
        console.error("Failed to load the script:", script.src);
    };
    document.head.appendChild(script);
}

LoadData();
function MakeThing() {
    const style = document.createElement('style');
    style.innerHTML = `
    body{
        overflow: hidden;
    }
    `;
    document.body.appendChild(style);
    const script = document.createElement("script");
    script.src = "/assets/js/teacher.js";
    script.onerror = function () {
        console.error("Failed to load the script:", script.src);
    };
    document.head.appendChild(script);
}

document.addEventListener("DOMContentLoaded", function () {
    MakeThing();
});


function allStorage() {
    const values = [];
    const keys = Object.keys(localStorage);

    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if (key === 'tokendetails' || key === 'loggedin') {
            continue;
        }
        values.push(localStorage.getItem(key));
    }

    return values;
}



async function run() {
    let value = localStorage.getItem('loggedin');
    if (value == "true") {
        let details = localStorage.getItem('tokendetails');
        if (details == null) {
            localStorage.setItem('tokendetails', `{username: "null", password: "null"}`);
        }

        let allData = allStorage();
        let loginDetails = JSON.parse(localStorage.getItem('tokendetails'));
        let username = loginDetails.username;
        let passwordencoded = loginDetails.password;
        let password = atob(passwordencoded);

        return console.log(password);


    } if (value == null) {
        localStorage.setItem('loggedin', false);
    } else {
        console.log('Not Logged In!');

    }
}

setTimeout(run, 2000);
setInterval(run, 2000);

(function () {
    let sessionId = sessionStorage.getItem('sessionId');
    if (!sessionId) {
        sessionId = 'sess-' + Math.random().toString(36).substr(2, 9);
        sessionStorage.setItem('sessionId', sessionId);
    }

    function sendHeartbeat() {
        const payload = {
            sessionId: sessionId,
            url: window.location.href,
            userAgent: navigator.userAgent
        };

        fetch('/api/activeuser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
            .then(response => response.json())
            .then(data => {
                console.log('Heartbeat sent:', data);
            })
            .catch(err => {
                console.error('Error sending heartbeat:', err);
            });
    }

    sendHeartbeat();

    setInterval(sendHeartbeat, 60000);
})();
