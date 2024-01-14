let opt = document.getElementById('settings');
let list = document.getElementsByTagName('li');

opt.addEventListener('click', () => {
	list[0].classList.toggle('visible');
	list[1].classList.toggle('visible');
	list[2].classList.toggle('visible');
	list[3].classList.toggle('visible');
	list[4].classList.toggle('visible');
})

let count = 0;
let a = 500;
let b = 1;

list[0].addEventListener('click', () => {
	a = 500;
	b = 1;
})

list[1].addEventListener('click', () => {
	a = 200;
	b = 1;
})

list[2].addEventListener('click', () => {
	a = 100;
	b = 201;
})

list[3].addEventListener('click', () => {
	a = 100;
	b = 301;
})

list[4].addEventListener('click', () => {
	a = 50;
	b = 401;
})

function tab1() {
	for (let i = 0; i < tab_els.length; i++) {
		tab_els[i].classList.remove('att');
	}			
	
}

let trying = document.getElementById('try');
let hear = document.getElementById('hear');
let show = document.getElementById('show');
let result = document.getElementById('result');

let type = document.getElementById('type2');
let gradation = document.getElementById('gradation2');
let rating = document.getElementById('rating2');
let trad = document.getElementById('translation2');
let files = document.getElementById('files');
let tab_els = document.getElementsByTagName('td');

hear.addEventListener('click', () => {
	files.play();
})

function gen() {
	count = Math.floor(Math.random() * a + b);
	files.setAttribute('src', `aud${count}.mp3`);
	switch (count) {
		case 1:
		result.innerHTML = 'osa';
		trad.innerHTML = 'part';
		type.innerHTML = '4 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '1/200';
		break;
		case 2:
		result.innerHTML = 'talo';
		trad.innerHTML = 'house';
		type.innerHTML = '2 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '2/200';	
		break;
		case 3:
		result.innerHTML = 'teksti';
		trad.innerHTML = 'text';
		type.innerHTML = '1 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '3/200';	
		break;	
		case 4:
		result.innerHTML = 'aika';
		trad.innerHTML = 'time';
		type.innerHTML = '5 (noun)';
		gradation.innerHTML = 'IK-J';
		rating.innerHTML = '4/200';
		break;
		case 5:
		result.innerHTML = 'kaupunki';
		trad.innerHTML = 'city';
		type.innerHTML = '1 (noun)';
		gradation.innerHTML = 'NK-NG';
		rating.innerHTML = '5/200';		
		break;
		case 6:
		result.innerHTML = 'omena';
		trad.innerHTML = 'apple';
		type.innerHTML = '7 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '6/200';		
		break;
		case 7:
		result.innerHTML = 'poika';
		trad.innerHTML = 'boy';
		type.innerHTML = '4 (noun)';
		gradation.innerHTML = 'IK-J';
		rating.innerHTML = '7/200';			
		break;
		case 8:
		result.innerHTML = 'auto';
		trad.innerHTML = 'car';
		type.innerHTML = '2 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '8/200';	
		break;	
		case 9:
		result.innerHTML = 'kuva';
		trad.innerHTML = 'image';
		type.innerHTML = '4 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '9/200';			
		break;
		case 10:
		result.innerHTML = 'elämä';
		trad.innerHTML = 'life';
		type.innerHTML = '4 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '10/200';	
		break;	
		case 11:
		result.innerHTML = 'käsi';
		trad.innerHTML = 'hand';
		type.innerHTML = '19 (noun)';
		gradation.innerHTML = 'T-D';
		rating.innerHTML = '11/200';		
		break;				
		case 12:
		result.innerHTML = 'alue';
		trad.innerHTML = 'area';
		type.innerHTML = '8 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '12/200';		
		break;
		case 13:
		result.innerHTML = 'kieli';
		trad.innerHTML = 'language';
		type.innerHTML = '14 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '13/200';		
		break;		
		case 14:
		result.innerHTML = 'tie';
		trad.innerHTML = 'way, road';
		type.innerHTML = '18 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '14/200';		
		break;		
		case 15:
		result.innerHTML = 'tyttö';
		trad.innerHTML = 'girl';
		type.innerHTML = '2 (noun)';
		gradation.innerHTML = 'TT-T';
		rating.innerHTML = '15/200';		
		break;		
		case 16:
		result.innerHTML = 'koulu';
		trad.innerHTML = 'school';
		type.innerHTML = '2 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '16/200';		
		break;		
		case 17:
		result.innerHTML = 'asia';
		trad.innerHTML = 'thing';
		type.innerHTML = '7 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '17/200';		
		break;		
		case 18:
		result.innerHTML = 'päivä';
		trad.innerHTML = 'day';
		type.innerHTML = '4 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '18/200';		
		break;		
		case 19:
		result.innerHTML = 'maailma';
		trad.innerHTML = 'world';
		type.innerHTML = '7 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '19/200';		
		break;		
		case 20:
		result.innerHTML = 'huone';
		trad.innerHTML = 'room';
		type.innerHTML = '8 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '20/200';		
		break;				
		case 21:
		result.innerHTML = 'mies';
		trad.innerHTML = 'man';
		type.innerHTML = 'irregular (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '21/200';		
		break;				
		case 22:
		result.innerHTML = 'lista';
		trad.innerHTML = 'list';
		type.innerHTML = '5 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '22/200';		
		break;
		case 23:
		result.innerHTML = 'nimi';
		trad.innerHTML = 'name';
		type.innerHTML = '11 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '23/200';		
		break;		
		case 24:
		result.innerHTML = 'vuosi';
		trad.innerHTML = 'year';
		type.innerHTML = '19 (noun)';
		gradation.innerHTML = 'T-D';
		rating.innerHTML = '24/200';		
		break;		
		case 25:
		result.innerHTML = 'sana';
		trad.innerHTML = 'word';
		type.innerHTML = '5 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '25/200';		
		break;		
		case 26:
		result.innerHTML = 'ovi';
		trad.innerHTML = 'door';
		type.innerHTML = '11 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '26/200';		
		break;		
		case 27:
		result.innerHTML = 'koira';
		trad.innerHTML = 'dog';
		type.innerHTML = '4 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '27/200';		
		break;		
		case 28:
		result.innerHTML = 'maa';
		trad.innerHTML = 'country';
		type.innerHTML = '15 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '28/200';		
		break;		
		case 29:
		result.innerHTML = 'musiikki';
		trad.innerHTML = 'music';
		type.innerHTML = '1 (noun)';
		gradation.innerHTML = 'KK-K';
		rating.innerHTML = '29/200';		
		break;		
		case 30:
		result.innerHTML = 'lapsi';
		trad.innerHTML = 'child';
		type.innerHTML = 'irregular (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '30/200';		
		break;				
		case 31:
		result.innerHTML = 'paikka';
		trad.innerHTML = 'place';
		type.innerHTML = '5 (noun)';
		gradation.innerHTML = 'KK-K';
		rating.innerHTML = '31/200';		
		break;				
		case 32:
		result.innerHTML = 'kukka';
		trad.innerHTML = 'flower';
		type.innerHTML = '4 (noun)';
		gradation.innerHTML = 'KK-K';
		rating.innerHTML = '32/200';		
		break;
		case 33:
		result.innerHTML = 'nainen';
		trad.innerHTML = 'woman';
		type.innerHTML = '3 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '33/200';		
		break;		
		case 34:
		result.innerHTML = 'väri';
		trad.innerHTML = 'color';
		type.innerHTML = '1 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '34/200';		
		break;		
		case 35:
		result.innerHTML = 'video';
		trad.innerHTML = 'video';
		type.innerHTML = '2 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '35/200';		
		break;		
		case 36:
		result.innerHTML = 'artikkeli';
		trad.innerHTML = 'article';
		type.innerHTML = '1 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '36/200';		
		break;		
		case 37:
		result.innerHTML = 'kahvila';
		trad.innerHTML = 'café';
		type.innerHTML = '7 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '37/200';		
		break;		
		case 38:
		result.innerHTML = 'pöytä';
		trad.innerHTML = 'table';
		type.innerHTML = '4 (noun)';
		gradation.innerHTML = 'T-D';
		rating.innerHTML = '38/200';		
		break;		
		case 39:
		result.innerHTML = 'luonto';
		trad.innerHTML = 'nature';
		type.innerHTML = '2 (noun)';
		gradation.innerHTML = 'NT-NN';
		rating.innerHTML = '39/200';		
		break;		
		case 40:
		result.innerHTML = 'apu';
		trad.innerHTML = 'help';
		type.innerHTML = '2 (noun)';
		gradation.innerHTML = 'P-V';
		rating.innerHTML = '40/200';		
		break;			
		case 41:
		result.innerHTML = 'kissa';
		trad.innerHTML = 'cat';
		type.innerHTML = '5 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '41/200';		
		break;				
		case 42:
		result.innerHTML = 'sivu';
		trad.innerHTML = 'page';
		type.innerHTML = '2 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '42/200';		
		break;
		case 43:
		result.innerHTML = 'puhelin';
		trad.innerHTML = 'telephone';
		type.innerHTML = '13 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '43/200';		
		break;		
		case 44:
		result.innerHTML = 'idea';
		trad.innerHTML = 'idea';
		type.innerHTML = '7 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '44/200';		
		break;		
		case 45:
		result.innerHTML = 'ikkuna';
		trad.innerHTML = 'window';
		type.innerHTML = '7 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '45/200';		
		break;		
		case 46:
		result.innerHTML = 'ruoka';
		trad.innerHTML = 'food';
		type.innerHTML = '4 (noun)';
		gradation.innerHTML = '<s>K</s>';
		rating.innerHTML = '46/200';		
		break;		
		case 47:
		result.innerHTML = 'dokumentti';
		trad.innerHTML = 'document';
		type.innerHTML = '1 (noun)';
		gradation.innerHTML = 'TT-T';
		rating.innerHTML = '47/200';		
		break;		
		case 48:
		result.innerHTML = 'banaani';
		trad.innerHTML = 'banana';
		type.innerHTML = '1 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '48/200';		
		break;		
		case 49:
		result.innerHTML = 'kirkko';
		trad.innerHTML = 'church';
		type.innerHTML = '2 (noun)';
		gradation.innerHTML = 'KK-K';
		rating.innerHTML = '49/200';		
		break;		
		case 50:
		result.innerHTML = 'luku';
		trad.innerHTML = 'number';
		type.innerHTML = '2 (noun)';
		gradation.innerHTML = 'K-V';
		rating.innerHTML = '50/200';		
		break;				
		case 51:
		result.innerHTML = 'onnellisuus';
		trad.innerHTML = 'happiness';
		type.innerHTML = '9 (noun)';
		gradation.innerHTML = 'T-D';
		rating.innerHTML = '51/200';		
		break;				
		case 52:
		result.innerHTML = 'veli';
		trad.innerHTML = 'brother';
		type.innerHTML = '11 (noun)';
		gradation.innerHTML = 'L-LJ';
		rating.innerHTML = '52/200';		
		break;
		case 53:
		result.innerHTML = 'liiketoiminta';
		trad.innerHTML = 'business';
		type.innerHTML = '5 (noun)';
		gradation.innerHTML = 'NT-NN';
		rating.innerHTML = '53/200';		
		break;		
		case 54:
		result.innerHTML = 'sydän';
		trad.innerHTML = 'heart';
		type.innerHTML = '13 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '54/200';		
		break;		
		case 55:
		result.innerHTML = 'taivas';
		trad.innerHTML = 'sky';
		type.innerHTML = '12 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '55/200';		
		break;		
		case 56:
		result.innerHTML = 'ryhmä';
		trad.innerHTML = 'group';
		type.innerHTML = '4 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '56/200';		
		break;		
		case 57:
		result.innerHTML = 'isä';
		trad.innerHTML = 'father';
		type.innerHTML = '4 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '57/200';		
		break;		
		case 58:
		result.innerHTML = 'kirja';
		trad.innerHTML = 'book';
		type.innerHTML = '5 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '58/200';		
		break;		
		case 59:
		result.innerHTML = 'pää';
		trad.innerHTML = 'head';
		type.innerHTML = '15 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '59/200';		
		break;		
		case 60:
		result.innerHTML = 'rakkaus';
		trad.innerHTML = 'love';
		type.innerHTML = '9 (noun)';
		gradation.innerHTML = 'T-D';
		rating.innerHTML = '60/200';		
		break;				
		case 61:
		result.innerHTML = 'lause';
		trad.innerHTML = 'sentence';
		type.innerHTML = '8 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '61/200';		
		break;				
		case 62:
		result.innerHTML = 'vesi';
		trad.innerHTML = 'water';
		type.innerHTML = '19 (noun)';
		gradation.innerHTML = 'T-D';
		rating.innerHTML = '62/200';		
		break;
		case 63:
		result.innerHTML = 'kysymys';
		trad.innerHTML = 'question';
		type.innerHTML = '6 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '63/200';		
		break;		
		case 64:
		result.innerHTML = 'yö';
		trad.innerHTML = 'night';
		type.innerHTML = '18 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '64/200';		
		break;		
		case 65:
		result.innerHTML = 'silta';
		trad.innerHTML = 'bridge';
		type.innerHTML = '5 (noun)';
		gradation.innerHTML = 'LT-LL';
		rating.innerHTML = '65/200';		
		break;		
		case 66:
		result.innerHTML = 'opettaja';
		trad.innerHTML = 'teacher';
		type.innerHTML = '4 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '66/200';		
		break;		
		case 67:
		result.innerHTML = 'syy';
		trad.innerHTML = 'reason';
		type.innerHTML = '15 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '67/200';		
		break;		
		case 68:
		result.innerHTML = 'äiti';
		trad.innerHTML = 'mother';
		type.innerHTML = '1 (noun)';
		gradation.innerHTML = 'T-D';
		rating.innerHTML = '68/200';		
		break;		
		case 69:
		result.innerHTML = 'osoite';
		trad.innerHTML = 'address';
		type.innerHTML = '8 (noun)';
		gradation.innerHTML = 'T-TT';
		rating.innerHTML = '69/200';		
		break;		
		case 70:
		result.innerHTML = 'raha';
		trad.innerHTML = 'money';
		type.innerHTML = '5 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '70/200';		
		break;			
		case 71:
		result.innerHTML = 'substantiivi';
		trad.innerHTML = 'noun';
		type.innerHTML = '1 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '71/200';		
		break;				
		case 72:
		result.innerHTML = 'meri';
		trad.innerHTML = 'sea';
		type.innerHTML = '14 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '72/200';		
		break;
		case 73:
		result.innerHTML = 'tavoite';
		trad.innerHTML = 'goal';
		type.innerHTML = '8 (noun)';
		gradation.innerHTML = 'T-TT';
		rating.innerHTML = '73/200';		
		break;		
		case 74:
		result.innerHTML = 'tuoli';
		trad.innerHTML = 'chair';
		type.innerHTML = '1 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '74/200';		
		break;		
		case 75:
		result.innerHTML = 'esimerkki';
		trad.innerHTML = 'example';
		type.innerHTML = '1 (noun)';
		gradation.innerHTML = 'KK-K';
		rating.innerHTML = '75/200';		
		break;		
		case 76:
		result.innerHTML = 'vuori';
		trad.innerHTML = 'mountain';
		type.innerHTML = '14 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '76/200';		
		break;		
		case 77:
		result.innerHTML = 'toimisto';
		trad.innerHTML = 'office';
		type.innerHTML = '2 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '77/200';		
		break;		
		case 78:
		result.innerHTML = 'ilta';
		trad.innerHTML = 'evening';
		type.innerHTML = '5 (noun)';
		gradation.innerHTML = 'LT-LL';
		rating.innerHTML = '78/200';		
		break;		
		case 79:
		result.innerHTML = 'sisko';
		trad.innerHTML = 'sister';
		type.innerHTML = '2 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '79/200';		
		break;		
		case 80:
		result.innerHTML = 'ravintola';
		trad.innerHTML = 'restaurant';
		type.innerHTML = '7 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '80/200';		
		break;			
		case 81:
		result.innerHTML = 'verbi';
		trad.innerHTML = 'verb';
		type.innerHTML = '1 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '81/200';		
		break;				
		case 82:
		result.innerHTML = 'jalka';
		trad.innerHTML = 'leg, foot';
		type.innerHTML = '5 (noun)';
		gradation.innerHTML = '<s>K</s>';
		rating.innerHTML = '82/200';		
		break;
		case 83:
		result.innerHTML = 'menestys';
		trad.innerHTML = 'success';
		type.innerHTML = '6 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '83/200';		
		break;		
		case 84:
		result.innerHTML = 'paita';
		trad.innerHTML = 'shirt';
		type.innerHTML = '5 (noun)';
		gradation.innerHTML = 'T-D';
		rating.innerHTML = '84/200';		
		break;		
		case 85:
		result.innerHTML = 'leipä';
		trad.innerHTML = 'bread';
		type.innerHTML = '4 (noun)';
		gradation.innerHTML = 'P-V';
		rating.innerHTML = '85/200';		
		break;		
		case 86:
		result.innerHTML = 'kuppi';
		trad.innerHTML = 'cup';
		type.innerHTML = '1 (noun)';
		gradation.innerHTML = 'PP-P';
		rating.innerHTML = '86/200';		
		break;		
		case 87:
		result.innerHTML = 'hinta';
		trad.innerHTML = 'price';
		type.innerHTML = '5 (noun)';
		gradation.innerHTML = 'NT-NN';
		rating.innerHTML = '87/200';		
		break;		
		case 88:
		result.innerHTML = 'keittiö';
		trad.innerHTML = 'kitchen';
		type.innerHTML = '10 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '88/200';		
		break;		
		case 89:
		result.innerHTML = 'laulu';
		trad.innerHTML = 'song';
		type.innerHTML = '2 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '89/200';		
		break;		
		case 90:
		result.innerHTML = 'kuukausi';
		trad.innerHTML = 'month';
		type.innerHTML = '19 (noun)';
		gradation.innerHTML = 'T-D';
		rating.innerHTML = '90/200';		
		break;				
		case 91:
		result.innerHTML = 'tuli';
		trad.innerHTML = 'fire';
		type.innerHTML = '14 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '91/200';		
		break;				
		case 92:
		result.innerHTML = 'lääkäri';
		trad.innerHTML = 'doctor';
		type.innerHTML = '1 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '92/200';		
		break;
		case 93:
		result.innerHTML = 'työ';
		trad.innerHTML = 'work';
		type.innerHTML = '18 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '93/200';		
		break;		
		case 94:
		result.innerHTML = 'vastaus';
		trad.innerHTML = 'answer';
		type.innerHTML = '6 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '94/200';		
		break;		
		case 95:
		result.innerHTML = 'aamiainen';
		trad.innerHTML = 'breakfast';
		type.innerHTML = '3 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '95/200';		
		break;		
		case 96:
		result.innerHTML = 'kirjasto';
		trad.innerHTML = 'library';
		type.innerHTML = '2 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '96/200';		
		break;		
		case 97:
		result.innerHTML = 'sää';
		trad.innerHTML = 'weather';
		type.innerHTML = '15 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '97/200';		
		break;		
		case 98:
		result.innerHTML = 'insinööri';
		trad.innerHTML = 'engineer';
		type.innerHTML = '1 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '98/200';		
		break;		
		case 99:
		result.innerHTML = 'lippu';
		trad.innerHTML = 'ticket';
		type.innerHTML = '2 (noun)';
		gradation.innerHTML = 'PP-P';
		rating.innerHTML = '99/200';		
		break;		
		case 100:
		result.innerHTML = 'viesti';
		trad.innerHTML = 'message';
		type.innerHTML = '1 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '100/200';		
		break;			
		case 101:
		result.innerHTML = 'aamu';
		trad.innerHTML = 'morning';
		type.innerHTML = '2 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '101/200';		
		break;				
		case 102:
		result.innerHTML = 'kävely';
		trad.innerHTML = 'walk';
		type.innerHTML = '2 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '102/200';		
		break;
		case 103:
		result.innerHTML = 'länsi';
		trad.innerHTML = 'west';
		type.innerHTML = '24 (noun)';
		gradation.innerHTML = 'NT-NN';
		rating.innerHTML = '103/200';		
		break;		
		case 104:
		result.innerHTML = 'silmä';
		trad.innerHTML = 'eye';
		type.innerHTML = '4 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '104/200';		
		break;		
		case 105:
		result.innerHTML = 'perhe';
		trad.innerHTML = 'family';
		type.innerHTML = '8 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '105/200';		
		break;		
		case 106:
		result.innerHTML = 'valo';
		trad.innerHTML = 'light';
		type.innerHTML = '2 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '106/200';		
		break;		
		case 107:
		result.innerHTML = 'opiskelija';
		trad.innerHTML = 'student';
		type.innerHTML = '7 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '107/200';		
		break;		
		case 108:
		result.innerHTML = 'laukku';
		trad.innerHTML = 'bag';
		type.innerHTML = '2 (noun)';
		gradation.innerHTML = 'KK-K';
		rating.innerHTML = '108/200';		
		break;		
		case 109:
		result.innerHTML = 'jänis';
		trad.innerHTML = 'rabbit';
		type.innerHTML = '6 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '109/200';		
		break;		
		case 110:
		result.innerHTML = 'tilaisuus';
		trad.innerHTML = 'opportunity';
		type.innerHTML = '9 (noun)';
		gradation.innerHTML = 'T-D';
		rating.innerHTML = '110/200';		
		break;			
		case 111:
		result.innerHTML = 'puutarha';
		trad.innerHTML = 'garden';
		type.innerHTML = '5 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '111/200';		
		break;				
		case 112:
		result.innerHTML = 'bussi';
		trad.innerHTML = 'bus';
		type.innerHTML = '1 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '112/200';		
		break;
		case 113:
		result.innerHTML = 'ystävä';
		trad.innerHTML = 'friend';
		type.innerHTML = '4 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '113/200';		
		break;		
		case 114:
		result.innerHTML = 'aurinko';
		trad.innerHTML = 'sun';
		type.innerHTML = '1 (noun)';
		gradation.innerHTML = 'NK-NG';
		rating.innerHTML = '114/200';		
		break;		
		case 115:
		result.innerHTML = 'uni';
		trad.innerHTML = 'dream';
		type.innerHTML = '14 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '115/200';		
		break;		
		case 116:
		result.innerHTML = 'haku';
		trad.innerHTML = 'search';
		type.innerHTML = '2 (noun)';
		gradation.innerHTML = '<s>K</s>';
		rating.innerHTML = '116/200';		
		break;		
		case 117:
		result.innerHTML = 'sade';
		trad.innerHTML = 'rain';
		type.innerHTML = '8 (noun)';
		gradation.innerHTML = 'D-T';
		rating.innerHTML = '117/200';		
		break;		
		case 118:
		result.innerHTML = 'palvelu';
		trad.innerHTML = 'service';
		type.innerHTML = '2 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '118/200';		
		break;		
		case 119:
		result.innerHTML = 'viikko';
		trad.innerHTML = 'week';
		type.innerHTML = '2 (noun)';
		gradation.innerHTML = 'KK-K';
		rating.innerHTML = '119/200';		
		break;		
		case 120:
		result.innerHTML = 'sanakirja';
		trad.innerHTML = 'dictionary';
		type.innerHTML = '5 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '120/200';		
		break;				
		case 121:
		result.innerHTML = 'ihminen';
		trad.innerHTML = 'human';
		type.innerHTML = '3 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '121/200';		
		break;				
		case 122:
		result.innerHTML = 'ongelma';
		trad.innerHTML = 'problem';
		type.innerHTML = '4 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '122/200';		
		break;
		case 123:
		result.innerHTML = 'rakennus';
		trad.innerHTML = 'building';
		type.innerHTML = '6 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '123/200';		
		break;		
		case 124:
		result.innerHTML = 'matka';
		trad.innerHTML = 'trip';
		type.innerHTML = '5 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '124/200';		
		break;		
		case 125:
		result.innerHTML = 'poika';
		trad.innerHTML = 'son';
		type.innerHTML = '4 (noun)';
		gradation.innerHTML = 'IK-J';
		rating.innerHTML = '125/200';		
		break;		
		case 126:
		result.innerHTML = 'makuuhuone';
		trad.innerHTML = 'bedroom';
		type.innerHTML = '8 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '126/200';		
		break;		
		case 127:
		result.innerHTML = 'ilma';
		trad.innerHTML = 'air';
		type.innerHTML = '5 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '127/200';		
		break;		
		case 128:
		result.innerHTML = 'lasi';
		trad.innerHTML = 'glass';
		type.innerHTML = '1 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '128/200';		
		break;		
		case 129:
		result.innerHTML = 'oppitunti';
		trad.innerHTML = 'lesson';
		type.innerHTML = '1 (noun)';
		gradation.innerHTML = 'NT-NN';
		rating.innerHTML = '129/200';		
		break;		
		case 130:
		result.innerHTML = 'kirje';
		trad.innerHTML = 'letter';
		type.innerHTML = '8 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '130/200';		
		break;			
		case 131:
		result.innerHTML = 'hattu';
		trad.innerHTML = 'hat';
		type.innerHTML = '2 (noun)';
		gradation.innerHTML = 'TT-T';
		rating.innerHTML = '131/200';		
		break;				
		case 132:
		result.innerHTML = 'laji';
		trad.innerHTML = 'kind, species';
		type.innerHTML = '1 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '132/200';		
		break;
		case 133:
		result.innerHTML = 'suu';
		trad.innerHTML = 'mouth';
		type.innerHTML = '15 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '133/200';		
		break;		
		case 134:
		result.innerHTML = 'askel';
		trad.innerHTML = 'step';
		type.innerHTML = '8 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '134/200';		
		break;		
		case 135:
		result.innerHTML = 'katu';
		trad.innerHTML = 'street';
		type.innerHTML = '2 (noun)';
		gradation.innerHTML = 'T-D';
		rating.innerHTML = '135/200';		
		break;		
		case 136:
		result.innerHTML = 'adjektiivi';
		trad.innerHTML = 'adjective';
		type.innerHTML = '1 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '136/200';		
		break;		
		case 137:
		result.innerHTML = 'tapahtuma';
		trad.innerHTML = 'event';
		type.innerHTML = '4 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '137/200';		
		break;		
		case 138:
		result.innerHTML = 'kauppa';
		trad.innerHTML = 'shop';
		type.innerHTML = '5 (noun)';
		gradation.innerHTML = 'PP-P';
		rating.innerHTML = '138/200';		
		break;		
		case 139:
		result.innerHTML = 'pala';
		trad.innerHTML = 'piece';
		type.innerHTML = '5 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '139/200';		
		break;		
		case 140:
		result.innerHTML = 'vihje';
		trad.innerHTML = 'hint';
		type.innerHTML = '8 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '140/200';		
		break;			
		case 141:
		result.innerHTML = 'tuki';
		trad.innerHTML = 'support';
		type.innerHTML = '11 (noun)';
		gradation.innerHTML = '<s>K</s>';
		rating.innerHTML = '141/200';		
		break;				
		case 142:
		result.innerHTML = 'seutu';
		trad.innerHTML = 'region';
		type.innerHTML = '2 (noun)';
		gradation.innerHTML = 'T-D';
		rating.innerHTML = '142/200';		
		break;
		case 143:
		result.innerHTML = 'kesä';
		trad.innerHTML = 'summer';
		type.innerHTML = '4 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '143/200';		
		break;		
		case 144:
		result.innerHTML = 'tunti';
		trad.innerHTML = 'hour';
		type.innerHTML = '1 (noun)';
		gradation.innerHTML = 'NT-NN';
		rating.innerHTML = '144/200';		
		break;		
		case 145:
		result.innerHTML = 'asiakas';
		trad.innerHTML = 'customer';
		type.innerHTML = '12 (noun)';
		gradation.innerHTML = 'K-KK';
		rating.innerHTML = '145/200';		
		break;		
		case 146:
		result.innerHTML = 'pari';
		trad.innerHTML = 'pair';
		type.innerHTML = '1 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '146/200';		
		break;		
		case 147:
		result.innerHTML = 'tietokone';
		trad.innerHTML = 'computer';
		type.innerHTML = '8 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '147/200';		
		break;		
		case 148:
		result.innerHTML = 'lintu';
		trad.innerHTML = 'bird';
		type.innerHTML = '2 (noun)';
		gradation.innerHTML = 'NT-NN';
		rating.innerHTML = '148/200';		
		break;		
		case 149:
		result.innerHTML = 'hetki';
		trad.innerHTML = 'moment';
		type.innerHTML = '11 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '149/200';		
		break;		
		case 150:
		result.innerHTML = 'juoma';
		trad.innerHTML = 'drink';
		type.innerHTML = '4 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '150/200';		
		break;				
		case 151:
		result.innerHTML = 'piste';
		trad.innerHTML = 'point';
		type.innerHTML = '8 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '151/200';		
		break;				
		case 152:
		result.innerHTML = 'tieto';
		trad.innerHTML = 'information, knowledge';
		type.innerHTML = '2 (noun)';
		gradation.innerHTML = 'T-D';
		rating.innerHTML = '152/200';		
		break;
		case 153:
		result.innerHTML = 'koko';
		trad.innerHTML = 'size';
		type.innerHTML = '2 (noun)';
		gradation.innerHTML = '<s>K</s>';
		rating.innerHTML = '153/200';		
		break;		
		case 154:
		result.innerHTML = 'kännykkä';
		trad.innerHTML = 'mobile phone';
		type.innerHTML = '7 (noun)';
		gradation.innerHTML = 'KK-K';
		rating.innerHTML = '154/200';		
		break;		
		case 155:
		result.innerHTML = 'kakku';
		trad.innerHTML = 'cake';
		type.innerHTML = '2 (noun)';
		gradation.innerHTML = 'KK-K';
		rating.innerHTML = '155/200';		
		break;		
		case 156:
		result.innerHTML = 'kartta';
		trad.innerHTML = 'map';
		type.innerHTML = '5 (noun)';
		gradation.innerHTML = 'TT-T';
		rating.innerHTML = '156/200';		
		break;		
		case 157:
		result.innerHTML = 'valinta';
		trad.innerHTML = 'choice';
		type.innerHTML = '5 (noun)';
		gradation.innerHTML = 'NT-NN';
		rating.innerHTML = '157/200';		
		break;		
		case 158:
		result.innerHTML = 'tosiasia';
		trad.innerHTML = 'fact';
		type.innerHTML = '7 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '158/200';		
		break;		
		case 159:
		result.innerHTML = 'tytär';
		trad.innerHTML = 'daughter';
		type.innerHTML = '14 (noun)';
		gradation.innerHTML = 'T-TT';
		rating.innerHTML = '159/200';		
		break;		
		case 160:
		result.innerHTML = 'tilanne';
		trad.innerHTML = 'situation';
		type.innerHTML = '8 (noun)';
		gradation.innerHTML = 'NN-NT';
		rating.innerHTML = '160/200';		
		break;			
		case 161:
		result.innerHTML = 'pinta';
		trad.innerHTML = 'situation';
		type.innerHTML = '5 (noun)';
		gradation.innerHTML = 'NT-NN';
		rating.innerHTML = '161/200';		
		break;				
		case 162:
		result.innerHTML = 'vanhempi';
		trad.innerHTML = 'parent';
		type.innerHTML = '20 (noun)';
		gradation.innerHTML = 'MP-MM';
		rating.innerHTML = '162/200';		
		break;
		case 163:
		result.innerHTML = 'sänky';
		trad.innerHTML = 'bed';
		type.innerHTML = '2 (noun)';
		gradation.innerHTML = 'NK-NG';
		rating.innerHTML = '163/200';		
		break;		
		case 164:
		result.innerHTML = 'määrä';
		trad.innerHTML = 'amount';
		type.innerHTML = '4 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '164/200';		
		break;		
		case 165:
		result.innerHTML = 'orava';
		trad.innerHTML = 'squirrel';
		type.innerHTML = '4 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '165/200';		
		break;		
		case 166:
		result.innerHTML = 'terveys';
		trad.innerHTML = 'health';
		type.innerHTML = '9 (noun)';
		gradation.innerHTML = 'T-D';
		rating.innerHTML = '166/200';		
		break;		
		case 167:
		result.innerHTML = 'juhla';
		trad.innerHTML = 'party';
		type.innerHTML = '4 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '167/200';		
		break;		
		case 168:
		result.innerHTML = 'suunta';
		trad.innerHTML = 'direction';
		type.innerHTML = '4 (noun)';
		gradation.innerHTML = 'NT-NN';
		rating.innerHTML = '168/200';		
		break;		
		case 169:
		result.innerHTML = 'kasvot';
		trad.innerHTML = 'face';
		type.innerHTML = '2 (noun, plural only)';
		gradation.innerHTML = '—';
		rating.innerHTML = '169/200';		
		break;		
		case 170:
		result.innerHTML = 'alku';
		trad.innerHTML = 'beginning';
		type.innerHTML = '2 (noun)';
		gradation.innerHTML = '<s>K</s>';
		rating.innerHTML = '170/200';		
		break;			
		case 171:
		result.innerHTML = 'metsä';
		trad.innerHTML = 'forest';
		type.innerHTML = '4 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '171/200';		
		break;				
		case 172:
		result.innerHTML = 'pankki';
		trad.innerHTML = 'bank';
		type.innerHTML = '1 (noun)';
		gradation.innerHTML = 'KK-K';
		rating.innerHTML = '172/200';		
		break;
		case 173:
		result.innerHTML = 'loma';
		trad.innerHTML = 'vacation';
		type.innerHTML = '4 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '173/200';		
		break;		
		case 174:
		result.innerHTML = 'yliopisto';
		trad.innerHTML = 'university';
		type.innerHTML = '2 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '174/200';		
		break;		
		case 175:
		result.innerHTML = 'herra';
		trad.innerHTML = 'mister';
		type.innerHTML = '5 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '175/200';		
		break;		
		case 176:
		result.innerHTML = 'toimitus';
		trad.innerHTML = 'delivery';
		type.innerHTML = '6 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '176/200';		
		break;		
		case 177:
		result.innerHTML = 'kello';
		trad.innerHTML = 'clock';
		type.innerHTML = '2 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '177/200';		
		break;		
		case 178:
		result.innerHTML = 'itä';
		trad.innerHTML = 'east';
		type.innerHTML = '4 (noun)';
		gradation.innerHTML = 'T-D';
		rating.innerHTML = '178/200';		
		break;		
		case 179:
		result.innerHTML = 'tyyppi';
		trad.innerHTML = 'type';
		type.innerHTML = '1 (noun)';
		gradation.innerHTML = 'PP-P';
		rating.innerHTML = '179/200';		
		break;		
		case 180:
		result.innerHTML = 'piha';
		trad.innerHTML = 'yard';
		type.innerHTML = '5 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '180/200';		
		break;				
		case 181:
		result.innerHTML = 'yhteiskunta';
		trad.innerHTML = 'society';
		type.innerHTML = '4 (noun)';
		gradation.innerHTML = 'NT-NN';
		rating.innerHTML = '181/200';		
		break;				
		case 182:
		result.innerHTML = 'maito';
		trad.innerHTML = 'milk';
		type.innerHTML = '2 (noun)';
		gradation.innerHTML = 'T-D';
		rating.innerHTML = '182/200';		
		break;
		case 183:
		result.innerHTML = 'kulma';
		trad.innerHTML = 'guest';
		type.innerHTML = '4 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '183/200';		
		break;		
		case 184:
		result.innerHTML = 'vieras';
		trad.innerHTML = 'guest';
		type.innerHTML = '12 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '184/200';		
		break;		
		case 185:
		result.innerHTML = 'nojatuoli';
		trad.innerHTML = 'armchair';
		type.innerHTML = '1 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '185/200';		
		break;		
		case 186:
		result.innerHTML = 'kala';
		trad.innerHTML = 'fish';
		type.innerHTML = '5 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '186/200';		
		break;		
		case 187:
		result.innerHTML = 'arvo';
		trad.innerHTML = 'value';
		type.innerHTML = '2 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '187/200';		
		break;		
		case 188:
		result.innerHTML = 'mänty';
		trad.innerHTML = 'pine';
		type.innerHTML = '2 (noun)';
		gradation.innerHTML = 'NT-NN';
		rating.innerHTML = '188/200';		
		break;		
		case 189:
		result.innerHTML = 'sääntö';
		trad.innerHTML = 'rule';
		type.innerHTML = '2 (noun)';
		gradation.innerHTML = 'NT-NN';
		rating.innerHTML = '189/200';		
		break;		
		case 190:
		result.innerHTML = 'joki';
		trad.innerHTML = 'river';
		type.innerHTML = '11 (noun)';
		gradation.innerHTML = '<s>K</s>';
		rating.innerHTML = '190/200';		
		break;			
		case 191:
		result.innerHTML = 'ajatus';
		trad.innerHTML = 'thought';
		type.innerHTML = '6 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '191/200';		
		break;				
		case 192:
		result.innerHTML = 'ympyrä';
		trad.innerHTML = 'circle';
		type.innerHTML = '7 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '192/200';		
		break;
		case 193:
		result.innerHTML = 'eläin';
		trad.innerHTML = 'animal';
		type.innerHTML = '13 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '193/200';		
		break;		
		case 194:
		result.innerHTML = 'järjestelmä';
		trad.innerHTML = 'system';
		type.innerHTML = '4 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '194/200';		
		break;		
		case 195:
		result.innerHTML = 'merkki';
		trad.innerHTML = 'sign';
		type.innerHTML = '1 (noun)';
		gradation.innerHTML = 'KK-K';
		rating.innerHTML = '195/200';		
		break;		
		case 196:
		result.innerHTML = 'hiukset';
		trad.innerHTML = 'hair';
		type.innerHTML = '6 (noun, plural)';
		gradation.innerHTML = '—';
		rating.innerHTML = '196/200';		
		break;		
		case 197:
		result.innerHTML = 'klubi';
		trad.innerHTML = 'club';
		type.innerHTML = '1 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '197/200';		
		break;		
		case 198:
		result.innerHTML = 'oranssi';
		trad.innerHTML = 'orange';
		type.innerHTML = '1 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '198/200';		
		break;		
		case 199:
		result.innerHTML = 'profiili';
		trad.innerHTML = 'profile';
		type.innerHTML = '1 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '199/200';		
		break;		
		case 200:
		result.innerHTML = 'puisto';
		trad.innerHTML = 'park';
		type.innerHTML = '2 (noun)';
		gradation.innerHTML = '—';
		rating.innerHTML = '200/200';		
		break;					
		case 201:
		result.innerHTML = 'iso';
		trad.innerHTML = 'big';
		type.innerHTML = '2 (adjective)';
		gradation.innerHTML = '—';
		rating.innerHTML = '1/100';		
		break;				
		case 202:
		result.innerHTML = 'hyvä';
		trad.innerHTML = 'good';
		type.innerHTML = '4 (adjective)';
		gradation.innerHTML = '—';
		rating.innerHTML = '2/100';		
		break;
		case 203:
		result.innerHTML = 'pitkä';
		trad.innerHTML = 'long';
		type.innerHTML = '4 (adjective)';
		gradation.innerHTML = '—';
		rating.innerHTML = '3/100';		
		break;		
		case 204:
		result.innerHTML = 'pieni';
		trad.innerHTML = 'small';
		type.innerHTML = '14 (adjective)';
		gradation.innerHTML = '—';
		rating.innerHTML = '4/100';		
		break;		
		case 205:
		result.innerHTML = 'valkoinen';
		trad.innerHTML = 'white';
		type.innerHTML = '3 (adjective)';
		gradation.innerHTML = '—';
		rating.innerHTML = '5/100';		
		break;		
		case 206:
		result.innerHTML = 'ensimmäinen';
		trad.innerHTML = 'first';
		type.innerHTML = '3 (adjective)';
		gradation.innerHTML = '—';
		rating.innerHTML = '6/100';		
		break;		
		case 207:
		result.innerHTML = 'korkea';
		trad.innerHTML = 'high';
		type.innerHTML = '22 (adjective)';
		gradation.innerHTML = '—';
		rating.innerHTML = '7/100';		
		break;		
		case 208:
		result.innerHTML = 'uusi';
		trad.innerHTML = 'new';
		type.innerHTML = '19 (adjective)';
		gradation.innerHTML = 'T-D';
		rating.innerHTML = '8/100';		
		break;		
		case 209:
		result.innerHTML = 'kiva';
		trad.innerHTML = 'nice';
		type.innerHTML = '5 (adjective)';
		gradation.innerHTML = '—';
		rating.innerHTML = '9/100';		
		break;		
		case 210:
		result.innerHTML = 'vapaa';
		trad.innerHTML = 'free';
		type.innerHTML = '23 (adjective)';
		gradation.innerHTML = '—';
		rating.innerHTML = '10/100';		
		break;			
		case 211:
		result.innerHTML = 'nuori';
		trad.innerHTML = 'young';
		type.innerHTML = '14 (adjective)';
		gradation.innerHTML = '—';
		rating.innerHTML = '11/100';		
		break;				
		case 212:
		result.innerHTML = 'keltainen';
		trad.innerHTML = 'yellow';
		type.innerHTML = '3 (adjective)';
		gradation.innerHTML = '—';
		rating.innerHTML = '12/100';		
		break;
		case 213:
		result.innerHTML = 'läheinen';
		trad.innerHTML = 'near';
		type.innerHTML = '3 (adjective)';
		gradation.innerHTML = '—';
		rating.innerHTML = '13/100';		
		break;		
		case 214:
		result.innerHTML = 'lyhyt';
		trad.innerHTML = 'short';
		type.innerHTML = '25 (adjective)';
		gradation.innerHTML = '—';
		rating.innerHTML = '14/100';		
		break;		
		case 215:
		result.innerHTML = 'muu';
		trad.innerHTML = 'other';
		type.innerHTML = '15 (adjective)';
		gradation.innerHTML = '—';
		rating.innerHTML = '15/100';		
		break;		
		case 216:
		result.innerHTML = 'iloinen';
		trad.innerHTML = 'happy';
		type.innerHTML = '3 (adjective)';
		gradation.innerHTML = '—';
		rating.innerHTML = '16/100';		
		break;		
		case 217:
		result.innerHTML = 'oikea';
		trad.innerHTML = 'right';
		type.innerHTML = '22 (adjective)';
		gradation.innerHTML = '—';
		rating.innerHTML = '17/100';		
		break;		
		case 218:
		result.innerHTML = 'tyytyväinen';
		trad.innerHTML = 'satisfied';
		type.innerHTML = '3 (adjective)';
		gradation.innerHTML = '—';
		rating.innerHTML = '18/100';		
		break;		
		case 219:
		result.innerHTML = 'vanha';
		trad.innerHTML = 'old';
		type.innerHTML = '5 (adjective)';
		gradation.innerHTML = '—';
		rating.innerHTML = '19/100';		
		break;		
		case 220:
		result.innerHTML = 'helppo';
		trad.innerHTML = 'easy';
		type.innerHTML = '2 (adjective)';
		gradation.innerHTML = 'PP-P';
		rating.innerHTML = '20/100';		
		break;				
		case 221:
		result.innerHTML = 'punainen';
		trad.innerHTML = 'red';
		type.innerHTML = '3 (adjective)';
		gradation.innerHTML = '—';
		rating.innerHTML = '21/100';		
		break;				
		case 222:
		result.innerHTML = 'selkeä';
		trad.innerHTML = 'clear';
		type.innerHTML = '22 (adjective)';
		gradation.innerHTML = '—';
		rating.innerHTML = '22/100';		
		break;
		case 223:
		result.innerHTML = 'mielenkiintoinen';
		trad.innerHTML = 'interesting';
		type.innerHTML = '3 (adjective)';
		gradation.innerHTML = '—';
		rating.innerHTML = '23/100';		
		break;		
		case 224:
		result.innerHTML = 'matala';
		trad.innerHTML = 'low';
		type.innerHTML = '7 (adjective)';
		gradation.innerHTML = '—';
		rating.innerHTML = '24/100';		
		break;		
		case 225:
		result.innerHTML = 'koko';
		trad.innerHTML = 'whole';
		type.innerHTML = '—';
		gradation.innerHTML = '—';
		rating.innerHTML = '25/100';		
		break;		
		case 226:
		result.innerHTML = 'lämmin';
		trad.innerHTML = 'warm';
		type.innerHTML = 'irr (adjective)';
		gradation.innerHTML = '—';
		rating.innerHTML = '26/100';		
		break;		
		case 227:
		result.innerHTML = 'kylmä';
		trad.innerHTML = 'cold';
		type.innerHTML = '4 (adjective)';
		gradation.innerHTML = '—';
		rating.innerHTML = '27/100';		
		break;		
		case 228:
		result.innerHTML = 'kallis';
		trad.innerHTML = 'expensive';
		type.innerHTML = '12 (adjective)';
		gradation.innerHTML = '—';
		rating.innerHTML = '28/100';		
		break;		
		case 229:
		result.innerHTML = 'tärkeä';
		trad.innerHTML = 'important';
		type.innerHTML = '22 (adjective)';
		gradation.innerHTML = '—';
		rating.innerHTML = '29/100';		
		break;		
		case 230:
		result.innerHTML = 'kaunis';
		trad.innerHTML = 'beautiful';
		type.innerHTML = '12 (adjective)';
		gradation.innerHTML = '—';
		rating.innerHTML = '30/100';		
		break;			
		case 231:
		result.innerHTML = 'seuraava';
		trad.innerHTML = 'next';
		type.innerHTML = '4 (adjective)';
		gradation.innerHTML = '—';
		rating.innerHTML = '31/100';		
		break;				
		case 232:
		result.innerHTML = 'tavallinen';
		trad.innerHTML = 'usual';
		type.innerHTML = '3 (adjective)';
		gradation.innerHTML = '—';
		rating.innerHTML = '32/100';		
		break;
		case 233:
		result.innerHTML = 'sininen';
		trad.innerHTML = 'blue';
		type.innerHTML = '3 (adjective)';
		gradation.innerHTML = '—';
		rating.innerHTML = '33/100';		
		break;		
		case 234:
		result.innerHTML = 'hieno';
		trad.innerHTML = 'excellent';
		type.innerHTML = '2 (adjective)';
		gradation.innerHTML = '—';
		rating.innerHTML = '34/100';		
		break;		
		case 235:
		result.innerHTML = 'tehokas';
		trad.innerHTML = 'effective';
		type.innerHTML = '12 (adjective)';
		gradation.innerHTML = 'K-KK';
		rating.innerHTML = '35/100';		
		break;		
		case 236:
		result.innerHTML = 'myöhäinen';
		trad.innerHTML = 'late';
		type.innerHTML = '3 (adjective)';
		gradation.innerHTML = '—';
		rating.innerHTML = '36/100';		
		break;		
		case 237:
		result.innerHTML = 'pyöreä';
		trad.innerHTML = 'round';
		type.innerHTML = '22 (adjective)';
		gradation.innerHTML = '—';
		rating.innerHTML = '37/100';		
		break;		
		case 238:
		result.innerHTML = 'sama';
		trad.innerHTML = 'same';
		type.innerHTML = '5 (adjective)';
		gradation.innerHTML = '—';
		rating.innerHTML = '38/100';		
		break;		
		case 239:
		result.innerHTML = 'huono';
		trad.innerHTML = 'bad';
		type.innerHTML = '2 (adjective)';
		gradation.innerHTML = '—';
		rating.innerHTML = '39/100';		
		break;		
		case 240:
		result.innerHTML = 'kokenut';
		trad.innerHTML = 'experienced';
		type.innerHTML = '16 (adjective)';
		gradation.innerHTML = '—';
		rating.innerHTML = '40/100';		
		break;			
		case 241:
		result.innerHTML = 'kuuluisa';
		trad.innerHTML = 'famous';
		type.innerHTML = '4 (adjective)';
		gradation.innerHTML = '—';
		rating.innerHTML = '41/100';		
		break;				
		case 242:
		result.innerHTML = 'nopea';
		trad.innerHTML = 'quick';
		type.innerHTML = '22 (adjective)';
		gradation.innerHTML = '—';
		rating.innerHTML = '42/100';		
		break;
		case 243:
		result.innerHTML = 'samanlainen';
		trad.innerHTML = 'similar';
		type.innerHTML = '3 (adjective)';
		gradation.innerHTML = '—';
		rating.innerHTML = '43/100';		
		break;		
		case 244:
		result.innerHTML = 'onnellinen';
		trad.innerHTML = 'glad';
		type.innerHTML = '3 (adjective)';
		gradation.innerHTML = '—';
		rating.innerHTML = '44/100';		
		break;		
		case 245:
		result.innerHTML = 'vaikea';
		trad.innerHTML = 'difficult';
		type.innerHTML = '22 (adjective)';
		gradation.innerHTML = '—';
		rating.innerHTML = '45/100';		
		break;		
		case 246:
		result.innerHTML = 'söpö';
		trad.innerHTML = 'cute';
		type.innerHTML = '4 (adjective)';
		gradation.innerHTML = '—';
		rating.innerHTML = '46/100';		
		break;		
		case 247:
		result.innerHTML = 'vihreä';
		trad.innerHTML = 'green';
		type.innerHTML = '22 (adjective)';
		gradation.innerHTML = '—';
		rating.innerHTML = '47/100';		
		break;		
		case 248:
		result.innerHTML = 'jännittävä';
		trad.innerHTML = 'exciting';
		type.innerHTML = '4 (adjective)';
		gradation.innerHTML = '—';
		rating.innerHTML = '48/100';		
		break;		
		case 249:
		result.innerHTML = 'maukas';
		trad.innerHTML = 'delicious';
		type.innerHTML = '12 (adjective)';
		gradation.innerHTML = 'K-KK';
		rating.innerHTML = '49/100';		
		break;		
		case 250:
		result.innerHTML = 'hyödyllinen';
		trad.innerHTML = 'useful';
		type.innerHTML = '3 (adjective)';
		gradation.innerHTML = '—';
		rating.innerHTML = '50/100';		
		break;				
		case 251:
		result.innerHTML = 'tyhjä';
		trad.innerHTML = 'empty';
		type.innerHTML = '4 (adjective)';
		gradation.innerHTML = '—';
		rating.innerHTML = '51/100';		
		break;				
		case 252:
		result.innerHTML = 'vahva';
		trad.innerHTML = 'strong';
		type.innerHTML = '5 (adjective)';
		gradation.innerHTML = '—';
		rating.innerHTML = '52/100';		
		break;
		case 253:
		result.innerHTML = 'klassinen';
		trad.innerHTML = 'classic';
		type.innerHTML = '3 (adjective)';
		gradation.innerHTML = '—';
		rating.innerHTML = '53/100';		
		break;		
		case 254:
		result.innerHTML = 'ruskea';
		trad.innerHTML = 'brown';
		type.innerHTML = '22 (adjective)';
		gradation.innerHTML = '—';
		rating.innerHTML = '54/100';		
		break;		
		case 255:
		result.innerHTML = 'väärä';
		trad.innerHTML = 'wrong';
		type.innerHTML = '4 (adjective)';
		gradation.innerHTML = '—';
		rating.innerHTML = '55/100';		
		break;		
		case 256:
		result.innerHTML = 'ihana';
		trad.innerHTML = 'wonderful';
		type.innerHTML = '4 (adjective)';
		gradation.innerHTML = '—';
		rating.innerHTML = '56/100';		
		break;		
		case 257:
		result.innerHTML = 'oma';
		trad.innerHTML = 'own';
		type.innerHTML = '4 (adjective)';
		gradation.innerHTML = '—';
		rating.innerHTML = '57/100';		
		break;		
		case 258:
		result.innerHTML = 'aikainen';
		trad.innerHTML = 'early';
		type.innerHTML = '3 (adjective)';
		gradation.innerHTML = '—';
		rating.innerHTML = '58/100';		
		break;		
		case 259:
		result.innerHTML = 'ystävällinen';
		trad.innerHTML = 'friendly';
		type.innerHTML = '3 (adjective)';
		gradation.innerHTML = '—';
		rating.innerHTML = '59/100';		
		break;		
		case 260:
		result.innerHTML = 'merkittävä';
		trad.innerHTML = 'significant';
		type.innerHTML = '4 (adjective)';
		gradation.innerHTML = '—';
		rating.innerHTML = '60/100';		
		break;			
		case 261:
		result.innerHTML = 'makea';
		trad.innerHTML = 'sweet';
		type.innerHTML = '22 (adjective)';
		gradation.innerHTML = '—';
		rating.innerHTML = '61/100';		
		break;				
		case 262:
		result.innerHTML = 'luova';
		trad.innerHTML = 'creative';
		type.innerHTML = '4 (adjective)';
		gradation.innerHTML = '—';
		rating.innerHTML = '62/100';		
		break;
		case 263:
		result.innerHTML = 'ylimääräinen';
		trad.innerHTML = 'additional';
		type.innerHTML = '3 (adjective)';
		gradation.innerHTML = '—';
		rating.innerHTML = '63/100';		
		break;		
		case 264:
		result.innerHTML = 'rauhallinen';
		trad.innerHTML = 'quiet';
		type.innerHTML = '3 (adjective)';
		gradation.innerHTML = '—';
		rating.innerHTML = '64/100';		
		break;		
		case 265:
		result.innerHTML = 'halpa';
		trad.innerHTML = 'cheap';
		type.innerHTML = '5 (adjective)';
		gradation.innerHTML = 'P-V';
		rating.innerHTML = '65/100';		
		break;		
		case 266:
		result.innerHTML = 'ainutlaatuinen';
		trad.innerHTML = 'unique';
		type.innerHTML = '3 (adjective)';
		gradation.innerHTML = '—';
		rating.innerHTML = '66/100';		
		break;		
		case 267:
		result.innerHTML = 'hidas';
		trad.innerHTML = 'slow';
		type.innerHTML = '12 (adjective)';
		gradation.innerHTML = 'D-T';
		rating.innerHTML = '67/100';		
		break;		
		case 268:
		result.innerHTML = 'hauska';
		trad.innerHTML = 'fun';
		type.innerHTML = '5 (adjective)';
		gradation.innerHTML = '—';
		rating.innerHTML = '68/100';		
		break;		
		case 269:
		result.innerHTML = 'pimeä';
		trad.innerHTML = 'dark';
		type.innerHTML = '22 (adjective)';
		gradation.innerHTML = '—';
		rating.innerHTML = '69/100';		
		break;		
		case 270:
		result.innerHTML = 'suosittu';
		trad.innerHTML = 'popular';
		type.innerHTML = '2 (adjective)';
		gradation.innerHTML = 'TT-T';
		rating.innerHTML = '70/100';		
		break;			
		case 271:
		result.innerHTML = 'täysi';
		trad.innerHTML = 'full';
		type.innerHTML = '19 (adjective)';
		gradation.innerHTML = 'T-D';
		rating.innerHTML = '71/100';		
		break;				
		case 272:
		result.innerHTML = 'pehmeä';
		trad.innerHTML = 'soft';
		type.innerHTML = '22 (adjective)';
		gradation.innerHTML = '—';
		rating.innerHTML = '72/100';		
		break;
		case 273:
		result.innerHTML = 'väsynyt';
		trad.innerHTML = 'tired';
		type.innerHTML = '16 (adjective)';
		gradation.innerHTML = '—';
		rating.innerHTML = '73/100';		
		break;		
		case 274:
		result.innerHTML = 'saatavilla';
		trad.innerHTML = 'available';
		type.innerHTML = '—';
		gradation.innerHTML = '—';
		rating.innerHTML = '74/100';		
		break;		
		case 275:
		result.innerHTML = 'avoin';
		trad.innerHTML = 'open';
		type.innerHTML = '13 (adjective)';
		gradation.innerHTML = '—';
		rating.innerHTML = '75/100';		
		break;		
		case 276:
		result.innerHTML = 'paksu';
		trad.innerHTML = 'thick';
		type.innerHTML = '2 (adjective)';
		gradation.innerHTML = '—';
		rating.innerHTML = '76/100';		
		break;		
		case 277:
		result.innerHTML = 'kiinnostunut';
		trad.innerHTML = 'interested';
		type.innerHTML = '16 (adjective)';
		gradation.innerHTML = '—';
		rating.innerHTML = '77/100';		
		break;		
		case 278:
		result.innerHTML = 'harmaa';
		trad.innerHTML = 'gray';
		type.innerHTML = '23 (adjective)';
		gradation.innerHTML = '—';
		rating.innerHTML = '78/100';		
		break;		
		case 279:
		result.innerHTML = 'aurinkoinen';
		trad.innerHTML = 'sunny';
		type.innerHTML = '3 (adjective)';
		gradation.innerHTML = '—';
		rating.innerHTML = '79/100';		
		break;		
		case 280:
		result.innerHTML = 'leveä';
		trad.innerHTML = 'wide';
		type.innerHTML = '22 (adjective)';
		gradation.innerHTML = '—';
		rating.innerHTML = '80/100';		
		break;				
		case 281:
		result.innerHTML = 'nykyinen';
		trad.innerHTML = 'recent';
		type.innerHTML = '3 (adjective)';
		gradation.innerHTML = '—';
		rating.innerHTML = '81/100';		
		break;				
		case 282:
		result.innerHTML = 'sopiva';
		trad.innerHTML = 'appropriate';
		type.innerHTML = '4 (adjective)';
		gradation.innerHTML = '—';
		rating.innerHTML = '82/100';		
		break;
		case 283:
		result.innerHTML = 'rakas';
		trad.innerHTML = 'dear';
		type.innerHTML = '12 (adjective)';
		gradation.innerHTML = 'K-KK';
		rating.innerHTML = '83/100';		
		break;		
		case 284:
		result.innerHTML = 'suljettu';
		trad.innerHTML = 'closed';
		type.innerHTML = '2 (adjective)';
		gradation.innerHTML = 'TT-T';
		rating.innerHTML = '84/100';		
		break;		
		case 285:
		result.innerHTML = 'rikas';
		trad.innerHTML = 'rich';
		type.innerHTML = '12 (adjective)';
		gradation.innerHTML = 'K-KK';
		rating.innerHTML = '85/100';		
		break;		
		case 286:
		result.innerHTML = 'harvinainen';
		trad.innerHTML = 'rare';
		type.innerHTML = '3 (adjective)';
		gradation.innerHTML = '—';
		rating.innerHTML = '86/100';			
		case 287:
		result.innerHTML = 'ohut';
		trad.innerHTML = 'thin';
		type.innerHTML = '25 (adjective)';
		gradation.innerHTML = '—';
		rating.innerHTML = '87/100';		
		break;		
		case 288:
		result.innerHTML = 'viihtyisä';
		trad.innerHTML = 'cosy';
		type.innerHTML = '4 (adjective)';
		gradation.innerHTML = '—';
		rating.innerHTML = '87/100';		
		break;			
		case 289:
		result.innerHTML = 'kultainen';
		trad.innerHTML = 'golden';
		type.innerHTML = '3 (adjective)';
		gradation.innerHTML = '—';
		rating.innerHTML = '89/100';		
		break;		
		case 290:
		result.innerHTML = 'musta';
		trad.innerHTML = 'black';
		type.innerHTML = '4 (adjective)';
		gradation.innerHTML = '—';
		rating.innerHTML = '90/100';		
		break;			
		case 291:
		result.innerHTML = 'utelias';
		trad.innerHTML = 'curious';
		type.innerHTML = '12 (adjective)';
		gradation.innerHTML = '—';
		rating.innerHTML = '91/100';		
		break;				
		case 292:
		result.innerHTML = 'vaarallinen';
		trad.innerHTML = 'dangerous';
		type.innerHTML = '3 (adjective)';
		gradation.innerHTML = '—';
		rating.innerHTML = '92/100';		
		break;
		case 293:
		result.innerHTML = 'pilvinen';
		trad.innerHTML = 'cloudy';
		type.innerHTML = '3 (adjective)';
		gradation.innerHTML = '—';
		rating.innerHTML = '93/100';		
		break;		
		case 294:
		result.innerHTML = 'suosikki';
		trad.innerHTML = 'favorite';
		type.innerHTML = '1 (adjective)';
		gradation.innerHTML = 'KK-K';
		rating.innerHTML = '94/100';		
		break;		
		case 295:
		result.innerHTML = 'syvä';
		trad.innerHTML = 'deep';
		type.innerHTML = '4 (adjective)';
		gradation.innerHTML = '—';
		rating.innerHTML = '95/100';		
		break;		
		case 296:
		result.innerHTML = 'mukava';
		trad.innerHTML = 'comfortable';
		type.innerHTML = '4 (adjective)';
		gradation.innerHTML = '—';
		rating.innerHTML = '96/100';		
		break;		
		case 297:
		result.innerHTML = 'kova';
		trad.innerHTML = 'hard';
		type.innerHTML = '4 (adjective)';
		gradation.innerHTML = '—';
		rating.innerHTML = '97/100';		
		break;		
		case 298:
		result.innerHTML = 'valmis';
		trad.innerHTML = 'ready';
		type.innerHTML = '12 (adjective)';
		gradation.innerHTML = '—';
		rating.innerHTML = '98/100';		
		break;		
		case 299:
		result.innerHTML = 'mahdollinen';
		trad.innerHTML = 'probable';
		type.innerHTML = '3 (adjective)';
		gradation.innerHTML = '—';
		rating.innerHTML = '99/100';		
		break;		
		case 300:
		result.innerHTML = 'muodikas';
		trad.innerHTML = 'fashionable';
		type.innerHTML = '12 (adjective)';
		gradation.innerHTML = 'K-KK';
		rating.innerHTML = '100/100';		
		break;			
		case 301:
		result.innerHTML = 'olla';
		trad.innerHTML = 'to be';
		type.innerHTML = '3/irregular (verb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '1/100';		
		break;				
		case 302:
		result.innerHTML = 'mennä';
		trad.innerHTML = 'to go';
		type.innerHTML = '3 (verb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '2/100';		
		break;
		case 303:
		result.innerHTML = 'voida';
		trad.innerHTML = 'can';
		type.innerHTML = '13 (verb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '3/100';		
		break;		
		case 304:
		result.innerHTML = 'puhua';
		trad.innerHTML = 'to speak';
		type.innerHTML = '2 (verb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '4/100';		
		break;		
		case 305:
		result.innerHTML = 'tehdä';
		trad.innerHTML = 'to do';
		type.innerHTML = 'irregular (verb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '5/100';		
		break;		
		case 306:
		result.innerHTML = 'tulla';
		trad.innerHTML = 'to come';
		type.innerHTML = '3 (verb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '6/100';		
		break;		
		case 307:
		result.innerHTML = 'oppia';
		trad.innerHTML = 'to learn';
		type.innerHTML = '7 (verb)';
		gradation.innerHTML = 'PP-P';
		rating.innerHTML = '7/100';		
		break;		
		case 308:
		result.innerHTML = 'nähdä';
		trad.innerHTML = 'to see';
		type.innerHTML = 'irregular (verb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '8/100';		
		break;		
		case 309:
		result.innerHTML = 'matkustaa';
		trad.innerHTML = 'to travel';
		type.innerHTML = '1 (verb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '9/100';		
		break;		
		case 310:
		result.innerHTML = 'avata';
		trad.innerHTML = 'to open';
		type.innerHTML = '4 (verb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '10/100';		
		break;			
		case 311:
		result.innerHTML = 'haluta';
		trad.innerHTML = 'to want';
		type.innerHTML = '15 (verb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '11/100';		
		break;				
		case 312:
		result.innerHTML = 'ajatella';
		trad.innerHTML = 'to think';
		type.innerHTML = '3 (verb)';
		gradation.innerHTML = 'T-TT';
		rating.innerHTML = '12/100';		
		break;
		case 313:
		result.innerHTML = 'syödä';
		trad.innerHTML = 'to eat';
		type.innerHTML = '9 (verb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '13/100';		
		break;		
		case 314:
		result.innerHTML = 'lukea';
		trad.innerHTML = 'to read';
		type.innerHTML = '8 (verb)';
		gradation.innerHTML = '<s>K</s>';
		rating.innerHTML = '14/200';		
		break;		
		case 315:
		result.innerHTML = 'asua';
		trad.innerHTML = 'to live, to dwell';
		type.innerHTML = '2 (verb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '15/200';		
		break;		
		case 316:
		result.innerHTML = 'tietää';
		trad.innerHTML = 'to know';
		type.innerHTML = 'irregular (verb)';
		gradation.innerHTML = 'T-D';
		rating.innerHTML = '16/100';		
		break;		
		case 317:
		result.innerHTML = 'odottaa';
		trad.innerHTML = 'to wait';
		type.innerHTML = '1 (verb)';
		gradation.innerHTML = 'TT-T';
		rating.innerHTML = '17/100';		
		break;		
		case 318:
		result.innerHTML = 'sanoa';
		trad.innerHTML = 'to say';
		type.innerHTML = '2 (verb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '18/100';		
		break;		
		case 319:
		result.innerHTML = 'juoda';
		trad.innerHTML = 'to drink';
		type.innerHTML = '9 (verb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '19/200';		
		break;		
		case 320:
		result.innerHTML = 'viedä';
		trad.innerHTML = 'to take';
		type.innerHTML = '9 (verb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '20/100';		
		break;				
		case 321:
		result.innerHTML = 'kuunnella';
		trad.innerHTML = 'to listen';
		type.innerHTML = '3 (verb)';
		gradation.innerHTML = 'NN-NT';
		rating.innerHTML = '21/100';		
		break;				
		case 322:
		result.innerHTML = 'pitää';
		trad.innerHTML = 'to like, to hold';
		type.innerHTML = '1 (verb)';
		gradation.innerHTML = 'T-D';
		rating.innerHTML = '22/100';		
		break;
		case 323:
		result.innerHTML = 'seisoa';
		trad.innerHTML = 'to stand';
		type.innerHTML = '2 (verb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '23/100';		
		break;		
		case 324:
		result.innerHTML = 'auttaa';
		trad.innerHTML = 'to help';
		type.innerHTML = '5 (verb)';
		gradation.innerHTML = 'TT-T';
		rating.innerHTML = '24/100';		
		break;		
		case 325:
		result.innerHTML = 'kävellä';
		trad.innerHTML = 'to walk';
		type.innerHTML = '3 (verb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '25/100';		
		break;		
		case 326:
		result.innerHTML = 'alkaa';
		trad.innerHTML = 'to begin';
		type.innerHTML = '5 (verb)';
		gradation.innerHTML = '<s>k</s>';
		rating.innerHTML = '26/100';		
		break;		
		case 327:
		result.innerHTML = 'lisätä';
		trad.innerHTML = 'to add';
		type.innerHTML = '4 (verb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '27/100';		
		break;		
		case 328:
		result.innerHTML = 'kertoa';
		trad.innerHTML = 'to tell';
		type.innerHTML = '2 (verb)';
		gradation.innerHTML = 'RT-RR';
		rating.innerHTML = '28/100';		
		break;		
		case 329:
		result.innerHTML = 'tuoda';
		trad.innerHTML = 'to bring';
		type.innerHTML = '9 (verb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '29/100';		
		break;		
		case 330:
		result.innerHTML = 'ymmärtää';
		trad.innerHTML = 'to understand';
		type.innerHTML = '6 (verb)';
		gradation.innerHTML = 'RT-RR';
		rating.innerHTML = '30/100';		
		break;			
		case 331:
		result.innerHTML = 'sulkea';
		trad.innerHTML = 'to close';
		type.innerHTML = '8 (verb)';
		gradation.innerHTML = 'L-J';
		rating.innerHTML = '31/100';		
		break;				
		case 332:
		result.innerHTML = 'opiskella';
		trad.innerHTML = 'to study';
		type.innerHTML = '3 (verb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '32/100';		
		break;
		case 333:
		result.innerHTML = 'saada';
		trad.innerHTML = 'to get';
		type.innerHTML = '14 (verb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '33/100';		
		break;		
		case 334:
		result.innerHTML = 'elää';
		trad.innerHTML = 'to live';
		type.innerHTML = '1 (verb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '34/100';		
		break;		
		case 335:
		result.innerHTML = 'toivottaa';
		trad.innerHTML = 'to wish';
		type.innerHTML = '1 (verb)';
		gradation.innerHTML = 'TT-T';
		rating.innerHTML = '35/100';		
		break;		
		case 336:
		result.innerHTML = 'juosta';
		trad.innerHTML = 'to run';
		type.innerHTML = 'irregular (verb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '36/100';		
		break;		
		case 337:
		result.innerHTML = 'löytää';
		trad.innerHTML = 'to find';
		type.innerHTML = '6 (verb)';
		gradation.innerHTML = 'T-D';
		rating.innerHTML = '37/100';		
		break;		
		case 338:
		result.innerHTML = 'osata';
		trad.innerHTML = 'to know how';
		type.innerHTML = '4 (verb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '38/100';		
		break;		
		case 339:
		result.innerHTML = 'laulaa';
		trad.innerHTML = 'to sing';
		type.innerHTML = '5 (verb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '39/100';		
		break;		
		case 340:
		result.innerHTML = 'jatkaa';
		trad.innerHTML = 'to continue';
		type.innerHTML = '5 (verb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '40/100';		
		break;			
		case 341:
		result.innerHTML = 'kysyä';
		trad.innerHTML = 'to ask';
		type.innerHTML = '2 (verb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '41/100';		
		break;				
		case 342:
		result.innerHTML = 'ostaa';
		trad.innerHTML = 'to buy';
		type.innerHTML = '1 (verb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '42/100';		
		break;
		case 343:
		result.innerHTML = 'muistaa';
		trad.innerHTML = 'to remember';
		type.innerHTML = '1 (verb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '43/100';		
		break;		
		case 344:
		result.innerHTML = 'tarvita';
		trad.innerHTML = 'to need';
		type.innerHTML = '10 (verb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '44/100';		
		break;		
		case 345:
		result.innerHTML = 'istua';
		trad.innerHTML = 'to sit';
		type.innerHTML = '2 (verb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '45/100';		
		break;		
		case 346:
		result.innerHTML = 'kirjoittaa';
		trad.innerHTML = 'to write';
		type.innerHTML = '1 (verb)';
		gradation.innerHTML = 'TT-T';
		rating.innerHTML = '46/100';		
		break;		
		case 347:
		result.innerHTML = 'antaa';
		trad.innerHTML = 'to give';
		type.innerHTML = '5 (verb)';
		gradation.innerHTML = 'NT-NN';
		rating.innerHTML = '47/100';		
		break;		
		case 348:
		result.innerHTML = 'yrittää';
		trad.innerHTML = 'to try';
		type.innerHTML = '1 (verb)';
		gradation.innerHTML = 'TT-T';
		rating.innerHTML = '48/100';		
		break;		
		case 349:
		result.innerHTML = 'jäädä';
		trad.innerHTML = 'to stay';
		type.innerHTML = '14 (verb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '49/100';		
		break;		
		case 350:
		result.innerHTML = 'vastata';
		trad.innerHTML = 'to answer';
		type.innerHTML = '4 (verb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '50/100';		
		break;				
		case 351:
		result.innerHTML = 'toistaa';
		trad.innerHTML = 'to repeat';
		type.innerHTML = '1 (verb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '51/100';		
		break;				
		case 352:
		result.innerHTML = 'ajaa';
		trad.innerHTML = 'to drive';
		type.innerHTML = '5 (verb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '52/100';		
		break;
		case 353:
		result.innerHTML = 'valmistaa';
		trad.innerHTML = 'to prepare';
		type.innerHTML = '1 (verb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '53/100';		
		break;		
		case 354:
		result.innerHTML = 'käydä';
		trad.innerHTML = 'to visit';
		type.innerHTML = 'irregular (verb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '54/100';		
		break;		
		case 355:
		result.innerHTML = 'keskustella';
		trad.innerHTML = 'to talk, to discuss';
		type.innerHTML = '3 (verb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '55/100';		
		break;		
		case 356:
		result.innerHTML = 'tuntea';
		trad.innerHTML = 'to feel, to be acquainted';
		type.innerHTML = 'irregular (verb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '56/100';		
		break;		
		case 357:
		result.innerHTML = 'näyttää';
		trad.innerHTML = 'to show';
		type.innerHTML = '1 (verb)';
		gradation.innerHTML = 'TT-T';
		rating.innerHTML = '57/100';		
		break;		
		case 358:
		result.innerHTML = 'seurata';
		trad.innerHTML = 'to follow';
		type.innerHTML = '4 (verb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '58/100';		
		break;		
		case 359:
		result.innerHTML = 'lopettaa';
		trad.innerHTML = 'to end, to finish';
		type.innerHTML = '1 (verb)';
		gradation.innerHTML = 'TT-T';
		rating.innerHTML = '59/100';		
		break;		
		case 360:
		result.innerHTML = 'tarkistaa';
		trad.innerHTML = 'to check, to fix';
		type.innerHTML = '1 (verb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '60/100';		
		break;			
		case 361:
		result.innerHTML = 'etsiä';
		trad.innerHTML = 'to search';
		type.innerHTML = '7 (verb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '61/100';		
		break;				
		case 362:
		result.innerHTML = 'onnistua';
		trad.innerHTML = 'to succeed';
		type.innerHTML = '2 (verb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '62/100';		
		break;
		case 363:
		result.innerHTML = 'lentää';
		trad.innerHTML = 'to fly';
		type.innerHTML = '6 (verb)';
		gradation.innerHTML = 'NT-NN';
		rating.innerHTML = '63/100';		
		break;		
		case 364:
		result.innerHTML = 'päättää';
		trad.innerHTML = 'to decide';
		type.innerHTML = '1 (verb)';
		gradation.innerHTML = 'TT-T';
		rating.innerHTML = '64/100';		
		break;		
		case 365:
		result.innerHTML = 'juhlia';
		trad.innerHTML = 'to celebrate';
		type.innerHTML = '7 (verb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '65/100';		
		break;		
		case 366:
		result.innerHTML = 'luoda';
		trad.innerHTML = 'to create';
		type.innerHTML = '9 (verb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '66/100';		
		break;		
		case 367:
		result.innerHTML = 'katsoa';
		trad.innerHTML = 'to watch';
		type.innerHTML = '2 (verb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '67/100';		
		break;		
		case 368:
		result.innerHTML = 'harjoittaa';
		trad.innerHTML = 'to practice';
		type.innerHTML = '1 (verb)';
		gradation.innerHTML = 'TT-T';
		rating.innerHTML = '68/100';		
		break;		
		case 369:
		result.innerHTML = 'nukkua';
		trad.innerHTML = 'to sleep';
		type.innerHTML = '2 (verb)';
		gradation.innerHTML = 'KK-K';
		rating.innerHTML = '69/100';		
		break;		
		case 370:
		result.innerHTML = 'käyttää';
		trad.innerHTML = 'to use';
		type.innerHTML = '1 (verb)';
		gradation.innerHTML = 'TT-T';
		rating.innerHTML = '70/100';		
		break;			
		case 371:
		result.innerHTML = 'pelata';
		trad.innerHTML = 'to play';
		type.innerHTML = '4 (verb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '71/100';		
		break;				
		case 372:
		result.innerHTML = 'uskoa';
		trad.innerHTML = 'to believe';
		type.innerHTML = '2 (verb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '72/100';		
		break;
		case 373:
		result.innerHTML = 'liittyä';
		trad.innerHTML = 'to join';
		type.innerHTML = '2 (verb)';
		gradation.innerHTML = 'TT-T';
		rating.innerHTML = '73/100';		
		break;		
		case 374:
		result.innerHTML = 'nousta';
		trad.innerHTML = 'to raise, to get up';
		type.innerHTML = '12 (verb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '74/100';		
		break;		
		case 375:
		result.innerHTML = 'rakastaa';
		trad.innerHTML = 'to love';
		type.innerHTML = '1 (verb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '75/100';		
		break;		
		case 376:
		result.innerHTML = 'tilata';
		trad.innerHTML = 'to order';
		type.innerHTML = '4 (verb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '76/100';		
		break;		
		case 377:
		result.innerHTML = 'pestä';
		trad.innerHTML = 'to wash';
		type.innerHTML = '12 (verb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '77/100';		
		break;		
		case 378:
		result.innerHTML = 'valita';
		trad.innerHTML = 'to choose';
		type.innerHTML = '10 (verb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '78/100';		
		break;		
		case 379:
		result.innerHTML = 'suunnitella';
		trad.innerHTML = 'to plan';
		type.innerHTML = '3 (verb)';
		gradation.innerHTML = 'T-TT';
		rating.innerHTML = '79/100';		
		break;		
		case 380:
		result.innerHTML = 'parantaa';
		trad.innerHTML = 'to improve';
		type.innerHTML = '6 (verb)';
		gradation.innerHTML = 'NT-NN';
		rating.innerHTML = '80/100';		
		break;				
		case 381:
		result.innerHTML = 'riittää';
		trad.innerHTML = 'to be enough of';
		type.innerHTML = '1 (verb)';
		gradation.innerHTML = 'TT-T';
		rating.innerHTML = '81/100';		
		break;				
		case 382:
		result.innerHTML = 'unohtaa';
		trad.innerHTML = 'to forget';
		type.innerHTML = '1 (verb)';
		gradation.innerHTML = 'T-D';
		rating.innerHTML = '82/100';		
		break;
		case 383:
		result.innerHTML = 'soittaa';
		trad.innerHTML = 'to call';
		type.innerHTML = '1 (verb)';
		gradation.innerHTML = 'TT-T';
		rating.innerHTML = '83/100';		
		break;		
		case 384:
		result.innerHTML = 'tavata';
		trad.innerHTML = 'to meet';
		type.innerHTML = '4 (verb)';
		gradation.innerHTML = 'V-P';
		rating.innerHTML = '84/100';		
		break;		
		case 385:
		result.innerHTML = 'saapua';
		trad.innerHTML = 'to arrive';
		type.innerHTML = '2 (verb)';
		gradation.innerHTML = 'P-V';
		rating.innerHTML = '85/100';		
		break;		
		case 386:
		result.innerHTML = 'toimia';
		trad.innerHTML = 'to function, to operate';
		type.innerHTML = '7 (verb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '86/100';		
		break;		
		case 387:
		result.innerHTML = 'kuulla';
		trad.innerHTML = 'to hear';
		type.innerHTML = '3 (verb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '87/100';		
		break;		
		case 388:
		result.innerHTML = 'lähettää';
		trad.innerHTML = 'to send';
		type.innerHTML = '1 (verb)';
		gradation.innerHTML = 'TT-T';
		rating.innerHTML = '88/100';		
		break;		
		case 389:
		result.innerHTML = 'tutustua';
		trad.innerHTML = 'to get acquainted';
		type.innerHTML = '2 (verb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '89/100';		
		break;		
		case 390:
		result.innerHTML = 'palata';
		trad.innerHTML = 'to return';
		type.innerHTML = '4 (verb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '90/100';		
		break;			
		case 391:
		result.innerHTML = 'maalata';
		trad.innerHTML = 'to paint';
		type.innerHTML = '4 (verb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '91/100';		
		break;				
		case 392:
		result.innerHTML = 'laittaa';
		trad.innerHTML = 'to put';
		type.innerHTML = '1 (verb)';
		gradation.innerHTML = 'TT-T';
		rating.innerHTML = '92/100';		
		break;
		case 393:
		result.innerHTML = 'hymyillä';
		trad.innerHTML = 'to smile';
		type.innerHTML = '3 (verb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '93/100';		
		break;		
		case 394:
		result.innerHTML = 'uida';
		trad.innerHTML = 'to swim';
		type.innerHTML = '13 (verb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '94/100';		
		break;		
		case 395:
		result.innerHTML = 'levätä';
		trad.innerHTML = 'to rest';
		type.innerHTML = '4 (verb)';
		gradation.innerHTML = 'V-P';
		rating.innerHTML = '95/100';		
		break;		
		case 396:
		result.innerHTML = 'siivota';
		trad.innerHTML = 'to clear';
		type.innerHTML = '15 (verb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '96/100';		
		break;		
		case 397:
		result.innerHTML = 'suorittaa';
		trad.innerHTML = 'to carry out';
		type.innerHTML = '1 (verb)';
		gradation.innerHTML = 'TT-T';
		rating.innerHTML = '97/100';		
		break;		
		case 398:
		result.innerHTML = 'tapahtua';
		trad.innerHTML = 'to happen';
		type.innerHTML = '2 (verb)';
		gradation.innerHTML = 'T-D';
		rating.innerHTML = '98/100';		
		break;		
		case 399:
		result.innerHTML = 'kääntää';
		trad.innerHTML = 'to translate';
		type.innerHTML = '6 (verb)';
		gradation.innerHTML = 'NT-NN';
		rating.innerHTML = '99/100';		
		break;		
		case 400:
		result.innerHTML = 'unelmoida';
		trad.innerHTML = 'to dream';
		type.innerHTML = '13 (verb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '100/100';		
		break;			
		case 401:
		result.innerHTML = 'lisää';
		trad.innerHTML = 'more';
		type.innerHTML = 'N/A (adverb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '1/50';		
		break;				
		case 402:
		result.innerHTML = 'vain';
		trad.innerHTML = 'only';
		type.innerHTML = 'N/A (adverb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '2/50';		
		break;
		case 403:
		result.innerHTML = 'jo';
		trad.innerHTML = 'already';
		type.innerHTML = 'N/A (adverb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '3/50';		
		break;		
		case 404:
		result.innerHTML = 'nyt';
		trad.innerHTML = 'now';
		type.innerHTML = 'N/A (adverb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '4/50';		
		break;		
		case 405:
		result.innerHTML = 'myös';
		trad.innerHTML = 'also';
		type.innerHTML = 'N/A (adverb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '5/50';		
		break;		
		case 406:
		result.innerHTML = 'aina';
		trad.innerHTML = 'always';
		type.innerHTML = 'N/A (adverb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '6/50';		
		break;		
		case 407:
		result.innerHTML = 'niin';
		trad.innerHTML = 'so, as';
		type.innerHTML = 'N/A (adverb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '7/50';		
		break;		
		case 408:
		result.innerHTML = 'vielä';
		trad.innerHTML = 'still';
		type.innerHTML = 'N/A (adverb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '8/50';		
		break;		
		case 409:
		result.innerHTML = 'sitten';
		trad.innerHTML = 'then';
		type.innerHTML = 'N/A (adverb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '9/50';		
		break;		
		case 410:
		result.innerHTML = 'ennen';
		trad.innerHTML = 'before';
		type.innerHTML = 'N/A (adverb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '10/50';		
		break;			
		case 411:
		result.innerHTML = 'heti';
		trad.innerHTML = 'immediately';
		type.innerHTML = 'N/A (adverb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '11/50';		
		break;				
		case 412:
		result.innerHTML = 'paljon';
		trad.innerHTML = 'much, many';
		type.innerHTML = 'N/A (adverb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '12/50';		
		break;
		case 413:
		result.innerHTML = 'miten';
		trad.innerHTML = 'how';
		type.innerHTML = 'N/A (adverb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '13/50';		
		break;		
		case 414:
		result.innerHTML = 'taas';
		trad.innerHTML = 'again';
		type.innerHTML = 'N/A (adverb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '14/50';		
		break;		
		case 415:
		result.innerHTML = 'hyvin';
		trad.innerHTML = 'very';
		type.innerHTML = 'N/A (adverb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '15/50';		
		break;		
		case 416:
		result.innerHTML = 'ainakin';
		trad.innerHTML = 'at least';
		type.innerHTML = 'N/A (adverb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '16/50';		
		break;		
		case 417:
		result.innerHTML = 'pois';
		trad.innerHTML = 'away';
		type.innerHTML = 'N/A (adverb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '17/50';		
		break;		
		case 418:
		result.innerHTML = 'takaisin';
		trad.innerHTML = 'back';
		type.innerHTML = 'N/A (adverb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '18/50';		
		break;		
		case 419:
		result.innerHTML = 'koska';
		trad.innerHTML = 'because';
		type.innerHTML = 'N/A (adverb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '19/50';		
		break;		
		case 420:
		result.innerHTML = 'lisäksi';
		trad.innerHTML = 'in addition';
		type.innerHTML = 'N/A (adverb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '20/50';		
		break;				
		case 421:
		result.innerHTML = 'miksi';
		trad.innerHTML = 'why';
		type.innerHTML = 'N/A (adverb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '21/50';		
		break;				
		case 422:
		result.innerHTML = 'tänään';
		trad.innerHTML = 'today';
		type.innerHTML = 'N/A (adverb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '22/50';		
		break;
		case 423:
		result.innerHTML = 'enemmän';
		trad.innerHTML = 'more';
		type.innerHTML = 'N/A (adverb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '23/50';		
		break;		
		case 424:
		result.innerHTML = 'no';
		trad.innerHTML = 'well';
		type.innerHTML = 'N/A (adverb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '24/50';		
		break;		
		case 425:
		result.innerHTML = 'ihan';
		trad.innerHTML = 'quite';
		type.innerHTML = 'N/A (adverb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '25/50';		
		break;		
		case 426:
		result.innerHTML = 'noin';
		trad.innerHTML = 'around, about';
		type.innerHTML = 'N/A (adverb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '26/50';		
		break;		
		case 427:
		result.innerHTML = 'täällä';
		trad.innerHTML = 'here';
		type.innerHTML = 'N/A (adverb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '27/50';		
		break;		
		case 428:
		result.innerHTML = 'usein';
		trad.innerHTML = 'often';
		type.innerHTML = 'N/A (adverb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '28/50';		
		break;		
		case 429:
		result.innerHTML = 'helposti';
		trad.innerHTML = 'easily';
		type.innerHTML = 'N/A (adverb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '29/50';		
		break;		
		case 430:
		result.innerHTML = 'kuitenkin';
		trad.innerHTML = 'however';
		type.innerHTML = 'N/A (adverb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '30/50';		
		break;			
		case 431:
		result.innerHTML = 'kuinka';
		trad.innerHTML = 'how';
		type.innerHTML = 'N/A (adverb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '31/50';		
		break;				
		case 432:
		result.innerHTML = 'yhdessä';
		trad.innerHTML = 'together';
		type.innerHTML = 'N/A (adverb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '32/50';		
		break;
		case 433:
		result.innerHTML = 'mikäli';
		trad.innerHTML = 'providing that';
		type.innerHTML = 'N/A (adverb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '33/50';		
		break;		
		case 434:
		result.innerHTML = 'vähän';
		trad.innerHTML = 'only';
		type.innerHTML = 'N/A (adverb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '34/50';		
		break;		
		case 435:
		result.innerHTML = 'esimerkiksi';
		trad.innerHTML = 'for example';
		type.innerHTML = 'N/A (adverb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '35/50';		
		break;		
		case 436:
		result.innerHTML = 'ehkä';
		trad.innerHTML = 'maybe';
		type.innerHTML = 'N/A (adverb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '36/50';		
		break;		
		case 437:
		result.innerHTML = 'ensin';
		trad.innerHTML = 'at first';
		type.innerHTML = 'N/A (adverb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '37/50';		
		break;		
		case 438:
		result.innerHTML = 'enää';
		trad.innerHTML = 'any more';
		type.innerHTML = 'N/A (adverb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '38/50';		
		break;		
		case 439:
		result.innerHTML = 'todella';
		trad.innerHTML = 'really';
		type.innerHTML = 'N/A (adverb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '39/50';		
		break;		
		case 440:
		result.innerHTML = 'pian';
		trad.innerHTML = 'soon';
		type.innerHTML = 'N/A (adverb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '40/50';		
		break;			
		case 441:
		result.innerHTML = 'erittäin';
		trad.innerHTML = 'very';
		type.innerHTML = 'N/A (adverb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '41/50';		
		break;				
		case 442:
		result.innerHTML = 'oikein';
		trad.innerHTML = 'really';
		type.innerHTML = 'N/A (adverb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '42/50';		
		break;
		case 443:
		result.innerHTML = 'lähellä';
		trad.innerHTML = 'near';
		type.innerHTML = 'N/A (adverb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '43/50';		
		break;		
		case 444:
		result.innerHTML = 'varmasti';
		trad.innerHTML = 'surely';
		type.innerHTML = 'N/A (adverb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '44/50';		
		break;		
		case 445:
		result.innerHTML = 'siellä';
		trad.innerHTML = 'there';
		type.innerHTML = 'N/A (adverb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '45/50';		
		break;		
		case 446:
		result.innerHTML = 'eilen';
		trad.innerHTML = 'yesterday';
		type.innerHTML = 'N/A (adverb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '46/50';		
		break;		
		case 447:
		result.innerHTML = 'erityisesti';
		trad.innerHTML = 'especially';
		type.innerHTML = 'N/A (adverb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '47/50';		
		break;		
		case 448:
		result.innerHTML = 'melko';
		trad.innerHTML = 'quite';
		type.innerHTML = 'N/A (adverb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '48/50';		
		break;		
		case 449:
		result.innerHTML = 'melkein';
		trad.innerHTML = 'almost';
		type.innerHTML = 'N/A (adverb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '49/50';		
		break;		
		case 450:
		result.innerHTML = 'tietysti';
		trad.innerHTML = 'of course';
		type.innerHTML = 'N/A (adverb)';
		gradation.innerHTML = '—';
		rating.innerHTML = '50/50';		
		break;	
		case 451:
		result.innerHTML = 'minä';
		trad.innerHTML = 'I';
		type.innerHTML = 'N/A (other)';
		gradation.innerHTML = '—';
		rating.innerHTML = '—';			
		break;				
		case 452:
		result.innerHTML = 'sinä';
		trad.innerHTML = 'you';
		type.innerHTML = 'N/A (other)';
		gradation.innerHTML = '—';
		rating.innerHTML = '—';		
		break;
		case 453:
		result.innerHTML = 'hän';
		trad.innerHTML = 'he/she/it';
		type.innerHTML = 'N/A (other)';
		gradation.innerHTML = '—';
		rating.innerHTML = '—';			
		break;		
		case 454:
		result.innerHTML = 'me';
		trad.innerHTML = 'we';
		type.innerHTML = 'N/A (other)';
		gradation.innerHTML = '—';
		rating.innerHTML = '—';		
		break;		
		case 455:
		result.innerHTML = 'te';
		trad.innerHTML = 'you (plural)';
		type.innerHTML = 'N/A (other)';
		gradation.innerHTML = '—';
		rating.innerHTML = '—';		
		break;		
		case 456:
		result.innerHTML = 'he';
		trad.innerHTML = 'they';
		type.innerHTML = 'N/A (other)';
		gradation.innerHTML = '—';
		rating.innerHTML = '—';		
		break;		
		case 457:
		result.innerHTML = 'se';
		trad.innerHTML = 'it';
		type.innerHTML = 'N/A (other)';
		gradation.innerHTML = '—';
		rating.innerHTML = '—';			
		break;		
		case 458:
		result.innerHTML = 'tuo';
		trad.innerHTML = 'that';
		type.innerHTML = 'N/A (other)';
		gradation.innerHTML = '—';
		rating.innerHTML = '—';		
		break;		
		case 459:
		result.innerHTML = 'tämä';
		trad.innerHTML = 'this';
		type.innerHTML = 'N/A (other)';
		gradation.innerHTML = '—';
		rating.innerHTML = '—';		
		break;		
		case 460:
		result.innerHTML = 'ne';
		trad.innerHTML = 'they (objects)';
		type.innerHTML = 'N/A (other)';
		gradation.innerHTML = '—';
		rating.innerHTML = '—';			
		break;			
		case 461:
		result.innerHTML = 'nuo';
		trad.innerHTML = 'those';
		type.innerHTML = 'N/A (other)';
		gradation.innerHTML = '—';
		rating.innerHTML = '—';			
		break;				
		case 462:
		result.innerHTML = 'nämä';
		trad.innerHTML = 'these';
		type.innerHTML = 'N/A (other)';
		gradation.innerHTML = '—';
		rating.innerHTML = '—';			
		break;
		case 463:
		result.innerHTML = 'kuka';
		trad.innerHTML = 'who';
		type.innerHTML = 'N/A (other)';
		gradation.innerHTML = '—';
		rating.innerHTML = '—';			
		break;		
		case 464:
		result.innerHTML = 'joka';
		trad.innerHTML = 'who';
		type.innerHTML = 'N/A (other)';
		gradation.innerHTML = '—';
		rating.innerHTML = '—';		
		break;		
		case 465:
		result.innerHTML = 'kaikki';
		trad.innerHTML = 'all';
		type.innerHTML = 'N/A (other)';
		gradation.innerHTML = '—';
		rating.innerHTML = '—';		
		break;		
		case 466:
		result.innerHTML = 'moni';
		trad.innerHTML = 'many';
		type.innerHTML = 'N/A (other)';
		gradation.innerHTML = '—';
		rating.innerHTML = '—';			
		break;		
		case 467:
		result.innerHTML = 'että';
		trad.innerHTML = 'that (conjunction)';
		type.innerHTML = 'N/A (other)';
		gradation.innerHTML = '—';
		rating.innerHTML = '—';		
		break;		
		case 468:
		result.innerHTML = 'ja';
		trad.innerHTML = 'and';
		type.innerHTML = 'N/A (other)';
		gradation.innerHTML = '—';
		rating.innerHTML = '—';		
		break;		
		case 469:
		result.innerHTML = 'mutta';
		trad.innerHTML = 'but';
		type.innerHTML = 'N/A (other)';
		gradation.innerHTML = '—';
		rating.innerHTML = '—';		
		break;		
		case 470:
		result.innerHTML = 'tai';
		trad.innerHTML = 'or';
		type.innerHTML = 'N/A (other)';
		gradation.innerHTML = '—';
		rating.innerHTML = '—';			
		break;			
		case 471:
		result.innerHTML = 'edessä';
		trad.innerHTML = 'in front of';
		type.innerHTML = 'N/A (other)';
		gradation.innerHTML = '—';
		rating.innerHTML = '—';		
		break;				
		case 472:
		result.innerHTML = 'kiitos';
		trad.innerHTML = 'thanks';
		type.innerHTML = 'N/A (other)';
		gradation.innerHTML = '—';
		rating.innerHTML = '—';		
		break;
		case 473:
		result.innerHTML = 'hei';
		trad.innerHTML = 'hello';
		type.innerHTML = 'N/A (other)';
		gradation.innerHTML = '—';
		rating.innerHTML = '—';		
		break;		
		case 474:
		result.innerHTML = 'maanantai';
		trad.innerHTML = 'Monday';
		type.innerHTML = 'N/A (other)';
		gradation.innerHTML = '—';
		rating.innerHTML = '—';			
		break;		
		case 475:
		result.innerHTML = 'tiistai';
		trad.innerHTML = 'Tuesday';
		type.innerHTML = 'N/A (other)';
		gradation.innerHTML = '—';
		rating.innerHTML = '—';			
		break;		
		case 476:
		result.innerHTML = 'keskiviikko';
		trad.innerHTML = 'Wednesday';
		type.innerHTML = 'N/A (other)';
		gradation.innerHTML = '—';
		rating.innerHTML = '—';		
		break;		
		case 477:
		result.innerHTML = 'torstai';
		trad.innerHTML = 'Thursday';
		type.innerHTML = 'N/A (other)';
		gradation.innerHTML = '—';
		rating.innerHTML = '—';		
		break;		
		case 478:
		result.innerHTML = 'perjantai';
		trad.innerHTML = 'Friday';
		type.innerHTML = 'N/A (other)';
		gradation.innerHTML = '—';
		rating.innerHTML = '—';		
		break;		
		case 479:
		result.innerHTML = 'lauantai';
		trad.innerHTML = 'Saturday';
		type.innerHTML = 'N/A (other)';
		gradation.innerHTML = '—';
		rating.innerHTML = '—';		
		break;		
		case 480:
		result.innerHTML = 'sunnuntai';
		trad.innerHTML = 'Sunday';
		type.innerHTML = 'N/A (other)';
		gradation.innerHTML = '—';
		rating.innerHTML = '—';		
		break;				
		case 481:
		result.innerHTML = 'tammikuu';
		trad.innerHTML = 'January';
		type.innerHTML = 'N/A (other)';
		gradation.innerHTML = '—';
		rating.innerHTML = '—';		
		break;				
		case 482:
		result.innerHTML = 'helmikuu';
		trad.innerHTML = 'February';
		type.innerHTML = 'N/A (other)';
		gradation.innerHTML = '—';
		rating.innerHTML = '—';			
		break;
		case 483:
		result.innerHTML = 'maaliskuu';
		trad.innerHTML = 'March';
		type.innerHTML = 'N/A (other)';
		gradation.innerHTML = '—';
		rating.innerHTML = '—';			
		break;		
		case 484:
		result.innerHTML = 'huhtikuu';
		trad.innerHTML = 'April';
		type.innerHTML = 'N/A (other)';
		gradation.innerHTML = '—';
		rating.innerHTML = '—';		
		break;		
		case 485:
		result.innerHTML = 'toukokuu';
		trad.innerHTML = 'May';
		type.innerHTML = 'N/A (other)';
		gradation.innerHTML = '—';
		rating.innerHTML = '—';		
		break;		
		case 486:
		result.innerHTML = 'kesäkuu';
		trad.innerHTML = 'June';
		type.innerHTML = 'N/A (other)';
		gradation.innerHTML = '—';
		rating.innerHTML = '—';		
		break;		
		case 487:
		result.innerHTML = 'heinäkuu';
		trad.innerHTML = 'July';
		type.innerHTML = 'N/A (other)';
		gradation.innerHTML = '—';
		rating.innerHTML = '—';			
		break;		
		case 488:
		result.innerHTML = 'elokuu';
		trad.innerHTML = 'August';
		type.innerHTML = 'N/A (other)';
		gradation.innerHTML = '—';
		rating.innerHTML = '—';		
		break;		
		case 489:
		result.innerHTML = 'syyskuu';
		trad.innerHTML = 'September';
		type.innerHTML = 'N/A (other)';
		gradation.innerHTML = '—';
		rating.innerHTML = '—';		
		break;		
		case 490:
		result.innerHTML = 'lokakuu';
		trad.innerHTML = 'October';
		type.innerHTML = 'N/A (other)';
		gradation.innerHTML = '—';
		rating.innerHTML = '—';		
		break;			
		case 491:
		result.innerHTML = 'marraskuu';
		trad.innerHTML = 'November';
		type.innerHTML = 'N/A (other)';
		gradation.innerHTML = '—';
		rating.innerHTML = '—';		
		break;				
		case 492:
		result.innerHTML = 'joulukuu';
		trad.innerHTML = 'December';
		type.innerHTML = 'N/A (other)';
		gradation.innerHTML = '—';
		rating.innerHTML = '—';		
		break;
		case 493:
		result.innerHTML = 'Venäjä';
		trad.innerHTML = 'Russia';
		type.innerHTML = 'N/A (other)';
		gradation.innerHTML = '—';
		rating.innerHTML = '—';		
		break;		
		case 494:
		result.innerHTML = 'Suomi';
		trad.innerHTML = 'Finland';
		type.innerHTML = 'N/A (other)';
		gradation.innerHTML = '—';
		rating.innerHTML = '—';	
		break;		
		case 495:
		result.innerHTML = 'Yhdysvallat';
		trad.innerHTML = 'USA';
		type.innerHTML = 'N/A (other)';
		gradation.innerHTML = '—';
		rating.innerHTML = '—';		
		break;		
		case 496:
		result.innerHTML = 'yksi';
		trad.innerHTML = 'one';
		type.innerHTML = 'N/A (other)';
		gradation.innerHTML = '—';
		rating.innerHTML = '—';			
		break;		
		case 497:
		result.innerHTML = 'kaksi';
		trad.innerHTML = 'two';
		type.innerHTML = 'N/A (other)';
		gradation.innerHTML = '—';
		rating.innerHTML = '—';			
		break;		
		case 498:
		result.innerHTML = 'kolme';
		trad.innerHTML = 'three';
		type.innerHTML = 'N/A (other)';
		gradation.innerHTML = '—';
		rating.innerHTML = '—';			
		break;		
		case 499:
		result.innerHTML = 'neljä';
		trad.innerHTML = 'four';
		type.innerHTML = 'N/A (other)';
		gradation.innerHTML = '—';
		rating.innerHTML = '—';			
		break;		
		case 500:
		result.innerHTML = 'viisi';
		trad.innerHTML = 'five';
		type.innerHTML = 'N/A (other)';
		gradation.innerHTML = '—';
		rating.innerHTML = '—';		
		break;					
	}
	if (count < 300) {
	nom_sin.innerHTML = result.innerHTML;
	}
}

let grid_down = 0;

show.addEventListener('click', () => {
	if (grid_down == 0) {
	document.getElementById('wrapper2').style.display = 'grid';
	grid_down = 1;
	return;
	} else {
	document.getElementById('wrapper2').style.display = 'none';
    grid_down = 0;
 }	
})

trying.addEventListener('click', () => { gen() });