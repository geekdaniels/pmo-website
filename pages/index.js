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

      <BooksTop />
      
    </div>
  );
}
