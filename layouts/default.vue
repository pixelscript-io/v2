<template>
  <div>
    <div id="container"
         class="antialiased">
      <Nuxt />
    </div>
    <footer>
      <ul>
        <li>
          <NuxtLink to="/">About</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/work">Work</NuxtLink>
        </li>
        <li><a href="mailto:joe@pixelscript.io">Contact</a></li>
      </ul>

      <p class="copyright"><img src="~/assets/logomark.svg"
             class="logo fadeIn" /><span>&copy; 2024 Joe Berthelot - PixelScript</span></p>
    </footer>
  </div>
</template>

<script>
</script>


<style>
	@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;700&display=swap');

	html,
	body {
		overflow-x: hidden;
		background: #09090B;
	}

	#container {
		width: 100%;
		padding: 0 48px 0 48px;
	}

	aside {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

	footer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    background: Black;
    padding: 48px;
  }

	/* MQ - 1024 */
	@media (min-width: 1024px) {
		#container {
			width: 980px;
			padding: 0 0 0 64px;
		}

		aside {
			width: 680px;
			display: flex;
			flex-direction: column;
			align-items: flex-start;
		}

		footer {
			padding: 64px;
		}
	}

	/* MQ - 1280 */
	@media (min-width: 1280px) {
		#container {
			width: 1200px;
			padding: 0 0 0 100px;
		}

		aside {
			width: 680px;
			display: flex;
			flex-direction: column;
			align-items: flex-start;
		}

		footer {
			padding: 100px;
		}
	}

  footer > ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }

  footer > ul > li {
    margin: 0 0 8px 0;
    cursor: pointer;
  }

  footer > ul > li > a {
    font-family: 'Outfit', sans-serif;
    font-size: 18px;
    font-weight: 400;
    color: White;
    opacity: 0.6;
  }

  footer > ul > li > a:hover {
    opacity: 1;
    color: #33B1FF;
    text-decoration: underline;
  }

  footer > .copyright {
		display: flex;
		align-items: center;
    margin-top: 64px;
  }

	footer > .copyright > img {
		width: 24px;
		height: 24px;
		margin-right: 24px;
	}

	footer > .copyright > span {
		font-family: 'Outfit', sans-serif;
    font-size: 14px;
    font-weight: 300;
    color: White;
    opacity: 0.4;
	}
</style>
