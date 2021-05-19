import React from 'react';
import en from '../../img/en.png';
import ua from '../../img/ua.png';
import { useTranslation } from "react-i18next";

const designLinks = 'https://www.figma.com/file/HC62Px6p0GaiZyuhPul93T/Chat-Dashboard?node-id=1%3A26';
const gitLinks = 'https://github.com/SurinVIktor/O_n_i_x___internship';

const Header = () => {
    const { t, i18n } = useTranslation();

    return (
        <div>
            <div className="df fdr jc-sb content title">
                <h3>{t("header.title")}</h3>
                <div className="languages">
                    <a href="#"
                       className={(i18n.language  === "en") ? "lang-link lang-active" : "lang-link"}
                       onClick={() => i18n.changeLanguage("en")}>
                        <img src={en} alt="En"/>
                    </a>
                    <a href="#"
                       className={(i18n.language  === "ua") ? "lang-link lang-active" : "lang-link"}
                       onClick={() => i18n.changeLanguage("ua")}>
                        <img src={ua} alt="Ua"/>
                    </a>
                </div>
            </div>
            <div className="content description">
                <div className="description__text">
                    {t("header.description")}
                </div>
                <ul>
                    <li>
                        <span>{t("header.design")}:</span>
                        <a
                            className="description__link"
                            href={designLinks}
                        >{t("header.link")}</a>
                    </li>
                    <li>
                        <span>{t("header.git")}:</span>
                        <a
                            className="description__link"
                            href={gitLinks}
                        >{t("header.link")}</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;