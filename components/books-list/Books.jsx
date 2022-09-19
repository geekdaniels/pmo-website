import Image from "next/image";
import Link from "next/link";

const Books = ({ book }) => (
  <div className="mx-[90px] my-5 pb-3 border-[#ceced1] border-2 text-center bg-white">
    <Image width="200%" height="250%" src={book.img} alt="book" />

    <div className="my-3 text-lg font-normal justify-around text-black">
      <h1 className="font-bold">{book.title}</h1>
    </div>

    {/* <Link href="https://pmo-website-8ydhjh8su-geekdaniels.vercel.app/#">
      <button className="mx-auto my-3 py-3 px-4 rounded items-center font-bold text-white justify-between bg-yellow-400 flex">
        <p className="mx-2">{book.amazon}</p>
        <Image width="18px" height="18px" src={book.icon} alt="amazon icon" />
      </button>
    </Link> */}

    <Link href="https://selar.co/m/Mbusuyi">
      <button className="mx-auto my-3 py-3 px-4 rounded items-center font-bold text-white justify-between bg-yellow-400 flex">
        <p className="mx-1">{book.okada}</p>
      </button>
    </Link>
  </div>
);
export default Books;
