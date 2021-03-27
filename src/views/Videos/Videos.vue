<template>
  <div class="videos">
    <b-container>
      <cards-button :cardsList="videos"></cards-button>
    </b-container>
  </div>
</template>

<script>
import CardsButton from "../../components/Card/CardsButton.vue";
export default {
  components: { CardsButton },
  name: "Videos",
  data: function () {
    return {
      videos: [
        {
          title: "This is why we dance | Shyamla",
          introduction:
            "In this powerful short talk, Shyamla, the founder and director of progressive South Asian performing arts company BINDI BOSSES, explains how they use dance and art to challenge traditional...",
          thumbnail: {
            alt: "video thumbnail",
            src: "#",
          },
          href: "/",
        },
        {
          title: "Easier | Mansionair",
          introduction:
            "Mansionair perform their song, Easier from their 2019 album, Shadowboxer live on stage at TEDxSydney 2020. Mansionair are Jack Froggatt, Lachlan Bostock and Alexander Nicholls. Mansionair’s global streaming numbers...",
          thumbnail: {
            alt: "video thumbnail",
            src: "#",
          },
          href: "/",
        },
        {
          title: "A Guzheng Improvisation In COVID Times | Mindy Meng Wang",
          introduction:
            "Mansionair perform their song, Easier from their 2019 album, Shadowboxer live on stage at TEDxSydney 2020. Mansionair are Jack Froggatt, Lachlan Bostock and Alexander Nicholls. Mansionair’s global streaming numbers...",
          thumbnail: {
            alt: "video thumbnail",
            src: "#",
          },
          href: "/",
        },
        {
          title: "Buttons Undone | Dog Trumpet",
          introduction:
            "In this powerful short talk, Shyamla, the founder and director of progressive South Asian performing arts company BINDI BOSSES, explains how they use dance and art to challenge traditional...",
          thumbnail: {
            alt: "video thumbnail",
            src: "#",
          },
          href: "#",
        },
        {
          title: "Buttons Undone | Dog Trumpet",
          introduction:
            'Iconic Australian musicians, Dog Trumpet, featuring Reg Mombassa and Peter O’Doherty perform "Lonely Death Cleaning Company", a song from their 2020 album Great South Road live at TEDxSydney 2020....',
          thumbnail: {
            alt: "video thumbnail",
            src: "#",
          },
          href: "#",
        },
        {
          title: "Buttons Undone | Dog Trumpet",
          introduction:
            "In this powerful short talk, Shyamla, the founder and director of progressive South Asian performing arts company BINDI BOSSES, explains how they use dance and art to challenge traditional...",
          thumbnail: {
            alt: "video thumbnail",
            src: "#",
          },
          href: "#",
        },
        {
          title: "Buttons Undone | Dog Trumpet",
          introduction:
            'Iconic Australian musicians, Dog Trumpet, featuring Reg Mombassa and Peter O’Doherty perform "Lonely Death Cleaning Company", a song from their 2020 album Great South Road live at TEDxSydney 2020....',
          thumbnail: {
            alt: "video thumbnail",
            src: "#",
          },
          href: "#",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/variable.scss";

.videos {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>