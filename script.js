// JavaScript Document
var amount1 = {name:"--",point:0};
var amount2 = {name:"--",point:0};
var amount3 = {name:"--",point:0};
var amount4 = {name:"--",point:0};
var amount5 = {name:"--",point:0};
var amount6 = {name:"--",point:0};
var amount7 = {name:"--",point:0};
var amount8 = {name:"--",point:0};
var amount9 = {name:"--",point:0};
var amount10 = {name:"--",point:0};
var amount11 = {name:"--",point:0};
var amount12 = {name:"--",point:0};
var amount13 = {name:"--",point:0};
var amount14 = {name:"--",point:0};
var amount15 = {name:"--",point:0};
var amount16 = {name:"--",point:0};
var amount17 = {name:"--",point:0};
var amount18 = {name:"--",point:0};
var amount19 = {name:"--",point:0};
var amount20 = {name:"--",point:0};
var amount21 = {name:"--",point:0};
var amount22 = {name:"--",point:0};
var amount23 = {name:"--",point:0};
var amount24 = {name:"--",point:0};
var amount25 = {name:"--",point:0};
var amount26 = {name:"--",point:0};
var amount27 = {name:"--",point:0};
var amount28 = {name:"--",point:0};
var amount29 = {name:"--",point:0};
var amount30 = {name:"--",point:0};

var allamount = [amount1,amount2,amount3,amount4,amount5,amount6,amount7,amount8,amount9,amount10,amount11,amount12,amount13,amount14,amount15,amount16,amount17,amount18,amount19,amount20,amount21,amount22,amount23,amount24,amount25,amount26,amount27,amount28,amount29,amount30];

$(function(){
	$("#submit1").click(function(){
		amount1.name = $("#name1").val();
		$("#display1").removeClass("displaynone");
		$(".btn1").removeClass("displaynone");
		$("#submit1").addClass("displaynone");
		$("#name1").addClass("locked");
	});
	$("#ad2btn1").click(function(){
		amount1.point += 2;
		$("#counter1").text(amount1.point);
	});
	$("#ad1btn1").click(function(){
		amount1.point ++;
		$("#counter1").text(amount1.point);
	});
	$("#min1btn1").click(function(){
		amount1.point --;
		$("#counter1").text(amount1.point);
	});

	$("#submit2").click(function(){
		amount2.name = $("#name2").val();
		$("#display2").removeClass("displaynone");
		$(".btn2").removeClass("displaynone");
		$("#submit2").addClass("displaynone");
		$("#name2").addClass("locked");
	});
	$("#ad2btn2").click(function(){
		amount2.point += 2;
		$("#counter2").text(amount2.point);
	});
	$("#ad1btn2").click(function(){
		amount2.point ++;
		$("#counter2").text(amount2.point);
	});
	$("#min1btn2").click(function(){
		amount2.point --;
		$("#counter2").text(amount2.point);
	});
	
	$("#submit3").click(function(){
		amount3.name = $("#name3").val();
		$("#display3").removeClass("displaynone");
		$(".btn3").removeClass("displaynone");
		$("#submit3").addClass("displaynone");
		$("#name3").addClass("locked");
	});
	$("#ad2btn3").click(function(){
		amount3.point += 2;
		$("#counter3").text(amount3.point);
	});
	$("#ad1btn3").click(function(){
		amount3.point ++;
		$("#counter3").text(amount3.point);
	});
	$("#min1btn3").click(function(){
		amount3.point --;
		$("#counter3").text(amount3.point);
	});
	
	$("#submit4").click(function(){
		amount4.name = $("#name4").val();
		$("#display4").removeClass("displaynone");
		$(".btn4").removeClass("displaynone");
		$("#submit4").addClass("displaynone");
		$("#name4").addClass("locked");
	});
	$("#ad2btn4").click(function(){
		amount4.point += 2;
		$("#counter4").text(amount4.point);
	});
	$("#ad1btn4").click(function(){
		amount4.point ++;
		$("#counter4").text(amount4.point);
	});
	$("#min1btn4").click(function(){
		amount4.point --;
		$("#counter4").text(amount4.point);
	});
	
	$("#submit5").click(function(){
		amount5.name = $("#name5").val();
		$("#display5").removeClass("displaynone");
		$(".btn5").removeClass("displaynone");
		$("#submit5").addClass("displaynone");
		$("#name5").addClass("locked");
	});
	$("#ad2btn5").click(function(){
		amount5.point += 2;
		$("#counter5").text(amount5.point);
	});
	$("#ad1btn5").click(function(){
		amount5.point ++;
		$("#counter5").text(amount5.point);
	});
	$("#min1btn5").click(function(){
		amount5.point --;
		$("#counter5").text(amount5.point);
	});
	
	$("#submit6").click(function(){
		amount6.name = $("#name6").val();
		$("#display6").removeClass("displaynone");
		$(".btn6").removeClass("displaynone");
		$("#submit6").addClass("displaynone");
		$("#name6").addClass("locked");
	});
	$("#ad2btn6").click(function(){
		amount6.point += 2;
		$("#counter6").text(amount6.point);
	});
	$("#ad1btn6").click(function(){
		amount6.point ++;
		$("#counter6").text(amount6.point);
	});
	$("#min1btn6").click(function(){
		amount6.point --;
		$("#counter6").text(amount6.point);
	});
	
	$("#submit7").click(function(){
		amount7.name = $("#name7").val();
		$("#display7").removeClass("displaynone");
		$(".btn7").removeClass("displaynone");
		$("#submit7").addClass("displaynone");
		$("#name7").addClass("locked");
	});
	$("#ad2btn7").click(function(){
		amount7.point += 2;
		$("#counter7").text(amount7.point);
	});
	$("#ad1btn7").click(function(){
		amount7.point ++;
		$("#counter7").text(amount7.point);
	});
	$("#min1btn7").click(function(){
		amount7.point --;
		$("#counter7").text(amount7.point);
	});
	
	$("#submit8").click(function(){
		amount8.name = $("#name8").val();
		$("#display8").removeClass("displaynone");
		$(".btn8").removeClass("displaynone");
		$("#submit8").addClass("displaynone");
		$("#name8").addClass("locked");
	});
	$("#ad2btn8").click(function(){
		amount8.point += 2;
		$("#counter8").text(amount8.point);
	});
	$("#ad1btn8").click(function(){
		amount8.point ++;
		$("#counter8").text(amount8.point);
	});
	$("#min1btn8").click(function(){
		amount8.point --;
		$("#counter8").text(amount8.point);
	});
	
	$("#submit9").click(function(){
		amount9.name = $("#name9").val();
		$("#display9").removeClass("displaynone");
		$(".btn9").removeClass("displaynone");
		$("#submit9").addClass("displaynone");
		$("#name9").addClass("locked");
	});
	$("#ad2btn9").click(function(){
		amount9.point += 2;
		$("#counter9").text(amount9.point);
	});
	$("#ad1btn9").click(function(){
		amount9.point ++;
		$("#counter9").text(amount9.point);
	});
	$("#min1btn9").click(function(){
		amount9.point --;
		$("#counter9").text(amount9.point);
	});
	
	$("#submit10").click(function(){
		amount10.name = $("#name10").val();
		$("#display10").removeClass("displaynone");
		$(".btn10").removeClass("displaynone");
		$("#submit10").addClass("displaynone");
		$("#name10").addClass("locked");
	});
	$("#ad2btn10").click(function(){
		amount10.point += 2;
		$("#counter10").text(amount10.point);
	});
	$("#ad1btn10").click(function(){
		amount10.point ++;
		$("#counter10").text(amount10.point);
	});
	$("#min1btn10").click(function(){
		amount10.point --;
		$("#counter10").text(amount10.point);
	});
	
	$("#submit11").click(function(){
		amount11.name = $("#name11").val();
		$("#display11").removeClass("displaynone");
		$(".btn11").removeClass("displaynone");
		$("#submit11").addClass("displaynone");
		$("#name11").addClass("locked");
	});
	$("#ad2btn11").click(function(){
		amount11.point += 2;
		$("#counter11").text(amount11.point);
	});
	$("#ad1btn11").click(function(){
		amount11.point ++;
		$("#counter11").text(amount11.point);
	});
	$("#min1btn11").click(function(){
		amount11.point --;
		$("#counter11").text(amount11.point);
	});
	
	$("#submit12").click(function(){
		amount12.name = $("#name12").val();
		$("#display12").removeClass("displaynone");
		$(".btn12").removeClass("displaynone");
		$("#submit12").addClass("displaynone");
		$("#name12").addClass("locked");
	});
	$("#ad2btn12").click(function(){
		amount12.point += 2;
		$("#counter12").text(amount12.point);
	});
	$("#ad1btn12").click(function(){
		amount12.point ++;
		$("#counter12").text(amount12.point);
	});
	$("#min1btn12").click(function(){
		amount12.point --;
		$("#counter12").text(amount12.point);
	});
	
	$("#submit13").click(function(){
		amount13.name = $("#name13").val();
		$("#display13").removeClass("displaynone");
		$(".btn13").removeClass("displaynone");
		$("#submit13").addClass("displaynone");
		$("#name13").addClass("locked");
	});
	$("#ad2btn13").click(function(){
		amount13.point += 2;
		$("#counter13").text(amount13.point);
	});
	$("#ad1btn13").click(function(){
		amount13.point ++;
		$("#counter13").text(amount13.point);
	});
	$("#min1btn13").click(function(){
		amount13.point --;
		$("#counter13").text(amount13.point);
	});
	
	$("#submit14").click(function(){
		amount14.name = $("#name14").val();
		$("#display14").removeClass("displaynone");
		$(".btn14").removeClass("displaynone");
		$("#submit14").addClass("displaynone");
		$("#name14").addClass("locked");
	});
	$("#ad2btn14").click(function(){
		amount14.point += 2;
		$("#counter14").text(amount14.point);
	});
	$("#ad1btn14").click(function(){
		amount14.point ++;
		$("#counter14").text(amount14.point);
	});
	$("#min1btn14").click(function(){
		amount14.point --;
		$("#counter14").text(amount14.point);
	});
	
	$("#submit15").click(function(){
		amount15.name = $("#name15").val();
		$("#display15").removeClass("displaynone");
		$(".btn15").removeClass("displaynone");
		$("#submit15").addClass("displaynone");
		$("#name15").addClass("locked");
	});
	$("#ad2btn15").click(function(){
		amount15.point += 2;
		$("#counter15").text(amount15.point);
	});
	$("#ad1btn15").click(function(){
		amount15.point ++;
		$("#counter15").text(amount15.point);
	});
	$("#min1btn15").click(function(){
		amount15.point --;
		$("#counter15").text(amount15.point);
	});
	
	$("#submit16").click(function(){
		amount16.name = $("#name16").val();
		$("#display16").removeClass("displaynone");
		$(".btn16").removeClass("displaynone");
		$("#submit16").addClass("displaynone");
		$("#name16").addClass("locked");
	});
	$("#ad2btn16").click(function(){
		amount16.point += 2;
		$("#counter16").text(amount16.point);
	});
	$("#ad1btn16").click(function(){
		amount16.point ++;
		$("#counter16").text(amount16.point);
	});
	$("#min1btn16").click(function(){
		amount16.point --;
		$("#counter16").text(amount16.point);
	});
	
	$("#submit17").click(function(){
		amount17.name = $("#name17").val();
		$("#display17").removeClass("displaynone");
		$(".btn17").removeClass("displaynone");
		$("#submit17").addClass("displaynone");
		$("#name17").addClass("locked");
	});
	$("#ad2btn17").click(function(){
		amount17.point += 2;
		$("#counter17").text(amount17.point);
	});
	$("#ad1btn17").click(function(){
		amount17.point ++;
		$("#counter17").text(amount17.point);
	});
	$("#min1btn17").click(function(){
		amount17.point --;
		$("#counter17").text(amount17.point);
	});
	
	$("#submit18").click(function(){
		amount18.name = $("#name18").val();
		$("#display18").removeClass("displaynone");
		$(".btn18").removeClass("displaynone");
		$("#submit18").addClass("displaynone");
		$("#name18").addClass("locked");
	});
	$("#ad2btn18").click(function(){
		amount18.point += 2;
		$("#counter18").text(amount18.point);
	});
	$("#ad1btn18").click(function(){
		amount18.point ++;
		$("#counter18").text(amount18.point);
	});
	$("#min1btn18").click(function(){
		amount18.point --;
		$("#counter18").text(amount18.point);
	});
	
	$("#submit19").click(function(){
		amount19.name = $("#name19").val();
		$("#display19").removeClass("displaynone");
		$(".btn19").removeClass("displaynone");
		$("#submit19").addClass("displaynone");
		$("#name19").addClass("locked");
	});
	$("#ad2btn19").click(function(){
		amount19.point += 2;
		$("#counter19").text(amount19.point);
	});
	$("#ad1btn19").click(function(){
		amount19.point ++;
		$("#counter19").text(amount19.point);
	});
	$("#min1btn19").click(function(){
		amount19.point --;
		$("#counter19").text(amount19.point);
	});
	
	$("#submit20").click(function(){
		amount20.name = $("#name20").val();
		$("#display20").removeClass("displaynone");
		$(".btn20").removeClass("displaynone");
		$("#submit20").addClass("displaynone");
		$("#name20").addClass("locked");
	});
	$("#ad2btn20").click(function(){
		amount20.point += 2;
		$("#counter20").text(amount20.point);
	});
	$("#ad1btn20").click(function(){
		amount20.point ++;
		$("#counter20").text(amount20.point);
	});
	$("#min1btn20").click(function(){
		amount20.point --;
		$("#counter20").text(amount20.point);
	});
	
	$("#submit21").click(function(){
		amount21.name = $("#name21").val();
		$("#display21").removeClass("displaynone");
		$(".btn21").removeClass("displaynone");
		$("#submit21").addClass("displaynone");
		$("#name21").addClass("locked");
	});
	$("#ad2btn21").click(function(){
		amount21.point += 2;
		$("#counter21").text(amount21.point);
	});
	$("#ad1btn21").click(function(){
		amount21.point ++;
		$("#counter21").text(amount21.point);
	});
	$("#min1btn21").click(function(){
		amount21.point --;
		$("#counter21").text(amount21.point);
	});
	
	$("#submit22").click(function(){
		amount22.name = $("#name22").val();
		$("#display22").removeClass("displaynone");
		$(".btn22").removeClass("displaynone");
		$("#submit22").addClass("displaynone");
		$("#name22").addClass("locked");
	});
	$("#ad2btn22").click(function(){
		amount22.point += 2;
		$("#counter22").text(amount22.point);
	});
	$("#ad1btn22").click(function(){
		amount22.point ++;
		$("#counter22").text(amount22.point);
	});
	$("#min1btn22").click(function(){
		amount22.point --;
		$("#counter22").text(amount22.point);
	});
	
	$("#submit23").click(function(){
		amount23.name = $("#name23").val();
		$("#display23").removeClass("displaynone");
		$(".btn23").removeClass("displaynone");
		$("#submit23").addClass("displaynone");
		$("#name23").addClass("locked");
	});
	$("#ad2btn23").click(function(){
		amount23.point += 2;
		$("#counter23").text(amount23.point);
	});
	$("#ad1btn23").click(function(){
		amount23.point ++;
		$("#counter23").text(amount23.point);
	});
	$("#min1btn23").click(function(){
		amount23.point --;
		$("#counter23").text(amount23.point);
	});
	
	$("#submit24").click(function(){
		amount24.name = $("#name24").val();
		$("#display24").removeClass("displaynone");
		$(".btn24").removeClass("displaynone");
		$("#submit24").addClass("displaynone");
		$("#name24").addClass("locked");
	});
	$("#ad2btn24").click(function(){
		amount24.point += 2;
		$("#counter24").text(amount24.point);
	});
	$("#ad1btn24").click(function(){
		amount24.point ++;
		$("#counter24").text(amount24.point);
	});
	$("#min1btn24").click(function(){
		amount24.point --;
		$("#counter24").text(amount24.point);
	});
	
	$("#submit25").click(function(){
		amount25.name = $("#name25").val();
		$("#display25").removeClass("displaynone");
		$(".btn25").removeClass("displaynone");
		$("#submit25").addClass("displaynone");
		$("#name25").addClass("locked");
	});
	$("#ad2btn25").click(function(){
		amount25.point += 2;
		$("#counter25").text(amount25.point);
	});
	$("#ad1btn25").click(function(){
		amount25.point ++;
		$("#counter25").text(amount25.point);
	});
	$("#min1btn25").click(function(){
		amount25.point --;
		$("#counter25").text(amount25.point);
	});
	
	$("#submit26").click(function(){
		amount26.name = $("#name26").val();
		$("#display26").removeClass("displaynone");
		$(".btn26").removeClass("displaynone");
		$("#submit26").addClass("displaynone");
		$("#name26").addClass("locked");
	});
	$("#ad2btn26").click(function(){
		amount26.point += 2;
		$("#counter26").text(amount26.point);
	});
	$("#ad1btn26").click(function(){
		amount26.point ++;
		$("#counter26").text(amount26.point);
	});
	$("#min1btn26").click(function(){
		amount26.point --;
		$("#counter26").text(amount26.point);
	});
	
	$("#submit27").click(function(){
		amount27.name = $("#name27").val();
		$("#display27").removeClass("displaynone");
		$(".btn27").removeClass("displaynone");
		$("#submit27").addClass("displaynone");
		$("#name27").addClass("locked");
	});
	$("#ad2btn27").click(function(){
		amount27.point += 2;
		$("#counter27").text(amount27.point);
	});
	$("#ad1btn27").click(function(){
		amount27.point ++;
		$("#counter27").text(amount27.point);
	});
	$("#min1btn27").click(function(){
		amount27.point --;
		$("#counter27").text(amount27.point);
	});
	
	$("#submit28").click(function(){
		amount28.name = $("#name28").val();
		$("#display28").removeClass("displaynone");
		$(".btn28").removeClass("displaynone");
		$("#submit28").addClass("displaynone");
		$("#name28").addClass("locked");
	});
	$("#ad2btn28").click(function(){
		amount28.point += 2;
		$("#counter28").text(amount28.point);
	});
	$("#ad1btn28").click(function(){
		amount28.point ++;
		$("#counter28").text(amount28.point);
	});
	$("#min1btn28").click(function(){
		amount28.point --;
		$("#counter28").text(amount28.point);
	});
	
	$("#submit29").click(function(){
		amount29.name = $("#name29").val();
		$("#display29").removeClass("displaynone");
		$(".btn29").removeClass("displaynone");
		$("#submit29").addClass("displaynone");
		$("#name29").addClass("locked");
	});
	$("#ad2btn29").click(function(){
		amount29.point += 2;
		$("#counter29").text(amount29.point);
	});
	$("#ad1btn29").click(function(){
		amount29.point ++;
		$("#counter29").text(amount29.point);
	});
	$("#min1btn29").click(function(){
		amount29.point --;
		$("#counter29").text(amount29.point);
	});
	
	$("#submit30").click(function(){
		amount30.name = $("#name30").val();
		$("#display30").removeClass("displaynone");
		$(".btn30").removeClass("displaynone");
		$("#submit30").addClass("displaynone");
		$("#name30").addClass("locked");
	});
	$("#ad2btn30").click(function(){
		amount30.point += 2;
		$("#counter30").text(amount30.point);
	});
	$("#ad1btn30").click(function(){
		amount30.point ++;
		$("#counter30").text(amount30.point);
	});
	$("#min1btn30").click(function(){
		amount30.point --;
		$("#counter30").text(amount30.point);
	});
	
	$("#showranking").click(function(){
		allamount.sort(function(a, b) {
			return (a.point > b.point) ? -1 : 1;  //オブジェクトの昇順ソート
		});
		$("#1st").text("1位：" + allamount[0].name + "(" + allamount[0].point + "ポイント)");
		$("#2nd").text("2位：" + allamount[1].name + "(" + allamount[1].point + "ポイント)");
		$("#3rd").text("3位：" + allamount[2].name + "(" + allamount[2].point + "ポイント)");
		$("#4th").text("4位：" + allamount[3].name + "(" + allamount[3].point + "ポイント)");
		$("#5th").text("5位：" + allamount[4].name + "(" + allamount[4].point + "ポイント)");
		$("#6th").text("6位：" + allamount[5].name + "(" + allamount[5].point + "ポイント)");
		$("#7th").text("7位：" + allamount[6].name + "(" + allamount[6].point + "ポイント)");
		$("#8th").text("8位：" + allamount[7].name + "(" + allamount[7].point + "ポイント)");
		$("#9th").text("9位：" + allamount[8].name + "(" + allamount[8].point + "ポイント)");
		$("#10th").text("10位：" + allamount[9].name + "(" + allamount[9].point + "ポイント)");
		$("#11th").text("11位：" + allamount[10].name + "(" + allamount[10].point + "ポイント)");
		$("#12th").text("12位：" + allamount[11].name + "(" + allamount[11].point + "ポイント)");
		$("#13th").text("13位：" + allamount[12].name + "(" + allamount[12].point + "ポイント)");
		$("#14th").text("14位：" + allamount[13].name + "(" + allamount[13].point + "ポイント)");
		$("#15th").text("15位：" + allamount[14].name + "(" + allamount[14].point + "ポイント)");
		$("#16th").text("16位：" + allamount[15].name + "(" + allamount[15].point + "ポイント)");
		$("#17th").text("17位：" + allamount[16].name + "(" + allamount[16].point + "ポイント)");
		$("#18th").text("18位：" + allamount[17].name + "(" + allamount[17].point + "ポイント)");
		$("#19th").text("19位：" + allamount[18].name + "(" + allamount[18].point + "ポイント)");
		$("#20th").text("20位：" + allamount[19].name + "(" + allamount[19].point + "ポイント)");
		$("#21st").text("21位：" + allamount[20].name + "(" + allamount[20].point + "ポイント)");
		$("#22nd").text("22位：" + allamount[21].name + "(" + allamount[21].point + "ポイント)");
		$("#23rd").text("23位：" + allamount[22].name + "(" + allamount[22].point + "ポイント)");
		$("#24th").text("24位：" + allamount[23].name + "(" + allamount[23].point + "ポイント)");
		$("#25th").text("25位：" + allamount[24].name + "(" + allamount[24].point + "ポイント)");
		$("#26th").text("26位：" + allamount[25].name + "(" + allamount[25].point + "ポイント)");
		$("#27th").text("27位：" + allamount[26].name + "(" + allamount[26].point + "ポイント)");
		$("#28th").text("28位：" + allamount[27].name + "(" + allamount[27].point + "ポイント)");
		$("#29th").text("29位：" + allamount[28].name + "(" + allamount[28].point + "ポイント)");
		$("#30th").text("30位：" + allamount[29].name + "(" + allamount[29].point + "ポイント)");
	});
	
});






