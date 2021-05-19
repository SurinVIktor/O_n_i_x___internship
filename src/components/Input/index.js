import { useTranslation } from "react-i18next";

import "./style.css";

const Input = ({onSubmit, onChange, value}) => {
    const { t } = useTranslation();

    return (
        <input
            type="text"
            className="input-component"
            onChange={onChange}
            onKeyPress={onSubmit}
            placeholder={t("input.placeholder")}
            value={value}
        />
    );
}

export default Input;