class Tetorimino{
	constructor(x,y){
		this.x=x;
		this.y=y;
	}
	move(dx,dy){
		if(f.hasSpace(dx,dy)){
			this.x+=dx;
			this.y+=dy;
		}
		else if(dy==1){
			frame_tmp=frameCount%30;
			f.set(pl.x,pl.y,1);
			for(var y=1;y<=TILE_HEIGHT;y++){
				if(f.candelete(y)){
					f.falltile(y);
				}
			}
			pl = new Tetorimino(4,1);
		}
	}
	paint(){
		fill(255,0,0);
		rectile(this.x,this.y);
	}
}
