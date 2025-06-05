function initSettingsWindow(parent) {
  const switchElement = parent.querySelector('#redirectswitch');
  if (switchElement) {
    switchElement.addEventListener('change', () => {
      localStorage.setItem('redirect', switchElement.checked);
    });
  }

  const urlButton = parent.querySelector('#UrlButton');
  if (urlButton) {
    urlButton.onclick = () => {
      const input = parent.querySelector('#UrlBt');
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
  const fileInput = parent.querySelector('#FileInputBt');
  if (fileInput) {
    fileInput.addEventListener('change', () => {
      const file = fileInput.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (e) => {
        const newWindow = window.open();
        newWindow.document.open();
        newWindow.document.write(e.target.result);
        newWindow.document.title = "about:blank";
      };
      reader.readAsText(file);
    });
  }

  const startButton = parent.querySelector('#panicbutton');
  const resultInput = parent.querySelector('#result');
  let detecting = false;
  if (startButton && resultInput) {
    startButton.addEventListener('click', () => {
      detecting = true;
      resultInput.value = "Listening for key presses...";
      resultInput.focus();
    });

    document.addEventListener('keydown', function handler(event) {
      if (!parent.contains(document.activeElement)) return; 
      if (!detecting) return;

      event.preventDefault();
      const keys = [];
      if (event.key !== "Enter") {
        if (event.ctrlKey) keys.push('Ctrl');
        if (event.altKey) keys.push('Alt');
        if (event.shiftKey) keys.push('Shift');
        if (event.metaKey) keys.push('Meta');
        keys.push(event.key);
        resultInput.value = keys.join('+');
      } else {
        detecting = false;
        localStorage.setItem("panickey", resultInput.value);
      }
    });
  }

  const toggleBox = parent.querySelector("#myCheck");
  const toggleText = parent.querySelector("#text");
  if (toggleBox && toggleText) {
    toggleBox.addEventListener("change", () => {
      toggleText.style.display = toggleBox.checked ? "block" : "none";
    });
  }

  const dropdown = parent.querySelector("#SettingDropdown");
  if (dropdown) {
    dropdown.addEventListener("change", (e) => {
      const selected = e.target.selectedOptions[0];
      const value = selected.value;
      const favicon = selected.dataset.favicon;
      const name = selected.textContent;
      document.title = value;
      document.querySelector("link[rel='shortcut icon']").href = favicon;
      localStorage.setItem("Title", value);
      localStorage.setItem("Favi", favicon);
    });
  }
}
