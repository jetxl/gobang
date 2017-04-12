import GoAction from './GoAction'

let DomAction = new GoAction(15);

let draw = DomAction.draw;

DomAction.draw = (x, y, status) => {
    draw(...arguments);

}