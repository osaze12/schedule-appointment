import { Box } from "@chakra-ui/layout";

import { ViewAppointmentDetails } from "./ViewAppointmentDetails";

export const Event = (props) => {
  const editProps = {
    ...props,
    empty: false,
  };
  return (
    <Box className="event-container">
      <ViewAppointmentDetails {...editProps} />
    </Box>
  );
};
