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
    person: "",
    job: "",
    equipement: "",
  };
  const [day, setDay] = React.useState(initialValues.day);
  const [person, setPerson] = React.useState(initialValues.person);
  const [job, setJob] = React.useState(initialValues.job);
  const [equipement, setEquipement] = React.useState(initialValues.equipement);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setDay(initialValues.day);
    setPerson(initialValues.person);
    setJob(initialValues.job);
    setEquipement(initialValues.equipement);
    setErrors({});
  };
  const validations = {
    day: [],
    person: [],
    job: [],
    equipement: [],
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
          person,
          job,
          equipement,
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
        value={day}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              day: value,
              person,
              job,
              equipement,
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
        label="Person"
        isRequired={false}
        isReadOnly={false}
        value={person}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              day,
              person: value,
              job,
              equipement,
            };
            const result = onChange(modelFields);
            value = result?.person ?? value;
          }
          if (errors.person?.hasError) {
            runValidationTasks("person", value);
          }
          setPerson(value);
        }}
        onBlur={() => runValidationTasks("person", person)}
        errorMessage={errors.person?.errorMessage}
        hasError={errors.person?.hasError}
        {...getOverrideProps(overrides, "person")}
      ></TextField>
      <TextField
        label="Job"
        isRequired={false}
        isReadOnly={false}
        value={job}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              day,
              person,
              job: value,
              equipement,
            };
            const result = onChange(modelFields);
            value = result?.job ?? value;
          }
          if (errors.job?.hasError) {
            runValidationTasks("job", value);
          }
          setJob(value);
        }}
        onBlur={() => runValidationTasks("job", job)}
        errorMessage={errors.job?.errorMessage}
        hasError={errors.job?.hasError}
        {...getOverrideProps(overrides, "job")}
      ></TextField>
      <TextField
        label="Equipement"
        isRequired={false}
        isReadOnly={false}
        value={equipement}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              day,
              person,
              job,
              equipement: value,
            };
            const result = onChange(modelFields);
            value = result?.equipement ?? value;
          }
          if (errors.equipement?.hasError) {
            runValidationTasks("equipement", value);
          }
          setEquipement(value);
        }}
        onBlur={() => runValidationTasks("equipement", equipement)}
        errorMessage={errors.equipement?.errorMessage}
        hasError={errors.equipement?.hasError}
        {...getOverrideProps(overrides, "equipement")}
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
