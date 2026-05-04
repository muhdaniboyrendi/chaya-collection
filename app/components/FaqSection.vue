<script setup>
const faqs = [
  {
    q: "Berapa lama waktu pengerjaan jahitan?",
    a: "Waktu pengerjaan bervariasi tergantung tingkat kesulitan. Untuk jahit sederhana biasanya 3–5 hari, busana custom 1–2 minggu. Kami juga menerima pesanan express dengan biaya tambahan.",
  },
  {
    q: "Apakah bisa konsultasi desain sebelum memesan?",
    a: "Tentu! Kami sangat menyambut konsultasi terlebih dahulu. Anda bisa datang langsung ke toko atau konsultasi via WhatsApp. Tim kami siap membantu memilih model, bahan, dan warna yang sesuai.",
  },
  // {
  //   q: "Apakah tersedia layanan antar jemput bahan/pakaian?",
  //   a: "Untuk saat ini pengambilan dan pengiriman bisa dilakukan via layanan kurir pihak ketiga (JNE, J&T, dll) untuk wilayah yang tidak bisa dijangkau langsung. Silakan hubungi kami untuk detail pengaturan pengiriman.",
  // },
  {
    q: "Apakah menerima pesanan seragam dalam jumlah banyak?",
    a: "Ya! Kami melayani pesanan massal untuk seragam kantor, sekolah, organisasi, dan lainnya. Semakin banyak pesanan, semakin kompetitif harga yang bisa kami tawarkan. Hubungi kami untuk penawaran khusus.",
  },
  {
    q: "Bagaimana cara melakukan pemesanan?",
    a: "Sangat mudah! (1) Hubungi kami via WhatsApp untuk konsultasi, (2) Kami tentukan ukuran dan pilih bahan/model, (3) Berikan DP pembayaran, (4) Pakaian dikerjakan sesuai jadwal, (5) Ambil atau kirim ke alamat Anda.",
  },
  {
    q: "Apakah ada garansi kalau hasil jahitan tidak sesuai?",
    a: "Kepuasan pelanggan adalah prioritas kami. Jika ada ketidaksesuaian dengan kesepakatan awal, kami siap melakukan revisi tanpa biaya tambahan. Kami pastikan Anda puas dengan hasilnya.",
  },
];

const openIdx = ref(null);

function toggle(i) {
  openIdx.value = openIdx.value === i ? null : i;
}
</script>

<template>
  <section class="bg-[#1A1208] py-20 lg:py-28">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-16">
        <!-- Left header -->
        <div>
          <span class="section-label mb-8 inline-block">FAQ</span>
          <h2
            class="font-display text-3xl sm:text-4xl lg:text-5xl font-700 text-[#FBF7F0] leading-tight mb-6"
          >
            Pertanyaan yang
            <span class="italic text-[#C9954C]">Sering Ditanya</span>
          </h2>
          <p class="text-[#FBF7F0]/60 leading-relaxed mb-8">
            Tidak menemukan jawaban yang Anda cari? Jangan ragu untuk langsung
            menghubungi kami.
          </p>
          <a
            :href="contactInfo.whatsapp"
            target="_blank"
            class="inline-flex items-center gap-2 border-2 border-[#C9954C] text-[#C9954C] px-6 py-3 rounded-xl font-semibold text-sm hover:bg-[#C9954C] hover:text-[#1A1208] transition-all"
          >
            <i class="bi bi-chat-dots-fill"></i>
            Tanya Langsung
          </a>
        </div>

        <!-- Right accordion -->
        <div class="space-y-3">
          <div
            v-for="(faq, i) in faqs"
            :key="i"
            :class="[
              'rounded-2xl border overflow-hidden transition-all duration-300',
              openIdx === i
                ? 'border-[#C9954C] bg-[#2D2010]'
                : 'border-[#3D3020] bg-[#2D2416]',
            ]"
          >
            <button
              class="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              @click="toggle(i)"
            >
              <span
                :class="[
                  'font-semibold text-sm leading-snug transition-colors',
                  openIdx === i ? 'text-[#C9954C]' : 'text-[#FBF7F0]',
                ]"
              >
                {{ faq.q }}
              </span>
              <span
                :class="[
                  'w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300',
                  openIdx === i ? 'bg-[#C9954C] rotate-45' : 'bg-[#3D3020]',
                ]"
              >
                <i
                  :class="[
                    'bi bi-plus-lg text-sm',
                    openIdx === i ? 'text-[#1A1208]' : 'text-[#FBF7F0]',
                  ]"
                ></i>
              </span>
            </button>

            <!-- Content -->
            <div :class="['faq-content px-6', openIdx === i ? 'open' : '']">
              <p class="text-[#FBF7F0]/60 text-sm leading-relaxed pb-5">
                {{ faq.a }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
