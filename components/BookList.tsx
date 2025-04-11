import BookCard from "./BookCard";

interface Props {
  title: string;
  books: Book[];
  containerClassName: string;
}

export default function BookList({ title, books, containerClassName }: Props) {
  return (
    <section className={containerClassName}>
      <h2 className="font-bebas-neue uppercase font-extrabold text-4xl pb-10 text-gray-100">
        {title}
      </h2>

      <ul className="flex flex-wrap gap-10 justify-start mx-auto items-center">
        {books.map((book) => (
          <BookCard key={book.title} {...book} />
        ))}
      </ul>
    </section>
  );
}
