import Rect from 'react';
import { useTranslation } from "react-i18next";

const User = () => {
    const { t } = useTranslation();

    return (
        <div className="content content--right content--blue author">
            <div className="author__img"></div>
            <div>
                <div className="author__name">{t("user.name")}</div>
                <div className="author__info">{t("user.position")}</div>
            </div>
        </div>
    );
}

export default User