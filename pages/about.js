import React from "react";
import Link from "next/link";
import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>About Us</title>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"
        />
      </Head>
      <div className="min-h-screen container mx-auto">
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <img
              className="w-24 md:w-36 mb-10 object-cover object-center rounded"
              alt="hero"
              src="/ARJUN.png"
            />
            <div className="text-center lg:w-2/3 w-full">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Welcome to Ecommerce
              </h1>
              <p className="mb-8 leading-relaxed">
                This sample website is an attempt to deliver amazing sample
                products at a good and reasonable price. This entire website was
                built on a YouTube series as a NextJs course project. This
                website is powered by NextJs + Strapi + Postgres for storing the
                data. For the server side logic, we use NextJs built in SSR. If
                you are curious enough to find how this website was build,
                checkout Nextjs playlist from CodeWithHarry on YouTube and if
                you are not, buy yourself a trendy geek Tshirt from ecommerce!
              </p>
              <div className="flex justify-center">
                <Link href={"/tshirts"}>
                  <a>
                    <button className="inline-flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg">
                      Start Shopping
                    </button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <hr></hr>
        <section className="mt-8 text-gray-600 body-font mx-6">
          <h2 className="font-semibold my-2 text-3xl text-gray-900">
            About Ecommerce
          </h2>
          <p className="mb-8 leading-relaxed">
            Ecommerce is an attempt to serve the people of india with unique
            designs on apparels. E-commerce is revolutionizing the way we all
            shop in India. Why do you want to hop from one store to another in
            search of your favorite geek hoodie when you can find it on the
            Internet in a single click? Not only hoodies, we also have a wide
            variety of stickers, mugs and other apparels!
          </p>
          <p>
            If you are wondering why you should shop from ecommerce when there
            are multiple options available to you, our unique designs and
            quality products will answer your question.
          </p>
        </section>
      </div>
    </>
  );
};

export default About;
