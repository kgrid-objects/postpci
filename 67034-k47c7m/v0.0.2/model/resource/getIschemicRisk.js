function getIschemicRisk(inputs){
  var regressions = {'DAPT': 0.506, 'age': 0.043, 'periphDisease': 0.769, 'hypertension': 0.374, 'renal': 0.509};
  var obj = inputs;

  //validate
  // var inputvalidation = true;
  // for(var key in obj) {
  // }

  // Kaplan-Meier base rate of freedom
	var S18 = 0.9809
	// estimated from DAPT study
	var meanCoefficientSum = 3.23

  var individualCoefficientSum  = 0;
  for(var key in obj) {
    individualCoefficientSum = individualCoefficientSum + (obj[key] * regressions[key])
  }
  var riskscore = 1-Math.pow(S18, Math.exp(individualCoefficientSum - meanCoefficientSum))

  return riskscore;
}
