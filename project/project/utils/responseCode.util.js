import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

export const responseCode = (page, rc) => {
  const { t } = useTranslation();

  if (i18next.exists(`message_ui_util_${page}_${rc}`)) {
    return t(`message_ui_util_${page}_${rc}`);
  }

  return t(`generic_response_code_${rc}`);
};
