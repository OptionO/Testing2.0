const commandprmpt = document.getElementById("cmd");
const cmdviewmore = document.getElementById("cmd-viewmore");
let main = null;
let grid = null;
let tab_container = null;
let curr_tab = null;
let current_window = null;
let coolgeammode = false;

document.addEventListener("DOMContentLoaded", () => {
    coolgeammode = localStorage.getItem("experimentalGameMode");
})
const studyBootSequence = [
    0,
    "EMIBOS(C)2025 JustStudy MegaTrends, Inc",
    "BIOS Date: ERR",
    "",
    1000,
    "Initializing system",
    "...",
    "",
    10,
    "Loading js",
    "Detecting memory banks... OK",
    "Allocating focus modules... 1024MB OK",
    "Mounting Motivation Drive... SUCCESS",
    "Loading caffeine.dll... ✓",
    "Verifying mental stamina... PASSED",
    "Connecting to Internet Resources... ONLINE",
    "Locating textbooks on disk... FOUND",
    "Launching Concentration Kernel...",
    "Loading Visual Cortex Drivers... DONE",
    "Installing Vocabulary Packets... COMPLETE",
    "Syncing with Exam Timetable... SYNCED",
    "Defragmenting Distractions... 37%...",
    "Disabling Procrastination Services... OK",
    "Loading Anti-Sleep Core Patch... INITIALIZED",
    "Spawning Background Tasks: NoteTaking.exe, QuizRunner.sys",
    "Verifying Revision Logs... CLEAN",
    "Compiling Study Schedule... SUCCESS",
    "Loading Study Plan... NONE",
    "Completing Homework... DONE",
    "Syncing with Exam Timetable... SYNCED",
    "Installing Vocabulary Packets... COMPLETE",
    "Loading Anti-Sleep Core Patch... INITIALIZED",
    "Verifying Revision Logs... CLEAN",
    "Compiling Study Schedule... SUCCESS",
    "Loading Study Plan... NONE",
    "Completing Homework... DONE",
    "Syncing with Exam Timetable... SYNCED",
    "Installing Vocabulary Packets... COMPLETE",
    1000,
    "Finalizing",
    "..."
];
async function executeCommands(command,div){
    let cmdcursor = document.getElementById("cmd-cursor");
    let speed = 1000;
    for (let i = 0; i < studyBootSequence.length; i++) {
        const text = studyBootSequence[i];
        const span = document.createElement("span");
        span.classList.add("cmd-global-span");
        if (typeof text == "number"){
            speed = text;
        } else {
            if (text == "..."){
                span.classList.add("cmd-span");
                for (let i = 0; i < 3; i++) {
                    span.textContent += ".";
                    div.appendChild(span);
                    div.appendChild(cmdcursor);
                    div.appendChild(cmdviewmore);
                    await new Promise(resolve => setTimeout(resolve, 100));
                }
                const newlineSpan = document.createElement("span");
                newlineSpan.style.width = "100%";
                newlineSpan.style.display = "block";
                newlineSpan.style.height = "0.02vh";
                newlineSpan.textContent = "";
                div.appendChild(cmdcursor);
                div.appendChild(newlineSpan);
                div.appendChild(cmdviewmore);
            } else {
                if (studyBootSequence[i + 1] == "..."){
                    span.classList.add("cmd-span");
                } else {
                    span.classList.add("cmd-newline-span"); 
                }
                span.textContent = text;
                div.appendChild(span);
                div.appendChild(cmdcursor);
                div.appendChild(cmdviewmore);
                window.scrollTo(0, document.body.scrollHeight);
            }
        }
        await new Promise(resolve => setTimeout(resolve, speed));
        
    }
}
function renderIntertainment(container,searchquery){
    let data = fetch("/assets/data/index.json").then((res) => res.json()).then((data) => {
        container.innerHTML = "";
        for (let i = 0; i < data.length; i++) {
            const item = document.createElement("div");
            item.classList.add("intertainment-object-container");
            item.classList.add("main-outset");
            item.innerHTML = `
                <img class="intertainment-object-icon" src="${data[i].img}">
                <div class="intertainment-object-name">${data[i].name}</div>
            `;
            item.onclick = () => {
                if (coolgeammode){
                    window.location = data[i].url
                } else {
                    makeWindow(data[i].name,data[i].img,`
                        <iframe src="${data[i].url}" width="100%" height="100%"></iframe>
                        `,0);
                }
            }
            if (!searchquery){
                container.appendChild(item);
            } else {
                if (data[i].name.toLowerCase().includes(searchquery.toLowerCase())){
                    container.appendChild(item);
                }
            }
        }
    })
}
function makeapp(icon, name){
    const app = document.createElement("div");
    app.classList.add("app");
    app.draggable = true;
    app.id = "app-" + Math.random().toString(36).substr(2, 9);
    app.innerHTML = `
    <img class="app-icon" draggable="false" src="${icon}">
    <div class="app-name">${name}</div>
    `;
    app.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/plain", e.target.id);
        grid.querySelectorAll(".app").forEach((app) => {
            app.classList.remove("app-double-clicked");
        })
        app.classList.add("app-double-clicked");
    });
    app.addEventListener("dblclick", () => {
        grid.querySelectorAll(".app").forEach((app) => {
            app.classList.remove("app-double-clicked");
        })
        app.classList.add("app-double-clicked");
        if (name == "Games"){
            makeWindow("Games","./img/1.png",`
                <div class="intertainment-wrapper">
                    <div class="intertainment-top-bar">
                        <span class="intertainment-search-text">Search</span>
                        <input class="intertainment-search main-inset"></input>
                    </div>
                    <div class="intertainment-container">
            
                    </div>
                </div>
            `,1);
        } else if (name == "Settings"){
            makeWindow("Settings", "./img/2.png", `
                <div style="display: flex; flex-direction: column; padding: 1vh; font-family: win98; font-size: 2vh; gap: 1vh;">
              
                  <!-- Redirect Switch -->
                  <label style="display: flex; align-items: center; gap: 1vh;">
                    <input type="checkbox" id="redirectswitch" class="main-inset" style="transform: scale(1.2);" />
                    Enable ALT+TAB Redirect
                  </label>
              
                  <!-- URL Bootstrap -->
                  <div class="main-inset" style="padding: 1vh;">
                    <span>URL Bootstrap</span><br/>
                    <input type="text" id="UrlBt" class="main-inset" placeholder="example.com" style="width: 100%; height: 3vh;" />
                    <button id="UrlButton" class="main-outset" style="margin-top: 0.5vh;">Open</button>
                  </div>
              
                  <!-- File Bootstrap -->
                  <div class="main-inset" style="padding: 1vh;">
                    <span>HTML File Bootstrap</span><br/>
                    <input type="file" id="FileInputBt" class="main-inset" />
                    <button onclick="applyBootstrapFile()" class="main-outset" style="margin-top: 0.5vh;">Open File</button>
                  </div>
              
                  <!-- Panic Button -->
                  <div class="main-inset" style="padding: 1vh;">
                    <span>Panic Button Setup</span><br/>
                    <input type="text" id="result" class="main-inset" placeholder="Click start and press combo..." style="width: 100%; height: 3vh;" />
                    <button id="panicbutton" class="main-outset" style="margin-top: 0.5vh;">Start Listening</button>
                  </div>
              
                  <!-- Show More Toggle -->
                  <label style="display: flex; align-items: center; gap: 1vh;">
                    <input type="checkbox" id="myCheck" onclick="myFunction()" class="main-inset" style="transform: scale(1.2);" />
                    Show Extra Settings
                  </label>
                  <div id="text" style="display:none;" class="main-inset">
                    <div style="display: flex; flex-direction: column; gap: 1vh; font-family: win98; font-size: 2vh; padding: 1vh;">
                        <!-- Sandbox -->
                        <a href="./sandbox.html" target="_blank" class="main-outset" style="text-decoration: none; padding: 0.8vh; color: black; display: flex; align-items: center; gap: 1vh;">
                        <i class="fa fa-code" aria-hidden="true"></i> | Sandbox
                        </a>

                        <!-- File Fetcher -->
                        <a href="./fetcher.html" target="_blank" class="main-outset" style="text-decoration: none; padding: 0.8vh; color: black; display: flex; align-items: center; gap: 1vh;">
                        <i class="fa fa-file-archive-o" aria-hidden="true"></i> | File Fetcher
                        </a>

                        <!-- Trustpilot Widget -->
                        <div class="main-simple-outset" style="padding: 0.5vh;">
                        <div class="trustpilot-widget" data-locale="en-GB" data-template-id="56278e9abfbbba0bdcd568bc"
                            data-businessunit-id="67c8a5b0e6f7b850ba0d8afb" data-style-height="52px" data-style-width="100%">
                            <a href="https://uk.trustpilot.com/review/juststudy.uk" target="_blank" rel="noopener" style="color: black;">
                            Trustpilot
                            </a>
                        </div>
                        </div>

                    </div>
                  </div>
              
                  <!-- Tab Cloak -->
                  <div class="main-inset" style="padding: 1vh;">
                    <span>Tab Cloaker</span><br/>
                        <select onchange="TabCloak(this.value, this.selectedOptions[0].dataset.favicon, this.selectedOptions[0].text)" id="SettingDropdown" class="main-inset" style="width: 100%; height: 3vh;">
                        <option value="JustStudy" data-favicon="assets/img/favicon.ico">JustStudy CE</option>
                        <option disabled>──────────</option>
                        <option value="Seneca - Learn 2x Faster" data-favicon="/assets/img/TabCloak/Seneca.ico">Seneca</option>
                        <option value="Sparx Maths - Home" data-favicon="/assets/img/TabCloak/Sparx.png">Sparx</option>
                        <option value="Tassomai" data-favicon="/assets/img/TabCloak/Tassomai.ico">Tassomai</option>
                        <option value="MathsWatch" data-favicon="/assets/img/TabCloak/Mathswatch.png">MathsWatch</option>
                        </select>
                  </div>

                <div class="main-inset" style="padding: 1vh;">
                <label style="display: flex; align-items: center; gap: 1vh; font-family: win98; font-size: 2vh;">
                    <input type="checkbox" id="expGameToggle" class="main-inset" style="transform: scale(1.2);" />
                    Enable Experimental Game Window Mode
                </label>
                <script>
                    (function(){
                    const checkbox = document.getElementById('expGameToggle');
                    const stored = localStorage.getItem('experimentalGameMode');
                    if (stored === "true") checkbox.checked = true;
                    coolgeammode = stored === "true";

                    checkbox.addEventListener('change', () => {
                        coolgeammode = checkbox.checked;
                        localStorage.setItem('experimentalGameMode', checkbox.checked);
                    });
                    })();
                </script>
                </div>

                </div>
              `, 2);
              
        }
    });
    [...grid.querySelectorAll(".cell")].reverse().forEach((cell) => {
        if (cell.children.length === 0) {
            cell.appendChild(app);
        }
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
        const dx = e.clientX - startMouseX;
        element.style.width = (startWidth + dx) + 'px';
    }

    function resizeRightTouch(e) {
        const dx = e.touches[0].clientX - startMouseX;
        element.style.width = (startWidth + dx) + 'px';
    }
}

function reorderWindows(topwindow){
    const windows = document.querySelectorAll(".window");
    for (let i = 0; i < windows.length; i++) {
        windows[i].style.zIndex = windows.length - i;
    }
    topwindow.style.zIndex = windows.length;
}
function makeWindow(name,icon,content,script_type){
    const tab = document.createElement("div");
    tab.classList.add("bottom-bar-window-tab");
    tab.innerHTML = `
        <img src="${icon}" class="bottom-bar-window-tab-icon"/>
        <div class="bottom-bar-window-tab-title">${name}</div>
    `;
    if (tab_container.children.length === 0){ 
        tab.classList.add("current")
    } else {
        if (curr_tab){
            curr_tab.classList.remove("current");
        }
        tab.classList.add("current");
    }
    tab_container.appendChild(tab);
    curr_tab = tab;

    const window = document.createElement("div");
    window.classList.add("main-outset");
    if (current_window){
        current_window.classList.remove("current");
    }
    current_window = window;
    window.addEventListener("mousedown", () => {
        if (curr_tab){
            curr_tab.classList.remove("current");
        }
        if (current_window){
            current_window.classList.remove("current");
        }
        curr_tab = tab;
        current_window = window;
        tab.classList.add("current");
        window.classList.remove("minimized");
        window.classList.add("current");
        reorderWindows(window);
    })
    tab.addEventListener("click", () => {
        if (curr_tab){
            curr_tab.classList.remove("current");
        }
        if (current_window){
            current_window.classList.remove("current");
        }
        if (curr_tab != tab){
            curr_tab = tab;
            current_window = window;
            tab.classList.add("current");
            window.classList.add("current");
            window.classList.remove("minimized");
            reorderWindows(window);
        } else {
            curr_tab = null;
            current_window = null;
            tab.classList.remove("current");
            window.classList.add("minimized");
            window.classList.remove("current");
        }
    })
    window.classList.add("window");
    window.classList.add("current");
    window.innerHTML = `
        <div class="window-bar">
            <img src="${icon}" class="window-bar-icon"/>
            <div class="window-bar-title">${name}</div>
            <div class="window-controls">
                <div class="window-control minimize"></div>
                <div class="window-control maximize"></div>
                <div class="window-control close"></div>
            </div>
        </div>
        <div class="window-content">
            ${content}
        </div>
        <div class="resizer-right right"></div>
        <div class="resizer-bottom bottom"></div>
    `;
    main.appendChild(window);
    makeWindowDraggable(window);
    window.querySelector(".close").addEventListener("click", () => {
        window.remove();
        tab.remove();
    });
    window.querySelector(".minimize").addEventListener("click", () => {
        window.classList.add("minimized");
        window.classList.remove("current");
        tab.classList.remove("current");
    });
    window.querySelector(".maximize").addEventListener("click", () => {
        if (!window.classList.contains("maximized")){
            window.dataset.top = window.style.top
            window.dataset.left = window.style.left
            window.dataset.width = window.style.width
            window.dataset.height = window.style.height
            window.style.top = "0px";
            window.style.left = "0px";
            window.style.width = null;
            window.style.height = null;
        } else {
            window.style.top = window.dataset.top;
            window.style.left = window.dataset.left;
            window.style.width = window.dataset.width;
            window.style.height = window.dataset.height;
        }
        window.classList.toggle("maximized");
        tab_container.querySelector(".current").classList.remove("current");
        tab.classList.add("current");
        window.classList.add("current");
    });
    if (script_type == 1){
        renderIntertainment(window.querySelector(".intertainment-container"));
        window.querySelector(".intertainment-search").addEventListener("input", (e) => renderIntertainment(window.querySelector(".intertainment-container"),e.target.value));
    } else if (script_type == 2) {
        const script = document.createElement("script");
        script.src = "/assets/js/jss.js";
        script.onload = () => {
            const content = window.querySelector(".window-content");
            initSettingsWindow(content);
        };
        script.onerror = () => {
            console.error("Failed to load settings script.");
        };
        document.body.appendChild(script); // attach to <body>, not content
    }    
}
async function start(){
    main = document.createElement("div");
    main.classList.add("main-bg");
    document.body.appendChild(main);

    const bar = document.createElement("div");
    bar.classList.add("bottom-bar");
    bar.classList.add("main-outset");
    main.appendChild(bar);

    const start_menu = document.createElement("div");
    start_menu.classList.add("start-menu");
    start_menu.classList.add("main-outset");
    start_menu.innerHTML = `
    <div class="start-menu-fade-bar"><span>Windows 98</span></div>
    <div class="start-menu-fade-main-container">
        <div class="start-menu-button" onclick="makeWindow('Games','./img/1.png','<div class=&quot;intertainment-wrapper&quot;><div class=&quot;intertainment-top-bar&quot;><span class=&quot;intertainment-search-text&quot;>Search</span><input class=&quot;intertainment-search main-inset&quot;></div><div class=&quot;intertainment-container&quot;></div></div>',1);">
            <img src="./img/1.png">
            <span>Games</span>
        </div>
        <div class="horizontal-seperator"></div>
    </div>
  `;
  
    main.appendChild(start_menu);

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
    img.src = "./img/icon.png";
    start_btn.appendChild(img);
    const text = document.createElement("span");
    text.classList.add("bottom-bar-start-text");
    text.textContent = "Start";
    start_btn.appendChild(text);
    bar.appendChild(start_btn);

    const seperator = document.createElement("div");
    seperator.classList.add("vertical-seperator");
    bar.appendChild(seperator);
    tab_container = document.createElement("div");
    tab_container.classList.add("bottom-bar-window-tab-container");
    bar.appendChild(tab_container);

    const bar_extra = document.createElement("div");
    bar_extra.classList.add("bottom-bar-extra");
    bar_extra.classList.add("main-inset");
    bar.appendChild(bar_extra);

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
     <img class="bottom-bar-extra-audio-track" src="./img/audiorange.png"/>
     <div class="dashed-outline" style="width: 5vh; height: 12vh; margin-left: 1vh; display:flex; align-items:center; justify-content:center;">
        <input class="bottom-bar-extra-audio-slider" type="range" min="0" max="100" value="50">
     </div>
    </div>
    `;
    main.appendChild(bar_extra_audio_setting);


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

    grid = document.createElement("div");
    grid.classList.add("app-grid");
    grid.addEventListener("click", () => {
       grid.querySelectorAll(".app").forEach((app) => {
           app.classList.remove("app-double-clicked");
       })
    });
    main.appendChild(grid);
    const gridSize = 46; 
    for (let i = 0; i < gridSize; i++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.ondragover = (e) => e.preventDefault();
            cell.ondrop = (e) => {
                e.preventDefault();
                const appId = e.dataTransfer.getData("text/plain");
                const draggedApp = document.getElementById(appId);
            
                if (cell.children.length === 0) {
                    cell.appendChild(draggedApp);
                }
            };
            grid.appendChild(cell);
    }
    makeapp("./img/1.png","Games");
    makeapp("./img/2.png","Settings");
    window.scrollTo(0, 0);
    commandprmpt.remove();
}

async function init(){
    //await executeCommands(studyBootSequence,commandprmpt);
    await start();
}
init();
