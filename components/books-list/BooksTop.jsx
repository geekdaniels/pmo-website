import Image from "next/image";
import data from "../../books_data";
import Books from "./Books";
import amabooks from "../../public/images/amazon_Books.png";

export default function BooksTop() {
  return (
    <div className="relative bg-black py-5">
      {/* <div className="absolute left-[90px] bg-white w-2 h-[110px] lg:left-10"></div> */}
      <div className="absolute left-10 bg-white w-2 h-[110px] sm:left-[90px]"></div>
      {/* <h2 className="ml-[120px] text-xl bg-[#42cbf5] w-fit py-3 items-center rounded font-semibold px-2 lg:mx-[90px]"> */}
      <h2 className=" text-xl bg-[#42cbf5] w-fit py-3 items-center rounded font-semibold px-2 mx-[90px] sm:ml-[120px]">
        Read and unveil the GREATNESS in you
      </h2>
      {/* <h1 className="ml-[120px] my-5 text-white font-bold text-4xl lg:ml-[90px]"> */}
      <h1 className="ml-[90px] my-5 text-white font-bold text-4xl sm:ml-[120px]">
        BOOKS BY PMO
      </h1>
      {/* <div className="flex justify-between bg-[#42cbf5] my-5 rounded py-5 pl-[30px] ml-[90px] w-[85%] lg:mx-auto lg:block lg:w-[85%]"> */}
      <div className="block mx-auto w-[85%] bg-[#42cbf5] my-5 rounded py-5 pl-[30px] sm:ml-[90px] sm:flex sm:justify-between">
        <div className="flex mr-8">
          <Image
            width="350px"
            height="150px"
            src={amabooks}
            alt="amazon books"
          />
        </div>
        <div className="">
          <h3 className="mr-[150px] text-5xl font-semibold sm:flex sm:justify-end">
            See available books <br /> Visit the store
          </h3>
          <button
            href="https://fb.com"
            className="rounded-xl my-4 py-4 px-[40px] w-fit text-2xl text-white mx-auto bg-yellow-500"
          >
            Amazon
          </button>
        </div>
      </div>
      {/* <div className="lg:block flex"> */}
      <div className="block sm:flex">
        {data.map((book) => (
          <Books key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}
