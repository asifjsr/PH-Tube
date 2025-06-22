function removeActiveClass() {
    const getActiveBtn = document.getElementsByClassName("active")
    console.log(getActiveBtn)
    for(let btn of getActiveBtn){
        btn.classList.remove("active")
    }
} 



function loadByCategory(id){
    const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`
    console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => {
        removeActiveClass()
        displayvideo(data.category)
        const activeBtn = document.getElementById(`btn-${id}`)
        activeBtn.classList.add("active")
    }
    )
}
