<script setup>
const kategoriProduk = ["Semua", "Benang", "Gunting", "Jarum", "Aksesori"];

const produkAlatJahit = [
  {
    nama: "Benang Jahit",
    kategori: "Benang",
    harga: "Rp 3.500",
    image: "bi-pellet",
    accent: "#FFD93D", // Yellow
  },
  {
    nama: "Mutiara Sintetis",
    kategori: "Payet",
    harga: "Rp 5.000",
    image: "bi-scissors",
    accent: "#B4E4FF", // Mint
  },
  {
    nama: "Diamond Taiwan",
    kategori: "Payet",
    harga: "Rp 7.000",
    image: "bi-patch-check",
    accent: "#B1AFFF", // Lavender
  },
  {
    nama: "Manik Mote Bulat",
    kategori: "Payet",
    harga: "Rp 6.000",
    image: "bi-ruler",
    accent: "#FFD93D", // Yellow
  },
  {
    nama: "Mutiara Kelopak",
    kategori: "Payet",
    harga: "Rp 5.000",
    image: "bi-ruler",
    accent: "#FFD93D", // Yellow
  },
  {
    nama: "Resleting Jepang",
    kategori: "Resleting",
    harga: "Rp 2.500",
    image: "bi-ruler",
    accent: "#FFD93D", // Yellow
  },
  {
    nama: "Kancing Jepret",
    kategori: "Resleting",
    harga: "Rp 12.000",
    image: "bi-ruler",
    accent: "#FFD93D", // Yellow
  },
  {
    nama: "Elastik",
    kategori: "Resleting",
    harga: "Rp 2.500",
    image: "bi-ruler",
    accent: "#FFD93D", // Yellow
  },
  {
    nama: "Payet Bambu Panjang",
    kategori: "Payet",
    harga: "Rp 5.000",
    image: "bi-ruler",
    accent: "#FFD93D", // Yellow
  },
  {
    nama: "Jarum Mesin",
    kategori: "Jarum",
    harga: "Rp 3.000",
    image: "bi-ruler",
    accent: "#FFD93D", // Yellow
  },
  {
    nama: "Kancing Baju",
    kategori: "Kancing",
    harga: "Rp 5.000",
    image: "bi-ruler",
    accent: "#FFD93D", // Yellow
  },
  {
    nama: "Meteran Jahit",
    kategori: "Aksesoris",
    harga: "Rp 2.500",
    image: "bi-ruler",
    accent: "#FFD93D", // Yellow
  },
  {
    nama: "Perekat",
    kategori: "Aksesoris",
    harga: "Rp 3.000",
    image: "bi-ruler",
    accent: "#FFD93D", // Yellow
  },
  {
    nama: "Kapur Jahit",
    kategori: "Aksesoris",
    harga: "Rp 3.000",
    image: "bi-ruler",
    accent: "#FFD93D", // Yellow
  },
  {
    nama: "Benang Obras",
    kategori: "Aksesoris",
    harga: "Rp 10.000",
    image: "bi-ruler",
    accent: "#FFD93D", // Yellow
  },
  {
    nama: "Minyak Mesin",
    kategori: "Aksesoris",
    harga: "Rp 8.500",
    image: "bi-ruler",
    accent: "#FFD93D", // Yellow
  },
  {
    nama: "Obat Plisket",
    kategori: "Aksesoris",
    harga: "Rp 6.500",
    image: "bi-ruler",
    accent: "#FFD93D", // Yellow
  },
  {
    nama: "Pendedel",
    kategori: "Aksesoris",
    harga: "Rp 3.000",
    image: "bi-ruler",
    accent: "#FFD93D", // Yellow
  },
  {
    nama: "Gunting Cekris",
    kategori: "Aksesoris",
    harga: "Rp 5.000",
    image: "bi-ruler",
    accent: "#FFD93D", // Yellow
  },
];
</script>

<template>
  <section
    id="toko"
    class="bg-[#F0F0F0] py-20 lg:py-28 relative overflow-hidden"
  >
    <!-- Decorative dot grid agar menyatu dengan section 'Tentang' -->
    <div
      class="nb-dot-grid-dark absolute inset-0 opacity-[0.05] pointer-events-none"
    ></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <!-- Section Header -->
      <div class="mb-16">
        <div class="max-w-2xl space-y-6">
          <span
            v-motion
            :initial="{ opacity: 0, x: -30 }"
            :visible-once="{ opacity: 1, x: 0 }"
            :duration="600"
            class="inline-block bg-[#FFD93D] rounded-xl border-[3px] border-[#1A1A1A] px-5 py-2 font-black text-xs text-[#1A1A1A] uppercase tracking-[0.2em] shadow-[5px_5px_0_0_#1A1A1A]"
          >
            Supply & Tools
          </span>
          <h2
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visible-once="{ opacity: 1, y: 0 }"
            :duration="700"
            class="font-black text-5xl sm:text-6xl text-[#1A1A1A] leading-[0.9] tracking-tighter uppercase italic"
          >
            Lengkapi Kebutuhan<br />
            <span class="relative inline-block mt-2">
              <span class="relative z-10 text-[#A855F7]">Menjahitmu</span>
            </span>
          </h2>
        </div>
      </div>

      <!-- Products Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <div
          v-for="(produk, index) in produkAlatJahit"
          :key="index"
          v-motion
          :initial="{ opacity: 0, y: 40 }"
          :visible-once="{ opacity: 1, y: 0 }"
          :delay="index * 20"
          :duration="700"
        >
          <div
            class="group bg-white border-4 border-[#1A1A1A] rounded-[2.5rem] p-6 shadow-[8px_8px_0_0_#1A1A1A] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all duration-300 relative"
          >
            <!-- Product Display -->
            <div
              class="w-full aspect-square rounded-2xl border-[3px] border-[#1A1A1A] flex items-center justify-center mb-6 relative overflow-hidden shadow-[4px_4px_0_0_#1A1A1A]"
              :style="{ backgroundColor: produk.accent }"
            >
              <i
                :class="[
                  'bi text-7xl text-[#1A1A1A]/80 transition-transform group-hover:scale-110 duration-300',
                  produk.image,
                ]"
              ></i>
              <div
                class="absolute top-3 right-3 bg-[#1A1A1A] text-white text-[10px] font-black px-4 py-1 rounded-full uppercase italic tracking-widest"
              >
                Ready
              </div>
            </div>

            <!-- Product Info -->
            <div class="flex items-center gap-2 mb-2">
              <span class="w-2 h-2 rounded-full bg-[#A855F7]"></span>
              <span
                class="text-[10px] font-black uppercase tracking-widest text-[#A855F7] italic"
              >
                {{ produk.kategori }}
              </span>
            </div>
            <h3
              class="text-xl font-black text-[#1A1A1A] leading-tight uppercase tracking-tighter mb-4"
            >
              {{ produk.nama }}
            </h3>

            <span class="text-sm text-black/60 italic tracking-tight"
              >Mulai dari :</span
            >
            <p
              class="text-3xl font-black text-[#1A1A1A] italic tracking-tighter"
            >
              {{ produk.harga }}
            </p>
          </div>
        </div>
      </div>

      <NuxtLink
        to="/products"
        class="block w-fit text-center gap-2 bg-[#B4E4FF] rounded-2xl border-[3px] border-[#1A1A1A] text-[#1A1A1A] px-7 py-4 font-black text-lg uppercase tracking-wider shadow-[8px_8px_0_0_#1A1A1A] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all duration-200"
      >
        Lihat Semua Produk
        <i class="bi bi-arrow-right ml-2"></i>
      </NuxtLink>
    </div>
  </section>
</template>

<style scoped>
.nb-dot-grid-dark {
  background-image: radial-gradient(circle, #1a1a1a 1.5px, transparent 1.5px);
  background-size: 32px 32px;
}
</style>
