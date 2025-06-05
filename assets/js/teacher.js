const pAdbelcTheme = document.createElement("link");
pAdbelcTheme.rel = "stylesheet"
pAdbelcTheme.href = "/assets/js/teacher.css"

const NetworkIcon = "data:image/png;base64,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";
const StorageIcon = "data:image/webp;base64,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";
const TerminalIcon = "data:image/webp;base64,UklGRmwFAABXRUJQVlA4TF8FAAAvf8AfEHWGgrZtmJQ/7XaXQERMAAdVvgMVoFdUq6/WW9lKWaK1bW3b+E4qgRDe2RGWhL7udf+3FP1I0e/TXTRAEXC1bXuTJP9PsSu989HRveuBGDfKScA52DUY125gcpU9ji1goX4HQNsyJd8ESLZt27Sdf7o4frZt2zZjp2rbtm2nZts2VpyH9T7gYJ4T0f8J8L87g2MOy3DBiwAiiCIO6P20IowAvBHLmAN/PWDwYwsSKrhGHU1o+ICOX3TRxxDY+zit+IXuZ7xBxTWqI7bgA+sdRGRQwj10zGCCBnLFFN+4QxFpiH0Cxz4UICzQwAYMUcMueG+wAQVj0CBjBBn5fjR2FNAFDTY6PvSgcTWnjdHQgDdGc7x01oQataGBj3NHc/M6DX6YO1niNATGpQNrb04nFpsz63BnC9awxOIYnNm87Vh6UdVY87ZrNxzV3MqWXi5O1cCZt0rN3dg9O2qx8d6CPF+FMTu2+04uoq1ZelnbRHi6sTrI1LjyVilFF3W6HsaWmwnA24Nd4bJq81xjnXFRF2urBRpOvCcAny9MTlBMlmqrLjsoWX0f25rB9VueEYDv1+dk+8gMxfqhZLTKX+utbFX3zVtw6zsBeLy2IkBW2albC63arKaBqiuJky98JgCv97WFSorKazWrtmjVYWWSAMUJ69j/mgB8OjsuVtZZqcxKolWV4FSR/MtWPyQA367OSPfhJFRVWim7AUwJ6dMufyUAN7NkTkqZVPCyPruXnIjRNwh4XyqajJaNglPMXPnmTrb9Slc+JeADL2XTzFHM8kW7kGNJCG3f/5oAfDiUIMmMXt4ninFdPtyITvzkC58JwIvt9YGOzunl07gpxn9pO5AENXf+re8E4N6yAk2QdFYv7cJPKULm3xBV9AbUbnkGAN8uTUmWLIdb0ylClCJiegTLihh+7D0B+HhqVKRgSfyaXhGlmJgZtJNTplz8SgBe7WoK9IoOx2ZgYpQiboat7PEP6fcHK4s0ryjxbIZFnFRgbL2JgG9Xp6eKXpvtlVRAO2EjfTo7Nspr2IwXWEAn9pKDLYEeQWSd9gzPuLSO8HEbAvNh7Maw+trw9KnBUZ9L0Yl9GsbDEzzh1EOP/7FnTxw+X2wMyvkJXkXAufdvHX5YoQ8ZhpiSk+3QjjFYeIRHHHvp6lu3Piin+Do4vT4e4AFXZv1ybdzDPQZm4/Sj4Q7u8I6Yxfij4RZu8ZaYNdcfDTdwgzfErB6ujTOc8UzM+uVHwwlOeCJm4/Sj4QhHPBKzi//RcIADHohZc7029rDHPTGrhx8NO9jhjph15h8NW9jilpiN048GDRo1Mbv4a0PH+ZlI+TAnZheSjuUDbuJC0dG8x82sIxQdyjvc5P+Bov2qrYhZ1Z4puVt9cqM+chdFL6t3bpQWKXoua2bE7OIpO541uMkaO07xmSyJ2Uz25KzKzUrLJGny4jOJlm3JGS9yGmjKL1qCWBW68tOOTD7wIu9PjOZlWVicBFnyDlVGICdiqNIuHkWhpMSouDGiC5/tp2M+0lG2552euFD4WIIbrzZEl4uo1jeCa1lMDR4mWfDO9w5xlhCL4vRgd+e1S6gcCDX4LvOQeB2+OPtuZ6EOnVDzsO86yNPEGDIvzrRrI3R/sstC0nlDg510ZfHk2Ai9VHkhJ6NhSsbiVm1shL4+82xX1BJ8Yw2NT1Ao2cED3wg9/i7maVkS9+l3Mk3MoZiTWdoSD7KYZz4x3/d3bOtTW5kkK+Ja1NNmqqUfqZ7+Jt1kkOAgXOaQ6ulHqq2iLmRZyY7U9jZQs43wamt+ntsv71xb7zaoIzqq4xp6P0Ud2QbHnWteKr4RfncGAA==";
let pAdbelc_main = null;
let pAdbelc_injected = false;
let pAdbelc_inject_attempts = 0;
let pAdbelc_windowHolder = null;
let pAdbelc_infobar = null;
let pAdbelc_sidebar = null;
let pAdbelc_tab_container = null;
function initTools(){
    pAdbelc_windowHolder = document.createElement("div");
    pAdbelc_windowHolder.classList.add("window-holder");
    pAdbelc_windowHolder.style.display = "none";
    pAdbelc_main = pAdbelc_windowHolder;
    pAdbelc_infobar = document.createElement("div");
    pAdbelc_infobar.classList.add("window-info-bar");
    //pAdbelc_infobar.classList.add("main-outset");

    // const start_menu = document.createElement("div");
    // start_menu.classList.add("start-menu");
    // start_menu.classList.add("main-outset");
    // start_menu.innerHTML = `
    // <div class="start-menu-fade-bar"><span>JustStudy 98</span></div>
    // <div class="start-menu-fade-main-container">
    //     <div class="start-menu-button" onclick="makeWindow('Console', null, pAdbelc_ConsoleHTML, 'Console')">
    //         <img src= "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAOVBMVEUEBARVVVUEBATMzMxNTU0AM2bAwMCGhob///93d3eWlpZmZmZfX1+ZmZkA//9mzP8A/wAAzDMAmTMBRThoAAAAAXRSTlMAQObYZgAAAAFiS0dECIbelXoAAAAHdElNRQfiBhoAMxtZsv6uAAAAt0lEQVQ4y6WT2xKDIAxEFW1ZqgH1/z+2waTexsBMPRHy4BI2zKRpHtOWcU3bleiz4FWgNQTvt5Ov/1fgfvRnk/7eZOfhZePkTqgAHrJlAY5cKwRDUPHwGcbMMO55CxHAZhUQEDNI8V7AFSJLkJMlYFJC4hQCEXTR4QouH1OMpoekAHo2A9qvmGYJ04P+n8SDnA9HD8ssYXpYlLXC1gSd2iy8JAsCbd1rE5d3qFSozUVtslyF58P9BSj9FmCaFR0tAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTA2LTI2VDAwOjUxOjI3LTA0OjAwmWcBOgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0wNi0yNlQwMDo1MToyNy0wNDowMOg6uYYAAAAASUVORK5CYII=">
    //         <span>Console</span>
    //     </div>
    //     <div class="horizontal-seperator"></div>
    //     <div class="start-menu-button" onclick="makeWindow('Network', NetworkIcon, pAdbelc_NetworkHTML, 'Network')">
    //         <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJ1BMVEUAAACAgIAAgAD////AwMAA/wAAAP8AAAAAAIAA//+AAAD//wD/AABOTWPjAAAAAXRSTlMAQObYZgAAAAFiS0dEAxEMTPIAAAAHdElNRQfiBhgXDTbuyMTYAAABJ0lEQVQoz5WRvW6DMBRGnSxI2ZCtsja3dTIjQAztgkKa3QhlLQw3ZQOShogHaFHGDMzdKvUZ8nC9/KVV1aH19h0dX/uzGfvTGum6fv09c3+p4PErCydUAHghPFCUZ7gZBMeRgDPEp7QHN0pRnF5FNLoB4rQExJib3LKsRuLJLQmSL2zf913a8VCfaoRYeML3dZ6yUZIkiIC6kQm9yAjUUCNS3q13BWMEYodmRi5/lru0OzVQiHwlVqoDY8dRGNnG1st7EFCRqZmvzfzjrQVhKBswN8s7t706KKWmwt165fm9BVJK2GcL2zjed2BM5Q8b4RXH3hgDzPcvwqgGgwEcqqoBvcG0omrAazkYTGuNdDIYjVMIg00uRvtuBM4/wT8NjaoX6W8f/wkCGVa/pGMtXQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wNi0yNFQyMzoxMzo1NC0wNDowMM1iPAEAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDYtMjRUMjM6MTM6NTQtMDQ6MDC8P4S9AAAAAElFTkSuQmCC">
    //         <span>Network</span>
    //     </div>
    // </div>
    // `;

    // pAdbelc_main.appendChild(start_menu);

    // const start_btn = document.createElement("div");
    // start_btn.classList.add("info-bar-start");
    // start_btn.classList.add("outset-hover");
    // start_btn.classList.add("main-outset");
    // start_btn.classList.add("main-outset-bt");
    // start_btn.addEventListener("click", async () => {
    //     if (start_menu.classList.contains("open")){
    //         start_menu.classList.remove("open");
    //     } else {
    //         start_menu.classList.add("open");
    //     }
    // })

    // const img = document.createElement("img");
    // img.classList.add("info-bar-start-icon");
    // img.src = "data:image/png;base64,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";
    // start_btn.appendChild(img);
    // const text = document.createElement("span");
    // text.classList.add("info-bar-start-text");
    // text.textContent = "Start";
    // start_btn.appendChild(text);
    // pAdbelc_infobar.appendChild(start_btn);
    pAdbelc_sidebar = document.createElement("div");
    pAdbelc_sidebar.classList.add("window-side-bar");

    pAdbelc_tab_container = document.createElement("div");
    pAdbelc_tab_container.classList.add("info-bar-window-tab-container");
    pAdbelc_sidebar.appendChild(pAdbelc_tab_container);
    
    // const bar_extra = document.createElement("div");
    // bar_extra.classList.add("info-bar-extra");
    // bar_extra.classList.add("main-inset");
    // pAdbelc_infobar.appendChild(bar_extra);

    // const bar_extra_audio_setting_bt = document.createElement("div");
    // bar_extra_audio_setting_bt.classList.add("info-bar-extra-audio-setting-bt");
    // bar_extra.appendChild(bar_extra_audio_setting_bt);

    // const bar_extra_audio_setting = document.createElement("div");
    // bar_extra_audio_setting.classList.add("info-bar-extra-audio-setting-container");
    // bar_extra_audio_setting.classList.add("main-outset");
    // bar_extra_audio_setting.style.display = "none";
    // bar_extra_audio_setting.innerHTML = `
    // <div class="info-bar-extra-audio-text">Volume</div>
    // <div class="info-bar-extra-audio-container">
    // <img class="info-bar-extra-audio-track" src="data:image/png;base64,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"/>
    // <div class="dashed-outline" style="width: 5vh; height: 12vh; margin-left: 1vh; display:flex; align-items:center; justify-content:center;">
    //     <input class="info-bar-extra-audio-slider" type="range" min="0" max="100" value="50">
    // </div>
    // </div>
    // `;
    // pAdbelc_main.appendChild(bar_extra_audio_setting);


    // bar_extra_audio_setting_bt.addEventListener("click", () => {
    //     bar_extra_audio_setting.style.display = bar_extra_audio_setting.style.display == "none" ? "block" : "none"; 
    // });


    const info_bar_time = document.createElement("span");
    info_bar_time.classList.add("info-bar-extra-time");

    const options = {
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    };

    function updateTime() {
        const currentTime = new Date();
        const timeString = currentTime.toLocaleString('en-US', options);
        info_bar_time.textContent = timeString;
    }

    updateTime();
    setInterval(updateTime, 1000);

    pAdbelc_infobar.appendChild(info_bar_time);
}
initTools();
document.addEventListener("keydown", (event) => {
    if (event.key == "`"){
        if (pAdbelc_main.style.display == "none"){
            pAdbelc_main.style.display = "block";
        } else {
            pAdbelc_main.style.display = "none";
        }
    }
});

let pAdbelc_current_window = null
let pAdbelc_current_tab
let pAdbelc_windowids = [];
let pAdbelc_windows = [];
let pAdbelc_consolewindows = [];
let pAdbelc_networkwindows = [];

let pAdbelc_capturedLogs = [];
let pAdbelc_isHandlingError = false;
const pAdbelc_originalConsoleLog = console.log;
const pAdbelc_originalConsoleError = console.error;
const pAdbelc_originalConsoleWarn = console.warn;
const pAdbelc_origFetch = window.fetch;
const pAdbelc_origOpen = XMLHttpRequest.prototype.open;
const pAdbelc_origSend = XMLHttpRequest.prototype.send;


async function attemptInject(){
    if (pAdbelc_injected) return;
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", attemptInject);
        return;
    }

    if (document.body != null || pAdbelc_inject_attempts >= 4){
        console.warn("Injected the tools!");
        if (pAdbelc_inject_attempts >= 4) console.warn("Inject attempt took 4 tries")
        pAdbelc_injected = true;
        pAdbelc_main.appendChild(pAdbelcTheme);
        pAdbelc_main.appendChild(pAdbelc_infobar);
        pAdbelc_main.appendChild(pAdbelc_sidebar)
        document.body.appendChild(pAdbelc_windowHolder);
        
    } else {
        setTimeout(attemptInject, 100);
        pAdbelc_inject_attempts += 1;
    }
}


let pAdbelc_ConsoleHTML = `
    <div class="window-optional-bar" id="option-bar" style="background-color: #2c2c2c;">
        <div class="window-optional-dropdown-holder">
            <div class="window-optional-bt-dropdown">file</div>
            <div class="window-optional-dropdown">
                <div class="window-optional-dropdown-bt" data-id="export">
                    export log
                </div>
                
            </div>
        </div>
        <div class="window-optional-dropdown-holder">
            <div class="window-optional-bt-dropdown">option</div>
            <div class="window-optional-dropdown">
                <div class="window-optional-dropdown-bt" data-id="clear">
                    clear console
                </div>
                <div class="window-optional-dropdown-bt" data-id="help">
                    help
                </div>
            </div>
        </div>
    </div>
    <div class="console" style="background-color: #2c2c2c;">
        <div class="text-container">
        </div>
    </div>
`;
let pAdbelc_NetworkHTML=`
    <div class="network-holder">
        <div class="network-content-pane" style="width: 75px" id="status">
            <div class="network-top-bar">
                <div class="network-top-bar-info-box">Status</div>
            </div>
        </div>
        <div class="network-top-bar-resizer" id="status-resizer"></div>
        <div class="network-content-pane" style="width: 80px" id="method">
            <div class="network-top-bar">
                <div class="network-top-bar-info-box">Method</div>
            </div>
        </div>
        <div class="network-top-bar-resizer" id="method-resizer"></div>
        <div class="network-content-pane" style="width: 350px" id="url">
            <div class="network-top-bar">
                <div class="network-top-bar-info-box">Url</div>
            </div>
        </div>
        <div class="network-top-bar-resizer" id="url-resizer"></div>
        <div class="network-content-pane" style="flex: 1 1 auto; min-width: 70px" id="size">
            <div class="network-top-bar">
                <div class="network-top-bar-info-box">Size</div>
            </div>
        </div>
    </div>
`;
let pAdbelc_StorageHTML =`
<div class="window-optional-bar" id="option-bar" style="background-color: #2c2c2c;">
    <div class="window-optional-dropdown-holder">
        <div class="window-optional-bt-dropdown">file</div>
        <div class="window-optional-dropdown">
            <div class="window-optional-dropdown-bt" data-id="export">
                export data
            </div>
            <div class="window-optional-dropdown-bt" data-id="import">
                import data
            </div>
        </div>
    </div>
</div>
<div class="storage-holder">
    <div class="storage-selector" style="width: 200px">
        <div class="storage-selector-dropdown-holder" id="cookiesholder">
            <div class="storage-selector-dropdown" id="cookies">
                <img class="storage-selector-dropdown-arrow" />               
                <div class="storage-selector-dropdown-icon"></div>
                Cookies
            </div>
            <div class="storage-selector-dropdown-content">
                <div class="storage-selector-button" data-url="local" id="cookies-bt">
                    <div class="storage-selector-button-icon"></div>
                    <div class="storage-selector-button-label">Url</div>
                </div>
            </div>
        </div>
        <div class="storage-selector-dropdown-holder" id="localstorageholder">
            <div class="storage-selector-dropdown" id="localstorage">
                <img class="storage-selector-dropdown-arrow" />               
                <div class="storage-selector-dropdown-icon"></div>
                LocalStorage
            </div>
            <div class="storage-selector-dropdown-content">
                <div class="storage-selector-button" data-url="local" id="localstorage-bt">
                    <div class="storage-selector-button-icon"></div>
                    <div class="storage-selector-button-label">Url</div>
                </div>
            </div>
        </div>
    </div>
    <div class="storage-selector-resizer"></div>
    <div class="storage-content-holder">
        <div class="storage-content-pane" style="width:200px" id="content-name">
        <div class="storage-top-bar"><div class="storage-top-bar-info-box">Name</div></div>
        </div>
        <div class="storage-content-resizer"></div>
        <div class="storage-content-pane"  id="content-value">
        <div class="storage-top-bar"><div class="storage-top-bar-info-box">Value</div></div>
        </div>
    </div>
</div>
`;
const tabApps = {
    Console: {
        icon: TerminalIcon,
        html: pAdbelc_ConsoleHTML,
        type: "Console",
        window: null
    },
    Network: {
        icon: NetworkIcon,
        html: pAdbelc_NetworkHTML,
        type: "Network",
        window: null
    },
    Storage: {
        icon: StorageIcon,
        html: pAdbelc_StorageHTML,
        type: "Storage",
        window: null
    }
};

function initPermanentTabs() {
    Object.entries(tabApps).forEach(([app, config]) => {
        const tab = document.createElement("div");
        tab.classList.add("info-bar-window-tab");
        tab.innerHTML = `<img src="${config.icon}" class="info-bar-window-tab-icon"/>`;
        pAdbelc_tab_container.appendChild(tab);

        tab.addEventListener("click", () => {
            const win = config.window;
            if (!win) return;

            const isCurrent = win.classList.contains("current");
            const isMinimized = win.classList.contains("minimized");

            if (isCurrent) {
                win.classList.toggle("minimized");
                if (win.classList.contains("minimized")) {
                    win.classList.remove("current");
                    tab.classList.remove("current");
                }
                return;
            }

            document.querySelectorAll(".info-bar-window-tab").forEach(t => t.classList.remove("current"));
            document.querySelectorAll(".window").forEach(w => w.classList.remove("current"));

            win.classList.remove("minimized");
            win.classList.add("current");
            tab.classList.add("current");
            reorderWindows(win);
            pAdbelc_current_window = win;
        });


        tab.addEventListener("dblclick", () => {
            const win = config.window;

            if (!win) {
                document.querySelectorAll(".info-bar-window-tab").forEach(t => t.classList.remove("current"));
                document.querySelectorAll(".window").forEach(w => w.classList.remove("current"));
                makeWindow(app, config.icon, config.html, config.type);
                tab.classList.add("current");
            } else {
                config.window.classList.remove("minimized");
                reorderWindows(config.window);
                pAdbelc_current_window = config.window;

                tab.classList.add("active");
            }
        });


    });
}

initPermanentTabs();

function download(data, filename, type) {
    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else {
        var a = document.createElement("a"),
        url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }
}
function isJavaScript(code) {
    try {
        new Function(code);
        const hasSyntax = /[{}();.=+\-*/]/.test(code);
        return hasSyntax;
    } catch (e) {
        return false;
    }
}
function clamp(value,min,max){
    return Math.min(max,Math.max(min,value))
}
function fixdata(data){
    if (data instanceof ArrayBuffer) return Array.from(new Uint8Array(data));
    else if (data instanceof Object) return JSON.stringify(data);
    return data
}
function saveStorage(){
    const allData = {
        cookies: document.cookie.split('; ').reduce((acc, cookie) => {
            const [key, value] = cookie.split('=');
            acc[key] = value;
            return acc;
        }, {}),
        localStorage: Object.entries(localStorage).reduce((acc, [key, value]) => {
            acc[key] = value;
            return acc;
        }, {}),
        sessionStorage: Object.entries(sessionStorage).reduce((acc, [key, value]) => {
            acc[key] = value;
            return acc;
        }, {}),
    };

    const content = JSON.stringify(allData, null, 2);

    const blob = new Blob([content], {
        type: "application/json;charset=utf-8",
    });
    download(blob, "data.json", ".json");
}
async function loadStorageFile(){
    return new Promise((resolve, reject) => {
        const fileInput = document.createElement("input");
        fileInput.type = "file";
        fileInput.accept = ".json";

        fileInput.addEventListener("change", function handleFile(event) {
            const file = event.target.files[0];
            if (!file) return reject("No file selected");

            const reader = new FileReader();
            reader.onload = function (e) {
                try {
                    const data = JSON.parse(e.target.result);

                    const cookies = data.cookies || {};
                    Object.entries(cookies).forEach(([key, value]) => {
                        document.cookie = `${key}=${value}; path=/; SameSite=Lax`;
                    });

                    const local = data.localStorage || {};
                    Object.entries(local).forEach(([key, value]) => {
                        localStorage.setItem(key, value);
                    });

                    const session = data.sessionStorage || {};
                    Object.entries(session).forEach(([key, value]) => {
                        sessionStorage.setItem(key, value);
                    });

                    if (data.type) {
                        type = data.type;
                    }

                    console.log("Data loaded successfully!");
                    resolve();
                } catch (err) {
                    reject(err);
                }
            };
            reader.readAsText(file);
        });

        document.body.appendChild(fileInput);
        fileInput.click();
        setTimeout(() => fileInput.remove(), 1000);
    });
}

function makeWindowDraggable(element) {
    let prevX = 0, prevY = 0;
    let startWidth = 0, startHeight = 0;
    let startMouseX = 0, startMouseY = 0;

    const target = element.querySelector(".window-bar");
    const resize_bottom = element.querySelector(".bottom");
    const resize_right = element.querySelector(".right");

    const title = element.querySelector(".window-bar-title");

    target.addEventListener("mousedown", dragStartMouse);
    title.addEventListener("mousedown", dragStartMouse);
    target.addEventListener("touchstart", dragStartTouch, { passive: false });
    title.addEventListener("touchstart", dragStartTouch, { passive: false });

    resize_bottom.addEventListener("mousedown", startResizeinfo);
    resize_bottom.addEventListener("touchstart", startResizeinfoTouch, { passive: false });

    resize_right.addEventListener("mousedown", startResizeRight);
    resize_right.addEventListener("touchstart", startResizeRightTouch, { passive: false });

    function dragStartMouse(e) {
        if (element.classList.contains("maximized")) return;
        e.preventDefault();
        prevX = e.clientX;
        prevY = e.clientY;
        document.addEventListener("mousemove", dragMouse);
        document.addEventListener("mouseup", stopInteraction);
    }

    function dragStartTouch(e) {
        const touchedEL = e.target;
        console.log("here");
        if (touchedEL.classList.contains("window-control") || element.classList.contains("maximized")) return;
        e.preventDefault();
        prevX = e.touches[0].clientX;
        prevY = e.touches[0].clientY;
        document.addEventListener("touchmove", dragTouch, { passive: false });
        document.addEventListener("touchend", stopInteraction);
    }

    function dragMouse(e) {
        e.preventDefault();
        const dx = e.clientX - prevX;
        const dy = e.clientY - prevY;
        prevX = e.clientX;
        prevY = e.clientY;
        element.style.top = (element.offsetTop + dy) + 'px';
        element.style.left = (element.offsetLeft + dx) + 'px';
    }

    function dragTouch(e) {
        e.preventDefault();
        const dx = e.touches[0].clientX - prevX;
        const dy = e.touches[0].clientY - prevY;
        prevX = e.touches[0].clientX;
        prevY = e.touches[0].clientY;
        element.style.top = (element.offsetTop + dy) + 'px';
        element.style.left = (element.offsetLeft + dx) + 'px';
    }

    function stopInteraction() {
        document.removeEventListener("mousemove", dragMouse);
        document.removeEventListener("mouseup", stopInteraction);
        document.removeEventListener("touchmove", dragTouch);
        document.removeEventListener("touchend", stopInteraction);
    
        document.removeEventListener("mousemove", resizeinfo);
        document.removeEventListener("touchmove", resizeinfoTouch);
        document.removeEventListener("mousemove", resizeRight);
        document.removeEventListener("touchmove", resizeRightTouch);
    }
    

    function startResizeinfo(e) {
        if (element.classList.contains("maximized")) return;
        e.preventDefault();
        startHeight = element.offsetHeight;
        startMouseY = e.clientY;
        document.addEventListener("mousemove", resizeinfo);
        document.addEventListener("mouseup", stopInteraction);
    }

    function startResizeinfoTouch(e) {
        if (element.classList.contains("maximized")) return;
        e.preventDefault();
        startHeight = element.offsetHeight;
        startMouseY = e.touches[0].clientY;
        document.addEventListener("touchmove", resizeinfoTouch, { passive: false });
        document.addEventListener("touchend", stopInteraction);
    }

    function resizeinfo(e) {
        const dy = e.clientY - startMouseY;
        element.style.height = (startHeight + dy) + 'px';
    }

    function resizeinfoTouch(e) {
        const dy = e.touches[0].clientY - startMouseY;
        element.style.height = (startHeight + dy) + 'px';
    }

    function startResizeRight(e) {
        if (element.classList.contains("maximized")) return;
        e.preventDefault();
        startWidth = element.offsetWidth;
        startMouseX = e.clientX;
        document.addEventListener("mousemove", resizeRight);
        document.addEventListener("mouseup", stopInteraction);
    }

    function startResizeRightTouch(e) {
        if (element.classList.contains("maximized")) return;
        e.preventDefault();
        startWidth = element.offsetWidth;
        startMouseX = e.touches[0].clientX;
        document.addEventListener("touchmove", resizeRightTouch, { passive: false });
        document.addEventListener("touchend", stopInteraction);
    }

    function resizeRight(e) {
        if (element.style.maxWidth){
            element.style.maxWidth = null;
        }
        const dx = e.clientX - startMouseX;
        element.style.width = (startWidth + dx) + 'px';
        
    }

    function resizeRightTouch(e) {
        const dx = e.touches[0].clientX - startMouseX;
        element.style.width = (startWidth + dx) + 'px';
    }
}

function reorderWindows(topwindow){
    const pAdbelc_windows = document.querySelectorAll(".window");
    let windowarray = []
    for (let i = 0; i < pAdbelc_windows.length; i++) {
        windowarray.push(pAdbelc_windows[i])
    }
    let fixedorder = windowarray.sort((a, b) => (a.style.zIndex ?? 0) - (b.style.zIndex ?? 0))
    for (let i = 0; i < pAdbelc_windows.length; i++) {
        
        fixedorder[i].style.zIndex = i - pAdbelc_windows.length;
        fixedorder[i].classList.remove("current");
    }
    topwindow.style.zIndex = fixedorder.length += 1;
    topwindow.classList.add("current");
}
function makeWindowID(){
    const id = Math.random().toString(36).substring(2);
    if (pAdbelc_windowids.includes(id)){
        return makeWindowID();
    }
    return id;
}
async function makeWindow(name,icon,content,script_type){
    await attemptInject();
    const id = makeWindowID();
    const tab = document.createElement("div");
    tab.classList.add("info-bar-window-tab");
    if (!icon){
        icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAOVBMVEUEBARVVVUEBATMzMxNTU0AM2bAwMCGhob///93d3eWlpZmZmZfX1+ZmZkA//9mzP8A/wAAzDMAmTMBRThoAAAAAXRSTlMAQObYZgAAAAFiS0dECIbelXoAAAAHdElNRQfiBhoAMxtZsv6uAAAAt0lEQVQ4y6WT2xKDIAxEFW1ZqgH1/z+2waTexsBMPRHy4BI2zKRpHtOWcU3bleiz4FWgNQTvt5Ov/1fgfvRnk/7eZOfhZePkTqgAHrJlAY5cKwRDUPHwGcbMMO55CxHAZhUQEDNI8V7AFSJLkJMlYFJC4hQCEXTR4QouH1OMpoekAHo2A9qvmGYJ04P+n8SDnA9HD8ssYXpYlLXC1gSd2iy8JAsCbd1rE5d3qFSozUVtslyF58P9BSj9FmCaFR0tAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTA2LTI2VDAwOjUxOjI3LTA0OjAwmWcBOgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0wNi0yNlQwMDo1MToyNy0wNDowMOg6uYYAAAAASUVORK5CYII="
    }
    const windowEl = document.createElement("div");

    if (pAdbelc_current_window) {
        pAdbelc_current_window.classList.remove("current");
    }
    pAdbelc_current_window = windowEl;

    windowEl.classList.add("main-outset");
    windowEl.style.maxWidth = "800px";
    windowEl.style.top = "25%";
    windowEl.style.left = "25%";

    windowEl.addEventListener("mousedown", () => {
        if (pAdbelc_current_window) {
            pAdbelc_current_window.classList.remove("current");
        }

        document.querySelectorAll(".info-bar-window-tab").forEach(t => t.classList.remove("current"));

        Object.entries(tabApps).forEach(([app, cfg]) => {
            if (cfg.window === windowEl) {
                const tabIndex = Object.keys(tabApps).indexOf(app);
                const tab = pAdbelc_tab_container.children[tabIndex];
                if (tab) {
                    tab.classList.add("current");
                }
            }
        });

        pAdbelc_current_window = windowEl;
        windowEl.classList.remove("minimized");
        windowEl.classList.add("current");
        reorderWindows(windowEl);
    });


    windowEl.classList.add("window", "current");
    windowEl.setAttribute("data-window-id", id);

    windowEl.innerHTML = `
        <div class="window-bar">
            <img src="${icon}" class="window-bar-icon"/>
            <div class="window-bar-title">${name}</div>
            <div class="window-controls">
                <div class="window-control window-control-minimize"></div>
                <div class="window-control window-control-maximize"></div>
                <div class="window-control window-control-close"></div>
            </div>
        </div>
        <div class="window-content">${content}</div>
        <div class="resizer-right right"></div>
        <div class="resizer-bottom bottom"></div>
    `;

    pAdbelc_main.appendChild(windowEl);
    reorderWindows(windowEl);
    if (tabApps[name]) {
        tabApps[name].window = windowEl;


        const tabIndex = Object.keys(tabApps).indexOf(name);
        const tab = pAdbelc_tab_container.children[tabIndex];
        if (tab) tab.classList.add("active");
    }


    if (tabApps[name]) {
        tabApps[name].window = windowEl;
    }

    windowEl.querySelector(".window-control-close").addEventListener("click", () => {
        windowEl.remove();
        pAdbelc_current_window = null;

        if (tabApps[name]) {
            tabApps[name].window = null;
            const tabIndex = Object.keys(tabApps).indexOf(name);
            const tab = pAdbelc_tab_container.children[tabIndex];
            if (tab) tab.classList.remove("active");

        }
        
        if (script_type === "Console") {
            pAdbelc_consolewindows = pAdbelc_consolewindows.filter(w => w !== windowEl);
        } else if (script_type === "Network") {
            pAdbelc_networkwindows = pAdbelc_networkwindows.filter(w => w !== windowEl);
        }
    });

    windowEl.querySelector(".window-control-minimize").addEventListener("click", () => {
        windowEl.classList.add("minimized");
        windowEl.classList.remove("current");
    });

    windowEl.querySelector(".window-control-maximize").addEventListener("click", () => {
        if (!windowEl.classList.contains("maximized")) {
            windowEl.dataset.top = windowEl.style.top;
            windowEl.dataset.left = windowEl.style.left;
            windowEl.dataset.width = windowEl.style.width;
            windowEl.dataset.height = windowEl.style.height;

            windowEl.style.top = null;
            windowEl.style.left = null;
            windowEl.style.width = null;
            windowEl.style.height = null;
            windowEl.style.maxWidth = null;
        } else {
            windowEl.style.top = windowEl.dataset.top;
            windowEl.style.left = windowEl.dataset.left;
            windowEl.style.width = windowEl.dataset.width;
            windowEl.style.height = windowEl.dataset.height;
        }

        windowEl.classList.toggle("maximized");
        windowEl.classList.add("current");
    });
    if (windowEl.querySelector(".window-optional-bar")) {
        const buttons = windowEl.querySelectorAll(".window-optional-dropdown-holder");
        console.log(buttons)
        buttons.forEach((holder) => {
            const btn = holder.querySelector(".window-optional-bt-dropdown");
            const dropdown = holder.querySelector(`.window-optional-dropdown`);
            if (dropdown) {
                console.log("here")
                const btnRect = btn.getBoundingClientRect();
                const parentRect = windowEl.getBoundingClientRect();


                btn.style.position = "relative";
                dropdown.style.position = "absolute";
                dropdown.style.top = `100%`;
                dropdown.style.left = `${btn.width}px`;

                btn.addEventListener("click", () => {
                    windowEl.querySelectorAll(".window-optional-dropdown").forEach((el) => {
                        if (el !== dropdown) el.style.display = "none";
                    });

                    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
                });
            }
        });
    }
    function BindOptionalBarBT(button_id, func, async = false){
        const btn = windowEl.querySelector(`.window-optional-dropdown-bt[data-id="${button_id}"]`);
        if (btn){
            if (async){
                btn.addEventListener("click", async () => {
                    await func();
                });
            } else {
                btn.addEventListener("click", func);
            }
        }
    }
    if (script_type === "Console") {
        const text_cont = windowEl.querySelector(`.text-container`);
        const input = document.createElement("div");
        pAdbelc_consolewindows.push(windowEl);
        let current_text_index = 0;
        let path = "JustStudy@linux-desktop: ";
        let command = "";
        let cmdSpan = null;
        const commands = {
            help: function () {
                log([
                    "BASE COMMANDS",
                    "clear - clears the console",
                    // "netlog - opens window that shows network logs",
                    // "memedit - opens a window to edit cookies (WIP)",
                    "savelog - saves the console log to a file",
                    "saveData - saves the cookies, localStorage, and sessionStorage to a file",
                    "loadData - loads the cookies, localStorage, and sessionStorage from a file",
                    "help - shows this message"
                ], null, "help", true);
            },
            clear: function () {
                text_cont.innerHTML = "";
                log("Welcome to the console. Type 'help' for commands");
                text_cont.appendChild(input_cont);
                input.focus();
                text_cont.scrollTo(0, text_cont.scrollHeight);
            },
            // netlog: function () {
            //     makeWindow("Network", NetworkIcon, pAdbelc_NetworkHTML, "Network");
            // },
            savelog: function () {
                const data = [];
                text_cont.querySelectorAll(".text").forEach(text => {
                    data.push(text.textContent + "\n");
                });
                const blob = new Blob(data, { type: "text/plain;charset=utf-8" });
                download(blob, "log.txt", ".txt");
            },
            // memedit: function () {
            //     makeWindow("Storage Editor", StorageIcon, pAdbelc_StorageHTML, "Storage");
            // }
            saveData: function (){
                saveStorage();
            },
            loadData: function(){
                loadStorageFile();
            }

        };

        function getCaretCharacterOffsetWithin(el) {
            const sel = window.getSelection();
            if (!sel.rangeCount) return 0;

            const range = sel.getRangeAt(0);
            const preRange = range.cloneRange();
            preRange.selectNodeContents(el);
            preRange.setEnd(range.endContainer, range.endOffset);
            return preRange.toString().length;
        }

        function setCaretByCharacterOffset(el, targetOffset) {
            const range = document.createRange();
            const sel = window.getSelection();
            let charCount = 0;

            const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null, false);

            while (walker.nextNode()) {
                const node = walker.currentNode;
                const nodeLength = node.textContent.length;

                if (charCount + nodeLength >= targetOffset) {
                    const offsetInNode = targetOffset - charCount;
                    range.setStart(node, offsetInNode);
                    range.collapse(true);

                    sel.removeAllRanges();
                    sel.addRange(range);
                    return;
                }

                charCount += nodeLength;
            }

            range.selectNodeContents(el);
            range.collapse(false);
            sel.removeAllRanges();
            sel.addRange(range);
        }

        function setCursorAtStart(el) {
            const sel = window.getSelection();
            const range = document.createRange();
            range.setStart(el, 0);
            range.collapse(true);
            sel.removeAllRanges();
            sel.addRange(range);
        }

        function run(data) {
            const script = document.createElement("script");
            script.textContent = `(function() { ${data} })();`;
            document.body.appendChild(script);
            document.body.removeChild(script);
        }

        const input_cont = document.createElement("div");
        input_cont.classList.add("input-container");

        input.contentEditable = true;
        input.spellcheck = false;
        input.classList.add("input");

        input.innerHTML = `<span class="path" contenteditable="false">${path}</span><span class="cmd" contenteditable="true"></span>`;

        input_cont.appendChild(input);
        text_cont.appendChild(input_cont);
        cmdSpan = input.querySelector(".cmd");
        cmdSpan.focus();

        input.addEventListener("keydown", (e) => {
            cmdSpan = input.querySelector(".cmd");
            const caretOffset = getCaretCharacterOffsetWithin(input);

            if ((e.key === "Backspace" || e.key === "ArrowLeft") && caretOffset <= path.length) {
                e.preventDefault();
                setCaretByCharacterOffset(cmdSpan, 0);
                return;
            }

            if (e.key === "Enter") {
                e.preventDefault();
                const command = cmdSpan.innerText.trim();
                if (!command) return;

                log(`${path}${command}`);
                if (isJavaScript(command)) {
                    run(command);
                } else if (commands[command]) {
                    commands[command]();
                } else {
                    log(`The command "${command}" does not exist.`, "red");
                }

                cmdSpan.innerText = "";
                setCursorAtStart(cmdSpan);
            }
        });
        input.addEventListener("focus", () => {
            let hasPath = input.querySelector(".path");
            let hasCmd = input.querySelector(".cmd");

            if (!hasPath || !hasCmd || !input.innerHTML.includes(path)) {
                input.innerHTML = `<span class="path" contenteditable="false">${path}</span><span class="cmd" contenteditable="true"></span>`;
            }

            const cmdSpan = input.querySelector(".cmd");
            if (cmdSpan) {
                cmdSpan.focus();
                setCursorAtStart(cmdSpan);
            }
        });

        input.addEventListener("input", () => {
            cmdSpan = input.querySelector(".cmd");
            const pathSpan = input.querySelector(".path");
            const caretOffset = getCaretCharacterOffsetWithin(input);

            if (pathSpan && cmdSpan && input.innerHTML.includes(path)) return;

            let cmdText = cmdSpan ? cmdSpan.innerText : "";

            if (!pathSpan || !cmdSpan || !input.innerHTML.includes(path)) {
                input.innerHTML = `<span class="path" contenteditable="false">${path}</span><span class="cmd" contenteditable="true"></span>`;
            }

            const newCmdSpan = input.querySelector(".cmd");
            if (newCmdSpan) {
                setCaretByCharacterOffset(newCmdSpan, caretOffset);
            }
        });

        function log(text, colour, type, multilog) {
            const caretOffset = getCaretCharacterOffsetWithin(input);

            function maketext(thetext) {
                current_text_index++;
                const text_div = document.createElement("div");
                text_div.classList.add("text");
                if (colour) {
                    text_div.style.color = colour;
                }
                text_div.id = `text-${current_text_index}`;
                text_div.textContent = fixdata(thetext);
                text_cont.appendChild(text_div);
            }

            if (!multilog) {
                maketext(text);
            } else {
                text.forEach(tex => {
                    maketext(tex);
                });
            }

            text_cont.appendChild(input_cont);
            text_cont.scrollTo(0, text_cont.scrollHeight);

            const cmdSpan = input.querySelector(".cmd");
            if (cmdSpan) {
                cmdSpan.focus();
                setCaretByCharacterOffset(cmdSpan, Math.max(0, caretOffset - path.length));
            }
        }


        windowEl.log = log;
        log("Welcome to the console. Type 'help' for commands");
        BindOptionalBarBT("clear",  commands.clear);
        BindOptionalBarBT("help",  commands.help);
        BindOptionalBarBT("export",  commands.savelog);

    } else if (script_type == "Network"){
        pAdbelc_networkwindows.push(windowEl);
        const netholder = windowEl.querySelector(".network-holder");
        const statusholder = windowEl.querySelector("#status");
        const methodholder = windowEl.querySelector("#method");
        const urlholder = windowEl.querySelector("#url");
        const sizeholder = windowEl.querySelector("#size");

        const status_resizer = windowEl.querySelector("#status-resizer");
        const method_resizer = windowEl.querySelector("#method-resizer");
        const url_resizer = windowEl.querySelector("#url-resizer");

        let pattern = 1
        function initResizers(){
            let mouseStartX = 0;
            let startWidth = 0;
          
            status_resizer.addEventListener("mousedown", e => {
              e.preventDefault();
          
              mouseStartX = e.clientX;
              startWidth = statusholder.offsetWidth;
          
              document.addEventListener("mousemove", resizeStatus);
              document.addEventListener("mouseup", finishResizingStatus);
            });
          
            function resizeStatus(e) {
                let newWidth = e.clientX - statusholder.getBoundingClientRect().left;
                newWidth = clamp(newWidth, 75,100);
                statusholder.style.width = newWidth + "px";
            }
            
          
            function finishResizingStatus(e) {
              e.preventDefault();
              document.removeEventListener("mousemove", resizeStatus);
              document.removeEventListener("mouseup",   finishResizingStatus);
            }
            method_resizer.addEventListener("mousedown", e => {
                e.preventDefault();
            
                mouseStartX = e.clientX;
                startWidth = methodholder.offsetWidth;
            
                document.addEventListener("mousemove", resizeMethod);
                document.addEventListener("mouseup", finishResizingMethod);
            });
            
            function resizeMethod(e) {
                  let newWidth = e.clientX - methodholder.getBoundingClientRect().left;
                  newWidth = clamp(newWidth, 80,100);
                  methodholder.style.width = newWidth + "px";
            }
              
            
            function finishResizingMethod(e) {
                e.preventDefault();
                document.removeEventListener("mousemove", resizeMethod);
                document.removeEventListener("mouseup",   finishResizingMethod);
              }
            url_resizer.addEventListener("mousedown", e => {
                e.preventDefault();
            
                mouseStartX = e.clientX;
                startWidth = urlholder.offsetWidth;
            
                document.addEventListener("mousemove", resizeUrl);
                document.addEventListener("mouseup", finishResizingUrl);
            });
            const resizeObserver = new ResizeObserver(entries => {
                let oldwidth = urlholder.offsetWidth;
                const parentWidth = urlholder.parentElement.offsetWidth;

                const userWidth = statusholder.offsetWidth + methodholder.offsetWidth + 3 * 5;
                const maxWidth = parentWidth - userWidth - 100;

                oldwidth = clamp(oldwidth, 150, maxWidth);
                urlholder.style.width = oldwidth + "px";
            });
            resizeObserver.observe(windowEl);
            function resizeUrl(e) {
                const parentWidth = urlholder.parentElement.offsetWidth;
                const userWidth = statusholder.offsetWidth + methodholder.offsetWidth + 3 * 5;
                
                const maxWidth = parentWidth - userWidth - 100;
                let newWidth = e.clientX - urlholder.getBoundingClientRect().left;
                newWidth = clamp(newWidth, 150, maxWidth);
                urlholder.style.width = newWidth + "px";
            }

            function finishResizingUrl(e) {
                e.preventDefault();
                document.removeEventListener("mousemove", resizeUrl);
                document.removeEventListener("mouseup",   finishResizingUrl);
            }

        }
        
        function alternatePattern(){
            if (pattern == 1){
                pattern = 0;
            } else {
                pattern = 1;
            }
        }
        function statusColour(status){
            if (status){
                status = status.toString();
                if (status.startsWith("1")){
                    return "#75bfff";
                }
                else if (status.startsWith("2")){
                    return "#82d672";
                } else if (status.startsWith("4")){
                    return `#df80ff`;
                } else if (status.startsWith("5")){
                    return `#ffb3d1`;
                } else if (status.startsWith("e")){
                    return `#f54242`;
                }
            }
            return "#f2f2f2"
        }
        initResizers()
        function updateResizers(){
            status_resizer.style.height = statusholder.offsetHeight + "px";
            method_resizer.style.height = methodholder.offsetHeight + "px";
            url_resizer.style.height = urlholder.offsetHeight + "px";
        }
        function makeNetworkLog(url,info){
            alternatePattern();
            const button_status = document.createElement("div");
            const button_method = document.createElement("div");
            const button_url = document.createElement("div");
            const button_size = document.createElement("div");
            button_status.classList.add(pattern == 0 ? "network-button-pattern-1" : "network-button-pattern-0");
            button_method.classList.add(pattern == 0 ? "network-button-pattern-1" : "network-button-pattern-0");
            button_url.classList.add(pattern == 0 ? "network-button-pattern-1" : "network-button-pattern-0");
            button_size.classList.add(pattern == 0 ? "network-button-pattern-1" : "network-button-pattern-0");

            button_status.classList.add("network-button-status");
            button_status.innerHTML = `<div class="network-button-status-icon" style="background-color: ${statusColour(info.status)};">${info.status}</div>`;
            button_method.classList.add("network-button-method");
            button_url.classList.add("network-button-url");
            button_size.classList.add("network-button-size");
            button_method.innerText = info.method;
            button_size.innerText = info.size;
            button_url.innerText = url;
            function hoverButtons(){
                button_status.classList.add("network-button-hover");
                button_method.classList.add("network-button-hover");
                button_url.classList.add("network-button-hover");
                button_size.classList.add("network-button-hover");
            }
            function unHoverButtons(){
                button_status.classList.remove("network-button-hover");
                button_method.classList.remove("network-button-hover");
                button_url.classList.remove("network-button-hover");
                button_size.classList.remove("network-button-hover");
            }
            button_status.addEventListener("mouseover",hoverButtons);
            button_status.addEventListener("mouseout",unHoverButtons);
            button_method.addEventListener("mouseover",hoverButtons);
            button_method.addEventListener("mouseout",unHoverButtons);
            button_url.addEventListener("mouseover",hoverButtons);
            button_url.addEventListener("mouseout",unHoverButtons);
            button_size.addEventListener("mouseover",hoverButtons);
            button_size.addEventListener("mouseout",unHoverButtons);

            statusholder.appendChild(button_status);
            methodholder.appendChild(button_method);
            urlholder.appendChild(button_url);
            sizeholder.appendChild(button_size);
            updateResizers();
            netholder.scrollTo(0, netholder.scrollHeight);
        }
        windowEl.makeNetworkLog = makeNetworkLog;
        pAdbelc_capturedLogs.forEach(log => {
            windowEl.makeNetworkLog(log.url,{status:log.status,method:log.method,size:log.size})
        })
        updateResizers();
        netholder.scrollTo(0, netholder.scrollHeight);
    } else if (script_type == "Storage"){
        const SelectorHolder = windowEl.querySelector(".storage-selector");
        const SelectorResizer = windowEl.querySelector(".storage-selector-resizer");
        const StorageRezizer = windowEl.querySelector(".storage-content-resizer");
        const cookiesDropdown = windowEl.querySelector("#cookies");
        const localstorageDropdown = windowEl.querySelector("#localstorage");
        let currentbutton = null;
        let type = "";
        let pattern = 1
        function alternatePattern(){
            if (pattern == 1){
                pattern = 0;
            } else {
                pattern = 1;
            }
        }  
        function updateResizer(){
            StorageRezizer.style.height = windowEl.querySelector(".storage-content-pane").offsetHeight + "px";
        }
        cookiesDropdown.addEventListener("click", () => {
            if (currentbutton != null){
                currentbutton.classList.remove("selected");
            }
            currentbutton = windowEl.querySelector("#cookiesholder");
            windowEl.querySelector("#cookiesholder").classList.add("selected");
        })
        cookiesDropdown.addEventListener("dblclick", () => {
            windowEl.querySelector("#cookiesholder").classList.toggle("toggled");
            let dropdown = cookiesDropdown.parentElement.querySelector(".storage-selector-dropdown-content");
            if (windowEl.querySelector("#cookiesholder").classList.contains("toggled")){
                dropdown.style.height = dropdown.scrollHeight + "px";
            } else {
               dropdown.style.height = "0px";
            }
        })
        localstorageDropdown.addEventListener("click", () => {
            if (currentbutton != null){
                currentbutton.classList.remove("selected");
            }
            currentbutton = windowEl.querySelector("#localstorageholder");
            windowEl.querySelector("#localstorageholder").classList.add("selected");
        })
        localstorageDropdown.addEventListener("dblclick", () => {
            windowEl.querySelector("#localstorageholder").classList.toggle("toggled");
            let dropdown = localstorageDropdown.parentElement.querySelector(".storage-selector-dropdown-content");
            if (windowEl.querySelector("#localstorageholder").classList.contains("toggled")){
                dropdown.style.height = dropdown.scrollHeight + "px";
            } else {
               dropdown.style.height = "0px";
            }
        })
        SelectorHolder.querySelectorAll(".storage-selector-button").forEach(button => {
            if (button.getAttribute("data-url") == "local"){
                    const labelEl = button.querySelector(".storage-selector-button-label");
                    console.log(labelEl)
                    if (labelEl) labelEl.innerText = window.location.hostname;
            }
            button.addEventListener("click", () => {
                if (currentbutton != null){
                    currentbutton.classList.remove("selected");
                }
                // if (currentbutton == button){
                //     button.classList.remove("selected");
                //     currentbutton = null;
                // } else {
                //     button.classList.add("selected");
                //     currentbutton = button;
                // }
                button.classList.add("selected");
                currentbutton = button;
            })
        })
        const namePane = windowEl.querySelector("#content-name");
        const valuePane = windowEl.querySelector("#content-value");
        let selectedButtonName = null
        let selectedButtonValue = null
        function initContentResizer() {
            let startX = 0;
            let startWidth = 0;

            StorageRezizer.addEventListener("mousedown", (e) => {
                e.preventDefault();
                startX = e.clientX;
                startWidth = namePane.offsetWidth;
                document.addEventListener("mousemove", resizeContentPane);
                document.addEventListener("mouseup", stopResize);
            });

            function resizeContentPane(e) {
                const parentWidth = namePane.parentElement.offsetWidth;
                const maxWidth = parentWidth - 5;
                let newWidth = e.clientX - namePane.getBoundingClientRect().left;
                newWidth = clamp(newWidth, 0, maxWidth);
                namePane.style.width = `${newWidth}px`;
            }

            function stopResize() {
                document.removeEventListener("mousemove", resizeContentPane);
                document.removeEventListener("mouseup", stopResize);
            }
            const resizeObserver = new ResizeObserver(entries => {
                let oldwidth = namePane.offsetWidth;
                const parentWidth = namePane.parentElement.offsetWidth;
                const maxWidth = parentWidth - 50;
                oldwidth = clamp(oldwidth, 50, maxWidth);
                namePane.style.width = `${oldwidth}px`;
            });
            resizeObserver.observe(windowEl);
        }

        initContentResizer();

        function initResizers(){
            let mouseStartX = 0;
            let startWidth = 0;
          
            SelectorResizer.addEventListener("mousedown", e => {
              e.preventDefault();
          
              mouseStartX = e.clientX;
              startWidth = SelectorHolder.offsetWidth;
          
              document.addEventListener("mousemove", resizeSelector);
              document.addEventListener("mouseup", finishResizingSelector);
            });
          
            function resizeSelector(e) {
                let newWidth = e.clientX - SelectorHolder.getBoundingClientRect().left;
                newWidth = clamp(newWidth, 100,500);
                SelectorHolder.style.width = newWidth + "px";
            }
            
          
            function finishResizingSelector(e) {
              e.preventDefault();
              document.removeEventListener("mousemove", resizeSelector);
              document.removeEventListener("mouseup",   finishResizingSelector);
            }

        }
        initResizers();
        function addItem(name, value, type) {
            alternatePattern();
            
            const nameItem = document.createElement("input");
            const valueItem = document.createElement("input");

            nameItem.classList.add(`storage-button-pattern-${pattern}`);
            valueItem.classList.add(`storage-button-pattern-${pattern}`);
            
            nameItem.value = name;
            valueItem.value = value;

            nameItem.readOnly = true;
            valueItem.readOnly = true;
            
            function updateStorage(){
                if (type === "Cookies"){
                    updateCookie(nameItem.value, valueItem.value);
                } else {
                    updateLocalStorage(nameItem.value, valueItem.value);
                }
            }

            const activateField = () => {
                if (selectedButtonName) {
                    selectedButtonName.classList.remove("selected");
                    selectedButtonName.readOnly = true;
                    selectedButtonName.blur();
                }
                if (selectedButtonValue) {
                    selectedButtonValue.classList.remove("selected");
                    selectedButtonValue.readOnly = true;
                    selectedButtonValue.blur();
                }

                selectedButtonName = nameItem;
                selectedButtonValue = valueItem;
                nameItem.classList.add("selected");
                valueItem.classList.add("selected");
            };

            const preventSelection = (e, field) => {
                if (field.readOnly) {
                    e.preventDefault();
                }
            };

            nameItem.addEventListener("mousedown", e => preventSelection(e, nameItem));
            valueItem.addEventListener("mousedown", e => preventSelection(e, valueItem));

            nameItem.addEventListener("click", activateField);
            valueItem.addEventListener("click", activateField);

            nameItem.addEventListener("dblclick", (e) => {
                e.preventDefault();
                nameItem.readOnly = false;
                nameItem.focus({ preventScroll: true });
            });

            valueItem.addEventListener("dblclick", (e) => {
                e.preventDefault();
                valueItem.readOnly = false;
                valueItem.focus({ preventScroll: true });
            });

            nameItem.addEventListener("blur", () => {
                if (document.activeElement !== nameItem) {
                    nameItem.readOnly = true;
                    nameItem.classList.remove("selected");
                    updateStorage();
                    if (selectedButtonName === nameItem) selectedButtonName = null;
                }
            });

            valueItem.addEventListener("blur", () => {
                if (document.activeElement !== valueItem) {
                    valueItem.readOnly = true;
                    valueItem.classList.remove("selected");
                    updateStorage();
                    if (selectedButtonValue === valueItem) selectedButtonValue = null;
                }
            });

            valueItem.addEventListener("keydown", (e) => {
                if (e.key === "Enter") {
                    updateStorage();
                    activateField();
                }
            })
            nameItem.addEventListener("keydown", (e) => {
                if (e.key === "Enter") {
                    updateStorage();
                    activateField();
                }
            })
            namePane.appendChild(nameItem);
            valuePane.appendChild(valueItem);
            updateResizer();
        }
        function updateCookie(name,value){
            document.cookie = `${name}=${value}; path=/`;
        }
        function updateLocalStorage(name,value){
            localStorage.setItem(name,value);            
        }
        function clearItems(){
            pattern = 0;
            namePane.innerHTML = `<div class="storage-top-bar"><div class="storage-top-bar-info-box">Name</div></div>`;
            valuePane.innerHTML = `<div class="storage-top-bar"><div class="storage-top-bar-info-box">Value</div></div>`;
            updateResizer();
        }
        function loadCookies(){
            clearItems();
            type = "Cookies";
            const cookies = document.cookie.split("; ");
            cookies.forEach(cookie => {
                const [name,value] = cookie.split("=");
                addItem(name,value,"Cookies");
            })
        }
        function loadLocalStorage(){
            clearItems();
            type = "LocalStorage";
            const keys = Object.keys(localStorage);
            keys.forEach(key => {
                const value = localStorage.getItem(key);
                addItem(key,value,"LocalStorage");
            })
        }
        const cookieButton = windowEl.querySelector("#cookies-bt");
        if (cookieButton != null){
            cookieButton.addEventListener("click", () => {
                loadCookies();
            })
        } else {
            console.error("cookies button not found");
        }
        const localstorageButton = windowEl.querySelector("#localstorage-bt");
        if (localstorageButton != null){
            localstorageButton.addEventListener("click", () => {
                loadLocalStorage();
            })
        } else {
            console.error("localstorage button not found");
        }
        async function loadStorageAndUpdate(){
            await loadStorageFile();
            console.log(type)
            if (type == "Cookies"){
                console.log("loading daas")
                loadCookies();
            } else if (type == "LocalStorage"){
                console.log("loading this")
                loadLocalStorage();
            }
        }
        BindOptionalBarBT("export", saveStorage)
        BindOptionalBarBT("import", loadStorageAndUpdate, true);
    }
    
    makeWindowDraggable(windowEl);
}

makeWindow("Console",TerminalIcon,pAdbelc_ConsoleHTML,"Console")
function Log(text,colour,type){
    if (pAdbelc_consolewindows != []){
        pAdbelc_consolewindows.forEach(windowEl => {
            if (windowEl.log){
                windowEl.log(text,colour,type)
            }
        })
    }
}
function NetworkLog(url,method,status,size){
    if (pAdbelc_networkwindows != []){
        pAdbelc_networkwindows.forEach(windowEl => {
            windowEl.makeNetworkLog(url,{status:status,method:method,size:size + "kb"})
        })
    }
    pAdbelc_capturedLogs.push({url:url,status:status,method:method,size:size + "kb"});
}
function extractStackInfo(stack) {
    const stackLines = stack.split('\n');
    for (let i = 0; i < stackLines.length; i++) {
        const match = stackLines[i].match(/at\s+(.*)\s+\((.*):(\d+):(\d+)\)/);
        if (match) {
            return `in ${match[2]} at ${match[3]}:${match[4]}`;
        }
    }
    return 'No stack trace available';
}

console.log = function (message) {
    Log(message, "#31f10a", true);
    pAdbelc_originalConsoleLog.apply(console, arguments);
};

console.warn = function (message) {
    Log(message, "yellow", true);
    pAdbelc_originalConsoleWarn.apply(console, arguments);
};

console.error = function (message) {
    if (!pAdbelc_isHandlingError) {
        Log(message, "red", true);
    }
    pAdbelc_originalConsoleError.apply(console, arguments);
};

window.onerror = function (message, source, lineno, colno, error) {
    if (pAdbelc_isHandlingError) return false;
    pAdbelc_isHandlingError = true;

    if (error instanceof TypeError) {
        Log(`TypeError: ${message} at ${source}:${lineno}:${colno}`, 'red', true);
    } else {
        Log(`Uncaught Error: ${message} at ${source}:${lineno}:${colno}`, 'red', true);
    }

    let stackInfo = '';
    if (error && error.stack) {
        stackInfo = extractStackInfo(error.stack);
        Log(`Stack Trace: ${stackInfo}`, 'white', true);
    }

    pAdbelc_isHandlingError = false;
    return true;
};

window.addEventListener('unhandledrejection', function (event) {
    Log(`Unhandled Promise Rejection: ${event.reason}`, 'red', true);
    console.error(event.reason);
});

window.addEventListener('storage', function (event) {
    Log(`Storage Event: ${event.key} changed`, 'orange', true);
});

window.addEventListener('blocked', function (event) {
    Log(`Blocked by Tracking Prevention: ${event.message}`, 'orange', true);
});

window.fetch = async (...args) => {
  const [input, init] = args;

  const method = (init?.method || "GET").toUpperCase();

  const response = await pAdbelc_origFetch(input, init);
  const cloned = response.clone();
  const body = await cloned.text();
  const size = new TextEncoder().encode(body).length;
  const status = response.status;

  if (status >= 300 && status < 500) {
    NetworkLog(typeof input === "string" ? input : input.url, method, status, size);
  }

  return response;
};


XMLHttpRequest.prototype.open = function(method, url) {
    this._method = method;
    this._url = url;
    return pAdbelc_origOpen.apply(this, arguments);
};

XMLHttpRequest.prototype.send = function() {
    this.addEventListener("load", () => {
        let size = 0;
        const lengthHeader = this.getResponseHeader("Content-Length");

        if (lengthHeader) {
            size = parseInt(lengthHeader, 10);
        } else if (this.response instanceof ArrayBuffer) {
            size = this.response.byteLength;
        } else if (typeof this.response === "string") {
            size = new TextEncoder().encode(this.response).length;
        } else if (typeof this.response === "object") {
            size = new TextEncoder().encode(JSON.stringify(this.response)).length;
        }

        const status = this.status;

        if (status >= 300 && status < 500) {
            NetworkLog(this._url, this._method, status, size);
        }
    });

    return pAdbelc_origSend.apply(this, arguments);
};

const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
        const url = entry.name;
        const method = entry.initiatorType?.toUpperCase() || "UNKNOWN";
        const status = "0";
        const size = entry.transferSize || 0;

        NetworkLog(url, method, status, size);
    }
});

observer.observe({ entryTypes: ["resource"] });
