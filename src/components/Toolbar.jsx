import { Flex } from "@chakra-ui/layout";
import { Box } from "@material-ui/core";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { CalendarTab } from "./CalendarTab";

export const Toolbar = () => {
  return (
    <Box height="60px" w="100%">
      <Flex className="nav-toolbar">
        <Flex alignItems="center">
          <Flex>
            <HiChevronLeft fontSize=".6em" cursor="pointer" className="arrow" />
            <HiChevronRight cursor="pointer" className="arrow" />
          </Flex>
          <Box>
            <p>
              20 August 2021 <span>Today</span>
            </p>
          </Box>
        </Flex>
        <CalendarTab />
      </Flex>
    </Box>
  );
};
