
<div class="woof">
	<div class="meow">
		<div id="slide1" class="slide">
		</div>

		<div id="slide2" class="slide">
		</div>

		<div id="slide3" class="slide">
		</div>

		<div id="slide4" class="slide header">
		</div>
	</div>
</div>

<style>
.woof {
  height: 100%;
  overflow: hidden;
}

.meow {
	perspective: 1px;
	transform-style: preserve-3d;
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
}

.slide {
  position: relative;
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
	transform-style: inherit;
}

.slide:before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}


.slide, .slide:before {
  background: 50% 50% / cover;
}

#slide1:before {
  background-image: url("https://picsum.photos/960/520");
  transform: translateZ(-1px) scale(2);
}

#slide2 {
  background-image: url("https://picsum.photos/960/400");
  z-index:2;
}

#slide3:before {
  background-image: url("https://picsum.photos/980/600");
  transform: translateZ(-1px) scale(2);
}


</style>
