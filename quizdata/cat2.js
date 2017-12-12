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
					  "{|nos }valemus"
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
	},
	{
		"id":"lesson2_1",
		"title":"Important Phrases",
		"teachingWords":[
			"gratias",
			"gratias tibi ago",
			"libens sum",
			"precare",
			"sodes",
			"panem",
			"bonum",
			"nox",
			"mane",
			"quid nomen tibi est"
		],
		"quiz":[
			{
				instructions: "Translate the sentence",
				question: [
					["Gratias tibi ago","gratias tibi ago"],["!","NIL"]
			  	],
			  	type: "text",
			  	correctAnswers: [
					"thank you{ very much|}{!|}"
			  	]
			},
			{
				instructions: "Translate the sentence",
				question: [
					["Precare","precare"]
			  	],
			  	type: "text",
			  	correctAnswers: [
					"no problem",
					"you{{'|}re|are} welcome"
			  	]
			},
			{
				instructions: "Translate the sentence",
				question: [
					["Salve","salve"],[", ","NIL"],
					["quid nomen tibi est","quid nomen tibi est"],["?","NIL"],
			  	],
			  	type: "text",
			  	correctAnswers: [
					"{hello|hi|hey}{,|} what{'s| is} your name{?|}"
			  	]
			},
			{
				instructions: "Choose the correct form",
				question: [
					["Nomen mihi est","nomen mihi est"],[" ","NIL"],
					["Flavius","NIL"],[", ","NIL"],
					["libens sum","libens sum"]
			  	],
				  type: "text",
			  	correctAnswers: [
					  "my name{'s| is} {flavius|flavio}{,|} {it{'s| is} |}nice to meet you",
			  	]
			},
			{
				instructions: "Translate the sentence",
				question: [
					["Sodes","sodes"],[" ","NIL"],
					["panem","panis"],[" ","NIL"],
					["ede","edere"]
			  	],
			  	type: "text",
			  	correctAnswers: [
					"please{,|} eat {the |}bread",
					"eat {the |}bread{,|} please"
			  	]
			},
			{
				instructions: "Translate the sentence",
				question: [
					["Thank you very much","gratias tibi ago"],["!","NIL"]
			  	],
			  	type: "text",
			  	correctAnswers: [
					  "gratias tibi ago{!|}"
			  	]
			},
			{
				instructions: "Translate the sentence",
				question: [
					["What is your name","quid nomen tibi est"],["?","NIL"]
			  	],
			  	type: "text",
			  	correctAnswers: [
					  "quid nomen tibi est",
					  "quid est nomen tibi",
					  "quid nomen est tibi",
					  "quid tibi est nomen"
			  	]
			},
			{
				instructions: "Translate the sentence",
				question: [
					["Bonum","bonus"],[" ","NIL"],
					["mane","mane"],["!","NIL"]
			  	],
			  	type: "text",
			  	correctAnswers: [
					  "good morning{!|}"
			  	]
			},
			{
				instructions: "Translate the sentence",
				question: [
					["Bona","bonus"],[" ","NIL"],
					["nox","nox"],["!","NIL"]
			  	],
			  	type: "text",
			  	correctAnswers: [
					  "good {evening|night}{!|}"
			  	]
			},
			{
				instructions: "Translate the sentence",
				question: [
					["Valete","valete"],["!","NIL"]
			  	],
			  	type: "text",
			  	correctAnswers: [
					  "{good|}bye{ all|}{!|}"
			  	]
			}
		]
	}
];