<script setup>
const isOpen = ref(false);
const isScrolled = ref(false);

const navLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Layanan", href: "#layanan" },
  { label: "Galeri", href: "#galeri" },
  { label: "Tentang", href: "#tentang" },
  { label: "Kontak", href: "#kontak" },
];

onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

function handleScroll() {
  isScrolled.value = window.scrollY > 20;
}
</script>

<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#FBF7F0]/80',
      isScrolled ? ' backdrop-blur-lg shadow-sm border-b border-[#E8D8C0]' : '',
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 lg:h-20">
        <!-- Logo -->
        <a href="#beranda" class="flex items-center gap-2.5 group">
          <div
            class="w-9 h-9 bg-[#1A1208] rounded-lg flex items-center justify-center"
          >
            <i class="bi bi-scissors text-[#C9954C] text-lg"></i>
          </div>
          <div class="flex flex-col leading-none">
            <span
              class="font-display font-700 text-lg text-[#1A1208] leading-tight"
              >Chaya</span
            >
            <span
              class="text-xs font-medium tracking-[0.18em] text-[#8C7B6B] uppercase"
              >Collection</span
            >
          </div>
        </a>

        <!-- Desktop Nav -->
        <nav class="hidden lg:flex items-center gap-1">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="px-4 py-2 text-sm font-medium text-[#2D2416] hover:text-[#C9954C] transition-colors rounded-lg hover:bg-[#F0E8D8]"
          >
            {{ link.label }}
          </a>
        </nav>

        <!-- Desktop CTA -->
        <div class="hidden lg:flex items-center gap-3">
          <a
            href="https://wa.me/6281234567890?text=Halo+Chaya+Collection,+saya+ingin+bertanya..."
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 bg-[#1A1208] text-[#FBF7F0] px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#C9954C] hover:text-[#1A1208] transition-all duration-200"
          >
            <i class="bi bi-whatsapp text-base"></i>
            Hubungi Kami
          </a>
        </div>

        <!-- Mobile: WA icon + Hamburger -->
        <div class="lg:hidden flex items-center gap-2">
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            class="w-9 h-9 flex items-center justify-center rounded-lg bg-[#1A1208] hover:bg-[#C9954C] transition-colors"
            aria-label="WhatsApp"
          >
            <i class="bi bi-whatsapp text-[#FBF7F0] text-base"></i>
          </a>

          <button
            class="w-10 h-10 flex items-center justify-center rounded-lg bg-[#F0E8D8] hover:bg-[#E8D8C0] transition-colors"
            @click="isOpen = !isOpen"
            :aria-label="isOpen ? 'Tutup menu' : 'Buka menu'"
          >
            <Transition
              enter-active-class="transition-all duration-150"
              enter-from-class="opacity-0 rotate-90"
              enter-to-class="opacity-100 rotate-0"
              leave-active-class="transition-all duration-150"
              leave-from-class="opacity-100 rotate-0"
              leave-to-class="opacity-0 -rotate-90"
              mode="out-in"
            >
              <i
                v-if="isOpen"
                key="close"
                class="bi bi-x-lg text-xl text-[#1A1208]"
              ></i>
              <i
                v-else
                key="open"
                class="bi bi-list text-xl text-[#1A1208]"
              ></i>
            </Transition>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu Dropdown -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-3"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-3"
    >
      <div
        v-if="isOpen"
        class="lg:hidden bg-[#FBF7F0] border-t border-[#E8D8C0] px-4 pt-3 pb-5 space-y-1 shadow-lg"
      >
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="flex items-center justify-between px-4 py-3 text-sm font-medium text-[#2D2416] hover:text-[#C9954C] hover:bg-[#F0E8D8] rounded-xl transition-colors"
          @click="isOpen = false"
        >
          {{ link.label }}
          <i class="bi bi-arrow-right text-xs opacity-40"></i>
        </a>

        <div class="pt-3 border-t border-[#F0E8D8]">
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            class="flex items-center justify-center gap-2 bg-[#1A1208] text-[#FBF7F0] px-5 py-3.5 rounded-xl text-sm font-bold hover:bg-[#C9954C] hover:text-[#1A1208] transition-all"
            @click="isOpen = false"
          >
            <i class="bi bi-whatsapp text-base"></i>
            Chat WhatsApp Sekarang
          </a>
        </div>
      </div>
    </Transition>
  </header>
</template>
