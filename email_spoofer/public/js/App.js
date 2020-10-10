//////////////////////
const _topNav_=document.querySelector('.topNav');
const _menu_=document.querySelector('.topNav .menu');
const _iconMenu_=document.querySelector('nav.topNav a.iconMenu');
_iconMenu_.addEventListener('click',function(){
	_menu_.classList.toggle('activeMenu');
	_topNav_.classList.forEach(z=>{
		switch(z){
			case 'topNav-1':_menu_.classList.toggle('top-1');break;
			case 'topNav-2':_menu_.classList.toggle('top-2');break;
			case 'topNav-3':_menu_.classList.toggle('top-3');break;
			case 'topNav-4':_menu_.classList.toggle('top-4');break;
			case 'topNav-5':_menu_.classList.toggle('top-5');
		}
	});
});
document.querySelector('#app').addEventListener('click',()=>{
	_menu_.classList.remove('activeMenu');
	_topNav_.classList.forEach(z=>{
		switch(z){
			case 'topNav-1':_menu_.classList.remove('top-1');break;
			case 'topNav-2':_menu_.classList.remove('top-2');break;
			case 'topNav-3':_menu_.classList.remove('top-3');break;
			case 'topNav-4':_menu_.classList.remove('top-4');break;
			case 'topNav-5':_menu_.classList.remove('top-5');
		}
	});
});
//////////////////////
const brand=document.querySelector('.topNav .brand');
brand.classList.forEach(z=>{
	switch(z){
		case 'black':
			_topNav_.style.setProperty('--border-color','#000');break;
		case 'dark':
			_topNav_.style.setProperty('--border-color','#222');break;
		case 'info':
			_topNav_.style.setProperty('--border-color','#00b1d1');break;
		case 'primary':
			_topNav_.style.setProperty('--border-color','#008080');break;
		case 'success':
			_topNav_.style.setProperty('--border-color','#4cbb17');break;
		case 'danger':
			_topNav_.style.setProperty('--border-color','#c04000');break;
		case 'warning':
			_topNav_.style.setProperty('--border-color','#daa520');break;
		case 'white':
			_topNav_.style.setProperty('--border-color','#fff');break;
		case 'light':
			_topNav_.style.setProperty('--border-color','#ddd');
	}
});
//////////////////////
const btns=document.querySelectorAll('button');
btns.forEach((btn,i)=>{
	btn.classList.forEach(c=>{
		switch(c){
			case 'br1-dark':case 'br2-dark':case 'br3-dark':
				btns[i].classList.add('txt-dark');
			break;
			case 'br1-black':case 'br2-black':case 'br3-black':
				btns[i].classList.add('txt-black');
			break;
			////////////////
			case 'br1-info':case 'br2-info':case 'br3-info':
				btns[i].classList.add('txt-info');
			break;
			////////////////
			case 'br1-success':case 'br2-success':case 'br3-success':
				btns[i].classList.add('txt-success');
			break;
			////////////////
			case 'br1-danger':case 'br2-danger':case 'br3-danger':
				btns[i].classList.add('txt-danger');
			break;
			////////////////
			case 'br1-warning':case 'br2-warning':case 'br3-warning':
				btns[i].classList.add('txt-warning');
			break;
			////////////////
			case 'br1-primary':case 'br2-primary':case 'br3-primary':
				btns[i].classList.add('txt-primary');
			break;
			////////////////
			case 'br1-light':case 'br2-light':case 'br3-light':
				btns[i].classList.add('txt-light');
			break;
			case 'br1-white':case 'br2-white':case 'br3-white':
				btns[i].classList.add('txt-white');
		}
	});
});
//////////////////////
const app=document.querySelector('#app');
const animeGenerator=function(bg=['dark','dark','dark'],count=4){
	let animeBox1,animeBoxId1,animeBoxClass1;
	animeBox1=document.createElement('div');
	animeBoxId1=document.createAttribute('id');animeBoxId1.value="animeBox1";
	animeBoxClass1=document.createAttribute('class');animeBoxClass1.value="zn";
	animeBox1.setAttributeNode(animeBoxId1);
	animeBox1.setAttributeNode(animeBoxClass1);
	app.appendChild(animeBox1);
	//////////////////////
	let animeBox2,animeBoxId2,animeBoxClass2;
	animeBox2=document.createElement('div');
	animeBoxId2=document.createAttribute('id');animeBoxId2.value="animeBox2";
	animeBoxClass2=document.createAttribute('class');animeBoxClass2.value="zn";
	animeBox2.setAttributeNode(animeBoxId2);
	animeBox2.setAttributeNode(animeBoxClass2);
	app.appendChild(animeBox2);
	//////////////////////
	let animeBox3,animeBoxId3,animeBoxClass3;
	animeBox3=document.createElement('div');
	animeBoxId3=document.createAttribute('id');animeBoxId3.value="animeBox3";
	animeBoxClass3=document.createAttribute('class');animeBoxClass3.value="zn";
	animeBox3.setAttributeNode(animeBoxId3);
	animeBox3.setAttributeNode(animeBoxClass3);
	app.appendChild(animeBox3);
	//////////////////////
	let animeBox4,animeBoxId4,animeBoxClass4;
	animeBox4=document.createElement('div');
	animeBoxId4=document.createAttribute('id');animeBoxId4.value="animeBox4";
	animeBoxClass4=document.createAttribute('class');animeBoxClass4.value="zn";
	animeBox4.setAttributeNode(animeBoxId4);
	animeBox4.setAttributeNode(animeBoxClass4);
	app.appendChild(animeBox4);
	//////////////////////
	for(let i=1;i<=count;i++){
		bg.forEach(z=>{
			let hexagonElement=document.createElement('div');
			let hexagonClass=document.createAttribute('class');
			hexagonClass.value=`hexagon ${z} rotate-45 zn`;
			hexagonElement.setAttributeNode(hexagonClass);
			document.querySelector(`#app #animeBox${i}`).appendChild(hexagonElement);
			// anime({
			// 	targets:hexagon,
			// 	keyframes:[
			// 		{translateX:anime.stagger(
			// 			( (hexagon.parentElement.id)==1 || (hexagon.parentElement.id)==4 )?'-5vw':'5vw',
			// 			{from:'first'})},
			// 		{translateY:anime.stagger(
			// 			( (hexagon.parentElement.id)==1 || (hexagon.parentElement.id)==3 )?'-7vh':'7vh',
			// 			{from:'first'})},
			// 		{scale:['0.7','1.5']}
			// 	],
			// 	rotate:( (hexagon.parentElement.id)==1 || (hexagon.parentElement.id)==2 )?'-0.7turn':'3turn',
			// 	delay:anime.stagger('333',{from:'first'}),
			// 	duration:2222,
			// 	easing: 'easeInOutSine',
			// 	loop:true,
			// 	direction:'alternate'
			// });
		});
	}
};
animeGenerator(['primary','info','primary']);
//////////////////////
const hexagon=document.querySelectorAll('.hexagon');
hexagon.forEach((z,i)=>{
	z.classList.forEach(c=>{
		switch(c){
			case 'info':
				hexagon[i].style.setProperty('--before-bg','#00b1d1');
				hexagon[i].style.setProperty('--after-bg','#00b1d1');
			break;
			case 'primary':
				hexagon[i].style.setProperty('--before-bg','#008080');
				hexagon[i].style.setProperty('--after-bg','#008080');
			break;
			case 'success':
				hexagon[i].style.setProperty('--before-bg','#4cbb17');
				hexagon[i].style.setProperty('--after-bg','#4cbb17');
			break;
			case 'danger':
				hexagon[i].style.setProperty('--before-bg','#c04000');
				hexagon[i].style.setProperty('--after-bg','#c04000');
			break;
			case 'warning':
				hexagon[i].style.setProperty('--before-bg','#daa520');
				hexagon[i].style.setProperty('--after-bg','#daa520');
			break;
			case 'light':
				hexagon[i].style.setProperty('--before-bg','#ddd');
				hexagon[i].style.setProperty('--after-bg','#ddd');
			break;
			case 'dark':
				hexagon[i].style.setProperty('--before-bg','#222');
				hexagon[i].style.setProperty('--after-bg','#222');
			break;
			case 'white':
				hexagon[i].style.setProperty('--before-bg','#fff');
				hexagon[i].style.setProperty('--after-bg','#fff');
			break;
			case 'black':
				hexagon[i].style.setProperty('--before-bg','#000');
				hexagon[i].style.setProperty('--after-bg','#000');
			break;
		}
	});
});
//////////////////////
const hexagon1=document.querySelectorAll('#animeBox1 .hexagon');
const hexagonAnime1=anime({
	targets:hexagon1,
	keyframes:[
		{translateX:anime.stagger('-5vw',{from:'first'})},
		{translateY:anime.stagger('-7vh',{from:'first'})},
		{scale:['0.7','1.5']}
	],
	rotate:'0.7turn',
	delay:anime.stagger('333',{from:'first'}),
	duration:2222,
	easing: 'easeInOutSine',
	loop:true,
	direction:'alternate'
});
//////////////////////
const hexagon2=document.querySelectorAll('#animeBox2 .hexagon');
const hexagonAnime2=anime({
	targets:hexagon2,
	keyframes:[
		{translateX:anime.stagger('5vw',{from:'first'})},
		{translateY:anime.stagger('7vh',{from:'first'})},
		{scale:['0.7','1.5']}
	],
	rotate:'0.7turn',
	delay:anime.stagger('333',{from:'first'}),
	duration:2222,
	easing: 'easeInOutSine',
	loop:true,
	direction:'alternate'
});
//////////////////////
const hexagon3=document.querySelectorAll('#animeBox3 .hexagon');
const hexagonAnime3=anime({
	targets:hexagon3,
	keyframes:[
		{translateX:anime.stagger('5vw',{from:'first'})},
		{translateY:anime.stagger('-7vh',{from:'first'})},
		{scale:['0.7','1.5']}
	],
	rotate:'-0.7turn',
	delay:anime.stagger('333',{from:'first'}),
	duration:2222,
	easing: 'easeInOutSine',
	loop:true,
	direction:'alternate'
});
//////////////////////
const hexagon4=document.querySelectorAll('#animeBox4 .hexagon');
const hexagonAnime4=anime({
	targets:hexagon4,
	keyframes:[
		{translateX:anime.stagger('-5vw',{from:'first'})},
		{translateY:anime.stagger('7vh',{from:'first'})},
		{scale:['0.7','1.5']}
	],
	rotate:'-0.7turn',
	delay:anime.stagger('333',{from:'first'}),
	duration:2222,
	easing: 'easeInOutSine',
	loop:true,
	direction:'alternate'
});
//////////////////////