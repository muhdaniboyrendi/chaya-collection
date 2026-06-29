<script setup>
const items = [
  {
    label: "Kebaya Modern",
    image: "/seragam-sekolah.jpg",
    color: "bg-[#B1AFFF]",
  },
  {
    label: "Seragam Kantor",
    image: "/seragam-sekolah.jpg",
    color: "bg-[#B4E4FF]",
  },
  {
    label: "Baju Pesta Custom",
    image: "/seragam-sekolah.jpg",
    color: "bg-[#FFD93D]",
  },
  {
    label: "Gamis Elegan",
    image: "/seragam-sekolah.jpg",
    color: "bg-[#B1AFFF]",
  },
  {
    label: "Permak Celana",
    image: "/seragam-sekolah.jpg",
    color: "bg-[#FFD93D]",
  },
  {
    label: "Seragam Sekolah",
    image: "/seragam-sekolah.jpg",
    color: "bg-[#B4E4FF]",
  },
];
</script>

<template>
  <section id="galeri" class="bg-[#F0F0F0] py-20 lg:py-28 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            class="inline-block bg-[#A855F7] rounded-xl border-[3px] border-[#1A1A1A] px-5 py-2 font-black text-xs text-white uppercase tracking-[0.2em] mb-6 shadow-[5px_5px_0_0_#1A1A1A]"
          >
            Portfolio
          </span>
          <h2
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visible-once="{ opacity: 1, y: 0 }"
            :duration="700"
            class="font-black text-5xl sm:text-7xl text-[#1A1A1A] leading-[0.85] tracking-tighter"
          >
            Karya Terbaik
            <span class="italic text-[#4B5563]">Kami.</span>
          </h2>
        </div>
        <p
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0 }"
          :duration="700"
          class="text-[#4B5563] text-lg max-w-sm leading-relaxed font-bold border-l-[6px] border-[#FFD93D] pl-6"
        >
          Eksplorasi hasil jahitan Chaya Collection. Setiap helai benang
          menceritakan dedikasi kami pada kualitas.
        </p>
      </div>

      <!-- Bento-style Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(item, i) in items"
          :key="i"
          v-motion
          :initial="{ opacity: 0, scale: 0.9 }"
          :visible-once="{ opacity: 1, scale: 1 }"
          :duration="600"
          :delay="i * 100"
        >
          <div
            class="group relative overflow-hidden rounded-[2.5rem] border-4 border-[#1A1A1A] cursor-pointer shadow-[12px_12px_0_0_#1A1A1A] hover:shadow-none hover:translate-x-3 hover:translate-y-3 transition-all duration-300"
          >
            <!-- Image Wrapper with Color Overlay on Hover -->
            <div class="aspect-4/5 relative overflow-hidden">
              <NuxtImg
                :src="item.image"
                width="600"
                loading="lazy"
                placeholder
                format="webp"
                :alt="item.label"
                class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
              />

              <!-- Hover Overlay Gradient -->
              <div
                class="absolute inset-0 bg-linear-to-t from-[#1A1A1A] via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300"
              ></div>
            </div>

            <!-- Label Tag - Floating Style -->
            <div
              class="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
            >
              <div
                :class="[
                  'rounded-2xl border-[3px] border-[#1A1A1A] px-6 py-4 flex items-center justify-between gap-4 shadow-[5px_5px_0_0_#1A1A1A]',
                  item.color,
                ]"
              >
                <span
                  class="font-black text-[#1A1A1A] text-lg uppercase tracking-tight"
                >
                  {{ item.label }}
                </span>
                <div
                  class="w-10 h-10 bg-white border-2 border-[#1A1A1A] rounded-full flex items-center justify-center shrink-0"
                >
                  <i class="bi bi-arrow-up-right text-[#1A1A1A] font-bold"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Menambahkan transisi halus untuk grayscale */
.grayscale {
  filter: grayscale(100%) contrast(1.1);
}
.group:hover .grayscale {
  filter: grayscale(0%) contrast(1);
}
</style>
