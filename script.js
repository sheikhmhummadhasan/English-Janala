let word_contibner_item = document.querySelector(".word");
let word_contibner_item2 = document.querySelector(".word2");
let word_continer = document.querySelector("#word-container");
let Card = document.querySelector(".Card")
// lesson function




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
                <button id="${e.id}" class="bg-[#1A91FF30] p-3 rounded-full hover:bg-[#1A91FF] info-btn"><i id="${e.id}" class="fa-solid fa-circle-info "></i></button>
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
                <button id="${e.id}" class="bg-[#1A91FF30] p-3 rounded-full hover:bg-[#1A91FF] info-btn"><i id="${e.id}" class="fa-solid fa-circle-info "></i></button>
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
                <button id="${e.id}" class="bg-[#1A91FF30] p-3 rounded-full hover:bg-[#1A91FF] info-btn"><i id="${e.id}" class="fa-solid fa-circle-info "></i></button>
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
                <button id="${e.id}" class="bg-[#1A91FF30] p-3 rounded-full hover:bg-[#1A91FF] info-btn"><i id="${e.id}" class="fa-solid fa-circle-info "></i></button>
                <button class="bg-[#1A91FF30] p-3 rounded-full hover:bg-[#1A91FF] spker-btn"><i class="fa-solid fa-volume-high "></i></button>
            </div>
        </div>`
            // console.log(e)
        })
    };
    fetchi3()
}

// more info of card
function infoOfword(id) {
    let info = document.querySelector(".info")
    let url = `https://openapi.programming-hero.com/api/word/${id}`;
    let fetching = async () => {
        let res = await fetch(url);
        let resp = await res.json();

            info.innerHTML = `<div class="">
            <h2 class="text-2xl font-semibold">${resp.data.word} (<i class="fa-solid fa-microphone-lines"></i>:${resp.data.pronunciation})</h2>
            <h3 class="font-semibold mt-2 mb-2">Meaning</h3>
            <p class="font-semibold mb-3">${resp.data.meaning}</p>
            <h2 class="font-semibold mb-2">Example</h2>
            <p class="mb-3">The kids were eager to open their gifts.</p>
            <p class="mb-2 font-semibold">সমার্থক শব্দ গুলো</p>
            <div class="btns">
                <button class="btn-1 bg-sky-200 py-2 px-3 rounded-sm">Enthusiastic</button>
                <button class="btn-1 bg-sky-200 py-2 px-3 rounded-sm">excited</button>
                <button class="btn-1 bg-sky-200 py-2 px-3 rounded-sm">keen</button>
            </div>
            <button class="btn bg-[#422AD5] text-[#E0E7FF] mt-4 border-none">Complete Learning</button>
        </div>`
            // console.log(e)

    };
    fetching()

}
// infoOfword()

// rander function
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
            f.addEventListener("click", () => {
                document.querySelectorAll(".event").forEach((elem) => {
                    elem.classList.remove("action")
                })

                f.classList.add("action")

                if (f.innerText.trim() == "7.Mastering Vocabulary") {
                   let word_continerCardd = document.querySelectorAll(".card");
                    word_continerCardd.forEach((el) => {
                        el.classList.add("hidden")
                    })
                    word_continer.classList.add("hidden")
                    word_contibner_item.classList.add("hidden")
                    word_contibner_item2.classList.remove("hidden")
                }

                if (f.innerText.trim() == "6.Mastering Vocabulary") {
                    let word_continerCardd = document.querySelectorAll(".card");
                    word_continerCardd.forEach((el) => {
                        el.classList.add("hidden")
                    })
                    word_continer.classList.add("hidden")
                    word_contibner_item.classList.add("hidden")
                    word_contibner_item2.classList.remove("hidden")
                }

                if (f.innerText.trim() == "5.Complex Words") {
                    let word_continerCardd = document.querySelectorAll(".card");
                    word_continerCardd.forEach((el) => {
                        el.classList.add("hidden")
                    })
                    word_continer.classList.add("hidden")
                    word_contibner_item.classList.add("hidden")
                    word_contibner_item2.classList.remove("hidden")
                }

                if (f.innerText == "1.Basic Vocabulary") {
                    if (word_continer.innerHTML != "") {
                        word_continer.innerHTML = ""
                    }
                    word_continer.classList.remove("bg-gray-200")
                    word_continer.classList.add("flex-wrap")
                    word_contibner_item.classList.add("hidden")
                    cardFunction()
                }

                if (f.innerText == "2.Everyday Words") {
                    if (word_continer.innerHTML != "") {
                        word_continer.innerHTML = ""
                    }
                    word_continer.classList.remove("bg-gray-200")
                    word_continer.classList.add("flex-wrap")
                    word_contibner_item.classList.add("hidden")
                    cardFunction2()
                }

                if (f.innerText == "3.Intermediate Vocabulary") {
                    if (word_continer.innerHTML != "") {
                        word_continer.innerHTML = ""
                    }
                    word_continer.classList.remove("bg-gray-200")
                    word_continer.classList.add("flex-wrap")
                    word_contibner_item.classList.add("hidden")
                    cardFunction3()
                }

                if (f.innerText == "4.Advanced Vocabulary") {
                    if (word_continer.innerHTML != "") {
                        word_continer.innerHTML = ""
                    }
                    word_continer.classList.remove("bg-gray-200")
                    word_continer.classList.add("flex-wrap")
                    word_contibner_item.classList.add("hidden")
                    cardFunction4()
                }
            })
        })
    }
    fetching();
}
lessonfunction();

let info = document.querySelector(".info");
document.querySelector("#word-container")
    .addEventListener("click", (e) => {
        if (e.target.closest(".info-btn")) {
            info.classList.remove("hidden");
            info.classList.add("opacity-100");
        }
        // console.log(e)
        infoOfword(e.target.id)
    });

let body = document.querySelector("body");
body.addEventListener("click", (e) => {
    if (!e.target.closest(".info-btn") && !e.target.closest(".popup-card")) {
        info.classList.add("hidden")
    }
})

// faq-and
// faq-1
// You can start learning English on this website by selecting a lesson from the menu and beginning the activities.


// fa1-1
let faq_qus1 = document.querySelector(".faq-1");
faq_qus1.addEventListener("click",()=>{
    let ans = document.querySelector(".faq-ans");
    ans.classList.remove("hidden");
    // console.log("hello")
    ans.innerText = "You can start learning English on this website by selecting a lesson from the menu and beginning the activities.";
})

// faq-2
let faq_qus2 = document.querySelector(".faq-2");
faq_qus2.addEventListener("click",()=>{
    let ans = document.querySelector(".faq-ans2");
    ans.classList.remove("hidden");
    // console.log("hello")
    ans.innerText = "Yes, this website is free to use, and all learning materials are available at no cost";
})
// faq-3
let faq_qus3 = document.querySelector(".faq-3");
faq_qus3.addEventListener("click",()=>{
    let ans = document.querySelector(".faq-ans3");
    ans.classList.remove("hidden");
    // console.log("hello")
    ans.innerText = "No, you do not need to create an account to use the website, but creating a free account gives you extra features like commenting and tracking your progress.";
})

// faq-4
let faq_qus4 = document.querySelector(".faq-4");
faq_qus4.addEventListener("click",()=>{
    let ans = document.querySelector(".faq-ans4");
    ans.classList.remove("hidden");
    // console.log("hello")
    ans.innerText = "You can build your English vocabulary by practicing new words regularly, reading lessons, and completing vocabulary exercises on the website.";
})

// faq-5
let faq_qus5 = document.querySelector(".faq-5");
faq_qus5.addEventListener("click",()=>{
    let ans = document.querySelector(".faq-ans5");
    ans.classList.remove("hidden");
    // console.log("hello")
    ans.innerText = "Yes, certificates are offered for some courses, and you can receive a digital certificate after successfully completing them.";
})
