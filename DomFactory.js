export default DomFactory = ($dom, action) => {
    $dom.find('[v-click]').each((i, item) => {
        $(item).click(action[$(item).attr('v-click')]);
    })

    $dom.find('[v-click]').each((i, item) => {
        action.changeStatus =
            $(item).click(action[$(item).attr('v-click')]);
    })


    // let $dom=$('.main');
    // let action={};
    let textList = {};
    $dom.find('[v-text]').each((i, item) => {
        let _this = $(item);
        let key = _this.attr('v-text');
        textList[key] = textList[key] || [];
        textList[key].push(_this);
    });

    function setText() {
        for (let key in textList) {
            let value = action[key] || '';
            Object.defineProperty(action, key, {
                get(){
                    return value;
                },
                set(newValue){
                    for (let i = textList[key].length - 1; i >= 0; i--) {
                        // debugger
                        textList[key][i].text(newValue);
                    }
                    value = newValue;
                }
            })
        }
    }


    return {
        add(type, dom){

        }
    }

}