    const tooltip = document.querySelector('.tool-tip');
    const main = document.querySelector('.main-cont');
    async function randomsplash(){
        let SplashArray = await fetch('text.json').then(response => response.json());
        const randomSplash = SplashArray[Math.floor(Math.random() * SplashArray.length)];
        const SplashDiv = document.querySelector('.logo-splash-text');
        SplashDiv.textContent = randomSplash; 
        SplashDiv.style.fontSize = (4 - SplashDiv.innerHTML.length / 10) + 'vw';
    }
    randomsplash();
    function loadfile(url) {
	console.log(url)
        window.location.href = "src/index.html?a=" + encodeURIComponent(url);
    }
    main.addEventListener('mousemove', function(e) {
        tooltip.style.left = e.clientX + 20 + 'px';
        tooltip.style.top = e.clientY + 'px';
    });
    let buttons = document.querySelectorAll('.main-bt');
    buttons.forEach(element => {
        element.addEventListener('mouseover', () => {
            showTooltip(element.getAttribute('data-tooltip'));
        });

        element.addEventListener('mouseout', hideTooltip);
    });
    function showTooltip(text) {
        tooltip.style.display = 'block';
        tooltip.textContent = text;
    }

    function hideTooltip() {
        tooltip.style.display = 'none';
        tooltip.textContent = '';
    }

