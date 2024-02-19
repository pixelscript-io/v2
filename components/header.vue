<template>
  <header>
    <img src="~/assets/logomark.svg"
         class="logo fadeIn" />
    <nav>
      <ul>
        <li>
          <NuxtLink to="/">About</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/work">Work</NuxtLink>
        </li>
        <li><a href="mailto:joe@pixelscript.io">Contact</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {}
</script>

<style>
	header {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		padding: 48px 0;
	}

	header > .logo {
		margin-right: 0;
	}

	header > nav {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-end;
		width: 100%;
	}

	header > nav > ul {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-end;
		width: 100%;
	}

	header > nav > ul > li {
		font-family: 'Outfit', sans-serif;
		padding: 12px;
		margin: 0 0 0 8px;
		font-size: 16px;
		font-weight: 400;
		color: White;
		cursor: pointer;
		transition: all 0.25s ease-in-out;
	}

	header > nav > ul > li:hover {
		opacity: 1;
	}

	header > nav > ul > li.active {
		color: #33B1FF;
		opacity: 1;
	}

	header > nav > ul > li.active:hover {
		color: White;
		opacity: 1;
	}

	.nuxt-link-exact-active {
			color: #33B1FF;
			opacity: 1;
		}

		.nuxt-link-exact-active:hover {
			color: White;
			opacity: 1;
		}

	/* MQ - 768 */
	@media (min-width: 768px) {
		header {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: flex-start;
			width: 100%;
			padding: 64px 0;
		}

		header > .logo {
			margin-right: 64px;
		}

		header > nav {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: flex-start;
			width: 100%;
		}

		header > nav > ul {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: flex-start;
			width: 100%;
		}

		header > nav > ul > li {
			font-family: 'Outfit', sans-serif;
			padding: 12px;
			margin: 0 8px 0 0;
			font-size: 16px;
			font-weight: 400;
			color: White;
			cursor: pointer;
			transition: all 0.25s ease-in-out;
		}

		header > nav > ul > li:hover {
			opacity: 1;
		}

		header > nav > ul > li.active {
			color: #33B1FF;
			opacity: 1;
		}

		header > nav > ul > li.active:hover {
			color: White;
			opacity: 1;
		}
	}

	/* MQ - 1280 */
	@media (min-width: 1280px) {
		header {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: flex-start;
			width: 100%;
			padding: 100px 0;
		}

		header > .logo {
			margin-right: 100px;
		}

		header > nav {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: flex-start;
			width: 100%;
			height: 100%;
		}

		header > nav > ul {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: flex-start;
			width: 100%;
			height: 100%;
		}

		header > nav > ul > li {
			font-family: 'Outfit', sans-serif;
			padding: 12px;
			margin: 0 8px 0 0;
			font-size: 16px;
			font-weight: 400;
			color: White;
			cursor: pointer;
			transition: all 0.25s ease-in-out;
		}

		header > nav > ul > li:hover {
			opacity: 1;
		}
	}
</style>