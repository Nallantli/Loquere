const id = "cat2";
const lessons = [
	{
		"id":"lesson2_0",
		"title":"Greetings",
		"teachingWords":[
			"salve",
			"salvete",
			"quid agis",
			"quid agitis",
			"valeo",
			"valemus",
			"nomen mihi est",
			"vale"
		],
		"quiz":[
			{
				instructions: "Translate the sentence",
				question: [
					["Salve","est"],["!","NIL"]
			  	],
			  	type: "text",
			  	correctAnswers: [
					"{hello|hi|hey|greetings|welcome}{!|}"
			  	]
			},
			{
				instructions: "Translate the sentence",
				question: [
					["Quid agis","quid agis"],["?","NIL"]
			  	],
			  	type: "text",
			  	correctAnswers: [
					"{what's up|whats up|how's it going|hows it going|how are you}{?|}"
			  	]
			},
			{
				instructions: "Translate the sentence",
				question: [
					["Valeo","valeo"]
			  	],
			  	type: "text",
			  	correctAnswers: [
					"{{i'm|im|i am|alls|all's} {good|well|fine}}"
			  	]
			},
			{
				instructions: "Choose the correct form",
				question: [
					["Nos","nos"],[" ","NIL"],
					["DROP","DROP"]
			  	],
				  type: "drop-down",
				  choices: [
					  "valeo",
					  "valemus"
				  ],
			  	correctAnswers: [
					  "We are well",
					"valemus"
			  	]
			},
			{
				instructions: "Translate the sentence",
				question: [
					["Nomen mihi est","nomen mihi est"],[" ","NIL"],
					["Livia","NIL"]
			  	],
			  	type: "text",
			  	correctAnswers: [
					"my name{ is|'s} {livia|livy}",
					"call me {livia|livy}",
					"i{'m| am} called {livia|livy}"
			  	]
			},
			{
				instructions: "Choose the correct form",
				question: [
					["Amici","amicus"],[", ","NIL"],
					["DROP","DROP"],["!","NIL"]
			  	],
				  type: "drop-down",
				  choices: [
					  "salve",
					  "salvete"
				  ],
			  	correctAnswers: [
					  "Hello, friends!",
					"salvete"
			  	]
			},
			{
				instructions: "Translate the sentence",
				question: [
					["Quid agitis","quid agitis"],["?","NIL"]
			  	],
			  	type: "text",
			  	correctAnswers: [
					  "how are {you{ all|}|y{'|}all}{?|}"
			  	]
			},
			{
				instructions: "Translate the sentence",
				question: [
					["We are well","valemus"]
			  	],
			  	type: "text",
			  	correctAnswers: [
					  "valemus"
			  	]
			},
			{
				instructions: "Translate the sentence",
				question: [
					["Vale","vale"],["!","NIL"]
			  	],
			  	type: "text",
			  	correctAnswers: [
					  "{good|}bye{!|}"
			  	]
			},
			{
				instructions: "Choose the correct form",
				question: [
					["Amici","amicus"],[", ","NIL"],
					["DROP","DROP"],["!","NIL"]
			  	],
				  type: "drop-down",
				  choices: [
					  "vale",
					  "valete"
				  ],
			  	correctAnswers: [
					  "Goodbye, friends!",
					"valete"
			  	]
			}
		]
	}
];