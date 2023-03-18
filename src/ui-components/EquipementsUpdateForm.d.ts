/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Equipements } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type EquipementsUpdateFormInputValues = {
    name?: string;
    attachments?: string;
};
export declare type EquipementsUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    attachments?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EquipementsUpdateFormOverridesProps = {
    EquipementsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    attachments?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EquipementsUpdateFormProps = React.PropsWithChildren<{
    overrides?: EquipementsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    equipements?: Equipements;
    onSubmit?: (fields: EquipementsUpdateFormInputValues) => EquipementsUpdateFormInputValues;
    onSuccess?: (fields: EquipementsUpdateFormInputValues) => void;
    onError?: (fields: EquipementsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EquipementsUpdateFormInputValues) => EquipementsUpdateFormInputValues;
    onValidate?: EquipementsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function EquipementsUpdateForm(props: EquipementsUpdateFormProps): React.ReactElement;
