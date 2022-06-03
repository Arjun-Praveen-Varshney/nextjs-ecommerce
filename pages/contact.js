import React from "react";
import Head from "next/head";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Contact Us</title>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"
        />
      </Head>
      <div className="max-w-screen-xl md:mt-24 px-4 md:px-8 lg:px-12 xl:px-26 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
        <div className="flex flex-col justify-center items-center">
          <div>
            <h2 className="text-center text-3xl font-bold leading-tight">
              Lets talk about everything!
            </h2>
            <img className="h-40 mx-auto py-2" alt="logo" src="/ARJUN.png" />
            <p className="text-center text-xl lg:text-2xl font-medium leading-tight">
              Feel free to ask us anything!
            </p>
            <p className="py-4 px-4 text-md lg:text-md leading-tight text-center">
              If you have any questions regarding your order, feel free to send
              email, call or Whatsapp us on our support number
            </p>
            <div className="flex justify-between">
              <div className="text-center px-5 md:px-0 md:text-left py-10">
                <span className="font-bold">Corporate Address</span>
                <p>105, Aishwarya Apartment,</p>Plot no. B-30, Sector-5,
                <p>Khanda Colony, New Panvel (W), 410206</p>
              </div>
              <div className="text-center px-5 md:px-0 md:text-left py-10">
                <span className="font-bold">Customer Support</span>
                <p>
                  Call/Whatsapp:
                  <a
                    className="underline text-blue-600"
                    rel="noreferrer"
                    target="_blank"
                    href="https://wa.me/9967168585?text=Hi,%20I%20need%20to%20enquire%20about%20products%20on%20Ecommerce"
                  >
                    +91 996 716 8585
                  </a>
                </p>
                Email: arjun.varshney1423@gmail.com<p>Timing: 9AM - 9PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
