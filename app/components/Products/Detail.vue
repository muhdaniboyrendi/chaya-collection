<script setup>
const { productList } = useProductStore();
const route = useRoute();

const slug = route.params.slug;

const productDetail = computed(() => {
  return productList.find((p) => p.slug === slug);
});
</script>

<template>
  <section class="bg-[#F0F0F0] pt-28 lg:pt-32 pb-16 relative overflow-hidden">
    <div class="px-3 md:px-6 mb-4">
      <h1 class="text-2xl text-black font-bold tracking-tight">
        {{ productDetail?.nama }}
      </h1>
    </div>

    <div class="px-3 md:px-6 grid md:grid-cols-2 gap-3">
      <div
        v-for="(item, index) in productDetail.detail"
        :key="index"
        class="bg-white p-3 rounded-xl border-2 border-black shadow-[4px_4px_0_0_#1A1A1A]"
      >
        <div class="w-full flex gap-3">
          <NuxtImg
            :src="item?.image"
            width="300"
            height="300"
            loading="lazy"
            format="webp"
            placeholder
            class="w-1/3 aspect-square object-cover object-center rounded-md"
          />

          <div>
            <p class="text-lg text-black font-semibold mb-2">{{ item.name }}</p>
            <p class="italic">
              Rp
              <span class="text-2xl text-black font-bold not-italic">{{
                item?.price
              }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
