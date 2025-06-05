const redirectSwitch = document.querySelector('#redirectswitch');
if (redirectSwitch) {
  redirectSwitch.checked = localStorage.getItem('redirect') === 'true';
  redirectSwitch.addEventListener('change', () => {
    localStorage.setItem('redirect', redirectSwitch.checked);
  });
}


document.querySelectorAll('.settings-option-dropdown').forEach(dropdown => {
  const button = dropdown.querySelector('.settings-option-dropdown-button');
  const items = dropdown.querySelectorAll('.settings-option-dropdown-content-item');

  if (!button || items.length === 0) return;

  items.forEach(item => {
    item.addEventListener('click', () => {
      const selectedText = item.textContent;
      button.textContent = selectedText;

      if (dropdown.closest('#tab-cloaker')) {
        const config = {
          'JustStudy': { title: 'JustStudy', favicon: '/assets/img/favicon.ico' },
          'Seneca': { title: 'Seneca – Learn', favicon: '/assets/img/TabCloak/Seneca.ico' },
          'Sparx': { title: 'Sparx Maths', favicon: '/assets/img/TabCloak/Sparx.ico' },
          'MathsWatch': { title: 'MathsWatch', favicon: '/assets/img/TabCloak/Mathswatch.png' },
        };

        if (config[selectedText]) {
          document.title = config[selectedText].title;
          const fav = document.querySelector("link[rel='shortcut icon']");
          if (fav) fav.href = config[selectedText].favicon;

          localStorage.setItem('Title', config[selectedText].title);
          localStorage.setItem('Favi', config[selectedText].favicon);
        }
      }
      if (dropdown.closest('#category')) {
        localStorage.setItem('sort_type', selectedText);
        document.body.setAttribute("data-sort-type",selectedText);
        renderList(selectedText);
      }
    });
  });
});
const urlButton = document.getElementById("bootstrap-1-bt");
if (urlButton) {
  urlButton.onclick = () => {
    const input = document.getElementById("bootstrap-1-input");
    if (!input) return;
    const newdata = 'https://' + input.value;
    const win = window.open();
    win.document.body.style.margin = "0";
    win.document.body.style.height = "100vh";
    const iframe = win.document.createElement("iframe");
    iframe.style.border = "none";
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.margin = "0";
    iframe.referrerpolicy = "no-referrer";
    iframe.allow = "fullscreen";
    iframe.src = newdata;
    win.document.body.appendChild(iframe);
  };
}

const hotkeyEl = document.querySelector('.settings-option-element');
let detecting = false;

if (hotkeyEl) {
  hotkeyEl.addEventListener('click', () => {
    detecting = true;
    hotkeyEl.textContent = "Listening... Press keys";
  });

  document.addEventListener('keydown', function handler(event) {
    if (!detecting) return;
    if (!document.activeElement || !hotkeyEl.contains(document.activeElement)) {
      event.preventDefault();
      const keys = [];
      if (event.ctrlKey) keys.push('Ctrl');
      if (event.altKey) keys.push('Alt');
      if (event.shiftKey) keys.push('Shift');
      if (event.metaKey) keys.push('Meta');
      if (event.key && !['Control', 'Alt', 'Shift', 'Meta'].includes(event.key)) {
        keys.push(event.key);
      }

      if (event.key === "Enter") {
        detecting = false;
        localStorage.setItem("panickey", hotkeyEl.textContent);
      } else {
        hotkeyEl.textContent = keys.join('+');
      }
    }
  });
}
let key_input_data = "";

const urls = {
    "Seneca - Learn 2x Faster": "https://senecalearning.com/",
    "Sparx Maths - Home": "https://www.sparxmaths.com",
    "Tassomai": "https://www.tassomai.com",
    "MathsWatch": "https://www.mathswatch.com",
};

document.addEventListener('keydown', function (event) {
    if (detecting) return;
    key_input_data = "";
    const keys = new Set();

    if (event.ctrlKey) keys.add('Ctrl');
    if (event.altKey) keys.add('Alt');
    if (event.shiftKey) keys.add('Shift');
    if (event.metaKey) keys.add('Meta');
    keys.add(event.key);
    key_input_data = Array.from(keys).join('+');
    
    if (key_input_data === localStorage.getItem("panickey")) {
        const currentTitle = localStorage.getItem("Title");
        console.log("Redirecting to " + currentTitle);
        if (urls[currentTitle]) {
            window.location.href = urls[currentTitle];
        } else if (currentTitle === "JustStudy") {
            const obj_urls = Object.values(urls);
            window.location.href = obj_urls[Math.floor(Math.random() * obj_urls.length)];
        }
    }
    

});
window.addEventListener("blur", () => {
    console.log("here")
    if (key_input_data == "Alt" && localStorage.getItem("redirect") === 'true') {
            const currentTitle = localStorage.getItem("Title");
            console.log("Redirecting to " + currentTitle);    
            if (urls[currentTitle]) {
                window.location.href = urls[currentTitle];
            } else if (currentTitle === "JustStudy") {
                const obj_urls = Object.values(urls);
                window.location.href = obj_urls[Math.floor(Math.random() * obj_urls.length)];
            }
    }
})
const optimizeswitch = document.getElementById("optimizeswitch");
if (localStorage.getItem("optimize") == null){
	localStorage.setItem("optimize", "false");
	document.body.setAttribute("data-reduced-effects", false);

}
if (optimizeswitch) {
  optimizeswitch.addEventListener("change", () => {
    if (optimizeswitch.checked) {
      localStorage.setItem("optimize", "true");
    } else {
      localStorage.setItem("optimize", "false");
    }
    document.body.setAttribute("data-reduced-effects", optimizeswitch.checked);
  });
}