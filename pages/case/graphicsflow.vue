<template>
  <div>
    <aside>
      <Header />

      <h1>GraphicsFlow</h1>
      <p class="subtitle">Product Design - 2021</p>

      <div class="divider relative">
        <div></div>
        <div></div>
      </div>

      <p class="bio">Collaborating with Loom’s design team was exciting for two reasons. First, I was intrigued by their product and eager to use it. Second, all my interactions with their staff were positive and I love working with kind, genuine people.</p>

      <div class="image"></div>

      <article>
        <h3>Process</h3>
        <p>Loom requested I help restructure and redesign their design system, Lens, in Figma. Over 10 weeks, we identified necessary changers to make sure we were addressing the correct issues.</p>
        <p>I then restructured their design system focusing on the smallest pieces, like colors and typography, before rebuilding their components and establishing a structure for variables.</p>
        <p>Once all this was set in place, I created patterns and templates for ease of use. After finishing the design system, we defined guidelines and the rules for its use.</p>
        <p>We even use Loom to collaborate on this!</p>
      </article>

      <div class="image"></div>

      <article>
        <h3>AI</h3>
        <p>Loom requested I help restructure and redesign their design system, Lens, in Figma. Over 10 weeks, we identified necessary changers to make sure we were addressing the correct issues.</p>
        <p>I then restructured their design system focusing on the smallest pieces, like colors and typography, before rebuilding their components and establishing a structure for variables.</p>
        <p>Once all this was set in place, I created patterns and templates for ease of use. After finishing the design system, we defined guidelines and the rules for its use.</p>
        <p>We even use Loom to collaborate on this!</p>
      </article>

      <div class="image"></div>

      <div class="image"></div>
    </aside>
  </div>
</template>

<script>
export default {
  name: 'Index',
  transition: 'fade',
  data() {
    return {}
  },
  mounted() {},
  methods: {},
}
</script>

<style scoped>
	h1, h2 {
    font-family: 'Outfit', sans-serif;
    font-size: 48px;
    line-height: 1;
    font-weight: 700;
    color: White;
    margin: 0;
  }

  h2 {
    margin: 64px 0;
  }

	.subtitle {
    font-family: 'Outfit', sans-serif;
    font-size: 18px;
    font-weight: 400;
    color: White;
    margin: 0;
  }

	/* MQ - 1024 */
	@media (min-width: 1024px) {
		.subtitle {
      font-family: 'Outfit', sans-serif;
      font-size: 24px;
      font-weight: 400;
      color: White;
      margin: 0;
    }
	}

	.divider {
    height: 2px;
		width: 100%;
    display: flex;
    padding: 16px 0;
  }

  .divider > div:nth-child(1) {
    height: 2px;
		width: 48px;
    background-color: #0F62FE;
    margin: 0 8px 0 0;
  }

  .divider > div:nth-child(2) {
    background: rgba(255, 255, 255, 0.3);
    height: 2px;
    width: 100%;
  }

	/* MQ - 1024 */
	@media (min-width: 1024px) {
		.divider {
      height: 2px;
      width: 100%;
      display: flex;
      padding: 24px 0;
    }

    .divider > div:nth-child(1) {
      height: 2px;
      width: 48px;
      background-color: #0F62FE;
      margin: 0 8px 0 0;
    }

    .divider > div:nth-child(2) {
      background: rgba(255, 255, 255, 0.3);
      height: 2px;
      width: 100%;
    }
	}

	.bio {
    font-family: 'Outfit', sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: White;
    margin: 0;
  }

	/* MQ - 1024 */
	@media (min-width: 1024px) {
    .bio {
      font-family: 'Outfit', sans-serif;
      font-size: 18px;
      font-weight: 400;
      color: White;
      margin: 0;
    }
  }

	.image {
		width: 100%;
		aspect-ratio: 16 / 9;
		background-color: rgba(255, 255, 255, 0.3);
		margin: 64px 0;
	}

	.image + .image {
		margin-top: 0;
	}

	article {
    margin: 0 0 0 0;
  }

  article > p {
    font-family: 'Outfit', sans-serif;
    font-size: 16px;
    font-weight: 300;
    line-height: 28px;
    color: White;
    margin: 0 0 24px 0;
    opacity: 0.6;
  }

  article > p:last-of-type {
    margin: 0;
  }

	/* MQ - 1024 */
	@media (min-width: 1024px) {
    article {
      margin: 0 0 0 0;
    }

		article > h3 {
			font-family: 'Outfit', sans-serif;
			font-size: 24px;
			font-weight: 500;
			line-height: 1;
			color: White;
			margin: 0 0 24px 0;
		}

    article > p {
      font-family: 'Outfit', sans-serif;
      font-size: 18px;
      font-weight: 300;
      line-height: 32px;
      color: White;
      margin: 0 0 24px 0;
      opacity: 0.6;
    }
  }

  /* MQ - 1024 */
	@media (min-width: 1024px) {
		h1, h2 {
      font-family: 'Outfit', sans-serif;
      font-size: 64px;
      line-height: 1;
      font-weight: 700;
      color: White;
      margin: 0;
    }

    h2 {
      margin: 100px 0;
    }
	}
</style>
