class Field{
	constructor(witdh,height){
		this.witdh=witdh;
		this.height=height;
		this.field=new Array((this.height+2)*(this.witdh+2));
		var i;
		for(i=0;i<this.field.length;i++){
			this.field[i]=0;
		}
		for(i=0; i<TILE_WIDTH+2;i++){
			this.set(i, 0, 1)
			this.set(i, TILE_HEIGHT+1, 1)
		}
		for(i=0;i<TILE_HEIGHT;i++){
			this.set(0,i,1);
			this.set(TILE_WIDTH+1,i,1);
		}
		//DEBUG
		for(i=1;i<TILE_WIDTH;i++){
			this.set(i,20,1);
		}
		//DEBUG
	}
	hasSpace(dx,dy){
		if(this.get(pl.x+dx,pl.y+dy)==1){
			return false;
		}
		return true;
	}
	candelete(y){
		for(var x=1;x<=TILE_WIDTH;x++){
			if(this.get(x,y)==0){
				return false;
			}
		}
		return true;
	}
	falltile(startY){
		for(var y=startY;y>1;y--){
			for(var x=1; x<=TILE_WIDTH;x++){
				this.set(x,y,this.get(x,y-1));
			}
		}
		for(var x=1; x<=TILE_WIDTH;x++){
			this.set(x,0,0);
		}
	}
	get(x,y){
		return this.field[(TILE_WIDTH+2)*(y+1)+x];
	}
	set(x,y,value){
		this.field[(TILE_WIDTH+2)*(y+1)+x]=value;
	}
	paint(){
		for(var y=1;y<=TILE_HEIGHT;y++){
			for(var x=1;x<=TILE_WIDTH;x++){
				if(this.get(x,y)==0){
					stroke(0);
					noFill();
					rectile(x,y);
				}
				else if(this.get(x,y)==1){
					fill(255,0,0);
					rectile(x,y);
				}
			}
		}
	}
}
