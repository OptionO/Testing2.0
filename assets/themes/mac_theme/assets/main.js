// mac-theme/main.js
import interact from 'interactjs'; // assuming bundler or ES module setup

// Utility to create a window element
export function createMacWindow(id, title, contentHTML, iconURL) {
    const win = document.createElement('div');
    win.classList.add('mac-window');
    win.dataset.id = id;
    win.innerHTML = `
    <div class="mac-titlebar">
      <div class="mac-traffic-lights">
        <span class="button close"></span>
        <span class="button minimize"></span>
        <span class="button maximize"></span>
      </div>
      <span class="title" style="margin-left:12px;">${title}</span>
    </div>
    <div class="mac-content">${contentHTML}</div>
  `;
    document.body.appendChild(win);

    // Append icon to dock dataset for minimize/restore
    win.dataset.icon = iconURL || '';

    setupWindowActions(win);
    setupDragResize(win);
    return win;
}

// Setup traffic-light actions
function setupWindowActions(win) {
    const [btnClose, btnMin, btnMax] = win.querySelectorAll('.button');
    btnClose.addEventListener('click', () => win.remove());
    btnMin.addEventListener('click', () => minimizeWindow(win));
    btnMax.addEventListener('click', () => toggleMaximize(win));
}

// Minimize → move to dock
function minimizeWindow(win) {
    const dock = document.getElementById('mac-dock');
    const icon = document.createElement('div');
    icon.classList.add('dock-item', 'minimized');
    icon.innerHTML = `<img src="${win.dataset.icon}" alt="">`;
    icon.addEventListener('click', () => restoreWindow(win, icon));
    dock.appendChild(icon);
    win.style.display = 'none';
}

// Restore from dock
function restoreWindow(win, icon) {
    icon.remove();
    win.style.display = 'flex';
    win.classList.remove('maximized');
}

// Toggle maximize/restore
function toggleMaximize(win) {
    win.classList.toggle('maximized');
}

// Drag & Resize via Interact.js
function setupDragResize(win) {
    interact(win)
        .draggable({
            allowFrom: '.mac-titlebar',
            onmove: dragMoveListener
        })
        .resizable({
            edges: { left: true, right: true, bottom: true, top: true },
            preserveAspectRatio: false,
            inertia: true
        })
        .on('resizemove', function (event) {
            const { x, y } = event.deltaRect.left && event.deltaRect.top
                ? { x: parseFloat(win.getAttribute('data-x') || 0), y: parseFloat(win.getAttribute('data-y') || 0) }
                : { x: 0, y: 0 };
            // update size
            win.style.width = event.rect.width + 'px';
            win.style.height = event.rect.height + 'px';
            // adjust position
            win.style.transform = `translate(${x + event.deltaRect.left}px, ${y + event.deltaRect.top}px)`;
            win.setAttribute('data-x', x + event.deltaRect.left);
            win.setAttribute('data-y', y + event.deltaRect.top);
        });
}

function dragMoveListener(event) {
    const win = event.target;
    const x = (parseFloat(win.getAttribute('data-x')) || 0) + event.dx;
    const y = (parseFloat(win.getAttribute('data-y')) || 0) + event.dy;

    win.style.transform = `translate(${x}px, ${y}px)`;
    win.setAttribute('data-x', x);
    win.setAttribute('data-y', y);
}

// Settings panel logic
export function initSettings() {
    const panel = document.getElementById('mac-settings');
    document.getElementById('settings-btn').addEventListener('click', () => panel.classList.toggle('open'));

    const bgColorInput = document.getElementById('setting-bgcolor');
    const bgImageInput = document.getElementById('setting-bgimage');
    const applyBtn = document.getElementById('apply-settings');

    applyBtn.addEventListener('click', () => {
        const color = bgColorInput.value;
        const image = bgImageInput.value;
        document.documentElement.style.setProperty('--window-bg-color', color);
        document.documentElement.style.setProperty('--window-bg-image', image ? `url(${image})` : 'none');
    });
}

// On DOM ready, create dock & settings container
document.addEventListener('DOMContentLoaded', () => {
    const dock = document.createElement('div');
    dock.id = 'mac-dock';
    document.body.appendChild(dock);

    const settings = document.createElement('div');
    settings.id = 'mac-settings';
    settings.innerHTML = `
    <h3>Theme Settings</h3>
    <label>Background Color</label>
    <input type="color" id="setting-bgcolor" value="#ffffff">
    <label>Background Image URL</label>
    <input type="text" id="setting-bgimage" placeholder="https://example.com/img.png">
    <button id="apply-settings">Apply</button>
  `;
    document.body.appendChild(settings);

    initSettings();
});
