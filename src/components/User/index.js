import Rect from 'react';

let userName = 'Сурин Виктор';
let userPosition = 'Web Developer';

class Index extends Rect.Component {
    render() {
        return (
            <div className="content content--right content--blue author">
                <div className="author__img"></div>
                <div>
                    <div className="author__name">{userName}</div>
                    <div className="author__info">{userPosition}</div>
                </div>
            </div>
        );
    }
}

export default Index