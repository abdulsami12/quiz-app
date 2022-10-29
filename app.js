

var array = [
  {
    question: "Html Stands For____________________________",
    options: [
      "Hyper Text Makeup Language",
      "html",
      "Case Cading Style Sheet",
      "Hypertext markup language",
    ],
    correctAns: "Hypertext markup language",
  },
  {
    question: "Css Stands For _______________________",
    options: [
      "Casecading Style Sheet",
      "Java",
      "Ram",
      "Hypertext markup language",
    ],
    correctAns: "Casecading Style Sheet",
  },
  {
    question: "Js Stands For _______________________",
    options: ["Java Style", "Java Script", "Script", "Script Src"],
    correctAns: "Java Script",
  },
  {
    question: "Dom Stands For _______________________",
    options: ["Document Object Model", "html", "Css", "Java"],
    correctAns: "Document Object Model",
  },
  {
    question: "Ram Stands For _______________________",
    options: ["Read Only Memory", "Dom", "Random Acccess Memory", "For Pc"],
    correctAns: "Random Acccess Memory",
  },
  {
    question: "Rom Stands For _______________________",
    options: [
      "Hyper Text Markup Language",
      "html",
      "HTml",
      "Read Only Memory",
    ],
    correctAns: "Read Only Memory",
  },
]


var currentIndex = 0
var main_option = document.getElementById("main-option")
var question = document.getElementById("question")
var total_question = document.getElementById("total_question")
var current_question = document.getElementById("current_question")
var yourresult = document.getElementById("yourresult")
var marks = 0

function increa() {
  if (currentIndex <= array.length - 2) {

    currentIndex = currentIndex + 1
    option(currentIndex)

    removeactiveclass()
    final()
  }

}

option(currentIndex)

function option(a) {
  var b = a + 1
  total_question.innerHTML = array.length
  current_question.innerHTML = b
  question.innerHTML = ` ${array[a].question}`
  for (var i = 0; i < array[a].options.length; i++) {
    main_option.innerHTML += `
    <button class="button_stye m-3 rounded-pill col-5" onclick="scor(array[currentIndex].correctAns , array[currentIndex].options[${i}]);increa() " id="option">${array[a].options[i]}</button>`

  }
}



function removeactiveclass() {

  for (var i = 0; i < array[currentIndex].options.length; i++) {
    var option = document.getElementById("option")
    option.remove()
  }
}


function scor(answer, select) {

  if (answer == select) {
    marks = marks + 1
    console.log("score" + marks)

  }
}


function final() {
  var total_score = document.getElementById("total_score")
  var your_score = document.getElementById("your_score")
  var per = document.getElementById("per")
  var me = document.getElementById("me")
  var per_cal = array.length / marks * 10
  var pass
  if (per_cal <= 50) {
    pass = "FAIL"
  } else {
    pass = "PASS"
  }
  if (currentIndex == array.length - 1) {
    yourresult.style.visibility = "visible"
    your_score.innerHTML = `${marks}`
    total_score.innerHTML = `${array.length}`
    per.innerHTML = `${per_cal}`
    me.innerHTML = `${pass}`

  }
}