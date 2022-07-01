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
import Product from "../../../models/Product";
import mongoose from "mongoose";
import { useRouter } from "next/router";
import Head from "next/head";

const UpdateProduct = ({ product }) => {
  const router = useRouter();
  const [title, settitle] = useState("");
  const [slug, setslug] = useState("");
  const [img, setimg] = useState("");
  const [category, setcategory] = useState("");
  const [desc, setdesc] = useState("");
  const [color, setcolor] = useState("");
  const [size, setsize] = useState("");
  const [price, setprice] = useState(0);
  const [availableQty, setavailableQty] = useState(0);
  const [_id, set_id] = useState("");

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
    } else if (e.target.name == "_id") {
      set_id(e.target.value);
    }
  };

  const submitForm = async (e) => {
    e.preventDefault();
    let data = [
      {
        _id: product._id,
        title,
        slug: product.slug,
        desc,
        img,
        category,
        size,
        color,
        price,
        availableQty,
      },
    ];
    let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/updateproducts`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let res = await a.json();
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
    settitle("");
    setdesc("");
    setsize("");
    setcolor("");
    setimg("");
    setprice(0);
    setavailableQty(0);
    setcategory("");
  };

  const deleteEntry = async () => {
    let conf = confirm("Are you sure you want to delete this entry?");
    if (conf === true) {
      // return
      let data = [
        {
          _id: product._id,
        },
      ];
      let a = await fetch(
        `${process.env.NEXT_PUBLIC_HOST}/api/deleteproducts`,
        {
          method: "DELETE", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      let res = await a.json();
      if (res.success) {
        toast.success("Product deleted!", {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setTimeout(() => {
          router.push("/admin/allproducts");
        }, 1000);
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
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Update Product</title>
      </Head>
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
                  value={product._id}
                  name="_id"
                  label="Id"
                  variant="outlined"
                />
                <TextField
                  required
                  helperText={product.title}
                  onChange={handleChange}
                  value={title}
                  name="title"
                  label="Title"
                  variant="outlined"
                />
                <TextField
                  onChange={handleChange}
                  value={product.slug}
                  name="slug"
                  label="Slug"
                  variant="outlined"
                />
                <TextField
                  onChange={handleChange}
                  placeholder={product.desc}
                  value={desc}
                  name="desc"
                  label="Description"
                  multiline
                  rows={4}
                />

                <TextField
                  required
                  onChange={handleChange}
                  placeholder={product.img}
                  value={img}
                  name="img"
                  label="Image URL"
                  variant="outlined"
                />

                <TextField
                  required
                  placeholder={product.category}
                  onChange={handleChange}
                  value={category}
                  name="category"
                  label="Category"
                  variant="outlined"
                />

                <TextField
                  placeholder={product.color}
                  onChange={handleChange}
                  value={color}
                  name="color"
                  label="Color"
                  variant="outlined"
                />

                <TextField
                  placeholder={product.size}
                  onChange={handleChange}
                  value={size}
                  name="size"
                  label="Size"
                  variant="outlined"
                />

                <TextField
                  helperText={product.price}
                  onChange={handleChange}
                  value={price}
                  name="price"
                  label="Price"
                  variant="outlined"
                />
                <TextField
                  helperText={product.availableQty}
                  onChange={handleChange}
                  value={availableQty}
                  name="availableQty"
                  label="Available Quantity"
                  variant="outlined"
                />
                <TextField
                  onChange={handleChange}
                  value={product.createdAt}
                  name="createdAt"
                  label="Created At"
                  variant="outlined"
                />
                <TextField
                  onChange={handleChange}
                  value={product.updatedAt}
                  name="updatedAt"
                  label="Updated At"
                  variant="outlined"
                />
                <TextField
                  onChange={handleChange}
                  value={product.__v}
                  name="__v"
                  label="Version"
                  variant="outlined"
                />
              </Stack>
              <br />
              <Button onClick={submitForm} variant="outlined" mt={2}>
                Submit
              </Button>
              <br />
              <br />
              <br />
              <br />
              <br />
              <Button
                fullWidth
                onClick={deleteEntry}
                variant="outlined"
                color="error"
                mt={2}
              >
                Delete Product
              </Button>
            </BaseCard>
          </Grid>
        </Grid>
      </FullLayout>
    </ThemeProvider>
  );
};

export default UpdateProduct;

export async function getServerSideProps(context) {
  let error = null;
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  let product = await Product.findOne(context.query);
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    },
  };
}
