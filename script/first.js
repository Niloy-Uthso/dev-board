let coun=0;
document.getElementById('Completed1').addEventListener('click',function(){
     
    alert('Board updated Successfully')
 let decrease= parseFloat(document.getElementById('decrease').innerText) 
 let increase=parseFloat(document.getElementById('increase').innerText)
 decrease--
 increase++
 document.getElementById('decrease').innerText=decrease
 document.getElementById('increase').innerText=increase
  
 const now = new Date();
    const timeString = now.toLocaleTimeString(); 
     

const mainSpan=document.getElementById('adding-span')
const addingSpan=document.createElement('span')

addingSpan.innerHTML=`
     You have Complete The Task <br>Fix Mobile Button Issue at: ${timeString}
`
addingSpan.classList.add('inline-block','vanish', 'w-fit', 'break-words', 'text-sm', 'max-w-[200px]','mb-3','pl-2','rounded-lg'   )
addingSpan.style.backgroundColor = 'rgba(244, 247, 255, 1)';
mainSpan.appendChild(addingSpan)

 this.disabled = true;
 coun++
 if(coun===6)
    alert('Congrates!!!You have completed all the current task')
    
})

document.getElementById('Completed2').addEventListener('click',function(){
     
    alert('Board updated Successfully')
 let decrease= parseFloat(document.getElementById('decrease').innerText) 
 let increase=parseFloat(document.getElementById('increase').innerText)
 decrease--
 increase++
 document.getElementById('decrease').innerText=decrease
 document.getElementById('increase').innerText=increase
  


const mainSpan=document.getElementById('adding-span')
const addingSpan=document.createElement('span')
const now = new Date();
    const timeString = now.toLocaleTimeString(); 
    
addingSpan.innerHTML=`
     You have Complete The Task <br> Add Dark Mode at:${timeString}
`
addingSpan.classList.add('inline-block','vanish', 'w-fit', 'break-words', 'text-sm','mb-3','pl-2','rounded-lg' )
addingSpan.style.backgroundColor = 'rgba(244, 247, 255, 1)';
mainSpan.appendChild(addingSpan)

 this.disabled = true;
 coun++
 if(coun===6)
    alert('Congrates!!!You have completed all the current task')
    
})

document.getElementById('Completed3').addEventListener('click',function(){
     
    alert('Board updated Successfully')
 let decrease= parseFloat(document.getElementById('decrease').innerText) 
 let increase=parseFloat(document.getElementById('increase').innerText)
 decrease--
 increase++
 document.getElementById('decrease').innerText=decrease
 document.getElementById('increase').innerText=increase
  


const mainSpan=document.getElementById('adding-span')
const addingSpan=document.createElement('span')
const now = new Date();
    const timeString = now.toLocaleTimeString(); 
    
addingSpan.innerHTML=`
     You have Complete The Task <br>Optimize Home page at:${timeString}
`
addingSpan.classList.add('inline-block','vanish', 'w-fit', 'break-words', 'text-sm','max-w-[200px]','mb-3','pl-2','rounded-lg' )
addingSpan.style.backgroundColor = 'rgba(244, 247, 255, 1)';
mainSpan.appendChild(addingSpan)

 this.disabled = true;
 coun++
 if(coun===6)
    alert('Congrates!!!You have completed all the current task')
    
})

document.getElementById('Completed4').addEventListener('click',function(){
     
    alert('Board updated Successfully')
 let decrease= parseFloat(document.getElementById('decrease').innerText) 
 let increase=parseFloat(document.getElementById('increase').innerText)
 decrease--
 increase++
 document.getElementById('decrease').innerText=decrease
 document.getElementById('increase').innerText=increase
  


const mainSpan=document.getElementById('adding-span')
const addingSpan=document.createElement('span')
const now = new Date();
    const timeString = now.toLocaleTimeString(); 
    
addingSpan.innerHTML=`
     You have Complete The Task <br>Add new emoji  🤲  at:${timeString}
`
addingSpan.classList.add('inline-block','vanish', 'w-fit', 'break-words', 'text-sm','mb-3','pl-2','rounded-lg' )
addingSpan.style.backgroundColor = 'rgba(244, 247, 255, 1)';
mainSpan.appendChild(addingSpan)

 this.disabled = true;
 coun++
 if(coun===6)
    alert('Congrates!!! You have completed all the current task')
    
})

document.getElementById('Completed5').addEventListener('click',function(){
     
    alert('Board updated Successfully')
 let decrease= parseFloat(document.getElementById('decrease').innerText) 
 let increase=parseFloat(document.getElementById('increase').innerText)
 decrease--
 increase++
 document.getElementById('decrease').innerText=decrease
 document.getElementById('increase').innerText=increase
  


const mainSpan=document.getElementById('adding-span')
const addingSpan=document.createElement('span')
const now = new Date();
    const timeString = now.toLocaleTimeString(); 
    

addingSpan.innerHTML=`
     You have Complete The Task <br>Integrate OpenAI API at:${timeString}
`
addingSpan.classList.add('inline-block','vanish', 'w-fit', 'break-words', 'text-sm','max-w-[200px]','mb-3','pl-2','rounded-lg')
addingSpan.style.backgroundColor = 'rgba(244, 247, 255, 1)';
mainSpan.appendChild(addingSpan)

 this.disabled = true;
 coun++
 if(coun===6)
    alert('Congrates!!! You have completed all the current task')
    
})

document.getElementById('Completed6').addEventListener('click',function(){
     
    alert('Board updated Successfully')
 let decrease= parseFloat(document.getElementById('decrease').innerText) 
 let increase=parseFloat(document.getElementById('increase').innerText)
 decrease--
 increase++
 document.getElementById('decrease').innerText=decrease
 document.getElementById('increase').innerText=increase
  


const mainSpan=document.getElementById('adding-span')
const addingSpan=document.createElement('span')
const now = new Date();
    const timeString = now.toLocaleTimeString(); 
     
addingSpan.innerHTML=`
     You have Complete The Task <br>Improve Job searching at:${timeString}
`

addingSpan.classList.add('inline-block','vanish','w-fit', 'break-words', 'text-sm','max-w-[200px]','mb-3','pl-2','rounded-lg' )
addingSpan.style.backgroundColor = 'rgba(244, 247, 255, 1)';
mainSpan.appendChild(addingSpan)

 this.disabled = true;
 coun++
 if(coun===6)
    alert('Congrates!!! You have completed all the current task')
    
})

document.getElementById('clear').addEventListener('click',function(){
     

    const loop= document.getElementsByClassName('vanish')

    for(let i=0;i<loop.length;i++)
    {
      loop[i].style.display='none'
      console.log(i)
    }
       

})

document.getElementById('new-page').addEventListener('click',function(){
    window.location.href="./main.html"
})

const colorBox = document.getElementById('colorBox');
const changeColorBtn = document.getElementById('colorBtn');

 
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

changeColorBtn.addEventListener('click', () => {
    const randomColor = getRandomColor();
    colorBox.style.backgroundColor = randomColor;
  });


  const now = new Date();
   
   const dateString = now.toLocaleDateString([], { year: 'numeric', month: 'long', day: 'numeric' });

 
   const dayString = now.toLocaleDateString([], { weekday: 'long' });

 
    console.log('out')
    const mainP=document.getElementById('date')
    const addingP=document.createElement('p')

     
    addingP.innerHTML=`
     ${dayString},<br>  <strong>${dateString}</strong>
    `
    
     
    mainP.appendChild(addingP)
 







