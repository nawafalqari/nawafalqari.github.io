const testmode = true;
var testindex = 0;
var score = 0;
var answered = [];

const questions = [
	{
		"question": "تتكون الهيدروكربونات من؟",
		"answers": [
			["الأكسجين والنيتروجين", false],
			["الهيدروجين والأكسجين", false],
			["الكربون والهيدروجين", true]
		]
	},
	{
		"question": "حدد الصيغة العامة لاللكانات؟",
		"answers": [
			["CnH2n+1", false],
			["CnH2n+2", true],
			["CnH2n", false]
		]
	},
	{
		"question": "لبع ض الكربونات الصيغة الجزيئية نفسها لكنها تختلف في؟",
		"answers": [
			["الصيغة البنائية", true],
			["الخواص الكيميائية.", false],
			["الشكل الهندسي.", false]
		]
	},
	{
		"question": "تسمى المتشكالت الناتجة عن اختالف ترتيب المجموعات واتجاهها حول الرابطة الثنائية؟",
		"answers": [
			["المتشكلات الهندسية", true],
			["الألكينات.", false],
			["الألكايدات.", false]
		]
	},
	{
		"question": "اذكر الصي غة الجزيئية للمركب ايثان؟",
		"answers": [
			["C2H4", false],
			["C2H6", true],
			["C3H8", false]
		]
	},
	{
		"question": "سم المركب الاتي",
		"answers": [
			["ايثيل حلقي", false],
			["ميثيل هكسان حلقي", false],
			["ميثيل بنتان حلقي", true]
		]
	},
	{
		"question": "تعد الهيدروكربونات ابسط المركبات العضوية؟",
		"answers": [
			["صح", true],
			["خطأ", false]
		]
	},
	{
		"question": "الالكانات هيدروكربونات تحتوي على روابط ثنائية؟",
		"answers": [
			["صح", false],
			["خطأ", true]
		]
	},
	{
		"question": "مج مو عتا الميثي ل الواقعة في نفس التجاه يشار اليها بالب ادئة ترانس ؟",
		"answers": [
			["صح", false],
			["خطأ", true]
		]
	},
	{
		"question": "هناك ثالث أنواع من المتشكالت الفراغية ؟",
		"answers": [
			["صح", false],
			["خطأ", true]
		]
	},
	{
		"question": "تعد اكاسيد الكربون مركبات غير عضوية؟",
		"answers": [
			["صح", true],
			["خطأ", false]
		]
	},
	{
		"question": "يعرف الهيدروكربون الذي يحتوي على روابط أحادية فقط هيدروكربون غير مشبع ؟",
		"answers": [
			["صح", false],
			["خطأ", true]
		]
	},
	{
		"question": "السم الكيميائي ل[CI3CH] ؟",
		"answers": [
			["كلورو الإيثيل", false],
			["كلوريد الميثيل", false],
			["كلورو ميثان", true]
		]
	},
	{
		"question": "السيتون مثال على؟",
		"answers": [
			["كحول", false],
			["كربوهيدرات", false],
			["الكيتونات", true]
		]
	},
	{
		"question": "جزيئات كبيرة تتكون من العديد من الوحدات البنائية المتكررة؟",
		"answers": [
			["الأحماض الأمينية", false],
			["البوليمرات", true],
			["الإنزيمات", false]
		]
	},
	{
		"question": "عملية فقدان اللكترونات",
		"answers": [
			["الأكسدة", true],
			["الاختزال", false],
			["الأمونة", false]
		]
	},
	{
		"question": "عملية اكتساب اللكترونات ؟",
		"answers": [
			["الأكسدة", false],
			["الاختزال", true],
			["التخفيض", false]
		]
	},
	{
		"question": "التفاعالت التي ترتبط فيها المونومرات؟",
		"answers": [
			["التفاعلات الانتقائية", false],
			["التفاعلات السريعة", false],
			["تفاعلات البنمرة", true]
		]
	},
	{
		"question": "الصيغة العامة للكحولات OH-R ؟",
		"answers": [
			["صح", true],
			["خطأ", false]
		]
	},
	{
		"question": "حمض المثانويك مثال على الحماض الكربوكسيلية؟",
		"answers": [
			["صح", true],
			["خطأ", false]
		]
	},
	{
		"question": "بولي كلوريد الفينيل [PVC] يستعمل في انابيب بالستيكية وتغطية اللحوم والمفروشات ؟",
		"answers": [
			["صح", true],
			["خطأ", false]
		]
	},
	{
		"question": "تصنيف تفاعالت المركبات العضوية يجعل توقع نواتج التفاعالت اسهل؟",
		"answers": [
			["صح", true],
			["خطأ", false]
		]
	},
	{
		"question": "تحتوي الامينات على ذرات نيتروجين مرتبطة مع ذرات الكربون في سلاسل اليفاتية او حلقات اروماتية؟",
		"answers": [
			["صح", true],
			["خطأ", false]
		]
	},

	//

	{
		"question": "بوليمرات عضوية تتكون من احماض امينية مرتبطة بترتيب معين ؟",
		"answers": [
			["الكربوهيدرات", false],
			["الانزيمات", false],
			["البروتينات", true]
		]
	},
	{
		"question": "عن د اتحاد حمضان امينين لتكوين ام يد ي سمى هذا التفاعل؟",
		"answers": [
			["النووي", false],
			["التكاثف", true],
			["التحفيز", false]
		]
	},
	{
		"question": "ت سمى ابسط أنواع الكربو هيدرات والتي تسمى سكريات بسيطة هي",
		"answers": [
			["السكريات المعقدة", false],
			["السكريات الأحادية", true],
			["السكريات الثنائية", false]
		]
	},
	{
		"question": "هو بوليمر حيوي يحتوي على النيتروجين ويخزن المعلومات الوراثية؟",
		"answers": [
			["حمض الكربون", false],
			["حمض النووي", true],
			["حمض الهيودركلوريك", false]
		]
	},
	{
		"question": "تسمى وحدة البناء األساسية للحمض النووي ؟",
		"answers": [
			["النويه", false],
			["النكلوتيد", true],
			["الخليه", false]
		]
	},
	{
		"question": "تعد النزيمات نوعا من البروتين ات ؟",
		"answers": [
			["صح", true],
			["خطأ", false]
		]
	},
	{
		"question": "يوجد في ك ل حمض امين ذرة كربون مركزية محاطة بأربع مجموعات؟",
		"answers": [
			["صح", true],
			["خطأ", false]
		]
	},
	{
		"question": "الكربوهيدرات مركبات عضوية تحتوي على عدة مجموعات من الهيدروكسيل بالإضافة الى مجموعة كربونيل",
		"answers": [
			["صح", true],
			["خطأ", false]
		]
	},
	{
		"question": "يستعمل تفاعل التصبن في انتاج الصابون؟",
		"answers": [
			["صح", true],
			["خطأ", false]
		]
	},
	{
		"question": "يكون تخزين المعلومات في الدماغ ؟",
		"answers": [
			["صح", false],
			["خطأ", true]
		]
	},
	{
		"question": "القانون الذي ينص على حجم كمية محددة من الغاز يتناسب عكسيا مع الضغط عند ثبوت الحرارة ؟",
		"answers": [
			["اتشارل", false],
			["بويل", true],
			["الغاز المثالي", false]
		]
	},
	{
		"question": "نص قانون بويل الرياضي على؟",
		"answers": [
			["P1V1=P2V2", true],
			["P1T1=P2T2", false],
			["V1T1=V2T2", false]
		]
	},
	{
		"question": "القانون الذي يصف السلوك الفيزيائي الى الغاز المثالي من حيث [الضغط ، الحجم ، درجة الحرارة ، عدد المولت للغاز]؟",
		"answers": [
			["بويل", false],
			["شارل", false],
			["الغاز المثالي", true]
		]
	},
	{
		"question": "احسب عدد المولات NH3 في وعاء حجمه 3L عند 10*3 تربيع وضغط 1.5 atm",
		"answers": [
			["مول0.18", true],
			["مول 1.8", false],
			["مول 18", false]
		]
	},
	{
		"question": "ينفخ غواص وهو على عمق 10 متر فقاعة حجمها 0.75 لتر وعندما ارتفعت تغير ضغطها من atm 2.25 الى atm 1.03 ما حجم الفقاعة عند السطح؟",
		"answers": [
			["16L", false],
			["160L", false],
			["1.6L", true]
		]
	},
	{
		"question": "اذا كان حجم البالون 2.32 لتر داخل سيارة عن درجة حرارة 40C فاذا أوقفت السيارة وارتفعت الحرارة الى 75C فما حجم البالون عند ثبوت الضغط؟",
		"answers": [
			["3.85L", false],
			["2.58L", true],
			["258L", false]
		]
	},
	{
		"question": "تقاس وحدة الحجم في قوانين الغازات باللتر L ؟",
		"answers": [
			["صح", true],
			["خطأ", false]
		]
	},
	{
		"question": "يقاس الضغط بوحدة الكالفن؟",
		"answers": [
			["صح", false],
			["خطأ", true]
		]
	},
	{
		"question": "القانون الذي يحدد العالقة بين الضغط والحرارة لكمية الغاز هو قانون جاي لوساك ؟",
		"answers": [
			["صح", false],
			["خطأ", true]
		]
	},
	{
		"question": "القانون الذي ينص على ان الضغط لمقدار محدد من الغاز يتناسب طرديا مع درجة الحرارة عند ثبوت الحجم هو قانون شارل؟",
		"answers": [
			["صح", false],
			["خطأ", true]
		]
	},
	{
		"question": "ينص م بدا افوجادرو على ان الحجوم المتساوية من الغازات المختلفة تحتوي على العدد نفسه من الجسيمات؟",
		"answers": [
			["صح", true],
			["خطأ", false]
		]
	},
	{
		"question": "الحجم المولري للغاز هو الحجم الذي يشغله mol 1 عند ظروف قياسية؟",
		"answers": [
			["صح", true],
			["خطأ", false]
		]
	},
	{
		"question": "يرمز للظروف القياسية بالرمز STP ؟",
		"answers": [
			["صح", true],
			["خطأ", false]
		]
	},
	// {
	// 	"question": "",
	// 	"answers": [
	// 		["صح", false],
	// 		["خطأ", false]
	// 	]
	// },
	// {
	// 	"question": "",
	// 	"answers": [
	// 		["صح", false],
	// 		["خطأ", false]
	// 	]
	// }
]
console.log(questions.length)
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

	question_div.append("<h1>" + question.question + "</h1>")
	for (var i of question.answers) {
		if (i[1]) {
			question_div.append("<div><button class='answer' onclick='on_answer(true)'> " + i[0] + "</button></div>")
		} else {
			question_div.append("<div><button class='answer' onclick='on_answer(false)'>" + i[0] + "</button></div>")
		}
	}
}

$(document).ready(function () {
	var question = get_question()

	add_question(question)
})