


$(document).ready(function(){


	$("#adasearch_box").autocomplete({
		
		source: 'ajax/sphinxjax.php?return_type=json',
		    position: {my: "right top", at:"right bottom", collision:"fit"},
		    minLength: 3,
		    delay: 200,
		    focus: function(event,ui){
		    return false;
		},
		    open: function(){$('.ui-menu').width(310);},
		    select: function(event, ui){
		    if(ui.item.value.substr(0,1) == 'p')
			{
			    pid = ui.item.value.substr(1);
			    window.location.href = '/products/'+ pid;
			}
		    return false;
		}
		
	    }).data( "autocomplete" )._renderItem = function( ul, item ) {
	    return $( "<li></li>" ).data( "item.autocomplete", item )
	    .append('<a><img src="'+item.attrs.products_image+'" style="display: inline-block; vertical-align:middle;" /><div style="display: inline-block; margin:3px; margin-top: 5px; height:40px;  width: 250px; vertical-align:middle; overflow:hidden" >' + item.attrs.products_name + "</div></a>")
	    .appendTo( ul );
	};

	
	$("#adasearch_box").closest("form").submit(function(){
		if($("#adasearch_box").val() == '')
		    return false;
	    });
	
    });