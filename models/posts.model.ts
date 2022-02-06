import books from "../data/books";

const getEducationBooks = () =>
  new Promise((resolve, reject) => {
    const educationBooks = books.filter((book: any) =>
      book.categories.some((element: any) => element === "Éducation")
    );

    resolve(educationBooks);
  });

export { getEducationBooks };
