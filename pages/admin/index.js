import { Grid } from "@mui/material";
import BlogCard from "../../src/components/dashboard/BlogCard";
import SalesOverview from "../../src/components/dashboard/SalseOverview";
import DailyActivity from "../../src/components/dashboard/DailyActivity";
import AllOrders from "../../src/components/dashboard/AllOrders";
import FullLayout from "../../src/layouts/FullLayout";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../src/theme/theme";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Index() {
  const router = useRouter();
  useEffect(() => {
    const myuser = JSON.parse(localStorage.getItem("myuser"));
    if (!myuser) {
      router.push("/login");
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Admin Dashboard</title>
      </Head>
      <style jsx global>
        {`
          footer {
            display: none;
          }
        `}
      </style>
      <FullLayout>
        <Grid container spacing={0}>
          <Grid item xs={12} lg={12}>
            <SalesOverview />
          </Grid>
          {/* ------------------------- row 1 ------------------------- */}
          {/* <Grid item xs={12} lg={4}>
            <DailyActivity />
          </Grid> */}

          {/* <Grid item xs={12} lg={8}>
            <AllOrders />
          </Grid> */}

          {/* <Grid item xs={12} lg={12}>
            <BlogCard />
          </Grid> */}
        </Grid>
      </FullLayout>
    </ThemeProvider>
  );
}

// export async function getServerSideProps(context) {
//   let error = null;
//   if (!mongoose.connections[0].readyState) {
//     await mongoose.connect(process.env.MONGO_URI);
//   }
//   let orders = await Order.find();
//   return {
//     props: {
//       orders: JSON.parse(JSON.stringify(orders)),
//     },
//   };
// }
