function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  //Exercício 1:
  function createDaysOfTheMonth () {
    let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    let daysUl = document.querySelector('#days')

    for (var i = 0; i <dezDaysList.length; i += 1) {
        let dia = dezDaysList[i];
        let diaLista = document.createElement("li");
        diaLista.innerHTML = dia;
        if (dia == 25) {
          diaLista.className = 'day holiday friday';
        } else if (dia == 24 || dia == 31) {
          diaLista.className = 'day holiday';
        } else if (dia == 4 || dia == 11 || dia == 18) {
          diaLista.className = 'day friday';
        } else {
          diaLista.className = 'day';
        }
        daysUl.appendChild(diaLista);
    }
  }

  createDaysOfTheMonth ()

  //Exercício 2:
  function createFeriado () {
  let buttonContainer = document.querySelector('.buttons-container');
  let botao = document.createElement("button");
  botao.innerText = "Feriados";
  botao.id = "btn-holiday";
  buttonContainer.appendChild(botao);
  }

  createFeriado()

  //Exercício 3:
  function colorHoliday () {
  let feriado = document.querySelectorAll('.holiday');
  let buttonHoliday = document.querySelector('#btn-holiday');
  let stdColor =  'rgb(238,238,238)';
  let yellowColor = 'yellow';

  function corFeriado () {
    for (let i = 0; i < feriado.length; i += 1) {
      if (feriado[i].style.backgroundColor === yellowColor) {
        feriado[i].style.backgroundColor = stdColor;
      } else {
        feriado[i].style.backgroundColor = yellowColor;
      }
    }
  }
  
  buttonHoliday.addEventListener('click', corFeriado);
} 

colorHoliday ();

  //Exercício 4:
  function createFriday () {
    let buttonContainer = document.querySelector('.buttons-container');
    let botao = document.createElement("button");
    botao.innerText = "Sexta-feira";
    botao.id = "btn-friday";
    buttonContainer.appendChild(botao);
    }

  createFriday ()

  //Exercício 5:
  function colorFriday () {
    let fridays = document.querySelectorAll('.friday');
    let buttonFriday = document.getElementById('btn-friday');

    function changeText () {
      for (let i = 0; i < fridays.length; i += 1) {
       friday = fridays[i];
      if (friday.innerText === 'Sextou!') {
       friday.innerText = (Number(friday.previousElementSibling.innerText) + 1);
     } else {
        friday.innerText = 'Sextou!';
     }
   }
 }
 buttonFriday.addEventListener("click", changeText)
} 
 
 colorFriday ();

  //Exercício 6:
  
  let days = document.querySelector('#days')

  function dayMouseOver () {
    days.addEventListener("mouseover", function (event) {
      event.target.style.fontSize = "30px";
      event.target.style.fontWeight = "bold";
    })
  }

  dayMouseOver ()

  function dayMouseOut () {
    days.addEventListener("mouseout", function (event) {
      event.target.style.fontSize = "20px";
      event.target.style.fontWeight = "normal";
    })
  }

  dayMouseOut ()

  //Exercício 7:
  function newTask (word) {
    let myTask = document.querySelector('.my-tasks');
    let task = document.createElement('span');

    task.innerHTML = word;
    myTask.appendChild(task);    
  }

  newTask('Cozinhar')

  //Exercício 8:
  function stringColor (cor) {
    let myTask = document.querySelector('.my-tasks')
    let corTask = document.createElement('div');
    corTask.className = 'task'
    corTask.style.backgroundColor = cor;
    myTask.appendChild(corTask);
  }

  stringColor('red')

  //Exercício 9:
  function taskSelected () {
    let tasks = document.querySelector('.task')
    function Selected () {
      if (tasks.className === 'task') {
        tasks.className = 'task selected'
      } else {
        tasks.className = 'task'
      }  
    }
    tasks.addEventListener('click', Selected)
 }

 taskSelected();

 //Exercício 10:
 function clickColor () {
  days.addEventListener('click', function  (event) {
    const selected = document.querySelector('.selected');
     if (selected != null) {
       if (event.target.style.color === selected.style.backgroundColor){
         event.target.style.color = "rgb(119,119,119)";
       } else {
        event.target.style.color = selected.style.backgroundColor;
       }      
     }     
   })
 }

 clickColor();

 //Bônus
 function addItem () {
   let inputText = document.querySelector('#task-input');
   let myTask = document.querySelector('.my-tasks');
   let button = document.querySelector('#btn-add');
   let span = document.createElement('span');
   let br = document.createElement('br')
   function addCompromisso () {
     if (inputText.value == "") {
       alert("Nenhum caractere foi inserido!")
     } else {
      span.innerText = inputText.value;
      myTask.appendChild(br);
      myTask.appendChild(span);
      inputText.value = "";
     }  
   }
   button.addEventListener('click', addCompromisso)

   inputText.addEventListener('keyup', function (event) {
     if (event.keyCode === 13 && inputText.value != "") {
       span.innerText = inputText.value;
       myTask.appendChild(br);
       myTask.appendChild(span);
       inputText.value = "";
     }
   })
 }

 addItem() 