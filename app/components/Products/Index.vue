<script setup>
const { productList } = useProductStore();
</script>

<template>
  <section
    id="toko"
    class="bg-[#F0F0F0] pt-28 lg:pt-32 pb-16 relative overflow-hidden"
  >
    <div class="max-w-7xl mx-auto px-4 relative">
      <!-- Section Header -->
      <div class="mb-4 lg:mb-6">
        <div class="max-w-2xl space-y-6">
          <h1
            class="font-black text-xl sm:text-3xl lg:text-4xl text-[#1A1A1A] leading-[0.9] tracking-tighter uppercase italic"
          >
            Lengkapi Kebutuhan <br />
            <span class="relative inline-block mt-2">
              <span class="relative z-10 text-[#A855F7]">Menjahitmu</span>
            </span>
          </h1>
        </div>
      </div>
    </div>

    <div class="px-2 lg:px-4">
      <!-- Products Grid -->
      <div
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-2 lg:gap-4"
      >
        <NuxtLink
          v-for="(produk, index) in productList"
          :key="index"
          :to="`/products/${produk?.slug}`"
        >
          <div
            class="group border-2 border-[#1A1A1A] rounded-xl shadow-[4px_4px_0_0_#1A1A1A] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition duration-300 relative overflow-hidden cursor-pointer"
          >
            <!-- Product Display -->
            <NuxtImg
              :src="produk?.image"
              width="300"
              height="300"
              loading="lazy"
              format="webp"
              placeholder
              class="w-full aspect-square object-cover object-center"
            />

            <!-- Product Info -->
            <div class="p-2 bg-white">
              <h2
                class="text-lg font-semibold text-[#1A1A1A] leading-tight tracking-tighter"
              >
                {{ produk?.nama }}
              </h2>

              <span class="text-xs text-black/60 italic tracking-tight"
                >Mulai dari :</span
              >
              <p
                class="text-xl font-black text-[#1A1A1A] italic tracking-tighter"
              >
                <span class="text-sm">Rp</span> {{ produk?.harga }}
              </p>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
