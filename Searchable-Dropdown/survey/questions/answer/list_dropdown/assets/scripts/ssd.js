

function initSSD(sgq) {
	
	var sgqArr = sgq.split('X');
	var qID = sgqArr[2];
	var thisQuestion = $('#question'+qID);
	
	// Initiate select2
	$('select.form-control', thisQuestion).select2();
}

$(document).on('ready pjax:scriptcomplete',function(){
});