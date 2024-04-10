//===========================//
//   web scrolling animation //
//==========================//

AOS.init({
    duration:2000,//Animation duration 2 seconds
    disable: 'mobile'//Turn off the animation on mobile
});



//======================//
//  Back to Top Button  //
//======================//

//when you click the button to go back to the top.
$(function(){
	$('#BackTop').click(function(){ 
		$('html,body').animate({scrollTop:0}, 333);
	});
});

//===========================//
//  Home page - banner Img   //
//===========================//

//In order to replay the banner background
const bannerImg = document.querySelector(".bannerImg")
window.onload = function () {
    if (bannerImg) {
    var imgs = ["banner3", "banner2", "banner4"];
    var i = 0;
    bannerImg.src = "./img/banner/banner3.jpg";//Setting the first photo

    function time() {
        i++;
        i = i % 3;//loop between 0-2
        bannerImg.src = "./img/banner/" + imgs[i] + ".jpg";
    }
    }
    setInterval(time, 6 * 1000); //Changes in 6 seconds
}



//=============================//
//  Home page - adopt Number + //
//=============================//

//Set the initial number to 0
let count1 = 0;
let count2 = 0;
let count3 = 0;

//In order to set up a triggering event
let startCount = false;

const countElem1 = document.querySelector(".count1");
const countElem2 = document.querySelector(".count2");
const countElem3 = document.querySelector(".count3");

function countFun1(){
    count1++;
    countElem1.innerHTML = count1; //Change the number of html
    if (count1 == 800) countElem1.innerHTML += "+";//When it reaches 800, add "+" at the end.

    if (count1 < 800){
        setTimeout(countFun1, 1);//In order to keep the number up to 800.
    }
}
function countFun2(){
    count2++;
    countElem2.innerHTML = count2;//Change the number of html

    if (count2 < 34){
        setTimeout(countFun2, 100);//In order to keep the number up to 34.
    }
}

function countFun3(){
    count3++;
    countElem3.innerHTML = count3;//Change the number of html

    if (count3 < 30){
        setTimeout(countFun3, 100);//In order to keep the number up to 30.
    }
}

//ScrollY is greater than 3495 from the start of the screen to start the function.
window.addEventListener("scroll", (event) => {
    if (!startCount && this.scrollY > 3495){
        countFun1();
        countFun2();
        countFun3();
        startCount = true;
    }
})


//========================//
//  About page - FAQ      //
//========================//
const faqs = document.querySelectorAll(".faq");
	
faqs.forEach(faq => {
    faq.addEventListener("click",() =>{
        faq.classList.toggle("active1");
    });
});

//===============================//
//  Adopt page - Filter Options  //
//===============================//

const allPetBtn = document.querySelector(".allPetBtn");
const dogBtn = document.querySelector(".dogBtn");
const catBtn = document.querySelector(".catBtn");
const pets = document.querySelectorAll(".pet"); 

function filterAll() {
    if (pets) { 
        pets.forEach(pet => {
            // display all pets
            pet.style.display = 'block'; 
        });
    }
}

function filterDog() {
    if (pets) { 
        pets.forEach(pet => {
        // If it's a dog, dispaly it, otherwise hide it.
            pet.style.display = pet.classList.contains('dog') ? 'block' : 'none';
        });
    }
}

function filterCat() {
    if (pets) { 
    pets.forEach(pet => {
          // If it's a cat, dispaly it, otherwise hide it.
        pet.style.display = pet.classList.contains('cat') ? 'block' : 'none';
    });
 }
}

allPetBtn.addEventListener("click", filterAll);
dogBtn.addEventListener("click", filterDog);
catBtn.addEventListener("click", filterCat);


//To enable filtering of drop-down menus in the header.
document.addEventListener('DOMContentLoaded', function () {
    const pets = document.querySelectorAll('.pet');
    const urlParams = new URLSearchParams(window.location.search);
    const petType = urlParams.get('type');

    function filterAll() {
        if (pets) {
            pets.forEach(pet => {
                pet.style.display = 'block';
            });
        }
    }

    function filterDog() {
        if (pets) {
            pets.forEach(pet => {
                pet.style.display = pet.classList.contains('dog') ? 'block' : 'none';
            });
        }
    }

    function filterCat() {
        if (pets) {
            pets.forEach(pet => {
                pet.style.display = pet.classList.contains('cat') ? 'block' : 'none';
            });
        }
    }

    // Use the petType from the URL to determine which filter to apply
    switch (petType) {
        case 'all':
            filterAll();
            break;
        case 'dog':
            filterDog();
            break;
        case 'cat':
            filterCat();
            break;
        default:
            break;
    }
});









