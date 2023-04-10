/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Calendar } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function CalendarCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    day: "",
    workerTimeMinutes: "",
    equipmentTimeMinutes: "",
    description: "",
  };
  const [day, setDay] = React.useState(initialValues.day);
  const [workerTimeMinutes, setWorkerTimeMinutes] = React.useState(
    initialValues.workerTimeMinutes
  );
  const [equipmentTimeMinutes, setEquipmentTimeMinutes] = React.useState(
    initialValues.equipmentTimeMinutes
  );
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setDay(initialValues.day);
    setWorkerTimeMinutes(initialValues.workerTimeMinutes);
    setEquipmentTimeMinutes(initialValues.equipmentTimeMinutes);
    setDescription(initialValues.description);
    setErrors({});
  };
  const validations = {
    day: [],
    workerTimeMinutes: [],
    equipmentTimeMinutes: [],
    description: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          day,
          workerTimeMinutes,
          equipmentTimeMinutes,
          description,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new Calendar(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "CalendarCreateForm")}
      {...rest}
    >
      <TextField
        label="Day"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={day}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              day: value,
              workerTimeMinutes,
              equipmentTimeMinutes,
              description,
            };
            const result = onChange(modelFields);
            value = result?.day ?? value;
          }
          if (errors.day?.hasError) {
            runValidationTasks("day", value);
          }
          setDay(value);
        }}
        onBlur={() => runValidationTasks("day", day)}
        errorMessage={errors.day?.errorMessage}
        hasError={errors.day?.hasError}
        {...getOverrideProps(overrides, "day")}
      ></TextField>
      <TextField
        label="Worker time minutes"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={workerTimeMinutes}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              day,
              workerTimeMinutes: value,
              equipmentTimeMinutes,
              description,
            };
            const result = onChange(modelFields);
            value = result?.workerTimeMinutes ?? value;
          }
          if (errors.workerTimeMinutes?.hasError) {
            runValidationTasks("workerTimeMinutes", value);
          }
          setWorkerTimeMinutes(value);
        }}
        onBlur={() =>
          runValidationTasks("workerTimeMinutes", workerTimeMinutes)
        }
        errorMessage={errors.workerTimeMinutes?.errorMessage}
        hasError={errors.workerTimeMinutes?.hasError}
        {...getOverrideProps(overrides, "workerTimeMinutes")}
      ></TextField>
      <TextField
        label="Equipment time minutes"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={equipmentTimeMinutes}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              day,
              workerTimeMinutes,
              equipmentTimeMinutes: value,
              description,
            };
            const result = onChange(modelFields);
            value = result?.equipmentTimeMinutes ?? value;
          }
          if (errors.equipmentTimeMinutes?.hasError) {
            runValidationTasks("equipmentTimeMinutes", value);
          }
          setEquipmentTimeMinutes(value);
        }}
        onBlur={() =>
          runValidationTasks("equipmentTimeMinutes", equipmentTimeMinutes)
        }
        errorMessage={errors.equipmentTimeMinutes?.errorMessage}
        hasError={errors.equipmentTimeMinutes?.hasError}
        {...getOverrideProps(overrides, "equipmentTimeMinutes")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              day,
              workerTimeMinutes,
              equipmentTimeMinutes,
              description: value,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
