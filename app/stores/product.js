export const useProductStore = defineStore("product", () => {
  const productList = [
    {
      nama: "Benang Jahit",
      kategori: "Benang",
      harga: "3.500",
      image: "/products/benang/warna.webp",
      slug: "benang-jahit",
      detail: [
        {
          name: "Hitam",
          price: "3.500",
          image: "/products/benang/warna.webp",
        },
        {
          name: "Warna",
          price: "3.500",
          image: "/products/benang/hitam.webp",
        },
      ],
    },
    {
      nama: "Mutiara Sintetis",
      kategori: "Payet",
      harga: "5.000",
      image: "/products/mutiara-sintetis/4mm.webp",
      slug: "mutiara-sintetis",
      detail: [
        {
          name: "4 mm",
          price: "4.500",
          image: "/products/mutiara-sintetis/4mm.webp",
        },
        {
          name: "6 mm",
          price: "5.500",
          image: "/products/mutiara-sintetis/6mm.webp",
        },
      ],
    },
    {
      nama: "Diamond Taiwan",
      kategori: "Payet",
      harga: "7.000",
      image: "/products/diamond-taiwan/diamond.webp",
      slug: "diamont-taiwan",
      detail: [
        {
          name: "Pelangi 7x15",
          price: "7.000",
          image: "/products/diamond-taiwan/diamond.webp",
        },
      ],
    },
    {
      nama: "Manik Mote Bulat",
      kategori: "Payet",
      harga: "6.000",
      image: "/seragam-sekolah.jpg",
      slug: "manik-mote-bulat",
      detail: [
        {
          name: "4 mm",
          price: "6.000",
          image: "/seragam-sekolah.jpg",
        },
        {
          name: "6 mm",
          price: "5.000",
          image: "/seragam-sekolah.jpg",
        },
      ],
    },
    {
      nama: "Mutiara Kelopak",
      kategori: "Payet",
      harga: "5.000",
      image: "/seragam-sekolah.jpg",
      slug: "mutiara-kelopak",
      detail: [
        {
          name: "Kecil",
          price: "5.000",
          image: "/seragam-sekolah.jpg",
        },
      ],
    },
    {
      nama: "Resleting Jepang",
      kategori: "Resleting",
      harga: "2.500",
      image: "/products/resleting-jepang/index.jpg",
      slug: "resleting-jepang",
      detail: [
        {
          name: "20 inch KGC",
          price: "3.000",
          image: "/products/resleting-jepang/kgc.jpg",
        },
        {
          name: "20 Inch Kim",
          price: "3.000",
          image: "/products/resleting-jepang/kim.jpg",
        },
        {
          name: "20 Inch HD",
          price: "3.000",
          image: "/products/resleting-jepang/hd.jpg",
        },
      ],
    },
    {
      nama: "Kancing Jepret",
      kategori: "Resleting",
      harga: "12.000",
      image: "/products/kancing-jepret/index.webp",
      slug: "kancing-jepret",
      detail: [
        {
          name: "12 mm",
          price: "14.000/Lusin",
          image: "/products/kancing-jepret/12mm.webp",
        },
        {
          name: "10 mm KAM",
          price: "5.000/Lusin",
          image: "/products/kancing-jepret/10mm-kam.webp",
        },
      ],
    },
    {
      nama: "Elastik",
      kategori: "Resleting",
      harga: "2.500",
      image: "/products/elastik/index.jpg",
      slug: "elastik",
      detail: [
        {
          name: "3 cm Tebal",
          price: "5.000/meter",
          image: "/products/elastik/index.jpg",
        },
        {
          name: "2.5 cm Tebal",
          price: "4.500/meter",
          image: "/products/elastik/index.jpg",
        },
        {
          name: "2 cm Tebal",
          price: "4.000/meter",
          image: "/products/elastik/index.jpg",
        },
        {
          name: "3 cm Biasa",
          price: "3.000/meter",
          image: "/products/elastik/index.jpg",
        },
        {
          name: "2.5 cm Biasa",
          price: "2.500/meter",
          image: "/products/elastik/index.jpg",
        },
        {
          name: "2 cm Biasa",
          price: "2.000/meter",
          image: "/products/elastik/index.jpg",
        },
      ],
    },
    {
      nama: "Payet Bambu Panjang",
      kategori: "Payet",
      harga: "5.000",
      image: "/products/payet-bambu/index.webp",
      slug: "payet-bambu-panjang",
      detail: [
        {
          name: "Hitam",
          price: "5.000",
          image: "/products/payet-bambu/hitam.webp",
        },
        {
          name: "Emas",
          price: "5.000",
          image: "/products/payet-bambu/emas.webp",
        },
        {
          name: "Silver",
          price: "5.000",
          image: "/products/payet-bambu/silver.webp",
        },
      ],
    },
    {
      nama: "Jarum Mesin",
      kategori: "Jarum",
      harga: "3.000",
      image: "/products/jarum-mesin/index.webp",
      slug: "jarum-mesin",
      detail: [
        {
          name: "DB 90/14",
          price: "3.000",
          image: "/products/jarum-mesin/index.webp",
        },
        {
          name: "DB 75/11",
          price: "3.500",
          image: "/products/jarum-mesin/db-75-11.webp",
        },
        // {
        //   name: "DB 75/11",
        //   price: "3.500",
        //   image: "/products/jarum-mesin/index.webp",
        // },
        {
          name: "DC 90/14",
          price: "3.500",
          image: "/products/jarum-mesin/index.webp",
        },
      ],
    },
    {
      nama: "Kancing Baju",
      kategori: "Kancing",
      harga: "5.000",
      image: "/seragam-sekolah.jpg",
      slug: "kancing-baju",
      detail: [
        // {
        //   name: "Hitam",
        //   price: "3.000",
        //   image: "/seragam-sekolah.jpg",
        // },
        // {
        //   name: "Warna",
        //   price: "3.500",
        //   image: "/seragam-sekolah.jpg",
        // },
      ],
    },
    {
      nama: "Meteran Jahit",
      kategori: "Aksesoris",
      harga: "2.000",
      image: "/products/meteran-jahit/index.jpg",
      slug: "meteran-jahit",
      detail: [
        {
          name: "Kecil",
          price: "2.000",
          image: "/products/meteran-jahit/kecil.jpg",
        },
        {
          name: "Sedang",
          price: "2.500",
          image: "/products/meteran-jahit/sedang.jpg",
        },
        {
          name: "Besar",
          price: "3.000",
          image: "/products/meteran-jahit/besar.jpg",
        },
      ],
    },
    {
      nama: "Perekat",
      kategori: "Aksesoris",
      harga: "3.000",
      image: "/seragam-sekolah.jpg",
      slug: "perekat",
      detail: [
        {
          name: "Hitam",
          price: "3.000",
          image: "/seragam-sekolah.jpg",
        },
        {
          name: "Putih",
          price: "3.000",
          image: "/seragam-sekolah.jpg",
        },
      ],
    },
    {
      nama: "Kapur Jahit",
      kategori: "Aksesoris",
      harga: "3.000",
      image: "/products/kapur-jahit/index.jpg",
      slug: "kapur-jahit",
      detail: [
        {
          name: "Pensil",
          price: "3.000",
          image: "/products/kapur-jahit/pensil.jpg",
        },
        {
          name: "Malaysia",
          price: "3.000",
          image: "/products/kapur-jahit/malaysia.jpg",
        },
      ],
    },
    {
      nama: "Benang Obras",
      kategori: "Aksesoris",
      harga: "10.000",
      image: "/seragam-sekolah.jpg",
      slug: "benang-obras",
      detail: [
        {
          name: "Benang Obras Angsa Dunia",
          price: "10.000",
          image: "/seragam-sekolah.jpg",
        },
      ],
    },
    {
      nama: "Minyak Mesin",
      kategori: "Aksesoris",
      harga: "8.500",
      image: "/products/minyak-mesin/index.jpg",
      slug: "minyak-mesin",
      detail: [
        {
          name: "Minyak Mesing Singer",
          price: "8.500",
          image: "/products/minyak-mesin/index.jpg",
        },
      ],
    },
    {
      nama: "Obat Plisket",
      kategori: "Aksesoris",
      harga: "7.000",
      image: "/seragam-sekolah.jpg",
      slug: "obat-plisket",
      detail: [
        {
          name: "Obat Prisket",
          price: "7.000",
          image: "/seragam-sekolah.jpg",
        },
      ],
    },
    {
      nama: "Pendedel",
      kategori: "Aksesoris",
      harga: "3.000",
      image: "/products/pendedel/index.jpg",
      slug: "pendedel",
      detail: [
        {
          name: "Pendedel",
          price: "3.000",
          image: "/products/pendedel/index.jpg",
        },
      ],
    },
    {
      nama: "Gunting Cekris",
      kategori: "Aksesoris",
      harga: "5.000",
      image: "/products/gunting-cekris/index.jpg",
      slug: "gunting-cekris",
      detail: [
        {
          name: "Gunting Cekris",
          price: "5.000",
          image: "/products/gunting-cekris/index.jpg",
        },
      ],
    },
  ];

  return {
    productList,
  };
});
