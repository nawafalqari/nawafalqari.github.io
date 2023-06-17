var score = 0;

const questions = [
	{
		"question": "أي مما يأتي لا يعد وظيفة للعظم",
		"answers": [
			["انتاج فيتامين د", true],
			["الدعم الداخلي", false],
			["حماية الاعضاء الداخلي", false],
			["تخزين الكالسيوم", false]
		],		
	},
	{
		"question": "أي المصطلحات الآتية غير متطابقة",
		"answers": [
			["الجمجمة - الذرزات", false],
			["الرسغ - المفصل المداري", true],
			["الكتف - الفصل الكروي", false],
			["الركبة - المفصل", false]
		],
	},
	{
		"question": "ماذا تسمى الخلايا التي تتخلص من الانسجة العظمية الهرمة",
		"answers": [
			["العظمية البانية", false],
			["العظمية", false],
			["العظمية الهادمة", true],
			["العظمية الإنزيمية المحللة", false]
		],
	},
	{
		"question": "أي مما يأتي لا يعد جزءا من الهيكل المحوري",
		"answers": [
			["الجمجمة", false],
			["الاضلاع", false],
			["عظم الورك", true],
			["العمود الفقري", false]
		],
	},
	{
		"question": "ATP ما الذي يحتاج إلى",
		"answers": [
			["انقباض العضلات", false],
			["انبساط العضلات", false],
			["انقباض العضلات وانبساطها", true],
			["لا انقباض للعضلات ولا انبساطها", false]
		],
	},
	{
		"question": "اين تخزن الدهون في العظام",
		"answers": [
			["العضم المتراص", false],
			["الخلايا العظمية", false],
			["النخاع الأحمر", false],
			["النخاع الأصفر", true]
		],
	},
	{
		"question": "ما الذي يعد من خصائص الجهاز العصبي السمبثاوي",
		"answers": [
			["يحفز الهضم", false],
			["يوسع القصبات", true],
			["يبطئ نبض القلب", false],
			["تحول الجلوكوز الى جلايكوجين", false]
		],
	},
	{
		"question": "ما الجهاز العصبي الذي تسيطر عليه منطفة تحت المهاد في الدماغ",
		"answers": [
			["الإرادي", false],
			["الحسي", false],
			["الطرفي", false],
			["الذاتي", true]
		],
	},
	{
		"question": "ما الذي يقلل نشاط الدماغ",
		"answers": [
			["النيكوتين", false],
			["الكوكائين", false],
			["الادرينالين", false],
			["الكحول", true]
		],
	},
	{
		"question": "من اين يخرج الدم بعد ان يغادر القلب",
		"answers": [
			["الابهر(الأورطى)", true],
			["الشعيرات الدموية", false],
			["الرئتين", false],
			["الوريد الرئوى", false]
		],
	},
	{
		"question": "إذا اصيب شخص فصيلة دمه A في أثناء حادث سير فتطلب الأمر نقل دم إليه فما نوع فصيلة الدم التي يمكن ان تنقل اليه",
		"answers": [
			["فصيلة A فقط", false],
			["فصيلة A او O", true],
			["فصيله AB فقط", false],
			["فصيله O فقط", false]
		],
	},
	{
		"question": "اين توجد الصمامات التي تعمل في اتجاه واحد في جهاز الدوران",
		"answers": [
			["الشرايين", false],
			["الشعيرات الدموية", false],
			["الأوردة", true],
			["خلايا الدم البيضاء", false]
		],
	},
	{
		"question": "إذا قطع وعاء دموي صغير في يدك فما الذي يؤدي دور المدافع النشط ضد المرض الذي قد يحدث",
		"answers": [
			["البلازما", false],
			["الصفائح الدموية", false],
			["خلايا الدم الحمراء", false],
			["خلايا الدم البيضاء", true]
		],
	},
	{
		"question": "ما الجزء الذي يتحرك إلى أسفل عندما تنقبض العضلات",
		"answers": [
			["الاضلاع", false],
			["الحجاب الجاجز", true],
			["القصبة الهوائية", false],
			["البلعوم", false]
		],
	},
	{
		"question": "ما العملية التي تتم داخل خلايا الانسجة الا الساقين",
		"answers": [
			["الترشيح", false],
			["التنفس الخارجي", false],
			["الحركات التنفسية", false],
			["التنفس الداخلي", true]
		],
	},
	{
		"question": "ما العملية التي تؤدي إلى رفع الحجاب الحاجز إلى أعلى",
		"answers": [
			["التنفس الخلوي", false],
			["الزفير", true],
			["الشهيق", false],
			["التنفس الداخلي", false]
		],
	},
	{
		"question": "ما الغاز الذي تحتاج إليه جميع الخلايا",
		"answers": [
			["الكبريت", false],
			["الهيدروجين", false],
			["ثاني أكسيد الكربون", false],
			["الاكسجين", true]
		],
	},
	{
		"question": "يوجد التواء هلني في",
		"answers": [
			["الانابيب الكلوي", true],
			["الكبة", false],
			["محفظة بومان", false],
			["مجرى البول", false]
		],
	},
	{
		"question": "أي وظائف الكلية لأتية تحفظ الماء في الجسم",
		"answers": [
			["الامتصاص", false],
			["الترشيح", false],
			["إعادة الامتصاص", true],
			["التهوية", false]
		],
	},
	{
		"question": "ما العملية التي تعيد السكر إلى الدم",
		"answers": [
			["الإخراج", false],
			["الترشيح", false],
			["إعادة الامتصاص", true],
			["الزفير", false]
		],
	},
	{
		"question": "أي مما يأتي يعتبر من خصائص الدهون المشبعة",
		"answers": [
			["سائلة في درجة حرارة الغرفة وتوجد في الزيوت النباتية", false],
			["امتصاص معظمها في الأمعاء الغليظة", false],
			["مشتقة من مصادر حيوانية وصلبة في درجه حرارة الغرفة", true],
			["تميل إلى خفض كوليسترول الدم", false]
		],
	},
	{
		"question": "أي الكربوهيدرات الأتية لا تهضم في الجسم تزود النظام الغذائي بالألياف",
		"answers": [
			["السكروز", false],
			["النشا", false],
			["الجلايكوجين", false],
			["السيليلوز", true]
		],
	},
	{
		"question": "أي مما يأتي يؤدي إلى تحليل الأطعمة الغنية با لبروتين في المعدة",
		"answers": [
			["الرقم الهيدروجيني المنخفض والببسين", true],
			["الرقم الهيدروجيني المرتفع والمادة الصفراء", false],
			["الرقم الهيدروجيني المرتفع والببسين", false],
			["الرقم الهيدروجيني المنخفض والمادة الصفراء", false]
		],
	},
	{
		"question": "أي الهرمونات الآتية تفرزه الخلايا العصيبة بدلا من جهاز الغدد الصم",
		"answers": [
			["الهرمون المانع لإدرار البول الأكسيتوسين", true],
			["هرمون النمو والثيروكسين", false],
			["الأنسولين الجلوكاجون", false],
			["النور إبينفرين والأبينفرين", false]
		],
	},
	{
		"question": "أي أزواج الهرمونات الآتية لها تأثير متضاد في عملها",
		"answers": [
			["الكالسيتونين الهرمون الجارد قي", true],
			["الإبينفرين والنور إبينفرين", false],
			["هومون النمو والثيروكسين", false],
			["ألدوستيرون الكورتيزول", false]
		],
	},
	{
		"question": "أي أنواع المواد المغذية الآتية يبدا هضمها فى المعدة",
		"answers": [
			["الازرار", false],
			["الشريحة من اللحم", true],
			["قطعة من الحلوى", false],
			["المعكرونة", false]
		],
	},
	{
		"question": "أي الغدة الآتيه تفرز الهرمون الرئسية المسؤول عن عمليات الأيض في جسم الإنسان",
		"answers": [
			["الغدة النخامية", false],
			["الغدة الزعترية", false],
			["الغدة الدرقية", true],
			["الغدد الكظرية", false]
		],
	},
	{
		"question": "ما الدور الذي تؤديه الهرمونات في الجسم",
		"answers": [
			["تعمل كمحفز حيوي للتفاعل", false],
			["تبادل الغازات في الرئتين", false],
			["هضم البروتين في المعدة", false],
			["تنظم العديد من وظائف الجسم", true]
		],
	},
	{
		"question": "عند ارتفاع مستوى السكر في الدم فإن البنكرياس يفرز",
		"answers": [
			["الجلوكاجون", false],
			["الانسولين", true],
			["الانسولين و الجلوكاجون", false],
			["لا الانسولين ولا الجلوكاجون", false]
		],
	},
	{
		"question": "أي الهرمونات التالية مسؤول عن استجابة المواجهة او الهروب",
		"answers": [
			["الكالسيتونين", false],
			["الجلوكاجون", false],
			["الإبينفرين", true],
			["الثيروكسين", false]
		],
	},
	{
		"question": "تتحلل الكربوهيدرات المعقدة في الجهاز الهضمي إلى",
		"answers": [
			["حموض أمينية", false],
			["حموض ذهنية", false],
			["سكريات بسيطة", true],
			["نشا", false]
		],
	},
	{
		"question": "يحدث الاخصاب في الجهاز التناسلي الأنثوي فى",
		"answers": [
			["الرحم", false],
			["المهبل", false],
			["الجسم الأصفر", false],
			["قناة البيض", true],
		],
	},
	{
		"question": "متى تشعر الام الحامل بحركة الجنين",
		"answers": [
			["في الشهر الثلاث الأولى", false],
			["في الأشهر الثلاث الثانية", true],
			["في الأشهر الثلاث الأخيرة", false],
			["الشهر الأخير فقط", false]
		],
	},
	{
		"question": "أي الأجزاء الأتية تسهم في افراز نصف الحجم السائل المنوي الذكر",
		"answers": [
			["البرخ", false],
			["الحوصلة المنوية", true],
			["غدة البروستات", false],
			["الوعاء الناقل", false]
		],
	},
	{
		"question": "متى تبدأ خلية البويضة في أثنى الأنسان بالانقسام المنصف",
		"answers": [
			["قبل ولادتها", false],
			["بعد سن البلوغ", true],
			["خلال عملية الإباضة", false],
			["خلال دورة الحيض", false]
		],
	},
	{
		"question": "أي التحولات الآتية من مراحل الحياة التي تحدث فيها البلوغ",
		"answers": [
			["من المراهقة الى البلوغ", false],
			["من الطفولة الى المراهقة", true],
			["من الجنين الى الرضيع", false],
			["من البويضة المخصبة الى الجنين", false]
		],
	},
	{
		"question": "تعرض الخلية التائية المساعدة مولد الضد الخاص بها لمساعدة",
		"answers": [
			["مسبب المرض", false],
			["النخاع العظمي", false],
			["الخلية البلازمية (B)", true],
			["الغدة الزعترية", false]
		],
	},
	{
		"question": "خط الدفاع الأول في جسم ضد المرض الجسم المضاد",
		"answers": [
			["الخلية التائية المساعدة", false],
			["الجسم المضاد", false],
			["الجلد", true],
			["البلعمة", false]
		],
	},
	{
		"question": "مادور البروتين المتمم الموجود في البلازما في الاستجابة المناعية",
		"answers": [
			["يعزز البلعمة", false],
			["ينشط الخلايا البلعمية", false],
			["يعزز تدمير مسبب المرض", false],
			["جميع ماذكر", true]
		],
	},
	{
		"question": "تنتج الخلايا اللمفية في",
		"answers": [
			["نخاع العظام", true],
			["الغدة الزعترية", false],
			["الطحال", false],
			["العقد الليمفية", false]
		],
	},
	{
		"question": "الجزء المسؤول في الدفاع عند اتزان حركة الجسم",
		"answers": [
			["المخ", false],
			["المخيخ", true],
			["النخاع المستطيل", false],
			["تحت المهاد", false]
		],
	},
	{
		"question": "أي مما يأتي يعتبر مثال علا المنبهات",
		"answers": [
			["السجائر", true],
			["المخ", false],
			["مسكنات الألم", false],
			["جميع ماذكر", false]
		],
	},
	{
		"question": "الانزيم المسؤول عن هضم البروتين في المعدة هو",
		"answers": [
			["المادة الصفراء", false],
			["الببسين", true],
			["اللعاب", false],
		],
	},
]
var answered = []

function get_question() {
	if (answered.length == questions.length) {
		alert("ترا ختمت الاسئلة")
		answered = []
	}
	var q = questions[Math.floor(Math.random() * questions.length)];
	if (answered.includes(q)) {
		return get_question()
	}
	return q
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

$(document).ready(function() {
	var question = get_question()

	add_question(question)
})