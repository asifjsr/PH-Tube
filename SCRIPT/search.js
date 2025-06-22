document.getElementById("searchBox").addEventListener("keyup",
    (e)=>{
        const input= e.target.value
        searchvideos(input)
    }
)
function searchvideos(searchtext = ""){
    console.log(searchtext)
    fetch(`https://openapi.programming-hero.com/api/phero-tube/videos?title=${searchtext}`)
    .then(res => res.json())
    .then(data => {
        removeActiveClass()
        document.getElementById("btn-all").classList.add("active")
        displayvideo(data.videos)})
} 