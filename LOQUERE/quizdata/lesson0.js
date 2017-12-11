const quizID = 0;

var myQuestions = [
	{
	  instructions: "Choose the proper translation",
	  question: [
		  ["Man","vir"]
		],
	  type: "radio",
	  choices: {
		  "vir":"images/vir.png",
		  "femina":"images/femina.png",
		  "puer":"images/puer.png",
		  "puella":"images/puella.png"
	  },
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
	  choices: {
		  "vir":"images/vir.png",
		  "femina":"images/femina.png",
		  "puer":"images/puer.png",
		  "puella":"images/puella.png"
	  },
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
	  choices: {
		  "vir":"images/vir.png",
		  "femina":"images/femina.png",
		  "puer":"images/puer.png",
		  "puella":"images/puella.png"
	  },
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
	  choices: {
		  "vir":"images/vir.png",
		  "femina":"images/femina.png",
		  "puer":"images/puer.png",
		  "puella":"images/puella.png"
	  },
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
  ];

  const teachingWords = [
	  "vir",
	  "femina",
	  "puer",
	  "puella",
	  "est",
	  "non",
	  "et",
	  "ne"
  ];