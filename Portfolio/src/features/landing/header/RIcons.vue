<template>
    <img class="absolute clock pop-2" src="/public/landing/clock.png" alt="">
    <img class="absolute tags rotate" src="/public/landing/tags.png" alt="">
    <img class="absolute phone pop" src="/public/landing/phone.png" alt="">
    <img class="w-full" src="/landing/bg.png" alt="">
</template>
<style scoped>
 
.clock {
    width: 8.44%;
    left: 38.4%;
    top: 17.3%;
}

.clock {
    width: 8.44%;
    left: 38.4%;
    top: 17.3%;
}

.tags {
    width: 10.8%;
    left: 67.65%;
    top: 25.6%;
}
.phone {
    width: 7.4%;
    left: 26%;
    top: 56%;
}

.rotate{
	animation-name: rotate;
	-webkit-animation-name: rotate;	

	animation-duration: 5.5s;	
	-webkit-animation-duration: 5.5s;

	animation-iteration-count: infinite;
	-webkit-animation-iteration-count: infinite;	
}

.pop{
	animation-name: pop;
	-webkit-animation-name: pop;	

	animation-duration: 5.2s;	
	-webkit-animation-duration: 5.2s;
	
	animation-iteration-count: infinite;
	-webkit-animation-iteration-count: infinite;
}

@keyframes pop {
	0% {
		transform: scale(1);
	}
	60% {
		transform: scale(1);	
	}
	75% {
		transform: scale(1.08);
	}	
	90% {
		transform: scale(1);
	}	
	100% {
		transform: scale(1);
	}		
}

@keyframes rotate {
	0% {
		transform: rotate(0deg);	
	}
	100% {
		transform: rotate(360deg);
	}	
}

@keyframes pop-2 {
	0% {
		transform: scale(1);
	}
	20% {
		transform: scale(1);	
	}
	35% {
		transform: scale(1.15);
	}	
	50% {
		transform: scale(1);
	}	
	100% {
		transform: scale(1);
	}		
}

.pop-2{
	animation-name: pop-2;
	-webkit-animation-name: pop-2;	

	animation-duration: 4.3s;	
	-webkit-animation-duration: 4.3s;
	
	animation-iteration-count: infinite;
	-webkit-animation-iteration-count: infinite;
}

</style>