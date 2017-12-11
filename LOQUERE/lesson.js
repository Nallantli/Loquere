(function() {
	const myQuestions = [
	  {
		question: "Man",
		type: "radio",
		choices: [
			"vir",
			"femina",
			"puer",
			"puella"
		],
		correctAnswers: [
			"vir"
		]
	  },
	  {
		question: "Vir est",
		type: "text",
		correctAnswers: [
			"it's a man",
			"it's the man",
			"he's a man",
			"he's the man"
		]
	  },
	  {
		question: "Femina est",
		type: "text",
		correctAnswers: [
			"it's a woman",
			"it's the woman",
			"she's a woman",
			"she's the woman"
		]
	  }
	];

	function shuffleArray(array) {
		for (let i = array.length - 1; i > 0; i--) {
			let j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
	}
  
	function buildQuiz() {
	  // we'll need a place to store the HTML output
	  const output = [];
  
	  // for each question...
	  myQuestions.forEach((currentQuestion, questionNumber) => {
		// we'll want to store the list of answer choices
		const answers = [];
  
		// and for each available answer...
		if (currentQuestion.type === "text")
		{
		//for (letter in currentQuestion.answers) {
		  // ...add an HTML radio button
		  answers.push(
			`<label>
			   <input type="text" name="question${questionNumber}" value="nil">
			 </label>`
		  );
		//}
		}else if (currentQuestion.type === "radio")
		{
			let currentChoices = currentQuestion.choices;
			shuffleArray(currentChoices);
			for (letter in currentChoices) {
			  // ...add an HTML radio button
			  answers.push(
				`<label>
				   <input type="radio" name="question${questionNumber}" value="${currentChoices[letter]}">
				   ${currentChoices[letter]}
				 </label>`
			  );
			}
		}
  
		// add this question and its answers to the output
		output.push(
		  `<div class="slide">
			 <div class="question"> ${currentQuestion.question} </div>
			 <div class="answers"> ${answers.join("")} </div>
		   </div>`
		);
	  });
  
	  // finally combine our output list into one string of HTML and put it on the page
	  quizContainer.innerHTML = output.join("");
	}
  
	function showResults() {
	  // gather answer containers from our quiz
	const answerContainers = quizContainer.querySelectorAll(".answers");
  
	  // keep track of user's answers
	  let numCorrect = 0;
  
	  // for each question...
	  myQuestions.forEach((currentQuestion, questionNumber) => {
		// find selected answer
		const answerContainer = answerContainers[questionNumber];
		let selector = ``;
		if (currentQuestion.type === "radio"){
			selector = `input[name=question${questionNumber}]:checked`;
		}else if (currentQuestion.type === "text") {
			selector = `input[name=question${questionNumber}]`;
		}
		const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
		// if answer is correct
		if (currentQuestion.correctAnswers.includes(userAnswer.toLowerCase())) {
		  // add to the number of correct answers
		  numCorrect++;
  
		  // color the answers green
		 answerContainers[questionNumber].style.color = "lightgreen";
		} else {
		  // if answer is wrong or blank
		  // color the answers red
		  answerContainers[questionNumber].style.color = "red";
		}
	  });
  
	  // show number of correct answers out of total
	  resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
	}
  
	function showSlide(n) {
		document.body.style.backgroundColor = "white";
	  slides[currentSlide].classList.remove("active-slide");
	  slides[n].classList.add("active-slide");
	  currentSlide = n;
	  
		nextButton.style.display = "none";
		submitButton.style.display = "inline-block";
	}

	function showGradedSlide() {
		document.body.style.backgroundColor = "#ffcccc";
		nextButton.style.display = "inline-block";
		submitButton.style.display = "none";		
	}
  
	function showNextSlide() {
	  showSlide(currentSlide + 1);
	}
  
	function showPreviousSlide() {
	  showSlide(currentSlide - 1);
	}
  
	const quizContainer = document.getElementById("quiz");
	const resultsContainer = document.getElementById("results");
	const submitButton = document.getElementById("submit");
  
	// display quiz right away
	buildQuiz();
  
	const nextButton = document.getElementById("next");
	const slides = document.querySelectorAll(".slide");
	let currentSlide = 0;
  
	showSlide(0);
  
	// on submit, show results
	submitButton.addEventListener("click", showGradedSlide);
	nextButton.addEventListener("click", showNextSlide);
  })();
  