<script setup>
const faqs = [
  {
    q: "Berapa lama waktu pengerjaan jahitan?",
    a: "Waktu pengerjaan bervariasi tergantung tingkat kesulitan. Untuk jahit sederhana biasanya 3–5 hari, busana custom 1–2 minggu. Kami juga menerima pesanan express dengan biaya tambahan.",
    color: "#FFD93D", // Kuning
  },
  {
    q: "Apakah bisa konsultasi desain sebelum memesan?",
    a: "Tentu! Kami sangat menyambut konsultasi terlebih dahulu. Anda bisa datang langsung ke studio atau konsultasi via WhatsApp. Kami siap membantu memilih model, bahan, dan warna yang sesuai.",
    color: "#B1AFFF", // Lavender
  },
  {
    q: "Apakah menerima pesanan seragam dalam jumlah banyak?",
    a: "Ya! Kami melayani pesanan massal untuk seragam kantor, sekolah, organisasi, dan lainnya. Semakin banyak pesanan, semakin kompetitif harga yang kami tawarkan.",
    color: "#B4E4FF", // Mint
  },
  {
    q: "Apakah ada garansi kalau hasil jahitan tidak sesuai?",
    a: "Kepuasan Anda adalah prioritas kami. Jika ada ketidaksesuaian dengan kesepakatan awal, kami siap melakukan revisi tanpa biaya tambahan.",
    color: "#FFD93D", // Kuning
  },
];

const openIdx = ref(null);
function toggle(i) {
  openIdx.value = openIdx.value === i ? null : i;
}
</script>

<template>
  <section
    id="faq"
    class="bg-[#F0F0F0] py-20 lg:py-28 relative overflow-hidden"
  >
    <!-- Decorative dot grid -->
    <div
      class="nb-dot-grid-dark absolute inset-0 opacity-[0.05] pointer-events-none"
    ></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div class="grid lg:grid-cols-2 gap-20">
        <!-- Left Header -->
        <div class="lg:sticky lg:top-28 h-fit">
          <span
            v-motion
            :initial="{ opacity: 0, x: -30 }"
            :visible-once="{ opacity: 1, x: 0 }"
            :duration="600"
            class="inline-block bg-[#A855F7] rounded-xl border-[3px] border-[#1A1A1A] px-5 py-2 font-black text-xs text-white uppercase tracking-[0.2em] mb-8 shadow-[5px_5px_0_0_#1A1A1A]"
          >
            Got Questions?
          </span>
          <h2
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visible-once="{ opacity: 1, y: 0 }"
            :duration="700"
            class="font-black text-5xl sm:text-7xl text-[#1A1A1A] leading-[0.85] tracking-tighter mb-8"
          >
            Yang Sering<br />
            <span class="relative inline-block">
              <span class="relative z-10 italic text-[#1A1A1A]"
                >Ditanyakan.</span
              >
              <span
                class="absolute bottom-2 left-0 right-0 h-6 bg-[#FFD93D] -z-0 border-2 border-[#1A1A1A] rounded-lg"
              ></span>
            </span>
          </h2>
          <p
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible-once="{ opacity: 1, y: 0 }"
            :duration="700"
            class="text-[#4B5563] text-lg leading-relaxed mb-12 font-bold max-w-md border-l-[6px] border-[#B1AFFF] pl-6"
          >
            Punya pertanyaan lain yang belum terjawab? Tim kami siap membantu
            mewujudkan pakaian impian Anda.
          </p>

          <div
            v-motion
            :initial="{ opacity: 0, scale: 0.9 }"
            :visible-once="{ opacity: 1, scale: 1 }"
            :duration="600"
          >
            <a
              href="https://wa.me/62895629233434"
              target="_blank"
              class="inline-flex items-center gap-3 bg-[#1A1A1A] rounded-2xl border-[3px] border-[#1A1A1A] px-8 py-4 font-black text-white uppercase tracking-widest shadow-[8px_8px_0_0_#B4E4FF] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all duration-200"
            >
              <i class="bi bi-chat-left-dots-fill text-[#B4E4FF]"></i>
              Tanya via WhatsApp
            </a>
          </div>
        </div>

        <!-- Right Accordion -->
        <div class="space-y-5">
          <div
            v-for="(faq, i) in faqs"
            :key="i"
            v-motion
            :initial="{ opacity: 0, x: 40 }"
            :visible-once="{ opacity: 1, x: 0 }"
            :duration="600"
            :delay="i * 100"
            class="group"
          >
            <div
              :class="[
                'rounded-[2rem] border-[3px] border-[#1A1A1A] overflow-hidden transition-all duration-300',
                openIdx === i
                  ? 'bg-white shadow-[10px_10px_0_0_#1A1A1A] translate-x-[-4px] translate-y-[-4px]'
                  : 'bg-white shadow-[6px_6px_0_0_#1A1A1A] hover:translate-y-[-2px]',
              ]"
            >
              <button
                class="w-full flex items-center justify-between gap-6 px-8 py-7 text-left outline-none"
                @click="toggle(i)"
              >
                <span
                  class="font-black text-lg sm:text-xl text-[#1A1A1A] leading-tight uppercase tracking-tighter"
                >
                  {{ faq.q }}
                </span>
                <span
                  :class="[
                    'w-12 h-12 rounded-2xl border-[3px] border-[#1A1A1A] flex items-center justify-center shrink-0 transition-all duration-500 shadow-[3px_3px_0_0_#1A1A1A]',
                    openIdx === i
                      ? 'bg-[#A855F7] rotate-[135deg] shadow-none translate-x-1 translate-y-1'
                      : 'bg-[#FFD93D]',
                  ]"
                >
                  <i
                    :class="[
                      'bi bi-plus-lg text-xl font-black',
                      openIdx === i ? 'text-white' : 'text-[#1A1A1A]',
                    ]"
                  ></i>
                </span>
              </button>

              <div
                class="transition-all duration-500 ease-in-out overflow-hidden"
                :style="{ maxHeight: openIdx === i ? '300px' : '0px' }"
              >
                <div class="px-8 pb-8">
                  <div class="h-[2px] bg-[#1A1A1A]/10 w-full mb-6"></div>
                  <p class="text-[#4B5563] text-base leading-relaxed font-bold">
                    {{ faq.a }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.nb-dot-grid-dark {
  background-image: radial-gradient(circle, #1a1a1a 1.5px, transparent 1.5px);
  background-size: 32px 32px;
}
</style>
