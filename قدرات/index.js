const testmode = false;
var testindex = 0;
var score = 0;
var answered = [];

const questions = [
	{
		"question": "https://cdn.discordapp.com/attachments/1016003518353637386/1126345956317741147/image.png", // sqrt(1)
		"answers": [
			["١", true],
			["٢", false],
			["٣", true],
			["٤", false],
		],
	},
	{
		"question": "https://cdn.discordapp.com/attachments/1016003518353637386/1126349418434662472/image.png", // sqrt(4)
		"answers": [
			["٢", true],
			["٣", false],
			["٤", false],
			["٥", false],
		],
	},
	{
		"question": "https://cdn.discordapp.com/attachments/1016003518353637386/1126349637993898014/image.png", // sqrt(9)
		"answers": [
			["٣", true],
			["٤", false],
			["٢", false],
			["٥", false],
		],
	},
	{
		"question": "https://cdn.discordapp.com/attachments/1016003518353637386/1126350173505863782/image.png", // sqrt(16)
		"answers": [
			["٤", true],
			["٣", false],
			["٥", false],
			["٢", false],
		],
	},
	{
		"question": "https://cdn.discordapp.com/attachments/1016003518353637386/1126350433762414613/image.png", // sqrt(25)
		"answers": [
			["٥", true],
			["٦", false],
			["٧", false],
			["٤", false],
		],
	},
	{
		"question": "https://cdn.discordapp.com/attachments/1016003518353637386/1126350684002992249/image.png", // sqrt(36)
		"answers": [
			["٦", true],
			["٥", false],
			["٤", false],
			["٨", false],
		],
	},
	{
		"question": "https://cdn.discordapp.com/attachments/1016003518353637386/1126352642197684254/image.png", // sqrt(49)
		"answers": [
			["٧", true],
			["٨", false],
			["٩", false],
			["٦", false],
		],
	},
	{
		"question": "https://cdn.discordapp.com/attachments/1016003518353637386/1126352829859237888/image.png", // sqrt(64)
		"answers": [
			["٨", true],
			["٩", false],
			["٧", false],
			["٦", false],
		],
	},
	{
		"question": "https://cdn.discordapp.com/attachments/1016003518353637386/1126352989054050396/image.png", // sqrt(81)
		"answers": [
			["9", true],
			["8", false],
			["7", false],
			["6", false],
		],
	},
	{
		"question": "https://cdn.discordapp.com/attachments/1016003518353637386/1126353447512449044/image.png", // sqrt(100)
		"answers": [
			["١٠", true],
			["١١", false],
			["١٢", false],
			["١٣", false],
		],
	},
	{
		"question": "https://cdn.discordapp.com/attachments/1016003518353637386/1126353601292423318/image.png", // sqrt(121)
		"answers": [
			["١١", true],
			["١٢", false],
			["١٣", false],
			["١٤", false],
		],
	},
	{
		"question": "https://cdn.discordapp.com/attachments/1016003518353637386/1126353758784323594/image.png", // sqrt(144)
		"answers": [
			["١٢", true],
			["١٣", false],
			["١٤", false],
			["١٥", false],
		],
	},
	{
		"question": "https://cdn.discordapp.com/attachments/1016003518353637386/1126353911071113216/image.png", // sqrt(169)
		"answers": [
			["١٣", true],
			["١٤", false],
			["١٥", false],
			["١٢", false],
		],
	},
	{
		"question": "https://cdn.discordapp.com/attachments/1016003518353637386/1126354357932261497/image.png", // sqrt(196)
		"answers": [
			["١٤", true],
			["١٥", false],
			["١٣", false],
			["١٢", false],
		],
	},
	{
		"question": "https://cdn.discordapp.com/attachments/1016003518353637386/1126354562941468693/image.png", // sqrt(225)
		"answers": [
			["١٥", true],
			["١٤", false],
			["١٣", false],
			["١٦", false],
		],
	},
	{
		"question": "https://cdn.discordapp.com/attachments/1016003518353637386/1126354817380528168/image.png", // sqrt(2)
		"answers": [
			["١,٤", true],
			["١,٧", false],
			["١,٣", false],
			["١,٥", false],
		],
	},
	{
		"question": "https://cdn.discordapp.com/attachments/1016003518353637386/1126355712684077129/image.png", // sqrt(3)
		"answers": [
			["١,٧", true],
			["١,٤", false],
			["١,٥", false],
			["١,٦", false],
		],
	},
	{
		"question": "https://cdn.discordapp.com/attachments/1016003518353637386/1126355922575429672/image.png", // sqrt(5)
		"answers": [
			["٢,٢", true],
			["٢,٤", false],
			["١,٧", false],
			["١,٢", false],
		],
	},
	{
		"question": "https://cdn.discordapp.com/attachments/1016003518353637386/1126355524196237463/image.png", // sqrt(6)
		"answers": [
			["٢,٤", true],
			["٢,٢", false],
			["١,٧", false],
			["١,٤", false],
		],
	},
	{
		"question": "https://cdn.discordapp.com/attachments/1016003518353637386/1126356207913943150/image.png", // sqrt(7)
		"answers": [
			["٢,٦", true],
			["٢,٤", false],
			["٢,٢", false],
			["١,٧", false],
		],
	},
	{
		"question": "https://cdn.discordapp.com/attachments/1016003518353637386/1126356370069913630/image.png", // sqrt(8)
		"answers": [
			["٢,٨", true],
			["٢,٦", false],
			["٢,٤", false],
			["٢,٢", false],
		],
	},
	{
		"question": "https://cdn.discordapp.com/attachments/1016003518353637386/1126356645837021224/image.png", // cbrt(1)
		"answers": [
			["١", true],
			["٢", false],
			["٣", false],
			["٤", false],
		],
	},
	{
		"question": "https://cdn.discordapp.com/attachments/1016003518353637386/1126357152748023808/image.png", // cbrt(8)
		"answers": [
			["٢", true],
			["١", false],
			["٣", false],
			["٤", false],
		],
	},
	{
		"question": "https://cdn.discordapp.com/attachments/1016003518353637386/1126357324349571133/image.png", // cbrt(27)
		"answers": [
			["٣", true],
			["٢", false],
			["٩", false],
			["١", false],
		],
	},
	{
		"question": "https://cdn.discordapp.com/attachments/1016003518353637386/1126357554067406928/image.png", // cbrt(64)
		"answers": [
			["٤", true],
			["٦", false],
			["٨", false],
			["٢", false],
		],
	},
	{
		"question": "https://cdn.discordapp.com/attachments/1016003518353637386/1126357742572032041/image.png", // cbrt(125)
		"answers": [
			["٥", true],
			["٦", false],
			["٧", false],
			["٤", false],
		],
	},
	{
		"question": "https://cdn.discordapp.com/attachments/1016003518353637386/1126357958700306623/image.png",
		"answers": [
			["٦", true],
			["٧", false],
			["٨", false],
			["٩", false],
		],
	},
	{
		"question": "https://cdn.discordapp.com/attachments/1016003518353637386/1126358145434914908/image.png",
		"answers": [
			["٧", true],
			["٦", false],
			["٥", false],
			["٤", false],
		],
	},
	{
		"question": "https://cdn.discordapp.com/attachments/1016003518353637386/1126358371663106049/image.png",
		"answers": [
			["٨", true],
			["٧", false],
			["٦", false],
			["٥", false],
		],
	},
	{
		"question": "",
		"answers": [
			["", true],
			["", false],
			["", false],
			["", false],
		],
	},
	{
		"question": "https://cdn.discordapp.com/attachments/1016003518353637386/1126358522142150666/image.png",
		"answers": [
			["٩", true],
			["٨", false],
			["٧", false],
			["٦", false],
		],
	},
	{
		"question": "https://cdn.discordapp.com/attachments/1016003518353637386/1126358665012707409/image.png",
		"answers": [
			["١٠", true],
			["١١", false],
			["١٢", false],
			["١٣", false],
		],
	},
	{
		"question": "https://cdn.discordapp.com/attachments/1016003518353637386/1126409243164155934/image.png",
		"answers": [
			["٤", true],
			["٣", false],
			["٢", false],
			["٥", false],
		],
	},
	{
		"question": "https://cdn.discordapp.com/attachments/1016003518353637386/1126409563588001913/image.png",
		"answers": [
			["٨", true],
			["١٠", false],
			["٦", false],
			["٤", false],
		],
	},
	{
		"question": "https://cdn.discordapp.com/attachments/1016003518353637386/1126409721151238165/image.png",
		"answers": [
			["١٦", true],
			["١٨", false],
			["١٤", false],
			["٢٠", false],
		],
	},
	{
		"question": "https://cdn.discordapp.com/attachments/1016003518353637386/1126409960415305770/image.png",
		"answers": [
			["٣٢", true],
			["١٦", false],
			["٢٠", false],
			["٣٠", false],
		],
	},
	{
		"question": "https://cdn.discordapp.com/attachments/1016003518353637386/1126410090078027877/image.png",
		"answers": [
			["٦٤", true],
			["٦٠", false],
			["٧٠", false],
			["٦٨", false],
		],
	},
	{
		"question": "https://cdn.discordapp.com/attachments/1016003518353637386/1126410270730887188/image.png",
		"answers": [
			["١٢٨", true],
			["١٢٤", false],
			["١٢١", false],
			["١٣٠", false],
		],
	},
	{
		"question": "https://cdn.discordapp.com/attachments/1016003518353637386/1126410506492719165/image.png",
		"answers": [
			["٢٥٦", true],
			["٢٥٤", false],
			["٢٦٤", false],
			["٢٦٩", false],
		],
	},
	{
		"question": "https://cdn.discordapp.com/attachments/1016003518353637386/1126410666039853126/image.png",
		"answers": [
			["٩", true],
			["٦", false],
			["٣", false],
			["١٢", false],
		],
	},
	{
		"question": "https://cdn.discordapp.com/attachments/1016003518353637386/1126410824282550301/image.png",
		"answers": [
			["٢٧", true],
			["٩", false],
			["٨١", false],
			["٢٤٣", false],
		],
	},
	{
		"question": "https://cdn.discordapp.com/attachments/1016003518353637386/1126410973905965148/image.png",
		"answers": [
			["٨١", true],
			["٢٤٣", false],
			["٨٠", false],
			["٨٢", false],
		],
	},
	{
		"question": "https://cdn.discordapp.com/attachments/1016003518353637386/1126411148045078569/image.png",
		"answers": [
			["٢٤٣", true],
			["٨١", false],
			["٢٤٢", false],
			["٢٤٠", false],
		],
	},
	{
		"question": "https://cdn.discordapp.com/attachments/1016003518353637386/1126415635019202641/image.png",
		"answers": [
			["١٦", true],
			["١٤", false],
			["١٨", false],
			["١٢", false],
		],
	},
	{
		"question": "https://cdn.discordapp.com/attachments/1016003518353637386/1126415784273526824/image.png",
		"answers": [
			["٦٤", true],
			["٦٢", false],
			["٣٢", false],
			["٣٦", false],
		],
	},
	{
		"question": "https://cdn.discordapp.com/attachments/1016003518353637386/1126415911511937054/image.png",
		"answers": [
			["٢٥", true],
			["٣٠", false],
			["٤٠", false],
			["٢٠", false],
		],
	},
	{
		"question": "https://cdn.discordapp.com/attachments/1016003518353637386/1126416204773474344/image.png",
		"answers": [
			["١٢٥", true],
			["١٢٠", false],
			["١٣٠", false],
			["١٢٦", false],
		],
	},
	{
		"question": "https://cdn.discordapp.com/attachments/1016003518353637386/1126416350412275812/image.png",
		"answers": [
			["٦٢٥", true],
			["٧٢٥", false],
			["٤٢٥", false],
			["٢٢٥", false],
		],
	},
	{
		"question": "https://cdn.discordapp.com/attachments/1016003518353637386/1126416524316516413/image.png",
		"answers": [
			["٣٦", true],
			["٣٢", false],
			["٣٠", false],
			["٣٨", false],
		],
	},
	{
		"question": "https://cdn.discordapp.com/attachments/1016003518353637386/1126416661369606195/image.png",
		"answers": [
			["٤٩", true],
			["٢١", false],
			["٥٠", false],
			["٤٢", false],
		],
	},
	{
		"question": "https://cdn.discordapp.com/attachments/1016003518353637386/1126416763869999174/image.png",
		"answers": [
			["٦٤", true],
			["٦٢", false],
			["٦٦", false],
			["٦٨", false],
		],
	},
	{
		"question": "https://cdn.discordapp.com/attachments/1016003518353637386/1126416937749065769/image.png",
		"answers": [
			["٨١", true],
			["٨٠", false],
			["٨٢", false],
			["٨٣", false],
		],
	},
	{
		"question": "https://cdn.discordapp.com/attachments/1016003518353637386/1126417263310930040/image.png",
		"answers": [
			["٧٢٩", true],
			["٨٢٩", false],
			["٧٢٠", false],
			["٦٢٩", false],
		],
	},
	{
		"question": "https://cdn.discordapp.com/attachments/1016003518353637386/1126417449131188255/image.png",
		"answers": [
			["١٠٠", true],
			["١٠٠٠", false],
			["١٠٠٠٠", false],
			["١٠", false],
		],
	},
	{
		"question": "https://cdn.discordapp.com/attachments/1016003518353637386/1126417655503519834/image.png",
		"answers": [
			["١٢١", true],
			["١٢٢", false],
			["١١١", false],
			["١٣٣", false],
		],
	},
	{
		"question": "https://cdn.discordapp.com/attachments/1016003518353637386/1126417768288374874/image.png",
		"answers": [
			["١٤٤", true],
			["١٣٣", false],
			["١٢٢", false],
			["١٥٥", false],
		],
	},
	{
		"question": "https://cdn.discordapp.com/attachments/1016003518353637386/1126417880922202142/image.png",
		"answers": [
			["١٦٩", true],
			["١٩٦", false],
			["١٦٠", false],
			["١٧٠", false],
		],
	},
	{
		"question": "https://cdn.discordapp.com/attachments/1016003518353637386/1126418060241272862/image.png",
		"answers": [
			["١٩٦", true],
			["١٦٩", false],
			["٢٠٠", false],
			["٢٠١", false],
		],
	},
	{
		"question": "https://cdn.discordapp.com/attachments/1016003518353637386/1126418190394724412/image.png",
		"answers": [
			["٢٢٥", true],
			["٢٠٥", false],
			["٢٣٥", false],
			["٢٤٥", false],
		],
	},
]
// {
// 	"question": "",
// 	"answers": [
// 		["", true],
// 		["", false],
// 		["", false],
// 		["", false],
// 	],
// },

function get_question() {
	if (answered.length == questions.length) {
		alert("ترا ختمت الاسئلة")
		answered = []
		testindex = 0
	}
	if (testmode) {
		var question = questions[testindex++]
		question["answers"] = shuffle(question["answers"])
		return question
	} else {
		var question = questions[Math.floor(Math.random() * questions.length)];
		if (answered.includes(question)) {
			return get_question()
		}

		question["answers"] = shuffle(question["answers"])
		return question
	}
}

function on_answer(correct) {
	var question = get_question()
	
	$("#question").empty()

	if (correct) {
		score += 1;
		$(".score").text("النتيجة: " + score)
		$(".score").css("color", "green")
	} else {
		$(".score").text("النتيجة: " + score)
		$(".score").css("color", "red")
	}
	add_question(question)
}

function add_question(question) {
	var question_div = $("#question")
	answered.push(question)

	question_div.append("<img src='" + question.question + "'>")
	for (var i of question.answers) {
		if (i[1]) {
			question_div.append("<div><button class='answer' onclick='on_answer(true)'> " + i[0] + "</button></div>")
		} else {
			question_div.append("<div><button class='answer' onclick='on_answer(false)'>" + i[0] + "</button></div>")
		}
	}
}

function shuffle(arr) {
	return arr.sort(() => Math.random() - 0.5)
}

$(document).ready(function() {
	var question = get_question()

	add_question(question)
})