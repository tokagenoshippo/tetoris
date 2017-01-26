class Tetorimino{
	constructor(x,y){
		this.x=x;
		this.y=y;
		this.lookPointArray=new Array();
		this.usetile=[0,0];
	}
	move(dx,dy){
		//this.setlookPoint(dx,dy);
		var tmp_usetile=this.usetile.concat();
		for(var i=0;i<tmp_usetile.length;i+=2){
			//console.log(i);
			tmp_usetile[i]+=dx;
			tmp_usetile[i+1]+=dy;
		}
		console.log(tmp_usetile);
		if(f.hasSpace(tmp_usetile)){
			this.x+=dx;
			this.y+=dy;
		}
		else if(dy==1){
			frame_tmp=frameCount%30;
			this.putmino();
			for(var y=1;y<=TILE_HEIGHT;y++){
				if(f.candelete(y)){
					f.falltile(y);
				}
			}
			switch(floor(random()*2)){
			case 0:
				pl = new Mino_cube(4,1);
				break;
			case 1:
				pl= new Tetorimino(4,1);
				break;
			}
		}
	}
	putmino(){
		for(var i=0;i<this.usetile.length;i+=2){
			f.set(pl.x+this.usetile[i],pl.y+this.usetile[i+1],1);
		}
	}
	setlookPoint(dx,dy){
		 this.lookPointArray=[dx,dy];
	}
	paint(){
		fill(255,0,0);
		rectile(this.x,this.y);
	}
}
