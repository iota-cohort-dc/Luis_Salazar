var coin = 10;

function randomchance(coin){
	var winningNum = 50
	while(coin > 0){
		if(winningNum == Math.floor(Math.random()*100)+1){
			coin = coin + Math.floor(Math.random()*50)+51;
			coin = coin - 1;
			console.log(coin);
		} else {
			coin = coin -1;
			if(coin == 0){
				console.log(coin);
			}
		}
	}
}
randomchance(20);
