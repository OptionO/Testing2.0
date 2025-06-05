const pAdbelcTheme = document.createElement("link");
pAdbelcTheme.rel = "stylesheet"
pAdbelcTheme.href = "/assets/js/teacher.css"

const NetworkIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJ1BMVEUAAACAgIAAgAD////AwMAA/wAAAP8AAAAAAIAA//+AAAD//wD/AABOTWPjAAAAAXRSTlMAQObYZgAAAAFiS0dEAxEMTPIAAAAHdElNRQfiBhgXDTbuyMTYAAABJ0lEQVQoz5WRvW6DMBRGnSxI2ZCtsja3dTIjQAztgkKa3QhlLQw3ZQOShogHaFHGDMzdKvUZ8nC9/KVV1aH19h0dX/uzGfvTGum6fv09c3+p4PErCydUAHghPFCUZ7gZBMeRgDPEp7QHN0pRnF5FNLoB4rQExJib3LKsRuLJLQmSL2zf913a8VCfaoRYeML3dZ6yUZIkiIC6kQm9yAjUUCNS3q13BWMEYodmRi5/lru0OzVQiHwlVqoDY8dRGNnG1st7EFCRqZmvzfzjrQVhKBswN8s7t706KKWmwt165fm9BVJK2GcL2zjed2BM5Q8b4RXH3hgDzPcvwqgGgwEcqqoBvcG0omrAazkYTGuNdDIYjVMIg00uRvtuBM4/wT8NjaoX6W8f/wkCGVa/pGMtXQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wNi0yNFQyMzoxMzo1NC0wNDowMM1iPAEAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDYtMjRUMjM6MTM6NTQtMDQ6MDC8P4S9AAAAAElFTkSuQmCC";
let pAdbelc_main = null;
let pAdbelc_injected = false;
let pAdbelc_inject_attempts = 0;
let pAdbelc_windowHolder = null;
let pAdbelc_bottombar = null;
let pAdbelc_tab_container = null;
function initTools(){
    pAdbelc_windowHolder = document.createElement("div");
    pAdbelc_windowHolder.classList.add("window-holder");
    pAdbelc_windowHolder.style.display = "none";
    pAdbelc_main = pAdbelc_windowHolder;
    pAdbelc_bottombar = document.createElement("div");
    pAdbelc_bottombar.classList.add("window-bottom-bar");
    pAdbelc_bottombar.classList.add("main-outset");

    const start_menu = document.createElement("div");
    start_menu.classList.add("start-menu");
    start_menu.classList.add("main-outset");
    start_menu.innerHTML = `
    <div class="start-menu-fade-bar"><span>JustStudy 98</span></div>
    <div class="start-menu-fade-main-container">
        <div class="start-menu-button" onclick="makeWindow('Console', null, pAdbelc_ConsoleHTML, 'Console')">
            <img src= "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAOVBMVEUEBARVVVUEBATMzMxNTU0AM2bAwMCGhob///93d3eWlpZmZmZfX1+ZmZkA//9mzP8A/wAAzDMAmTMBRThoAAAAAXRSTlMAQObYZgAAAAFiS0dECIbelXoAAAAHdElNRQfiBhoAMxtZsv6uAAAAt0lEQVQ4y6WT2xKDIAxEFW1ZqgH1/z+2waTexsBMPRHy4BI2zKRpHtOWcU3bleiz4FWgNQTvt5Ov/1fgfvRnk/7eZOfhZePkTqgAHrJlAY5cKwRDUPHwGcbMMO55CxHAZhUQEDNI8V7AFSJLkJMlYFJC4hQCEXTR4QouH1OMpoekAHo2A9qvmGYJ04P+n8SDnA9HD8ssYXpYlLXC1gSd2iy8JAsCbd1rE5d3qFSozUVtslyF58P9BSj9FmCaFR0tAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTA2LTI2VDAwOjUxOjI3LTA0OjAwmWcBOgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0wNi0yNlQwMDo1MToyNy0wNDowMOg6uYYAAAAASUVORK5CYII=">
            <span>Console</span>
        </div>
        <div class="horizontal-seperator"></div>
        <div class="start-menu-button" onclick="makeWindow('Network', NetworkIcon, pAdbelc_NetworkHTML, 'Network')">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJ1BMVEUAAACAgIAAgAD////AwMAA/wAAAP8AAAAAAIAA//+AAAD//wD/AABOTWPjAAAAAXRSTlMAQObYZgAAAAFiS0dEAxEMTPIAAAAHdElNRQfiBhgXDTbuyMTYAAABJ0lEQVQoz5WRvW6DMBRGnSxI2ZCtsja3dTIjQAztgkKa3QhlLQw3ZQOShogHaFHGDMzdKvUZ8nC9/KVV1aH19h0dX/uzGfvTGum6fv09c3+p4PErCydUAHghPFCUZ7gZBMeRgDPEp7QHN0pRnF5FNLoB4rQExJib3LKsRuLJLQmSL2zf913a8VCfaoRYeML3dZ6yUZIkiIC6kQm9yAjUUCNS3q13BWMEYodmRi5/lru0OzVQiHwlVqoDY8dRGNnG1st7EFCRqZmvzfzjrQVhKBswN8s7t706KKWmwt165fm9BVJK2GcL2zjed2BM5Q8b4RXH3hgDzPcvwqgGgwEcqqoBvcG0omrAazkYTGuNdDIYjVMIg00uRvtuBM4/wT8NjaoX6W8f/wkCGVa/pGMtXQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wNi0yNFQyMzoxMzo1NC0wNDowMM1iPAEAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDYtMjRUMjM6MTM6NTQtMDQ6MDC8P4S9AAAAAElFTkSuQmCC">
            <span>Network</span>
        </div>
    </div>
    `;

    pAdbelc_main.appendChild(start_menu);

    const start_btn = document.createElement("div");
    start_btn.classList.add("bottom-bar-start");
    start_btn.classList.add("outset-hover");
    start_btn.classList.add("main-outset");
    start_btn.classList.add("main-outset-bt");
    start_btn.addEventListener("click", async () => {
        if (start_menu.classList.contains("open")){
            start_menu.classList.remove("open");
        } else {
            start_menu.classList.add("open");
        }
    })

    const img = document.createElement("img");
    img.classList.add("bottom-bar-start-icon");
    img.src = "data:image/png;base64,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";
    start_btn.appendChild(img);
    const text = document.createElement("span");
    text.classList.add("bottom-bar-start-text");
    text.textContent = "Start";
    start_btn.appendChild(text);
    pAdbelc_bottombar.appendChild(start_btn);

    pAdbelc_tab_container = document.createElement("div");
    pAdbelc_tab_container.classList.add("bottom-bar-window-tab-container");
    pAdbelc_bottombar.appendChild(pAdbelc_tab_container);
    const bar_extra = document.createElement("div");
    bar_extra.classList.add("bottom-bar-extra");
    bar_extra.classList.add("main-inset");
    pAdbelc_bottombar.appendChild(bar_extra);

    const bar_extra_audio_setting_bt = document.createElement("div");
    bar_extra_audio_setting_bt.classList.add("bottom-bar-extra-audio-setting-bt");
    bar_extra.appendChild(bar_extra_audio_setting_bt);

    const bar_extra_audio_setting = document.createElement("div");
    bar_extra_audio_setting.classList.add("bottom-bar-extra-audio-setting-container");
    bar_extra_audio_setting.classList.add("main-outset");
    bar_extra_audio_setting.style.display = "none";
    bar_extra_audio_setting.innerHTML = `
    <div class="bottom-bar-extra-audio-text">Volume</div>
    <div class="bottom-bar-extra-audio-container">
    <img class="bottom-bar-extra-audio-track" src="data:image/png;base64,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"/>
    <div class="dashed-outline" style="width: 5vh; height: 12vh; margin-left: 1vh; display:flex; align-items:center; justify-content:center;">
        <input class="bottom-bar-extra-audio-slider" type="range" min="0" max="100" value="50">
    </div>
    </div>
    `;
    pAdbelc_main.appendChild(bar_extra_audio_setting);


    bar_extra_audio_setting_bt.addEventListener("click", () => {
        bar_extra_audio_setting.style.display = bar_extra_audio_setting.style.display == "none" ? "block" : "none"; 
    });


    const bar_extra_time = document.createElement("span");
    bar_extra_time.classList.add("bottom-bar-extra-time");
    let currentTime = new Date();
    let options = { timeStyle: 'short', hour12: true };
    let timeString = currentTime.toLocaleTimeString('en-US', options);
    bar_extra_time.textContent = timeString;
    setInterval(() => {
        currentTime = new Date();
        timeString = currentTime.toLocaleTimeString('en-US', options);
        bar_extra_time.textContent = timeString;
    }, 1000);
    bar_extra.appendChild(bar_extra_time);
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
        pAdbelc_main.appendChild(pAdbelc_bottombar);
        document.body.appendChild(pAdbelc_windowHolder);
        
    } else {
        setTimeout(attemptInject, 100);
        pAdbelc_inject_attempts += 1;
    }
}


let pAdbelc_ConsoleHTML = `
    <div class="console">
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
let pAdbelc_MemoryHTML =`
<div class="memory-holder">
    <div class="memory-selector" style="width: 75px">
        <div class="memory-selector-dropdown-holder" id="cookiesholder">
            <div class="memory-selector-dropdown" id="cookies">
                <img class="memory-selector-dropdown-arrow" />               
                <div class="memory-selector-dropdown-icon"></div>
                Cookies
            </div>
            <div class="memory-selector-dropdown-content">
            test
            </div>
        </div>
    </div>
    <div class="memory-selector-resizer"></div>
    <div class="memory-content-holder" >
    </div>
</div>
`;
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

    resize_bottom.addEventListener("mousedown", startResizeBottom);
    resize_bottom.addEventListener("touchstart", startResizeBottomTouch, { passive: false });

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
    
        document.removeEventListener("mousemove", resizeBottom);
        document.removeEventListener("touchmove", resizeBottomTouch);
        document.removeEventListener("mousemove", resizeRight);
        document.removeEventListener("touchmove", resizeRightTouch);
    }
    

    function startResizeBottom(e) {
        if (element.classList.contains("maximized")) return;
        e.preventDefault();
        startHeight = element.offsetHeight;
        startMouseY = e.clientY;
        document.addEventListener("mousemove", resizeBottom);
        document.addEventListener("mouseup", stopInteraction);
    }

    function startResizeBottomTouch(e) {
        if (element.classList.contains("maximized")) return;
        e.preventDefault();
        startHeight = element.offsetHeight;
        startMouseY = e.touches[0].clientY;
        document.addEventListener("touchmove", resizeBottomTouch, { passive: false });
        document.addEventListener("touchend", stopInteraction);
    }

    function resizeBottom(e) {
        const dy = e.clientY - startMouseY;
        element.style.height = (startHeight + dy) + 'px';
    }

    function resizeBottomTouch(e) {
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
    for (let i = 0; i < pAdbelc_windows.length; i++) {
        pAdbelc_windows[i].style.zIndex = pAdbelc_windows.length - i;
        pAdbelc_windows[i].classList.remove("current");
    }
    topwindow.style.zIndex = pAdbelc_windows.length;
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
    tab.classList.add("bottom-bar-window-tab");
    if (!icon){
        icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAOVBMVEUEBARVVVUEBATMzMxNTU0AM2bAwMCGhob///93d3eWlpZmZmZfX1+ZmZkA//9mzP8A/wAAzDMAmTMBRThoAAAAAXRSTlMAQObYZgAAAAFiS0dECIbelXoAAAAHdElNRQfiBhoAMxtZsv6uAAAAt0lEQVQ4y6WT2xKDIAxEFW1ZqgH1/z+2waTexsBMPRHy4BI2zKRpHtOWcU3bleiz4FWgNQTvt5Ov/1fgfvRnk/7eZOfhZePkTqgAHrJlAY5cKwRDUPHwGcbMMO55CxHAZhUQEDNI8V7AFSJLkJMlYFJC4hQCEXTR4QouH1OMpoekAHo2A9qvmGYJ04P+n8SDnA9HD8ssYXpYlLXC1gSd2iy8JAsCbd1rE5d3qFSozUVtslyF58P9BSj9FmCaFR0tAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTA2LTI2VDAwOjUxOjI3LTA0OjAwmWcBOgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0wNi0yNlQwMDo1MToyNy0wNDowMOg6uYYAAAAASUVORK5CYII="
    }
    tab.innerHTML = `
        <img src="${icon}" class="bottom-bar-window-tab-icon"/>
        <div class="bottom-bar-window-tab-title">${name}</div>
    `;
    if (pAdbelc_tab_container.children.length === 0) {
        tab.classList.add("current");
    } else {
        if (curr_tab) curr_tab.classList.remove("current");
        tab.classList.add("current");
    }
    pAdbelc_tab_container.appendChild(tab);
    curr_tab = tab;

    const windowEl = document.createElement("div");
    if (pAdbelc_current_window) {
        pAdbelc_current_window.classList.remove("current");
    }
    pAdbelc_current_window = windowEl;
    
    windowEl.classList.add("main-outset");
    windowEl.style.maxWidth = "800px";
    windowEl.style.top = "25%";
    windowEl.style.left = "25%";
    if (pAdbelc_current_window){
        pAdbelc_current_window.classList.remove("current");
    }
    windowEl.addEventListener("mousedown", () => {
        pAdbelc_current_window = windowEl;
        windowEl.classList.remove("minimized");
        windowEl.classList.add("current");
        reorderWindows(windowEl);
    })
    windowEl.classList.add("window");
    windowEl.classList.add("current");
    windowEl.setAttribute("data-window-id",id);
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
        <div class="window-content">
            ${content}
        </div>
        <div class="resizer-right right"></div>
        <div class="resizer-bottom bottom"></div>
    `;
    pAdbelc_main.appendChild(windowEl);
    tab.addEventListener("click", () => {
        if (curr_tab) curr_tab.classList.remove("current");
        if (pAdbelc_current_window) pAdbelc_current_window.classList.remove("current");
    
        if (curr_tab !== tab) {
            curr_tab = tab;
            pAdbelc_current_window = windowEl;
            tab.classList.add("current");
            windowEl.classList.add("current");
            windowEl.classList.remove("minimized");
            reorderWindows(windowEl);
        } else {
            curr_tab = null;
            pAdbelc_current_window = null;
            tab.classList.remove("current");
            windowEl.classList.add("minimized");
            windowEl.classList.remove("current");
        }
    });
    
    windowEl.addEventListener("mousedown", (e) => {
        //e.preventDefault();
        if (curr_tab) curr_tab.classList.remove("current");
        if (pAdbelc_current_window) pAdbelc_current_window.classList.remove("current");
        curr_tab = tab;
        pAdbelc_current_window = windowEl;
        tab.classList.add("current");
        windowEl.classList.remove("minimized");
        windowEl.classList.add("current");
        reorderWindows(windowEl);
    });
    
    windowEl.querySelector(".window-control-close").addEventListener("click", () => {
        windowEl.remove();
        tab.remove();
        pAdbelc_current_window = null;
        curr_tab = null;
        pAdbelc_windows = pAdbelc_windows.filter(windowEl => windowEl !== windowEl);
        if (script_type == "Console"){
            pAdbelc_consolewindows = pAdbelc_consolewindows.filter(windowEl => windowEl !== windowEl);
        } else if (script_type == "Network"){
            pAdbelc_networkwindows = pAdbelc_networkwindows.filter(windowEl => windowEl !== windowEl);
        }
        pAdbelc_current_window = null;
        windowEl.remove();
    });
    windowEl.querySelector(".window-control-minimize").addEventListener("click", () => {
        windowEl.classList.add("minimized");
        windowEl.classList.remove("current");
        tab.classList.remove("current");
    });
    windowEl.querySelector(".window-control-maximize").addEventListener("click", () => {
        if (!windowEl.classList.contains("maximized")){
            windowEl.dataset.top = windowEl.style.top
            windowEl.dataset.left = windowEl.style.left
            windowEl.dataset.width = windowEl.style.width
            windowEl.dataset.height = windowEl.style.height
            windowEl.style.top = "0px";
            windowEl.style.left = "0px";
            windowEl.style.width = null;
            windowEl.style.height = null;
            windowEl.style.maxWidth = null;
        } else {
            windowEl.style.top = windowEl.dataset.top;
            windowEl.style.left = windowEl.dataset.left;
            windowEl.style.width = windowEl.dataset.width;
            windowEl.style.height = windowEl.dataset.height;
            windowEl.style.maxWidth = null;
        }
        windowEl.classList.toggle("maximized");
        windowEl.classList.add("current");
    });
    if (script_type === "Console") {
        const text_cont = windowEl.querySelector(`.text-container`);
        const input = document.createElement("textarea");
        pAdbelc_consolewindows.push(windowEl);
        let current_text_index = 0;
        let path = "C:/>"
        let command = "";
        // its pretty easy to make a command.
        let commands = {
            help: function () {
                log([
                    "BASE COMMANDS",
                    "clear - clears the console",
                    "netlog - opens window that shows network logs",
                    "help - shows this message",
                ], null, "help", true);
            },
            clear: function () {
                text_cont.innerHTML = "";
                log("Welcome to the console. Type 'help' for commands")
                text_cont.appendChild(input_cont);
                input.focus();
                text_cont.scrollTop();
            },
            netlog: function () {
                makeWindow("Network",NetworkIcon,pAdbelc_NetworkHTML,"Network");
            },
            savelog: function () {
                const data = [];
                text_cont.querySelectorAll(".text").forEach(text => {
                    data.push(text.textContent + "\n");
                })
                const blob = new Blob(data, { type: "text/plain;charset=utf-8" });
                download(blob, "log.txt ",".txt");
            }
        };
        function run(data) {
            const script = document.createElement("script");
            script.textContent = `
            (function() {
                ${data}
            })();
            `;
            document.body.appendChild(script);
            document.body.removeChild(script);
        }
        const input_cont = document.createElement("div");
        input_cont.classList.add("input-container");
        input.spellcheck = false;
        input.value = path
        input.classList.add("input");
        input_cont.appendChild(input);
        text_cont.appendChild(input_cont);
        input.focus();
        input.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                e.preventDefault();
                if (input.value === "" || input.value === path) return;
                command = input.value.replace(path, "");
                log(input.value);
                if (isJavaScript(command)) {
                    run(command);
                } else {
                    if (commands[command]) {
                        commands[command]();
                    } else {
                        log(`The command "${command}" does not exist.`, "red", null);
                    }
                    
                }
                input.value = path;
            } else if ((e.key === "Backspace" && input.selectionStart <= path.length) || (e.key === "ArrowLeft" && input.selectionStart <= path.length)) {
                e.preventDefault();
                input.setSelectionRange(path.length, path.length);
            }
            if (pAdbelc_main.style.display == "block"){
                if (!input){
                e.preventDefault();
                }
            }
        });
        input.addEventListener("input", () => {
            if (!input.value.startsWith(path)) {
                const current = input.value.replace(path, "");
                input.value = path + current;
            }
        });
        windowEl.addEventListener("click", () => {
            input.focus();
        });

        function log(text,colour,type,multilog) {
            function maketext(thetext){
                current_text_index++;
                const text_div = document.createElement("div");
                text_div.classList.add("text");
                if (colour){
                    text_div.style.color = colour;
                }
                text_div.id = `text-${current_text_index}`;
                text_div.textContent = fixdata(thetext);
                text_cont.appendChild(text_div);
            }
            if (!multilog){
                maketext(text);
            } else {
                text.forEach(tex => {
                    maketext(tex);                  
                });
            }
            
            text_cont.appendChild(input_cont);
            text_cont.scrollTo(0, text_cont.scrollHeight);
            input.focus();
        }
        windowEl.log = log;
        log("Welcome to the console. Type 'help' for commands")
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
    } else if (script_type == "Memory"){
        const SelectorHolder = windowEl.querySelector(".memory-selector");
        const SelectorResizer = windowEl.querySelector(".memory-selector-resizer");
        const cookiesDropdown = windowEl.querySelector("#cookies");
        cookiesDropdown.addEventListener("click", () => {
            windowEl.querySelector("#cookiesholder").classList.toggle("toggled");
        })
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
    }
    
    makeWindowDraggable(windowEl);
}

makeWindow("Console",null,pAdbelc_ConsoleHTML,"Console")
//makeWindow("Memory Editor",null,pAdbelc_MemoryHTML,"Memory")
function Log(text,colour,type){
    if (pAdbelc_consolewindows != []){
        pAdbelc_consolewindows.forEach(windowEl => {
            windowEl.log(text,colour,type)
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
        let size = this.getResponseHeader("Content-Length");

        if (size) {
            size = parseInt(size, 10);
        } else {
            size = new TextEncoder().encode(this.responseText).length;
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
