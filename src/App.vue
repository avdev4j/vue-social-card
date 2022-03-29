<script>
import { defineCustomElement } from 'vue'
import SocialCard from "@/components/SocialCard";

const SocialCardElement = defineCustomElement({
  name: 'App',
  components: {
    SocialCard
  },
  template: '<SocialCard :card=shiba_card></SocialCard>',
  data() {
    return {
      shiba_card: {
        id: 1,
        name: 'Shiba Inu',
        description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n' +
            '      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n' +
            '      bred for hunting.',
        image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      },
    }
  }
});

customElements.define('social-card-element', SocialCardElement)

document.body.appendChild(
  new SocialCardElement({
    // initial props (optional)
  })
)
</script>
