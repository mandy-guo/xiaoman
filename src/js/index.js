// JavaScript Document

window.onload=function(){
	//导航
	var oUl=document.getElementById('ul1');
	var aLi=oUl.children;
	var oBox=aLi[aLi.length-1];

	var iNow=0;

	for(var i=0; i<aLi.length-1; i++){
		aLi[i].index=i;
		aLi[i].onmouseover=function(){
			//oBox.style.left=this.offsetLeft+'px';
			doMove(oBox,this.offsetLeft);
		};

		aLi[i].onmouseout=function(){
			doMove(oBox,iNow*aLi[0].offsetWidth);
		};

		aLi[i].onclick=function(){
			iNow=this.index;
		};
	}
	
	
	//幻灯片
	var oBigPic=document.getElementById('big_pic');
	var oBtnNext=getByClass(oBigPic,'next')[0];
	var oBtnPrev=getByClass(oBigPic,'prev')[0];
	var oMarkLeft=getByClass(oBigPic,'mark_left')[0];
	var oMarkRight=getByClass(oBigPic,'mark_right')[0];
	
	//左右按钮
	oBtnNext.onmouseover=oMarkRight.onmouseover=function ()
	{
		move(oBtnNext,{opacity:1});	
	};
	oBtnNext.onmouseout=oMarkRight.onmouseout=function ()
	{
		move(oBtnNext,{opacity:0});	
	};
	oBtnPrev.onmouseover=oMarkLeft.onmouseover=function ()
	{
		move(oBtnPrev,{ opacity:1});	
	};
	oBtnPrev.onmouseout=oMarkLeft.onmouseout=function ()
	{
		move(oBtnPrev,{opacity:0});	
	};
	
	//大图切换
	
	var oSmallPic=document.getElementById('small_pic');
	var aLiSmall=oSmallPic.getElementsByTagName('li');
	var aLiBig=oBigPic.getElementsByTagName('li');
	var now=0;
	
	for(var i=0;i<aLiSmall.length;i++)
	{
		(function (index){
			aLiSmall[i].onmouseover=function ()
			{
				now=index;
				tab();
				
			};	
		})(i)
	}
	
	oBtnPrev.onclick=function ()
	{
		now--;
		if(now==-1)
		{
			now=aLiBig.length-1;	
		}	
		tab();
	};
	
	oBtnNext.onclick=function ()
	{
		now++;
		if(now==aLiBig.length)
		{
			now=0;	
		}	
		tab();
	};
	function tab()
	{
		for(var i=0;i<aLiSmall.length;i++)
		{
			aLiSmall[i].className='';
			aLiBig[i].style.ZIndex=1;
			move(aLiBig[i],{opacity:0});	
		}
		this.className='active';
		aLiBig[now].style.ZIndex=2;
		move(aLiBig[now],{opacity:1});
	}
	
	
};	




