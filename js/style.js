function toggle() {
		var b=document.getElementById('b');
		if(b.style.display=='block'){
			b.style.display='none';
		}else{
			b.style.display='block';
		}
	}
			var oNext = document.getElementById('next');
			var oUl = document.getElementById('ul');
			var aaa = 0;
			oNext.onclick = function () {
				aaa++;
				oUl.style.left = -aaa*500+'px';
			}
			var oLast = document.getElementById('last');
			var oUl = document.getElementById('ul');
			var aaa = 0;
			oLast.onclick = function () {
				aaa--;
				oUl.style.left = -aaa*500+'px';
			}


			var oXia = document.getElementById('xia');
			var oNl = document.getElementById('ni');
			var aaa = 0;
			oXia.onclick = function () {
				aaa++;
				oNl.style.left = -aaa*500+'px';
			}
			var oShang = document.getElementById('shang');
			var oNl = document.getElementById('ni');
			var aaa = 0;
			oShang.onclick = function () {
				aaa--;
				oNl.style.left = -aaa*500+'px';
			}
			function $(id) {
		return document.getElementById(id);
	}
	var lis=$('tabs').getElementsByTagName('li');
	var divs=$('con').getElementsByTagName('div');
	for(var i=0;i<lis.length;i++){
		lis[i].index=i;
		lis[i].onclick=function(){
			for(var i=0;i<lis.length;i++){
				lis[i].className='';
			}
			this.className='on';
			for(var i=0;i<divs.length;i++){
				divs[i].className='';
			}
			divs[this.index].className='show';
		}
	}
function $(id) {
		return document.getElementById(id);
	}
	var liy=$('taby').getElementsByTagName('li');
	var divy=$('cons').getElementsByTagName('div');
	for(var i=0;i<liy.length;i++){
		liy[i].index=i;
		liy[i].onclick=function(){
			for(var i=0;i<liy.length;i++){
				liy[i].className='';
			}
			this.className='on';
			for(var i=0;i<divy.length;i++){
				divy[i].className='';
			}
			divy[this.index].className='show';
		}
	}