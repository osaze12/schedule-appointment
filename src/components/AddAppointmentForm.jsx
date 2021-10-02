import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { AppointmentForm } from "./AppointmentForm";
import { Input } from "@chakra-ui/input";
import { useState } from "react";

export const AddAppointmentForm = ({ onSubmit }) => {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const [placeholder, setPlaceholder] = useState("");
  const [bg, setBg] = useState("");

  const CLOSE_BTN = {
    background: "#E4E4E4",
    color: "#000",
    _focus: { boxShadow: "none" },
    m: "20px 0",
  };
  const CONTENT_STYLE = {
    _focus: { boxShadow: "none", outline: "none" },

    p: "20px 0",
  };

  const handleHover = () => {
    setPlaceholder("Add a new appointment +");
    setBg("#F9F9F9");
  };

  const handleLeave = () => {
    setPlaceholder("");
    setBg("");
  };

  const handleSubmit = (data) => {
    onSubmit(data);
    onClose();
  };

  return (
    <Popover
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      placement="right-start"
    >
      <PopoverTrigger>
        <Input
          size="sm"
          borderRadius="full"
          _focus={{ boxShadow: "none" }}
          onMouseOver={handleHover}
          onMouseLeave={handleLeave}
          border="none"
          bg={bg}
          placeholder={placeholder}
        />
      </PopoverTrigger>
      <PopoverContent {...CONTENT_STYLE}>
        <PopoverCloseButton className="close-btn" {...CLOSE_BTN} />
        <PopoverHeader borderBottomWidth="0">
          <b>Add Appointment</b>
        </PopoverHeader>
        <PopoverBody>
          <AppointmentForm onSubmit={handleSubmit} />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
