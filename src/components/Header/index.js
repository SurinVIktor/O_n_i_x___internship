import React from 'react';

const title = 'Messenger';
const description = 'Messenger — корпоративный мессенджер. Бесплатные и безопасные сообщения по всему миру';
const designAnchor = 'Link'
const designLinks = 'https://www.figma.com/file/HC62Px6p0GaiZyuhPul93T/Chat-Dashboard?node-id=1%3A26'
const gitAnchor = 'Link'
const gitLinks = 'https://github.com/SurinVIktor/O_n_i_x___internship'

class Index extends React.Component {
    render() {
        return (
            <div>
                <div className="content title">
                    {title}
                </div>
                <div className="content description">
                    <div className="description__text">
                        {description}
                    </div>
                    <ul>
                        <li>
                            <span>Дизайн:</span>
                            <a
                               className="description__link"
                               href={designLinks}
                            >{designAnchor}</a>
                        </li>
                        <li>
                            <span>Git:</span>
                            <a
                               className="description__link"
                               href={gitLinks}
                            >{gitAnchor}</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Index