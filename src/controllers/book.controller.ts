import { PrismaClient } from "@prisma/client";

const bookClient = new PrismaClient().book;

//TODO: get all books
export const getAllBooks = async (req, res) => {
  try {
    const allBooks = await bookClient.findMany();

    res.status(200).json({ data: allBooks });
  } catch (e) {
    console.log(e);
  }
};

//TODO: get book by id
export const getBookById = async (req, res) => {
  try {
    const bookId = req.params.id;
    const book = await bookClient.findUnique({
      where: {
        id: bookId,
      },
    });

    res.status(200).json({ data: book });
  } catch (e) {
    console.log(e);
  }
};

//TODO: create book
export const createBook = async (req, res) => {
  try {
    const bookData = req.body;

    const book = await bookClient.create({
      data: {
        title: bookData.title,
        author: {
          connect: { id: bookData.authorId },
        },
      },
    });

    res.status(201).json({ data: book });
  } catch (e) {
    console.log(e);
  }
};

//TODO: update book
export const updateBook = async (req, res) => {
  try {
    const bookId = req.params.id;
    const bookData = req.body;

    const book = await bookClient.update({
      where: {
        id: bookId,
      },
      data: bookData,
    });

    res.status(200).json({ data: book });
  } catch (e) {
    console.log(e);
  }
};

//TODO: delete book
export const deleteBook = async (req, res) => {
  try {
    const bookId = req.params.id;
    const book = await bookClient.delete({
      where: {
        id: bookId,
      },
    });

    res.status(200).json({ data: {} });
  } catch (e) {
    console.log(e);
  }
};