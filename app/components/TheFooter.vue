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
  <footer class="bg-[#0F0A04] text-[#FBF7F0]">
    <!-- Top section -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <!-- Brand -->
        <div class="lg:col-span-2">
          <div class="flex items-center gap-2.5 mb-5">
            <div
              class="w-9 h-9 bg-[#C9954C] rounded-lg flex items-center justify-center"
            >
              <i class="bi bi-scissors text-[#1A1208] text-lg"></i>
            </div>
            <div class="flex flex-col leading-none">
              <span
                class="font-display font-700 text-lg text-[#FBF7F0] leading-tight"
                >Chaya</span
              >
              <span
                class="text-xs font-medium tracking-[0.18em] text-[#8C7B6B] uppercase"
                >Collection</span
              >
            </div>
          </div>
          <p class="text-[#FBF7F0]/50 text-sm leading-relaxed max-w-xs mb-6">
            Jasa jahit & toko perlengkapan jahit terpercaya di Matesih,
            Karanganyar. Berpengalaman lebih dari 15 tahun melayani dengan
            sepenuh hati.
          </p>
          <!-- Socials -->
          <div class="flex gap-3">
            <!-- <a href="#" class="w-9 h-9 bg-[#1A1208] rounded-lg flex items-center justify-center hover:bg-[#C9954C] hover:text-[#1A1208] text-[#FBF7F0] transition-all">
              <i class="bi bi-instagram text-base"></i>
            </a> -->
            <a
              :href="contactInfo.whatsapp"
              target="_blank"
              class="w-9 h-9 bg-[#1A1208] rounded-lg flex items-center justify-center hover:bg-[#C9954C] hover:text-[#1A1208] text-[#FBF7F0] transition-all"
            >
              <i class="bi bi-whatsapp text-base"></i>
            </a>
            <!-- <a href="#" class="w-9 h-9 bg-[#1A1208] rounded-lg flex items-center justify-center hover:bg-[#C9954C] hover:text-[#1A1208] text-[#FBF7F0] transition-all">
              <i class="bi bi-facebook text-base"></i>
            </a> -->
          </div>
        </div>

        <!-- Nav -->
        <div>
          <h4
            class="text-sm font-semibold uppercase tracking-wider text-[#8C7B6B] mb-5"
          >
            Menu
          </h4>
          <ul class="space-y-3">
            <li v-for="link in navLinks" :key="link.href">
              <a
                :href="link.href"
                class="text-sm text-[#FBF7F0]/60 hover:text-[#C9954C] transition-colors"
                >{{ link.label }}</a
              >
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h4
            class="text-sm font-semibold uppercase tracking-wider text-[#8C7B6B] mb-5"
          >
            Layanan
          </h4>
          <ul class="space-y-3">
            <li v-for="item in layanan" :key="item">
              <a
                href="#layanan"
                class="text-sm text-[#FBF7F0]/60 hover:text-[#C9954C] transition-colors"
                >{{ item }}</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="border-t border-[#1A1208] px-4 sm:px-6 lg:px-8 py-6">
      <div
        class="max-w-7xl mx-auto flex items-center justify-center text-xs text-[#FBF7F0]/30"
      >
        <span>© {{ year }} Chaya Collection. All rights reserved.</span>
      </div>
    </div>
  </footer>
</template>
