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
export declare type PeopleCreateFormInputValues = {
    name?: string;
    phonenumber?: string;
    role?: string;
};
export declare type PeopleCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    phonenumber?: ValidationFunction<string>;
    role?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PeopleCreateFormOverridesProps = {
    PeopleCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    phonenumber?: PrimitiveOverrideProps<TextFieldProps>;
    role?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PeopleCreateFormProps = React.PropsWithChildren<{
    overrides?: PeopleCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PeopleCreateFormInputValues) => PeopleCreateFormInputValues;
    onSuccess?: (fields: PeopleCreateFormInputValues) => void;
    onError?: (fields: PeopleCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PeopleCreateFormInputValues) => PeopleCreateFormInputValues;
    onValidate?: PeopleCreateFormValidationValues;
} & React.CSSProperties>;
export default function PeopleCreateForm(props: PeopleCreateFormProps): React.ReactElement;
