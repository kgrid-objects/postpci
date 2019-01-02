function getStentThrombosisRisk(inputs){
  var regressions = { "DAPT": -0.653, "infar": 0.499, "priorPCI": 0.58, "CHF": 0.633, "veinGraft": 0.562,"stentDiameter": 0.475, "pac": 0.454, "cigSmoker": 0.333, "diabetes": 0.320, "periphDisease" : 0.401,"hypertension": 0.315,"renal": 0.435}
  var obj = inputs;

  //validate
  // var inputvalidation = true;
  // for(var key in obj) {
  // }

   // Kaplan-Meier base rate of freedom
	var S18 = .9691
	// estimated from DAPT study
	var meanCoefficientSum = 0.79

  var individualCoefficientSum  = 0;
  for(var key in obj) {
    individualCoefficientSum = individualCoefficientSum + (obj[key] * regressions[key])
  }

  var riskscore = 1-Math.pow(S18, Math.exp(individualCoefficientSum - meanCoefficientSum))

  return riskscore ;
}
