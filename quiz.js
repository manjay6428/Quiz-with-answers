
var quiz = { "JS" : [
	{
		"id" : 1,
		"question" : "What is the Full form of UPSC?",
		"options" : [
			{"a": "Union private service commerce", 
			 "b":"Union public selective commission", 
			 "c":"Union public service commission", 
			 "d":"Union private service commission"}
			],
		"answer":"Union public service commission",
		"score":0,
		"status": ""
	},
	{
		"id" : 2,
		"question" : "National Income estimates in India are prepared by?",
		"options" : [
			{"a": "Planning Commission", 
			 "b":"Reserve Bank of India", 
			 "c":"Indian statistical Institute",
             "d": "Central statistical organisation"
            }
			],
		"answer":"Central statistical organisation",
		"score":0,
		"status": ""
	},
	{
		"id" : 3,
		"question" : "The tropic of cancer does not pass through which of these Indian states ?",
		"options" : [
			{"a": " Madhya Pradesh", 
			 "b":"West Bengal", 
			 "c":"Rajasthan",
            "d": "Odisha"
        }
			],
		"answer":"Odisha",
		"score":0,
		"status": ""
	},
	{
		"id" : 4,
		"question" : "when was the constitution of india adopted ?",
		"options" : [
			{"a": "26 Jan 1950", 
			 "b":"24 Jan 1950",
             "c": "12 Aug 1949",
             "d": "26 Nov 1949"
			}
			],
		"answer":"26 Nov 1949",
		"score":0,
		"status": ""
	},
	{
		"id" : 5,
		"question" : "When was the National Commission for Women was set up as statutory body in India ?",
		"options" : [
			{"a": "1978", 
			 "b":"1985",
			 "c":"1992",
			 "d":"2001",
			}
			],
		"answer":"1992",
		"score":0,
		"status": ""
	},
	{
		"id" : 6,
		"question" : "What is the limit of FDI permitted in the Road and Highways Sector in India?",
		"options" : [
			{"a": "21%", 
			 "b":"49%",
			 "c":"75%",
             "d": "100%"
			}
			],
		"answer":"100%",
		"score":0,
		"status": ""
	},
	{
		"id" : 7,
		"question" : "For the crop year 2021-22, what is the food grain production target fixed by the Government of India?",
		"options" : [
			{"a": "201.31 million tonnes", 
			 "b":"307.31 million tonnes",
			 "c":"405.71 million tonnes",
             "d": "500 million tonnes"
			}
			],
		"answer":"307.31 million tonnes",
		"score":0,
		"status": ""
	},
	{
		"id" : 8,
		"question" : "As per the new MSME rules, what documents are required for registration of MSMEs?",
		"options" : [
			{"a": " GSTIN, PAN and Aadhar", 
			 "b":"PAN and Aadhar",
			 "c":"Udyog Aadhar",
			 "d":" Biometric Identification",
			}
			],
		"answer":"PAN and Aadhar",
		"score":0,
		"status": ""
	},
	{
		"id" : 9,
		"question" : "What is the name of the informational video series released in the Health Ministry’s social media platforms?",
		"options" : [
			{"a": "COVID Warrior", 
			 "b":"COVID GuruKool",
			 "c":"COVID DRONA",
			 "d":"COVID ASTRA"
			}
			],
		"answer":"COVID GuruKool",
		"score":0,
		"status": ""
	},
	{
		"id" : 10,
		"question" : "Who is the author of the book 'Freedom Behind Bars '",
		"options" : [
			{"a": "Kiran Bedi", 
			 "b":"Jawaharlal Nehru",
			 "c":"Nelson Mandela",
			 "d":"Sheikh Abdullah",
			}
			],
		"answer":"Kiran Bedi",
		"score":0,
		"status": ""
	}
	 
	]
}



var quizApp = function() {

	this.score = 0;		
	this.qno = 1;
	this.currentque = 0;
	var totalque = quiz.JS.length;

	
	this.displayQuiz = function(cque) {
		this.currentque = cque;
		if(this.currentque <  totalque) {
			$("#tque").html(totalque);
			$("#previous").attr("disabled", false);
			$("#next").attr("disabled", false);
			$("#qid").html(quiz.JS[this.currentque].id + '.');
	
			
			$("#question").html(quiz.JS[this.currentque].question);	
			 $("#question-options").html("");
			for (var key in quiz.JS[this.currentque].options[0]) {
			  if (quiz.JS[this.currentque].options[0].hasOwnProperty(key)) {
		
				$("#question-options").append(
					"<div class='form-check option-block'>" +
					"<label class='form-check-label'>" +
							  "<input type='radio' class='form-check-input' name='option'   id='q"+key+"' value='" + quiz.JS[this.currentque].options[0][key] + "'><span id='optionval'>" +
								  quiz.JS[this.currentque].options[0][key] +
							 "</span></label>"
				);
			  }
			}
		}
		if(this.currentque <= 0) {
			$("#previous").attr("disabled", true);	
		}
		if(this.currentque >= totalque) {
				$('#next').attr('disabled', true);
				for(var i = 0; i < totalque; i++) {
					this.score = this.score + quiz.JS[i].score;
				}
			return this.showResult(this.score);	
		}
	}
	
	this.showResult = function(scr) {
		$("#result").addClass('result');
		$("#result").html("<h1 class='res-header'>Total Score: &nbsp;" + scr  + '/' + totalque + "</h1>");
		for(var j = 0; j < totalque; j++) {
			var res;
			if(quiz.JS[j].score == 0) {
					res = '<span class="wrong">' + quiz.JS[j].score + '</span><i class="fa fa-remove c-wrong"></i>';
			} else {
				res = '<span class="correct">' + quiz.JS[j].score + '</span><i class="fa fa-check c-correct"></i>';
			}
			$("#result").append(
			'<div class="result-question"><span>Q ' + quiz.JS[j].id + '</span> &nbsp;' + quiz.JS[j].question + '</div>' +
			'<div><b>Correct answer:</b> &nbsp;' + quiz.JS[j].answer + '</div>' +
			'<div class="last-row"><b>Score:</b> &nbsp;' + res +
			
			'</div>' 
			
			);
			
		}
	}
	
	this.checkAnswer = function(option) {
		var answer = quiz.JS[this.currentque].answer;
		option = option.replace(/\</g,"&lt;")   //for <
		option = option.replace(/\>/g,"&gt;")   //for >
		option = option.replace(/"/g, "&quot;")

		if(option ==  quiz.JS[this.currentque].answer) {
			if(quiz.JS[this.currentque].score == "") {
				quiz.JS[this.currentque].score = 1;
				quiz.JS[this.currentque].status = "correct";
		}
		} else {
			quiz.JS[this.currentque].status = "wrong";
		}
		
	}	
	 
	this.changeQuestion = function(cque) {
			this.currentque = this.currentque + cque;
			this.displayQuiz(this.currentque);	
			
	}
	
}


var jsq = new quizApp();

var selectedopt;
	$(document).ready(function() {
			jsq.displayQuiz(0);		
		
	$('#question-options').on('change', 'input[type=radio][name=option]', function(e) {

			//var radio = $(this).find('input:radio');
			$(this).prop("checked", true);
				selectedopt = $(this).val();
		});
		
			
			 
	});

	
	
	
	$('#next').click(function(e) {
			e.preventDefault();
			if(selectedopt) {
				jsq.checkAnswer(selectedopt);
			}
			jsq.changeQuestion(1);
	});	
	
	$('#previous').click(function(e) {
		e.preventDefault();
		if(selectedopt) {
			jsq.checkAnswer(selectedopt);
		}
			jsq.changeQuestion(-1);
	});	



