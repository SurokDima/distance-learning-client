import { useCallback, useEffect } from 'react';
import {
  FieldValues,
  UseFormProps,
  UseFormReturn,
  useForm,
} from 'react-hook-form';

// TODO add no-console eslint rule

export const useFormWithPersist = <
  TFieldValues extends FieldValues = FieldValues,
  TContext = any,
  TTransformedValues extends FieldValues | undefined = undefined
>(
  {
    localStorageKey,
    storage,
  }: {
    localStorageKey: string;
    storage: Storage;
  },
  props: UseFormProps<TFieldValues, TContext>
): UseFormReturn<TFieldValues, TContext, TTransformedValues> => {
  const getSavedData = useCallback(() => {
    const data = storage.getItem(localStorageKey);
    if (!data) return null;

    // Parse it to a javaScript object
    try {
      const form = JSON.parse(data);
      console.log('form', form);

      return form;
    } catch (err) {
      return null;
    }
  }, [localStorageKey, storage]);

  const { watch, ...restForm } = useForm<
    TFieldValues,
    TContext,
    TTransformedValues
  >({ ...props, defaultValues: getSavedData() ?? props.defaultValues });

  const formState = watch();

  useEffect(() => {
    storage.setItem(localStorageKey, JSON.stringify(formState));
  }, [formState, localStorageKey, storage]);

  return { watch, ...restForm };
};
