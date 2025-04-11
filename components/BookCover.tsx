import { cn } from "@/lib/utils";
import BookCoverSvg from "@/components/BookCoverSvg";
import Image from "next/image";

type BookCoverVariant = "extraSmall" | "small" | "medium" | "regular" | "wide";

const variantStyles: Record<BookCoverVariant, string> = {
  extraSmall: "book-cover_extra_small",
  small: "book-cover_small",
  medium: "book-cover_medium",
  regular: "book-cover_regular",
  wide: "book-cover_wide",
};

interface Props {
  className?: string;
  variant?: BookCoverVariant;
  coverColor: string;
  coverImage: string;
}

const BookCover = ({
  className,
  variant = "regular",
  coverColor = "#012B48",
  coverImage = "https://placehold.co/400x600.png",
}: Props) => {
  return (
    <div
      className={cn(
        "relative w-[260] h-[360] transition-all duration-300",
        variantStyles[variant],
        className
      )}
    >
      <BookCoverSvg coverColor={coverColor} />

      <div className="absolute top-0 left-[12%] w-[86%] h-[87%]"
      
      >
        <Image
          src={coverImage}
          alt="Book cover"
          fill
          className="rounded-sm object-fill "
        />
      </div>
    </div>
  );
};
export default BookCover;
