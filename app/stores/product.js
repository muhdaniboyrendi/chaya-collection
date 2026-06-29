export const useProductStore = defineStore("product", () => {
  const productList = [
    {
      nama: "Benang Jahit",
      kategori: "Benang",
      harga: "3.500",
      image: "/seragam-sekolah.jpg",
      slug: "benang-jahit",
      detail: [
        {
          name: "Hitam",
          price: "3.000",
          image: "/seragam-sekolah.jpg",
        },
        {
          name: "Warna",
          price: "3.500",
          image: "/seragam-sekolah.jpg",
        },
      ],
    },
    {
      nama: "Mutiara Sintetis",
      kategori: "Payet",
      harga: "5.000",
      image: "/seragam-sekolah.jpg",
    },
    {
      nama: "Diamond Taiwan",
      kategori: "Payet",
      harga: "7.000",
      image: "/seragam-sekolah.jpg",
    },
    {
      nama: "Manik Mote Bulat",
      kategori: "Payet",
      harga: "6.000",
      image: "/seragam-sekolah.jpg",
    },
    {
      nama: "Mutiara Kelopak",
      kategori: "Payet",
      harga: "5.000",
      image: "/seragam-sekolah.jpg",
    },
    {
      nama: "Resleting Jepang",
      kategori: "Resleting",
      harga: "2.500",
      image: "/seragam-sekolah.jpg",
    },
    {
      nama: "Kancing Jepret",
      kategori: "Resleting",
      harga: "12.000",
      image: "/seragam-sekolah.jpg",
    },
    {
      nama: "Elastik",
      kategori: "Resleting",
      harga: "2.500",
      image: "/seragam-sekolah.jpg",
    },
    {
      nama: "Payet Bambu Panjang",
      kategori: "Payet",
      harga: "5.000",
      image: "/seragam-sekolah.jpg",
    },
    {
      nama: "Jarum Mesin",
      kategori: "Jarum",
      harga: "3.000",
      image: "/seragam-sekolah.jpg",
    },
    {
      nama: "Kancing Baju",
      kategori: "Kancing",
      harga: "5.000",
      image: "/seragam-sekolah.jpg",
    },
    {
      nama: "Meteran Jahit",
      kategori: "Aksesoris",
      harga: "2.500",
      image: "/seragam-sekolah.jpg",
    },
    {
      nama: "Perekat",
      kategori: "Aksesoris",
      harga: "3.000",
      image: "/seragam-sekolah.jpg",
    },
    {
      nama: "Kapur Jahit",
      kategori: "Aksesoris",
      harga: "3.000",
      image: "/seragam-sekolah.jpg",
    },
    {
      nama: "Benang Obras",
      kategori: "Aksesoris",
      harga: "10.000",
      image: "/seragam-sekolah.jpg",
    },
    {
      nama: "Minyak Mesin",
      kategori: "Aksesoris",
      harga: "8.500",
      image: "/seragam-sekolah.jpg",
    },
    {
      nama: "Obat Plisket",
      kategori: "Aksesoris",
      harga: "6.500",
      image: "/seragam-sekolah.jpg",
    },
    {
      nama: "Pendedel",
      kategori: "Aksesoris",
      harga: "3.000",
      image: "/seragam-sekolah.jpg",
    },
    {
      nama: "Gunting Cekris",
      kategori: "Aksesoris",
      harga: "5.000",
      image: "/seragam-sekolah.jpg",
    },
  ];

  return {
    productList,
  };
});
