window.onload = function(){
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");

	var fond = new Image();
	var fond_1 = new Image();
	var fond2 = new Image();
	var fond2_1 = new Image();
	var perso = new Image();
	var perso2 = new Image();
	var ennemi = new Image();
	var ennemi2 = new Image();
	var coin = new Image();
	var potion = new Image();
	var clef = new Image();
	var ecranmortImg = new Image();
	var menuImg = new Image();
	var ecranvictoireImg = new Image();
	var coinson = new Audio();
	var potionson = new Audio();
	var mortson = new Audio();
	var victoireson = new Audio();
	var musique = new Audio();
	var x = 70;
	var y = 320.25;
	var y2=320.25;
	var droite = true;
	var clavier = new Clavier();
	var pas = 1;
	var saut = 0;
	var tourne=1;
	var bouge=1;
	var ramasse=false;
	var ramasse2=false;
	var ramasse3=false;
	var ramasse4=false;
	var ramasse5=false;
	var ramasse6=false;
	var ramasse7=false;
	var ramasse8=false;
	var ramasse9=false;
	var ramasse10=false;
	var ramasse11=false;
	var ramasse12=false;
	var ramasse13=false;
	var ramasse14=false;
	var ramasse15=false;
	var ramassePotion=false;
	var ramasseClef=false;
	var nbpiece=0;
	var salle=0;
	var sautfix=false;
	var menu=true;
	var ecranmort=false;
	var sonmort = true;
	var mort=0;
	var sonvictoire=false;
	var persoCouleur = perso;
	var fondCouleur = fond;
	var ecranvictoire = false;

	fond.src = "ressources/fond.png";
	fond_1.src = "ressources/fond_1.png";
	fond2.src = "ressources/fond2.png";
	fond2_1.src = "ressources/fond2_1.png";
	perso.src = "ressources/hero.png";
	perso2.src = "ressources/hero2.png";
	ennemi.src = "ressources/squelette1.png";
	ennemi2.src = "ressources/viking.png";
	coin.src = "ressources/coin.png";
	potion.src = "ressources/potion.png";
	clef.src = "ressources/clef.png";
	ecranmortImg.src = "ressources/ecranmort.png";
	ecranvictoireImg.src = "ressources/victoire.png";
	menuImg.src = "ressources/menu.png"
	coinson.src = "ressources/coinson.wav";
	potionson.src = "ressources/potionson.mp3";
	mortson.src = "ressources/mortson.mp3";
	victoireson.src = "ressources/victoire.mp3";
	musique.src = "ressources/musique.mp3";

	fond.onload = function(){
		setInterval(boucle,30);
	}
	
	function boucle(){
		// ---------------------------------------------------------------------------------------------------------------------------------------ECRAN D'ACCUEIL------------------------------------------------------------------------------------------------------------------------------------------
		if (menu==true) {
			ctx.drawImage(menuImg, 0,0,480,304);
		}
		if (clavier.espace && menu==true) {
			menu=false;
		}
		// ---------------------------------------------------------------------------------------------------------------------------------------ECRAN DE MORT--------------------------------------------------------------------------------------------------------------------------------------------
		if (ecranmort==true && menu==false && ecranvictoire==false) {
			ctx.drawImage(ecranmortImg, 0,0,480,304);
		}
		if (ecranmort==true && sonmort==true) {
			mortson.play();
			musique.pause();
			musique.currentTime = 0;
			sonmort=false
		}
		if (clavier.espace && ecranmort==true) {
			mortson.pause();
			mortson.currentTime = 0;
			salle=0;
			saut = 0;
			x = 70;
			y = 320.25;
			y2=320.25;
			sautfix=false;
			nbpiece=0;
			sonmort=true;
			ramasse=false;
			ramasse2=false;
			ramasse3=false;
			ramasse4=false;
			ramasse5=false;
			ramasse6=false;
			ramasse7=false;
			ramasse8=false;
			ramasse9=false;
			ramasse10=false;
			ramasse11=false;
			ramasse12=false;
			ramasse13=false;
			ramasse14=false;
			ramasse15=false;
			ramassePotion=false;
			persoCouleur=perso;
			fondCouleur = fond;
			ramasseClef=false;
			ecranmort=false;
		}
		// -------------------------------------------------------------------------------------------------------------------------ECRAN DE VICTOIRE--------------------------------------------------------------------------------------------------------------------
		if (ecranvictoire==true && menu==false && ecranmort==false) {
			ctx.drawImage(ecranvictoireImg, 0,0,480,304);
		}
		if (ecranvictoire==true && sonvictoire==true) {
			victoireson.play();
			musique.pause();
			musique.currentTime = 0;
			sonvictoire=false
		}
		if (clavier.echap && ecranvictoire==true) {
			victoireson.pause();
			victoireson.currentTime = 0;
			salle=0;
			saut = 0;
			x = 70;
			y = 320.25;
			y2=320.25;
			sautfix=false;
			vaincu=false;
			nbpiece=0;
			sonmort=true;
			ramasse=false;
			ramasse2=false;
			ramasse3=false;
			ramasse4=false;
			ramasse5=false;
			ramasse6=false;
			ramasse7=false;
			ramasse8=false;
			ramasse9=false;
			ramasse10=false;
			ramasse11=false;
			ramasse12=false;
			ramasse13=false;
			ramasse14=false;
			ramasse15=false;
			ramassePotion=false;
			persoCouleur=perso;
			fondCouleur = fond;
			ramasseClef=false;
			ecranmort=false;
			menu=true;
			ecranvictoire=false;
		}
		if (ecranmort==false && menu==false && ecranvictoire==false) {
			musique.play();
			// -------------------------------------------------------------------------------------------------------------------------------------DEPLACEMENT--------------------------------------------------------------------------------------------------------------------------------------------
			if (clavier.droite) {
				x+=5;
				pas++;
				droite = true;
			}
			else if (clavier.gauche){
					x-=5;
					pas++;
					droite = false;
			}
			if (clavier.haut && saut<=0){
				saut = 40;
			}
			if (saut>0){
				y= y2-90 + (saut-20)*(saut-20)/4;
				saut--;
			}
			if (pas>7){
				pas = 1;
			}
			// SPRITESHEET
			if (tourne<8) {
				tourne+=1;
			}
			else{
				tourne=1;
			}
			
			ctx.save();
			// --------------------------------------------------------------------------------------------------------------------------------DEFILEMENT------------------------------------------------------------------------------------------------------------------------------------------
			// SALLE 1 VERS 2
			if (x<481 && salle==0) {
				ctx.drawImage(fondCouleur, 0,0,2880,304);
			}
			else if (x>481 && salle==0){
				ctx.drawImage(fondCouleur, 480,0,2880,304,0,0,2880,304);
				x=2
				salle=1;
			}
			else if (salle==1) {
				ctx.drawImage(fondCouleur, 480,0,2880,304,0,0,2880,304);
			}
			if (x<1 && salle==1) {
				ctx.drawImage(fondCouleur, 0,0,2880,304);
				x=480;
				salle=0;
			}
			// SALLE 2 VERS 3
			if (x<481 && salle==1) {
				ctx.drawImage(fondCouleur, 480,0,2880,304,0,0,2880,304);
			}
			else if (x>481 && salle==1){
				ctx.drawImage(fondCouleur, 480*2,0,2880,304,0,0,2880,304);
				x=2
				salle=2;
			}
			else if (salle==2) {
				ctx.drawImage(fondCouleur, 480*2,0,2880,304,0,0,2880,304);
			}
			if (x<1 && salle==2) {
				ctx.drawImage(fondCouleur, 480,0,2880,304,0,0,2880,304);
				x=480;
				salle=1;
			}
			// SALLE 3 VERS 4
			if (x<460 && salle==2) {
				ctx.drawImage(fondCouleur, 480*2,0,2880,304,0,0,2880,304);
			}
			else if (x>481 && y>220 && salle==2){
				ctx.drawImage(fondCouleur, 480*3,0,2880,304,0,0,2880,304);
				x=2
				salle=3;
			}
			else if (salle==3) {
				ctx.drawImage(fondCouleur, 480*3,0,2880,304,0,0,2880,304);
			}
			if (x<1 && y>220 && salle==3) {
				ctx.drawImage(fondCouleur, 480*2,0,2880,304,0,0,2880,304);
				x=480;
				salle=2;
			}
			// SALLE 4 VERS 5
			if (x<460 && salle==3) {
				ctx.drawImage(fondCouleur, 480*3,0,2880,304,0,0,2880,304);
			}
			else if (x>481 && salle==3){
				ctx.drawImage(fondCouleur, 480*4,0,2880,304,0,0,2880,304);
				x=2
				salle=4;
			}
			else if (salle==4) {
				ctx.drawImage(fondCouleur, 480*4,0,2880,304,0,0,2880,304);
			}
			if (x<1 && salle==4) {
				ctx.drawImage(fondCouleur, 480*3,0,2880,304,0,0,2880,304);
				x=480;
				salle=3;
			}
			// SALLE 5 VERS 6
			if (x<460 && salle==4) {
				ctx.drawImage(fondCouleur, 480*4,0,2880,304,0,0,2880,304);
			}
			else if (x>481 && salle==4){
				ctx.drawImage(fondCouleur, 480*5,0,2880,304,0,0,2880,304);
				x=2
				salle=5;
			}
			else if (salle==5) {
				ctx.drawImage(fondCouleur, 480*5,0,2880,304,0,0,2880,304);
			}
			if (x<1 && salle==5) {
				ctx.drawImage(fondCouleur, 480*4,0,2880,304,0,0,2880,304);
				x=480;
				salle=4;
			}
			// -------------------------------------------------------------------------------------------------------------------------------------COLLISIONS---------------------------------------------------------------------------------------------------------------------------------------------
			//MUR DE GAUCHE DE LA SALLE 1
			if (x<30 && salle==0) {
				x=30
			}
			// SLOW FALLING
			if (y2>y+0.25) { 
				y+=5
			}
			if (y2<y+0.25) { 
				y-=5
			}
			//MARCHE DE LA SALLE 1
			if (x>260 && y>285 && sautfix==false && salle==0) {
				y2=295;
				saut=0;
				sautfix=true;
			}
			else if (x<260 && y>284 && sautfix==true && salle==0) {
				y2=325;
				sautfix=false;
			}
			if (x>255 && y>285 && sautfix==false && salle==0) {
				x=255;
			}
			//MARCHE DE LA SALLE 2
			if (x<35 && y>285 && sautfix==false && salle==1) {
				y2=295;
				saut=0;
				sautfix=true
			}
			else if (x>35 && y>284 && sautfix==true && salle==1) {
				y2=325;
				sautfix=false;
			}
			if (x<40 && y>284 && sautfix==false && salle==1) {
				x=40;
			}
			// PLATEFORME DE LA SALLE 2
			if (x>125 && x<245 && y>260 && y<280 && sautfix==false && salle==1) {
				y2=260;
				saut=0;
				sautfix=true
			}
			else if (x<129 && x>119 && y<280 && sautfix==true && salle==1) {
				y2=325;
				saut=0;
				sautfix=false;
			}
			else if (x<266 && x>250 && y<280 && sautfix==true && salle==1) {
				y2=325;
				saut=0;
				sautfix=false;
			}
			//TROU DE LA SALLE 2
			if (x>170 && x<217 && y<600 && y>310 && salle==1) {
				y2+=5;
			}
			if (x<170 && y>330 && salle==1) {
				x=170;
				y2+=5;
			}
			if (x>217 && y>330 && salle==1) {
				x=217;
				y2+=5;
			}
			//ESCALIERS SALLE 2
			if (clavier.droite && x>340 && x<425 && y2>280 && salle==1) {
				y2-=3
			}
			else if (clavier.gauche && x>340 && x<415  && y2<325 && salle==1) {
				y2+=3
			}
			//MUR DU FOND SALLE 3
			if (x>450 && x<460 && y<220 && salle==2) {
				x=450
			}
			//MUR DE GAUCHE SALLE 4
			if (x<25 && y<220 && salle==3) {
				x=25
			}
			// PLATEFORME 1 DE LA SALLE 4
			if (x>247 && x<330 && y<230 && y>225 && sautfix==false && salle==3) {
				y2=225;
				saut=0;
				sautfix=true
			}
			else if (x<247+4 && x>247+4-10 && y<225 && sautfix==true && salle==3) {
				y2=280;
				saut=0;
				sautfix=false;
			}
			else if (x<330+11 && x>330+1 && y<225 && sautfix==true && salle==3) {
				y2=280;
				saut=0;
				sautfix=false;
			}
			// PLATEFORME 2 DE LA SALLE 4
			if (x>347 && x<432 && y<190 && y>180 && sautfix==false && salle==3) {
				y2=185;
				saut=0;
				sautfix=true
			}
			if (x<347+4 && x>347+4-10 && y<190 && sautfix==true && salle==3) {
				y2=280;
				saut=0;
				sautfix=false;
			}
			if (x<432+11 && x>432+4-10 && y<190 && sautfix==true && salle==3) {
				y2=280;
				saut=0;
				sautfix=false;
			}
			// PLATEFORME 1 DE LA SALLE 5
			if (x>22 && x<115 && y<190 && y>180 && sautfix==false && salle==4) {
				y2=180;
				saut=0;
				sautfix=true
			}
			else if (x<22+4 && x>22+4-10 && y<190 && sautfix==true && salle==4) {
				y2=280;
				saut=0;
				sautfix=false;
			}
			else if (x<115+11 && x>115+1 && y<225 && sautfix==true && salle==4) {
				y2=280;
				saut=0;
				sautfix=false;
			}
			// PLATEFORME 2 DE LA SALLE 5
			if (x>170 && x<250 && y<165 && y>155 && sautfix==false && salle==4) {
				y2=155;
				saut=0;
				sautfix=true
			}
			else if (x<170+4 && x>170+4-10 && y<165 && sautfix==true && salle==4) {
				y2=280;
				saut=0;
				sautfix=false;
			}
			else if (x<250+11 && x>250+1 && y<165 && sautfix==true && salle==4) {
				y2=280;
				saut=0;
				sautfix=false;
			}
			// PLATEFORME 3 DE LA SALLE 5
			if (x>317 && x<400 && y<190 && y>180 && sautfix==false && salle==4) {
				y2=185;
				saut=0;
				sautfix=true
			}
			else if (x<317+4 && x>317+4-10 && y<190 && sautfix==true && salle==4) {
				y2=280;
				saut=0;
				sautfix=false;
			}
			else if (x<400+11 && x>400+1 && y<190 && sautfix==true && salle==4) {
				y2=280;
				saut=0;
				sautfix=false;
			}
			// PLATEFORME 4 DE LA SALLE 5
			if (x>442 && y<160 && y>150 && sautfix==false && salle==4) {
				y2=150;
				saut=0;
				sautfix=true
			}
			else if (x<442+4 && x>442+4-8 && y<160 && sautfix==true && salle==4) {
				y2=280;
				saut=0;
				sautfix=false;
			}
			// PLATEFORME 1 DE LA SALLE 6
			if (x<45 && y<165 && y>150 && sautfix==false && salle==5) {
				y2=150;
				saut=0;
				sautfix=true
			}
			if (x<45+4 && x>45+4-8 && y<160 && sautfix==true && salle==5) {
				y2=280;
				saut=0;
				sautfix=false;
			}
			// PLATEFORME 2 DE LA SALLE 6
			if (x>82 && x<162 && y<130 && y>120 && sautfix==false && salle==5) {
				y2=120;
				saut=0;
				sautfix=true
			}
			else if (x<82+4 && x>82+4-10 && y<130 && sautfix==true && salle==5) {
				y2=280;
				saut=0;
				sautfix=false;
			}
			if (x<162+11 && x>162+1 && y<130 && sautfix==true && salle==5) {
				y2=280;
				saut=0;
				sautfix=false;
			}
			//ESCALIERS SALLE 6
				if (clavier.droite && x>275 && x<355 && y2>195 && salle==5) {
					y2-=5
				}
				else if (clavier.gauche && x>265 && x<345 && y2<280 && salle==5) {
					y2+=5
				}
			//MUR DE DROITE SALLE 6
			if (x>477 && salle==5) {
				x=477
			}
			//PORTE DE FIN SALLE 6
			if (x>370 && x<400 && y>150 && salle==5) {
				if (ramasseClef==true) {
					ecranvictoire=true;
					sonvictoire=true;
				}
			}
			// -------------------------------------------------------------------------------------------------------------------------------------ENNEMIS-----------------------------------------------------------------------------------------------------------------------------------------------
			// salle SPRITESHEET DES ENNEMIS
			if (bouge<7) {
				bouge+=1;
			}
			else{
				bouge=1;
			}
			// ENNEMI 1ERE SALLE
			if (salle==0) {
				ctx.drawImage(ennemi,bouge*64,0,64,34,295,205,64,34);
			}
			if (x>295+15 && x<295+64-11 && y>205+55 && salle==0) {
				ecranmort=true;
				mort++
			}
			// ENNEMI 2EME SALLE
			if (salle==1) {
				ctx.drawImage(ennemi,bouge*64,0,64,34,250,235,64,34);
			}
			if (x>250+15 && x<250+64-11 && y>235+55 && salle==1) {
				ecranmort=true;
				mort++
			}
			//TROU 2EME SALLE
			if (y>450) {
				ecranmort=true;
				mort++
			}
			// 1ER ENNEMI 3EME SALLE
			if (salle==2) {
				ctx.drawImage(ennemi,bouge*64,0,64,34,115,190,64,34);
			}
			if (x>115+18 && x<110+64-11 && y>190+55 && salle==2) {
				ecranmort=true;
				mort++
			}
			// 2EME ENNEMI 3EME SALLE
			if (salle==2) {
				ctx.drawImage(ennemi,bouge*64,0,64,34,150,190,64,34);
			}
			if (x>150+18 && x<150+64-11 && y>190+55 && salle==2) {
				ecranmort=true;
				mort++
			}
			// 3EME ENNEMI 3EME SALLE
			if (salle==2) {
				ctx.drawImage(ennemi,bouge*64,0,64,34,185,190,64,34);
			}
			if (x>185+18 && x<185+64-11 && y>190+55 && salle==2) {
				ecranmort=true;
				mort++
			}
			// 4EME ENNEMI 3EME SALLE
			if (salle==2) {
				ctx.drawImage(ennemi,bouge*64,0,64,34,220,190,64,34);
			}
			if (x>220+18 && x<220+64-11 && y>190+55 && salle==2) {
				ecranmort=true;
				mort++
			}
			// 5EME ENNEMI 3EME SALLE
			if (salle==2) {
				ctx.drawImage(ennemi,bouge*64,0,64,34,290,190,64,34);
			}
			if (x>290+18 && x<290+64-11 && y>190+55 && salle==2) {
				ecranmort=true;
				mort++
			}
			// 6EME ENNEMI 3EME SALLE
			if (salle==2) {
				ctx.drawImage(ennemi,bouge*64,0,64,34,360,190,64,34);
			}
			if (x>360+18 && x<360+64-11 && y>190+55 && salle==2) {
				ecranmort=true;
				mort++
			}
			// 1ER ENNEMI 4EME SALLE
			if (salle==3) {
				ctx.drawImage(ennemi2,bouge*21,0,21,31,180,190,21,31);
			}
			if (x>180 && x<180+21 && y>190+55 && salle==3) {
				ecranmort=true;
				mort++
			}
			// 1ER ENNEMI 5EME SALLE
			if (salle==4) {
				ctx.drawImage(ennemi2,bouge*21,0,21,31,132,190,21,31);
			}
			if (x>132 && x<132+21 && y>190+55 && salle==4) {
				ecranmort=true;
				mort++
			}
			// 2EME ENNEMI 5EME SALLE
			if (salle==4) {
				ctx.drawImage(ennemi2,bouge*21,0,21,31,270,190,21,31);
			}
			if (x>270 && x<270+21 && y>190+55 && salle==4) {
				ecranmort=true;
				mort++
			}
			// 3EME ENNEMI 5EME SALLE
			if (salle==4) {
				ctx.drawImage(ennemi2,bouge*21,0,21,31,412,190,21,31);
			}
			if (x>412 && x<412+21 && y>190+55 && salle==4) {
				ecranmort=true;
				mort++
			}
			// -------------------------------------------------------------------------------------------------------------------------------------COLLECTIBLES-------------------------------------------------------------------------------------------------------------------------------------------
			// PIECES
			// PREMIERE SALLE
			if (x>400 && x<400+25 && y>200+55 && ramasse==false && salle==0) {
				coinson.currentTime=0;
				coinson.play();
				ramasse=true;
				nbpiece++
			}
			if (ramasse==false && salle==0) {
				ctx.drawImage(coin,tourne*16,0,16,16,400,200,20,20);
			}
			if (x>130 && x<130+20 && y>235+55 && ramasse2==false && salle==0) {
				coinson.currentTime=0;
				coinson.play();
				ramasse2=true;
				nbpiece++
			}
			if (ramasse2==false && salle==0) {
				ctx.drawImage(coin,tourne*16,0,16,16,130,235,20,20);
			}
			// DEUXIEME SALLE
			if (x>130 && x<130+20 && y>235+55 && ramasse3==false && salle==1) {
				coinson.currentTime=0;
				coinson.play();
				ramasse3=true;
				nbpiece++
			}
			if (ramasse3==false && salle==1) {
				ctx.drawImage(coin,tourne*16,0,16,16,130,235,20,20);
			}
			if (x>170 && x<175+20 && y>175+55 && y<175+2*55 && ramasse4==false && salle==1) {
				coinson.currentTime=0;
				coinson.play();
				ramasse4=true;
				nbpiece++
			}
			if (ramasse4==false && salle==1) {
				ctx.drawImage(coin,tourne*16,0,16,16,175,170,20,20);
			}
			// TROISIEME SALLE
			if (x>130 && x<130+20 && y>165+55 && ramasse5==false && salle==2) {
				coinson.currentTime=0;
				coinson.play();
				ramasse5=true;
				nbpiece++
			}
			if (ramasse5==false && salle==2) {
				ctx.drawImage(coin,tourne*16,0,16,16,130,165,20,20);
			}

			if (x>280 && x<280+20 && y>165+55 && ramasse6==false && salle==2) {
				coinson.currentTime=0;
				coinson.play();
				ramasse6=true;
				nbpiece++
			}
			if (ramasse6==false && salle==2) {
				ctx.drawImage(coin,tourne*16,0,16,16,280,165,20,20);
			}

			if (x>200 && x<200+20 && y>135+55 && ramasse7==false && salle==2) {
				coinson.currentTime=0;
				coinson.play();
				ramasse7=true;
				nbpiece++
			}
			if (ramasse7==false && salle==2) {
				ctx.drawImage(coin,tourne*16,0,16,16,200,135,20,20);
			}
			// SALLE 4
			if (x>55 && x<55+20 && y>185+55 && ramasse8==false && salle==3) {
				coinson.currentTime=0;
				coinson.play();
				ramasse8=true;
				nbpiece++
			}
			if (ramasse8==false && salle==3) {
				ctx.drawImage(coin,tourne*16,0,16,16,55,185,20,20);
			}

			if (x>275 && x<275+20 && y>130+55 && y<130+55+55 && ramasse9==false && salle==3) {
				coinson.currentTime=0;
				coinson.play();
				ramasse9=true;
				nbpiece++
			}
			if (ramasse9==false && salle==3) {
				ctx.drawImage(coin,tourne*16,0,16,16,275,130,20,20);
			}

			if (x>455 && x<455+20 && y>50+55 && y<50+55+55 && ramasse10==false && salle==3) {
				coinson.currentTime=0;
				coinson.play();
				ramasse10=true;
				nbpiece++
			}
			if (ramasse10==false && salle==3) {
				ctx.drawImage(coin,tourne*16,0,16,16,455,50,20,20);
			}
			// SALLE 5
			if (x>125 && x<125+20 && y>50+55 && y<50+55+55 && ramasse11==false && salle==4) {
				coinson.currentTime=0;
				coinson.play();
				ramasse11=true;
				nbpiece++
			}
			if (ramasse11==false && salle==4) {
				ctx.drawImage(coin,tourne*16,0,16,16,125,50,20,20);
			}

			if (x>275 && x<275+20 && y>65+55 && y<65+55+55 && ramasse12==false && salle==4) {
				coinson.currentTime=0;
				coinson.play();
				ramasse12=true;
				nbpiece++
			}
			if (ramasse12==false && salle==4) {
				ctx.drawImage(coin,tourne*16,0,16,16,275,65,20,20);
			}

			if (x>410 && x<410+20 && y>65+55 && y<65+55+55 && ramasse13==false && salle==4) {
				coinson.currentTime=0;
				coinson.play();
				ramasse13=true;
				nbpiece++
			}
			if (ramasse13==false && salle==4) {
				ctx.drawImage(coin,tourne*16,0,16,16,410,65,20,20);
			}
			//SALLE 6
			if (x>205 && x<205+20 && y>185+55 && y<185+55+55 && ramasse14==false && salle==5) {
				coinson.currentTime=0;
				coinson.play();
				ramasse14=true;
				nbpiece++
			}
			if (ramasse14==false && salle==5) {
				ctx.drawImage(coin,tourne*16,0,16,16,205,185,20,20);
			}

			if (x>425 && x<425+20 && y>100+55 && y<100+55+55 && ramasse15==false && salle==5) {
				coinson.currentTime=0;
				coinson.play();
				ramasse15=true;
				nbpiece++
			}
			if (ramasse15==false && salle==5) {
				ctx.drawImage(coin,tourne*16,0,16,16,425,100,20,20);
			}
			//POTION
			if (x>107 && x<107+30 && y>180+55 && ramassePotion==false && salle==3) {
				potionson.currentTime=0;
				potionson.play();
				ramassePotion=true;
				persoCouleur=perso2;
				fondCouleur=fond2;
			}
			if (ramassePotion==false && salle==3) {
				ctx.drawImage(potion,0,0,380,350,107,180,30,30);
			}
			//CLEF
			if (x>105 && x<100+16 && y>40+55 && y<40+55+55 && ramasseClef==false && salle==5) {
				ramasseClef=true;
				if (fondCouleur==fond) {
					fondCouleur=fond_1;
				}
				else{
					fondCouleur=fond2_1;
				}
			}
			if (ramasseClef==false && salle==5) {
				ctx.drawImage(clef,0,0,16,16,105,40,20,20);
			}
			// -----------------------------------------------------------------------------------------------------------------------------RETOURNER LE PERSONNAGE----------------------------------------------------------------------------------------------------------------------------------------
			ctx.translate(x,y)
			if (droite == false)
				ctx.scale(-1,1);
				ctx.drawImage(persoCouleur,pas*48,0,48,48,-35,-100,48,48);
			ctx.restore();
		}
		// ----------------------------------------------------------------------------------------------------------------------------AFFICHER LES COORDONNEES--------------------------------------------------------------------------------------------------------------------------------------------

		document.querySelector('h3').textContent = "Pieces : " + nbpiece;
		document.querySelector('h4').textContent = "Morts : " + mort;
	}}