<main class="container py-md">

	<section class="mb-xl">
		<h1 class="mb-lg">
			Navigation menu
		</h1>
		<?php include('./includes/navigation-menu.php') ?>
	</section>


	<section class="mb-xl">
		<h1 class="mb-lg">
			Image grid
		</h1>
		<div class="flex flex-col md:grid md:grid-cols-2 md:grid-rows-2 gap-gutter">
			<?php foreach ($imagegrid as $key => $value) : ?>
				<?php include('./includes/image-grid.php') ?>
			<?php endforeach ?>
		</div>
	</section>


	<section class="mb-xl">
		<h1 class="mb-lg">
			CSS Subgrid
		</h1>
		<div class="sm:grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-gutter">
			<?php foreach ($elements as $key => $value) : ?>
				<?php include('./includes/loop.php') ?>
			<?php endforeach ?>
		</div>
	</section>

</main>
