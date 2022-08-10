$(function() {
    $("#loader").hide();
    $(document).ajaxStart(function() {
            $('#btnLookup').prop("disabled", true);
            $("#loader").show();
        })
        .ajaxStop(function() {
            $('#btnLookup').prop("disabled", false);
            $("#loader").hide();
        });

    $("#btnLookup").click(function() {
        $("#result").empty();
        $.post("/lookup", { "input": $("#word").val() })
            .done(function(data) {
                $.each(data, function(i) {
                    var result = (i + 1) + "(" + data[i].wordtype + ") :: " + data[i].definition;
                    $("#result").append("<p>" + result + "</p>");
                })
            })
            .fail(function(error) {
                alert("Something went wrong with AJAX call.");
                console.log(error);
            });
    });
});