<?php
// set up url to link to relevant tab using ACF repeater fields - urls must be in same order as tabs
$i = 1;
if( have_rows('content') ): ?>
<?php while( have_rows('content') ): the_row();
?>
<a href="/tabpage#<?php echo $i; ?>">Content here</a>
<?php $i++; endwhile; ?>

<?php endif;

?>
