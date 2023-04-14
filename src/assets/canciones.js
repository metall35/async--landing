const API = "https://spotify23.p.rapidapi.com/artist_singles/?id=2LRoIwlKmHjgvigdNGBHNo&offset=0&limit=10"
const content = null || document.getElementById("canciones-ferxxo")
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'b390c2c42emsha0691cffe81cf71p1fef12jsnd25f4ff9d644',
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    }
};
async function fetchData(urlAPI) {
    const response = await fetch(urlAPI, options)
    const data = await response.json()
    return data
}

(async () => {
    try {
        const cancion = await fetchData(API)
        // console.log(cancion.data.artist.discography.singles.items[0].releases.items[0]);
        let view = `
            ${cancion.data.artist.discography.singles.items.map(musica => `
            <a href="${musica.releases.items[0].sharingInfo.shareUrl}">
                <div class="group relative">
                    <div class="w-full bg-gray-200  rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                        <img src="${musica.releases.items[0].coverArt.sources[0].url}" alt="" class="w-full">
                    </div>
                    <div class="mt-4 flex justify-between">
                        <h3 class="text-sm text-gray-700">
                            <span aria-hidden="true" class="absolute inset-0"></span>
                            ${musica.releases.items[0].name}
                        </h3>
                    </div>
                </div>
            </a>
            `).join('')}
        `
        content.innerHTML = view
    } catch (error) {
        console.log(error);
    }
})()