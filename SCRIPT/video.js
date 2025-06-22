function loadvideos(){
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then(res => res.json())
    .then(data => {
        removeActiveClass()
        document.getElementById("btn-all").classList.add("active")
        displayvideo(data.videos)})
} 
function loaddetails (id) {
    const url = `https://openapi.programming-hero.com/api/phero-tube/video/${id}`
    console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data.video)
         displaydetails(data.video)
    })
}

function displaydetails(video){
    
    document.getElementById("video_details").showModal();
    const newdivcard = document.getElementById("details_card");
    newdivcard.innerHTML = `
        <div class="card bg-base-100 image-full  shadow-sm">
  <figure>
    <img class="w-full h-[120px]"
      src="${video.thumbnail}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${video.title}</h2>
    <p> ${video.description}</p>
    <div class="card-actions justify-end">
    
    </div>
  </div>
</div>
    `
}
// [
//     {
//         "category_id": "1001",
//         "video_id": "aaaa",
//         "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
//         "title": "Shape of You",
//         "authors": [
//             {
//                 "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
//                 "profile_name": "Olivia Mitchell",
//                 "verified": ""
//             }
//         ],
//         "others": {
//             "views": "100K",
//             "posted_date": "16278"
//         },
//         "description": "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
//     },

function displayvideo(videos){
    const videoContainer = document.getElementById("videoContainer")
    videoContainer.innerHTML=""
    if(videos.length==0){
        videoContainer.innerHTML =`
                       <div class="col-span-full text-center flex flex-col justify-center items-center py-20">
                <img class="w-[120px]" src="assets/Icon.png" alt="">
                <h2 class="text-5xl font-bold">Oops!! Sorry, There is no content here</h2>
               </div>
        `
    }
    videos.forEach(video => {
        const newCard = document.createElement("div")
        newCard.innerHTML = `
         <div class="card bg-base-100 ">
        <figure class="relative">
            <img class="w-full h-[200px] object-cover "
            src="${video.thumbnail}"
            alt="Shoes" />
            <span class="absolute text-white bg-black rounded-sm p-1 text-sm bottom-2 right-2">3hrs 56 min ago</span>
        </figure>
        <div class="mt-5 flex gap-5">
            <div class="profile">
                 <div class="avatar  ">
                <div class="ring-primary ring-offset-base-100 w-6 rounded-full ring-2 ring-offset-2">
                    <img src="${video.authors[0].profile_picture}" />
                </div>                
                </div>
            </div>
               
                <div class="intro" >
                    <h1 class="font-bold">${video.title}</h1>
                    <h2 class="text-[#17171770]">${video.authors[0].profile_name}</h2>
                    <p class="text-[#17171770]">${video.others.views} Views</p>
                </div>
                
        </div>
        <button id="${video.video_id}" onclick=loaddetails("${video.video_id}") class="btn btn-block mt-5">View More</button>
        </div>
        `
        videoContainer.appendChild(newCard)
    });
}




