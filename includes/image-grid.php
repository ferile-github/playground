<figure class="<?= $value['class'] ?> relative">

	<?= "<img src='$value[image]' class='object-cover object-center $value[imageclass]' loading='lazy'> "?>

	<figcaption class="absolute inset-0 top-auto  bg-opacity-70 bg-white p-2">
		<?= "<p class='h5'>$value[title]</p> "?>
	</figcaption>

</figure>
