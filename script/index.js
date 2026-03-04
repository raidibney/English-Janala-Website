//creating an arrow function 

const loadlesson =() =>{
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then(res=>res.json())
    .then(json=> displaylessons(json.data));
};

const removeactive=()=>{
    const lessonbutton = document.querySelectorAll(".lesson-btn");
   
    lessonbutton.forEach((btn)=>btn.classList.remove("active"));
}
//load level word function 
const loadlevelword =(id) =>{
       
     const url=`https://openapi.programming-hero.com/api/level/${id}`;
     fetch(url)
    .then(res=>res.json())
     .then((data) =>  {
     removeactive();
    const clickbtn=document.getElementById(`lesson-btn-${id}`);

    clickbtn.classList.add("active");

        displaylevelwords(data.data);
     });


}

//for display level function 2
const displaylevelwords = (words) => {
    const wordcontainer =document.getElementById("word-container");
    wordcontainer.innerHTML="";

     if(words.length==0){
         wordcontainer.innerHTML=`
         
         <div class="text-center col-span-full py-10">
         <img class="mx-auto" src="./assets/alert-error.png">
  <p class="font-bangla font-medium text-gray-600 ">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
  <h1 class="font-bold text-3xl fnt-bangla">নেক্সট Lesson এ যান</h1>
</div>
  
         
         `
        return;
     }


    words.forEach((word)=> {

       // console.log(word);
     const card=document.createElement("div");
     card.innerHTML=`

    <div id="" class="bg-white rounded-xl shadow-md text-center py-10 px-5 space-y-4">
    <h2 class="font-bold text-2xl">${word.word? word.word:"পাওয়া যায়নি"}</h2>
    <p class="font-semibold text-xl">meaning/pronunciation</p>
  <div class="font-semibold text-xl font-bangla">"${word.meaning?word.meaning:"পাওয়া যায়নি"}/ ${word.pronunciation?word.pronunciation:"পাওয়া যায়নি"}"</div>
  <div class="flex justify-between items-center">
    <button class="btn  bg-blue-300"><i class="fa-solid fa-circle-info"></i></button>
    <button class="btn  bg-blue-300"><i class="fa-solid fa-volume-low "></i></i></button>
  </div>
  </div>
     `
     wordcontainer.append(card);

    
    });

}

loadlesson();

//for thr display level funtion 1

const displaylessons =(lessons) =>{
    //1.get the container and make it empty 
    const levelcontainer =document.getElementById("level-container");
    levelcontainer.innerHTML="";
    //2.get into every lessons 

      for (let lesson of lessons){
     //3.create element 
     console.log(lesson);
     const btnDiv=document.createElement("div");
     btnDiv.innerHTML=`
     <button id="lesson-btn-${lesson.level_no}"
      onclick="loadlevelword(${lesson.level_no} )"class="btn lesson-btn">
          <img src="./assets/fa-book-open.png">
          Lesson- ${lesson.level_no} </button>
     `
    //4.append into the container 
    levelcontainer.append(btnDiv);

}
   
};