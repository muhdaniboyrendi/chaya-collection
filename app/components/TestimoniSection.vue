<script setup>
const testimoni = [
  {
    name: "Siti Rahayu",
    role: "Pelanggan Setia",
    location: "Matesih",
    rating: 5,
    text: "Sudah langganan lebih dari 5 tahun di Chaya Atelier. Hasilnya selalu rapi dan sesuai dengan keinginan. Penjahitnya juga ramah dan sabar menjelaskan pilihan bahan.",
    initials: "SR",
    color: "bg-[#B1AFFF]", // Lavender
  },
  {
    name: "Budi Santoso",
    role: "Pelanggan",
    location: "Karanganyar",
    rating: 5,
    text: "Pesan seragam kantor 20 pcs, hasilnya memuaskan dan tepat waktu! Harga juga kompetitif dibanding tempat lain. Pasti akan pesan lagi.",
    initials: "BS",
    color: "bg-[#B4E4FF]", // Mint
  },
  {
    name: "Dewi Lestari",
    role: "Pelanggan",
    location: "Matesih",
    rating: 5,
    text: "Baju pengantin saya dibuat di sini. Hasilnya luar biasa cantik! Penjahitnya memahami selera saya dengan baik. Sangat recommended!",
    initials: "DL",
    color: "bg-[#FFD93D]", // Yellow
  },
  {
    name: "Ahmad Fauzi",
    role: "Pelanggan",
    location: "Tasikmadu",
    rating: 4,
    text: "Beli keperluan jahit di toko ini lengkap banget. Dari benang sampai kain tersedia. Harganya juga masuk akal dan penjualnya helpful.",
    initials: "AF",
    color: "bg-[#B4E4FF]", // Mint
  },
  {
    name: "Nurul Hidayah",
    role: "Pelanggan Setia",
    location: "Jaten",
    rating: 5,
    text: "Jahit gamis koleksi lebaran selalu di Chaya. Kualitas jahitannya memang beda, lebih rapi dan nyaman dipakai. Terima kasih Chaya Atelier!",
    initials: "NH",
    color: "bg-[#B1AFFF]", // Lavender
  },
];
</script>

<template>
  <section
    id="testimoni"
    class="bg-[#F0F0F0] py-20 lg:py-28 relative overflow-hidden"
  >
    <!-- Decorative Pattern -->
    <div
      class="nb-grid-bg-dark absolute inset-0 opacity-[0.03] pointer-events-none"
    ></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <!-- Section Header -->
      <div
        class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-16"
      >
        <div class="max-w-2xl">
          <span
            v-motion
            :initial="{ opacity: 0, x: -30 }"
            :visible-once="{ opacity: 1, x: 0 }"
            :duration="600"
            class="inline-block bg-[#FFD93D] rounded-xl border-[3px] border-[#1A1A1A] px-5 py-2 font-black text-xs text-[#1A1A1A] uppercase tracking-[0.2em] mb-6 shadow-[5px_5px_0_0_#1A1A1A]"
          >
            Testimonials
          </span>
          <h2
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visible-once="{ opacity: 1, y: 0 }"
            :duration="700"
            class="font-black text-5xl sm:text-7xl text-[#1A1A1A] leading-[0.85] tracking-tighter"
          >
            Cerita Dari<br />
            <span class="text-[#A855F7]">Klien Kami.</span>
          </h2>
        </div>
        <p
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0 }"
          :duration="700"
          class="text-[#4B5563] text-lg max-w-sm leading-relaxed font-bold border-l-[6px] border-[#B1AFFF] pl-6"
        >
          Kepercayaan pelanggan adalah prioritas kami dalam setiap tusukan
          jarum.
        </p>
      </div>

      <!-- Testimonials Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(item, i) in testimoni"
          :key="i"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible-once="{ opacity: 1, y: 0 }"
          :duration="600"
          :delay="i * 100"
        >
          <div
            class="h-full bg-white rounded-[2rem] border-[3px] border-[#1A1A1A] p-8 shadow-[8px_8px_0_0_#1A1A1A] hover:shadow-none hover:translate-x-[8px] hover:translate-y-[8px] transition-all duration-200"
          >
            <!-- Rating & Quote Icon -->
            <div class="flex justify-between items-start mb-6">
              <div class="flex gap-1">
                <i
                  v-for="s in 5"
                  :key="s"
                  :class="[
                    'bi text-lg',
                    s <= item.rating
                      ? 'bi-star-fill text-[#FFD93D]'
                      : 'bi-star text-[#E5E7EB]',
                  ]"
                ></i>
              </div>
              <div
                class="w-10 h-10 bg-[#B1AFFF] border-[2px] border-[#1A1A1A] rounded-full flex items-center justify-center shadow-[3px_3px_0_0_#1A1A1A]"
              >
                <i class="bi bi-quote text-[#1A1A1A] text-xl"></i>
              </div>
            </div>

            <!-- Text -->
            <p
              class="text-[#1A1A1A] text-base leading-relaxed mb-8 font-bold italic"
            >
              "{{ item.text }}"
            </p>

            <!-- Author Info -->
            <div
              class="flex items-center gap-4 pt-6 border-t-2 border-dashed border-[#1A1A1A]/10"
            >
              <div
                :class="[
                  'w-14 h-14 rounded-2xl border-[3px] border-[#1A1A1A] flex items-center justify-center text-[#1A1A1A] text-xl font-black shrink-0 shadow-[4px_4px_0_0_#1A1A1A]',
                  item.color,
                ]"
              >
                {{ item.initials }}
              </div>
              <div>
                <div
                  class="text-sm font-black text-[#1A1A1A] uppercase tracking-widest"
                >
                  {{ item.name }}
                </div>
                <div
                  class="text-[10px] font-black text-[#6B7280] uppercase tracking-wider"
                >
                  {{ item.role }} <span class="text-[#A855F7] mx-1">•</span>
                  {{ item.location }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats Summary Card -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :visible-once="{ opacity: 1, y: 0 }"
        :duration="700"
        class="mt-16 bg-[#B4E4FF] rounded-[2.5rem] border-[4px] border-[#1A1A1A] p-10 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-[15px_15px_0_0_#1A1A1A]"
      >
        <div class="flex flex-col sm:flex-row items-center gap-8">
          <div class="relative">
            <div
              class="font-black text-8xl text-[#1A1A1A] leading-none tracking-tighter"
            >
              4.9
            </div>
            <div
              class="absolute -top-4 -right-4 bg-[#FFD93D] border-[2px] border-[#1A1A1A] px-3 py-1 rounded-lg rotate-12 font-black text-xs"
            >
              EXCELLENT
            </div>
          </div>
          <div class="text-center sm:text-left">
            <div class="flex justify-center sm:justify-start gap-1 mb-3">
              <i
                v-for="s in 5"
                :key="s"
                class="bi bi-star-fill text-[#1A1A1A] text-2xl"
              ></i>
            </div>
            <div
              class="text-[#1A1A1A] text-sm font-black uppercase tracking-[0.2em]"
            >
              Rata-rata dari 100+ ulasan nyata
            </div>
          </div>
        </div>

        <div class="flex flex-col items-center lg:items-end gap-5">
          <p
            class="text-[#1A1A1A] text-lg font-bold text-center lg:text-right max-w-xs leading-tight italic"
          >
            "Kualitas jahitan premium untuk setiap momen spesial Anda."
          </p>
          <a
            href="https://wa.me/62895629233434"
            target="_blank"
            class="group inline-flex items-center gap-3 bg-[#1A1A1A] rounded-2xl px-10 py-5 font-black text-white uppercase tracking-widest hover:bg-[#A855F7] transition-all shadow-[8px_8px_0_0_#FFD93D] hover:shadow-none hover:translate-x-[8px] hover:translate-y-[8px]"
          >
            Pesan Sekarang
            <i
              class="bi bi-arrow-right-circle-fill text-xl group-hover:translate-x-2 transition-transform"
            ></i>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.nb-grid-bg-dark {
  background-image:
    linear-gradient(#1a1a1a 1px, transparent 1px),
    linear-gradient(90deg, #1a1a1a 1px, transparent 1px);
  background-size: 50px 50px;
}
</style>
