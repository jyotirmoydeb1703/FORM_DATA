const form_data = [];
const form_data_obj = {}
var i = 0;
var parent = document.getElementById("outputBlock")

$("#formData").submit(function (e) {
  e.preventDefault();

  var f_name = $("#firstName").val();
  var l_name = $("#lastName").val();

  $("#firstName").val('');
  $("#lastName").val('');

  while ((parent.firstChild) && (parent.firstChild.tagName == 'SPAN')) {
    parent.removeChild(parent.firstChild);
  }

  form_data_obj.f__name = f_name;
  form_data_obj.l__name = l_name;
  form_data.push(form_data_obj);

  console.log(form_data[form_data.length - 1].f__name);

  var para = document.createElement("p");
  document.querySelector("#outputBlock").append(para);
  para.innerHTML = form_data[form_data.length - 1].f__name + " " + form_data[form_data.length - 1].l__name;
  para.setAttribute('class', 'paraStyle');

});

$("#deleteBtn").on('click', () => {
  var span = document.createElement("span");

  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }

  $("#outputBlock").append(span);
  span.innerHTML = "All records Deleted, Add more Records";
})

