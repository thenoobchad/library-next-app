import Link from "next/link";
import BookCover from "./BookCover";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "./ui/button";

export default function BookCard({
  id,
  title,
  genre,
  color,
  cover,
  isLoanedBook = false,
}: Book) {
  return (
    <li className={cn(isLoanedBook && "xs:w-267 w-full")}>
      <Link
        href={`/books/${id}`}
        className={cn(isLoanedBook && "w-full flex flex-col items-center")}
      >
        <BookCover coverColor={color} coverImage={cover} className="w-40 h-48" />

        <div className={cn("mt-2 flex flex-col", !isLoanedBook && "xs:max-w-40 max-w-38")}>
          <p className="text-white text-[16px] ">{title}</p>
          <p className="text-gray-400 text-[16px] py-2 italic text-sm flex flex-nowrap">{genre}</p>
        </div>

        {isLoanedBook && (
          <div className="mt-3 w-full">
            <div className="book-loaned">
              <Image
                src="/icons/calender.svg"
                alt="calender"
                width={18}
                height={18}
                className="object--contain"
              />
              <p className="text-gray-100">11 days left to return</p>
            </div>

            <Button className="">Download Receipt</Button>
          </div>
        )}
      </Link>
    </li>
  );
}
