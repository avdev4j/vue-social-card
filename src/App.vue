<script>
import SocialCard from "@/components/SocialCard";

export default {
  components: {
    SocialCard
  },
  data() {
    return {
      shiba_card: {
        id: 1,
        name: 'Shiba Inu',
        description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n' +
            '      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n' +
            '      bred for hunting.',
        image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        image_alt: 'The Shiba Inu image'
      },
    }
  }
};
</script>

<template>
  <SocialCard :card=shiba_card></SocialCard>
</template>
