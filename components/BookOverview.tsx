import Image from "next/image";
import { Button } from "./ui/button";
import BookCover from "./BookCover";

export default function BookOverview({
  title,
  author,
  genre,
  rating,
  total_copies,
  available_copies,
  description,
  color,
  cover,
}: Book) {
  return (
    <section className=" flex flex-col-reverse items-center gap-12 sm:gap-32 xl:flex-row xl:gap-8">
      <div className="flex flex-1 flex-col gap-5">
        <h1 className="text-5xl font-semibold text-white">{title}</h1>

        <div className="flex flex-row gap-4">
          <p className="font-semibold text-gray-400">
            By <span className="text-basic">{author}</span>
          </p>
          <p className="font-semibold text-gray-400">
            Category <span className="text-basic">{genre}</span>
          </p>
          <div className="flex flex-row gap-1 justify-center align-middle">
            <Image src="/icons/star.svg" alt="star" width={22} height={22} />
            <p className="text-gray-400">{rating}</p>
          </div>
        </div>

        <div className="flex flex-row gap-4">
          <p className="text-gray-400">
            Total Books:{" "}
            <span className="font-medium text-gray-300">{total_copies}</span>
          </p>

          <p className="text-gray-400">
            Available Books:{" "}
            <span className="font-medium text-gray-300">
              {available_copies}
            </span>
          </p>
        </div>

        <p className="mt-2 text-justify text-xl text-gray-400">{description}</p>

        <Button className="w-full lg:w-fit lg:px-8 cursor-pointer bg-primary flex flex-1 justify-center align-middle p-3">
          <Image src="/icons/book.svg" alt="book" width={20} height={20} />
          <p className="text-gray-800 tracking-widest text-lg font-semibold uppercase">
            Borrow
          </p>
        </Button>
      </div>

      <div className="relative flex flex-1 justify-center">
        <div className="relative">
          <BookCover
            variant="wide"
            className="z-10"
            coverColor={color}
            coverImage={cover}
          />

          <div className="absolute left-16 top-10 rotate-12 opacity-40 max-sm:hidden">
            <BookCover variant="wide" coverColor={color} coverImage={cover} />
          </div>
        </div>
      </div>
    </section>
  );
}
