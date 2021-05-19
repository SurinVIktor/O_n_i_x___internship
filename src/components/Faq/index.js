import React from 'react';
import { useTranslation } from "react-i18next";

const Faq = () => {
    const { t } = useTranslation();

    return(
        <div className="content workspace">
            <ol className="workspace__list">
                <li className="workspace__item">
                    <div className="workspace__question">
                        {t("faq.question_1")}
                    </div>
                    <div>
                        {t("faq.answer_1")}
                    </div>
                </li>
                <li className="workspace__item">
                    <div className="workspace__question">
                        {t("faq.question_2")}
                    </div>
                    <div>
                        {t("faq.answer_2")}
                    </div>
                </li>
                <li className="workspace__item">
                    <div className="workspace__question">
                        {t("faq.question_3")}
                    </div>
                    <div>
                        {t("faq.answer_3")}
                    </div>
                </li>
                <li className="workspace__item">
                    <div className="workspace__question">
                        {t("faq.question_4")}
                    </div>
                    <div>
                        <p className="workspace__p">{t("faq.answer_4_1")}</p>
                        <p className="workspace__p">{t("faq.answer_4_2")}</p>
                    </div>
                </li>
            </ol>
        </div>
    );
}

export default Faq