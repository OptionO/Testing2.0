// window.dataLayer = window.dataLayer || [];
// function gtag() { dataLayer.push(arguments); }
// gtag('js', new Date());
// gtag('config', 'G-KW15Q1QG97');
var can_redirect = false;

function LoadData() {
    var TitleData = localStorage.getItem("Title");
    var FaviData = localStorage.getItem("Favi");
    console.log("Loaded title `" + TitleData + "` with icon `" + "/" + FaviData + "`");
    if (TitleData === null) {
        document.title = "JustStudy";
        document.querySelector("link[rel='shortcut icon']").href = '/assets/img/favicon.ico';
        window.parent.postMessage({
            type: "update-meta",
            title: "JustStudy",
            favicon: "/assets/img/favicon.ico"
        })
    }
    else {
        document.title = TitleData;
        document.querySelector("link[rel='shortcut icon']").href = "/" + FaviData;
        window.parent.postMessage({
            type: "update-meta",
            title: TitleData,
            favicon: FaviData
        })

    }

};

let wpwwrxls_key_input_data = "";

const urls = {
    "Seneca - Learn 2x Faster": "https://senecalearning.com/",
    "Sparx Maths - Home": "https://www.sparxmaths.com",
    "Tassomai": "https://www.tassomai.com",
    "MathsWatch": "https://www.mathswatch.com",
};

document.addEventListener('keydown', function (event) {
    wpwwrxls_key_input_data = "";
    const keys = new Set();

    if (event.ctrlKey) keys.add('Ctrl');
    if (event.altKey) keys.add('Alt');
    if (event.shiftKey) keys.add('Shift');
    if (event.metaKey) keys.add('Meta');
    keys.add(event.key);
    wpwwrxls_key_input_data = Array.from(keys).join('+');

    if (wpwwrxls_key_input_data === localStorage.getItem("panickey")) {
        const currentTitle = localStorage.getItem("Title");
        if (urls[currentTitle]) {
            window.location.href = urls[currentTitle];
        } else if (currentTitle === "JustStudy") {
            const obj_urls = Object.values(urls);
            window.location.href = obj_urls[Math.floor(Math.random() * obj_urls.length)];
        }
    }


});
window.addEventListener("blur", () => {
    if (wpwwrxls_key_input_data == "Alt" && localStorage.getItem("redirect") === 'true') {
        const currentTitle = localStorage.getItem("Title");

        if (urls[currentTitle]) {
            window.location.href = urls[currentTitle];
        } else if (currentTitle === "JustStudy") {
            const obj_urls = Object.values(urls);
            window.location.href = obj_urls[Math.floor(Math.random() * obj_urls.length)];
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
//document.addEventListener("DOMContentLoaded", MakeThing)
MakeThing()

if (window.__scriptInjected) {
    window.dispatchEvent(new Event("load"));
}


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


(function initializeGtag() {
    var gtagScript = document.createElement('script');
    gtagScript.async = true;
    gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-3EEQ5QQ176';
    document.head.appendChild(gtagScript);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
        dataLayer.push(arguments);
    }
    window.gtag = gtag;

    gtag('js', new Date());
    let urls = ["G-3EEQ5QQ176", "G-KW15Q1QG97", "G-3R6G7D57Z2", "G-YNTJ82RFRH"];
    urls.forEach(id => {
        gtag('config', id);
    });

    console.info('[Analytics] gtag.js initialized with multiple IDs');
})();


//document.addEventListener('DOMContentLoaded', initializeGtag);
//if (window.__scriptInjected){
//  window.dispatchEvent(new Event('DOMContentLoaded'));
//};