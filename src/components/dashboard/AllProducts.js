import React from "react";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
} from "@mui/material";
import BaseCard from "../baseCard/BaseCard";
import Link from "next/link";

const AllProducts = ({ products }) => {
  return (
    <BaseCard title="All Products">
      <Table
        aria-label="simple table"
        sx={{
          mt: 3,
          whiteSpace: "nowrap",
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Category
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Product
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Image
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Size/Color
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                AvailableQty
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography color="textSecondary" variant="h6">
                Price
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <Link
              key={product.slug}
              passHref={true}
              href={`/admin/updateproduct/${product.slug}`}
            >
              <TableRow>
                <TableCell>
                  <Chip
                    sx={{
                      pl: "4px",
                      pr: "4px",
                      backgroundColor: "#00c292",
                      color: "#fff",
                    }}
                    size="small"
                    label={product.category}
                  ></Chip>
                </TableCell>
                <TableCell>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: "600",
                        }}
                      >
                        {product.title}
                      </Typography>
                      <Typography
                        color="textSecondary"
                        sx={{
                          fontSize: "13px",
                        }}
                      >
                        {product.slug}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>
                  <img
                    style={{ height: "50px" }}
                    src={product.img}
                    alt="Image"
                  />
                </TableCell>
                <TableCell>
                  <Typography color="textSecondary" variant="h6">
                    {product.size}/{product.color}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    align="center"
                    sx={{
                      fontSize: "15px",
                      fontWeight: "500",
                    }}
                  >
                    {product.availableQty}
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="h6">₹{product.price}</Typography>
                </TableCell>
              </TableRow>
            </Link>
          ))}
        </TableBody>
      </Table>
    </BaseCard>
  );
};

export default AllProducts;
