function loadcategories(){
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then(res=> res.json()
    .then( data => {
         displaycatagories(data.categories)
         console.log(data.categories)
         console.log(data)
        
    }
    )
)
}
// [
//     {
//         "category_id": "1001",
//         "category": "Music"
//     },
//     {
//         "category_id": "1003",
//         "category": "Comedy"
//     },
//     {
//         "category_id": "1005",
//         "category": "Drawing"
//     }
// ]

function displaycatagories(catagories){
    const catagoriesContainer = document.getElementById("catagoriesContainer");
    
    for(let cat of catagories){
        const newContain = document.createElement("div")
        newContain.innerHTML = `
                        <button id="btn-${cat.category_id}" onclick="loadByCategory(${cat.category_id})" class="btn hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
        `
        catagoriesContainer.appendChild(newContain)
    }
}
loadcategories()