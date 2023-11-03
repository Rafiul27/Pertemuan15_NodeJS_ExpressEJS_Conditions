// Mengimpor modul Express.js
const express = require('express');

// Menginisialisasi aplikasi Express
const app = express();

// Menentukan port yang akan digunakan
const port = 3000;

// Mengatur EJS sebagai template engine
app.set('view engine', 'ejs');

// Menggunakan middleware untuk menyajikan file statis dari direktori saat ini
app.use(express.static(__dirname));

// Penanganan rute untuk halaman utama
app.get('/', (req, res) => {
    res.render('halaman utama', {
        namaWeb: "Rafi'ul Huda",
        title: 'Halo, ini adalah halaman utama!',
        message: 'Saat ini Saya sedang Mengikuti coding Training backend di sinarmas land'
    });
});

// Penanganan rute untuk halaman about
app.get('/about', (req, res) => {
    res.render('about', { title: "About" });
});

// Penanganan rute untuk halaman contact
app.get('/contact', (req, res) => {
    const contact = [
        {
            nama: "Rafi'ul Huda",
            mobile: "081283288739"
        },
        {
            nama: "Rafiul",
            mobile: "081283288789"
        },
        {
            nama: "Raya Adinda Jayadi Ahmad",
            mobile: "081283288773"
        }
    ]; 
    
    // Memeriksa apakah ada data kontak
    if (contact.length === 0) {
        // Jika tidak ada, menampilkan pesan bahwa belum ada kontak yang tersedia
        res.render('contact', {
            title: 'Kontak',
            message: 'Maaf, Belum ada daftar kontak yang tersedia.'
        });
    } else {
        // Jika ada, menampilkan data kontak di halaman kontak
        res.render('contact', {
            title: 'Kontak',
            contacts: contact
        });
    }
});

// Penanganan rute dinamis untuk produk dengan parameter 'id' dan query 'category'
app.get('/product/:id', (req, res) => {
    res.send(`Product id: ${req.params.id} <br> Category id: ${req.query.Kategori}`);
});

// Penanganan rute untuk permintaan yang tidak cocok dengan rute lainnya (404 Not Found)
app.use('/', (req, res) => {
    res.status(404);
    res.send('page not found: 404');
});

// Server mendengarkan permintaan pada port yang telah ditentukan
app.listen(port, () => {
    // Pesan ini akan dicetak saat server berjalan
    console.log(`Server berjalan di http://localhost:${port}/`);
});

