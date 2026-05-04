<script setup>
const testimoni = [
  {
    name: "Siti Rahayu",
    role: "Pelanggan Setia",
    location: "Matesih",
    rating: 5,
    text: "Sudah langganan lebih dari 5 tahun di Chaya Collection. Hasilnya selalu rapi dan sesuai dengan keinginan. Penjahitnya juga ramah dan sabar menjelaskan pilihan bahan.",
    initials: "SR",
    color: "#C9954C",
  },
  {
    name: "Budi Santoso",
    role: "Pelanggan",
    location: "Karanganyar",
    rating: 5,
    text: "Pesan seragam kantor 20 pcs, hasilnya memuaskan dan tepat waktu! Harga juga kompetitif dibanding tempat lain. Pasti akan pesan lagi.",
    initials: "BS",
    color: "#8C7B6B",
  },
  {
    name: "Dewi Lestari",
    role: "Pelanggan",
    location: "Matesih",
    rating: 5,
    text: "Baju pengantin saya dibuat di sini. Hasilnya luar biasa cantik! Penjahitnya memahami selera saya dengan baik. Sangat recommended!",
    initials: "DL",
    color: "#D4A853",
  },
  {
    name: "Ahmad Fauzi",
    role: "Pelanggan",
    location: "Tasikmadu",
    rating: 4,
    text: "Beli keperluan jahit di toko ini lengkap banget. Dari benang sampai kain tersedia. Harganya juga masuk akal dan penjualnya helpful.",
    initials: "AF",
    color: "#6B8C7B",
  },
  {
    name: "Nurul Hidayah",
    role: "Pelanggan Setia",
    location: "Jaten",
    rating: 5,
    text: "Jahit gamis koleksi lebaran selalu di Chaya. Kualitas jahitannya memang beda, lebih rapi dan nyaman dipakai. Terima kasih Chaya Collection!",
    initials: "NH",
    color: "#9C6B4C",
  },
];
</script>

<template>
  <section class="bg-[#FBF7F0] py-20 lg:py-28">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="flex items-center gap-6 mb-14">
        <span
          v-motion
          :initial="{ opacity: 0, x: -50 }"
          :visible-once="{ opacity: 1, x: 0 }"
          :duration="1000"
          class="section-label"
          >Testimoni</span
        >
        <p
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible-once="{ opacity: 1, y: 0 }"
          :duration="1000"
          class="text-[#8C7B6B] text-base max-w-xs leading-relaxed"
        >
          Apa kata pelanggan kami yang telah mempercayakan kebutuhan jahit
          mereka.
        </p>
      </div>

      <!-- Scrollable testimonials -->
      <div class="testi-track pb-4">
        <div
          v-for="(item, i) in testimoni"
          :key="i"
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :visible-once="{ opacity: 1, y: 0 }"
          :duration="1000"
          class="testi-card bg-white border border-[#E8D8C0] rounded-3xl p-7 card-hover"
        >
          <!-- Rating -->
          <div class="flex gap-1 mb-5">
            <i
              v-for="s in 5"
              :key="s"
              :class="[
                'bi text-base',
                s <= item.rating
                  ? 'bi-star-fill text-[#C9954C]'
                  : 'bi-star text-[#E8D8C0]',
              ]"
            ></i>
          </div>

          <!-- Quote -->
          <p class="text-[#2D2416] text-sm leading-relaxed mb-6">
            "{{ item.text }}"
          </p>

          <!-- Author -->
          <div class="flex items-center gap-3 pt-5 border-t border-[#F0E8D8]">
            <div
              class="w-10 h-10 rounded-full flex items-center justify-center text-[#FBF7F0] text-sm font-bold shrink-0"
              :style="`background-color: ${item.color}`"
            >
              {{ item.initials }}
            </div>
            <div>
              <div class="text-sm font-semibold text-[#1A1208]">
                {{ item.name }}
              </div>
              <div class="text-xs text-[#8C7B6B]">
                {{ item.role }} · {{ item.location }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll hint on mobile -->
      <p class="mt-4 text-center text-xs text-[#8C7B6B] sm:hidden">
        <i class="bi bi-arrow-left-right mr-1"></i>Geser untuk melihat lebih
      </p>

      <!-- Overall rating -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :visible-once="{ opacity: 1, y: 0 }"
        :duration="1000"
        class="mt-12 bg-[#1A1208] rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
      >
        <div>
          <div class="font-display text-5xl font-800 text-[#C9954C]">4.9</div>
          <div class="flex gap-1 mt-2">
            <i
              v-for="s in 5"
              :key="s"
              class="bi bi-star-fill text-[#C9954C] text-sm"
            ></i>
          </div>
          <div class="text-[#FBF7F0]/60 text-sm mt-1">
            Rata-rata rating dari 100+ ulasan
          </div>
        </div>
        <div class="text-center sm:text-right">
          <p class="text-[#FBF7F0]/80 text-sm mb-4 max-w-xs">
            Bergabunglah dengan ratusan pelanggan puas Chaya Collection!
          </p>
          <a
            :href="contactInfo.whatsapp"
            target="_blank"
            class="inline-flex items-center gap-2 bg-[#C9954C] text-[#1A1208] px-6 py-3 rounded-xl font-bold text-sm hover:bg-[#E8B96A] transition-colors"
          >
            <i class="bi bi-whatsapp"></i>
            Pesan Sekarang
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
