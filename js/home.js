var home = home || {};

home.showProduct = function () {
    $.ajax({
        url: "http://localhost:3000/products",
        method: "GET",
        dataType: "json",
        success: function (data) {
            $.each(data, function (i, v) {
                $('#products').append(
                    '<div class="col-md-4 col-sm-6 portfolio-item">' +
                        '<a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">' +
                            '<div class="portfolio-hover">' +
                                '<div class="portfolio-hover-content">' +
                                    '<i class="fas fa-plus fa-3x"></i>' +
                                '</div>' +
                            '</div>' +
                            '<img class="img-fluid" src="img/a1.jpg" alt="">' +
                        '</a>' +
                            '<div class="portfolio-caption">' +
                                '<h4>3ce Velvet lip Tint </h4>'+
                                '<p class="text-muted">Private</p>' +
                            '</div>' +
                    '</div>'
                );
            }    
            
            
        }
    });
}

home.showProductoduct = function () {
    $.ajax({
        url: "http://localhost:3000/product",
        method: "GET",
        dataType: "json",



    });
}

$(document).ready(function () {

});