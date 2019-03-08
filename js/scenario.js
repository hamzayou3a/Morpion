var j=0;
var j0 = new Joueur(1);
var j1 = new Joueur(2);

var c = new Array();
var r = new Array();
var ca = new Array();

var m = document.getElementById('morpion');
for(let i = 0; i <= 8; i++) {
	var c_i = document.getElementById('croix' + i);
	var r_i = document.getElementById('rond' + i);
	var ca_i = document.getElementById('case' + i);
	c.push(c_i);
	r.push(r_i);
	ca.push(ca_i);
}


for(let i = 0; i <= 8; i++) {
	ca[i].onclick = function(){
		if (j0.available(i) && j1.available(i)){
			if (j == 0){
				j=1;
				c[i].style.display = "inline";
				j0.played[i] = false;
				if (j0.win()){
					m.style.display = "none";
				}
			}
			else {
				j=0;
				r[i].style.display = "inline";
				j1.played[i] = false;
				if (j1.win()){
					m.style.display = "none";
				}
			}
		}

	}
}

verif = j0.available(c[0]);

/*
var c0 = document.getElementById('croix0');
var c1 = document.getElementById('croix1');
var c2 = document.getElementById('croix2');
var c3 = document.getElementById('croix3');
var c4 = document.getElementById('croix4');
var c5 = document.getElementById('croix5');
var c6 = document.getElementById('croix6');
var c7 = document.getElementById('croix7');
var c8 = document.getElementById('croix8');


var r0 = document.getElementById('rond0');
var r1 = document.getElementById('rond1');
var r2 = document.getElementById('rond2');
var r3 = document.getElementById('rond3');
var r4 = document.getElementById('rond4');
var r5 = document.getElementById('rond5');
var r6 = document.getElementById('rond6');
var r7 = document.getElementById('rond7');
var r8 = document.getElementById('rond8');

var ca0 = document.getElementById('case0');
var ca1 = document.getElementById('case1');
var ca2 = document.getElementById('case2');
var ca3 = document.getElementById('case3');
var ca4 = document.getElementById('case4');
var ca5 = document.getElementById('case5');
var ca6 = document.getElementById('case6');
var ca7 = document.getElementById('case7');
var ca8 = document.getElementById('case8');


ca0.
*/
