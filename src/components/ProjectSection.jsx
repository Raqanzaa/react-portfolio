import React, { useState } from "react";
import BrandGuidelines from "../assets/Brand-Guidelines.png";
import Emoney from "../assets/E-money.png";
import EndySport from "../assets/Endy-Sport.png";
import PressureSampah from "../assets/Pressure-Sampah.png";
import LaundryBlues from "../assets/Laundry-Blues.png";
import PijatIn from "../assets/Pijatin.png";
import AmbilPaket from "../assets/Ambil-Paket.png";
import PustakaSyabab from "../assets/Pustaka-Syabab.png";

const ProjectSection = () => {
  return (
    <section
      id="project"
      className="md:min-h-screen flex items-center justify-between px-6 md:px-9 py-6 md:py-20"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-transparent dark:text-white mb-16 relative">
          My <span className="text-blue-700">Project</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-transparent">
            <img
              src={PressureSampah}
              alt="Raqanzaa-pressure-sampah"
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black/70 bg-opacity-70 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h4 className="text-xl font-bold text-white mb-2">
                Website Pressure Sampah
              </h4>
              <p className="text-gray-300 text-sm mb-4">
                Presur Sampah (Presentase Keberhasilan Daur Ulang Sampah) adalah
                aplikasi untuk melacak dan menilai seberapa efektif daur ulang
                sampah.
              </p>
              <a
                href="https://github.com/Raqanzaa/Pressure-Sampah"
                className="text-white hover:text-blue-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bx bx-link-external text-2xl"></i>
              </a>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-transparent">
            <img
              src={Emoney}
              alt="Raqanzaa-emoney"
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black/70 bg-opacity-70 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h4 className="text-xl font-bold text-white mb-2">
                Website Keuangan Pribadi
              </h4>
              <p className="text-gray-300 text-sm mb-4">
                Aplikasi keuangan pribadi berbasis website, yang dirancang untuk
                membantu pengguna mengelola dan melacak keuangan mereka secara
                efisien.
              </p>
              <a
                href="https://github.com/Raqanzaa/Aplikasi-Keuangan-Pribadi"
                className="text-white hover:text-blue-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bx bx-link-external text-2xl"></i>
              </a>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-transparent">
            <img
              src={EndySport}
              alt="Raqanzaa-endy-utama"
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black/70 bg-opacity-70 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h4 className="text-xl font-bold text-white mb-2">
                Web e-commerse UMKM Sepatu
              </h4>
              <p className="text-gray-300 text-sm mb-4">
                Membuat website website sederhana guna membantu umkm yang sedang
                berkembang untuk digunakan sebagai sarana penjualan secara
                online.
              </p>
              <a
                href="https://github.com/Raqanzaa/tugasBootstrap1"
                className="text-white hover:text-blue-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bx bx-link-external text-2xl"></i>
              </a>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-transparent">
            <img
              src={BrandGuidelines}
              alt="Raqanzaa-Bguidelines"
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black/70 bg-opacity-70 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h4 className="text-xl font-bold text-white mb-2">
                Desain Brand Guidelines
              </h4>
              <p className="text-gray-300 text-sm mb-4">
                Membuat desain logo dan juga brand guidelines untuk toko buku
                pustaka syabab
              </p>
              <a
                href="https://drive.google.com/drive/folders/1lbJq-LpKGeU08042w-sykOI8Wcj7DRpR?usp=sharing"
                className="text-white hover:text-blue-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bx bx-link-external text-2xl"></i>
              </a>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-transparent">
            <img
              src={LaundryBlues}
              alt="Laundry Blues"
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black/70 bg-opacity-70 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h4 className="text-xl font-bold text-white mb-2">
                Website Laundry Blues
              </h4>
              <p className="text-gray-300 text-sm mb-4">
                LaundryBlues adalah aplikasi web yang digunakan untuk pemesanan
                layanan antar-jemput laundry secara online, memudahkan pelanggan
                dalam mencuci pakaian tanpa perlu keluar rumah.
              </p>
              <a
                href="https://drive.google.com/drive/folders/1lbJq-LpKGeU08042w-sykOI8Wcj7DRpR?usp=sharing"
                className="text-white hover:text-blue-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bx bx-link-external text-2xl"></i>
              </a>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-transparent">
            <img
              src={PijatIn}
              alt="Pijat.in"
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black/70 bg-opacity-70 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h4 className="text-xl font-bold text-white mb-2">
                Website Pijat.in
              </h4>
              <p className="text-gray-300 text-sm mb-4">
                pijat.in adalah aplikasi web yang digunakan untuk pemesanan atau
                booking layanan pijat secara online, menghubungkan terapis
                profesional dengan pelanggan yang membutuhkan perawatan
                kesehatan.
              </p>
              <a
                href="https://drive.google.com/drive/folders/1lbJq-LpKGeU08042w-sykOI8Wcj7DRpR?usp=sharing"
                className="text-white hover:text-blue-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bx bx-link-external text-2xl"></i>
              </a>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-transparent">
            <img
              src={AmbilPaket}
              alt="Ambil Paket"
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black/70 bg-opacity-70 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h4 className="text-xl font-bold text-white mb-2">
                Website Ambil Paket
              </h4>
              <p className="text-gray-300 text-sm mb-4">
                AmbilPaket adalah aplikasi web yang digunakan untuk pengantaran
                paket dengan konsep serupa jasa ekspedisi seperti JNE,
                memberikan kemudahan dalam pengiriman barang ke berbagai tujuan.
              </p>
              <a
                href="https://drive.google.com/drive/folders/1lbJq-LpKGeU08042w-sykOI8Wcj7DRpR?usp=sharing"
                className="text-white hover:text-blue-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bx bx-link-external text-2xl"></i>
              </a>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-transparent">
            <img
              src={PustakaSyabab}
              alt="Pustaka Syabab"
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black/70 bg-opacity-70 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h4 className="text-xl font-bold text-white mb-2">
                Website E-commerce Pustaka Syabab
              </h4>
              <p className="text-gray-300 text-sm mb-4">
                pustakasyabab adalah aplikasi web e-commerce khusus penjualan
                buku online, menyediakan berbagai koleksi literatur dengan
                proses pembelian yang mudah dan cepat.
              </p>
              <a
                href="https://drive.google.com/drive/folders/1lbJq-LpKGeU08042w-sykOI8Wcj7DRpR?usp=sharing"
                className="text-white hover:text-blue-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bx bx-link-external text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
