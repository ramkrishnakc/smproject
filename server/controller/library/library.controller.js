import formidable from 'formidable';
import path from 'path';
import fs from 'fs';

import Model from '../../model';
import config from '../../config';
import {sendSuccessResponse, sendErrorResponse} from '../helper';

const {
  // logger,
  app: {publicPath, rootPath},
} = config;
const Library = Model.library;

/* Add book to the library */
const addBook = (req, res) => { // eslint-disable-line
  try {
    let filename;
    const query = {data: {}};

    const form = new formidable.IncomingForm().parse(req);
    form.on('fileBegin', (name, file) => {
      if (name === 'file') {
        filename = `book_${Date.now()}.${file.name.split('.').pop()}`;
        // eslint-disable-next-line no-param-reassign
        file.path = path.join(rootPath, 'uploads', 'books', filename);
      }
    });

    form.on('file', (name, file) =>
      fs.copyFile(
        file.path,
        path.join(publicPath, 'uploads', 'books', filename),
        (e) => {
          if (e) {
            throw new Error('Could not copy file to dist folder');
          }
        }
      )
    );

    form.on('field', (name, data) => {
      if (name === 'data') {
        try {
          const parsedData = JSON.parse(data);
          const keys = [
            'name',
            'author',
            'type',
            'category',
            'language',
            'quantity',
            'published_date',
            'description',
          ];
          keys.forEach((key) => {
            query.data[`s_book_${key}`] = parsedData[key];
          });
        } catch (e) {
          throw new Error(e);
        }
      }
    });

    form.on('error', (e) => {
      throw new Error(e);
    });

    form.on('end', () => {
      if (filename) {
        query.data.s_book_image = path.join('/uploads', 'books', filename);
      }

      if (query.data.s_book_name && query.data.s_book_author) {
        return Library.post(query)
          .then(() =>
            sendSuccessResponse(
              res,
              undefined,
              `Added book ${query.data.s_book_name} to Library successfully`
              // `User: ${req.session.userID} has added book ${name} to Library successfully`
            )
          )
          .catch((err) =>
            sendErrorResponse({
              res,
              logMsg: `Couldn't add book to library : ${err && err.message}`,
            })
          );
      }
      throw new Error('Bad parameters');
    });
  } catch (error) {
    return sendErrorResponse({
      res,
      code: 400,
      logMsg: error && error.message,
    });
  }
};

const getBookById = () => {};
const editBookById = () => {};
const deleteBookById = () => {};
const getBookslist = () => {};
const getRecords = () => {};
const editRecords = () => {};

export default {
  getBookById,
  addBook,
  editBookById,
  deleteBookById,
  getBookslist,
  getRecords,
  editRecords,
};
