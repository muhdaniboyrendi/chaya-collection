<script setup>
// Data kontak dipusatkan di sini jika ingin digunakan secara global
const contactInfo = {
  whatsapp: "https://wa.me/62895629233434",
};

useSeoMeta({
  title: "Chaya Collection — Jasa Jahit & Toko Alat Jahit Matesih, Karanganyar",
  description:
    "Jasa jahit custom, permak pakaian, seragam & toko alat jahit terpercaya di Matesih, Karanganyar. Berpengalaman 25+ tahun. Hubungi kami sekarang!",
  ogTitle: "Chaya Collection — Jahitan Berkualitas, Harga Terjangkau",
  ogDescription:
    "Jasa jahit & toko perlengkapan jahit terpercaya di Matesih, Karanganyar. 25+ tahun pengalaman. Layani jahit custom, seragam, permak, dan busana muslim.",
  ogType: "website",
  ogLocale: "id_ID",
  twitterCard: "summary_large_image",
});

useSchemaOrg([
  defineLocalBusiness({
    name: "Chaya Collection",
    description:
      "Jasa jahit & toko perlengkapan jahit terpercaya di Matesih, Karanganyar",
    address: {
      streetAddress: "Banjarsari RT 5/RW 6 No. 09, Koripan",
      addressLocality: "Matesih",
      addressRegion: "Karanganyar",
      postalCode: "57781",
      addressCountry: "ID",
    },
    openingHoursSpecification: [
      {
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "07:00",
        closes: "17:00",
      },
      {
        dayOfWeek: ["Sunday"],
        opens: "13:00",
        closes: "17:00",
      },
    ],
    priceRange: "$$",
  }),
]);
</script>

<template>
  <div class="selection:bg-[#B1AFFF] selection:text-[#1A1A1A]">
    <!-- Navigation -->
    <TheNavbar />

    <main>
      <!-- Sections -->
      <HeroSection />
      <LayananSection />
      <GallerySection />
      <TentangSection />
      <TestimoniSection />
      <FaqSection />
      <ContactSection />
    </main>

    <!-- Footer -->
    <TheFooter />

    <!-- Floating WA Button (Neubrutalism Style) -->
    <a
      :href="contactInfo.whatsapp"
      target="_blank"
      rel="noopener noreferrer"
      class="fixed bottom-8 right-8 z-40 w-16 h-16 bg-[#25D366] rounded-2xl border-[3px] border-[#1A1A1A] flex items-center justify-center shadow-[6px_6px_0_0_#1A1A1A] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-200 group"
      aria-label="Chat WhatsApp"
    >
      <i
        class="bi bi-whatsapp text-white text-3xl group-hover:scale-110 transition-transform"
      ></i>

      <!-- Tooltip / Label on Hover -->
      <span
        class="absolute right-20 bg-[#1A1A1A] text-white text-xs font-black py-2 px-4 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap uppercase tracking-widest border-2 border-[#1A1A1A] shadow-[4px_4px_0_0_#FFD93D]"
      >
        Tanya Sekarang
      </span>
    </a>
  </div>
</template>

<style>
/* Global Smooth Scroll */
html {
  scroll-behavior: smooth;
}

/* Typography Customization */
body {
  font-family: "Plus Jakarta Sans", sans-serif;
  color: #1a1a1a;
  -webkit-font-smoothing: antialiased;
}
</style>
