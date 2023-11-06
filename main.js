//triangular calculation
document.getElementById('triangleButton').addEventListener('click', function(){
    let triInputBhumi = document.getElementById('triInpuBhumi');
    let triInputBhumiValueString = triInputBhumi.value; // Fix: Use 'value' instead of 'Value'
    let triInputBhumiValue = parseFloat(triInputBhumiValueString);
  
    let triInputUccota = document.getElementById('triInpuUcota');
    let triInputUccotaValueString = triInputUccota.value; // Fix: Use 'value' instead of 'Value'
    let triInputUccotaValue = parseFloat(triInputUccotaValueString);
  
    let triTextBhumi = document.getElementById('tbhumi');
    triTextBhumi.innerText = isNaN(triInputBhumiValue) ? "Invalid Input" : triInputBhumiValue;
  
    let triTextUccota = document.getElementById('tuccota');
    triTextUccota.innerText = isNaN(triInputUccotaValue) ? "Invalid Input" : triInputUccotaValue;

    let calculate = 0.5 * triInputBhumiValue * triInputUccotaValue;
    let list = document.createElement('li');
    list.innerHTML = `Triangle Area = ${calculate} cm<sup>2</sup>`;
    let ol = document.getElementById('ol');
    ol.appendChild(list);

  });


  //rectangle calculation
  document.getElementById('recButton').addEventListener('click', function(){
    let recInputBhumi = document.getElementById('recInpuBhumi');
    let recInputBhumiValueString = recInputBhumi.value; // Fix: Use 'value' instead of 'Value'
    let recInputBhumiValue = parseFloat(recInputBhumiValueString);
  
    let recInputUccota = document.getElementById('recInpuUcota');
    let recInputUccotaValueString = recInputUccota.value; // Fix: Use 'value' instead of 'Value'
    let recInputUccotaValue = parseFloat(recInputUccotaValueString);
  
    let recTextBhumi = document.getElementById('rbhumi');
    recTextBhumi.innerText = isNaN(recInputBhumiValue) ? "Invalid Input" : recInputBhumiValue;
  
    let recTextUccota = document.getElementById('ruccota');
    recTextUccota.innerText = isNaN(recInputUccotaValue) ? "Invalid Input" : recInputUccotaValue;
  });