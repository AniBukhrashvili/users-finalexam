import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Textarea from "@mui/joy/Textarea";
import { Box, TextField, Button, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { LanguageContext } from "../../LanguageContext";
import NavBar from "../../components/NavBar/NavBar";

const validationSchema = yup.object({
  fullName: yup
    .string()
    .min(1, "Full Name should be minimum 1 characters length!")
    .required("Full Name is required!"),
  email: yup
    .string()
    .email("Enter a valid email!")
    .required("Email is required!"),
  message: yup
    .string()
    .min(1, "Enter Message")
    .required("Message is required!"),
});

export default function Feedback() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const [language, setLanguage] = useState("en");

  const value = {
    language,
    setLanguage,
  };

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: async () => {
      alert("Feedback sent successfully!");
      navigate("/");
    },
  });

  return (
    <LanguageContext.Provider value={value}>
      <form onSubmit={formik.handleSubmit}>
        <NavBar />
        <Typography
          textAlign="center"
          marginTop="100px"
          padding="0 24px"
          variant="h5"
        >
          Feedback
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            m: 5,
            "@media (min-width: 768px)": {
              mr: 50,
              ml: 50,
            },
          }}
        >
          <TextField
            id="outlined-size-small"
            size="small"
            name="fullName"
            label="Full Name"
            sx={{ margin: 0.8, width: "100%" }}
            value={name ? name : formik.values.fullName}
            onChange={(e) => {
              setName(e.target.value);
              formik.handleChange(e);
            }}
            error={formik.touched.fullName && Boolean(formik.errors.fullName)}
            helperText={formik.touched.fullName && formik.errors.fullName}
            FormHelperTextProps={{ className: "helper-text" }}
          />

          <TextField
            id="outlined-size-small"
            size="small"
            name="email"
            label="Email"
            sx={{ margin: 0.8, width: "100%" }}
            value={email ? email : formik.values.email}
            onChange={(e) => {
              setEmail(e.target.value);
              formik.handleChange(e);
            }}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            FormHelperTextProps={{ className: "helper-text" }}
          />

          <Textarea
            disabled={false}
            minRows={2}
            placeholder="Message"
            size="lg"
            variant="outlined"
            sx={{ margin: 0.8, width: "100%" }}
            name="message"
            value={message ? message : formik.values.message}
            onChange={(e) => {
              setMessage(e.target.value);
              formik.handleChange(e);
            }}
            error={formik.touched.message && Boolean(formik.errors.message)}
          />

          <Button
            type="submit"
            sx={{
              width: "100%",
              m: 0.9,
              borderColor: "#24292f",
              color: "#24292f",
              ":hover": { borderColor: "#24292f" },
            }}
            variant="outlined"
          >
            Send
          </Button>
        </Box>
      </form>
    </LanguageContext.Provider>
  );
}
