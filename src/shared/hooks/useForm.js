import { useCallback, useMemo } from 'react';

function areEqualShallow(a, b) {
  for (const key in a) {
    if (a[key] !== b[key]) {
      return false;
    }
  }
  return true;
}

export default function useForm({
  errors = {},
  touched = {},
  values = {},
  initialValues = {},
  isValid,
  setTouched = () => {},
  setFieldValue = () => {}
}) {
  const handleChangeField = useCallback(
    (field, value) => {
      setTouched({
        ...touched,
        [field]: true
      });
      setFieldValue(field, value);
    },
    [touched, setTouched]
  );

  const isFormValid = useMemo(
    () => {
      if (!Object.keys(touched).length || areEqualShallow(initialValues, values)) {
        return false;
      }
      return isValid ? true : !Object.keys(errors).length && !!Object.keys(touched).length;
    },
    [isValid, errors, touched, initialValues, values]
  );

  const getErrorFromField = useCallback((field) =>
    errors[field] && touched[field] ? errors[field] : null
  , [errors, touched]);

  return { isFormValid, handleChangeField, getErrorFromField };
}
