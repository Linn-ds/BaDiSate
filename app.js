const badi = [
    "အရဟံ",
    "သမ္မာသမ္ဗုဒ္ဓေါ","ဝိဇ္ဇာစရဏ သမ္ပန္နော ",
    "သုဂတော",
    "လောကဝိဒူ",
    "အနုတ္တရော ပုရိသဒမ္မသာရထိ",
    "သတ္ထာဒေဝ မနုဿာနံ",
    "ဗုဒ္ဓေါ",
    "ဘဂဝါ"
];


let x = 0;
let y = 1;


const button = document.querySelector(".btn");
const screenTag = document.querySelector(".screen");

button.addEventListener("click",()=>{
    if (x==(badi.length-1) && y == 108) {
        console.log("Done")
        return
    }
    if (y>108) {
        y=1;
        
        x+=1;
    }
    console.log(badi[x],":",y);
    screenTag.innerHTML=""
    screenTag.innerHTML = badi[x] + " : " + y;    
    y+=1;
});

// const progressbarTag = document.querySelector(".progressbar");
// const liwidth = (progressbarTag.offsetWidth/9);
// const liTag = document.querySelectorAll("li");
// liTag.style.offsetWidth= liwidth;