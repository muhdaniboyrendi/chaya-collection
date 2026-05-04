<script setup>
const keunggulan = [
  {
    icon: 'bi-award-fill',
    title: 'Berpengalaman 15+ Tahun',
    desc: 'Kami telah dipercaya oleh ratusan pelanggan sejak tahun 2009 dengan kualitas yang terus terjaga.',
  },
  {
    icon: 'bi-hand-thumbs-up-fill',
    title: 'Hasil Rapi & Presisi',
    desc: 'Setiap jahitan dikerjakan dengan teliti dan penuh perhatian untuk hasil yang memuaskan.',
  },
  {
    icon: 'bi-clock-fill',
    title: 'Tepat Waktu',
    desc: 'Kami menghargai waktu Anda dan berkomitmen untuk menyelesaikan pesanan sesuai jadwal.',
  },
  {
    icon: 'bi-currency-exchange',
    title: 'Harga Bersahabat',
    desc: 'Kualitas premium dengan harga yang terjangkau. Tersedia paket harga untuk berbagai kebutuhan.',
  },
]
</script>

<template>
  <section id="tentang" class="bg-[#1A1208] py-20 lg:py-28 relative overflow-hidden">
    <!-- Decorative -->
    <div class="absolute right-0 top-0 bottom-0 w-1/3 opacity-5">
      <svg viewBox="0 0 300 600" class="w-full h-full" preserveAspectRatio="xMidYMid slice">
        <pattern id="fab2" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
          <circle cx="15" cy="15" r="1.5" fill="#C9954C"/>
        </pattern>
        <rect width="300" height="600" fill="url(#fab2)"/>
      </svg>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

      <!-- Section Header -->
      <div class="flex items-center gap-6 mb-14">
        <span class="section-label">Tentang Kami</span>
      </div>

      <div class="grid lg:grid-cols-2 gap-16 items-center">

        <!-- Left - Story -->
        <div class="space-y-8">
          <h2 class="font-display text-3xl sm:text-4xl lg:text-5xl font-700 text-[#FBF7F0] leading-tight">
            Keluarga Penjahit yang
            <span class="italic text-[#C9954C]">Berdedikasi</span>
          </h2>

          <div class="space-y-4 text-[#FBF7F0]/70 leading-relaxed">
            <p>
              Chaya Collection berdiri sejak tahun 2009 sebagai usaha keluarga yang dibangun
              dengan modal cinta terhadap seni menjahit. Berawal dari satu mesin jahit sederhana,
              kini kami telah melayani ratusan pelanggan setia dari Karanganyar dan sekitarnya.
            </p>
            <p>
              Selain jasa jahit, kami juga menyediakan toko perlengkapan jahit lengkap — dari
              benang, kain, jarum, resleting, hingga aksesori jahit lainnya — semua dalam satu tempat.
            </p>
          </div>

          <!-- Location card -->
          <div class="bg-[#2D2416] border border-[#3D3020] rounded-2xl p-6 space-y-3">
            <div class="flex items-start gap-3">
              <i class="bi bi-geo-alt-fill text-[#C9954C] text-xl shrink-0 mt-0.5"></i>
              <div>
                <div class="text-[#FBF7F0] font-semibold text-sm mb-1">Alamat Toko</div>
                <div class="text-[#FBF7F0]/60 text-sm leading-relaxed">
                  Banjarsari RT 5/RW 6 No. 09, Koripan,<br/>
                  Matesih, Karanganyar, Jawa Tengah 57781
                </div>
              </div>
            </div>
            <div class="flex items-center gap-3 pt-2 border-t border-[#3D3020]">
              <i class="bi bi-clock-fill text-[#C9954C] text-xl shrink-0"></i>
              <div>
                <div class="text-[#FBF7F0] font-semibold text-sm mb-0.5">Jam Buka</div>
                <div class="text-[#FBF7F0]/60 text-sm">Setiap Hari — 08.00 s/d 17.00 WIB</div>
              </div>
            </div>
            <a
              href="https://maps.google.com/?q=Banjarsari+Koripan+Matesih+Karanganyar"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-2 text-[#C9954C] text-sm font-semibold hover:text-[#E8B96A] transition-colors mt-2"
            >
              <i class="bi bi-map-fill"></i>
              Buka di Google Maps
            </a>
          </div>
        </div>

        <!-- Right - Keunggulan grid -->
        <div class="grid sm:grid-cols-2 gap-4">
          <div
            v-for="(item, i) in keunggulan"
            :key="i"
            :class="[
              'rounded-2xl p-6 border card-hover',
              i % 2 === 0
                ? 'bg-[#C9954C] border-transparent'
                : 'bg-[#2D2416] border-[#3D3020]',
            ]"
          >
            <div :class="[
              'w-11 h-11 rounded-xl flex items-center justify-center mb-5',
              i % 2 === 0 ? 'bg-[#1A1208]' : 'bg-[#3D3020]',
            ]">
              <i :class="['bi text-xl', item.icon, i % 2 === 0 ? 'text-[#C9954C]' : 'text-[#C9954C]']"></i>
            </div>
            <h3 :class="['font-display font-700 text-base mb-2 leading-snug', i % 2 === 0 ? 'text-[#1A1208]' : 'text-[#FBF7F0]']">
              {{ item.title }}
            </h3>
            <p :class="['text-xs leading-relaxed', i % 2 === 0 ? 'text-[#1A1208]/70' : 'text-[#FBF7F0]/60']">
              {{ item.desc }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
