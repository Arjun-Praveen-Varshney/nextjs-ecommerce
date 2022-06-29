import React from "react";
import FullLayout from "../../src/layouts/FullLayout";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../src/theme/theme";
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
import BaseCard from "../../src/components/baseCard/BaseCard";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Addproduct = () => {
  const [title, settitle] = useState("");
  const [slug, setslug] = useState("");
  const [img, setimg] = useState("");
  const [category, setcategory] = useState("");
  const [desc, setdesc] = useState("");
  const [color, setcolor] = useState("");
  const [size, setsize] = useState("");
  const [price, setprice] = useState(0);
  const [availableQty, setavailableQty] = useState(0);

  const handleChange = (e) => {
    if (e.target.name == "title") {
      settitle(e.target.value);
    } else if (e.target.name == "slug") {
      setslug(e.target.value);
    } else if (e.target.name == "desc") {
      setdesc(e.target.value);
    } else if (e.target.name == "img") {
      setimg(e.target.value);
    } else if (e.target.name == "category") {
      setcategory(e.target.value);
    } else if (e.target.name == "price") {
      setprice(e.target.value);
    } else if (e.target.name == "color") {
      setcolor(e.target.value);
    } else if (e.target.name == "size") {
      setsize(e.target.value);
    } else if (e.target.name == "availableQty") {
      setavailableQty(e.target.value);
    }
  };

  const submitForm = async (e) => {
    e.preventDefault();
    let data = [
      {
        title,
        slug,
        desc,
        img,
        category,
        size,
        color,
        price,
        availableQty,
      },
    ];
    let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/addproducts`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let res = await a.json();
    if (res.success) {
      toast.success("Product added!", {
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
    settitle("");
    setslug("");
    setdesc("");
    setsize("");
    setcolor("");
    setimg("");
    setprice("");
    setavailableQty("");
    setcategory("");
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
            <BaseCard title="Add a Product">
              <Stack spacing={3}>
                <TextField
                  onChange={handleChange}
                  value={title}
                  name="title"
                  label="Title"
                  variant="outlined"
                />
                <TextField
                  onChange={handleChange}
                  value={slug}
                  name="slug"
                  label="Slug"
                  variant="outlined"
                />
                <TextField
                  onChange={handleChange}
                  value={desc}
                  name="desc"
                  label="Description"
                  multiline
                  rows={4}
                />

                <TextField
                  onChange={handleChange}
                  value={img}
                  name="img"
                  label="Image URL"
                  variant="outlined"
                />

                <TextField
                  onChange={handleChange}
                  value={category}
                  name="category"
                  label="Category"
                  variant="outlined"
                />

                <TextField
                  onChange={handleChange}
                  value={color}
                  name="color"
                  label="Color"
                  variant="outlined"
                />

                <TextField
                  onChange={handleChange}
                  value={size}
                  name="size"
                  label="Size"
                  variant="outlined"
                />

                <TextField
                  onChange={handleChange}
                  value={price}
                  name="price"
                  label="Price"
                  variant="outlined"
                />
                <TextField
                  onChange={handleChange}
                  value={availableQty}
                  name="availableQty"
                  label="Available Quantity"
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

export default Addproduct;
