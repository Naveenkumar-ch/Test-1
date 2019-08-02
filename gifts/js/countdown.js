setInterval(
	function time() {
		var d = new Date();
		var past = d.getHours();
		var hours = 24 - d.getHours();
		var min = 60 - d.getMinutes();
		if ((min + '').length == 1) {
			min = '0' + min;
		}
		var sec = 60 - d.getSeconds();
		if ((sec + '').length == 1) {
			sec = '0' + sec;
		}

		jQuery('.2345').html('Closed in' + ':' + (min-1)+ ':' + sec);

		//Previous Details
		for (var i=1;i<=past;){
			 jQuery('#ti'+i).html("winner:" + i);
			 jQuery('#im'+i).html("<img src='gifts/images/avatar.png' height='50px' width='40px' alt='red'>");
			 console.log("#ti:"+i +"--past:"+past);
			 i++;
		}
		for (var i=past+2;i<=(past+hours); i++){
			 jQuery('#ti'+i).html( "opents at"+" "+(i-1)+":00"+" "+"to"+(i)+":00");
			 jQuery('#im'+i).html("");
			 console.log("#ti:"+i +"--past:"+past);
		}
		
		
		
	   
	},
1000);