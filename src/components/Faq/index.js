import React from 'react';

class Faq extends React.Component {
    render() {
        return(
            <div className="content workspace">
                <ol className="workspace__list">
                    <li className="workspace__item">
                        <div className="workspace__question">
                            Что такое система контроля версий и зачем она нужна?
                        </div>
                        <div>
                            Система управления версиями позволяет хранить несколько версий одного и того же документа,
                            при необходимости возвращаться к более ранним версиям, определять, кто и когда сделал то
                            или иное изменение, и многое другое.
                        </div>
                    </li>
                    <li className="workspace__item">
                        <div className="workspace__question">
                            Git
                        </div>
                        <div>
                            checkout, add, commit, pull, push, status, log
                        </div>
                    </li>
                    <li className="workspace__item">
                        <div className="workspace__question">
                            Что такое nodejs, зачем он нужен и как устанавливать?
                        </div>
                        <div>
                            Программная платформа с помощью которой можно писать код на языке JS
                        </div>
                    </li>
                    <li className="workspace__item">
                        <div className="workspace__question">
                            Что такое менеджер пакетов, установка npm
                        </div>
                        <div>
                            <p className="workspace__p">Менеджер пакетов это преложение с помощью которого можно утсанавливать
                                различные модули и управлять зависимостями. Популярные менеджеры пакетов - npm и yarn.</p>
                            <p className="workspace__p">Для работы с npm вам просто нужно установить Node.js, npm идет с ним в
                                коробке, как бонус.</p>
                        </div>
                    </li>
                </ol>
            </div>
        );
    }
}

export default Faq