<script setup>
const keunggulan = [
  {
    icon: "bi-award-fill",
    title: "Berpengalaman 25+ Tahun",
    desc: "Dipercaya ratusan pelanggan sejak 2001 dengan standar kualitas jahitan yang selalu terjaga.",
  },
  {
    icon: "bi-hand-thumbs-up-fill",
    title: "Hasil Rapi & Presisi",
    desc: "Setiap jahitan dikerjakan langsung dengan teliti dan penuh perhatian untuk hasil yang memuaskan.",
  },
  {
    icon: "bi-clock-fill",
    title: "Tepat Waktu",
    desc: "Kami menghargai waktu Anda dan berkomitmen untuk menyelesaikan pesanan sesuai jadwal.",
  },
  {
    icon: "bi-currency-exchange",
    title: "Harga Bersahabat",
    desc: "Kualitas tangan terampil dengan harga yang terjangkau. Tersedia estimasi harga di awal.",
  },
];
</script>

<template>
  <section
    id="tentang"
    class="bg-[#F0F0F0] py-20 lg:py-28 relative overflow-hidden"
  >
    <!-- Decorative dot grid - Menggunakan warna gelap tipis -->
    <div
      class="nb-dot-grid-dark absolute inset-0 opacity-[0.05] pointer-events-none"
    ></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <!-- Section Header -->
      <div class="mb-14">
        <span
          v-motion
          :initial="{ opacity: 0, x: -30 }"
          :visible-once="{ opacity: 1, x: 0 }"
          :duration="600"
          class="inline-block bg-[#A855F7] rounded-xl border-[3px] border-[#1A1A1A] px-5 py-2 font-black text-xs text-white uppercase tracking-[0.2em] shadow-[5px_5px_0_0_#1A1A1A]"
        >
          Our Story
        </span>
      </div>

      <div class="grid lg:grid-cols-2 gap-16 items-start">
        <!-- Left - Story -->
        <div class="space-y-10">
          <h2
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visible-once="{ opacity: 1, y: 0 }"
            :duration="700"
            class="font-black text-5xl sm:text-6xl lg:text-7xl text-[#1A1A1A] leading-[0.85] tracking-tighter"
          >
            Satu Tangan,<br />
            <span class="relative inline-block">
              <span class="relative z-10 italic">Ribuan</span>
              <!-- Highlight Lavender -->
              <span
                class="absolute bottom-2 left-0 right-0 h-6 bg-[#B1AFFF] z-0 border-2 border-[#1A1A1A] rounded-lg"
              ></span>
            </span>
            <br />Karya Nyata
          </h2>

          <div class="space-y-6">
            <p
              v-motion
              :initial="{ opacity: 0, x: -30 }"
              :visible-once="{ opacity: 1, x: 0 }"
              :duration="700"
              class="text-[#4B5563] text-lg leading-relaxed font-bold border-l-[6px] border-[#B4E4FF] pl-6"
            >
              Chaya Collection berdiri sejak 2001 — dijalankan oleh seorang
              penjahit berpengalaman yang mengerjakan setiap pesanan secara
              langsung, dari awal hingga selesai. Setiap jahitan adalah hasil
              dari keahlian dan perhatian penuh.
            </p>
            <p
              v-motion
              :initial="{ opacity: 0, x: -30 }"
              :visible-once="{ opacity: 1, x: 0 }"
              :duration="700"
              class="text-[#4B5563] leading-relaxed font-medium pl-8"
            >
              Dengan pengalaman lebih dari 25 tahun, kami memahami bahwa pakaian
              yang baik bukan hanya soal tampilan — tapi soal kenyamanan,
              ketepatan ukuran, dan detail yang tidak terlihat namun sangat
              terasa.
            </p>
          </div>

          <!-- Highlight Cards -->
          <div class="grid grid-cols-3 gap-4 pt-4">
            <div
              v-for="(item, index) in [
                { icon: 'bi-scissors', label: 'Handmade' },
                { icon: 'bi-rulers', label: 'Presisi' },
                { icon: 'bi-patch-check-fill', label: 'Premium' },
              ]"
              :key="item.label"
              v-motion
              :initial="{ opacity: 0, y: 30 }"
              :visible-once="{ opacity: 1, y: 0 }"
              :delay="index * 150"
              :duration="600"
            >
              <div
                class="flex flex-col items-center text-center gap-3 bg-white rounded-2xl border-[3px] border-[#1A1A1A] p-5 shadow-[5px_5px_0_0_#B1AFFF] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-150"
              >
                <i :class="['bi text-2xl text-[#A855F7]', item.icon]"></i>
                <span
                  class="text-[#1A1A1A] text-[10px] font-black uppercase tracking-[0.15em] leading-tight"
                  >{{ item.label }}</span
                >
              </div>
            </div>
          </div>
        </div>

        <!-- Right - Keunggulan grid -->
        <div class="grid sm:grid-cols-2 gap-6">
          <div
            v-for="(item, i) in keunggulan"
            :key="i"
            v-motion
            :initial="{ opacity: 0, y: 40 }"
            :visible-once="{ opacity: 1, y: 0 }"
            :delay="i * 100"
            :duration="600"
          >
            <div
              :class="[
                'h-full p-8 rounded-4xl border-4 border-[#1A1A1A] transition-all duration-200',
                i % 2 === 0
                  ? 'bg-[#FFD93D] shadow-[8px_8px_0_0_#1A1A1A] hover:shadow-none hover:translate-x-2 hover:translate-y-2'
                  : 'bg-white shadow-[8px_8px_0_0_#B4E4FF] hover:shadow-none hover:translate-x-2 hover:translate-y-2',
              ]"
            >
              <div
                :class="[
                  'w-14 h-14 border-[3px] border-[#1A1A1A] rounded-2xl flex items-center justify-center mb-6 shadow-[4px_4px_0_0_#1A1A1A]',
                  i % 2 === 0 ? 'bg-white' : 'bg-[#B4E4FF]',
                ]"
              >
                <i :class="['bi text-2xl text-[#1A1A1A]', item.icon]"></i>
              </div>
              <h3
                class="font-black text-xl mb-3 leading-tight uppercase tracking-tight text-[#1A1A1A]"
              >
                {{ item.title }}
              </h3>
              <p class="text-sm leading-relaxed font-bold text-[#1A1A1A]/60">
                {{ item.desc }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.nb-dot-grid-dark {
  background-image: radial-gradient(circle, #1a1a1a 1.5px, transparent 1.5px);
  background-size: 32px 32px;
}
</style>
