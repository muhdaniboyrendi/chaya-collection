<script setup>
// Placeholder gallery items - ganti dengan NuxtImg nyata
const items = [
  { label: 'Kebaya Modern', cat: 'Busana Muslim' },
  { label: 'Seragam Kantor', cat: 'Seragam' },
  { label: 'Baju Pesta', cat: 'Jahit Custom' },
  { label: 'Gamis Elegan', cat: 'Busana Muslim' },
  { label: 'Permak Celana', cat: 'Reparasi' },
  { label: 'Seragam Sekolah', cat: 'Seragam' },
]

const colors = [
  '#E8D8C0', '#D4C4B0', '#C0AFA0',
  '#E8D8C0', '#D4C4B0', '#C0AFA0',
]
</script>

<template>
  <section id="galeri" class="bg-[#FBF7F0] py-20 lg:py-28">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Section Header -->
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-14">
        <div class="flex items-center gap-6">
          <span class="section-label">Galeri</span>
          <p class="text-[#8C7B6B] text-base max-w-xs leading-relaxed">
            Sebagian hasil karya terbaik kami untuk pelanggan setia Chaya Collection.
          </p>
        </div>
        <a
          href="https://wa.me/6281234567890?text=Halo,+saya+ingin+melihat+katalog+lengkap+Chaya+Collection"
          target="_blank"
          class="shrink-0 inline-flex items-center gap-2 border-2 border-[#1A1208] text-[#1A1208] px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#1A1208] hover:text-[#FBF7F0] transition-all"
        >
          Katalog Lengkap
          <i class="bi bi-arrow-right"></i>
        </a>
      </div>

      <!-- Gallery Grid -->
      <div class="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        <div
          v-for="(item, i) in items"
          :key="i"
          :class="[
            'group relative rounded-2xl overflow-hidden card-hover cursor-pointer',
            i === 0 || i === 5 ? 'row-span-2' : '',
          ]"
          :style="`aspect-ratio: ${i === 0 || i === 5 ? '3/4' : '4/3'}`"
        >
          <!-- Placeholder image area - replace with NuxtImg -->
          <div
            class="w-full h-full flex items-end p-5"
            :style="`background: linear-gradient(160deg, ${colors[i]} 0%, #A09080 100%)`"
          >
            <!-- Placeholder fabric/thread pattern SVG -->
            <div class="absolute inset-0 opacity-20">
              <svg viewBox="0 0 200 200" class="w-full h-full" preserveAspectRatio="xMidYMid slice">
                <pattern id="weave" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 0 10 L 20 10 M 10 0 L 10 20" stroke="#1A1208" stroke-width="1" fill="none" opacity="0.5"/>
                </pattern>
                <rect width="200" height="200" fill="url(#weave)"/>
              </svg>
            </div>

            <!-- Center icon -->
            <div class="absolute inset-0 flex items-center justify-center">
              <i class="bi bi-image text-4xl text-[#1A1208]/30"></i>
            </div>

            <!-- Label overlay -->
            <div class="relative z-10 bg-[#1A1208]/80 backdrop-blur-sm rounded-xl px-4 py-3 w-full translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <div class="text-xs text-[#C9954C] font-semibold mb-0.5">{{ item.cat }}</div>
              <div class="text-sm font-display font-600 text-[#FBF7F0]">{{ item.label }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Note for developer -->
      <p class="mt-6 text-center text-xs text-[#8C7B6B]">
        * Ganti placeholder di atas dengan
        <code class="bg-[#F0E8D8] px-1.5 py-0.5 rounded font-mono">&lt;NuxtImg&gt;</code>
        setelah foto produk tersedia
      </p>
    </div>
  </section>
</template>
