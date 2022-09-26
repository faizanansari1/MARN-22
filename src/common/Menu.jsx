import { Box, Button, MenuItem, Paper } from "@mui/material";
import React, { useState, useRef } from "react";
import { usePopper } from "react-popper";

/* POPPER CSS  */
// .popperContainer [data-popper-placement^="top"] > .arrow {
//     bottom: -30px;
//   }
//   .popperContainer [data-popper-placement^="top"] > .arrow::after {
//     box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
//   }
//   .arrow {
//     position: absolute;
//     width: 10px;
//     height: 10px;
//   }
//   .arrow::after {
//     content: " ";
//     position: absolute;
//     top: -4px; /*  we account for the PopperContainer padding */
//     left: 0;
//     transform: rotate(45deg);
//     width: 10px;
//     height: 10px;
//     background-color: white;
//     box-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
//   }

const Menu = ({ options, onAction }) => {
  const buttonRef = useRef(null);
  const popperRef = useRef(null);
  const [showPopper, setShowPopper] = useState(false);

  const [arrowRef, setArrowRef] = useState(null);

  const { styles, attributes } = usePopper(
    buttonRef.current,
    popperRef.current,
    {
      modifiers: [
        {
          name: "arrow",
          options: {
            element: arrowRef,
          },
        },
        // {
        //   name: "offset",
        //   options: {
        //     offset: [0, 10],
        //   },
        // },
      ],
    }
  );

  return (
    <>
      <Button
        ref={buttonRef}
        variant="contained"
        onClick={() => setShowPopper(!showPopper)}
      >
        Clicked!!
      </Button>

      {showPopper && (
        <Box
          className="popperContainer"
          ref={popperRef}
          style={styles.popper}
          {...attributes.popper}
        >
          <div ref={setArrowRef} style={styles.arrow} className="arrow" />
          <Paper>
            {options.map((item) => (
              <MenuItem onClick={() => onAction(item.value)}>
                {item.label}
              </MenuItem>
            ))}
          </Paper>
        </Box>
      )}
    </>
  );
};

export default Menu;
