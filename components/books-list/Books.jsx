import Image from "next/image";
import Link from "next/link";

const Books = ({ book }) => (

  <div className="mx-[90px] my-5 pb-3 text-center bg-white">

    <Image width="200%" height="250%" src={book.img} alt="book" />

    <div className="my-3 text-lg font-normal justify-around text-black">
      <h1 className="font-bold">{book.title}</h1>

      <h2 className="font-bold">{book.price}</h2>

    </div>
    <button className="mx-auto my-3 py-3 px-4 rounded items-center font-bold text-white justify-between bg-yellow-400 flex">
      <p className="mx-2">{book.amazon}</p>
      <Image width="18px" height="18px" src={book.icon} alt="amazon icon" />
    </button>
  </div>
);
export default Books;
