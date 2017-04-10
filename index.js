let state = {
	active:1,//当前操作对象、0代表白色，1代表黑色
	leftList:[],
	rightList:[],
	max:10,//允许保存最大步数
	temp:[]
}

let action =  {
	//判断是否可行
	check(x,y){
		return false;
	},

	//绘制status:0,1,undefined
	draw(x,y,status){
		temp[x][y] = status;
		state.active = 1^state.active;
		this.doDraw && this.doDraw.apply(this,arguments);
	},

	//操作一步
	set(x,y){
		if(this.check(x,y)){
			let opt = [x,y,state.active];
			left.push(opt);
			this.draw.apply(this,opt);
		}
	},

	//前进一步
	next(){
		if(state.rightList.length){
			let opt = state.rightList.pop();
			this.draw.apply(this,opt);
			state.leftList.push(opt);
		}
	},

	//后退一步
	back(){
		if(state.leftList.length){
			let opt = state.leftList.pop();
			state.rightList.push(opt);
			this.draw(opt[0],opt[1]);
		}
	}

}