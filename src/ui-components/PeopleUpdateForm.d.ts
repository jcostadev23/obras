/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { People } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PeopleUpdateFormInputValues = {
    name?: string;
    phonenumber?: string;
    role?: string;
};
export declare type PeopleUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    phonenumber?: ValidationFunction<string>;
    role?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PeopleUpdateFormOverridesProps = {
    PeopleUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    phonenumber?: PrimitiveOverrideProps<TextFieldProps>;
    role?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PeopleUpdateFormProps = React.PropsWithChildren<{
    overrides?: PeopleUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    people?: People;
    onSubmit?: (fields: PeopleUpdateFormInputValues) => PeopleUpdateFormInputValues;
    onSuccess?: (fields: PeopleUpdateFormInputValues) => void;
    onError?: (fields: PeopleUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PeopleUpdateFormInputValues) => PeopleUpdateFormInputValues;
    onValidate?: PeopleUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PeopleUpdateForm(props: PeopleUpdateFormProps): React.ReactElement;
