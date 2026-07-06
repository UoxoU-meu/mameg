fetch("updates.json")

.then(response => response.json())

.then(data=>{

    const games=document.getElementById("games");

    const icons={

        genshin:"🌸",
        hsr:"🚄",
        zzz:"⚡",
        wuwa:"🌊",
        bluearchive:"🟦",
        azurlane:"⚓"

    };

    const names={

        genshin:"原神",
        hsr:"スターレイル",
        zzz:"ゼンゼロ",
        wuwa:"鳴潮",
        bluearchive:"ブルーアーカイブ",
        azurlane:"アズールレーン"

    };

    for(const key in data){

    const game = data[key];

    const [year, month, day] = game.date.split("/");

    const update = new Date(
        Number(year),
        Number(month) - 1,
        Number(day)
    );

    const today = new Date();

    const diff = update - today;

    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));

    games.innerHTML += `
        <div class="card">

            <h2>${icons[key]} ${names[key]}</h2>

            <div class="version">
                ✨ ${game.version}
            </div>

            <div class="days">
                あと ${days} 日
            </div>

            <div class="date">
                📅 ${game.date}
            </div>

        </div>
    `;
}

})

.catch(error=>{

    console.error(error);

});