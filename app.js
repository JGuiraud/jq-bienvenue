$("input").focusout(function(){

	var prenom = $("#first_name").val();
	var nom = $("#last_name").val();
	var ville = $("#city").val();

		$("#prenom").html(prenom);
		$("#nom").html(nom);
		$("#ville").html(ville); 

		if (prenom == "" || nom == "") {
			alert("vous n'avez pas rempli tous les champs")
		} else {
				$("span#username").html(prenom + " " + nom);
		}
});