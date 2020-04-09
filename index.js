var dashboard = dashboard || {};

dashboard.drawTable = function () {
    $.ajax({
        url: "http://localhost:3000/products",
        method: "GET",
        dataType: "json",
        success: function (data) {
            $('#show').empty();
            let id = 1;
            $.each(data, function (i, v) {
                $('#show').append(
                    "<div class='col-md-4 col-sm-6 portfolio-item'>"+
                        "<a class='portfolio-link' data-toggle='modal' href='#portfolioModal'>"+
                            "<div class='portfolio-hover'>"+
                                "<div class='portfolio-hover-content'>"+
                                    "<i  class='fas fa-plus fa-3x' onclick='dashboard.Modal("+v.id+")'></i >"+
                                "</div>"+
                            "</div>"+
                            "<img class='img-fluid' src='"+v.productImage+"'>"+
                        "</a>"+
                            "<div class='portfolio-caption'>"+
                                "<h4>"+v.productName+"</h4>"+
                                "<p class='text-muted'>"+v.color+"</p>"+
                                "<p class='text-muted'>"+v.price+"</p>"+
                                "<p class='text-muted'>"+v.manufactory+"</p>"+
                                "<p class='text-muted'>"+v.description+"</p>"+

                            "</div>"+
                    "</div>"
                        );
                    })
                }
            });
        }


dashboard.Modal =function(id){
    $.ajax({
        url: "http://localhost:3000/products/"+id,
        method: "GET",
        dataType: "json",
        success: function (data) {                        
            document.getElementById("img").setAttribute('src',data.productImage);
            $('#showsp').find('#name').text(data.productName);
            $('#showsp').find('#color').text(data.color);
            $('#showsp').find('#price').text(data.price);
            $('#showsp').find('#mft').text(data.manufactory);
            $('#showsp').find('#dct').text(data.description);
            $('#showsp').modal('show');
                
                }
            });

}
dashboard.init=function(){
    dashboard.drawTable();                
};
$(document).ready(function(){
    dashboard.init();
});