import Head from "next/head";
import Image from "next/image";
import BooksTop from "../components/books-list/BooksTop";
import data from "../books_data";
import Books from "../components/books-list/Books";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>PMO </title>
        <meta name="description" content="Pastor Martin Olusakin." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="position-relative">
        <img
          src="/images/bishop_banner.jpg"
          alt=""
          className="object-cover object-left-top slide_image"
        />

        <div className="centered text-center md:w-[35%] text-[55px] absolute top-[30%] right-[5%] invisible lg:visible">
          <h2 className="font-courgette">Pastor Martins Olusakin</h2>

          <p className="font-courgette text-gray-500 mb-4">
            An experienced social sector expert with special focus in youth
            leadership development, entrepreneur development, capacity building,
            value creation and Strategic community based initiatives. Possesses
            extensive training experience in the areas of leadership,
            organizational effectiveness, governance, nonprofit management and
            talent management. A season motivational speaker, life coach,
            mentor, counselor and shepherd (Pastor). I have spoken in a number
            of platform both locally and globally
          </p>
        </div>
      </div>

      <div className="container mx-auto lg:hidden">
        <div className="centered text-center my-10 px-4">
          <h2 className="font-courgette text-2xl md:text-4xl">
            Pastor Martins Olusakin
          </h2>

          <p className="font-courgette text-gray-500 mb-4">
            An experienced social sector expert with special focus in youth
            leadership development, entrepreneur development, capacity building,
            value creation and Strategic community based initiatives. Possesses
            extensive training experience in the areas of leadership,
            organizational effectiveness, governance, nonprofit management and
            talent management. A season motivational speaker, life coach,
            mentor, counselor and shepherd (Pastor). I have spoken in a number
            of platform both locally and globally
          </p>
        </div>
      </div>
      <BooksTop />
    </div>
  );
}
