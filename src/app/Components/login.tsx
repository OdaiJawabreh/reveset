import React from "react";
import {
  FormControlLabel,
  Grid2,
  Box,
  Typography,
  Container,
  TextField,
  Stack,
  MenuItem,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useForm, SubmitHandler } from "react-hook-form";
import { data } from "../data.json";
import { FormData, FormField } from "../interfaces";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: data.reduce((acc, field) => {
      acc[field.name] = field.defaultValue;
      return acc;
    }, {} as FormData),
  });

  const onSubmit: SubmitHandler<FormData> = (formData) => {
    console.log("Form Data:", formData);
  };

  // Function to render the appropriate field type
  const renderField = (field: FormField) => {
    const fieldProps = {
      ...register(field.name, {
        required: field.required ? `${field.name} is required` : false,
        minLength: field.minLength ? { value: field.minLength, message: `${field.name} must be at least ${field.minLength} characters` } : undefined,
        maxLength: field.maxLength ? { value: field.maxLength, message: `${field.name} must be at most ${field.maxLength} characters` } : undefined,
      }),
      error: !!errors[field.name],
      helperText: errors[field.name]?.message,
    };
  
    switch (field.fieldType) {
      case "TEXT":
        return (
          <TextField
            {...fieldProps}
            label={field.name}
            variant="outlined"
            fullWidth
          />
        );
  
      case "LIST":
        return (
          <TextField
            select
            label={field.name}
            fullWidth
            defaultValue={field.defaultValue}
            {...fieldProps}
          >
            {field.listOfValues1?.map((option, idx) => (
              <MenuItem key={idx} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        );
  
      case "RADIO":
        return (
          <FormControl component="fieldset" error={!!errors[field.name]}>
            <FormLabel component="legend">{field.name}</FormLabel>
            <RadioGroup defaultValue={field.defaultValue} {...register(field.name)}>
              {field.listOfValues1?.map((option, idx) => (
                <FormControlLabel key={idx} value={option} control={<Radio />} label={option} />
              ))}
            </RadioGroup>
            {errors[field.name] && <Typography color="error">{errors[field.name]?.message}</Typography>}
          </FormControl>
        );
  
      default:
        return null;
    }
  };
  

  return (
    <Box
      sx={{
        backgroundImage: 'url("https://images.pexels.com/photos/264502/pexels-photo-264502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <Container
        maxWidth="xs"
        style={{
          backgroundColor: "rgba(255, 255, 230, 0)",
          backdropFilter: "blur(5px)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "5%",
          }}
        >
          <Grid2 container alignItems="center" spacing={1}>
            <Typography variant="h6" gutterBottom style={{ fontWeight: "bold" }}>
              Welcome To REVESET
            </Typography>
          </Grid2>



          <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 5, width: "90%" }}>
            <Stack spacing={2}>
              {data.map((field) => (
                <Box key={field.id}>{renderField(field)}</Box>
              ))}
            </Stack>
            <Box>
              <LoadingButton
                type="submit"
                size="large"
                variant="contained"
                sx={{
                  textTransform: "capitalize",
                  mt: 3,
                  mb: 2,
                  width: "100%",
                  backgroundColor: "black",
                  "&:hover": {
                    backgroundColor: "gray",
                  },
                }}
              >
                Sign Up
              </LoadingButton>
            </Box>
          </Box>

        </Box>
      </Container>
    </Box>
  );
}
