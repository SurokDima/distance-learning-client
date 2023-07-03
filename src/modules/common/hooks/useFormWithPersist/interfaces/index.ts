import { FieldValues, UseFormReturn } from 'react-hook-form';

export interface IUseFormWithPersistReturnValue<
  TFieldValues extends FieldValues = FieldValues,
  TContext = any,
  TTransformedValues extends FieldValues | undefined = undefined
> extends UseFormReturn<TFieldValues, TContext, TTransformedValues> {
  clearStorage: () => void;
}

export interface IStorageProps {
  key: string;
  storage: Storage;
}
