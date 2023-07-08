import { useCallback, useEffect } from 'react';
import { FieldValues, UseFormProps, useForm } from 'react-hook-form';

import {
  IStorageProps,
  IUseFormWithPersistReturnValue,
} from '@/modules/common/hooks/useFormWithPersist/interfaces';

export const useFormWithPersist = <
  TFieldValues extends FieldValues = FieldValues,
  TContext = any,
  TTransformedValues extends FieldValues | undefined = undefined
>(
  { key, storage }: IStorageProps,
  props: UseFormProps<TFieldValues, TContext>
): IUseFormWithPersistReturnValue<
  TFieldValues,
  TContext,
  TTransformedValues
> & {
  clearStorage: () => void;
} => {
  const getSavedData = useCallback(() => {
    const data = storage.getItem(key);
    if (!data) return null;

    // Parse it to a javaScript object
    try {
      const form = JSON.parse(data);
      return form;
    } catch (err) {
      return null;
    }
  }, [key, storage]);

  const { watch, ...restForm } = useForm<
    TFieldValues,
    TContext,
    TTransformedValues
  >({ ...props, defaultValues: getSavedData() ?? props.defaultValues });

  const formState = watch();

  useEffect(() => {
    storage.setItem(key, JSON.stringify(formState));
  }, [formState, key, storage]);

  const clearStorage = useCallback(() => {
    storage.removeItem(key);
  }, [key, storage]);

  return { watch, clearStorage, ...restForm };
};
