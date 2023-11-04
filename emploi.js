<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>mploi de temps avec drag and drop</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
  <script>
		function allowDrop(event) {
			event.preventDefault();
		}

		function drag(event) {
			event.dataTransfer.setData("text", event.target.id);
		}

		function drop(event) {
			event.preventDefault();
			var data = event.dataTransfer.getData("text");
			event.target.appendChild(document.getElementById(data));
		}
	</script>
  
  
  
</head>
<body>

  <table class="table table-bordered">
    <tr>
      <th>heures/jour</th>
      <th>lundi</th>
      <th>mardi</th>
      <th>mercredi</th>
      <th>jeudi</th>
      <th>vendredi</th>
      <th>samedi</th>
      <th>dimanche</th>
    </tr>
    <tr>
      <th>8:30-10:30</th>
      <th id="target" ondrop="drop(event)" ondragover="allowDrop(event)"></th>
      <th id="target" ondrop="drop(event)" ondragover="allowDrop(event)"></th>
      <th id="target" ondrop="drop(event)" ondragover="allowDrop(event)"></th>
      <th id="target" ondrop="drop(event)" ondragover="allowDrop(event)"></th>
      <th id="target" ondrop="drop(event)" ondragover="allowDrop(event)"></th>
      <th id="target" ondrop="drop(event)" ondragover="allowDrop(event)"></th>
      <th id="target" ondrop="drop(event)" ondragover="allowDrop(event)"></th>
      
      
    </tr>
    <tr>
      <th>10:30-12:30</th>
      <th id="target" ondrop="drop(event)" ondragover="allowDrop(event)"></th>
      <th id="target" ondrop="drop(event)" ondragover="allowDrop(event)"></th>
      <th id="target" ondrop="drop(event)" ondragover="allowDrop(event)"></th>
      <th id="target" ondrop="drop(event)" ondragover="allowDrop(event)"></th>
      <th id="target" ondrop="drop(event)" ondragover="allowDrop(event)"></th>
      <th id="target" ondrop="drop(event)" ondragover="allowDrop(event)"></th>
      <th id="target" ondrop="drop(event)" ondragover="allowDrop(event)"></th>
    </tr>
    <tr>
      <th>14:30-16:30</th>
      <th id="target" ondrop="drop(event)" ondragover="allowDrop(event)"></th>
      <th id="target" ondrop="drop(event)" ondragover="allowDrop(event)"></th>
      <th id="target" ondrop="drop(event)" ondragover="allowDrop(event)"></th>
      <th id="target" ondrop="drop(event)" ondragover="allowDrop(event)"></th>
      <th id="target" ondrop="drop(event)" ondragover="allowDrop(event)"></th>
      <th id="target" ondrop="drop(event)" ondragover="allowDrop(event)"></th>
      <th id="target" ondrop="drop(event)" ondragover="allowDrop(event)"></th>
    </tr>
    <tr>
      <th>16:30-18:30</th>
      <th id="target" ondrop="drop(event)" ondragover="allowDrop(event)"></th>
      <th id="target" ondrop="drop(event)" ondragover="allowDrop(event)"></th>
      <th id="target" ondrop="drop(event)" ondragover="allowDrop(event)"></th>
      <th id="target" ondrop="drop(event)" ondragover="allowDrop(event)"></th>
      <th id="target" ondrop="drop(event)" ondragover="allowDrop(event)"></th>
      <th id="target" ondrop="drop(event)" ondragover="allowDrop(event)"></th>
      <th id="target" ondrop="drop(event)" ondragover="allowDrop(event)"></th>
    </tr>
  </table>

  <p id="p1" draggable="true" ondragstart="drag(event)">
    Web
  </p>
  
  <p id="p2" draggable="true" ondragstart="drag(event)">
    Algorithmes
  </p>
  <p id="p3" draggable="true" ondragstart="drag(event)">
    theorie de langage
  </p>
  
  


  
  
</body>
</html>