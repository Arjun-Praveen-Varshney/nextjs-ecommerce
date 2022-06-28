import React from "react";
import FullLayout from "../../../src/layouts/FullLayout";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../../src/theme/theme";
import {
  Grid,
  Stack,
  TextField,
  Checkbox,
  FormGroup,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormLabel,
  FormControl,
  Button,
} from "@mui/material";
import BaseCard from "../../../src/components/baseCard/BaseCard";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateProduct = () => {
  const [title, settitle] = useState("");
  const [slug, setslug] = useState("");
  const [image, setimage] = useState("");
  const [category, setcategory] = useState("");
  const [description, setdescription] = useState("");
  const [color, setcolor] = useState("");
  const [size, setsize] = useState("");
  const [price, setprice] = useState("");
  const [availableQty, setavailableQty] = useState("");
  const [form, setform] = useState({});

  const handleChange = (e) => {
    // if (e.target.name == "title") {
    //   settitle(e.target.value);
    // } else if (e.target.name == "slug") {
    //   setslug(e.target.value);
    // } else if (e.target.name == "description") {
    //   setdescription(e.target.value);
    // } else if (e.target.name == "image") {
    //   setimage(e.target.value);
    // } else if (e.target.name == "category") {
    //   setcategory(e.target.value);
    // } else if (e.target.name == "price") {
    //   setprice(e.target.value);
    // } else if (e.target.name == "color") {
    //   setcolor(e.target.value);
    // } else if (e.target.name == "size") {
    //   setsize(e.target.value);
    // } else if (e.target.name == "availableQty") {
    //   setavailableQty(e.target.value);
    // }
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    let res;
    let data = {
      // title,
      // slug,
      // description,
      // image,
      // category,
      // size,
      // color,
      // price,
      // availableQty,
      form,
    };
    let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/updateproducts`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    res = await a.json();
    if (res.success) {
      toast.success("Product updated!", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error("Some error occurred!", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    // settitle("");
    // setslug("");
    // setdescription("");
    // setsize("");
    // setcolor("");
    // setimage("");
    // setprice("");
    // setavailableQty("");
    // setcategory("");
    setform({});
  };

  return (
    <ThemeProvider theme={theme}>
      <style jsx global>
        {`
          footer {
            display: none;
          }
        `}
      </style>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <FullLayout>
        <Grid container spacing={0}>
          <Grid item xs={12} lg={12}>
            <BaseCard title="Update Product">
              <Stack spacing={3}>
                <TextField
                  onChange={handleChange}
                  // value={title}
                  value={form._id ? form._id : ""}
                  name="_id"
                  label="Id"
                  variant="outlined"
                />
                <TextField
                  onChange={handleChange}
                  // value={title}
                  value={form.title ? form.title : ""}
                  name="title"
                  label="Title"
                  variant="outlined"
                />
                <TextField
                  onChange={handleChange}
                  // value={slug}
                  value={form.slug ? form.slug : ""}
                  name="slug"
                  label="Slug"
                  variant="outlined"
                />
                <TextField
                  onChange={handleChange}
                  // value={description}
                  value={form.description ? form.description : ""}
                  name="description"
                  label="Description"
                  multiline
                  rows={4}
                />

                <TextField
                  onChange={handleChange}
                  // value={image}
                  value={form.image ? form.image : ""}
                  name="image"
                  label="Image URL"
                  variant="outlined"
                />

                <TextField
                  onChange={handleChange}
                  // value={category}
                  value={form.category ? form.category : ""}
                  name="category"
                  label="Category"
                  variant="outlined"
                />

                <TextField
                  onChange={handleChange}
                  // value={color}
                  value={form.color ? form.color : ""}
                  name="color"
                  label="Color"
                  variant="outlined"
                />

                <TextField
                  onChange={handleChange}
                  // value={size}
                  value={form.size ? form.size : ""}
                  name="size"
                  label="Size"
                  variant="outlined"
                />

                <TextField
                  onChange={handleChange}
                  // value={price}
                  value={form.price ? form.price : ""}
                  name="price"
                  label="Price"
                  variant="outlined"
                />
                <TextField
                  onChange={handleChange}
                  // value={availableQty}
                  value={form.availableQty ? form.availableQty : ""}
                  name="availableQty"
                  label="Available Quantity"
                  variant="outlined"
                />
                <TextField
                  onChange={handleChange}
                  // value={availableQty}
                  value={form.createdAt ? form.createdAt : ""}
                  name="createdAt"
                  label="Created At"
                  variant="outlined"
                />
                <TextField
                  onChange={handleChange}
                  // value={availableQty}
                  value={form.updatedAt ? form.updatedAt : ""}
                  name="updatedAt"
                  label="Updated At"
                  variant="outlined"
                />
                <TextField
                  onChange={handleChange}
                  // value={availableQty}
                  value={form.__v ? form.__v : ""}
                  name="__v"
                  label="Version"
                  variant="outlined"
                />
              </Stack>
              <br />
              <Button onClick={submitForm} variant="outlined" mt={2}>
                Submit
              </Button>
            </BaseCard>
          </Grid>
        </Grid>
      </FullLayout>
    </ThemeProvider>
  );
};

export default UpdateProduct;
