function header(){
	$.ajax({
		url: "../template/header.html",
		cache: false,
		success: function(html){
			document.write(html);
		}
	});
}