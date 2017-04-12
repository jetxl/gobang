import {checkFull, checkWin} from './common'

function GoAction(length = 15, maxBack = 3) {

    this.state = {
        active: 1,//当前操作对象、0代表白色，1代表黑色
        status: 0,//0准备状态，1开始对战，2分出胜负，3平局
        leftList: [],
        rightList: [],
        maxBack,//允许保存最大步数
        temp: []
    }

    for (let i = length; i > 0; i--) {
        this.state.temp.push(new Array(length))
    }
}

//判断是否可以下棋
GoAction.prototype.check = (x, y) => {
    return (this.state.status == 1) && typeof this.state.temp[y][x] == 'undefined';
};

GoAction.prototype.checkStatus = (x, y) => {
    //判断当前位置是否有5连
    let temp = this.state.temp;

    if (checkWin(temp, x, y)) {
        this.state.status = 2;
        return true;
    } else if (checkFull(temp)) {
        this.state.status = 3;
        return true;
    }

    return false
};

//绘制status:0,1,undefined(最终执行)
GoAction.prototype.draw = (x, y, status) => {
    temp[y][x] = status;
    this.state.active = 1 ^ this.state.active;

    //如果是悔棋则不需要校验游戏是否结束
    status && this.checkStatus(x, y);

    this.doDraw && this.doDraw.apply(this, arguments);
};

//操作一步
GoAction.prototype.set = (x, y) => {
    if (this.check(x, y)) {
        let opt = [x, y, this.state.active];
        this.state.leftList.push(opt);
        this.draw.apply(this, opt);
    }
};
//前进一步
GoAction.prototype.next = () => {
    if (this.state.rightList.length) {
        let opt = this.state.rightList.pop();
        this.state.leftList.push(opt);
        this.draw.apply(this, opt);
    }
};

//后退一步
GoAction.prototype.back = () => {
    if (this.state.leftList.length) {
        let opt = this.state.leftList.pop();
        this.state.rightList.push(opt);
        this.draw(opt[0], opt[1]);
    }
};

export default GoAction;
