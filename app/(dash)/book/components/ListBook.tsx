import useSWR from "swr";
import endpoint from "@/lib/axios";

const fetcher = (url: string) =>
  endpoint.get(url).then((response) => response.data);

function ListBook() {
  const { data, error } = useSWR("/api/book", fetcher);
  console.log(data);

  if (error) {
    return <div>Error: Gagal memuat data buku</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  const { status, messages, data: books } = data;

  if (!status) {
    return <div>{messages}</div>;
  }

  return (
    <div>
      <h2>Daftar Buku</h2>

      {books.map((book) => (
        <div key={book.id}>
          <h3>{book.name}</h3>
          <p>{book.author}</p>
          <p>Created at: {book.created_at}</p>
          <p>Updated at: {book.updated_at}</p>
        </div>
      ))}
    </div>
  );
}

export default ListBook;
