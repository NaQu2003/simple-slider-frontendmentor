const Objects = [
    {
        src:"images/image-john.jpg",
        text: ` “ If you want to lay the best foundation possible I’d recommend taking this course. 
        The depth the instructors go into is incredible. I now feel so confident about 
        starting up as a professional developer. ”`,
        name:"John Tarkpor",
        profession:"Junior Front-end Developer",
    },
    {
        src:"images/image-tanya.jpg",
        text:`“ I’ve been interested in coding for a while but never taken the jump, until now. 
        I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
        excited about the future. ”`,
        name:"Tanya Sinclair",
        profession:"UX Engineer"
    }
]

let slidePosition = 2;
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev')

const text = document.querySelector('.text-1')
const slide = document.querySelector('.slide')
const name = document.querySelector('.name')
const profession = document.querySelector('.profession')
function prevImg(){
    if(slidePosition ===1){
        slidePosition+=1
        if(slidePosition ===2){
            text.textContent = Objects[1].text;
            slide.src = Objects[1].src
            name.textContent = Objects[1].name;
            profession.textContent = Objects[1].profession

        }
    }
    
}
function nextImg(){
    if(slidePosition ===2){
        slidePosition-=1
        if(slidePosition ===1){
            text.textContent = Objects[0].text;
            slide.src = Objects[0].src
            name.textContent = Objects[0].name;
            profession.textContent = Objects[0].profession
            
        }
    }
}

nextBtn.addEventListener('click',nextImg)
prevBtn.addEventListener('click',prevImg)

