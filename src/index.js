import React from 'react';
import { createRoot } from 'react-dom/client';
import DicodingLogo from './dicoding-logo.png'; // cara 2 (lokasi gambar dipindahkan dari direktori public ke src)

const element = (
  <div>
    <h1>Biodata Perusahaan</h1>
    <ul>
      <li>Nama: Dicoding Indonesia</li>
      <li>Bidang Education</li>
      <li>Tagline: Decode Ideas, Discover Potential.</li>
      {/* cara 1 (lokasi gambar berada pada direktori public) */}
      {/* <img src="dicoding-logo.png" alt="Dicoding Logo" /> */}

      {/* cara 2 */}
      <img src={DicodingLogo} alt="Dicoding Logo" />
    </ul>
  </div>
);

const root = createRoot(document.getElementById('root'));
root.render(element);
