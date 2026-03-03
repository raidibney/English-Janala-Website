//creating an arrow function 

const loadlesson =() =>{
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then(res=>res.json())
    .then(json=> displaylessons(json.data));
};
//load level word function 
const loadlevelword =(id) =>{
const url=`https://openapi.programming-hero.com/api/level/${id}`;
     fetch(url)
    .then(res=>res.json())
     .then(data=>  displaylevelwords(data.data));


}

//for display level function 2
const displaylevelwords = (words) => {
    const wordcontainer =document.getElementById("word-container");
    wordcontainer.innerHTML="";

    words.forEach((word)=> {

        console.log(word);
const card=document.createElement("div");
     card.innerHTML=`

     <div id="" class="bg-white rounded-xl shadow-md text-center py-10 px-5 space-y-4">
    <h2 class="font-bold text-2xl">${word.word}</h2>
    <p class="font-semibold text-xl">meaning/pronunciation</p>
  <div class="font-semibold text-xl font-bangla">"${word.meaning}/ ${word.pronunciation}"</div>
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
     <button onclick="loadlevelword(${lesson.level_no} )"class="btn btn-primary btn-outline">
          <img src="./assets/fa-book-open.png">
          Lesson- ${lesson.level_no} </button>
     `
    //4.append into the container 
    levelcontainer.append(btnDiv);

}





   
};