import { useTranslation } from 'react-i18next';
import { TranslationKeys } from '../../generated/translationKeys';

interface VariableTranslationType {
   time?: Date;
   date?: Date;
   count?: number;
}

const useTypeSafeTranslation = () => {
   const { t } = useTranslation();
   return (s: TranslationKeys, f?: VariableTranslationType) => t(s, f);
};

export default useTypeSafeTranslation;
