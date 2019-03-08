class Joueur {



	constructor(nom){
		this.id=nom;
		this.played= new Array();
		this.played = [true,true,true,true,true,true,true,true,true];
	}


	affichage() {
		return "<h1> Joueur " +this.nom+ ", c'est à vous !</h1>";
	}

	available(c){
		if (this.played[c] == false){
			return false;
		}
		else {
			return true;
		}
	}

	win(){
		if ((this.played[0] == false ) &&  (this.played[1] == false) && (this.played[2] == false)){
			return true;
		}
		else if ((this.played[3] == false ) && (this.played[4] == false ) && (this.played[5] == false )){
			return true;
		}
		else if ((this.played[6] == false ) &&  (this.played[7] == false) && (this.played[8] == false )){
			return true;
		}
		else if ((this.played[0] == false) && (this.played[3] == false)  && (this.played[6] == false )){
			return true;
		}
		else if  ((this.played[1] == false) && (this.played[4] == false)  && (this.played[7] == false )){
			return true;
		}
		else if  ((this.played[2] == false) && (this.played[5] == false)  && (this.played[8] == false )){
			return true;
		}
		else if  ((this.played[0] == false) && (this.played[4] == false)  && (this.played[8] == false )){
			return true;
		}
		else if ((this.played[2] == false) && (this.played[4] == false)  && (this.played[6] == false )){
			return true;
		}
		else {
			return false;
		}
	}



}
