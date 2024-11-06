import { useLocale } from "../contexts/Locale";

const useClientLocale = () => {
  const { commonLocale, templatesLocale } = useLocale();
  return { commonLocale, templatesLocale };
};

export default useClientLocale;
