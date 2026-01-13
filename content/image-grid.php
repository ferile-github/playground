<h1 class="mb-lg">
	Image grid
</h1>
<div class="flex flex-col md:grid md:grid-cols-2 md:grid-rows-2 gap-gutter">
	<?php foreach ($imagegrid as $key => $value) : ?>
		<?php include('./includes/image-grid.php') ?>
	<?php endforeach ?>
</div>
