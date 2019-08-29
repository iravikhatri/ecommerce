$(document).ready(function () {

    $(function () {
        var colpick = $('.demo').each(function () {
            $(this).minicolors({
                control: $(this).attr('data-control') || 'hue',
                inline: $(this).attr('data-inline') === 'true',
                letterCase: 'lowercase',
                opacity: false,
                change: function (hex, opacity) {
                    if (!hex) return;
                    if (opacity) hex += ', ' + opacity;
                    try {
                        console.log(hex);
                    } catch (e) {}
                    $(this).select();
                },
                theme: 'bootstrap'
            });
        });
	});

	$("#color-primary").on("change", function(){
		let colorPrimay = $('#color-primary').val()
		$('.color_one').css("background-color", colorPrimay + ' !important');
		// $('.color_one').css('backgroundColor', colorPrimay)
		console.log(colorPrimay);
    });


    $(".carousel").carousel({
        interval: 3000
	});

	$(".overlay_hide").show();

	$("#image_overlay").change(function() {
		if(this.checked) {
			$('.overlay_hide').hide()
		}
	});

    // extra elements
    $("<br/><div class='product_price_padding'></div>").insertAfter(".oe_product section .product_price b");
    $("<span class='product_price'></span>").insertBefore(".oe_product section .product_price b");
    $("<div class='p-1'></div><br/>").insertBefore(".products_pager");
    $("<h3 class='product_categories_heading'>Product Categories</h3>").insertBefore("#o_shop_collapse_category > li:nth-child(1)");
	$("<h3 class='product_attribute_heading'>Attribute Filter</h3>").insertBefore("#products_grid_before > form > ul");
	$("<br/>").insertAfter("#product_details #add_to_cart");

    // hide elements
    if (window.screen.width <= 768) {
		$("#wrap > div.container.py-2.oe_website_sale > div:nth-child(3) > ul").hide();
		$("#products_grid section .product_price a").show();
	}
	else{
		$("#products_grid section .product_price a").hide();
	}

    // delete elements

    // products cards text length set
    for (var i = 2; i <= 8; i++) {
        var description, description_text, temp;
        for (var j = 1; j <= 3; j++) {
            temp =
                "#products_grid tr:nth-child(" + i + ") > td:nth-child(" + j + ") ";

            description = $(temp + "div.text-info.oe_subdescription > div");
            description_text = description.text();

            if (description_text.length >= 135) {
                description.empty();
                description_text = description_text.slice(0, 135);
                description.text(description_text + "...");
            }

            product_name = $(temp + "section > h6 > a");
            product_name_text = product_name.text();

            if (product_name_text.length >= 65) {
                product_name.empty();
                product_name_text = product_name_text.slice(0, 65);
                product_name.text(product_name_text + "...");
            }
        }
    }

    // products card and image height set for mobile
    var td_width = $("td").width() / 2;

    if (window.screen.width <= 768) {
        $(".oe_product").css("height", td_width + "px");
        $("#products_grid > table > tbody > tr > td > div > form > div").css("height", td_width + "px");
        $(".product_price").css("height", td_width - 95 + "px");
    }

    if (window.screen.width <= 360) {
        $(".product_price").css("height", td_width - 90 + "px");
    }

    $(".my_wish_quantity").on("DOMSubtreeModified", function () {
		$(".livila_list_number").remove();
		let temp = $( ".my_wish_quantity").text();
        $(`<sup class="p-1 ml-1 livila_list_number" style="border:1px solid black;">${temp}</sup>`).insertAfter("#livila_my_wish > a > img");
    });
});