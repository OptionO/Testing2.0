Number.prototype.clamp = function(min, max) {
      return Math.min(Math.max(this, min), max);
    };
    document.body.setAttribute("data-sort-type", localStorage.getItem("sort_type") || "Popularity");
    const themes = {
      "red": "linear-gradient(334deg, #ff0000, #bf4040, #000000)",
      "blue": "linear-gradient(334deg, #0000ff, #4040bf, #000000)",
      "lime": "linear-gradient(334deg, #00ff00, #40bf40, #000000)",
      "hell": "linear-gradient(334deg, #ff0000, #bf7340, #000000)",
      "flames": "linear-gradient(360deg, #ff9933, #663300, #000000)",
      "sunset": "linear-gradient(320deg, #ff7e5f, #feb47b, #2c3e50)",
      "ocean": "linear-gradient(270deg, #2193b0, #6dd5ed, #000000)",
      "mint": "linear-gradient(45deg, #98ff98, #3eb489, #0f0f0f)",
      "ice": "linear-gradient(300deg, #a1c4fd, #c2e9fb, #001f3f)",
      "purple": "linear-gradient(334deg, #8e2de2, #4a00e0, #000000)",
      "hacker": "linear-gradient(360deg, #00ff00, #003300, #000000)",
      "danger": "linear-gradient(45deg, #ff0000, #ff9999, #000000)",
      "neon-core": "radial-gradient(circle, #39ff14, #000000)",
      "galaxy": "radial-gradient(circle at center, #0f2027, #203a43, #2c5364)",
      "deep-space": "radial-gradient(circle at center, #1b2735, #090a0f, #000000)",
      "circuit": "repeating-linear-gradient(90deg, #0f0f0f, #0f0f0f 2vw, #1a1a1a 2vw, #1a1a1a 4vw)",
      "vaporwave": "linear-gradient(310deg, #ff00cc, #333399, #000000)",
      "retro": "linear-gradient(340deg, #fc466b, #3f5efb, #000000)",
      "cyberpunk": "linear-gradient(270deg, #ff0080, #7928ca, #2c003e)"
    };
    const themesArray = Object.values(themes);
    let popularity = {};
    let api = window.location.origin;
    const randomTheme = themesArray[Math.floor(Math.random() * themesArray.length)];
    document.getElementById("gradient").style = `
    width: 100vw; 
    height: 100vh; 
    position: fixed; 
    top: 0; 
    left: 0; 
    z-index: -1; 
    background: ${randomTheme}; 
    background-size: 180% 180%; 
    animation: gradient-animation 6s ease infinite; 
    filter: brightness(0.85);
  `;
    const topbarbuttons = document.querySelectorAll(".top-real-button");
    let currentactivetopbutton = document.querySelector(".top-real-button.current");
    let currentactivemenu = document.querySelector(".open");
    topbarbuttons.forEach(button => {
      button.addEventListener("click", () => {
        let selectordiv = document.getElementById(`${button.getAttribute("data-selector-id")}`);
        if (currentactivetopbutton) {
          currentactivetopbutton.classList.remove("current");
        }
        if (currentactivemenu) {
          currentactivemenu.classList.remove("open");
        }
        if (currentactivetopbutton === button) {
          button.classList.remove("current");
          if (selectordiv) {
            selectordiv.classList.remove("open")
          }
          currentactivetopbutton = null;
          return;
        }
        button.classList.add("current");
        if (selectordiv) {
          selectordiv.classList.toggle("open");
        }
        currentactivetopbutton = button;
        currentactivemenu = selectordiv;
      });
    });

    function closeNews(div) {
      div.classList.remove("open");
      document.getElementById("news-bt").classList.remove("current");
      currentactivemenu = null;
      currentactivetopbutton = null;
    }
    const searchbar = document.getElementById("search-bar");
    const searchtext = document.getElementById("search-text");
    const itemcontent = document.getElementById("main-selector-container");

    function makeItem(name, icon, link, div = itemcontent, category = null, popularitycount = null) {
      const maindiv = document.createElement("div");
      maindiv.classList.add("item-container");
      maindiv.addEventListener("click", () => {
        window.location = link;
      })
      const iconWrapper = document.createElement("div");
      iconWrapper.classList.add("item-container-icon-wrapper");
      const icondiv = document.createElement("img");
      icondiv.src = api + icon;
      iconWrapper.appendChild(icondiv);
      if (popularitycount != null) {
        const popularitycont = document.createElement("div");
        popularitycont.classList.add("item-container-popularity-container");
        const poptext = document.createElement("div");
        poptext.classList.add("item-container-popularity-container-text");
        poptext.innerText = popularitycount;
        popularitycont.appendChild(poptext);
        iconWrapper.appendChild(popularitycont);
      }
      const textdiv = document.createElement("span");
      textdiv.innerText = name;
      if (category != null) {
        maindiv.setAttribute("data-item-category", category);
      }
      maindiv.setAttribute("data-item-name", name);
      if (div === null) {
        div = itemcontent;
      }
      div.appendChild(maindiv);
      maindiv.appendChild(iconWrapper);
      maindiv.appendChild(textdiv);
    }
    async function UpdatePopularity() {
      popularity = {}
      let temppopularity = null;
      try {
        const res = await fetch(api + '/api/activeusers');
        if (!res || !res.ok) {
          throw new Error(`Network response was not ok (${res?.status})`);
        }
        const data = await res.json();
        temppopularity = data[0] ?? {};
      } catch (err) {
        console.error('UpdatePopularity failed:', err);
      }
      if (temppopularity){
        const index = await fetch(api + '/assets/data/index.json');
        if (!index || !index.ok) {
          throw new Error(`Network response was not ok (${index?.status})`);
        }
        const data = await index.json();
        //console.log(temppopularity)
        temppopularity.forEach((user) => {
            const pathname = new URL(user.url).pathname;
            const founditem = data.find(i => i.url === pathname);
            const result = founditem ? founditem.name : "";
            //console.log(result)
            if (popularity[result]){
              popularity[result] = popularity[result] + 1;
            } else {
              popularity[result] = 1
            }
        })
        //console.log(popularity)
      }
    }

    function AddPopularity(data) {
      data.forEach((item) => {
        item.popularitycount = popularity[item.name] ?? 0;
      });
      return data
    }
    async function renderList(sort_type) {
      itemcontent.innerHTML = "";
      const res = await fetch(api + "/assets/data/index.json");
      let data = await res.json();
      if (sort_type === 'Popularity') {
        await UpdatePopularity();
        data = AddPopularity(data);
        data.sort((a, b) => (b.popularitycount ?? 0) - (a.popularitycount ?? 0));
      } else if (sort_type === 'category') {
        data.sort((a, b) => a.category.localeCompare(b.category));
      } else {
        data.sort((a, b) => a.name.localeCompare(b.name));
      }
      const categoryMap = {
        "Gym Class": "Platformers & Skill",
        "Pen & Paper": "Logic & Strategy",
        "Recess": "Calm & Relaxing",
        "Science Lab": "Experimentation & Planning",
        "Sports Club": "Racing & Sports",
        "Music Room": "Rhythm & Music",
        "Math Class": "App & Extra"
      };
      if (sort_type === 'Category') {
        Object.entries(categoryMap).forEach(([category, displayName]) => {
          const categoryText = document.createElement("h3");
          categoryText.classList.add("category-text");
          categoryText.id = `itembox_${category}-text`;
          categoryText.innerText = displayName;
          categoryText.style.textAlign = 'left';
          itemcontent.appendChild(categoryText);
          const categoryContainer = document.createElement("div");
          categoryContainer.id = `itembox_${category}`;
          categoryContainer.style.marginBottom = '20px';
          categoryContainer.classList.add("category-container");
          itemcontent.appendChild(categoryContainer);
        });
      }
      data.filter(item => !item.hidden).forEach(item => {
        if (sort_type === 'Category') {
          const categoryElement = document.getElementById(`itembox_${item.category}`);
          if (categoryElement) {
            makeItem(item.name, item.img, item.url, categoryElement, item.category);
          } else {
            console.error(`Category container for "${item.category}" not found. The name is ${item.name}`);
          }
        } else if (sort_type === 'Popularity') {
          makeItem(item.name, item.img, item.url, null, null, item.popularitycount);
        } else {
          makeItem(item.name, item.img, item.url, null, null);
        }
      });
    }
    renderList(localStorage.getItem("sort_type") ?? document.body.getAttribute("data-sort-type") ?? "Alphabetical");
    const settingspanel = document.getElementById("settings-panel");
    const settingsslider = document.getElementById("settings-slider-container");
    const settingstitle = document.getElementById("settings-title");
    searchbar.addEventListener("focusin", () => {
      document.getElementById("search-text").style.width = "0%";
    })
    searchbar.addEventListener("focusout", () => {
      document.getElementById("search-text").style.width = "20%";
    })
    let currentpanel = 0;
    let maxpanel = settingspanel.children.length;
    let currentslider = null;
    let slideamount = 100;
    settingspanel.style.transition = "transform 0.3s ease";
    const sliderarrowleft = document.getElementById("settings-panel-arrow-left");
    const sliderarrowright = document.getElementById("settings-panel-arrow-right");

    function fixCurrentSettingsSlider() {
      if (currentslider) {
        currentslider.classList.remove("selected");
      }
      currentslider = settingsslider.children[currentpanel];
      currentslider.classList.add("selected");
    }

    function updateSettingsTitle() {
      settingstitle.innerText = settingspanel.children[currentpanel].getAttribute("data-title-text");
    }
    sliderarrowleft.addEventListener("click", (e) => {
      e.preventDefault();
      currentpanel -= 1;
      currentpanel = currentpanel.clamp(0, maxpanel - 1);
      settingspanel.style.transform = `translateX(${currentpanel * -slideamount}%)`;
      fixCurrentSettingsSlider();
      updateSettingsTitle()
    });
    sliderarrowright.addEventListener("click", (e) => {
      e.preventDefault();
      currentpanel += 1;
      currentpanel = currentpanel.clamp(0, maxpanel - 1);
      settingspanel.style.transform = `translateX(${currentpanel * -slideamount}%)`;
      fixCurrentSettingsSlider();
      updateSettingsTitle()
    })
    Array.from(settingspanel.children).forEach((child, index) => {
      const panelbt = document.createElement("div");
      if (index === 0) {
        currentslider = panelbt;
        panelbt.classList.add("selected");
      }
      panelbt.classList.add("settings-slider");
      settingsslider.appendChild(panelbt);
      panelbt.addEventListener("click", () => {
        if (currentslider) {
          currentslider.classList.remove("selected");
        }
        panelbt.classList.add("selected");
        settingspanel.style.transform = `translateX(-${index * slideamount}%)`;
        currentpanel = index;
        updateSettingsTitle()
        currentslider = panelbt;
      });
    });
    searchbar.addEventListener("input", () => {
      const query = searchbar.value.toLowerCase();
      if (document.body.getAttribute("data-sort-type") === "Category") {
        const categories = Array.from(itemcontent.querySelectorAll(".category-container"));
        categories.forEach((categoryContainer) => {
          const categoryItems = Array.from(categoryContainer.querySelectorAll('[data-item-name]'));
          let matchCount = 0;
          categoryItems.forEach((item) => {
            const name = item.getAttribute("data-item-name")?.toLowerCase();
            if (name && name.includes(query)) {
              item.style.display = "flex";
              matchCount++;
            } else {
              item.style.display = "none";
            }
          });
          const categoryTitle = document.getElementById(categoryContainer.id + "-text");
          if (categoryTitle) {
            categoryTitle.style.display = matchCount > 0 ? "block" : "none";
          }
        });
      } else {
        Array.from(itemcontent.children).forEach((child) => {
          const name = child.getAttribute("data-item-name");
          if (name && name.toLowerCase().includes(query)) {
            child.style.display = "flex";
          } else {
            child.style.display = "none";
          }
        });
      }
    });

    function FeelingLucky() {
      fetch(api + '/assets/data/index.json').then(response => response.json()).then(data => {
        const randomarray = data[Math.floor(Math.random() * data.length)];
        const link = randomarray["url"]
        window.location.href = link;
      }).catch((error) => console.error("Error:", error))
    }
    const newscontainer = document.getElementById("news-container");

    function loadNews() {
      fetch(api + "/assets/data/news.xml").then(response => response.text()).then(str => new window.DOMParser().parseFromString(str, "text/xml")).then(data => {
        const items = data.querySelectorAll("item");
        let html = ``;
        items.forEach(el => {
          html += `
            
		<article>
			<article-top>
				<img src="${el.querySelector("link").innerHTML}" class="article-image" alt="">
					<h2>
                  ${el.querySelector("title").innerHTML}
              </h2>
				</article-top>
				<h3>
                  ${el.querySelector("description").innerHTML}
              </h3>
			</article>
          `;
        });
        newscontainer.insertAdjacentHTML("beforeend", html);
      });
      if (!localStorage.getItem('api')) {
        localStorage.setItem('api', "https://juststudy.uk"); 
      }
      if (newsversion !== localStorage.getItem('news_version')) {
        localStorage.setItem('news_version', newsversion);
        document.getElementById("news-bt").classList.add("current");
        document.getElementById("news-holder").classList.add("open");
      }
    }
    loadNews();
    document.getElementById("category-button").innerText = localStorage.getItem('sort_type');
    document.getElementById("optimizeswitch").checked = localStorage.getItem('optimize') === 'true' ? true : false;
    document.body.setAttribute("data-reduced-effects", document.getElementById("optimizeswitch").checked = localStorage.getItem('optimize') === 'true' ? true : false);
    document.getElementById("apiurl").value = localStorage.getItem('api');