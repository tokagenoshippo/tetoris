class Mino_cube extends Tetorimino{
	constructor(x,y){
		super(x,y);
		this.usetile=[0,0 , 1,0 , 0,1 , 1,1];
	}
	/*setlookPoint(dx,dy){
		if(dy>0) super.lookPointArray= [0,dy+1,1,dy+1];
		else if(dx>0) super.lookPointArray=[dx+1,0,dx+1,1];
		else if(dx<0) super.lookPointArray= [dx,0,dx,1];
		else if(dy<0) super.lookPointArray= [0,dy,1,dy];	
	}*/
	paint(){
		fill(255,0,0);
		rectile(this.x,this.y);
		rectile(this.x+1,this.y);
		rectile(this.x,this.y+1);
		rectile(this.x+1,this.y+1);
	}
}
