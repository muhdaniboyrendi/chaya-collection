<script setup>
import {
  useTransition,
  useIntersectionObserver,
  TransitionPresets,
} from "@vueuse/core";

const stats = [
  { value: 25, suffix: "+", label: "Tahun Pengalaman" },
  { value: 1000, suffix: "+", label: "Pelanggan Setia" },
  { value: 5000, suffix: "+", label: "Produk Selesai" },
  { value: 100, suffix: "%", label: "Handmade Quality" },
];

const sources = stats.map(() => ref(0));
const outputs = sources.map((source) =>
  useTransition(source, {
    duration: 3000,
    transition: TransitionPresets.easeOutExpo,
  }),
);

const statsRef = ref(null);
const hasAnimated = ref(false);

onMounted(() => {
  const { stop } = useIntersectionObserver(
    statsRef,
    ([{ isIntersecting }]) => {
      if (isIntersecting && !hasAnimated.value) {
        hasAnimated.value = true;
        sources.forEach((source, i) => {
          source.value = stats[i].value;
        });
        stop();
      }
    },
    { threshold: 0.3 },
  );
});
</script>

<template>
  <section
    id="beranda"
    class="min-h-dvh pt-16 lg:pt-20 bg-[#F0F0F0] relative overflow-hidden"
  >
    <!-- Decorative background grid - Menggunakan garis hitam tipis -->
    <div
      class="nb-grid-bg absolute inset-0 opacity-[0.05] pointer-events-none"
    ></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative">
      <div>
        <!-- Left Column -->
        <div class="space-y-8">
          <!-- Headline -->
          <div class="md:text-center">
            <h1
              v-motion
              :initial="{ opacity: 0, x: -100 }"
              :enter="{ opacity: 1, x: 0 }"
              :delay="200"
              :duration="700"
              class="font-black text-6xl sm:text-7xl lg:text-8xl text-[#1A1A1A] leading-[0.9] tracking-tighter mb-6"
            >
              Jahitan
              <span class="relative inline-block">
                <span class="relative z-10 italic text-[#A855F7]"
                  >Presisi,</span
                >
              </span>
              <br />Gaya Terkini
            </h1>
            <p
              v-motion
              :initial="{ opacity: 0, y: 30 }"
              :enter="{ opacity: 1, y: 0 }"
              :delay="400"
              :duration="700"
              class="text-[#4B5563] text-xl leading-relaxed max-w-3xl mx-auto font-bold pl-1"
            >
              Wujudkan pakaian impian Anda dengan sentuhan ahli di Chaya
              Atelier. Custom tailoring, modifikasi, dan desain eksklusif di
              pusat Matesih.
            </p>
          </div>

          <!-- CTA Buttons -->
          <div
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0 }"
            :delay="600"
            :duration="600"
            class="flex flex-col sm:flex-row justify-center gap-5"
          >
            <!-- Primary CTA - Bright Yellow -->
            <a
              href="https://wa.me/62895629233434"
              target="_blank"
              rel="noopener noreferrer"
              class="text-center gap-3 bg-[#FFD93D] rounded-2xl border-[3px] border-[#1A1A1A] text-[#1A1A1A] px-8 py-5 font-black text-lg uppercase tracking-wider shadow-[8px_8px_0_0_#1A1A1A] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all duration-200"
            >
              Konsultasi Desain
            </a>
            <!-- Secondary CTA - Mint Green -->
            <a
              href="#layanan"
              class="text-center gap-2 bg-[#B4E4FF] rounded-2xl border-[3px] border-[#1A1A1A] text-[#1A1A1A] px-8 py-5 font-black text-lg uppercase tracking-wider shadow-[8px_8px_0_0_#1A1A1A] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all duration-200"
            >
              Eksplor Layanan
            </a>
          </div>

          <!-- Stats - Menggunakan Lavender Shadow -->
          <div
            ref="statsRef"
            class="w-full max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4"
          >
            <div
              v-for="(stat, index) in stats"
              :key="stat.value"
              v-motion
              :initial="{ opacity: 0, scale: 0.8 }"
              :enter="{ opacity: 1, scale: 1 }"
              :delay="150 * index"
              class="text-center p-5 bg-white border-[3px] rounded-2xl border-[#1A1A1A] shadow-[5px_5px_0_0_#B1AFFF] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-150"
            >
              <div class="font-black text-3xl text-[#1A1A1A] leading-none">
                {{ Math.round(outputs[index].value) }}{{ stat.suffix }}
              </div>
              <div
                class="text-[10px] font-black text-[#6B7280] mt-2 uppercase tracking-widest leading-tight"
              >
                {{ stat.label }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.nb-grid-bg {
  background-image:
    linear-gradient(#1a1a1a 1px, transparent 1px),
    linear-gradient(90deg, #1a1a1a 1px, transparent 1px);
  background-size: 50px 50px;
}
.nb-dot-pattern-mint {
  background-image: radial-gradient(circle, #b4e4ff 2px, transparent 2px);
  background-size: 30px 30px;
}
</style>
