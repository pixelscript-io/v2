<template>
  <div>
    <aside>
      <Header />

      <h1>JubyCards</h1>
      <p class="subtitle">Frontend Interface - 2024</p>

      <div class="divider relative">
        <div></div>
        <div></div>
      </div>

      <p class="bio">As an avid gym-goer combined with developer, I've always had my own vision for the perfect lifting-companion app. I couldn't find anything on the market that I was completely satisfied with, so I started building it from scratch in early 2023. Everything including the frontend, backend and design system has been hand-crafted by myself.</p>

      <article>
        <h3>The Tech</h3>
        <p>I'm extremely comfortable when working with Vue so naturally that's the framework I chose for the frontend. I needed something a little more robust than vanilla Vue, so I started off using Nuxt 2. In late 2023 Nuxt 3 entered its full release stage so I spent about a week upgrading the entire frontend to Nuxt 3 as well as switching to the Composition API that Vue 3 introduces.</p>
      </article>

      <div class="image">
        <img src="~/assets/juby4.png" />
      </div>

      <article>
        <h3>The Challenges</h3>
        <p>No matter the project, wearing every hat will introduce several challenges solely due to the fact that it's a ton of work to put on someones plate and this one has been no exception. Since day one I've faced numerous problems including learning new frameworks like AdonisJS, upgrading the frontend from Nuxt 2 to 3 and especially trying to wrap my brain around complex SQL database relations.</p>
      </article>

      <div class="image">
        <img src="~/assets/juby1.png" />
      </div>

      <article>
        <h3>Introducing AI</h3>
        <p>After reading a lot of documentation, guesswork and trying to interpret the OpenAI API examples that were written in Python I decided that I might be able to resolve my dataset problem with the OpenAI API. I got to work and wrote a few scripts that basically did the following:</p>
      </article>

      <div class="image">
        <img src="~/assets/juby2.png" />
      </div>

      <article>
        <h3>What's Next</h3>
        <p>Most of the backend work is now complete so I'm slowly adding in more smaller features such as rate limiting and cleaning up some of the logic. I'm currently working on two things: building a mobile version of the app using Ionic and creating custom AI models for workout generation.</p>
      </article>

      <div class="image">
        <img src="~/assets/juby3.png" />
      </div>
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

  .bio + article {
    margin-top: 48px;
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

    .image > img {
      width: 100%;
      aspect-ratio: 16 / 9;
      background-color: rgba(255, 255, 255, 0.3);
      margin: 64px 0;
    }
  }

	.image > img {
		width: 100%;
		aspect-ratio: 16 / 9;
		background-color: rgba(255, 255, 255, 0.3);
		margin: 48px 0;
	}

	.image + .image > img {
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

  article > h3 {
			font-family: 'Outfit', sans-serif;
			font-size: 20px;
			font-weight: 500;
			line-height: 1;
			color: White;
			margin: 0 0 18px 0;
		}

  article > p:last-of-type {
    margin: 0;
  }

  article > ol {
    list-style: none;
    padding: 0;
    margin: 24px 0 24px 24px;
  }

  article > ol > li {
    font-family: 'Outfit', sans-serif;
    font-size: 16px;
    font-weight: 300;
    line-height: 28px;
    color: White;
    margin: 0 0 12px 0;
    opacity: 0.6;
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
