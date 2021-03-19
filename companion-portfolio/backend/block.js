
// Allow translations
var __                  = wp.i18n.__;

// Set up basic block info
var el                  = wp.element.createElement;
var ic 					= wp.editor.InspectorControls;
var tc					= wp.components.TextControl;
var sc 					= wp.components.SelectControl;
var ssr 				= wp.components.ServerSideRender;
var pb 					= wp.components.PanelBody;
var registerBlockType   = wp.blocks.registerBlockType;

// Set up block
registerBlockType( 'portfolio/block', {
    
    // Block info
    title: __( 'Portfolio', 'companion-portfolio' ), 
    description: __( 'Display your portfolio.', 'companion-portfolio' ),
    icon: 'category',
    category: 'layout',

    // Attributes
    attributes:  {
        limit : {
            default: '-1'
        },
        sortby: {
            default: 'name'
        },
        columns: {
            default: '2'
        },
        showdate: {
            default: 'true'
        },
        showexcerpt: {
            default: 'false'
        },
        showcategory: {
            default: 'false'
        },
        order: {
            default: 'ASC'
        },
        cat: {
            default: ''
        }
    },

    // Back-end
    edit( props ){

        const attributes        =  props.attributes;
        const setAttributes     =  props.setAttributes;

        // Functions to update attributes
        function change_limit( limit ) {
            setAttributes( {limit} );
        }
        function change_sortby( sortby ) {
            setAttributes( {sortby} );
        }
        function change_columns( columns ) {
            setAttributes( {columns} );
        }
        function change_showdate( showdate ) {
            setAttributes( {showdate} );
        }
        function change_showexcerpt( showexcerpt ) {
            setAttributes( {showexcerpt} );
        }
        function change_showcategory( showcategory ) {
            setAttributes( {showcategory} );
        }
        function change_order( order ) {
            setAttributes( {order} );
        }
        function change_cat( cat ) {
            setAttributes( {cat} );
        }

        // Display block preview and UI
        return el( 'div', {}, [

            // Preview the block with a PHP render callback
            el( ssr, {
                block: 'portfolio/block',
                attributes: attributes
            } ),

            // Settings
            el( ic, {},

                el( pb, { title: __( 'Portfolio settings', 'companion-portfolio' ), initialOpen: true },
                    [

                        el( tc, {
                            value: attributes.limit,
                            label: __( 'How many to show?', 'companion-portfolio' ),
                            onChange: change_limit,
                            help: __( '-1 to show all.', 'companion-portfolio' ),
                        }),

                        el( tc, {
                            value: attributes.cat,
                            label: __( 'Filter by category (optional)', 'companion-portfolio' ),
                            onChange: change_cat,
                            help: __( 'Use category title', 'companion-portfolio' ),
                        }),
                    
                        el( sc, {
                            value: attributes.columns,
                            label: __( 'Number of columns', 'companion-portfolio' ),
                            onChange: change_columns,
                            options: [
                                {value: '1', label: __( 'Single column', 'companion-portfolio' ) },
                                {value: '2', label: __( 'Two columns', 'companion-portfolio' ) },
                                {value: '3', label: __( 'Three columns', 'companion-portfolio' ) },
                                {value: '4', label: __( 'Four columns', 'companion-portfolio' ) },
                                {value: '5', label: __( 'Five columns', 'companion-portfolio' ) }
                            ]
                        }),

                        el( sc, {
                            value: attributes.showdate,
                            label: __( 'Show or hide date', 'companion-portfolio' ),
                            onChange: change_showdate,
                            options: [
                                {value: 'true', label: __( 'Show date', 'companion-portfolio' ) },
                                {value: 'false', label: __( 'Hide date', 'companion-portfolio' ) }
                            ]
                        }),

                        el( sc, {
                            value: attributes.showexcerpt,
                            label: __( 'Show or hide excerpt', 'companion-portfolio' ),
                            onChange: change_showexcerpt,
                            options: [
                                {value: 'true', label: __( 'Show excerpt', 'companion-portfolio' ) },
                                {value: 'false', label: __( 'Hide excerpt', 'companion-portfolio' ) }
                            ]
                        }),

                        el( sc, {
                            value: attributes.showcategory,
                            label: __( 'Show or hide categories', 'companion-portfolio' ),
                            onChange: change_showcategory,
                            options: [
                                {value: 'true', label: __( 'Show categories', 'companion-portfolio' ) },
                                {value: 'false', label: __( 'Hide categories', 'companion-portfolio' ) }
                            ]
                        }),

                        el( sc, {
                            value: attributes.sortby,
                            label: __( 'Order by', 'companion-portfolio' ),
                            onChange: change_sortby,
                            options: [
                                {value: 'date', label: __( 'Date', 'companion-portfolio' ) },
                                {value: 'title', label: __( 'Post title', 'companion-portfolio' ) },
                                {value: 'id', label: __( 'Post ID', 'companion-portfolio' ) }
                            ]
                        }),

                        el( sc, {
                            value: attributes.order,
                            label: __( 'Sorting', 'companion-portfolio' ),
                            onChange: change_order,
                            options: [
                                {value: 'ASC', label: __( 'Ascending', 'companion-portfolio' )+' (A-Z / 1-9)' },
                                {value: 'DESC', label: __( 'Descending', 'companion-portfolio' )+' (Z-A / 9-1)' }
                            ]
                        })
                    ]
                )
            )

        ] )
    },
    save() {
        return null;
    }
});