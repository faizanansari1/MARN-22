import { Formik } from "formik";
import * as Yup from "yup";
import {
  Box,
  Select,
  Stack,
  Typography,
  TextField,
  styled,
  MenuItem,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import ReactImageUploading from "react-images-uploading";

const AddProduct = () => {
  const [imageURL, setImageURL] = useState(null);
  const [images, setImages] = React.useState([]);
  const InputField = styled(TextField)(({ theme }) => ({
    border: `1px solid #ccc`,
    borderRadius: 4,
    "& .MuiInputBase-root": {
      fontSize: "0.875rem",
      padding: `0px ${theme.spacing(1)}`,
    },
  }));

  const InputSelect = styled(Select)(({ theme }) => ({
    "& .MuiSelect-select": {
      padding: `4px 32px 4px 8px`,
      fontSize: "0.875rem",
    },
  }));

  const DropButton = styled(Box)(({ theme }) => ({
    display: "flex",
    height: 140,
    borderRadius: "4px",
    border: "1px solid #ccc",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: 900,
    fontSize: "24px",
    cursor: "pointer",
  }));

  const initialValues = {
    name: "",
    brand: "",
    category: "",
    price: 0,
    // productImage: "",
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("name is required"),
    brand: Yup.string().required("brand is required"),
    category: Yup.string().required("category is required"),
    price: Yup.number()
      .required("price is required")
      .min(1, "price is required"),
    // productImage: Yup.string().required("image is required"),
  });

  const options = [
    { value: "student-uses", label: "Student Uses" },
    { value: "electronic", label: "Electronic" },
    { value: "accessories", label: "Accessories" },
    { value: "furniture ", label: "Furniture " },
  ];

  const handleUploadClick = (e) => {
    var file = e.target.files[0];
    console.log("FILE", file);
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      setImageURL(reader.result);
    });
  };

  const onChange = (imageList, addUpdateIndex) => {
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <>
      <h4>Add Product</h4>
      <Stack width="60%" m="auto">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(data) => {
            const final = { ...data, productImage: images[0]?.data_url };
            console.log("TEST Data", final);
          }}
        >
          {({
            handleSubmit,
            errors,
            touched,
            handleBlur,
            values,
            setFieldValue,
            handleChange,
          }) => (
            <form onSubmit={handleSubmit}>
              <Stack direction="row" justifyContent={"space-between"} mb={1.2}>
                <Box width="48%">
                  <Typography fontSize="0.75rem" fontWeight="600">
                    Name
                  </Typography>
                  <InputField
                    fullWidth
                    id="name"
                    name="name"
                    variant="standard"
                    placeholder="Product Name"
                    helperText={touched.name ? errors.name : ""}
                    error={touched.name && Boolean(errors.name)}
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    InputProps={{
                      disableUnderline: true,
                    }}
                  />
                </Box>
                <Box width="48%">
                  <Typography fontSize="0.75rem" fontWeight="600">
                    Brand
                  </Typography>
                  <InputField
                    fullWidth
                    id="brand"
                    name="brand"
                    variant="standard"
                    placeholder="Brand Name"
                    helperText={touched.brand ? errors.brand : ""}
                    error={touched.brand && Boolean(errors.brand)}
                    value={values.brand}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    InputProps={{
                      disableUnderline: true,
                    }}
                  />
                </Box>
              </Stack>

              <Stack direction="row" justifyContent={"space-between"}>
                <Box width="48%">
                  <Typography fontSize="0.75rem" fontWeight="600">
                    Category
                  </Typography>
                  <InputSelect
                    id="category"
                    fullWidth
                    name="category"
                    displayEmpty
                    value={values.category}
                    onChange={handleChange}
                    helperText={touched.category ? errors.category : ""}
                    error={touched.category && Boolean(errors.category)}
                  >
                    <MenuItem value="">Select Category</MenuItem>
                    {options.map((op) => (
                      <MenuItem value={op.value}>{op.label}</MenuItem>
                    ))}
                  </InputSelect>
                </Box>
                <Box width="48%">
                  <Typography fontSize="0.75rem" fontWeight="600">
                    price
                  </Typography>
                  <InputField
                    fullWidth
                    id="price"
                    name="price"
                    type="number"
                    variant="standard"
                    placeholder="Product Price"
                    helperText={touched.price ? errors.price : ""}
                    error={touched.price && Boolean(errors.price)}
                    value={values.price !== 0 ? values.price : ""}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    InputProps={{
                      disableUnderline: true,
                    }}
                  />
                </Box>
              </Stack>

              <Stack mt={2}>
                <ReactImageUploading
                  multiple
                  value={images}
                  onChange={onChange}
                  maxNumber={69}
                  dataURLKey="data_url"
                >
                  {({
                    imageList,
                    onImageUpload,
                    onImageRemoveAll,
                    onImageUpdate,
                    onImageRemove,
                    isDragging,
                    dragProps,
                  }) => (
                    // write your building UI
                    <Box>
                      {!Boolean(imageList.length > 0) ? (
                        <DropButton
                          style={isDragging ? { color: "red" } : undefined}
                          onClick={onImageUpload}
                          {...dragProps}
                        >
                          Click or Drop here
                        </DropButton>
                      ) : (
                        imageList.map((image, index) => {
                          return (
                            <Box
                              key={index}
                              border="1px solid #ccc"
                              borderRadius={4}
                              p={1.6}
                            >
                              <Box textAlign={"center"}>
                                <img
                                  src={image["data_url"]}
                                  alt=""
                                  //   width="100%"
                                  height={250}
                                />
                              </Box>

                              <Box
                                borderTop="1px solid #ccc"
                                display={"flex"}
                                justifyContent={"flex-end"}
                                pt={2}
                              >
                                <Button
                                  sx={{
                                    padding: "4px 16px",
                                    fontSize: "0.75rem",
                                  }}
                                  variant="outlined"
                                  onClick={() => onImageUpdate(index)}
                                >
                                  Update
                                </Button>
                                &nbsp;
                                <Button
                                  sx={{
                                    padding: "4px 16px",
                                    fontSize: "0.75rem",
                                    //   backgroundColor: "red",
                                  }}
                                  color="error"
                                  variant="outlined"
                                  onClick={() => onImageRemove(index)}
                                >
                                  Remove
                                </Button>
                              </Box>
                            </Box>
                          );
                        })
                      )}
                    </Box>
                  )}
                </ReactImageUploading>
              </Stack>
              <Box mt={2}>
                <Button
                  type="submit"
                  variant="contained"
                  color="success"
                  size="small"
                  sx={{ padding: "4px 18px" }}
                >
                  Save
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Stack>
    </>
  );
};

export default AddProduct;
