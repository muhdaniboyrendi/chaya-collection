<script setup>
const layanan = [
  {
    icon: "bi-scissors",
    title: "Jahit Custom",
    desc: "Membuat pakaian sesuai selera dan ukuran Anda. Dari baju casual, formal, hingga busana pesta.",
    accent: true, // Akan menggunakan warna Lavender
  },
  {
    icon: "bi-tools",
    title: "Permak & Reparasi",
    desc: "Kecilkan, besarkan, perbaiki, atau ubah model pakaian lama Anda menjadi lebih pas dan modern.",
    accent: false,
  },
  {
    icon: "bi-people-fill",
    title: "Jahit Seragam",
    desc: "Melayani pesanan seragam kantor, sekolah, organisasi, hingga seragam olahraga dengan kuantitas berapapun.",
    accent: false,
  },
  {
    icon: "bi-bag-heart-fill",
    title: "Busana Muslim",
    desc: "Spesialis jahit gamis, kebaya, abaya, dan berbagai busana muslim modern dengan kualitas terbaik.",
    accent: true,
  },
  {
    icon: "bi-shop",
    title: "Toko Alat Jahit",
    desc: "Tersedia benang, jarum, resleting, kancing, meteran, dan berbagai aksesoris jahit.",
    accent: false,
  },
  {
    icon: "bi-patch-question-fill",
    title: "Konsultasi Desain",
    desc: "Bingung pilih model? Tim kami siap membantu Anda memilih desain dan bahan yang tepat.",
    accent: true,
  },
];
</script>

<template>
  <section
    id="layanan"
    class="bg-[#F0F0F0] py-20 lg:py-28 relative overflow-hidden"
  >
    <!-- Decorative grid - Garis gelap tipis di atas background terang -->
    <div
      class="nb-grid-bg-dark absolute inset-0 opacity-[0.04] pointer-events-none"
    ></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <!-- Section Header -->
      <div
        class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8 mb-20"
      >
        <div class="max-w-2xl">
          <span
            v-motion
            :initial="{ opacity: 0, x: -30 }"
            :visible-once="{ opacity: 1, x: 0 }"
            :duration="600"
            class="inline-block bg-[#FFD93D] rounded-xl border-[3px] border-[#1A1A1A] px-5 py-2 font-black text-xs text-[#1A1A1A] uppercase tracking-[0.2em] mb-6 shadow-[4px_4px_0_0_#1A1A1A]"
          >
            Our Services
          </span>
          <h2
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visible-once="{ opacity: 1, y: 0 }"
            :duration="700"
            class="font-black text-5xl sm:text-6xl text-[#1A1A1A] leading-[0.9] tracking-tighter"
          >
            Layanan Kreatif<br />
            <span class="text-[#A855F7]">Atelier Kami.</span>
          </h2>
        </div>
        <p
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0 }"
          :duration="700"
          class="text-[#4B5563] text-lg leading-relaxed max-w-sm font-bold border-l-[6px] border-[#B1AFFF] pl-5"
        >
          Dari sketsa hingga menjadi busana siap pakai, kami memastikan setiap
          detail dikerjakan dengan presisi tinggi.
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(item, i) in layanan"
          :key="i"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible-once="{ opacity: 1, y: 0 }"
          :duration="600"
          :delay="i * 80"
          :class="[
            'relative p-10 rounded-[2rem] border-[3px] border-[#1A1A1A] cursor-default group transition-all duration-200',
            item.accent
              ? 'bg-[#B1AFFF] shadow-[8px_8px_0_0_#1A1A1A] hover:shadow-none hover:translate-x-[8px] hover:translate-y-[8px]'
              : 'bg-white shadow-[8px_8px_0_0_#B4E4FF] hover:shadow-none hover:translate-x-[8px] hover:translate-y-[8px] hover:border-[#1A1A1A]',
          ]"
        >
          <!-- Number Overlay -->
          <div
            class="absolute top-6 right-8 font-black text-7xl leading-none opacity-5 text-[#1A1A1A]"
          >
            {{ String(i + 1).padStart(2, "0") }}
          </div>

          <!-- Icon Box -->
          <div
            :class="[
              'w-16 h-16 rounded-2xl border-[3px] border-[#1A1A1A] flex items-center justify-center mb-8 shadow-[4px_4px_0_0_#1A1A1A] group-hover:shadow-none transition-all',
              item.accent ? 'bg-[#FFD93D]' : 'bg-[#B4E4FF]',
            ]"
          >
            <i :class="['bi text-2xl text-[#1A1A1A]', item.icon]"></i>
          </div>

          <h3
            class="font-black text-2xl mb-4 uppercase tracking-tight text-[#1A1A1A]"
          >
            {{ item.title }}
          </h3>
          <p class="text-sm leading-relaxed font-bold text-[#1A1A1A]/70">
            {{ item.desc }}
          </p>

          <!-- Decorative Thread Line (Modern Touch) -->
          <div class="mt-6 pt-6 border-t-2 border-dashed border-[#1A1A1A]/20">
            <span
              class="text-[10px] font-black uppercase tracking-widest text-[#1A1A1A]/40"
              >Premium Tailoring</span
            >
          </div>
        </div>
      </div>

      <!-- Bottom CTA -->
      <div class="mt-20 text-center">
        <div
          v-motion
          :initial="{ opacity: 0, scale: 0.9 }"
          :visible-once="{ opacity: 1, scale: 1 }"
          :duration="600"
        >
          <a
            href="https://wa.me/62895629233434"
            target="_blank"
            class="inline-flex items-center gap-4 bg-[#FFD93D] rounded-2xl border-[4px] border-[#1A1A1A] px-10 py-5 font-black text-lg text-[#1A1A1A] uppercase tracking-widest shadow-[10px_10px_0_0_#B1AFFF] hover:shadow-none hover:translate-x-[10px] hover:translate-y-[10px] transition-all duration-200"
          >
            <i class="bi bi-chat-dots-fill text-xl"></i>
            Konsultasi Jahitan Sekarang
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
  background-size: 60px 60px;
}
</style>
