<?php

// Let's set up the gutenberg block :)
function cp_portfolio_block() {

	$dir 		= dirname( __FILE__ );
	$index_js 	= 'backend/block.js';

	// Script
	wp_register_script(
		'portfolio_block_script',
		plugins_url( $index_js, __FILE__ ),
		array(
			'wp-blocks',
			'wp-i18n',
			'wp-element',
			'wp-components',
			'wp-editor'
		),
		filemtime( "$dir/$index_js" )
	);

	// Styles
	wp_register_style(
		'portfolio_block_style',
		plugins_url( 'frontend/style.css', __FILE__ ),
		array( 'wp-edit-blocks' )
	);

	// Register the block
	register_block_type( 'portfolio/block', 
		array(
			'editor_script' 	=> 'portfolio_block_script',
			'editor_style' 		=> 'portfolio_block_style',
			'style'				=> 'portfolio_block_style',
			'render_callback' 	=> 'portfolio_block_handler',
			'attributes' 		=> array(
				'limit' 		=> [ 'default' => '-1', 'type' => 'string' ],
				'sortby' 		=> [ 'default' => 'name', 'type' => 'string' ],
				'columns' 		=> [ 'default' => '2', 'type' => 'string' ],
				'showdate' 		=> [ 'default' => 'true', 'type' => 'string' ],
				'showexcerpt' 	=> [ 'default' => 'false', 'type' => 'string' ],
				'showcategory'	=> [ 'default' => 'false', 'type' => 'string' ],
				'order' 		=> [ 'default' => 'ASC', 'type' => 'string' ],
				'cat' 			=> [ 'default' => '', 'type' => 'string' ]
			)
		)
	);
}
add_action( 'init', 'cp_portfolio_block' );

// Block handler
function portfolio_block_handler( $attributes ) {
	return cp_frontEnd_loop( $attributes['limit'], $attributes['sortby'], $attributes['columns'], $attributes['showdate'], $attributes['showexcerpt'], $attributes['showcategory'], $attributes['order'], $attributes['cat'] );
}
