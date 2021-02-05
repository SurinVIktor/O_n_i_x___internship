import './reset.css';
import './style.css';

function App() {
  return (
    <div className="App">
      <div className="content title">Messenger</div>

      <div className="content description">
        <div className="description__text">
          Messenger — корпоративный мессенджер. Бесплатные и безопасные сообщения по всему миру
        </div>
        <ul>
          <li>
            <span>Дизайн:</span>
            <a className="description__link"
               href="https://www.figma.com/file/HC62Px6p0GaiZyuhPul93T/Chat-Dashboard?node-id=1%3A26">Link</a>
          </li>
          <li>
            <span>Git:</span>
            <a className="description__link"
               href="https://github.com/SurinVIktor/O_n_i_x___internship">Link</a>
          </li>
        </ul>
      </div>

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

      <div className="content content--right content--blue author">
        <div className="author__img"></div>
        <div>
          <div className="author__name">Сурин Виктор</div>
          <div className="author__info">Web Developer</div>
        </div>
      </div>
    </div>
  );
}

export default App;
