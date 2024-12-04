const searchForm = document.getElementById('search-form');
const searchBox = document.getElementById('search-box');
const searchResult = document.getElementById('search-result');
const btn = document.getElementById('show-more-btn');


let keyword;
let page = 1;
const accessKey = 'Q60seSYu2KF0iShf6jCJ2k0M9_L9w5NcK9MlzF4L5Xs';
async function searchImages(){


    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}
    &query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);

    const data = await response.json();

    // console.log(data);

    //hide the before data
    if(page === 1){
        searchResult.innerHTML = "";
    }

    const results = data.results;

    results.map((result) =>{
        const image = document.createElement('img');
        image.src = result.urls.small;
        const imageLink = document.createElement('a');
        imageLink.href = result.links.html;
        imageLink.target = '_blank';
        imageLink.appendChild(image);

        searchResult.appendChild(imageLink);
    })

    btn.style.display = 'block';
    



}

searchForm.addEventListener('submit' , (e) =>{
   e.preventDefault();
   page = 1;
   searchImages();
})

btn.addEventListener('click' , () =>{
    page++;
    searchImages();

})
