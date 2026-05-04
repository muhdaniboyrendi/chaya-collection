<script setup>
const keunggulan = [
  {
    icon: "bi-award-fill",
    title: "Berpengalaman 15+ Tahun",
    desc: "Dipercaya ratusan pelanggan sejak 2009 dengan standar kualitas jahitan yang selalu terjaga.",
  },
  {
    icon: "bi-hand-thumbs-up-fill",
    title: "Hasil Rapi & Presisi",
    desc: "Setiap jahitan dikerjakan langsung dengan teliti dan penuh perhatian untuk hasil yang memuaskan.",
  },
  {
    icon: "bi-clock-fill",
    title: "Tepat Waktu",
    desc: "Kami menghargai waktu Anda dan berkomitmen untuk menyelesaikan pesanan sesuai jadwal.",
  },
  {
    icon: "bi-currency-exchange",
    title: "Harga Bersahabat",
    desc: "Kualitas tangan terampil dengan harga yang terjangkau. Tersedia estimasi harga di awal.",
  },
];
</script>

<template>
  <section
    id="tentang"
    class="bg-[#1A1208] py-20 lg:py-28 relative overflow-hidden"
  >
    <!-- Decorative -->
    <div
      class="absolute right-0 top-0 bottom-0 w-1/3 opacity-5 pointer-events-none"
    >
      <svg
        viewBox="0 0 300 600"
        class="w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <pattern
          id="fab2"
          x="0"
          y="0"
          width="30"
          height="30"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="15" cy="15" r="1.5" fill="#C9954C" />
        </pattern>
        <rect width="300" height="600" fill="url(#fab2)" />
      </svg>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <!-- Section Header -->
      <div class="flex items-center gap-6 mb-14">
        <span
          v-motion
          :initial="{ opacity: 0, x: -50 }"
          :visible-once="{ opacity: 1, x: 0 }"
          :duration="1000"
          class="section-label text-[#C9954C]"
          >Tentang Kami</span
        >
      </div>

      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Kiri - Story -->
        <div class="space-y-8">
          <h2
            v-motion
            :initial="{ opacity: 0, x: -100 }"
            :visible-once="{ opacity: 1, x: 0 }"
            :duration="1000"
            class="font-display text-3xl sm:text-4xl lg:text-5xl font-700 text-[#FBF7F0] leading-tight"
          >
            Satu Tangan,
            <span class="italic text-[#C9954C]">Ribuan</span>
            Jahitan
          </h2>

          <div class="space-y-4 text-[#FBF7F0]/70 leading-relaxed">
            <p
              v-motion
              :initial="{ opacity: 0, x: -100 }"
              :visible-once="{ opacity: 1, x: 0 }"
              :duration="1000"
            >
              Chaya Collection berdiri sejak 2009 — dijalankan oleh seorang
              penjahit berpengalaman yang mengerjakan setiap pesanan secara
              langsung, dari awal hingga selesai. Bukan produksi massal, bukan
              hasil mesin — setiap jahitan adalah hasil dari keahlian dan
              perhatian penuh.
            </p>
            <p
              v-motion
              :initial="{ opacity: 0, x: -100 }"
              :visible-once="{ opacity: 1, x: 0 }"
              :duration="1000"
            >
              Dengan pengalaman lebih dari 15 tahun, kami memahami bahwa pakaian
              yang baik bukan hanya soal tampilan — tapi soal kenyamanan,
              ketepatan ukuran, dan detail yang tidak terlihat namun sangat
              terasa.
            </p>
          </div>

          <!-- Highlight strip -->
          <div class="grid grid-cols-3 gap-3 pt-2">
            <div
              v-for="(item, index) in [
                { icon: 'bi-scissors', label: 'Dikerjakan sendiri' },
                { icon: 'bi-rulers', label: 'Ukuran presisi' },
                { icon: 'bi-patch-check-fill', label: 'Kualitas terjamin' },
              ]"
              :key="item.label"
              v-motion
              :initial="{ opacity: 0, y: 50 }"
              :visible-once="{ opacity: 1, y: 0 }"
              :delay="index * 200"
              :duration="1000"
              class="flex flex-col items-center text-center gap-2 bg-[#2D2416] rounded-2xl p-4 border border-[#3D3020]"
            >
              <i :class="['bi text-xl text-[#C9954C]', item.icon]"></i>
              <span class="text-[#FBF7F0]/70 text-xs leading-snug">{{
                item.label
              }}</span>
            </div>
          </div>

          <!-- Location card -->
          <div
            v-motion
            :initial="{ opacity: 0, x: -100 }"
            :visible-once="{ opacity: 1, x: 0 }"
            :duration="1000"
            class="bg-[#2D2416] border border-[#3D3020] rounded-2xl p-6 space-y-3"
          >
            <div class="flex items-start gap-3">
              <i
                class="bi bi-geo-alt-fill text-[#C9954C] text-xl shrink-0 mt-0.5"
              ></i>
              <div>
                <div class="text-[#FBF7F0] font-semibold text-sm mb-1">
                  Alamat Toko
                </div>
                <div class="text-[#FBF7F0]/60 text-sm leading-relaxed">
                  Banjarsari RT 5/RW 6 No. 09, Koripan,<br />
                  Matesih, Karanganyar, Jawa Tengah 57781
                </div>
              </div>
            </div>
            <div class="flex items-center gap-3 pt-2 border-t border-[#3D3020]">
              <i class="bi bi-clock-fill text-[#C9954C] text-xl shrink-0"></i>
              <div>
                <div class="text-[#FBF7F0] font-semibold text-sm mb-0.5">
                  Jam Buka
                </div>
                <div class="text-[#FBF7F0]/60 text-sm">
                  Setiap Hari — 07.00 s/d 17.30 WIB
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Kanan - Keunggulan grid -->
        <div class="grid sm:grid-cols-2 gap-4">
          <div
            v-for="(item, i) in keunggulan"
            :key="i"
            v-motion
            :initial="{ opacity: 0, x: 100 }"
            :visible-once="{ opacity: 1, x: 0 }"
            :duration="1000"
            :class="[
              'rounded-2xl p-6 border card-hover',
              i % 2 === 0
                ? 'bg-[#C9954C] border-transparent'
                : 'bg-[#2D2416] border-[#3D3020]',
            ]"
          >
            <div
              :class="[
                'w-11 h-11 rounded-xl flex items-center justify-center mb-5',
                i % 2 === 0 ? 'bg-[#1A1208]' : 'bg-[#3D3020]',
              ]"
            >
              <i :class="['bi text-xl text-[#C9954C]', item.icon]"></i>
            </div>
            <h3
              :class="[
                'font-display font-700 text-base mb-2 leading-snug',
                i % 2 === 0 ? 'text-[#1A1208]' : 'text-[#FBF7F0]',
              ]"
            >
              {{ item.title }}
            </h3>
            <p
              :class="[
                'text-xs leading-relaxed',
                i % 2 === 0 ? 'text-[#1A1208]/70' : 'text-[#FBF7F0]/60',
              ]"
            >
              {{ item.desc }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
