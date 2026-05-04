<script setup>
const layanan = [
  {
    icon: "bi-scissors",
    title: "Jahit Custom",
    desc: "Membuat pakaian sesuai selera dan ukuran Anda. Dari baju casual, formal, hingga busana pesta.",
    dark: true,
  },
  {
    icon: "bi-tools",
    title: "Permak & Reparasi",
    desc: "Kecilkan, besarkan, perbaiki, atau ubah model pakaian lama Anda menjadi lebih pas dan modern.",
    dark: false,
  },
  {
    icon: "bi-people-fill",
    title: "Jahit Seragam",
    desc: "Melayani pesanan seragam kantor, sekolah, organisasi, hingga seragam olahraga dengan kuantitas berapapun.",
    dark: false,
  },
  {
    icon: "bi-bag-heart-fill",
    title: "Busana Muslim",
    desc: "Spesialis jahit gamis, kebaya, abaya, dan berbagai busana muslim modern dengan kualitas terbaik.",
    dark: true,
  },
  {
    icon: "bi-shop",
    title: "Toko Alat Jahit",
    desc: "Tersedia benang, jarum, resleting, kancing, meteran, dan berbagai aksesoris jahit.",
    dark: false,
  },
  {
    icon: "bi-patch-question-fill",
    title: "Konsultasi Desain",
    desc: "Bingung pilih model? Tim kami siap membantu Anda memilih desain dan bahan yang tepat.",
    dark: true,
  },
];
</script>

<template>
  <section id="layanan" class="bg-[#1A1208] py-20 lg:py-28">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div
        class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-14"
      >
        <div class="flex items-start gap-6">
          <span
            v-motion
            :initial="{ opacity: 0, x: -50 }"
            :visible-once="{ opacity: 1, x: 0 }"
            :duration="1000"
            class="section-label shrink-0 text-[#C9954C]"
            >Layanan</span
          >
          <p
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :visible-once="{ opacity: 1, y: 0 }"
            :duration="1000"
            class="text-[#FBF7F0]/70 text-base leading-relaxed max-w-sm"
          >
            Kami menyediakan berbagai layanan jahit dan kebutuhan perlengkapan
            jahit untuk memenuhi kebutuhan Anda.
          </p>
        </div>
      </div>

      <!-- Services Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <div
          v-for="(item, i) in layanan"
          :key="i"
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :visible-once="{ opacity: 1, y: 0 }"
          :duration="1000"
          :class="[
            'relative rounded-3xl p-8 border cursor-default overflow-hidden',
            item.dark
              ? 'bg-[#FBF7F0] border-transparent text-[#1A1208]'
              : 'bg-[#2D2416] border-[#3D3020] text-[#FBF7F0]',
          ]"
        >
          <!-- Decorative corner accent -->
          <div
            :class="[
              'absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-10',
              item.dark ? 'bg-[#C9954C]' : 'bg-[#C9954C]',
            ]"
          ></div>

          <!-- Icon -->
          <div
            :class="[
              'w-14 h-14 rounded-2xl flex items-center justify-center mb-6',
              item.dark ? 'bg-[#1A1208]' : 'bg-[#C9954C]',
            ]"
          >
            <i
              :class="[
                'bi text-2xl',
                item.icon,
                item.dark ? 'text-[#C9954C]' : 'text-[#1A1208]',
              ]"
            ></i>
          </div>

          <h3 class="font-display font-700 text-xl mb-3">{{ item.title }}</h3>
          <p
            :class="[
              'text-sm leading-relaxed',
              item.dark ? 'text-[#8C7B6B]' : 'text-[#FBF7F0]/60',
            ]"
          >
            {{ item.desc }}
          </p>
        </div>
      </div>

      <!-- Bottom CTA -->
      <div class="mt-12 text-center">
        <div
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible-once="{ opacity: 1, y: 0 }"
          :duration="1000"
        >
          <a
            :href="contactInfo.whatsapp"
            target="_blank"
            class="inline-flex items-center gap-2.5 bg-[#C9954C] text-[#1A1208] px-8 py-4 rounded-xl font-bold text-base hover:bg-[#E8B96A] transition-colors"
          >
            <i class="bi bi-whatsapp text-lg"></i>
            Konsultasi Sekarang — Gratis!
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
