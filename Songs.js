document.addEventListener("DOMContentLoaded", function () {
    fetch("Songs.json")
        .then(res => res.json())
        .then(data => {
            AllSongs = data;

            const container = document.querySelector(".songsRow");
            container.innerHTML = "";
            data.Songs.forEach(song => {
                const card = document.createElement("div");
                card.classList.add("songCard");
                card.innerHTML = `<div class="songImg"><img src="${song.img}"></div>
        <div class="songTitle">${song.title}</div>
        <div class="songArtist">${song.artists}</div>`;
                container.appendChild(card);
            });
            const container2 = document.querySelector(".songsRow2");
            container2.innerHTML = "";
            data.Shelf2.forEach(music => {
                const card2 = document.createElement("div");
                card2.classList.add("songCard2");
                card2.innerHTML = `<div class="songImg2"><img src="${music.img}"></div>
        <div class="songTitle2">${music.title}</div>
        <div class="songArtist2">${music.artists}</div>`;
                container2.appendChild(card2);
            });
            setTimeout(() => {
                renderShelf(data.Shelf2, ".songsRow2");
            }, 100);
            const container3 = document.querySelector(".songsRow3");
            container3.innerHTML = "";
            data.albums.forEach(album => {
                const card3 = document.createElement("div");
                card3.classList.add("songCard3");
                card3.innerHTML = `<div class="songImg3"><img src="${album.img}"></div>
        <div class="songTitle3">${album.title}</div>
        <div class="songArtist3">${album.artists}</div>`;
                container3.appendChild(card3);
            });
            const nextBtn = document.getElementById("Next");
            nextBtn.addEventListener("click", function () {
                container.scrollBy({
                    left: container.clientWidth,
                    behavior: "smooth"
                })
            })
            const prevBtn = document.getElementById("Previous");
            prevBtn.addEventListener("click", function () {
                container.scrollBy({
                    left: -container.clientWidth,
                    behavior: "smooth"
                })
            })
            const nextBtn2 = document.getElementById("Next2");
            nextBtn2.addEventListener("click", function () {
                container2.scrollBy({
                    left: container2.clientWidth,
                    behavior: "smooth"
                })
            })
            const prevBtn2 = document.getElementById("Previous2");
            prevBtn2.addEventListener("click", function () {
                container2.scrollBy({
                    left: -container2.clientWidth,
                    behavior: "smooth"
                })
            });
            const nextBtn3 = document.getElementById("Next3");
            nextBtn3.addEventListener("click", function () {
                container3.scrollBy({
                    left: container3.clientWidth,
                    behavior: "smooth"
                })
            })
            const prevBtn3 = document.getElementById("Previous3");
            prevBtn3.addEventListener("click", function () {
                container3.scrollBy({
                    left: -container3.clientWidth,
                    behavior: "smooth"
                })
            });
            const searchInput = document.getElementById("input");
            searchInput.addEventListener("input", function () {
                const value = searchInput.value.toLowerCase();
                const cards = document.querySelectorAll(".songCard, .songCard2, .songCard3");
                cards.forEach(card => {
                    const title = card.querySelector("[class *= 'songTitle']").innerText.toLowerCase();
                    if (title.includes(value)) {
                        card.style.display = "";


                    }
                    else {
                        card.style.display = "none";

                    }
                });
                if (value !== "") {
                    document.getElementById("subTitle").style.display = "none";
                    document.getElementById("sub2").style.display = "none";
                    document.getElementById("subTitle2").style.display = "none";
                    document.getElementById("subTitle3").style.display = "none";
                    document.getElementById("Next").style.display = "none";
                    document.getElementById("Previous").style.display = "none";
                    document.getElementById("Next2").style.display = "none";
                    document.getElementById("Previous2").style.display = "none";
                    document.getElementById("Next3").style.display = "none";
                    document.getElementById("Previous3").style.display = "none";
                }
                else {
                    document.getElementById("subTitle").style.display = "block";
                    document.getElementById("sub2").style.display = "block";
                    document.getElementById("subTitle2").style.display = "block";
                    document.getElementById("subTitle3").style.display = "block";
                    document.getElementById("Next").style.display = "block";
                    document.getElementById("Previous").style.display = "block";
                    document.getElementById("Next2").style.display = "block";
                    document.getElementById("Previous2").style.display = "block";
                    document.getElementById("Next3").style.display = "block";
                    document.getElementById("Previous3").style.display = "block";

                }
            }) 
            document.getElementById("current-art").style.display = "none";
            const cards = document.querySelectorAll(".songCard, .songCard2, .songCard3");
            cards.forEach(card => {
                card.addEventListener("click", function(){
                    const title = card.querySelector(".songTitle, .songTitle2, .songTitle3").innerText;
                    const artist = card.querySelector(".songArtist, .songArtist2, .songArtist3").innerText;
                    const img = card.querySelector(".songImg img, .songImg2 img, .songImg3 img").src;
                    document.getElementById("current-title").innerText = title;
                    document.getElementById("current-artist").innerText = artist;
                    document.getElementById("current-art").src = img;
                    document.getElementById("current-art").style.display = "block";

                })

            })

        })
})


