<template>
  <div>
    <aside>
      <Header />

      <h1>I'm Joe</h1>
      <p class="subtitle">Product Designer &amp; Frontend Developer</p>
      <div class="divider relative">
        <img src="boxes.svg"
             class="boxes" />
        <div></div>
        <div></div>
      </div>
      <p class="bio">Helping brands create beautiful, memorable and joyful experiences through web and mobile applications.</p>

      <article>
        <p>My name is Joe, and I bring over fifteen years of dedicated experience in crafting sophisticated and intuitive user interfaces. My professional journey has been marked by a diverse portfolio, encompassing projects for both small-scale local businesses and expansive, enterprise-level corporations. My expertise is not confined to design alone; I am also a seasoned application and web developer, with a specialization in Vue and NodeJS.
        </p>
        <p>Central to my approach is a singular, unwavering commitment: to prioritize and deliver exceptional customer experiences in every business and design decision. This guiding principle has been instrumental in my pursuit of excellence, ensuring that each project not only meets but exceeds user expectations, thereby fostering meaningful engagement and satisfaction.
        </p>
      </article>
    </aside>

    <div id="showcase">
      <div>
        <img src="logo1.svg"
             alt="American Express" />
      </div>
      <div>
        <img src="logo2.svg"
             alt="Integrate" />
      </div>
      <div>
        <img src="logo3.svg"
             alt="Galvanize" />
      </div>
      <div>
        <img src="logo4.svg"
             alt="Sevencube" />
      </div>
      <div>
        <img src="logo5.svg"
             alt="GraphicsFlow" />
      </div>
      <div>
        <img src="logo6.svg"
             alt="arfinn" />
      </div>
      <div>
        <img src="logo7.svg"
             alt="Tallwave" />
      </div>
      <div>
        <img src="logo8.svg"
             alt="InkSoft" />
      </div>
      <div>
        <img src="logo9.svg"
             alt="JubyCards" />
      </div>
      <div>
        <img src="logo10.svg"
             alt="ReadyCloud" />
      </div>
      <div>
        <img src="logo11.svg"
             alt="AppsFlyer" />
      </div>
      <div>
        <img src="logo12.svg"
             alt="California Pools &amp; Landscape" />
      </div>
    </div>

    <h2>Experience</h2>

    <div id="worklist">
      <div id="worklist-headings">
        <span class="heading-year">Year</span>
        <span class="heading-client">Client</span>
        <span class="heading-work">Role</span>
        <span class="heading-agency">Agency</span>
      </div>

      <div class="worklist-item">
        <span class="item-year">2023 - 2024</span>
        <span class="item-client">LiftLog</span>
        <span class="item-work">Lead Product Designer &amp; Full Stack Developer</span>
        <span class="item-agency">-</span>
      </div>
      <div class="worklist-item">
        <span class="item-year">2023 - 2024</span>
        <span class="item-client">JubyCards</span>
        <span class="item-work">Senior Product Designer &amp; Frontend Developer</span>
        <span class="item-agency">Sevencube</span>
      </div>
      <div class="worklist-item">
        <span class="item-year">2023 - 2024</span>
        <span class="item-client">Acorn</span>
        <span class="item-work">Senior Product Designer</span>
        <span class="item-agency">Sevencube</span>
      </div>
      <div class="worklist-item">
        <span class="item-year">2023</span>
        <span class="item-client">ArfinnMed</span>
        <span class="item-work">Senior Product Designer</span>
        <span class="item-agency">Sevencube</span>
      </div>
      <div class="worklist-item">
        <span class="item-year">2021 - 2024</span>
        <span class="item-client">Internal Projects</span>
        <span class="item-work">Senior Product Designer &amp; Frontend Developer</span>
        <span class="item-agency">Sevencube</span>
      </div>
      <div class="worklist-item">
        <span class="item-year">2020 - 2021</span>
        <span class="item-client">InkSoft</span>
        <span class="item-work">Lead Product Designer</span>
        <span class="item-agency">-</span>
      </div>
      <div class="worklist-item">
        <span class="item-year">2019</span>
        <span class="item-client">American Express</span>
        <span class="item-work">Senior Product Designer</span>
        <span class="item-agency">Tallwave</span>
      </div>
      <div class="worklist-item">
        <span class="item-year">2019</span>
        <span class="item-client">AppsFlyer</span>
        <span class="item-work">Product Designer</span>
        <span class="item-agency">-</span>
      </div>
      <div class="worklist-item">
        <span class="item-year">2019</span>
        <span class="item-client">California Pools &amp; Landscape</span>
        <span class="item-work">Lead Product Designer</span>
        <span class="item-agency">-</span>
      </div>
      <div class="worklist-item">
        <span class="item-year">2017 - 2019</span>
        <span class="item-client">Galvanize Inc</span>
        <span class="item-work">Professional UI/UX Mentor</span>
        <span class="item-agency">-</span>
      </div>
      <div class="worklist-item">
        <span class="item-year">2017 - 2019</span>
        <span class="item-client">Swapchain</span>
        <span class="item-work">Director of UI/UX Design &amp; Frontend Developer</span>
        <span class="item-agency">-</span>
      </div>
      <div class="worklist-item">
        <span class="item-year">2015 - 2018</span>
        <span class="item-client">Integrate</span>
        <span class="item-work">Senior UI/UX Designer</span>
        <span class="item-agency">-</span>
      </div>
      <div class="worklist-item">
        <span class="item-year">2013 - 2015</span>
        <span class="item-client">ReadyCloud</span>
        <span class="item-work">Creative Director</span>
        <span class="item-agency">-</span>
      </div>
      <div class="worklist-item">
        <span class="item-year">2010 - 2012</span>
        <span class="item-client">Local Businesses</span>
        <span class="item-work">Lead Graphic &amp; Web Designer</span>
        <span class="item-agency">NetShapers</span>
      </div>
    </div>
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

<style>
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

  .divider > div:nth-child(2) {
    height: 2px;
		width: 48px;
    background-color: #0F62FE;
    margin: 0 8px 0 0;
  }

  .divider > div:nth-child(3) {
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

    .divider > div:nth-child(2) {
      height: 2px;
      width: 48px;
      background-color: #0F62FE;
      margin: 0 8px 0 0;
    }

    .divider > div:nth-child(3) {
      background: rgba(255, 255, 255, 0.3);
      height: 2px;
      width: 100%;
    }
	}

  .divider > .boxes {
    display: none;
    position: absolute;
    top: -47px;
    right: -621px;
  }

  /* MQ - 1024 */
	@media (min-width: 1024px) {
    .divider > .boxes {
      display: block;
      position: absolute;
      top: -47px;
      right: -621px;
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

  article {
    margin: 64px 0 0 0;
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
      margin: 100px 0 0 0;
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

  #showcase {
    display: grid;
    margin: 64px 0;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(12, 1fr);
    width: 100%;
  }

  #showcase > div {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    aspect-ratio: 3 / 2;
    border-right: 1px solid rgba(255, 255, 255, 0.3);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    border-left: 1px solid rgba(255, 255, 255, 0.3);
  }

  #showcase > div:first-of-type {
    border-top: 1px solid rgba(255, 255, 255, 0.3);
  }

  #showcase > svg {
    fill: White;
  }

  /* Adjustments for 2 columns layout */
  @media (min-width: 640px) and (max-width: 1023px) {
    #showcase {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(6, 1fr);
      margin: 64px 0;
    }
    #showcase > div:nth-child(2n) {
      border-right: 1px solid rgba(255, 255, 255, 0.3);
      border-left: 0; /* Remove right border for every second item */
    }
    /* Add top border for 2nd item in the first row */
    #showcase > div:nth-child(2):nth-child(-n+2) {
      border-top: 1px solid rgba(255, 255, 255, 0.3);
    }
  }

  /* Adjustments for 3 columns layout */
  @media (min-width: 768px) and (max-width: 1023px) {
    #showcase {
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(4, 1fr);
      margin: 64px 0;
    }
    #showcase > div {
      border-right: 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.3);
      border-left: 0;
    }
    /* Add top border for 3rd item first row */
    #showcase > div:nth-child(3):nth-child(-n+3) {
      border-top: 1px solid rgba(255, 255, 255, 0.3);
    }
    /* Add left border for every fourth item */
    #showcase > div:nth-child(3n+1) {
      border-left: 1px solid rgba(255, 255, 255, 0.3);
    }
    /* Add right border to every third item */
    #showcase > div:nth-child(3n) {
      border-right: 1px solid rgba(255, 255, 255, 0.3);
    }
    /* Add right border to the 1st and 7th item */
    #showcase > div:nth-child(3n+1):nth-child(-n+7) {
      border-right: 1px solid rgba(255, 255, 255, 0.3);
    }
    /* Add right border to the fifth item */
    #showcase > div:nth-child(3n+2):nth-child(-n+5) {
      border-right: 1px solid rgba(255, 255, 255, 0.3);
    }
    /* Add left border to the last item */
    #showcase > div:last-of-type {
      border-left: 1px solid rgba(255, 255, 255, 0.3);
    }
  }

  /* Original 4 columns layout for larger screens */
  @media (min-width: 1024px) {
    #showcase {
      margin: 0 0 100px 0;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(3, 1fr);
      margin: 100px 0;
    }
    #showcase > div {
      border-right: 1px solid rgba(255, 255, 255, 0.3);
      border-bottom: 1px solid rgba(255, 255, 255, 0.3);
      border-left: 0;
    }
    /* Add top border for the first four items */
    #showcase > div:nth-child(-n+4) {
      border-top: 1px solid rgba(255, 255, 255, 0.3);
    }
    /* Add a left border for every fifth item */
    #showcase > div:nth-child(4n+1) {
      border-left: 1px solid rgba(255, 255, 255, 0.3);
    }
    /* Add a bottom border to the 9th item */
    #showcase > div:nth-last-child(-n+4):nth-child(4n+1) {
      border-bottom: 1px solid rgba(255, 255, 255, 0.3) !important;
    }
  }

  /* Reset bottom border for the last row elements in different layouts */
  @media (min-width: 640px) {
    #showcase > div:last-child,
    #showcase > div:nth-last-child(-n+2):nth-child(2n+1), /* For 2 columns layout */
    #showcase > div:nth-last-child(-n+3):nth-child(3n+1) { /* For 3 columns layout */
      border-bottom: 1px solid rgba(255, 255, 255, 0.3); /* Remove bottom border for last row elements */
    }
  }

  .testimonial {
    background: transparent;
    width: 680px;
    margin: 0 0 100px 0;
    display: flex;
    flex-direction: row;
  }

  .testimonial > .testi-border {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 2px;
    flex: 1;
  }

  .testimonial > .testi-border > div:nth-child(1) {
    background-color: #0F62FE;
    width: 2px;
    height: 48px;
    margin: 0 0 8px 0;
  }

  .testimonial > .testi-border > div:nth-child(2) {
    background-color: rgba(255, 255, 255, 0.3);
    width: 2px;
    flex: 1;
  }

  .testimonial > .testi-right {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    padding: 0 0 24px 36px;
  }

  .testimonial > .testi-right > .testi-title {
    font-family: 'Outfit', sans-serif;
    font-size: 24px;
    line-height: 48px;
    font-weight: 500;
    color: White;
    margin: 0 0 24px 0;
  }

  .testimonial > .testi-right > .testi-body {
    font-family: 'Outfit', sans-serif;
    font-size: 18px;
    font-weight: 300;
    color: White;
    margin: 0;
    opacity: 0.6;
  }

  .testimonial > .testi-right > .author {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin: 36px 0 0 0;
  }

  .testimonial > .testi-right > .author > .author-img {
    background: white;
    width: 56px;
    height: 56px;
    border-radius: 4px;
  }

  .testimonial > .testi-right > .author > .author-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin: 0 0 0 24px;
  }

  .testimonial > .testi-right > .author > .author-info > .author-name {
    font-family: 'Outfit', sans-serif;
    font-size: 18px;
    font-weight: 400;
    color: White;
    margin: 0;
  }

  .testimonial > .testi-right > .author > .author-info > .author-title {
    font-family: 'Outfit', sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: White;
    margin: 0;
    opacity: 0.6;
  }

  #worklist {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 0 100px 0;
  }

  #worklist > #worklist-headings {
    display: none;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
  }

  #worklist > #worklist-headings > span {
    font-family: 'Outfit', sans-serif;
    font-size: 18px;
    font-weight: 400;
    color: White;
    margin: 0 0 14px 0;
  }

  #worklist > #worklist-headings > .heading-year {
    flex: 1;
  }

  #worklist > #worklist-headings > .heading-client {
    flex: 1;
  }

  #worklist > #worklist-headings > .heading-work {
    flex: 2;
  }

  #worklist > #worklist-headings > .heading-agency {
    display: none;
    flex: 1;
  }

  .worklist-item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    padding: 4px 0;
    margin: 0 0 24px 0;
  }

  .worklist-item > span {
    font-family: 'Outfit', sans-serif;
    font-size: 14px;
    font-weight: 300;
    color: White;
    opacity: 0.6;
    margin: 0 0 0 0;
  }

  .worklist-item > .item-year {
    flex: 1;
  }

  .worklist-item > .item-client {
    flex: 1;
    opacity: 1;
    font-size: 18px;
  }

  .worklist-item > .item-client > a {
    font-family: 'Outfit', sans-serif;
    font-size: 18px;
    font-weight: 300;
    color: #33B1FF;
    opacity: 1;
    margin: 0 0 0 0;
    text-decoration: underline;
  }

  .worklist-item > .item-client > a:hover {
    font-family: 'Outfit', sans-serif;
    font-size: 18px;
    font-weight: 300;
    color: White;
    opacity: 1;
    margin: 0 0 0 0;
    text-decoration: underline;
  }

  .worklist-item > .item-work {
    flex: 2;
    font-size: 16px;
  }

  .worklist-item > .item-agency {
    display: none;
    flex: 1;
  }

  /* MQ - 1024 */
	@media (min-width: 1024px) {
    #worklist {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin: 0 0 100px 0;
    }

    #worklist > #worklist-headings {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
    }

    #worklist > #worklist-headings > span {
      font-family: 'Outfit', sans-serif;
      font-size: 24px;
      font-weight: 400;
      color: White;
      margin: 0 0 18px 0;
    }

    #worklist > #worklist-headings > .heading-year {
      flex: 1;
    }

    #worklist > #worklist-headings > .heading-client {
      flex: 1;
    }

    #worklist > #worklist-headings > .heading-work {
      flex: 2;
    }

    #worklist > #worklist-headings > .heading-agency {
      display: flex;
      flex: 1;
    }

    .worklist-item {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-start;
      width: 100%;
      padding: 4px 0;
      margin: 0;
    }

    .worklist-item > span {
      font-family: 'Outfit', sans-serif;
      font-size: 16px;
      font-weight: 300;
      color: White;
      opacity: 0.6;
      margin: 0 0 0 0;
    }

    .worklist-item > .item-year {
      flex: 1;
    }

    .worklist-item > .item-client {
      flex: 1;
      opacity: 1;
      font-size: 18px;
    }

    .worklist-item > .item-client > a {
      font-family: 'Outfit', sans-serif;
      font-size: 18px;
      font-weight: 300;
      color: #33B1FF;
      opacity: 1;
      margin: 0 0 0 0;
      text-decoration: underline;
    }

    .worklist-item > .item-client > a:hover {
      font-family: 'Outfit', sans-serif;
      font-size: 18px;
      font-weight: 300;
      color: White;
      opacity: 1;
      margin: 0 0 0 0;
      text-decoration: underline;
    }

    .worklist-item > .item-work {
      flex: 2;
      font-size: 16px;
    }

    .worklist-item > .item-agency {
      display: flex;
      flex: 1;
    }
  }
</style>
