import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  height: "50%",
  backgroundColor: "#fff",
  boxShadow: 24,
  p: 4,
};
export default function Loading() {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={true}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 1000,
      }}
    >
      <Box sx={style} className="!border-0">
        <div className="flex ">
          <div className="loading-ripple w-full  flex items-center md:mr-8">
            <div className="md:mt-0 md:-ml-0  mt-16 -ml-6"></div>
            <div className="md:mt-0 md:-ml-0 mt-16 -ml-6"></div>
          </div>
        </div>
      </Box>
    </Modal>
  );
}
