import React from "react";
import Head from "next/head";

const ReturnPolicy = () => {
  return (
    <>
      <Head>
        <title>Return Policy</title>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"
        />
      </Head>
      <div className="min-h-screen">
        <section className="text-gray-600 body-font py-10">
          <div className="py-2 mx-auto">
            <h1 className="text-gray-600 font-bold title-font tracking-wider text-3xl text-center mx-4 my-6">
              Refund and Cancellation Policy
            </h1>
            <div className="mx-4 md:mx-24">
              <p>
                At this ecommerce store, our focus is complete customer
                satisfaction. In the event, if you are displeased with the
                services provided, we will refund back the money, provided the
                reasons are genuine and proved after investigation. Please read
                the fine prints of each deal before buying it, it provides all
                the details about the services or the product you purchase.
              </p>
              <p>
                In case of dissatisfaction from our services, clients have the
                liberty to cancel their projects and request a refund from us.
                Our Policy for the cancellation and refund will be as follows:
              </p>
              <br />
              <strong className="text-xl">&nbsp;Cancellation Policy</strong>
              <br />
              For Cancellations please contact the us via contact us link.&nbsp;
              <br />
              Requests received later than 3 business days prior to the delivery
              of the product will not be processed.
              <br />
              <strong className="text-xl">Refund Policy</strong>
              <br />
              We will try our best to create the best products for our
              customers.
              <br />
              In case any you are not completely satisfied with our products we
              can provide a refund.&nbsp;
              <br />
              If paid by credit card, refunds will be issued to the original
              credit card provided at the time of purchase and in case of
              payment gateway name payments refund will be made to the same
              account.
              <br />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ReturnPolicy;
