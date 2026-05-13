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
    duration: 4000,
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
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Left Column -->
        <div class="space-y-8">
          <!-- Headline -->
          <div>
            <h1
              v-motion
              :initial="{ opacity: 0, y: 40 }"
              :enter="{ opacity: 1, y: 0 }"
              :delay="200"
              :duration="700"
              class="font-black text-6xl sm:text-7xl lg:text-8xl text-[#1A1A1A] leading-[0.9] tracking-tighter mb-6"
            >
              Jahitan<br />
              <span class="relative inline-block">
                <span class="relative z-10 italic">Presisi,</span>
                <!-- Highlight menggunakan Lavender -->
                <span
                  class="absolute bottom-2 left-0 right-0 h-6 bg-[#B1AFFF] -z-0 rounded-lg border-2 border-[#1A1A1A]"
                ></span>
              </span>
              <br />Gaya Terkini
            </h1>
            <p
              v-motion
              :initial="{ opacity: 0, y: 30 }"
              :enter="{ opacity: 1, y: 0 }"
              :delay="400"
              :duration="700"
              class="text-[#4B5563] text-xl leading-relaxed max-w-md font-bold border-l-[6px] border-[#B4E4FF] pl-5"
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
            class="flex flex-col sm:flex-row gap-5"
          >
            <!-- Primary CTA - Bright Yellow -->
            <a
              href="https://wa.me/62895629233434"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center gap-3 bg-[#FFD93D] rounded-2xl border-[3px] border-[#1A1A1A] text-[#1A1A1A] px-8 py-5 font-black text-lg uppercase tracking-wider shadow-[8px_8px_0_0_#1A1A1A] hover:shadow-none hover:translate-x-[8px] hover:translate-y-[8px] transition-all duration-200"
            >
              <i class="bi bi-chat-heart-fill text-xl"></i>
              Konsultasi Desain
            </a>
            <!-- Secondary CTA - Mint Green -->
            <a
              href="#layanan"
              class="inline-flex items-center justify-center gap-2 bg-[#B4E4FF] rounded-2xl border-[3px] border-[#1A1A1A] text-[#1A1A1A] px-8 py-5 font-black text-lg uppercase tracking-wider shadow-[8px_8px_0_0_#1A1A1A] hover:shadow-none hover:translate-x-[8px] hover:translate-y-[8px] transition-all duration-200"
            >
              Eksplor Layanan
              <i class="bi bi-arrow-up-right-circle-fill text-xl"></i>
            </a>
          </div>

          <!-- Stats - Menggunakan Lavender Shadow -->
          <div
            ref="statsRef"
            class="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4"
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

        <!-- Right Column - Visual Card -->
        <div
          v-motion
          :initial="{ opacity: 0, rotate: 5 }"
          :enter="{ opacity: 1, rotate: 0 }"
          :delay="300"
          :duration="800"
          class="relative hidden lg:block"
        >
          <!-- Main card - Lavender Base -->
          <div
            class="relative bg-[#B1AFFF] rounded-[3rem] border-[4px] border-[#1A1A1A] p-12 overflow-hidden shadow-[15px_15px_0_0_#1A1A1A]"
          >
            <!-- Dot pattern - Mint color dots -->
            <div class="nb-dot-pattern-mint absolute inset-0 opacity-20"></div>

            <div
              class="relative z-10 flex flex-col items-center text-center space-y-8"
            >
              <!-- SVG Sewing Machine - Re-colored for Modern Atelier -->
              <div
                class="w-56 h-56 flex items-center justify-center transform hover:scale-110 transition-transform duration-300"
              >
                <svg
                  viewBox="0 0 200 200"
                  class="w-full h-full filter drop-shadow-[4px_4px_0_#1A1A1A]"
                >
                  <rect
                    x="20"
                    y="80"
                    width="160"
                    height="90"
                    rx="12"
                    fill="#FFD93D"
                    stroke="#1A1A1A"
                    stroke-width="4"
                  />
                  <path
                    d="M 60 80 Q 60 30 110 30 Q 155 30 155 80"
                    fill="#FFD93D"
                    stroke="#1A1A1A"
                    stroke-width="4"
                  />
                  <circle
                    cx="145"
                    cy="120"
                    r="22"
                    fill="#B4E4FF"
                    stroke="#1A1A1A"
                    stroke-width="4"
                  />
                  <circle cx="145" cy="120" r="8" fill="#1A1A1A" />
                  <rect
                    x="10"
                    y="170"
                    width="180"
                    height="15"
                    rx="5"
                    fill="#1A1A1A"
                  />
                </svg>
              </div>

              <!-- Artist Quote Card -->
              <div
                class="bg-white rounded-3xl border-[3px] border-[#1A1A1A] p-6 w-full shadow-[6px_6px_0_0_#1A1A1A]"
              >
                <p
                  class="font-black italic text-[#1A1A1A] text-2xl leading-tight"
                >
                  "Fashion passes,<br />style remains."
                </p>
                <p
                  class="text-[#A855F7] text-[10px] font-black uppercase tracking-[0.2em] mt-3"
                >
                  Chaya Atelier — Est. 1999
                </p>
              </div>

              <!-- Creative Tags -->
              <div class="flex flex-wrap gap-2 justify-center">
                <span
                  v-for="tag in ['Custom Fit', 'Upcycling', 'Bridal', 'Design']"
                  :key="tag"
                  class="bg-[#B4E4FF] rounded-xl border-[2px] border-[#1A1A1A] text-[#1A1A1A] text-[10px] font-black px-4 py-2 uppercase tracking-wider"
                >
                  #{{ tag }}
                </span>
              </div>
            </div>
          </div>

          <!-- Floating Badges -->
          <div
            class="absolute -bottom-8 -left-8 bg-[#FFD93D] rounded-2xl border-[3px] border-[#1A1A1A] p-5 shadow-[6px_6px_0_0_#1A1A1A] -rotate-6"
          >
            <div class="flex items-center gap-3">
              <div
                class="w-12 h-12 bg-white border-[2px] border-[#1A1A1A] rounded-full flex items-center justify-center"
              >
                <i class="bi bi-award-fill text-[#A855F7] text-2xl"></i>
              </div>
              <div>
                <div
                  class="font-black text-[#1A1A1A] text-2xl leading-none tracking-tighter"
                >
                  PREMIUM
                </div>
                <div
                  class="text-[#1A1A1A]/70 text-[10px] font-black uppercase tracking-widest mt-1"
                >
                  Quality Garansi
                </div>
              </div>
            </div>
          </div>

          <div
            class="absolute -top-6 -right-6 bg-white rounded-2xl border-[3px] border-[#1A1A1A] p-4 shadow-[6px_6px_0_0_#B4E4FF] rotate-3"
          >
            <div
              class="font-black text-[#1A1A1A] text-xs uppercase tracking-widest text-center"
            >
              OPEN FOR ORDERS
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
