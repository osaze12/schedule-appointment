import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverCloseButton,
  useDisclosure,
  Avatar,
} from "@chakra-ui/react";
import { Box, Divider, Flex, Text } from "@chakra-ui/layout";
import { BiChevronDown, BiChevronUp, BiUser } from "react-icons/bi";
import { FiExternalLink } from "react-icons/fi";
import { AiOutlineClockCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { IoIosSync } from "react-icons/io";
import { BsPencil } from "react-icons/bs";
import {
  CLOSE_BTN,
  GRID_STYLE,
  BOX_STYLE,
  AVATAR_STYLE,
  BTN_STYLE,
} from "./styles/ViewAppointmentDetailsStyle";
import dayjs from "dayjs";

export const ViewAppointmentDetails = (props) => {
  const { type, patientName, fromDate, fromTime, toDate, toTime, doctor } =
    props;
  const { onOpen, onClose, isOpen } = useDisclosure();

  return (
    <Popover
      _focus={{ border: "none" }}
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      placement="bottom"
    >
      <PopoverTrigger>
        <Box className="event" cursor="pointer">
          <Text className="title">
            <b>{type}</b>
          </Text>
          <Text>
            <small>{patientName}</small>
          </Text>
          <Box className="dot" />
          <Box as="button">{isOpen ? <BiChevronDown /> : <BiChevronUp />}</Box>
        </Box>
      </PopoverTrigger>
      <PopoverContent _focus={{ boxShadow: "none" }}>
        <PopoverCloseButton {...CLOSE_BTN} />
        <PopoverHeader borderBottomWidth="0">
          <b>{type}</b>
        </PopoverHeader>
        <PopoverBody>
          <Box display="grid" gridGap="10px">
            <Flex {...BOX_STYLE}>
              <Flex justifyContent="space-between" alignItems="center">
                <Avatar
                  {...AVATAR_STYLE}
                  name="Ryan Florence"
                  src="https://bit.ly/ryan-florence"
                />
                <Text fontSize=".78em" color="#000" fontWeight="600">
                  {patientName}
                </Text>
              </Flex>
              <FiExternalLink cursor="pointer" color="#000" />
            </Flex>

            <Flex fontSize=".78em" alignItems="center">
              <AiOutlineClockCircle color="#000" />
              <Text ml="5px">
                {`${dayjs(fromDate).format("DD MMMM,YYYY")} ${fromTime}
                 - ${dayjs(toDate).format("DD MMMM,YYYY")} ${toTime}`}
              </Text>
            </Flex>
            <Flex alignItems="center">
              <BiUser color="#000" />
              <Avatar
                ml="5px"
                {...AVATAR_STYLE}
                name="Ryan Florence"
                src="https://bit.ly/ryan-florence"
              />
              <Text fontSize=".78em" ml="5px">
                {doctor}
              </Text>
            </Flex>
            <Divider />
            <Flex justifyContent="space-between" alignItems="center">
              <Box {...GRID_STYLE}>
                <Box {...BTN_STYLE} bg="#FFE0D9" color="#F97B5C">
                  <Text fontSize=".78em">Check in</Text>
                  <Text ml="5px">
                    <IoIosSync />
                  </Text>
                </Box>
                <Box
                  className="btn-details"
                  {...BTN_STYLE}
                  color="#666666"
                  bg="#F9F9F9"
                >
                  <Text fontSize=".78em">Cancel</Text>
                  <Text ml="5px">
                    <AiOutlineMinusCircle />
                  </Text>
                </Box>
              </Box>
              <BsPencil color="#000" />
            </Flex>
          </Box>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
