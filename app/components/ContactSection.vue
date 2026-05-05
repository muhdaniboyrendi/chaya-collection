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
  const waNumber = contactInfo.whatsapp.split("/").pop();
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
  <section id="kontak" class="bg-[#FBF7F0] py-20 lg:py-28">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="flex items-center gap-6 mb-14">
        <span
          v-motion
          :initial="{ opacity: 0, x: -50 }"
          :visible-once="{ opacity: 1, x: 0 }"
          :duration="1000"
          class="section-label"
          >Kontak</span
        >
        <p
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible-once="{ opacity: 1, y: 0 }"
          :duration="1000"
          class="text-[#8C7B6B] text-base max-w-xs leading-relaxed"
        >
          Siap membantu Anda! Hubungi kami dan kami akan segera merespons.
        </p>
      </div>

      <!-- Grid Form + Info Cards -->
      <div class="grid lg:grid-cols-2 gap-12">
        <!-- Kiri - Form -->
        <div
          v-motion
          :initial="{ opacity: 0, x: -100 }"
          :visible-once="{ opacity: 1, x: 0 }"
          :duration="1000"
          class="bg-white border border-[#E8D8C0] rounded-3xl p-8"
        >
          <h3 class="font-display text-2xl font-700 text-[#1A1208] mb-6">
            Kirim Pesan via WhatsApp
          </h3>

          <div class="space-y-5">
            <div>
              <label class="block text-sm font-semibold text-[#1A1208] mb-2"
                >Nama Lengkap *</label
              >
              <input
                v-model="form.nama"
                type="text"
                placeholder="Contoh: Budi Santoso"
                class="w-full border border-[#E8D8C0] rounded-xl px-4 py-3 text-sm text-[#1A1208] placeholder-[#C0AFA0] focus:outline-none focus:border-[#C9954C] focus:ring-2 focus:ring-[#C9954C]/20 transition-all bg-[#FBF7F0]"
              />
            </div>

            <div>
              <label class="block text-sm font-semibold text-[#1A1208] mb-2"
                >Layanan yang Dibutuhkan</label
              >
              <select
                v-model="form.layanan"
                class="w-full border border-[#E8D8C0] rounded-xl px-4 py-3 text-sm text-[#1A1208] focus:outline-none focus:border-[#C9954C] focus:ring-2 focus:ring-[#C9954C]/20 transition-all bg-[#FBF7F0] appearance-none"
              >
                <option value="" disabled>Pilih layanan...</option>
                <option v-for="opt in layananOptions" :key="opt" :value="opt">
                  {{ opt }}
                </option>
              </select>
            </div>

            <div>
              <label class="block text-sm font-semibold text-[#1A1208] mb-2"
                >Pesan / Keterangan *</label
              >
              <textarea
                v-model="form.pesan"
                rows="4"
                placeholder="Ceritakan kebutuhan jahit Anda, termasuk ukuran, bahan, atau model yang diinginkan..."
                class="w-full border border-[#E8D8C0] rounded-xl px-4 py-3 text-sm text-[#1A1208] placeholder-[#C0AFA0] focus:outline-none focus:border-[#C9954C] focus:ring-2 focus:ring-[#C9954C]/20 transition-all bg-[#FBF7F0] resize-none"
              ></textarea>
            </div>

            <button
              @click="handleSubmit"
              :disabled="!form.nama || !form.pesan"
              class="w-full flex items-center justify-center gap-2.5 bg-[#1A1208] text-[#FBF7F0] px-6 py-4 rounded-xl font-bold text-sm hover:bg-[#C9954C] hover:text-[#1A1208] transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <i class="bi bi-whatsapp text-lg"></i>
              Kirim via WhatsApp
            </button>
          </div>
        </div>

        <!-- Kanan - Info Cards -->
        <div class="space-y-5">
          <div
            v-motion
            :initial="{ opacity: 0, x: 100 }"
            :visible-once="{ opacity: 1, x: 0 }"
            :duration="1000"
            class="bg-[#1A1208] rounded-3xl p-8"
          >
            <div class="flex items-center gap-3 mb-4">
              <div
                class="w-12 h-12 bg-[#C9954C] rounded-2xl flex items-center justify-center"
              >
                <i class="bi bi-whatsapp text-2xl text-[#1A1208]"></i>
              </div>
              <div>
                <div class="text-[#FBF7F0] font-semibold">WhatsApp</div>
                <div class="text-[#FBF7F0]/50 text-xs">Respon cepat</div>
              </div>
            </div>
            <p class="text-[#FBF7F0]/70 text-sm mb-5">
              Hubungi langsung untuk konsultasi, tanya ketersediaan bahan, atau
              konfirmasi pesanan.
            </p>
            <a
              :href="contactInfo.whatsapp"
              target="_blank"
              class="inline-flex items-center gap-2 bg-[#C9954C] text-[#1A1208] px-5 py-3 rounded-xl font-bold text-sm hover:bg-[#E8B96A] transition-colors"
            >
              Chat Sekarang
              <i class="bi bi-arrow-right"></i>
            </a>
          </div>

          <div
            v-motion
            :initial="{ opacity: 0, x: 100 }"
            :visible-once="{ opacity: 1, x: 0 }"
            :duration="1000"
            class="bg-white border border-[#E8D8C0] rounded-3xl p-8"
          >
            <div class="flex items-center gap-3 mb-4">
              <div
                class="w-12 h-12 bg-[#F0E8D8] rounded-2xl flex items-center justify-center"
              >
                <i class="bi bi-geo-alt-fill text-2xl text-[#C9954C]"></i>
              </div>
              <div>
                <div class="text-[#1A1208] font-semibold">Alamat Toko</div>
                <div class="text-[#8C7B6B] text-xs">Kunjungi kami</div>
              </div>
            </div>
            <p class="text-[#2D2416] text-sm leading-relaxed mb-4">
              Banjarsari RT 5/RW 6 No. 09, Koripan,<br />
              Matesih, Karanganyar,<br />
              Jawa Tengah 57781
            </p>
            <a
              href="https://maps.app.goo.gl/UHPqRwZQQsFoJhEG9"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 text-[#C9954C] text-sm font-semibold hover:text-[#1A1208] transition-colors"
            >
              <i class="bi bi-map"></i>
              Buka Google Maps
            </a>
          </div>

          <div
            v-motion
            :initial="{ opacity: 0, x: 100 }"
            :visible-once="{ opacity: 1, x: 0 }"
            :duration="1000"
            class="bg-[#C9954C] rounded-3xl p-8"
          >
            <div class="flex items-center gap-3 mb-5">
              <div
                class="w-12 h-12 bg-[#1A1208] rounded-2xl flex items-center justify-center"
              >
                <i class="bi bi-clock-fill text-2xl text-[#C9954C]"></i>
              </div>
              <div>
                <div class="text-[#1A1208] font-semibold">Jam Operasional</div>
                <div class="text-[#1A1208]/60 text-xs">Buka setiap hari</div>
              </div>
            </div>
            <div class="space-y-2">
              <div class="flex justify-between text-sm">
                <span class="text-[#1A1208]/80 font-medium">Senin – Sabtu</span>
                <span class="text-[#1A1208] font-bold">07.00 – 17.00</span>
              </div>
              <div class="flex justify-between text-sm">
                <span class="text-[#1A1208]/80 font-medium">Minggu</span>
                <span class="text-[#1A1208] font-bold">13.00 – 17.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Google Maps Embed -->
      <div class="mt-12">
        <div
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :visible-once="{ opacity: 1, y: 0 }"
          :duration="1000"
          class="bg-white border border-[#E8D8C0] rounded-3xl overflow-hidden"
        >
          <!-- Map Header Bar -->
          <div
            class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-6 py-5 border-b border-[#F0E8D8]"
          >
            <div class="flex items-center gap-3">
              <div
                class="w-10 h-10 bg-[#F0E8D8] rounded-xl flex items-center justify-center shrink-0"
              >
                <i class="bi bi-pin-map-fill text-[#C9954C] text-lg"></i>
              </div>
              <div>
                <div class="font-semibold text-[#1A1208] text-sm">
                  Lokasi Toko Kami
                </div>
                <div class="text-xs text-[#8C7B6B]">
                  Banjarsari RT 5/RW 6 No. 09, Koripan, Matesih, Karanganyar
                </div>
              </div>
            </div>
            <a
              href="https://maps.app.goo.gl/UHPqRwZQQsFoJhEG9"
              target="_blank"
              rel="noopener noreferrer"
              class="shrink-0 inline-flex items-center gap-2 bg-[#1A1208] text-[#FBF7F0] px-4 py-2.5 rounded-xl text-xs font-semibold hover:bg-[#C9954C] hover:text-[#1A1208] transition-all"
            >
              <i class="bi bi-box-arrow-up-right"></i>
              Buka di Google Maps
            </a>
          </div>

          <!-- Iframe — dibungkus ClientOnly agar aman dari SSR hydration mismatch -->
          <ClientOnly>
            <div class="relative w-full" style="height: 420px">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d434.53839880263786!2d111.0625025108162!3d-7.657089460109011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a2199c5f30f5b%3A0x3cab39b4a55dd5a3!2sChaya%20Collection!5e1!3m2!1sid!2sid!4v1777868304644!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style="border: 0; display: block"
                allowfullscreen
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="Lokasi Chaya Collection - Matesih, Karanganyar"
              />
            </div>

            <!-- Fallback saat SSR / belum mount -->
            <template #fallback>
              <div
                class="w-full flex items-center justify-center bg-[#F0E8D8]"
                style="height: 420px"
              >
                <div class="text-center">
                  <i class="bi bi-map text-4xl text-[#C9954C] mb-3 block"></i>
                  <p class="text-sm text-[#8C7B6B]">Memuat peta...</p>
                </div>
              </div>
            </template>
          </ClientOnly>
        </div>
      </div>
    </div>
  </section>
</template>
