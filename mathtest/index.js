const testmode = true;
var testindex = 0;
var score = 0;
var answered = [];

const questions = [
	{
		"question": "https://media.discordapp.net/attachments/1084126940459438263/1119609614539968512/Picsart_23-06-17_15-32-59-027.png?width=897&height=88",
		"answers": [
			["A", false],
			["B", false],
			["C", true],
			["D", false],
		],
	},
	{
		"question": "https://media.discordapp.net/attachments/1084126940459438263/1119609614812582028/Picsart_23-06-17_15-33-37-143.png?width=840&height=102",
		"answers": [
			["A", false],
			["B", true],
			["C", false],
			["D", false],
		],
	},
	{
		"question": "https://media.discordapp.net/attachments/1084126940459438263/1119609615068430377/Picsart_23-06-17_15-34-11-871.png?width=851&height=87",
		"answers": [
			["A", false],
			["B", false],
			["C", false],
			["D", true],
		],
	},
	{
		"question": "https://media.discordapp.net/attachments/1084126940459438263/1119609615311720488/Picsart_23-06-17_15-34-58-280.png?width=866&height=108",
		"answers": [
			["A", true],
			["B", false],
			["C", false],
			["D", false],
		],
	},
	{
		"question": "https://media.discordapp.net/attachments/1084126940459438263/1119609615588528199/Picsart_23-06-17_15-35-33-610.png?width=866&height=97",
		"answers": [
			["A", true],
			["B", false],
			["C", false],
			["D", false],
		],
	},
	{
		"question": "https://media.discordapp.net/attachments/1084126940459438263/1119609615861153862/Picsart_23-06-17_15-36-01-296.png?width=847&height=98",
		"answers": [
			["A", false],
			["B", true],
			["C", false],
			["D", false],
		],
	},
	{
		"question": "https://media.discordapp.net/attachments/1084126940459438263/1119609616083472514/Picsart_23-06-17_15-36-35-055.png?width=846&height=63",
		"answers": [
			["A", false],
			["B", false],
			["C", false],
			["D", true],
		],
	},
	{
		"question": "https://media.discordapp.net/attachments/1084126940459438263/1119609616326725703/Picsart_23-06-17_15-37-10-902.png?width=870&height=112",
		"answers": [
			["A", false],
			["B", true],
			["C", false],
			["D", false],
		],
	},
	{
		"question": "https://media.discordapp.net/attachments/1084126940459438263/1119609616616128633/Picsart_23-06-17_15-38-54-630.png?width=840&height=136",
		"answers": [
			["A", true],
			["B", false],
			["C", false],
			["D", false],
		],
	},
	{
		"question": "https://media.discordapp.net/attachments/1084126940459438263/1119609616851030076/Picsart_23-06-17_15-39-29-080.png?width=841&height=93",
		"answers": [
			["A", false],
			["B", false],
			["C", false],
			["D", true],
		],
	},
	{
		"question": "https://media.discordapp.net/attachments/1084126940459438263/1119609734220230716/Picsart_23-06-17_15-39-52-796.png?width=872&height=67",
		"answers": [
			["A", false],
			["B", false],
			["C", false],
			["D", true],
		],
	},
	{
		"question": "https://media.discordapp.net/attachments/1084126940459438263/1119609734648057856/Picsart_23-06-17_15-40-26-905.png?width=865&height=70",
		"answers": [
			["A", false],
			["B", true],
			["C", false],
			["D", false],
		],
	},
	{
		"question": "https://media.discordapp.net/attachments/1084126940459438263/1119609734891311105/Picsart_23-06-17_15-41-09-576.png?width=845&height=131",
		"answers": [
			["A", false],
			["B", false],
			["C", true],
			["D", false],
		],
	},
	{
		"question": "https://media.discordapp.net/attachments/1084126940459438263/1119609735340109824/Picsart_23-06-17_15-41-42-836.png?width=875&height=110",
		"answers": [
			["A", false],
			["B", false],
			["C", false],
			["D", true],
		],
	},
	{
		"question": "https://media.discordapp.net/attachments/1084126940459438263/1119609735574999110/Picsart_23-06-17_15-42-22-437.png?width=847&height=95",
		"answers": [
			["A", false],
			["B", true],
			["C", false],
			["D", false],
		],
	},
	{
		"question": "https://media.discordapp.net/attachments/1084126940459438263/1119609735851806720/Picsart_23-06-17_15-42-59-268.png?width=851&height=93",
		"answers": [
			["A", false],
			["B", true],
			["C", false],
			["D", false],
		],
	},
	{
		"question": "https://media.discordapp.net/attachments/1084126940459438263/1119609736145416282/Picsart_23-06-17_15-43-46-628.png?width=838&height=73",
		"answers": [
			["A", false],
			["B", false],
			["C", true],
			["D", false],
		],
	},
	{
		"question": "https://media.discordapp.net/attachments/1084126940459438263/1119609736489341068/Picsart_23-06-17_15-44-27-717.png?width=842&height=100",
		"answers": [
			["A", false],
			["B", true],
			["C", false],
			["D", false],
		],
	},
	{
		"question": "https://media.discordapp.net/attachments/1084126940459438263/1119609736912982066/Picsart_23-06-17_15-45-20-836.png?width=861&height=122",
		"answers": [
			["A", false],
			["B", true],
			["C", false],
			["D", false],
		],
	},
	{
		"question": "https://media.discordapp.net/attachments/1084126940459438263/1119609737198178355/Picsart_23-06-17_15-46-03-110.png?width=838&height=82",
		"answers": [
			["A", false],
			["B", false],
			["C", false],
			["D", true],
		],
	},
	{
		"question": "https://media.discordapp.net/attachments/1084126940459438263/1119609763114795068/Picsart_23-06-17_15-46-32-361.png?width=845&height=85",
		"answers": [
			["A", false],
			["B", false],
			["C", false],
			["D", true],
		],
	},
	{
		"question": "https://media.discordapp.net/attachments/1084126940459438263/1119630400394903643/Picsart_23-06-17_16-55-19-576.png?width=877&height=81",
		"answers": [
			["A", true],
			["B", false],
			["C", false],
			["D", false],
		],
	},
	{
		"question": "https://media.discordapp.net/attachments/1084126940459438263/1119630400751407104/Picsart_23-06-17_16-56-09-342.png?width=842&height=131",
		"answers": [
			["A", false],
			["B", false],
			["C", false],
			["D", true],
		],
	},
	{
		"question": "https://media.discordapp.net/attachments/1084126940459438263/1119630400986292255/Picsart_23-06-17_16-57-19-983.png?width=847&height=81",
		"answers": [
			["A", false],
			["B", true],
			["C", false],
			["D", false],
		],
	},
	{
		"question": "https://media.discordapp.net/attachments/1084126940459438263/1119630401254723804/Picsart_23-06-17_16-57-40-046.png?width=872&height=78",
		"answers": [
			["A", false],
			["B", true],
			["C", false],
			["D", false],
		],
	},
	{
		"question": "https://media.discordapp.net/attachments/1084126940459438263/1119630401510580224/Picsart_23-06-17_16-58-12-135.png?width=881&height=97",
		"answers": [
			["A", false],
			["B", false],
			["C", true],
			["D", false],
		],
	},
	{
		"question": "https://media.discordapp.net/attachments/1084126940459438263/1119630401741275148/Picsart_23-06-17_16-59-01-381.png?width=870&height=78",
		"answers": [
			["A", true],
			["B", false],
			["C", false],
			["D", false],
		],
	},
	{
		"question": "https://media.discordapp.net/attachments/1084126940459438263/1119630401992921088/Picsart_23-06-17_16-59-33-573.png?width=868&height=118",
		"answers": [
			["A", true],
			["B", false],
			["C", false],
			["D", false],
		],
	},
	{
		"question": "https://media.discordapp.net/attachments/1084126940459438263/1119630402290720820/Picsart_23-06-17_17-00-10-956.png?width=878&height=90",
		"answers": [
			["A", false],
			["B", false],
			["C", true],
			["D", false],
		],
	},
	{
		"question": "https://media.discordapp.net/attachments/1084126940459438263/1119630402567553024/Picsart_23-06-17_17-00-51-089.png?width=876&height=83",
		"answers": [
			["A", false],
			["B", false],
			["C", true],
			["D", false],
		],
	},
	{
		"question": "https://prnt.sc/y68u69-JB6hV",
		"answers": [
			["7", false],
			["720", true],
			["60", false],
			["10", false],
		],
	},
	{
		"question": "https://prnt.sc/YJpF4Q5PDr9N",
		"answers": [
			["7", false],
			["720", false],
			["60", false],
			["10", true],
		],
	},
	{
		"question": "https://prnt.sc/ey-Jjmm36gZP",
		"answers": [
			["7", true],
			["720", false],
			["60", false],
			["10", false],
		],
	},
	{
		"question": "https://media.discordapp.net/attachments/1084126940459438263/1119630557840683199/Picsart_23-06-17_17-02-12-679.png?width=842&height=70",
		"answers": [
			["صح", true],
			["خطأ", false],
		],
	},
	{
		"question": "https://media.discordapp.net/attachments/1084126940459438263/1119630558096539648/Picsart_23-06-17_17-02-43-015.png?width=843&height=68",
		"answers": [
			["صح", true],
			["خطأ", false],
		],
	},
	{
		"question": "https://media.discordapp.net/attachments/1084126940459438263/1119630558327210016/Picsart_23-06-17_17-03-07-866.png?width=846&height=70",
		"answers": [
			["صح", true],
			["خطأ", false],
		],
	},
	{
		"question": "https://media.discordapp.net/attachments/1084126940459438263/1119630558553714859/Picsart_23-06-17_17-03-44-478.png?width=820&height=70",
		"answers": [
			["صح", false],
			["خطأ", true],
		],
	},
	{
		"question": "https://media.discordapp.net/attachments/1084126940459438263/1119630558801182860/Picsart_23-06-17_17-04-29-156.png?width=858&height=86",
		"answers": [
			["صح", false],
			["خطأ", true],
		],
	},
	{
		"question": "https://prnt.sc/1wpr97kMuUYg",
		"answers": [
			["صح", true],
			["خطأ", false],
		],
	},
	{
		"question": "https://prnt.sc/_nO8LdD3jha3",
		"answers": [
			["صح", true],
			["خطأ", false],
		],
	},	
]

function get_question() {
	if (answered.length == questions.length) {
		alert("ترا ختمت الاسئلة")
		answered = []
		testindex = 0
	}
	if (testmode) {
		return questions[testindex++]
	} else {
		var q = questions[Math.floor(Math.random() * questions.length)];
		if (answered.includes(q)) {
			return get_question()
		}
		return q
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

$(document).ready(function() {
	var question = get_question()

	add_question(question)
})