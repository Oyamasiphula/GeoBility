$(document).ready(function(){
	$("#searchform").keyup(function(){
		var searchVar = $("#searchform").val();
		$.get("/issues/search/" + searchVar, function(results){
			$("#searchp").html(results);
			console.log(results);
		});
	});
});

