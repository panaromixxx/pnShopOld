function show_time() {
	let data = new Date();
	let hour = data.getHours();
	let minute = data.getMinutes();
	let second = data.getSeconds();
	sec=zero_time(hour)
	zxc=zero_time(minute)
	// console.log(hour,minute,second);
	setTimeout(show_time,1000);
	document.getElementById("time").innerText = data+" "+hour+":"+minute
}
show_time();
 
function zero_time(){
	if (number<10) {
		return "0"+number
	}
	else{
		return number
	}
}