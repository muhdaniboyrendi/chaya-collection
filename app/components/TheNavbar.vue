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

onMounted(() =>
  window.addEventListener("scroll", handleScroll, { passive: true }),
);
onUnmounted(() => window.removeEventListener("scroll", handleScroll));

function handleScroll() {
  isScrolled.value = window.scrollY > 20;
}
</script>

<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b-[4px] border-[#1A1A1A]',
      // Menggunakan bg-[#F0F0F0] untuk kesan studio jahit yang bersih
      isScrolled
        ? 'bg-[#F0F0F0] shadow-[0_6px_0_0_#1A1A1A] py-1'
        : 'bg-[#F0F0F0] py-3',
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 lg:h-20">
        <!-- Logo - Menggunakan Lavender sebagai identitas kreatif -->
        <NuxtLink to="/" class="flex items-center gap-3 group">
          <NuxtImg
            src="/icon.png"
            width="100"
            height="100"
            loading="eager"
            alt="Chaya Collection Logo"
            class="w-13 h-13"
          />
          <div class="leading-none">
            <div
              class="font-black text-2xl text-[#1A1A1A] leading-none tracking-tight italic"
            >
              Chaya
            </div>
            <div
              class="text-[10px] font-black tracking-[0.3em] text-[#A855F7] uppercase mt-1"
            >
              Collection
            </div>
          </div>
        </NuxtLink>

        <!-- Desktop Nav - Hover dengan Mint Green agar terasa segar -->
        <nav class="hidden lg:flex items-center gap-2">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="px-5 py-2 text-sm font-black text-[#1A1A1A] hover:bg-[#B4E4FF] border-[3px] border-transparent hover:border-[#1A1A1A] rounded-xl transition-all duration-150 uppercase tracking-wider"
          >
            {{ link.label }}
          </a>
        </nav>

        <!-- Desktop CTA - Bright Yellow sebagai penarik perhatian utama -->
        <div class="hidden lg:flex">
          <a
            href="https://wa.me/62895629233434?text=Halo+Chaya+Atelier,+saya+ingin+konsultasi+jahitan..."
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 bg-[#FFD93D] rounded-2xl border-[3px] border-[#1A1A1A] px-6 py-3 font-black text-sm text-[#1A1A1A] uppercase tracking-widest shadow-[5px_5px_0_0_#1A1A1A] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-150"
          >
            <i class="bi bi-whatsapp text-lg"></i>
            Mulai Konsultasi
          </a>
        </div>

        <!-- Mobile Menu Toggle -->
        <div class="lg:hidden flex items-center gap-3">
          <button
            class="w-12 h-12 flex items-center justify-center rounded-xl border-[3px] border-[#1A1A1A] bg-[#B1AFFF] shadow-[3px_3px_0_0_#1A1A1A] active:shadow-none active:translate-x-[3px] active:translate-y-[3px] transition-all"
            @click="isOpen = !isOpen"
          >
            <i
              :class="isOpen ? 'bi bi-x-lg' : 'bi bi-list'"
              class="text-2xl text-[#1A1A1A]"
            ></i>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu - Lavender Theme -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        v-if="isOpen"
        class="lg:hidden bg-[#F0F0F0] border-t-[4px] border-[#1A1A1A] px-4 pt-4 pb-8 space-y-2"
      >
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="flex items-center justify-between px-5 py-4 text-base font-black text-[#1A1A1A] bg-white border-[3px] border-[#1A1A1A] rounded-2xl shadow-[4px_4px_0_0_#1A1A1A] uppercase tracking-wide"
          @click="isOpen = false"
        >
          {{ link.label }}
          <i class="bi bi-arrow-right-short text-2xl"></i>
        </a>
        <div class="pt-4">
          <a
            href="https://wa.me/62895629233434"
            target="_blank"
            class="flex items-center justify-center gap-3 bg-[#FFD93D] border-[3px] border-[#1A1A1A] px-5 py-5 rounded-2xl font-black text-sm text-[#1A1A1A] uppercase tracking-widest shadow-[6px_6px_0_0_#1A1A1A]"
            @click="isOpen = false"
          >
            <i class="bi bi-whatsapp text-xl"></i>
            WhatsApp Sekarang
          </a>
        </div>
      </div>
    </Transition>
  </header>
</template>
