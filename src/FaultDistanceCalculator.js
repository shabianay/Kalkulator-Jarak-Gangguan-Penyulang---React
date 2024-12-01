import React, { useState } from "react"; // Mengimpor React dan hook useState untuk mengelola state
import "bootstrap/dist/css/bootstrap.min.css"; // Mengimpor Bootstrap untuk gaya
import { Alert, Spinner } from "react-bootstrap"; // Mengimpor komponen Bootstrap untuk alert dan spinner
import { useNavigate } from "react-router-dom"; // Mengimpor useNavigate untuk navigasi halaman

const FaultDistanceCalculator = () => {
  // Konstanta untuk panjang penyulang dan tegangan busbar
  const PENYULANG_LENGTH = 10; // Panjang penyulang maksimum dalam kilometer
  const BUSBAR_VOLTAGE = 20; // Tegangan busbar dalam kilovolt

  // State untuk menyimpan input dan hasil
  const [faultCurrent, setFaultCurrent] = useState(""); // Menyimpan nilai arus gangguan dari input pengguna
  const [specificResistance, setSpecificResistance] = useState("0.4"); // Menyimpan nilai resistansi spesifik saluran
  const [faultDistance, setFaultDistance] = useState(null); // Menyimpan hasil jarak gangguan setelah perhitungan
  const [error, setError] = useState(""); // Menyimpan pesan kesalahan jika input tidak valid
  const [loading, setLoading] = useState(false); // Menyimpan status loading untuk menampilkan spinner

  const navigate = useNavigate(); // Fungsi untuk navigasi ke halaman lain

  // Fungsi untuk menghitung jarak gangguan
  const calculateFaultDistance = () => {
    const current = parseFloat(faultCurrent); // Mengonversi input arus gangguan ke float
    const resistance = parseFloat(specificResistance); // Mengonversi input resistansi ke float

    setError(""); // Menghapus pesan kesalahan sebelumnya

    // Validasi input arus gangguan
    if (isNaN(current) || current <= 0) {
      setError("Masukkan arus gangguan yang valid (dalam Ampere).");
      return;
    }

    // Validasi input resistansi spesifik
    if (isNaN(resistance) || resistance <= 0) {
      setError("Masukkan resistansi spesifik yang valid (Ω/km).");
      return;
    }

    setLoading(true); // Menampilkan spinner saat perhitungan sedang berlangsung

    // Simulasi penundaan perhitungan (1 detik)
    setTimeout(() => {
      // Rumus untuk menghitung jarak gangguan
      const distance = (current * resistance) / (BUSBAR_VOLTAGE * Math.sqrt(3));
      const calculatedDistance = Math.min(distance, PENYULANG_LENGTH); // Membatasi jarak maksimum ke panjang penyulang

      setFaultDistance(calculatedDistance.toFixed(2)); // Mengatur hasil dengan 2 angka desimal
      setLoading(false); // Menyembunyikan spinner setelah perhitungan selesai
    }, 1000);
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-sm mx-auto" style={{ maxWidth: "500px" }}>
        <div className="card-header bg-primary text-white text-center">
          <h3>Kalkulator Jarak Gangguan Penyulang</h3> {/* Judul halaman */}
        </div>
        <div className="card-body">
          {/* Input untuk arus gangguan */}
          <div className="mb-3">
            <label className="form-label">Arus Gangguan (A)</label>
            <input
              type="number"
              className="form-control"
              value={faultCurrent}
              onChange={(e) => setFaultCurrent(e.target.value)} // Mengatur state arus gangguan saat input berubah
              placeholder="Masukkan arus gangguan"
              min="0"
            />
          </div>

          {/* Input untuk resistansi spesifik saluran */}
          <div className="mb-3">
            <label className="form-label">
              Resistansi Spesifik Saluran (Ω/km)
            </label>
            <input
              type="number"
              className="form-control"
              value={specificResistance}
              onChange={(e) => setSpecificResistance(e.target.value)} // Mengatur state resistansi spesifik saat input berubah
              placeholder="Masukkan resistansi spesifik saluran"
              min="0"
            />
          </div>

          {/* Menampilkan pesan kesalahan jika input tidak valid */}
          {error && (
            <Alert variant="danger" className="d-flex align-items-center">
              {error}
            </Alert>
          )}

          {/* Menampilkan spinner selama proses perhitungan */}
          {loading && (
            <div className="d-flex justify-content-center my-3">
              <Spinner animation="border" role="status" />
              <span className="ms-2">Menghitung...</span>
            </div>
          )}

          {/* Menampilkan hasil jarak gangguan jika perhitungan selesai */}
          {faultDistance !== null && !loading && (
            <Alert variant="success" className="mt-3">
              <h5 className="alert-heading">Jarak Gangguan:</h5>
              <p className="mb-0">
                <strong>{faultDistance} km</strong>
              </p>
              <small className="text-muted">
                (Maksimum panjang penyulang: {PENYULANG_LENGTH} km)
              </small>
            </Alert>
          )}
        </div>
        <div className="card-footer d-flex flex-column">
          {/* Tombol untuk memulai perhitungan */}
          <button
            onClick={calculateFaultDistance}
            className="btn btn-primary mb-2"
            disabled={loading}>
            {loading ? "Menghitung..." : "Hitung Jarak Gangguan"}
          </button>
          {/* Tombol untuk kembali ke halaman utama */}
          <button
            onClick={() => navigate("/")} // Navigasi ke halaman landing
            className="btn btn-secondary">
            Kembali ke Halaman Utama
          </button>
        </div>
      </div>
    </div>
  );
};

export default FaultDistanceCalculator;
