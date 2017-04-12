//单位向量数组，顺时针
const VECTOR = {
    0: [-1, -1],//左上
    1: [0, -1],//上
    2: [1, -1],//右上
    3: [1, 0],//右
    4: [1, 1],//右下
    5: [0, 1],//下
    6: [-1, 1],//左下
    7: [-1, 0],//左
}


//指定方向获取连续相同数量的构造函数
let getMaxFactory = (temp, x, y) => (diffX, diffY) => {
    let n = 1;
    while (temp[y + n * diffY][x + n * diffX] == temp[y][x]) {
        n++;
    }
    return n;
}

//校验是否存有任意方向存在连续5个
export const checkWin = (temp, x, y) => {
    let getMax = getMaxFactory(temp, x, y);
    for (let i = 0; i < 4; i++) {
        const [ix, iy] = VECTOR[i];
        if (getMax(ix, iy) + getMax(-ix, -iy) > 5) {
            return true;
        }
    }
    return false;
}

//校验是否填满
export const checkFull = (temp)=>{
    for (let y = 0; y < temp.length; y++) {
        for (let x = 0; x < temp[y].length; x++) {
            if (typeof temp[y][x] == 'undefined') {
                return false;
            }
        }
    }
    return true;
}


