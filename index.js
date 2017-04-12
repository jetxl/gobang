import CanvasAction from './CanvasAction'
import DomAction from './DomAction'

export default gobang = ()=>{
    let $main;
    return {
        //初始化棋盘
        init($element,version){
            $main = $element;


        },

        //悔棋
        back(){

        },

        //撤销悔棋
        next(){

        },

        //切换版本
        changeVersion(){

        },

        //同步当前状态(同步的dom节点，黑棋类，白棋类)
        listenStatus($element,class1,class2){

        }




    }
}