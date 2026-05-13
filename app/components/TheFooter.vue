<script setup>
const year = new Date().getFullYear();

const navLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Layanan", href: "#layanan" },
  { label: "Galeri", href: "#galeri" },
  { label: "Tentang", href: "#tentang" },
  { label: "Kontak", href: "#kontak" },
];

const layanan = [
  "Jahit Custom",
  "Permak & Reparasi",
  "Jahit Seragam",
  "Busana Muslim",
  "Toko Alat Jahit",
];
</script>

<template>
  <footer
    class="bg-white border-t-[4px] border-[#1A1A1A] relative overflow-hidden"
  >
    <!-- Decorative Pattern -->
    <div
      class="absolute top-0 right-0 w-64 h-64 bg-[#B4E4FF] opacity-20 rounded-full blur-3xl -mr-32 -mt-32"
    ></div>

    <!-- Top section -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-16">
        <!-- Brand -->
        <div class="lg:col-span-2">
          <!-- Logo -->
          <div class="flex items-center gap-4 mb-8">
            <div
              class="w-14 h-14 bg-[#1A1A1A] rounded-2xl border-[3px] border-[#1A1A1A] flex items-center justify-center shadow-[5px_5px_0_0_#A855F7]"
            >
              <i class="bi bi-scissors text-[#B4E4FF] text-2xl"></i>
            </div>
            <div class="leading-none">
              <div
                class="font-black text-3xl text-[#1A1A1A] leading-none tracking-tighter uppercase italic"
              >
                Chaya
              </div>
              <div
                class="text-xs font-black tracking-[0.3em] text-[#A855F7] uppercase mt-1"
              >
                Collection
              </div>
            </div>
          </div>

          <p
            class="text-[#4B5563] text-lg leading-relaxed max-w-sm mb-10 font-bold"
          >
            Mewujudkan busana impian dengan sentuhan personal dan kualitas
            jahitan terbaik sejak lebih dari 25 tahun yang lalu.
          </p>

          <!-- Socials -->
          <div class="flex gap-4">
            <a
              href="https://wa.me/62895629233434"
              target="_blank"
              class="w-12 h-12 bg-[#25D366] rounded-2xl border-[3px] border-[#1A1A1A] flex items-center justify-center shadow-[4px_4px_0_0_#1A1A1A] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
              aria-label="WhatsApp"
            >
              <i class="bi bi-whatsapp text-white text-xl"></i>
            </a>
            <a
              href="#"
              class="w-12 h-12 bg-[#E4405F] rounded-2xl border-[3px] border-[#1A1A1A] flex items-center justify-center shadow-[4px_4px_0_0_#1A1A1A] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
              aria-label="Instagram"
            >
              <i class="bi bi-instagram text-white text-xl"></i>
            </a>
          </div>
        </div>

        <!-- Nav -->
        <div>
          <h4
            class="inline-block bg-[#FFD93D] px-4 py-1 rounded-lg border-[2px] border-[#1A1A1A] text-xs font-black uppercase tracking-widest text-[#1A1A1A] mb-8 shadow-[3px_3px_0_0_#1A1A1A]"
          >
            Eksplorasi
          </h4>
          <ul class="space-y-4">
            <li v-for="link in navLinks" :key="link.href">
              <a
                :href="link.href"
                class="text-base font-black text-[#1A1A1A] hover:text-[#A855F7] transition-colors uppercase tracking-tighter flex items-center gap-2 group"
              >
                <span
                  class="w-2 h-2 bg-[#1A1A1A] rounded-full group-hover:bg-[#A855F7] transition-colors"
                ></span>
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h4
            class="inline-block bg-[#B1AFFF] px-4 py-1 rounded-lg border-[2px] border-[#1A1A1A] text-xs font-black uppercase tracking-widest text-[#1A1A1A] mb-8 shadow-[3px_3px_0_0_#1A1A1A]"
          >
            Layanan Kami
          </h4>
          <ul class="space-y-4">
            <li v-for="item in layanan" :key="item">
              <a
                href="#layanan"
                class="text-base font-black text-[#1A1A1A] hover:text-[#A855F7] transition-colors uppercase tracking-tighter flex items-center gap-2 group"
              >
                <span
                  class="w-2 h-2 bg-[#1A1A1A] rounded-full group-hover:bg-[#A855F7] transition-colors"
                ></span>
                {{ item }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Bottom bar -->
    <div
      class="border-t-[4px] border-[#1A1A1A] bg-[#B4E4FF] px-4 sm:px-6 lg:px-8 py-8"
    >
      <div
        class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <div class="flex flex-col md:flex-row items-center gap-2 md:gap-6">
          <span
            class="text-sm font-black text-[#1A1A1A] uppercase tracking-tighter"
          >
            © {{ year }} Chaya Collection.
          </span>
          <span class="hidden md:block text-[#1A1A1A]/30">|</span>
          <span
            class="text-sm font-black text-[#1A1A1A] uppercase tracking-tighter italic"
          >
            Dibuat dengan ❤️ di Matesih
          </span>
        </div>

        <div
          class="flex items-center gap-3 bg-white border-[3px] border-[#1A1A1A] px-5 py-2 rounded-2xl shadow-[4px_4px_0_0_#1A1A1A]"
        >
          <div class="w-3 h-3 bg-[#25D366] rounded-full animate-pulse"></div>
          <span
            class="text-xs font-black text-[#1A1A1A] uppercase tracking-widest"
            >Tersedia untuk pesanan baru</span
          >
        </div>
      </div>
    </div>
  </footer>
</template>
