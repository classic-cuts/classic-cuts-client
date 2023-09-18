import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const steps = ["Shipping Details", "Payment", "Finish"];

export default function HorizontalLinearStepper(props) {
  return (
    <Box sx={{ width: "100%",paddingBottom:'4px', paddingTop:'2px' }}>
      <Stepper activeStep={props.step}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
