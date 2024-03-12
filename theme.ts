"use client";

import { createTheme } from "@mui/material";

export const THEME = createTheme({
  palette: {
    primary: {
      main: "#f44336",
      contrastText: "#fff",
    },
    background: {
         default: "#f44336"
    }

  },
//   components: {
//     MuiButton: {
//         styleOverrides: {
//         color
//         }
//     }
//   }
  // overrides: {
  //   MuiFilledInput: {
  //     root: {
  //       backgroundColor: "#ff0",
  //       "&:hover": {
  //         backgroundColor: "#ff8"
  //       },
  //       "&$focused": {
  //         backgroundColor: "#dfb"
  //       }
  //     },
  //     underline: {
  //       "&:before": {
  //         borderBottomColor: "red"
  //       },
  //       "&:hover:not(.Mui-focused):before": {
  //         borderBottomColor: "green"
  //       },
  //       "&:after": {
  //         // focused
  //         borderBottomColor: "purple"
  //       }
  //     }
  //   },
  //   MuiInputLabel: {
  //     filled: {
  //       color: "purple",
  //       "&$focused": {
  //         color: "green"
  //       },
  //       ".MuiFormControl-root:hover &:not($focused)": {
  //         color: "red"
  //       }
  //     }
  //   }
  // }
});
