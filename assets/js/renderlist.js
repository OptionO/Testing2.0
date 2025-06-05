function renderList(sort_type) {
    document.getElementById("loader").style.display = "block";
    // Clear existing items
    document.getElementById("itembox").textContent = '';
    document.getElementById("category-container").textContent = '';

    let container = null;
    if (sort_type === 'category') {
        container = document.getElementById("category-container");
        document.getElementById("SortList").innerHTML = "Sort by - Category";
        localStorage.setItem("sort_type", JSON.stringify("category"));
    } else if (sort_type === 'popular') {
        container = document.getElementById("itembox");
        document.getElementById("SortList").innerHTML = "Sort by - Popular";
        localStorage.setItem("sort_type", JSON.stringify("popular"));
    } else {
        container = document.getElementById("itembox");
        document.getElementById("SortList").innerHTML = "Sort by - Alphabetical";
        localStorage.setItem("sort_type", JSON.stringify("alphabetical"));
    }

    // If sorting by popular, we need to fetch both index.json and active users first.
    if (sort_type === 'popular') {
        Promise.all([
            fetch('assets/data/index.json'),
            fetch('/api/activeusers')
        ])
            .then(([indexRes, activeRes]) => Promise.all([indexRes.json(), activeRes.json()]))
            .then(([data, activeUsers]) => {
                // Build mapping of game code to active user count
                const gameCounts = {};
                activeUsers[0].forEach(entry => {
                    // Extract game code from URL e.g. "/studyguide/2048/index.html"
                    const match = entry.url.match(/\/studyguide\/([^\/]+)\/index\.html$/);
                    if (match) {
                        const code = match[1];
                        gameCounts[code] = (gameCounts[code] || 0) + 1;
                    }
                });

                // Attach a popularity field to each game item from index.json
                data.forEach(item => {
		    console.log(item[0]);
                    const match = item.url.match(/studyguide\/([^\/]+)\/index\.html$/);
                    if (match) {
                        const code = match[1];
                        item.popularity = gameCounts[code] || 0;
                    } else {
                        item.popularity = 0;
                    }
                });

                // Sort data descending by popularity
                data.sort((a, b) => b.popularity - a.popularity);

                // Render each game card and include the popularity counter
                data.forEach((item, index) => {
                    const listItem = document.createElement("a");
                    listItem.classList.add("griditem");
                    listItem.href = item.url;
                    listItem.innerHTML = `
                        <div class="card_margin">
                            <div class="col zoom-effect">
                                <img src="${item.img}" class="img-fluid grid-img img-hover-shadow" style="border-radius: 1vw;" alt="Image">
                                <p class="text-center listing-text">${item.name}</p>
                                <span class="person-counter" style="font-size: 1.5vw; margin-left: 1vw;">
                                    ${item.popularity} <i class="fa fa-user"></i>
                                </span>
                            </div>
                        </div>`;
                    const img = listItem.querySelector("img");
                    img.loading = "lazy";
                    img.fetchPriority = index < 5 ? "high" : "auto";

                    // For popular sort (or alphabetical) we use the main container
                    container.appendChild(listItem);
                });
            })
            .catch(error => console.error("Error:", error))
            .finally(() => {
                document.getElementById("loader").style.display = "none";
            });
    } else {
        // For alphabetical or category sorts, use the original flow.
        fetch('assets/data/index.json')
            .then(response => response.json())
            .then(data => {
                if (sort_type === 'category') {
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

                if (sort_type === 'category') {
                    // Create category sections
                    Object.entries(categoryMap).forEach(([category, displayName]) => {
                        const categoryText = document.createElement("h3");
                        categoryText.classList.add("white-text", "category-text");
                        categoryText.id = `itembox_${category}-text`;
                        categoryText.innerText = displayName;
                        categoryText.style.textAlign = 'left';
                        container.appendChild(categoryText);

                        const categoryContainer = document.createElement("div");
                        categoryContainer.id = `itembox_${category}`;
                        categoryContainer.style.marginBottom = '20px';
                        categoryContainer.classList.add("row", "row-cols-3", "category-container");
                        container.appendChild(categoryContainer);
                    });
                }

                data.forEach((item, index) => {
                    const listItem = document.createElement("a");
                    listItem.classList.add("griditem");
                    listItem.href = item.url;
                    listItem.innerHTML = `
                        <div class="card_margin">
                            <div class="col zoom-effect">
                                <img src="${item.img}" class="img-fluid grid-img img-hover-shadow" style="border-radius: 1vw;" alt="Image">
                                <p class="text-center listing-text">${item.name}</p>
                            </div>
                        </div>`;
                    const img = listItem.querySelector("img");
                    img.loading = "lazy";
                    img.fetchPriority = index < 5 ? "high" : "auto";

                    if (sort_type === 'category') {
                        const categoryElement = document.getElementById(`itembox_${item.category}`);
                        if (categoryElement) {
                            categoryElement.appendChild(listItem);
                        } else {
                            console.error(`Category container for "${item.category}" not found.`);
                        }
                    } else {
                        container.appendChild(listItem);
                    }
                });
            })
            .catch(error => console.error("Error:", error))
            .finally(() => {
                // For alphabetical/category sorts, update active user counters separately.
                fetch("/api/activeusers")
                    .then(response => response.json())
                    .then(activeUsers => {
                        const gameCounts = {};
                        activeUsers[0].forEach(entry => {
                            const match = entry.url.match(/\/studyguide\/([^\/]+)\/index\.html$/);
                            if (match) {
                                const code = match[1];
                                gameCounts[code] = (gameCounts[code] || 0) + 1;
                            }
                        });
                        document.querySelectorAll(".griditem").forEach(card => {
                            const href = card.getAttribute("href");
                            const match = href.match(/studyguide\/([^\/]+)\/index\.html$/);
                            if (match) {
                                const gameCode = match[1];
                                const count = gameCounts[gameCode] || 0;
                                let counter = card.querySelector(".person-counter");
                                if (!counter) {
                                    counter = document.createElement("span");
                                    counter.className = "person-counter";
                                    counter.style.fontSize = "1.5vw";
                                    counter.style.marginLeft = "1vw";
                                    card.appendChild(counter);
                                }
                                counter.innerHTML = `${count} <i class="fa fa-user"></i>`;
                            }
                        });
                    })
                    .catch(err => console.error("Error fetching active users:", err))
                    .finally(() => {
                        document.getElementById("loader").style.display = "none";
                    });
            });
    }
}

document.addEventListener('DOMContentLoaded', function () {
    // When the page loads, read the sort_type from localStorage (default to alphabetical if not set)
    const storedSort = localStorage.getItem("sort_type");
    const sortType = storedSort ? JSON.parse(storedSort) : "alphabetical";
    renderList(sortType);

    document.getElementById("loader").style.display = "none";

    setTimeout(() => {
        document.body.classList.add("page-ready");
    }, 100);
});

function updateActiveUserCounters() {
    fetch("/api/activeusers")
        .then(response => response.json())
        .then(activeUsers => {
            const gameCounts = {};
            activeUsers[0].forEach(entry => {
                const match = entry.url.match(/\/studyguide\/([^\/]+)\/index\.html$/);
                if (match) {
                    const code = match[1];
                    gameCounts[code] = (gameCounts[code] || 0) + 1;
                }
            });
            document.querySelectorAll(".griditem").forEach(card => {
                const href = card.getAttribute("href");
                const match = href.match(/studyguide\/([^\/]+)\/index\.html$/);
                if (match) {
                    const gameCode = match[1];
                    const count = gameCounts[gameCode] || 0;
                    let counter = card.querySelector(".person-counter");
                    if (!counter) {
                        counter = document.createElement("span");
                        counter.className = "person-counter";
                        counter.style.fontSize = "1.5vw";
                        counter.style.marginLeft = "1vw";
                        card.appendChild(counter);
                    }
                    counter.innerHTML = `${count} <i class="fa fa-user"></i>`;
                }
            });
        })
        .catch(err => console.error("Error updating counters:", err));
}

setInterval(updateActiveUserCounters, 1000);
