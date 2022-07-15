import { useCallback, useMemo, useState } from "react";

export function useForm<T extends object>(initialState: T) {
  const [form, setForm] = useState<T>(initialState);
  const [errors, setErrors] = useState<Record<keyof T, string> | null>(null);
  const [dirty, setDirty] = useState<boolean>(false);

  const register = useCallback(
    (field: keyof T): React.InputHTMLAttributes<HTMLInputElement> => {
      return {
        onChange: (e) => {
          setDirty(true);
          setForm((prev) => ({ ...prev, [field]: e.target.value }));
        },
      };
    },
    []
  );

  return useMemo(
    () => ({
      form,
      register,
      errors,
      dirty,
      valid: !errors || !!Object.values(errors).length
    }),
    []
  );
}
