const id = "cat0";
const lessons = [
	{
		"id":"lesson0_0",
		"title":"Basic People",
		"teachingWords":[
			"vir",
			"femina",
			"puer",
			"puella",
			"est",
			"non",
			"et",
			"ne"
		],
		"quiz":[
			{
			  instructions: "Choose the proper translation",
			  question: [
				  ["Man","vir"]
				],
			  type: "radio",
			  choices: [
				  ["vir","images/vir.png"],
				  ["femina","images/femina.png"],
				  ["puer","images/puer.png"],
				  ["puella","images/puella.png"]
			  ],
			  correctAnswers: [
				  "vir"
			  ]
			},
			{
			  instructions: "Choose the proper translation",
			  question: [
				  ["Woman","femina"]
			  ],
			  type: "radio",
			  choices: [
				  ["vir","images/vir.png"],
				  ["femina","images/femina.png"],
				  ["puer","images/puer.png"],
				  ["puella","images/puella.png"]
			  ],
			  correctAnswers: [
				  "femina"
			  ]
			},
			{
			  instructions: "Choose the proper translation",
			  question: [
				  ["Boy","puer"]
			  ],
			  type: "radio",
			  choices: [
					["vir","images/vir.png"],
					["femina","images/femina.png"],
			  		["puer","images/puer.png"],
					["puella","images/puella.png"]
			  ],
			  correctAnswers: [
				  "puer"
			  ]
			},
			{
			  instructions: "Choose the proper translation",
			  question: [
				  ["Girl","puella"]
			  ],
			  type: "radio",
			  choices: [
				["vir","images/vir.png"],
				["femina","images/femina.png"],
				  ["puer","images/puer.png"],
				["puella","images/puella.png"]
		  ],
			  correctAnswers: [
				  "puella"
			  ]
			},
			{
			  instructions: "Translate the sentence",
			  question: [
				  ["Vir","vir"],[" ","NIL"],
				  ["est","est"]
				],
			  type: "text",
			  correctAnswers: [
				  "{he|it}{'s| is} {a|the} man"
			  ]
			},
			{
			  instructions: "Translate the sentence",
			  question: [
				  ["Femina","femina"],[" ","NIL"],
				  ["est","est"]
				],
			  type: "text",
			  correctAnswers: [
				  "{she|it}{'s| is} {a|the} woman"
			  ]
			},
			{
			  instructions: "Translate the sentence",
			  question: [
				  ["Vir","vir"],[" ","NIL"],
				  ["non","non"],[" ","NIL"],
				  ["est","est"]
				],
			  type: "text",
			  correctAnswers: [
				  "{he|it}{'s not| is{ not|n't}} {a|the} man"
			  ]
			},
			{
			  instructions: "Translate the sentence",
			  question: [
				  ["Femina","femina"],[" ","NIL"],
				  ["non","non"],[" ","NIL"],
				  ["est","est"]
				],
			  type: "text",
			  correctAnswers: [
				  "{she|it}{'s not| is{ not|n't}} {a|the} woman"
			  ]
			},
			{
			  instructions: "Translate the sentence",
			  question: [
				  ["Vir","vir"],[" ","NIL"],
				  ["et","et"],[" ","NIL"],
				  ["femina","femina"]
			  ],
			  type: "text",
			  correctAnswers: [
				  "{{a|the} man and {a|the} woman|man and woman}"
			  ]
			},
			{
			  instructions: "Translate the sentence",
			  question: [
				  ["Non","non"],[" ","NIL"],
				  ["puer","puer"],[" ","NIL"],
				  ["est","est"],
				  [",","NIL"],[" ","NIL"],
				  ["vir","vir"],[" ","NIL"],
				  ["est","est"]
			  ],
			  type: "text",
			  correctAnswers: [
				  "{he|it}{'s not| is{ not|n't}} {a|the} boy{,|} {he|it}{'s| is} {a|the} man"
			  ]
			},
			{
			  instructions: "Translate the sentence",
			  question: [
				  ["Est","est"],
				  ["ne","-ne"],[" ","NIL"],
				  ["puer","puer"],
				  ["?","NIL"]
			  ],
			  type: "text",
			  correctAnswers: [
				  "is {he|it} {a|the} boy{?|}"
			  ]
			}
		  ]
	},
	{
		"id":"lesson0_1",
		"title":"Pronouns",
		"teachingWords":[
			"ego",
			"tu",
			"nos",
			"vos",
			"is",
			"ea",
			"id",
			"sum",
			"es",
			"sumus",
			"estis",
			"filii",
			"ita",
			"malum"
		],
		"quiz":[
			{
				instructions: "Translate the sentence",
			  question: [
				  ["Ego","ego"],[" ","NIL"],
				  ["vir","vir"],[" ","NIL"],
				  ["sum","sum"]
				],
			  type: "text",
			  correctAnswers: [
				  "i{{'|}m| am} {a|the} man"
			  ]
			},
			{
				instructions: "Translate the sentence",
				question: [
					["Ego","ego"],[" ","NIL"],
					["puer","puer"],[" ","NIL"],
					["non","non"],[" ","NIL"],
					["sum","sum"]
				  ],
				type: "text",
				correctAnswers: [
					"i{{'|}m| am} not {a|the} {boy|young man}"
				]
			  },
			{
				instructions: "Translate the sentence",
				question: [
					["Tu","tu"],[" ","NIL"],
					["vir","vir"],[" ","NIL"],
					["es","es"],
					["ne","-ne"],["?","NIL"],
				  ],
				type: "text",
				correctAnswers: [
					"are you {a|the} man{?|}"
				]
			  },
			{
				instructions: "Translate the sentence",
				question: [
					["Non","non"],[", ","NIL"],
					["femina","femina"],[" ","NIL"],
					["sum","sum"]
				  ],
				type: "text",
				correctAnswers: [
					"no{,|} i{{'|}m| am} {a|the} woman"
				]
			  },
			{
			  instructions: "Translate the sentence",
			  question: [
				  ["Pueri","puer"],[" ","NIL"],
				  ["et","et"],[" ","NIL"],
				  ["puellae","puella"],[" ","NIL"],
				  ["sumus","sumus"]
				],
			  type: "text",
			  correctAnswers: [
				  "we{{'|}re| are} {all |}boys and girls"
			  ]
			},
			{
			  instructions: "Translate the sentence",
			  question: [
				["Vos","vos"],[" ","NIL"],
				["pueri","puer"],[" ","NIL"],
				["et","et"],[" ","NIL"],
				["puellae","puella"],[" ","NIL"],
				["estis","estis"],
				["ne","-ne"],["?","NIL"]
				],
			  type: "text",
			  correctAnswers: [
				  "are {you {all |}|y'all |yall }boys and girls{?|}"
			  ]
			},
			{
			  instructions: "Translate the sentence",
			  question: [
				  ["Ita","ita"],[", ","NIL"],
				  ["nos","nos"],[" ", "NIL"],
				  ["sumus","sumus"],[" ","NIL"],
				  ["filii","filius"]
				],
			  type: "text",
			  correctAnswers: [
				  "{yes|truly|it is so|}{,|} we{'re|re| are} {all |}{children|kids}"
			  ]
			},
			{
			  instructions: "Translate the sentence",
			  question: [
				  ["Quis","quis"],[" ","NIL"],
				  ["is","is"],[" ","NIL"],
				  ["est","est"],["?","NIL"]
				],
			  type: "text",
			  correctAnswers: [
				  "who{'s| is} he{?|}",
				  "he{'s| is} who{?|}"
			  ]
			},
			{
			  instructions: "Translate the sentence",
			  question: [
				  ["Quid","quis"],[" ","NIL"],,
				  ["id","id"],[" ","NIL"],
				  ["est","est"],["?","NIL"]
				],
			  type: "text",
			  correctAnswers: [
				  "what{ is|'s} {it|this}{?|}"
			  ]
			},
			{
			  instructions: "Translate the sentence",
			  question: [
				["Malum","malum"],[" ","NIL"],
				["est","est"]
			  ],
			  type: "text",
			  correctAnswers: [
				  "it{'s| is} an apple"
			  ]
			},
			{
			  instructions: "Translate the sentence",
			  question: [
				  ["She","ea"],[" ", "NIL"],
				  ["is","est"],[" ", "NIL"],
				  ["a girl","puella"]
			  ],
			  type: "text",
			  correctAnswers: [
				  "{ea |}est puella",
				  "{ea |}puella est",
			  ]
			}
		  ]
	},
	{
		"id":"lesson0_2",
		"title":"Basic Verbs",
		"teachingWords":[
			"edo",
			"cattus",
			"aqua",
			"bibit",
			"canis",
			"edis",
			"bibunt",
			"editis",
			"mali",
			"edimus",
			"bibimus",
			"bibitis",
			"caro",
			"panis",
			"fructus",
			"carnem"
		],
		"quiz":[
			{
			  instructions: "Choose the proper translation",
			  question: [
				["Fruit","fructus"],[" ","NIL"]
			  ],
			  type: "radio",
			  choices: [
				  ["malum","images/malum.jpg"],
				  ["fructus","images/fructus.jpg"],
				  ["panis","images/panis.jpg"],
				  ["caro","images/caro.jpg"]
			],
			  correctAnswers: [
				  "fructus"
			  ]
			},
			{
			  instructions: "Choose the proper translation",
			  question: [
				["Bread","panis"],[" ","NIL"]
			  ],
			  type: "radio",
			  choices: [
				["malum","images/malum.jpg"],
				["fructus","images/fructus.jpg"],
				["panis","images/panis.jpg"],
				["caro","images/caro.jpg"]
		  ],
			  correctAnswers: [
				  "panis"
			  ]
			},
			{
				instructions: "Translate the sentence",
			  question: [
				  ["Ego","ego"],[" ","NIL"],
				  ["malum","malum"],[" ","NIL"],
				  ["edo","edo"]
				],
			  type: "text",
			  correctAnswers: [
				  "i{{'m| am} eating| eat} {an|the} apple"
			  ]
			},
			{
				instructions: "Translate the sentence",
			  question: [
				  ["Est","est"],[" ","NIL"],
				  ["aqua","aqua"]
				],
			  type: "text",
			  correctAnswers: [
				  "it{'s| is} {the |}water"
			  ]
			},
			{
				instructions: "Translate the sentence",
				question: [
					["Cattus","cattus"],[" ","NIL"],
					["aquam","aqua"],[" ","NIL"],
					["bibit","bibit"]
				  ],
				type: "text",
				correctAnswers: [
					"{a|the} cat {is drinking|drinks} {the |}water"
				]
			  },
			  {
				  instructions: "Translate the sentence",
				  question: [
					  ["Cattus","cattus"],[" ","NIL"],
					  ["et","et"],[" ","NIL"],
					  ["canis","canis"],[" ","NIL"],
					  ["aquam","aqua"],[" ","NIL"],
					  ["bibunt","bibunt"]
					],
				  type: "text",
				  correctAnswers: [
					  "{a|the} cat and {a |the |}dog {are drinking|drink} {the |}water"
				  ]
				},
				{
				  instructions: "Choose the proper translation",
				  question: [
					["Meat","caro"],[" ","NIL"]
				  ],
				  type: "radio",
				  choices: [
					["malum","images/malum.jpg"],
					["fructus","images/fructus.jpg"],
					["panis","images/panis.jpg"],
					["caro","images/caro.jpg"]
			  ],
				  correctAnswers: [
					  "caro"
				  ]
				},
			{
			  instructions: "Translate the sentence",
			  question: [
				  ["Quid","quis"],[" ","NIL"],
				  ["edis","edis"],["?","NIL"]
				],
			  type: "text",
			  correctAnswers: [
				  "what{{'re| are} you eating| do you eat}{?|}"
			  ]
			},
			{
				instructions: "Translate the sentence",
				question: [
					["Quid","quis"],[" ","NIL"],
					["editis","editis"],["?","NIL"]
				  ],
				type: "text",
				correctAnswers: [
					"what{{'re| are} you {all |}eating| do you {all |}eat}{?|}"
				]
			  },
			{
			  instructions: "Translate the sentence",
			  question: [
				  ["Nos","nos"],[" ","NIL"],
				  ["mala","malum"],[" ", "NIL"],
				  ["edimus","edimus"]
				],
			  type: "text",
			  correctAnswers: [
				  "we {eat|are eating} {the |}apples"
			  ]
			},
			{
			  instructions: "Translate the sentence",
			  question: [
				  ["Quid","quis"],[" ","NIL"],
				  ["vos","vos"],[" ","NIL"],
				  ["bibitis","est"],["?","NIL"]
				],
			  type: "text",
			  correctAnswers: [
				"what{{'re| are} you {all |}drinking| do you {all |}drink}{?|}"
			  ]
			},
			{
			  instructions: "Translate the sentence",
			  question: [
				  ["Aquam","aqua"],[" ","NIL"],
				  ["bibimus","bibimus"]
				],
			  type: "text",
			  correctAnswers: [
				"we {drink|are drinking} {the |}water"
			  ]
			},
			{
			  instructions: "Translate the sentence",
			  question: [
				  ["Carnem","caro"],[" ","NIL"],
				  ["non","non"],[" ","NIL"],
				  ["edo","edo"]
				],
			  type: "text",
			  correctAnswers: [
				"i {don't eat|am not eating} {the |}meat"
			  ]
			}
		  ]
	},
	{
		"id":"lesson0_3",
		"title":"Accusative",
		"teachingWords":[
			"bibo",
			"hic",
			"quoque",
			"sunt",
			"amici",
			"amica",
			"eius",
			"suam"
		],
		"quiz":[
			{
				instructions: "Choose the correct form",
				question: [
					["Ego","ego"],[" ","NIL"],
					["DROP","DROP"],[" ","NIL"],
					["bibo","bibo"]
			  	],
				type: "drop-down",
				choices: [
					"aqua",
					"aquam"
				],
				correctAnswers: [
					"aquam"
				]
			},
			{
				instructions: "Choose the correct form",
				question: [
					["Hic","hic_adv"],[" ", "NIL"],
					["DROP","DROP"],[" ","NIL"],
					["est","est"]
			  	],
				type: "drop-down",
				choices: [
					"aqua",
					"aquam"
				],
				correctAnswers: [
					"aqua"
				]
			},
			{
			  instructions: "Translate the sentence",
			  question: [
				  ["Vir","vir"],[" ","NIL"],
				  ["feminam","femina"],[" ","NIL"],
				  ["amat","amat"]
				],
			  type: "text",
			  correctAnswers: [
				"{the|a} man {loves|is loving} {a|the} woman"
			  ]
			},
			{
			  instructions: "Translate the sentence",
			  question: [
				  ["Femina","femina"],[" ","NIL"],
				  ["virum","vir"],[" ","NIL"],
				  ["quoque","quoque"],[" ","NIL"],
				  ["amat","amat"]
				],
			  type: "text",
			  correctAnswers: [
				"{the|a} woman {loves|is loving} {a|the} man {too|also}",
				"{the|a} woman also {loves|is loving} {a|the} man"
			  ]
			},
			{
			  instructions: "Translate the sentence",
			  question: [
				  ["DROP","DROP"],[" ","NIL"],
				  ["hic","hic_adv"],[" ","NIL"],
				  ["sunt","sunt"]
				],
			  type: "drop-down",
			  choices: [
				  "pueri",
				  "pueros"
			  ],
			  correctAnswers: [
				  "pueri"
			  ]
			},
			{
			  instructions: "Translate the sentence",
			  question: [
				  ["Femina","femina"],[" ","NIL"],
				  ["pueros","puer"],[" ","NIL"],
				  ["amat","amat"]
				],
			  type: "text",
			  correctAnswers: [
				"{the|a} woman {loves|is loving} {the |}boys",
			  ]
			},
			{
			  instructions: "Translate the sentence",
			  question: [
				  ["Puer","puer"],[" ","NIL"],
				  ["et","et"],[" ","NIL"],
				  ["puella","puella"],[" ","NIL"],
				  ["amici","amicus"],[" ","NIL"],
				  ["sunt","sunt"],[" ","NIL"],
				],
			  type: "text",
			  correctAnswers: [
				"{the|a} boy and {the |a |}girl are friends",
			  ]
			},
			{
			  instructions: "Translate the sentence",
			  question: [
				  ["Ea","ea"],[" ","NIL"],
				  ["amica","amica"],[" ","NIL"],
				  ["eius","eius"],[" ","NIL"],
				  ["est","est"]
				],
			  type: "text",
			  correctAnswers: [
				  "she is {his|her|its} friend",
				  "she is {a|the} friend of {his|hers|it}"
			  ]
			},
			{
			  instructions: "Translate the sentence",
			  question: [
				  ["Ea","ea"],[" ","NIL"],
				  ["amicam","amica"],[" ","NIL"],
				  ["suam","suus"],[" ","NIL"],
				  ["amat","est"]
				],
			  type: "text",
			  correctAnswers: [
				  "she {loves|is loving} her friend",
			  ]
			},
			{
			  instructions: "Translate the sentence",
			  question: [
				  ["Who","quis"],[" ","NIL"],
				  ["is","est"],[" ","NIL"],
				  ["her","eius"],[" ","NIL"],
				  ["friend","amicus"],["?","NIL"],
				],
			  type: "text",
			  correctAnswers: [
				  "{quis|quae} amica eius est{?|}",
				  "{quis|quae} eius amica est{?|}",
				  "{quis|quae} est amica eius{?|}",
				  "{quis|quae} est eius amica{?|}",
			  ]
			},
			{
			  instructions: "Translate the sentence",
			  question: [
				  ["Ea","ea"],[" ","NIL"],
				  ["amica","amica"],[" ","NIL"],
				  ["sua","suus"],[" ","NIL"],
				  ["est","est"]
				],
			  type: "text",
			  correctAnswers: [
				  "she is her own friend",
			  ]
			}
		]
	}
];