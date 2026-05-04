<script setup>
const items = [
  {
    label: "Kebaya Modern",
    image: "/seragam-sekolah.jpg",
  },
  {
    label: "Seragam Kantor",
    image: "/seragam-sekolah.jpg",
  },
  {
    label: "Baju Pesta Custom",
    image: "/seragam-sekolah.jpg",
  },
  {
    label: "Gamis Elegan",
    image: "/seragam-sekolah.jpg",
  },
  {
    label: "Permak Celana",
    image: "/seragam-sekolah.jpg",
  },
  {
    label: "Seragam Sekolah",
    image: "/seragam-sekolah.jpg",
  },
];
</script>

<template>
  <section id="galeri" class="bg-[#FBF7F0] py-20 lg:py-28">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div
        class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-14"
      >
        <div class="flex items-center gap-6">
          <span
            v-motion
            :initial="{ opacity: 0, x: -50 }"
            :visible-once="{ opacity: 1, x: 0 }"
            :duration="1000"
            class="section-label"
            >Galeri</span
          >
          <p
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :visible-once="{ opacity: 1, y: 0 }"
            :duration="1000"
            class="text-[#8C7B6B] text-base max-w-xs leading-relaxed"
          >
            Sebagian hasil karya terbaik kami untuk pelanggan Chaya Collection.
          </p>
        </div>
        <!-- <a
          href="https://wa.me/6281234567890?text=Halo,+saya+ingin+melihat+katalog+lengkap+Chaya+Collection"
          target="_blank"
          class="shrink-0 inline-flex items-center gap-2 border-2 border-[#1A1208] text-[#1A1208] px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#1A1208] hover:text-[#FBF7F0] transition-all"
        >
          Lihat Katalog Lengkap
          <i class="bi bi-arrow-right"></i>
        </a> -->
      </div>

      <!-- Bento Grid -->
      <div
        class="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4"
        style="grid-template-rows: auto"
      >
        <div
          v-for="(item, i) in items"
          :key="i"
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :visible-once="{ opacity: 1, y: 0 }"
          :duration="1000"
          class="group relative overflow-hidden rounded-2xl cursor-pointer aspect-3/4 lg:aspect-4/3"
        >
          <!-- Background placeholder — ganti dengan <NuxtImg> -->
          <NuxtImg
            :src="item.image"
            width="600"
            loading="lazy"
            placeholder
            format="webp"
            :alt="item.label"
            class="w-full h-full object-cover"
          />

          <!-- Bottom label — slides up on hover -->
          <div
            class="absolute bottom-0 left-0 right-0 z-10 p-3 lg:p-5 group-hover:-translate-y-1 transition-transform duration-300"
          >
            <div
              class="bg-[#1A1208]/80 backdrop-blur-sm rounded-lg lg:rounded-xl px-4 py-2 border border-white/10"
            >
              <div class="flex items-center justify-between gap-3">
                <div>
                  <p
                    class="font-display font-600 text-[#FBF7F0] text-sm leading-snug"
                  >
                    {{ item.label }}
                  </p>
                </div>
                <div
                  class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <i class="bi bi-arrow-up-right text-white text-sm"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
