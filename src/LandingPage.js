import React from "react"; // Mengimpor React untuk membuat komponen
import "bootstrap/dist/css/bootstrap.min.css"; // Mengimpor gaya Bootstrap untuk komponen
import { useNavigate } from "react-router-dom"; // Mengimpor useNavigate untuk navigasi antar halaman

// Komponen utama halaman landing
const LandingPage = () => {
  const navigate = useNavigate(); // Fungsi untuk navigasi ke halaman lain

  return (
    <div className="container mt-5">
      {" "}
      {/* Container Bootstrap untuk membatasi lebar konten */}
      <div className="jumbotron text-center bg-light p-5 rounded shadow-sm">
        {" "}
        {/* Bagian utama dengan latar terang */}
        {/* Teks judul mata kuliah */}
        <h2 className="text-primary mb-3">
          Tugas Besar Mata Kuliah Sistem Proteksi dan Pentanahan
        </h2>
        {/* Card untuk menampilkan informasi tim */}
        <div
          className="card shadow-sm mt-4 mx-auto"
          style={{ maxWidth: "500px" }}>
          <div className="card-header bg-primary text-white">
            {" "}
            {/* Header card dengan warna biru */}
            <h3>Anggota Tim 3</h3>
          </div>
          <ul className="list-group list-group-flush">
            {" "}
            {/* Daftar anggota tim */}
            <li className="list-group-item">Anandya Subsepta C (040)</li>
            <li className="list-group-item">Alexander Egy (042)</li>
            <li className="list-group-item">Rezdo Harsa (041)</li>
          </ul>
        </div>
        {/* Pesan selamat datang dan penjelasan aplikasi */}
        <p className="lead mt-3">
          Selamat datang di <strong>Kalkulator Jarak Gangguan Penyulang</strong>
          . Aplikasi ini membantu Anda menghitung jarak gangguan pada jaringan
          listrik dengan mudah dan akurat.
        </p>
        <hr className="my-4" /> {/* Garis pemisah */}
        {/* Tombol untuk navigasi ke halaman kalkulator */}
        <p>
          Klik tombol di bawah ini untuk memulai perhitungan jarak gangguan.
        </p>
        <button
          onClick={() => navigate("/calculator")} // Navigasi ke halaman kalkulator
          className="btn btn-primary btn-lg">
          Mulai Kalkulasi
        </button>
      </div>
      {/* Bagian footer */}
      <div className="mt-4 text-center">
        <p className="text-muted">© Anggota Tim 3</p>{" "}
        {/* Informasi hak cipta */}
      </div>
    </div>
  );
};

export default LandingPage; // Mengekspor komponen agar bisa digunakan di tempat lain
