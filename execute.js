function login(){
	var account = "學號@cc.ncu.edu.tw";
	var pwd = "NCUPortal的密碼";
	if (document.location.host == "192.168.3.254:444"){ //Library_wireless
		document.location.href = "192.168.2.8";
	}
	if (document.location.host == "192.168.3.254"){ //Library_wireless
		password_name.value = account;
		password_pwd.value = pwd;
		password_submitBtn.click();
		alert("連線成功");
	}else if (document.location.host == "wlan.cc.ncu.edu.tw"){ // TANetRoming、NCUFree
		user1.value = account;
		password.value = pwd;
		document.getElementsByClassName("button")[0].click();
		alert("連線成功");
	}else if (document.location.host == "ubnt.csie.ncu.edu.tw"){ // NCU-CSIE
		username.value = account;
		password.value = pwd;
		document.getElementById("submit").click();
		alert("連線成功");
	}
}
setTimeout(login(), 200);