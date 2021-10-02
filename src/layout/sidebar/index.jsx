import { Box, Text } from "@chakra-ui/layout";
import brand from "../../assets/Group 190.png";
import { RiSearchLine } from "react-icons/ri";
import { GoPlus } from "react-icons/go";
import { FiCalendar, FiUsers } from "react-icons/fi";
import { AiOutlineSetting } from "react-icons/ai";
import { Avatar } from "@chakra-ui/react";

export const Sidebar = () => {
  return (
    <Box className="sidebar" position="fixed" zIndex="999">
      <Box className="grid">
        <img src={brand} alt="Brand" />
      </Box>
      <Box display="grid" gridGap="30px">
        <Box className="grid">
          <Text>
            <small>Quick Actions</small>
          </Text>
          <Text>
            <RiSearchLine /> Search Anything
          </Text>
          <Text>
            <GoPlus /> Add a New Patient
          </Text>
        </Box>

        <Box className="grid">
          <Text>
            <small>Manage</small>
          </Text>
          <Text className="active">
            <FiCalendar /> Calendar
          </Text>
          <Text>
            <FiUsers /> Manage Patients
          </Text>
          <Text>
            <AiOutlineSetting /> Settings
          </Text>
        </Box>
      </Box>

      <Box className="company">
        <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
        <Box>
          <Text>
            <b>Acme Clinic, Inc.</b>
          </Text>
          <Text>Marvin Tunji-ola</Text>
          <Text color="#F97B5C">
            <small>View Profile</small>
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
