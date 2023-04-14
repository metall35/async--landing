const API1 = "https://spotify23.p.rapidapi.com/artist_albums/?id=2LRoIwlKmHjgvigdNGBHNo&offset=0&limit=100"
const content1 = document.getElementById("album-ferxxo")
const options1 = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'a21d9d4b54msh528b269af28748ep19b105jsn8ac0a4e6217a',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    }
};
async function fetchData(urlAPI) {
    const response = await fetch(urlAPI, options1)
    const data = await response.json()
    return data
}

(async () => {
    try {
        const album = await fetchData(API1)
        // console.log(album.data.artist.discography.albums.items[0].releases.items[0]);
        let view1 = `
        ${album.data.artist.discography.albums.items.map(music => 
            `<a href="${music.releases.items[0].sharingInfo.shareUrl}">
                <div class="group relative">
                    <div class="w-full bg-gray-200  rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                        <img src="${music.releases.items[0].coverArt.sources[0].url}" alt="" class="w-full">
                    </div>
                    <div class="mt-4 flex justify-between">
                        <h3 class="text-sm text-gray-700">
                            <span aria-hidden="true" class="absolute inset-0"></span>
                            ${music.releases.items[0].name}
                        </h3>
                    </div>
                </div>
            </a>
            `
        ).join('')}
        `
        content1.innerHTML = view1
    }
    catch (error) {
        console.log(error);
        content1.innerHTML = error
    }
})()