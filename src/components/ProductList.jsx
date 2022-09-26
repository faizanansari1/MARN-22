import React, { useEffect } from "react";
import { Stack } from "@mui/system";
import CustomCard from "../common/CustomCard";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/actions";
import { Menu, ScreenLoader } from "../common";
import { getLoading, getAllProduts, getUserInfo } from "../redux/selector";

const ProductList = () => {
  const isLoading = useSelector(getLoading);
  const allProducts = useSelector(getAllProduts);
  const disptach = useDispatch();

  useEffect(() => {
    disptach(getProducts());
  }, [disptach]);

  const handleAction = (action, id) => {
    console.log("action", action + id);
  };

  const onAction = (action) => {
    console.log("action", action);
  };
  const options = [
    { value: "profle", label: "Profile" },
    { value: "profle-two", label: "Profile Two" },
    { value: "profle-three", label: "Profile Three" },
    { value: "profle-four", label: "Profile Four" },
    { value: "profle-five", label: "Profile Five" },
  ];

  return (
    <>
      {isLoading ? (
        <ScreenLoader />
      ) : (
        <Stack p={3} direction="row" flexWrap="wrap">
          {allProducts.map((item) => (
            <CustomCard data={item} onAction={handleAction} />
          ))}
        </Stack>
      )}
      {/* <Menu options={options} onAction={onAction} /> */}
    </>
  );
};

export default ProductList;
