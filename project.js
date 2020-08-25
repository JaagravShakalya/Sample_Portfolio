const projButton1 = document.querySelector("#proj-btn-1");
const projPara1 = document.querySelector("#proj-para-1");
const projImg1 = document.querySelector("#proj-img-1");

projButton1.addEventListener("click", () => {
    projButton1.style.display = "none"   
    projImg1.id = "proj-img1-change"
    projPara1.style.display = "block"
})


const projButton2 = document.querySelector("#proj-btn-2");
const projPara2 = document.querySelector("#proj-para-2");
const projImg2 = document.querySelector("#proj-img-2");

projButton2.addEventListener("click", () => {
    projButton2.style.display = "none"   
    projImg2.id = "proj-img2-toggle"
    projPara2.style.display = "block"
})


const projButton3 = document.querySelector("#proj-btn-3");
const projPara3 = document.querySelector("#proj-para-3");
const projImg3 = document.querySelector("#proj-img-3");

projButton3.addEventListener("click", () => {
    projButton3.style.display = "none"   
    projImg3.id = "proj-img3-change"
    projPara3.style.display = "block"
})


projImg1.addEventListener("click", () => {
    projImg1.id = "proj-img-1"
    projPara1.style.display = "none"
    projButton1.style.display = "block"
});

projImg2.addEventListener("click", () => {
    projImg2.id = "proj-img-2"
    projPara2.style.display = "none"
    projButton2.style.display = "block"
});

projImg3.addEventListener("click", () => {
    projImg3.id = "proj-img-3"
    projPara3.style.display = "none"
    projButton3.style.display = "block"
});
