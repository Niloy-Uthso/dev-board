let coun=0;
document.getElementById('Completed1').addEventListener('click',function(){
     
    alert('vul')
 let decrease= parseFloat(document.getElementById('decrease').innerText) 
 let increase=parseFloat(document.getElementById('increase').innerText)
 decrease--
 increase++
 document.getElementById('decrease').innerText=decrease
 document.getElementById('increase').innerText=increase
  


const mainSpan=document.getElementById('adding-span')
const addingSpan=document.createElement('span')

addingSpan.innerHTML=`
     You have Complete The Task <br> Add Dark Mode at 12:48:15 PM
`
addingSpan.classList.add('inline-block','vanish', 'w-fit', 'break-words', 'text-sm', 'text-blue-500')
mainSpan.appendChild(addingSpan)

 this.disabled = true;
 coun++
 if(coun===6)
    alert('You have done all the task')
    
})

document.getElementById('Completed2').addEventListener('click',function(){
     
    alert('vul')
 let decrease= parseFloat(document.getElementById('decrease').innerText) 
 let increase=parseFloat(document.getElementById('increase').innerText)
 decrease--
 increase++
 document.getElementById('decrease').innerText=decrease
 document.getElementById('increase').innerText=increase
  


const mainSpan=document.getElementById('adding-span')
const addingSpan=document.createElement('span')

addingSpan.innerHTML=`
     You have Complete The Task <br> Add Dark Mode at 12:48:15 PM
`
addingSpan.classList.add('inline-block','vanish', 'w-fit', 'break-words', 'text-sm', 'text-blue-500')
mainSpan.appendChild(addingSpan)

 this.disabled = true;
 coun++
 if(coun===6)
    alert('You have done all the task')
    
})

document.getElementById('Completed3').addEventListener('click',function(){
     
    alert('vul')
 let decrease= parseFloat(document.getElementById('decrease').innerText) 
 let increase=parseFloat(document.getElementById('increase').innerText)
 decrease--
 increase++
 document.getElementById('decrease').innerText=decrease
 document.getElementById('increase').innerText=increase
  


const mainSpan=document.getElementById('adding-span')
const addingSpan=document.createElement('span')

addingSpan.innerHTML=`
     You have Complete The Task <br> Add Dark Mode at 12:48:15 PM
`
addingSpan.classList.add('inline-block','vanish', 'w-fit', 'break-words', 'text-sm', 'text-blue-500')
mainSpan.appendChild(addingSpan)

 this.disabled = true;
 coun++
 if(coun===6)
    alert('You have done all the task')
    
})

document.getElementById('Completed4').addEventListener('click',function(){
     
    alert('vul')
 let decrease= parseFloat(document.getElementById('decrease').innerText) 
 let increase=parseFloat(document.getElementById('increase').innerText)
 decrease--
 increase++
 document.getElementById('decrease').innerText=decrease
 document.getElementById('increase').innerText=increase
  


const mainSpan=document.getElementById('adding-span')
const addingSpan=document.createElement('span')

addingSpan.innerHTML=`
     You have Complete The Task <br> Add Dark Mode at 12:48:15 PM
`
addingSpan.classList.add('inline-block','vanish', 'w-fit', 'break-words', 'text-sm', 'text-blue-500')
mainSpan.appendChild(addingSpan)

 this.disabled = true;
 coun++
 if(coun===6)
    alert('You have done all the task')
    
})

document.getElementById('Completed5').addEventListener('click',function(){
     
    alert('vul')
 let decrease= parseFloat(document.getElementById('decrease').innerText) 
 let increase=parseFloat(document.getElementById('increase').innerText)
 decrease--
 increase++
 document.getElementById('decrease').innerText=decrease
 document.getElementById('increase').innerText=increase
  


const mainSpan=document.getElementById('adding-span')
const addingSpan=document.createElement('span')

addingSpan.innerHTML=`
     You have Complete The Task <br> Add Dark Mode at 12:48:15 PM
`
addingSpan.classList.add('inline-block','vanish', 'w-fit', 'break-words', 'text-sm', 'text-blue-500')
mainSpan.appendChild(addingSpan)

 this.disabled = true;
 coun++
 if(coun===6)
    alert('You have done all the task')
    
})

document.getElementById('Completed6').addEventListener('click',function(){
     
    alert('vul')
 let decrease= parseFloat(document.getElementById('decrease').innerText) 
 let increase=parseFloat(document.getElementById('increase').innerText)
 decrease--
 increase++
 document.getElementById('decrease').innerText=decrease
 document.getElementById('increase').innerText=increase
  


const mainSpan=document.getElementById('adding-span')
const addingSpan=document.createElement('span')

addingSpan.innerHTML=`
     You have Complete The Task <br> Add Dark Mode at 12:48:15 PM
`

addingSpan.classList.add('inline-block','vanish','w-fit', 'break-words', 'text-sm', 'text-blue-500')
mainSpan.appendChild(addingSpan)

 this.disabled = true;
 coun++
 if(coun===6)
    alert('You have done all the task')
    
})

document.getElementById('clear').addEventListener('click',function(){
    console.log('ebar')

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

// Function to generate a random hex color
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

 





