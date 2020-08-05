$(document).ready(function () {
$('#VisitorDt').DataTable();
$('.dataTables_length').addClass('bs-select');
});


function getServiceData() {
    axios.get('/GetServicesData')
        .then(function (response) {
            if (response.status == 200){

                $('#main-div').removeClass('d-none');
                $('#loader-div').addClass('d-none');

                var jsonData = response.data;
                $.each(jsonData,function (i,item) {
                    $('<tr>').html(
                        "<th class='th-sm'><img class='table-img' src="+ jsonData[i].service_img +"></th>" +
                        "<th class='th-sm'>"+ jsonData[i].service_name +"</th>" +
                        "<th class='th-sm'>"+ jsonData[i].service_des +"</th>" +
                        "<th class='th-sm'><a href='' ><i class='fas fa-edit'></i></a></th>" +
                        "<th class='th-sm'><a data-toggle=\"modal\" data-target=\"#deleteModal\" ><i class='fas fa-trash-alt'></i></a></th>"
                    ).appendTo('#service_table');
                });
            }
            else{
                $('#loader-div').addClass('d-none');
                $('#wrong-div').removeClass('d-none');
            }
        })
        .catch(function (error) {
            $('#loader-div').addClass('d-none');
            $('#wrong-div').removeClass('d-none');
        });
}
