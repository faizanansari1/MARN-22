import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  styled,
  Paper,
} from "@mui/material";
import { Stack } from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import React from "react";

const CustomCard = ({ data, onAction }) => {
  const Container = styled(Paper)(({ theme }) => ({
    width: 290,
    marginBottom: theme.spacing(2.6),
    marginRight: theme.spacing(2.6),
    boxShadow: "0px 0px 8px #ccc",
    "& .MuiPaper-root": {
      boxShadow: "none",
      "& .MuiCardContent-root": {
        paddingBottom: theme.spacing(0.5),
      },
      "& .MuiCardActions-root": {
        padding: "0px",
      },
    },
  }));

  const CardBtn = styled(Button)(({ bgColor = "#5e61fe" }) => ({
    width: "100%",
    borderRadius: 0,
    marginLeft: "0px !important",
    background: bgColor,
    "&:hover": {
      background: bgColor,
    },
  }));

  return (
    <Container>
      <Card>
        <CardMedia
          component="img"
          height="200"
          image={
            data.productImage ||
            "https://cloudinary.com/blog/wp-content/uploads/sites/12/2022/02/Node-JS-File-Upload.png"
          }
          alt="img_alt"
        />
        <CardContent>
          <Stack direction="row" justifyContent="space-between" mb={1}>
            <Typography fontSize="0.875rem" fontWeight="bold">
              Name
            </Typography>
            <Typography fontSize="0.875rem" fontWeight="400">
              {data.name}
            </Typography>
          </Stack>

          <Stack direction="row" justifyContent="space-between">
            <Typography fontSize="0.875rem" fontWeight="bold">
              Brand
            </Typography>
            <Typography fontSize="0.875rem" fontWeight="400">
              {data.brand}
            </Typography>
          </Stack>

          <Stack direction="row" justifyContent="space-between">
            <Typography fontSize="0.875rem" fontWeight="bold">
              Category
            </Typography>
            <Typography fontSize="0.875rem" fontWeight="400">
              {data.category}
            </Typography>
          </Stack>

          <Stack direction="row" justifyContent="space-between">
            <Typography fontSize="0.875rem" fontWeight="bold">
              Price
            </Typography>
            <Typography fontSize="0.875rem" fontWeight="400">
              ${data.price}
            </Typography>
          </Stack>
        </CardContent>
        <CardActions sx={{ marginTop: 1 }}>
          <CardBtn
            size="medium"
            variant="contained"
            startIcon={<DeleteIcon />}
            bgColor="red"
            onClick={() => onAction("delete", data._id)}
          >
            Delete
          </CardBtn>
          <CardBtn
            size="medium"
            variant="contained"
            startIcon={<VisibilityIcon />}
            onClick={() => onAction("view", data._id)}
          >
            View
          </CardBtn>
          <CardBtn
            size="medium"
            variant="contained"
            startIcon={<EditIcon />}
            bgColor="#4caf50"
            onClick={() => onAction("edit", data._id)}
          >
            Edit
          </CardBtn>
        </CardActions>
      </Card>
    </Container>
  );
};

export default CustomCard;
