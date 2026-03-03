let word_contibner_item = document.querySelector(".word");
let word_contibner_item2 = document.querySelector(".word2");
let word_continer = document.querySelector("#word-container");
let Card = document.querySelector(".Card")
// lesson function

let lessonfunction = () => {
    let url = "https://openapi.programming-hero.com/api/levels/all"
    let lessonUl = document.querySelector(".ul");

    let fetching = async () => {
        let res = await fetch(url);
        let resJsonDataGet = await res.json();
        resJsonDataGet.data.forEach((e) => {
            lessonUl.innerHTML += `<li class="event px-1 btn btn-outline btn-primary"><i class="fa-solid fa-book-open"></i>${e.level_no}.${e.lessonName}</li>`
        })

        let getIdfromLi = document.querySelectorAll(".event")

        getIdfromLi.forEach((f) => {
            console.log(f)
            f.addEventListener("click", () => {
                if (f.innerText.trim() == "7.Mastering Vocabulary") {
                    word_continer.classList.add("bg-gray-200")
                    word_contibner_item.classList.add("hidden")
                    word_contibner_item2.classList.remove("hidden")
                    
                }

                if (f.innerText.trim() == "6.Mastering Vocabulary") {
                    word_continer.classList.add("bg-gray-200")
                    word_contibner_item.classList.add("hidden")
                    word_contibner_item2.classList.remove("hidden")
                }

                if (f.innerText.trim() == "5.Complex Words") {
                    word_continer.classList.add("bg-gray-200")
                    word_contibner_item.classList.add("hidden")
                    word_contibner_item2.classList.remove("hidden")
                }
                
                if (f.innerText == "1.Basic Vocabulary") {
                    if(word_continer.innerHTML != ""){
                        word_continer.innerHTML = ""
                    }
                    word_continer.classList.remove("bg-gray-200")
                    word_continer.classList.add("flex-wrap")
                    word_contibner_item.classList.add("hidden")
                    cardFunction()
                }

                if (f.innerText == "2.Everyday Words") {
                    if(word_continer.innerHTML != ""){
                        word_continer.innerHTML = ""
                    }
                    word_continer.classList.remove("bg-gray-200")
                    word_continer.classList.add("flex-wrap")
                    word_contibner_item.classList.add("hidden")
                    cardFunction2()
                }

                if (f.innerText == "3.Intermediate Vocabulary") {
                    if(word_continer.innerHTML != ""){
                        word_continer.innerHTML = ""
                    }
                    word_continer.classList.remove("bg-gray-200")
                    word_continer.classList.add("flex-wrap")
                    word_contibner_item.classList.add("hidden")
                    cardFunction3()
                }

                if (f.innerText == "4.Advanced Vocabulary") {
                    if(word_continer.innerHTML != ""){
                        word_continer.innerHTML = ""
                    }
                    word_continer.classList.remove("bg-gray-200")
                    word_continer.classList.add("flex-wrap")
                    word_contibner_item.classList.add("hidden")
                    cardFunction4()
                }
                console.log(f)
            })
        })
    }
    fetching();
}
lessonfunction();


// callibg-01
function cardFunction() {
    let url = "https://openapi.programming-hero.com/api/level/5";

    // fetching-01
    let fetchi = async () => {

        let fetching = await fetch(url);
        let res = await fetching.json();

        let card = document.querySelector("#word-container");

        res.data.slice(0, 10).forEach((e) => {
            card.innerHTML += `
                     <div class="card p-8 rounded-3 w-80 bg-gray-100">
            <div class="content-1 text-center flex flex-col gap-3">
                <h3 class="font-bold text-lg">${e.word}</h3>
                <p class="text-sm">Meaning /Pronounciation</p>
                <h3 class="font-semibold">${e.meaning}</h3>
            </div>
            <div class="content-2 flex justify-between mt-10">
                <button class="bg-[#1A91FF30] p-3 rounded-full hover:bg-[#1A91FF] info-btn"><i class="fa-solid fa-circle-info "></i></button>
                <button class="bg-[#1A91FF30] p-3 rounded-full hover:bg-[#1A91FF] spker-btn"><i class="fa-solid fa-volume-high "></i></button>
            </div>
        </div>
            `
        // console.log(e)
        })
    };
    fetchi()

}

// calling-02
function cardFunction2() {
    let url = "https://openapi.programming-hero.com/api/level/5";

    // fetching-02
    let fetchi2 = async () => {

        let fetching = await fetch(url);
        let res = await fetching.json();

        let card = document.querySelector("#word-container");

        res.data.slice(10, 20).forEach((e) => {
            card.innerHTML += ` <div class="card p-8 rounded-3 w-80 bg-gray-100">
            <div class="content-1 text-center flex flex-col gap-3">
                <h3 class="font-bold text-lg">${e.word}</h3>
                <p class="text-sm">Meaning /Pronounciation</p>
                <h3 class="font-semibold">${e.meaning}</h3>
            </div>
            <div class="content-2 flex justify-between mt-10">
                <button class="bg-[#1A91FF30] p-3 rounded-full hover:bg-[#1A91FF] info-btn"><i class="fa-solid fa-circle-info "></i></button>
                <button class="bg-[#1A91FF30] p-3 rounded-full hover:bg-[#1A91FF] spker-btn"><i class="fa-solid fa-volume-high "></i></button>
            </div>
        </div>`
        // console.log(e)
        })
    };
    fetchi2()
}


// calling-03
function cardFunction3() {
    let url = "https://openapi.programming-hero.com/api/level/5";

    // fetching-0
    let fetchi3 = async () => {

        let fetching = await fetch(url);
        let res = await fetching.json();

        let card = document.querySelector("#word-container");

        res.data.slice(20, 30).forEach((e) => {
            card.innerHTML += ` <div class="card p-8 rounded-3 w-80 bg-gray-100">
            <div class="content-1 text-center flex flex-col gap-3">
                <h3 class="font-bold text-lg">${e.word}</h3>
                <p class="text-sm">Meaning /Pronounciation</p>
                <h3 class="font-semibold">${e.meaning}</h3>
            </div>
            <div class="content-2 flex justify-between mt-10">
                <button class="bg-[#1A91FF30] p-3 rounded-full hover:bg-[#1A91FF] info-btn"><i class="fa-solid fa-circle-info "></i></button>
                <button class="bg-[#1A91FF30] p-3 rounded-full hover:bg-[#1A91FF] spker-btn"><i class="fa-solid fa-volume-high "></i></button>
            </div>
        </div>`
        // console.log(e)
        })
    };
    fetchi3()
}


// calling-04
function cardFunction4() {
    let url = "https://openapi.programming-hero.com/api/level/5";

    // fetching-0
    let fetchi3 = async () => {

        let fetching = await fetch(url);
        let res = await fetching.json();

        let card = document.querySelector("#word-container");

        res.data.slice(30, 51).forEach((e) => {
            card.innerHTML += ` <div class="card p-8 rounded-3 w-80 bg-gray-100">
            <div class="content-1 text-center flex flex-col gap-3">
                <h3 class="font-bold text-lg">${e.word}</h3>
                <p class="text-sm">Meaning /Pronounciation</p>
                <h3 class="font-semibold">${e.meaning}</h3>
            </div>
            <div class="content-2 flex justify-between mt-10">
                <button class="bg-[#1A91FF30] p-3 rounded-full hover:bg-[#1A91FF] info-btn"><i class="fa-solid fa-circle-info "></i></button>
                <button class="bg-[#1A91FF30] p-3 rounded-full hover:bg-[#1A91FF] spker-btn"><i class="fa-solid fa-volume-high "></i></button>
            </div>
        </div>`
        // console.log(e)
        })
    };
    fetchi3()
}

function infoOfword(){
    let url = "https://openapi.programming-hero.com/api/word/5"
    let fetching =async () =>{
        let res = await fetch(url);
        let resp = await res.json();
        console.log(resp.data)
    };
    fetching()

}
infoOfword()

let info = document.querySelector(".info");
document.querySelector("#word-container")
.addEventListener("click", (e) => {
    if (e.target.closest(".info-btn")) {
        info.classList.remove("hidden")
        info.classList.add("opacity-100")
    }
    
});
let body = document.querySelector("body");

body.addEventListener("click",(e)=>{
    if(!e.target.closest(".info-btn") && !e.target.closest(".popup-card")){
        info.classList.add("hidden")
    }
})