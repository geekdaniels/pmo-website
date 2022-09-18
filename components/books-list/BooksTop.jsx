import Image from "next/image";
import Link from "next/link";
import data from "../../books_data";
import Books from "./Books";
import amabooks from "../../public/images/amazon_Books.png";

export default function BooksTop() {
  return (
    <div className="relative bg-[#e8e9ec] py-5">
      <div className="absolute left-10 bg-black w-2 h-[110px] sm:left-[90px]"></div>
      <h2 className=" text-xl bg-[#42cbf5] w-fit py-3 items-center rounded font-semibold px-2 mx-[90px] sm:ml-[120px]">
        Read and unveil the GREATNESS in you
      </h2>
      <h1 className="ml-[90px] my-5 text-black font-bold text-4xl sm:ml-[120px]">
        BOOKS BY PMO
      </h1>
      <div className="block mx-auto w-[85%] bg-[#42cbf5] my-5 rounded py-5 pl-[30px] sm:ml-[90px] sm:flex sm:justify-between">
        <div className="flex mr-8">
          <Image
            width="350px"
            height="150px"
            src={amabooks}
            alt="amazon books"
          />
        </div>
        <div>
          <h3 className="mr-[150px] mt-3 text-xl  font-semibold sm:mt-0 sm:text-5xl sm:flex sm:justify-end">
            See available books <br /> Visit the store
          </h3>
          <div className="block gap-4 sm:flex">
            <Link href="https://pmo-website-8ydhjh8su-geekdaniels.vercel.app/#">
            <button
              className="rounded-xl my-4 py-4 px-[40px] w-fit text-2xl text-white bg-yellow-500"
            >
              Amazon
            </button>
          </Link>

          <Link href="https://pmo-website-8ydhjh8su-geekdaniels.vercel.app/#">
            <button
              className="rounded-xl my-4 py-4 px-[40px] w-fit text-2xl text-white bg-yellow-500"
            >
              Selar
            </button>
          </Link>
          </div>
          
        </div>
      </div>

      <div className="block sm:flex">
        {data.map((book) => (
          <Books key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}
