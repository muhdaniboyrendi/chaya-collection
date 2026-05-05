<script setup>
import {
  useTransition,
  useIntersectionObserver,
  TransitionPresets,
} from "@vueuse/core";

const stats = [
  { value: 25, suffix: "+", label: "Tahun Berpengalaman" },
  { value: 1000, suffix: "+", label: "Pelanggan Puas" },
  { value: 5000, suffix: "+", label: "Jahitan Selesai" },
  { value: 100, suffix: "%", label: "Dikerjakan Manual" },
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
    class="min-h-dvh pt-12 lg:pt-14 bg-[#FBF7F0] relative overflow-hidden"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Left Content -->
        <div class="space-y-8">
          <!-- Badge -->
          <div
            v-motion
            :initial="{ opacity: 0, x: -100 }"
            :enter="{ opacity: 1, x: 0 }"
            :duration="1000"
            class="inline-flex items-center gap-2 bg-[#1A1208] text-[#C9954C] px-4 py-2 rounded-full text-xs md:text-sm font-semibold"
          >
            <i class="bi bi-patch-check-fill"></i>
            Sejak 2001
          </div>

          <!-- Headline -->
          <div>
            <h1
              v-motion
              :initial="{ opacity: 0, x: -100 }"
              :enter="{ opacity: 1, x: 0 }"
              :delay="200"
              :duration="1000"
              class="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#1A1208] leading-[1.1] mb-4"
            >
              Jahitan Rapi,
              <span class="italic text-[#C9954C]">Hasil</span>
              <br />
              Memuaskan
            </h1>
            <p
              v-motion
              :initial="{ opacity: 0, x: -100 }"
              :enter="{ opacity: 1, x: 0 }"
              :delay="400"
              :duration="1000"
              class="text-[#8C7B6B] text-lg leading-relaxed max-w-md"
            >
              Kami melayani jasa jahit custom, permak pakaian, seragam, serta
              menyediakan berbagai perlengkapan jahit lengkap di Matesih,
              Karanganyar.
            </p>
          </div>

          <!-- CTA Buttons -->
          <div
            v-motion
            :initial="{ opacity: 0, x: -100 }"
            :enter="{ opacity: 1, x: 0 }"
            :delay="600"
            :duration="1000"
            class="flex flex-col sm:flex-row gap-3"
          >
            <a
              href="https://wa.me/62895629233434?text=Halo+Chaya+Collection,+saya+ingin+konsultasi+jahitan..."
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center gap-2.5 bg-[#1A1208] text-[#FBF7F0] px-7 py-4 rounded-xl font-semibold text-base hover:bg-[#C9954C] hover:text-[#1A1208] transition-all duration-200 group"
            >
              <i
                class="bi bi-whatsapp text-lg group-hover:scale-110 transition-transform"
              ></i>
              Konsultasi Gratis
            </a>
            <a
              href="#layanan"
              class="inline-flex items-center justify-center gap-2 border-2 border-[#1A1208] text-[#1A1208] px-7 py-4 rounded-xl font-semibold text-base hover:bg-[#1A1208] hover:text-[#FBF7F0] transition-all duration-200"
            >
              Lihat Layanan
              <i class="bi bi-arrow-down-right text-base"></i>
            </a>
          </div>

          <!-- Mini stats -->
          <div
            ref="statsRef"
            v-motion
            :initial="{ opacity: 0 }"
            :enter="{ opacity: 1 }"
            :delay="800"
            :duration="1000"
            class="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4"
          >
            <div
              v-for="(stat, index) in stats"
              :key="stat.value"
              v-motion
              :initial="{ opacity: 0, y: 100 }"
              :enter="{ opacity: 1, y: 0 }"
              :delay="200 * index"
              :duration="1000"
              class="text-center p-3 rounded-xl bg-white border border-[#E8D8C0]"
            >
              <div class="font-display font-700 text-2xl text-[#1A1208]">
                {{ Math.round(outputs[index].value) }}{{ stat.suffix }}
              </div>
              <div class="text-xs text-[#8C7B6B] mt-0.5 leading-tight">
                {{ stat.label }}
              </div>
            </div>
          </div>
        </div>

        <!-- Right - Decorative Illustration Card -->
        <div
          v-motion
          :initial="{ opacity: 0, x: 100 }"
          :enter="{ opacity: 1, x: 0 }"
          :delay="1000"
          :duration="1000"
          class="relative hidden lg:block"
        >
          <!-- Main card -->
          <div class="relative bg-[#1A1208] rounded-3xl p-10 overflow-hidden">
            <!-- Pattern background inside card -->
            <div class="absolute inset-0 opacity-10">
              <svg
                viewBox="0 0 400 400"
                class="w-full h-full"
                preserveAspectRatio="xMidYMid slice"
              >
                <pattern
                  id="fab"
                  x="0"
                  y="0"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 0 20 L 40 20 M 20 0 L 20 40"
                    stroke="#C9954C"
                    stroke-width="0.5"
                    fill="none"
                  />
                  <circle cx="20" cy="20" r="2" fill="#C9954C" />
                </pattern>
                <rect width="400" height="400" fill="url(#fab)" />
              </svg>
            </div>

            <!-- Center SVG illustration - sewing machine -->
            <div
              class="relative z-10 flex flex-col items-center text-center space-y-6"
            >
              <div class="w-48 h-48 flex items-center justify-center">
                <svg viewBox="0 0 200 200" class="w-full h-full">
                  <!-- Sewing machine illustration -->
                  <!-- Body -->
                  <rect
                    x="20"
                    y="80"
                    width="160"
                    height="90"
                    rx="12"
                    fill="#C9954C"
                  />
                  <!-- Top arch -->
                  <path
                    d="M 60 80 Q 60 30 110 30 Q 155 30 155 80"
                    fill="#C9954C"
                    stroke="none"
                  />
                  <!-- Arm highlight -->
                  <path
                    d="M 62 80 Q 62 38 110 38 Q 150 38 150 80"
                    fill="#D4A853"
                    stroke="none"
                    stroke-width="0"
                  />
                  <!-- Needle area -->
                  <rect
                    x="40"
                    y="140"
                    width="25"
                    height="10"
                    rx="3"
                    fill="#1A1208"
                  />
                  <!-- Needle -->
                  <line
                    x1="52"
                    y1="150"
                    x2="52"
                    y2="175"
                    stroke="#FBF7F0"
                    stroke-width="2.5"
                    stroke-linecap="round"
                  />
                  <!-- Wheel -->
                  <circle cx="145" cy="120" r="22" fill="#1A1208" />
                  <circle cx="145" cy="120" r="14" fill="#2D2416" />
                  <circle cx="145" cy="120" r="5" fill="#C9954C" />
                  <!-- Base -->
                  <rect
                    x="10"
                    y="168"
                    width="180"
                    height="14"
                    rx="7"
                    fill="#8C7B6B"
                  />
                  <!-- Bobbin/thread on top -->
                  <rect
                    x="95"
                    y="20"
                    width="18"
                    height="14"
                    rx="7"
                    fill="#FBF7F0"
                    opacity="0.9"
                  />
                  <!-- Light reflection -->
                  <ellipse
                    cx="80"
                    cy="100"
                    rx="15"
                    ry="8"
                    fill="#E8B96A"
                    opacity="0.4"
                  />
                </svg>
              </div>

              <div>
                <p class="font-display italic text-[#C9954C] text-xl font-600">
                  "Setiap jahitan adalah karya"
                </p>
                <p class="text-[#FBF7F0]/60 text-sm mt-1">
                  Chaya Collection — Matesih, Karanganyar
                </p>
              </div>

              <!-- Floating tags -->
              <div class="flex flex-wrap gap-2 justify-center">
                <span
                  v-for="tag in [
                    'Jahit Custom',
                    'Permak',
                    'Seragam',
                    'Alat Jahit',
                  ]"
                  :key="tag"
                  class="bg-[#FBF7F0]/10 text-[#FBF7F0] text-xs font-medium px-3 py-1.5 rounded-full backdrop-blur-md border border-[#FBF7F0]/20"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>

          <!-- Floating accent cards -->
          <div
            class="absolute -bottom-6 -left-6 bg-[#C9954C] rounded-2xl p-5 shadow-xl"
          >
            <div class="flex items-center gap-3">
              <div
                class="w-10 h-10 bg-[#1A1208] rounded-xl flex items-center justify-center"
              >
                <i class="bi bi-star-fill text-[#C9954C] text-sm"></i>
              </div>
              <div>
                <div
                  class="font-display font-700 text-[#1A1208] text-lg leading-none"
                >
                  4.9
                </div>
                <div class="text-[#1A1208]/70 text-xs">Rating Pelanggan</div>
              </div>
            </div>
          </div>

          <div
            class="absolute -top-5 -right-5 bg-white rounded-2xl p-4 shadow-xl border border-[#E8D8C0]"
          >
            <div class="flex items-center gap-2">
              <i class="bi bi-clock-history text-[#C9954C] text-xl"></i>
              <div>
                <div class="text-xs font-semibold text-[#1A1208]">
                  Buka Setiap Hari
                </div>
                <div class="text-xs text-[#8C7B6B]">07.00 – 17.30 WIB</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
