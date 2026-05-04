<script setup>
useSeoMeta({
  title: "Chaya Collection — Jasa Jahit & Toko Alat Jahit Matesih, Karanganyar",
  description:
    "Jasa jahit custom, permak pakaian, seragam & toko alat jahit terpercaya di Matesih, Karanganyar. Berpengalaman 15+ tahun. Hubungi kami sekarang!",
  ogTitle: "Chaya Collection — Jahitan Berkualitas, Harga Terjangkau",
  ogDescription:
    "Jasa jahit & toko perlengkapan jahit terpercaya di Matesih, Karanganyar. 15+ tahun pengalaman. Layani jahit custom, seragam, permak, dan busana muslim.",
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
        opens: "08:00",
        closes: "17:00",
      },
      {
        dayOfWeek: ["Sunday"],
        opens: "08:00",
        closes: "15:00",
      },
    ],
    priceRange: "$$",
  }),
]);
</script>

<template>
  <div>
    <TheNavbar />
    <main>
      <HeroSection />
      <LayananSection />
      <GallerySection />
      <TentangSection />
      <TestimoniSection />
      <FaqSection />
      <ContactSection />
    </main>
    <TheFooter />

    <!-- Floating WA Button -->
    <a
      :href="contactInfo.whatsapp"
      target="_blank"
      rel="noopener noreferrer"
      class="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-200"
      aria-label="Chat WhatsApp"
    >
      <i class="bi bi-whatsapp text-white text-2xl"></i>
    </a>
  </div>
</template>
