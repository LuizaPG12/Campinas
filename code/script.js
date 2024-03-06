// Formulário
$(document).ready(function() {
  $('#Form').submit(function(event) {
    // Prevent default form submission
    event.preventDefault();

    // Serialize form data
    var formData = $(this).serialize();

    // Submit form data via AJAX
    $.ajax({
      type: 'POST',
      url: 'https://script.google.com/macros/s/AKfycbzuc-Z6AoQrb-NXHp0J8hCOt-2qbXC8asm-r0TB7UxrJAavtNgPdSr1jWx0Bb85C-3C/exec',
      data: formData,
      success: function(response) {
        // Display success message
        $('#response').html('Resposta salva! Muito obrigada!');
      },
      error: function(xhr, status, error) {
        // Display error message
        $('#response').html('Error: ' + error);
      }
    });
  });
});

document.getElementById("Form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission

  // Get form data
  var formData = new FormData(event.target);

  // Calculando os pontos
  var dengue = 0;
  var febreMaculosa = 0;
  var covid = 0;
  var resposta1 = formData.get("Febre").toLowerCase();
  var resposta2 = formData.get("Dor").toLowerCase();
  var resposta3 = formData.get("Mal").toLowerCase();
  var resposta4 = formData.get("Vomito").toLowerCase();
  var resposta5 = formData.get("Diarreia").toLowerCase();
  var resposta6 = formData.get("Enjoo").toLowerCase();
  var resposta7 = formData.get("Coriza").toLowerCase();
  var resposta8 = formData.get("Ar").toLowerCase();
  var resposta9 = formData.get("Tosse").toLowerCase();

  // Pontos baseados nas respostas
  if (resposta1 === "sim") {
    dengue += 1;
    febreMaculosa += 1;
    covid += 0;
  }
  if (resposta2 === "sim") {
    dengue += 1;
    febreMaculosa += 1;
    covid += 1;
  }
  if (resposta3 === "sim") {
    dengue += 1;
    febreMaculosa += 1;
    covid += 0;
  }
  if (resposta4 === "sim") {
    dengue += 1;
    febreMaculosa += 1;
    covid += 0;
  }
  if (resposta5 === "sim") {
    dengue += 0;
    febreMaculosa += 1;
    covid += 0;
  }
  if (resposta6 === "sim") {
    dengue += 1;
    febreMaculosa += 1;
    covid += 0;
  }
  if (resposta7 === "sim") {
    dengue += 0;
    febreMaculosa += 0;
    covid += 1;
  }
  if (resposta8 === "sim") {
    dengue += 0;
    febreMaculosa += 0;
    covid += 1;
  }
  if (resposta9 === "sim") {
    dengue += 0;
    febreMaculosa += 0;
    covid += 1;
  }


  // Mostrar os pontos
  var nome = "";
  function getGreatestValue(dengue, covid, febreMaculosa) {
    if (dengue >= covid && dengue >= febreMaculosa) {
        nome = "Dengue";
        return dengue;
    } else if (covid >= dengue && covid >= febreMaculosa) {
        nome = "Covid";
        return covid;
    } else {
        nome = "Febre Maculosa";
        return febreMaculosa;
    }
}

var greatestValue = getGreatestValue(dengue,covid,febreMaculosa);
var valorPorcentagem = (100*greatestValue)/9;
var ranking = document.getElementById("pontuacao");
ranking.innerHTML = "Têm: " + Math.round(valorPorcentagem) + "% de chance de você está <br>com " + nome + "." + "<br><br>Procure uma unidade de saúde!";
});


  