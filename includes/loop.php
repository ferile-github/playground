<article class="<?= "$value[class] card grid-rows-subgrid row-span-5 / grid gap-0 mb-xl" ?>">
	<h2 class="h4 self-end mb-xs">
		<?= $key+1 . ' '. $value['title'] ?>
		</h2>
	<p class="mb-xs">
		<small>
			<?= "$value[date]"?>
		</small>
	</p>

	<p class="mb-md">
		<?= "$value[content]"?>
	</p>

	<p>
		<a href="#" class="btn btn-primary">Read More</a>
	</p>

	<figure class="row-start-2 relative mb-sm">
		<?= "<img src='$value[image]' class='object-cover h-[300px] w-full $value[imageclass]' loading='lazy'> "?>
	</figure>
</article>
