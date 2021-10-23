<template>
  <div class="w-screen h-screen">
    <button @click="animate"
            class="absolute top-2 left-2 bg-white">
      animate
    </button>
    <div id="stack-container"
         class="relative flex justify-center w-screen h-screen mt-24">
      <div id="box-1"
           class="box absolute box-iso">
        <div class="box__face box__face--front">Design</div>
        <div class="box__face box__face--back"></div>
        <div class="box__face box__face--right"></div>
        <div class="box__face box__face--left"></div>
        <div class="box__face box__face--top"></div>
        <div class="box__face box__face--bottom">Design</div>
      </div>

      <div id="box-2"
           class="box absolute top-0 box-iso">
        <div class="box__face box__face--front">Frontend</div>
        <div class="box__face box__face--back"></div>
        <div class="box__face box__face--right"></div>
        <div class="box__face box__face--left"></div>
        <div class="box__face box__face--top"></div>
        <div class="box__face box__face--bottom">Frontend</div>
      </div>

      <div id="box-3"
           class="box absolute top-0 box-iso">
        <div class="box__face box__face--front">Backend</div>
        <div class="box__face box__face--back"></div>
        <div class="box__face box__face--right"></div>
        <div class="box__face box__face--left"></div>
        <div class="box__face box__face--top"></div>
        <div class="box__face box__face--bottom">Backend</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    animate() {
      const el = document.getElementById('box-1')

      if (el.classList.contains('box-iso')) {
        el.classList.remove('box-iso')
      } else {
        el.classList.add('box-iso')
      }
    },
  },
}
</script>

<style scoped>
	#box-1 {
		z-index: 3;
	}

	#box-2 {
		margin-top: 60px;
		z-index: 2;
	}

	#box-3 {
		margin-top: 120px;
		z-index: 1;
	}

	.box {
		width: 300px;
		height: 300px;
		transform-style: preserve-3d;
		transform: translateZ(-50px);
		transition: transform 1s;
	}

	.box-iso {
		transform: rotateX(60deg) rotateY(0deg) rotateZ(-45deg);
	}

	.box.show-front  { transform: translateZ( -50px) rotateY(   0deg); }
	.box.show-back   { transform: translateZ( -50px) rotateY(-180deg); }
	.box.show-right  { transform: translateZ(-150px) rotateY( -90deg); }
	.box.show-left   { transform: translateZ(-150px) rotateY(  90deg); }
	.box.show-top    { transform: translateZ(-100px) rotateX( -90deg); }
	.box.show-bottom { transform: translateZ(-100px) rotateX(  90deg); }


	.box__face {
		position: absolute;
		/* border: 2px solid transparent; */
		font-size: 18px;
		font-weight: bold;
		color: white;
		letter-spacing: 3px;
		text-align: center;
		text-transform: uppercase;
	}

	.box__face--front,
	.box__face--back {
		width: 300px;
		height: 300px;
		line-height: 300px;
	}

	.box__face--right,
	.box__face--left {
		width: 50px;
		height: 300px;
		left: 100px;
		line-height: 50px;
	}

	.box__face--top {
		width: 300px;
		height: 50px;
		top: 50px;
	}

	.box__face--bottom {
		width: 300px;
		height: 50px;
		top: 175px;
		line-height: 50px;
	}

	.box__face--front  { background: #6366F1; }
	.box__face--right  { background: transparent }
	.box__face--back   { background: transparent }
	.box__face--left   { background: rgb(99,102,241);
											 background: linear-gradient(90deg, rgba(99,102,241,0) 0%, rgba(79,70,229,1) 100%); }
	.box__face--top    { background: transparent }
	.box__face--bottom { background: rgb(99,102,241);
											 background: linear-gradient(0deg, rgba(99,102,241,0) 0%, rgba(67,56,202,1) 100%); }

	.box__face--front  { transform: rotateY(  0deg) translateZ( 50px); }
	.box__face--back   { transform: rotateY(180deg) translateZ( 0px); }

	.box__face--right  { transform: rotateY( 90deg) translateX(-25px) translateZ(175px); }
	.box__face--left   { transform: rotateY(-90deg) translateX(25px) translateZ(125px); }

	.box__face--top    { transform: rotateX( 90deg) translateY(25px) translateZ(75px); }
	.box__face--bottom { transform: rotateX(-90deg) translateY(-25px) translateZ(100px); }
</style>