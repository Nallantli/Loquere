const id = "cat1";
const lessons = [
	{
		"id":"lesson1_0",
		"title":"Location",
		"teachingWords":[
			"unde",
			"ubi",
			"in",
			"ad",
			"ab",
			"eo",
			"venis",
			"roma",
			"america",
			"anglia",
			"francia",
			"canada",
			"italia"
		],
		"quiz":[
			{
				instructions: "Translate the sentence",
				question: [
					["Unde","unde"],[" ","NIL"],
					["venis","venire"],["?","NIL"]
			  	],
			  	type: "text",
			  	correctAnswers: [
					"where do you come from{?|}",
					"from where do you come{?|}",
					"where are you from{?|}"
			  	]
			},
			{
				instructions: "Translate the sentence",
				question: [
					["Ubi","ubi"],[" ","NIL"],
					["est","est"],[" ","NIL"],
					["Roma","roma"],["?","NIL"]
			  	],
			  	type: "text",
			  	correctAnswers: [
					"where{'s|s| is} rome{?|}"
			  	]
			},
			{
				instructions: "Translate the sentence",
				question: [
					["Roma","roma"],[" ","NIL"],
					["in","in"],[" ","NIL"],
					["Italia","italia"],[" ","NIL"],
					["est","est"]
			  	],
			  	type: "text",
			  	correctAnswers: [
					"rome{'s|s| is} in italy"
			  	]
			},
			{
				instructions: "Choose the correct form",
				question: [
					["In","in"],[" ","NIL"],
					["DROP","DROP"],[" ","NIL"],
					["habito","habitare"]
			  	],
				  type: "drop-down",
				  choices: [
					  "roma",
					  "romam",
					  "romae"
				  ],
			  	correctAnswers: [
					  "I live in Rome",
					"roma"
			  	]
			},
			{
				instructions: "Translate the sentence",
				question: [
					["In","in"],[" ","NIL"],
					["Francia","francia"],[" ","NIL"],
					["filius","filius"],[" ","NIL"],
					["meus","meus"],[" ","NIL"],
					["DROP","DROP"],[" ","NIL"],
			  	],
			  	type: "drop-down",
				  choices: [
					  "habito",
					  "habitat",
					  "habitas"
				  ],
			  	correctAnswers: [
					"My son lives in France",
					"habitat"
			  	]
			},
			{
				instructions: "Translate the sentence",
				question: [
					["Ab","ab"],[" ","NIL"],
					["America","america"],[" ","NIL"],
					["venio","venire"]
			  	],
				  type: "text",
			  	correctAnswers: [
					  "{i come|i{{'|}m| am} coming} from {america|the us{a|}|the united states{ of america|}}",
			  	]
			},
			{
				instructions: "Translate the sentence",
				question: [
					["Do you live","habitare"],[" ","NIL"],
					["in","in"],[" ","NIL"],
					["Canada","canada"],["?","NIL"]
			  	],
			  	type: "text",
			  	correctAnswers: [
					  "in canada {tu |}habitasne{?|}",
					  "{tu |}in canada habitasne{?|}",
					  "{tu |}habitasne in canada{?|}",
					  "habitasne tu in canada{?|}"
			  	]
			},
			{
				instructions: "Translate the sentence",
				question: [
					["Ab","ab"],[" ","NIL"],
					["America","america"],[" ","NIL"],
					["ad","ad"],[" ","NIL"],
					["Canadam","canada"],[" ","NIL"],
					["eo","ire"]
			  	],
			  	type: "text",
			  	correctAnswers: [
					  "i{{'m| am} going| go} from america to canada",
					  "i{{'m| am} going| go} to canada from america",
					  "from america to canada i{{'m| am} going| go}",
					  "from america i{{'m| am} going| go} to canada"
			  	]
			},
			{
				instructions: "Choose the correct form",
				question: [
					["Vir","vir"],[" ","NIL"],
					["ad","ad"],[" ","NIL"],
					["Angliam","anglia"],[" ","NIL"],
					["DROP","DROP"]
			  	],
				  type: "drop-down",
				  choices: [
					"eo",
					"is",
					"it"
				  ],
			  	correctAnswers: [
					  "The man is going to England",
					  "it"
			  	]
			},
			{
				instructions: "Choose the correct form",
				question: [
					["Ea","ea"],[" ","NIL"],
					["a","ab"],[" ","NIL"],
					["DROP","DROP"],[" ","NIL"],
					["venit","venire"],[" ","NIL"]
			  	],
				  type: "drop-down",
				  choices: [
					  "Canadam",
					  "Canada"
				  ],
			  	correctAnswers: [
					  "She comes from Canada",
					"canada"
			  	]
			},
			{
				instructions: "Translate the sentence",
				question: [
					["I","ego"],[" ","NIL"],
					["don't","non"],[" ","NIL"],
					["come","venire"],[" ","NIL"],
					["from","ab"],[" ","NIL"],
					["France","francia"]
			  	],
			  	type: "text",
			  	correctAnswers: [
					  "{|ego} non a francia venio",
					  "{|ego} a francia non venio",
					  "{|ego} non venio a francia",
			  	]
			}
		]
	},
	{
		"id":"lesson1_1",
		"title":"Conjunctions",
		"teachingWords":[
			"sed",
			"aut",
			"cum",
			"sine",
			"nunc",
			"adhuc",
			"familia",
			"amicitia"
		],
		"quiz":[
			{
				instructions: "Translate the sentence",
				question: [
					["Vir","vir"],[" ","NIL"],
					["cum","cum"],[" ","NIL"],
					["puero","puer"],[" ","NIL"],
					["est","est"]
			  	],
			  	type: "text",
			  	correctAnswers: [
					  "{the|a} man is with {the|a} boy",
			  	]
			},
			{
				instructions: "Translate the sentence",
				question: [
					["Es","es"],
					["ne","-ne"],[" ","NIL"],
					["vir","vir"],[" ","NIL"],
					["aut","aut"],[" ","NIL"],
					["puer","puer"],["?","NIL"]
			  	],
			  	type: "text",
			  	correctAnswers: [
					  "are you {a|the} man or {the|a} boy{?|}",
			  	]
			},
			{
				instructions: "Translate the sentence",
				question: [
					["Nunc","nunc"],[" ","NIL"],
					["vir","vir"],[" ","NIL"],
					["sum","sum"]
			  	],
			  	type: "text",
			  	correctAnswers: [
					  "i{'m| am} now a man",
					  "i{'m| am} a man now",
					  "now i{'m| am} a man",
					  "i now am a man"
			  	]
			},
			{
				instructions: "Translate the sentence",
				question: [
					["Cattus","cattus"],[" ","NIL"],
					["et","et"],[" ","NIL"],
					["canis","canis"],[" ","NIL"],
					["cum","cum"],[" ","NIL"],
					["familia","familia"],[" ","NIL"],
					["edunt","edere"]
			  	],
			  	type: "text",
			  	correctAnswers: [
					  "{the|a} cat and {|the |a }dog eat with {a|the} family",
			  	]
			},
			{
				instructions: "Translate the sentence",
				question: [
					["Est","est"],
					["ne","-ne"],[" ","NIL"],
					["puella","puella"],[" ","NIL"],
					["cum","cum"],[" ","NIL"],
					["familia","familia"],[" ","NIL"],
					["eius","eius"]
			  	],
			  	type: "text",
			  	correctAnswers: [
					  "is {the|a} girl with {her|his|their} family{?|}",
			  	]
			},
			{
				instructions: "Translate the sentence",
				question: [
					["Ea","ea"],[" ","NIL"],
					["est","est"],[", ","NIL"],
					["sed","sed"],[" ","NIL"],
					["puer","puer"],[" ","NIL"],
					["non","non"],[" ","NIL"],
					["est","est"]
			  	],
			  	type: "text",
			  	correctAnswers: [
					  "she is{,|} but {the|a} boy is{n{'|}t| not}",
			  	]
			},
			{
				instructions: "Translate the sentence",
				question: [
					["Puer","puer"],[" ","NIL"],
					["sine","sine"],[" ","NIL"],
					["familia","familia"],[" ","NIL"],
					["eius","eius"],[" ","NIL"],
					["est","est"]
			  	],
			  	type: "text",
			  	correctAnswers: [
					  "{the|a} boy is without {his|their|her} family",
			  	]
			},
			{
				instructions: "Choose the correct form",
				question: [
					["Adhuc","adhuc"],[" ","NIL"],
					["in","in"],[" ","NIL"],
					["DROP","DROP"],[" ","NIL"],
					["habitas","habitare"],
					["ne","-ne"],["?","NIL"]
			  	],
				  type: "drop-down",
				  choices: [
					  "America",
					  "Americam"
				  ],
			  	correctAnswers: [
					  "Do you still live in America?",
					  "america"
			  	]
			},
			{
				instructions: "Choose the correct form",
				question: [
					["Non","non"],[", ","NIL"],
					["nunc","nunc"],[" ","NIL"],
					["cum","cum"],[" ","NIL"],
					["DROP","DROP"],[" ","NIL"],
					["in","in"],[" ","NIL"],
					["Canada","canada"],[" ","NIL"],
					["habito","habitare"]
			  	],
				  type: "drop-down",
				  choices: [
					  "familia",
					  "familiam"
				  ],
			  	correctAnswers: [
					"No, I live with family in Canada",
					  "familia"
			  	]
			},
			{
				instructions: "Translate the sentence",
				question: [
					["Sine","sine"],[" ","NIL"],
					["amicitia","amicitia"],[" ","NIL"],
					["non","non"],[" ","NIL"],
					["valemus","valere"]
			  	],
			  	type: "text",
			  	correctAnswers: [
					  "without friendship we{{ are|'re} not| aren't} {strong|worthy|healthy}",
			  	]
			},
		]
	},
	{
		"id":"lesson1_2",
		"title":"The Dative Case",
		"teachingWords":[
			"mihi",
			"tibi",
			"nobis",
			"vobis",
			"sibi",
			"mecum",
			"tecum",
			"dare",
			"donum",
			"dire"
		],
		"quiz":[]
	},
	{
		"id":"lesson1_3",
		"title":"Review",
		"teachingWords":[
			"portare",
			"me",
			"te"
		],
		"quiz":[]
	}
];