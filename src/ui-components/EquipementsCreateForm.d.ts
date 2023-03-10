/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type EquipementsCreateFormInputValues = {
    Name?: string;
    Attachments?: string;
};
export declare type EquipementsCreateFormValidationValues = {
    Name?: ValidationFunction<string>;
    Attachments?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EquipementsCreateFormOverridesProps = {
    EquipementsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    Attachments?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EquipementsCreateFormProps = React.PropsWithChildren<{
    overrides?: EquipementsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: EquipementsCreateFormInputValues) => EquipementsCreateFormInputValues;
    onSuccess?: (fields: EquipementsCreateFormInputValues) => void;
    onError?: (fields: EquipementsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EquipementsCreateFormInputValues) => EquipementsCreateFormInputValues;
    onValidate?: EquipementsCreateFormValidationValues;
} & React.CSSProperties>;
export default function EquipementsCreateForm(props: EquipementsCreateFormProps): React.ReactElement;
