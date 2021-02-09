const { post } = require("../routes/routerBooks");

let books = [
    {
      id: 1,
      isbn: 885654,
      judul: 'ini judul 1',
      sinopsis: 'ini  sinopsis 1',
      penulis: 'ini penulis 1',
      genre: 'ini genre 1'  
    },
    {
        id: 2,
        isbn: 12,
        judul: 'ini judul 2',
        sinopsis: 'ini  sinopsis 2',
        penulis: 'ini penulis 2',
        genre: 'ini genre 2'
    },
    {
        id: 3,
        isbn: 123,
        judul: 'ini judul 3',
        sinopsis: 'ini  sinopsis 3',
        penulis: 'ini penulis 3',
        genre: 'ini genre 3'
    },
    {
        id: 4,
        isbn: 1234,
        judul: 'ini judul 4',
        sinopsis: 'ini  sinopsis 4',
        penulis: 'ini penulis 4',
        genre: 'ini genre 4'
    }
];

// GET All books
exports.getBooks = (req, res)=>{
    res.status(200).json({
        berhasil: true,
        books
    });
};

// GET one books by id
exports.getBooksById = (req, res)=>{
    const id = +req.params.id;
    let booksById = books.find((buku)=> buku.id === id);
    res.status(200).json({
        berhasil: true,
        booksById
    });
};

// Post books
exports.postBooks = (req, res)=>{
    const { isbn, judul, sinopsis, penulis, genre } = req.body;
    let id = books[books.length - 1].id +1;

    const dataBooks = {
        id,
        isbn,
        judul,
        sinopsis,
        penulis,
        genre
    };

    books.push(dataBooks);

    res.status(200).json({
        berhasil: true,
        dataBooks
    });
};

// Put books
exports.updateBooks = (req, res)=>{
    
    // const dataBooks = {  
    //     isbn:req.body.isbn,
    //     judul: req.body.judul,
    //     sinopsis: req.body.sinopsis,
    //     penulis: req.body.penulis,
    //     genre: req.body.genre
    // }
    // const id = req.params.id;
    // const book = books.find((i)=> i.id ===  id);
    // const updated = { ...book, ...dataBooks}
    
    // res.status(200).json(updated)

    let book = books.find(i => i.id === +req.params.id)
    const params = {
        isbn: req.body.isbn,
        judul: req.body.judul,
        sinopsis: req.body.sinopsis,
        penulis: req.body.penulis,
        genre: req.body.genre
    } 
    book = { ...book, ...params }
    books = books.map(i=> i.id === books.id ? book : i)
    res.status(200).json(book)
};

// Delete books
exports.deleteBooks = (req, res)=>{
    books = books.filter(i => i.id !== +req.params.id);
    res.status(200).json({
        berhasil: true,
        message: `Berhasil mendelete buku dari data!`,
    });
};