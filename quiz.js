(function() {
	const Spinner = require('node-spintax');
	var myQuestions = lessons[index].quiz;
	var teachingWords = lessons[index].teachingWords;
	function shuffleArray(array) {
		for (let i = array.length - 1; i > 0; i--) {
			let j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
	}
  
	function buildQuiz(questionArray) {

		currentQuestionList = questionArray;
	  // we'll need a place to store the HTML output
	  const output = [];
  
	  // for each question...
	  questionArray.forEach((currentQuestion, questionNumber) => {
		// we'll want to store the list of answer choices

		var correctAnswers = [];

		for (var index in currentQuestion.correctAnswers){
			var spinner = new Spinner(currentQuestion.correctAnswers[index]);
			var corArray = spinner.unspin();
			console.log(corArray);
			for (i in corArray){
				correctAnswers.push(corArray[i]);
			}
		}

		currentQuestion.correctAnswers = correctAnswers;

		const answers = [];
  
		// and for each available answer...
		if (currentQuestion.type === "text")
		{
		//for (letter in currentQuestion.answers) {
		  // ...add an HTML radio button
		  answers.push(
			`<label>
			   <input type="text" name="question${questionNumber}" value="">
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
				   <input type="radio" name="question${questionNumber}" value="${currentChoices[letter][0]}">
				   <img src="${currentChoices[letter][1]}"></img>
				   <h3>${currentChoices[letter][0]}</h3>
				 </label>`
			  );
			}
		}else if (currentQuestion.type === "drop-down"){
			let currentChoices = currentQuestion.choices;
			shuffleArray(currentChoices);
			answers.push(`<div class="drop-down">`);
			for (index in currentQuestion.question){
				if (currentQuestion.question[index][0] === "DROP"){
					answers.push(`<select name="question${questionNumber}">`);
					for (letter in currentChoices) {
						// ...add an HTML radio button
						answers.push(
							`<option value="${currentChoices[letter]}">
							${currentChoices[letter]}
							</option>`
						);
					}
					answers.push(`</select>`);
				}else{
					let questionDiv = ``;
					var value = currentQuestion.question[index][0];
					var entry = currentQuestion.question[index][1];
					console.log(value);
					var dictionaryEntry = dictionary[entry];
					if (dictionaryEntry === undefined){
						questionDiv = questionDiv + `${value}`;				
					}else{
						var translations = dictionaryEntry.english;
						var englishSection = ``;
						for (var t in translations){
							englishSection+=`<br>` + translations[t];
						}
						var reference = `<h2>${dictionaryEntry.dict}</h2>${englishSection}`;
						if (learned.includes(value.toLowerCase()) || !teachingWords.includes(value.toLowerCase())){
							questionDiv = questionDiv + `<div class="tooltip">${value}<span class="tooltip-text">${reference}</span></div>`;
						}else if (teachingWords.includes(value.toLowerCase())){
							questionDiv = questionDiv + `<div class="tooltip new-word">${value}<span class="tooltip-text">${reference}</span></div>`;
							learned.push(value.toLowerCase());				
						}
					}
					answers.push(questionDiv);
				}
			}
			answers.push(`</div>`)
		}
  
		// add this question and its answers to the output
		let questionDiv = ``;
		if (currentQuestion.type !== "drop-down"){
			for (var index in currentQuestion.question) {
				var value = currentQuestion.question[index][0];
				var entry = currentQuestion.question[index][1];
				console.log(value);
				var dictionaryEntry = dictionary[entry];
				if (dictionaryEntry === undefined){
					questionDiv = questionDiv + `${value}`;				
				}else{
					var translations = dictionaryEntry.english;
					var englishSection = ``;
					for (var t in translations){
						englishSection+=`<br>` + translations[t];
					}
					var reference = `<h2>${dictionaryEntry.dict}</h2>${englishSection}`;
					if (learned.includes(value.toLowerCase()) || !teachingWords.includes(value.toLowerCase())){
						questionDiv = questionDiv + `<div class="tooltip">${value}<span class="tooltip-text">${reference}</span></div>`;
					}else if (teachingWords.includes(value.toLowerCase())){
						questionDiv = questionDiv + `<div class="tooltip new-word">${value}<span class="tooltip-text">${reference}</span></div>`;
						learned.push(value.toLowerCase());				
					}
				}
			}
		}

		output.push(
		  `<div class="slide">
		  	<div class="instruction"> ${currentQuestion.instructions} </div>
			 <div class="question"> ${questionDiv} </div>
			 <div class="answers"> ${answers.join("")} </div>
		   </div>`
		);
	  });
  
	  // finally combine our output list into one string of HTML and put it on the page
	  output.push(
		  `<div class="slide">
		  		<div id="final-slide"></div>
	   		</div>`
		);
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
		progressBar.style.width = (numOfTotalAnswered / numOfTotalQuestions * 100) + `%`;
		slideFooter.style.backgroundColor = "#66023C";
		document.getElementById("quiz-notes").innerHTML = "";
		slides[currentSlide].classList.remove("active-slide");
		slides[n].classList.add("active-slide");
		currentSlide = n;
	  
		nextButton.style.display = "inline-block";
		submitButton.style.display = "none";	
	}

	function gradeSlide() {
		const answerContainers = quizContainer.querySelectorAll(".answers");
		const answerContainer = answerContainers[currentSlide];
		const currentQuestion = currentQuestionList[currentSlide];
		let selector = ``;
		if (currentQuestion.type === "radio"){
			selector = `input[name=question${currentSlide}]:checked`;
		}else if (currentQuestion.type === "text") {
			selector = `input[name=question${currentSlide}]`;
		}else if (currentQuestion.type == "drop-down"){
			selector = `select[name=question${currentSlide}]`;
		}
		const userAnswer = (answerContainer.querySelector(selector) || {}).value;
		if (userAnswer !== undefined && userAnswer !== "")
		{
			numOfTotalAnswered++;
			document.getElementById("quiz-notes").innerHTML = "<b>Translation: " + currentQuestion.correctAnswers[0] + "</b><br>Input: " + userAnswer;

			if (currentQuestion.correctAnswers.includes(userAnswer.toLowerCase())) {
				slideFooter.style.backgroundColor = "#14DC3C";
			}else{
				slideFooter.style.backgroundColor = "#DC143C";
				repeatedQuestions.push(currentQuestion);
				numOfTotalQuestions++;
			}
			nextButton.style.display = "none";
			submitButton.style.display = "inline-block";
		}
	}
  
	function showNextSlide() {
		if (currentSlide + 1 === numOfQuestions){
			if (repeatedQuestions.length !== 0){
				shuffleArray(repeatedQuestions);
				buildQuiz(repeatedQuestions);
				currentSlide = 0;
				numOfQuestions = repeatedQuestions.length;
				repeatedQuestions = [];
				slides = document.querySelectorAll(".slide");
				showSlide(0);
			} else {
				showSlide(currentSlide + 1);
				var score = myQuestions.length / numOfTotalQuestions;
				document.getElementById("final-slide").innerHTML = "Yay, you did it!<br>Score: " + Math.round(score * 100) + "%";
				nextButton.style.display = "none";
				returnButton.style.display = "inline-block";
				localStorage.setItem(lessons[index].id, score);
				if (index === lessons.length - 1 && score > 0.75){
					localStorage.setItem(id, 1);
				}
			}
		}else if (currentSlide + 1 < numOfQuestions) {
			showSlide(currentSlide + 1);
		}
	}
  
	function showPreviousSlide() {
	  showSlide(currentSlide - 1);
	}

	function returnToCat() {
		window.location.href = `${id}.html`;
	}
  
	const quizContainer = document.getElementById("quiz");
	//const resultsContainer = document.getElementById("results");
	const submitButton = document.getElementById("submit");

	let currentQuestionList = [];

	let repeatedQuestions = [];
	let learned = [];
  
	// display quiz right away
	document.title = lessons[index].title;
	buildQuiz(myQuestions);
  
	const nextButton = document.getElementById("next");
	const slideFooter = document.getElementById("slide-footer");
	const returnButton = document.getElementById("return");
	const progressBar = document.getElementById("progress-bar")
	let slides = document.querySelectorAll(".slide");
	let currentSlide = 0;
	let numOfQuestions = myQuestions.length;
	let numOfTotalAnswered = 0;
	let numOfTotalQuestions = myQuestions.length;
	returnButton.style.display = "none";
  
	showSlide(0);
  
	// on submit, show results
	nextButton.addEventListener("click", gradeSlide);
	submitButton.addEventListener("click", showNextSlide);
	returnButton.addEventListener("click", returnToCat);
  })();
  