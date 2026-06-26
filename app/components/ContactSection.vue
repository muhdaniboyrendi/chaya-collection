<script setup>
const form = reactive({
  nama: "",
  layanan: "",
  pesan: "",
});

function buildWaMessage() {
  return encodeURIComponent(
    `Halo Chaya Collection! 👋\n\n` +
      `Nama: ${form.nama}\n` +
      `Layanan: ${form.layanan}\n\n` +
      `Pesan:\n${form.pesan}`,
  );
}

function handleSubmit() {
  if (!form.nama || !form.pesan) return;
  // Pastikan variabel contactInfo sudah tersedia di scope atau ganti hardcode
  const waNumber = "62895629233434";
  window.open(`https://wa.me/${waNumber}?text=${buildWaMessage()}`, "_blank");
}

const layananOptions = [
  "Jahit Custom",
  "Permak & Reparasi",
  "Jahit Seragam",
  "Busana Muslim",
  "Beli Alat Jahit",
  "Konsultasi Desain",
  "Lainnya",
];
</script>

<template>
  <section
    id="kontak"
    class="bg-[#F0F0F0] py-20 lg:py-28 relative overflow-hidden"
  >
    <!-- Decorative dot grid -->
    <div
      class="nb-dot-grid-dark absolute inset-0 opacity-[0.05] pointer-events-none"
    ></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <!-- Section Header -->
      <div class="mb-14">
        <span
          v-motion
          :initial="{ opacity: 0, x: -30 }"
          :visible-once="{ opacity: 1, x: 0 }"
          :duration="600"
          class="inline-block bg-[#A855F7] rounded-xl border-[3px] border-[#1A1A1A] px-5 py-2 font-black text-xs text-white uppercase tracking-[0.2em] mb-6 shadow-[5px_5px_0_0_#1A1A1A]"
        >
          Hubungi Kami
        </span>
        <h2
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0 }"
          :duration="700"
          class="font-black text-5xl sm:text-7xl text-[#1A1A1A] leading-[0.85] tracking-tighter"
        >
          Mari Bicara Tentang<br />
          <span class="relative inline-block">
            <span class="relative z-10 italic text-[#1A1A1A]"
              >Pakaian Anda.</span
            >
            <span
              class="absolute bottom-2 left-0 right-0 h-6 bg-[#B4E4FF] z-0 border-2 border-[#1A1A1A] rounded-lg"
            ></span>
          </span>
        </h2>
      </div>

      <!-- Grid Form + Info Cards -->
      <div class="grid lg:grid-cols-2 gap-12">
        <!-- Left - Form -->
        <div
          v-motion
          :initial="{ opacity: 0, x: -50 }"
          :visible-once="{ opacity: 1, x: 0 }"
          :duration="700"
          class="bg-white rounded-[2.5rem] border-[3px] border-[#1A1A1A] p-8 sm:p-10 shadow-[12px_12px_0_0_#1A1A1A]"
        >
          <h3
            class="font-black text-2xl text-[#1A1A1A] mb-8 uppercase tracking-tighter italic"
          >
            Kirim Pesan Cepat
          </h3>

          <div class="space-y-6">
            <div>
              <label
                class="block text-xs font-black text-[#1A1A1A] mb-3 uppercase tracking-widest"
              >
                Siapa Nama Anda?
              </label>
              <input
                v-model="form.nama"
                type="text"
                placeholder="Misal: Erlan Azhari"
                class="w-full bg-[#F9F9F9] rounded-2xl border-[3px] border-[#1A1A1A] px-6 py-4 text-base text-[#1A1A1A] font-bold placeholder-[#A1A1A1] focus:outline-none focus:bg-[#B1AFFF]/10 focus:shadow-[4px_4px_0_0_#A855F7] transition-all"
              />
            </div>

            <div>
              <label
                class="block text-xs font-black text-[#1A1A1A] mb-3 uppercase tracking-widest"
              >
                Layanan yang Diinginkan
              </label>
              <div class="relative">
                <select
                  v-model="form.layanan"
                  class="w-full bg-[#F9F9F9] rounded-2xl border-[3px] border-[#1A1A1A] px-6 py-4 text-base text-[#1A1A1A] font-bold focus:outline-none focus:shadow-[4px_4px_0_0_#B4E4FF] transition-all appearance-none cursor-pointer"
                >
                  <option value="" disabled>Pilih kategori...</option>
                  <option v-for="opt in layananOptions" :key="opt" :value="opt">
                    {{ opt }}
                  </option>
                </select>
                <i
                  class="bi bi-chevron-down absolute right-6 top-1/2 -translate-y-1/2 text-xl pointer-events-none"
                ></i>
              </div>
            </div>

            <div>
              <label
                class="block text-xs font-black text-[#1A1A1A] mb-3 uppercase tracking-widest"
              >
                Detail Pesanan
              </label>
              <textarea
                v-model="form.pesan"
                rows="4"
                placeholder="Ceritakan model baju atau kebutuhan jahit Anda..."
                class="w-full bg-[#F9F9F9] rounded-2xl border-[3px] border-[#1A1A1A] px-6 py-4 text-base text-[#1A1A1A] font-bold placeholder-[#A1A1A1] focus:outline-none focus:shadow-[4px_4px_0_0_#FFD93D] transition-all resize-none"
              ></textarea>
            </div>

            <button
              @click="handleSubmit"
              :disabled="!form.nama || !form.pesan"
              class="w-full flex items-center justify-center gap-3 bg-[#1A1A1A] rounded-3xl border-[3px] border-[#1A1A1A] px-8 py-5 font-black text-lg text-white uppercase tracking-widest shadow-[8px_8px_0_0_#FFD93D] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:translate-x-0 disabled:hover:translate-y-0"
            >
              <i class="bi bi-whatsapp text-2xl text-[#25D366]"></i>
              Kirim ke WhatsApp
            </button>
          </div>
        </div>

        <!-- Right - Info Cards -->
        <div class="flex flex-col justify-between gap-6">
          <!-- WhatsApp Card -->
          <div
            v-motion
            :initial="{ opacity: 0, x: 50 }"
            :visible-once="{ opacity: 1, x: 0 }"
            :duration="700"
            class="bg-[#B4E4FF] rounded-4xl border-[3px] border-[#1A1A1A] p-8 shadow-[8px_8px_0_0_#1A1A1A]"
          >
            <div class="flex items-center gap-5 mb-6">
              <div
                class="w-16 h-16 bg-white rounded-2xl border-[3px] border-[#1A1A1A] flex items-center justify-center shadow-[4px_4px_0_0_#1A1A1A]"
              >
                <i class="bi bi-chat-heart-fill text-[#A855F7] text-3xl"></i>
              </div>
              <div>
                <h4
                  class="font-black text-xl text-[#1A1A1A] uppercase leading-none mb-1"
                >
                  Respon Cepat
                </h4>
                <p class="font-bold text-[#1A1A1A]/60 text-sm">
                  Online: 07.00 - 17.00
                </p>
              </div>
            </div>
            <p class="font-bold text-[#1A1A1A] mb-8 leading-relaxed">
              Tim kami siap membantu konsultasi desain dan ukuran secara gratis
              melalui WhatsApp.
            </p>
            <a
              href="https://wa.me/62895629233434"
              class="text-sm font-black uppercase tracking-tighter underline decoration-[3px] decoration-[#A855F7] underline-offset-4 hover:text-[#A855F7] transition-colors"
            >
              Chat Admin Sekarang &rarr;
            </a>
          </div>

          <!-- Address Card -->
          <div
            v-motion
            :initial="{ opacity: 0, x: 50 }"
            :visible-once="{ opacity: 1, x: 0 }"
            :duration="700"
            :delay="100"
            class="bg-[#B1AFFF] rounded-4xl border-[3px] border-[#1A1A1A] p-8 shadow-[8px_8px_0_0_#1A1A1A]"
          >
            <div class="flex items-center gap-5 mb-6">
              <div
                class="w-16 h-16 bg-white rounded-2xl border-[3px] border-[#1A1A1A] flex items-center justify-center shadow-[4px_4px_0_0_#1A1A1A]"
              >
                <i class="bi bi-geo-alt-fill text-[#FFD93D] text-3xl"></i>
              </div>
              <h4
                class="font-black text-xl text-[#1A1A1A] uppercase leading-none"
              >
                Toko Kami
              </h4>
            </div>
            <p class="font-bold text-[#1A1A1A] mb-8 leading-relaxed">
              Banjarsari RT 5/RW 6 No. 09, Koripan,<br />
              Matesih, Karanganyar, Jawa Tengah, 57781
            </p>
            <a
              href="https://maps.app.goo.gl/UHPqRwZQQsFoJhEG9"
              target="_blank"
              class="text-sm font-black uppercase tracking-tighter underline decoration-[3px] decoration-[#FFD93D] underline-offset-4 hover:text-white transition-colors"
            >
              Petunjuk Jalan &rarr;
            </a>
          </div>

          <!-- Schedule Card -->
          <div
            v-motion
            :initial="{ opacity: 0, x: 50 }"
            :visible-once="{ opacity: 1, x: 0 }"
            :duration="700"
            :delay="200"
            class="bg-[#FFD93D] rounded-4xl border-[3px] border-[#1A1A1A] p-8 shadow-[8px_8px_0_0_#1A1A1A]"
          >
            <div class="flex items-center gap-4 mb-4">
              <i class="bi bi-clock-history text-2xl text-[#1A1A1A]"></i>
              <h4 class="font-black text-lg text-[#1A1A1A] uppercase">
                Jam Operasional
              </h4>
            </div>
            <div class="space-y-2 font-bold text-[#1A1A1A]">
              <div
                class="flex justify-between border-b-2 border-[#1A1A1A]/10 pb-2"
              >
                <span>Senin - Sabtu</span>
                <span>07.00 - 17.30</span>
              </div>
              <div class="flex justify-between pt-1">
                <span>Minggu</span>
                <span>13.00 - 17.30</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Map Embed -->
      <div class="mt-16">
        <div
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible-once="{ opacity: 1, y: 0 }"
          :duration="700"
          class="bg-white rounded-[3rem] border-4 border-[#1A1A1A] overflow-hidden shadow-[15px_15px_0_0_#1A1A1A]"
        >
          <div class="relative w-full h-112.5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d434.53839880263786!2d111.0625025108162!3d-7.657089460109011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a2199c5f30f5b%3A0x3cab39b4a55dd5a3!2sChaya%20Collection!5e1!3m2!1sid!2sid!4v1777868304644!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style="border: 0; filter: grayscale(0.2) contrast(1.1)"
              allowfullscreen
              loading="lazy"
            ></iframe>
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
