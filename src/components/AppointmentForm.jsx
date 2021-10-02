import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box, HStack, Stack } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import { useState } from "react";

export const AppointmentForm = ({ onSubmit }) => {
  const initialValues = {
    type: "",
    fromDate: "",
    fromTime: "",
    toDate: "",
    toTime: "",
    note: "",
    patient: "",
    doctor: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const INPUT_STYLE = {
    size: "sm",
    borderRadius: "7px",
    bg: "#F9F9F9",
    border: "none",
    _focus: { border: "1px solid #959595" },
    fontWeight: "bold",
    color: "#666666",
    fontSize: ".8em",
  };

  const LABEL_STYLE = {
    color: "#282828",
    fontSize: ".8em",
  };

  const BTN_STYLE = {
    bg: "#000",
    color: "#fff",
    _hover: { bg: "#000" },
    _focus: { boxShadow: "none" },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = () => {
    onSubmit(formValues);
  };

  return (
    <Box>
      <Stack spacing={3}>
        <FormControl id="type">
          <FormLabel {...LABEL_STYLE}>Type</FormLabel>
          <Select
            {...INPUT_STYLE}
            name="type"
            value={formValues?.type}
            onChange={handleChange}
            placeholder="Visit Type"
          >
            <option value="Office visit">Office visit</option>
            <option value="Check up">Check up</option>
          </Select>
        </FormControl>

        <FormControl id="from">
          <FormLabel {...LABEL_STYLE}>From</FormLabel>
          <HStack>
            <Input
              name="fromDate"
              value={formValues?.fromDate}
              onChange={handleChange}
              type="date"
              {...INPUT_STYLE}
            />
            <Select
              {...INPUT_STYLE}
              name="fromTime"
              value={formValues?.fromTime}
              onChange={handleChange}
              placeholder="Select Time"
            >
              <option value="11:30 am">7:30 am</option>
              <option value="8:30 am">8:30 am</option>
            </Select>
          </HStack>
        </FormControl>

        <FormControl id="to">
          <FormLabel {...LABEL_STYLE}>To</FormLabel>
          <HStack>
            <Input
              name="toDate"
              value={formValues?.toDate}
              onChange={handleChange}
              type="date"
              {...INPUT_STYLE}
            />
            <Select
              {...INPUT_STYLE}
              name="toTime"
              value={formValues?.toTime}
              onChange={handleChange}
              placeholder="Select Time"
            >
              <option value="11:30 am">7:30 am</option>
              <option value="8:30 am">8:30 am</option>
              <option value="9:30 am">9:30 am</option>
            </Select>
          </HStack>
        </FormControl>

        <FormControl id="attach-patient">
          <FormLabel {...LABEL_STYLE}>Attach Patient</FormLabel>
          <Select
            {...INPUT_STYLE}
            name="patient"
            value={formValues?.patient}
            onChange={handleChange}
            placeholder="Select Patient"
          >
            <option value="Ronald O.">Ronald O.</option>
            <option value="Felix B.">Felix B.</option>
            <option value="Kingsley R.">Kingsley R.</option>
          </Select>
        </FormControl>

        <FormControl id="attending-physical">
          <FormLabel {...LABEL_STYLE}>Attending Physical</FormLabel>
          <Select
            {...INPUT_STYLE}
            name="doctor"
            value={formValues?.doctor}
            onChange={handleChange}
            placeholder="Select Doctor"
          >
            <option value="Dr. Ronald O.">Dr. Ronald O.</option>
            <option value="Dr. Felix B.">Dr. Felix B.</option>
            <option value="Dr. Kingsley R.">Dr. Kingsley R.</option>
          </Select>
        </FormControl>

        <FormControl id="note">
          <FormLabel {...LABEL_STYLE}>Note</FormLabel>
          <Input
            type="text"
            name="note"
            value={formValues?.note}
            onChange={handleChange}
            placeholder="New Appointment"
            {...INPUT_STYLE}
          />
        </FormControl>

        <Button onClick={handleSubmit} {...BTN_STYLE}>
          Save
        </Button>
      </Stack>
    </Box>
  );
};
