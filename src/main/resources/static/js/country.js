$(document).ready(function () {
    $("#detailContains").css("display", "none");
    // when click the create button, show the detailContains
    $("#selCreate").on('click', function () {
        // clear all input
        $(':input', '#frmDetail')
            .not(':button, :submit, :reset, :hidden')
            .val(''); 
        // show the detailContains
        $("#detailContains").css("display", "block");
        // hide the queryContainer
        $("#queryContainer").css("display", "none");
        $("#frmDetail").attr("action", "/country/createCountry");
        $("#operation").val('create');
    });

    // when click the update button, show the queryContainer
    $("#selUpdate").on('click', function () {
        // show the queryContainer
        $("#queryContainer").css("display", "block");
        // hide the detailContains
        $("#detailContains").css("display", "none");
        // set the form action for update
        $("#frmDetail").attr("action", "/country/updateCountry");
        $("#operation").val('update');
    });

    $("#selDelete").on('click', function () {
        // show the queryContainer
        $("#queryContainer").css("display", "block");
        // hide the detailContains
        $("#detailContains").css("display", "none");
        // set the form action for update
        $("#frmDetail").attr("action", "/country/deleteCountry");
        $("#operation").val('delete');
    });

    // when click the return button, hide the detailContains
    $("#returnBtn").on('click', function () {
        // show the queryContainer
        // $("#queryContainer").css("display", "block");
        // hide the detailContains
        $("#detailContains").css("display", "none");
    });

    $("#queryBtn").on('click', function () {
        // use ajax to post data to controller
        // recived the data from controller with json
        // show the data in the detailContains
        $.ajax({
            type: "POST",
            url: "/country/getCountry",        //  <- controller function name
            data: $("#frmSearch").serialize(),
            dataType: 'json',
            success: function (data) {
                $("#detailContains").css("display", "block");
                // show the data in the detailContains
                $("#countryCodeInput").val(data.mstcountrycd);
                $("#countryNameInput").val(data.mstcountrynanme);
            },
            error: function (e) {
                alert("error");
            }
        });
    });

    $("#updateBtn").on('click', function () {
        opt = operation.value;
        if (opt === "create") {
		    request_url = "/country/createCountry";
		    request_type = "POST";
        }
        else if (opt === "update") {
            request_url = "/country/updateCountry";
            // disabled the pk item
            //document.getElementsById("countryCodeInput").setAttribute("disabled",true);
            request_type = "POST";
        }
        else if (opt === "delete") {
            request_url = "/country/deleteCountry";
            request_type = "DELETE";
        }

        $.ajax({
            type: request_type,
            url: request_url,        //  <- controller function name
            data: $("#frmDetail").serialize(),
            dataType: 'json',
            success: function (data) {
                alert("success");
            },
            error: function (e) {
                alert("error");
            }
        });
    });
});