
$(document).ready(function(){
	b();
	$("#testtable").wrap("<marquee direction=right style='height:999px'><div id=nue>");

});

function b(){
	var j=1;
	$("table").append("<tr><th>a</th><th>b</th><th>c</th><th>d</th></tr>");
	for(i=1;i<=10;i++){

		$("table").append("<tr><td>"+(j++)+"</td><td>"+(j++)+"</td><td>"+(j++)+"</td><td>"+(j++)+"</td></tr>");
	}
	
}


$(function() {
	$("table[id=qqq] td").click(function(){
		// alert($(this).parent().prev().html());

		if($(this).parent().index()==1){
			$(this).parent().next().after($(this).parent());
		
		}else{
			$(this).parent().prev().before($(this).parent());

		}

		
	});

	$("table[id=qqq] tr:nth-child(2) td").css("background-color","red");
	$("table[id=qqq] tr:nth-child(3) td").css("background-color","blue");
	$("table[id=qqq] tr:nth-child(4) td").css("background-color","yellow");
	$("table[id=qqq] tr:nth-child(5) td").css("background-color","grey");
	$("table[id=qqq] tr:nth-child(6) td").css("background-color","black");
	$("table[id=qqq] tr:nth-child(7) td").css("background-color","orange");
	$("table[id=qqq] tr:nth-child(8) td").css("background-color","pink");
	$("table[id=qqq] tr:nth-child(9) td").css("background-color","violet");
	$("table[id=qqq] tr:nth-child(10) td").css("background-color","white");
	$("table[id=qqq] tr:nth-child(11) td").css("background-color","green");
	$("table[id=qqq] tr td:nth-child(2)").css("background-color","green");
});



