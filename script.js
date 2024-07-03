//your JS code here. If required.
document.addEventListener('DOMContentLoaded', ()=>{
	const buttons = document.querySelectorAll('.btn');
	const audioPlay = document.querySelector('.audio');
	buttons.forEach((button)=>{
		button.addEventListener('click',(e)=>{
			let sourceData=e.target.id;
			if(sourceData==='stop') stop();
			else playAudio(sourceData);
		})
	})
	function playAudio(sourceData){
		audioPlay.src=sourceData;
		audioPlay.play();
	}
	function stop(){
		audioPlay.pause();
	}
})