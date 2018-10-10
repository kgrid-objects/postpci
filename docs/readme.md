# postpci Knowledge Objects
[![GitHub release](https://img.shields.io/github/release/kgrid-objects/postpci.svg)](https://github.com/kgrid-objects/postpci/releases/)


This collection is derived from the DAPT study that aimed to identify the risk of benefit vs. harm for patients that continue thienopyridine treatment beyond one year after percutaneous coronary intervention (PCI).

## Status
The current release of postpci collection of knowledge objects is [![GitHub release](https://img.shields.io/github/release/kgrid-objects/postpci.svg)](https://github.com/kgrid-objects/postpci/releases/)

This release contains two KOs, as listed below.


## Post PCI KO Description

1. [Ischemic Bleeding Risk Calculator](https://library.kgrid.org/#/object/67034%2Fk47c7mx%2Fv0.0.2)

  Endpoint:       ` /getIschemicRisk`

  Input Example:
  ```json
  {
    "DAPT": 1,
    "age": 60,
    "periphDisease": 0,
    "hypertension": 1,
    "renal": 0
  }
  ```

  Output Example (Only the `result` key-value pair of the response is shown):
  ```json
  {
    "result": 0.024
  }
  ```
1. [Stent Thrombosis Risk Calculator](https://library.kgrid.org/#/object/99999%2Ffk45m6gq9t%2Fv0.0.2)

  Endpoint:       ` /getStentThrombosisRisk`

  Input Example:
  ```json
  {
    "DAPT": 1,
    "infar": 0,
    "priorPCI": 0,
    "CHF": 1,
    "veinGraft": 0,
    "stentDiameter": 1,
    "pac": 1,
    "cigSmoker": 1,
    "diabetes": 0,
    "periphDisease": 0,
    "hypertension": 1,
    "renal": 0
  }
  ```

  Output Example (Only the `result` key-value pair of the response is shown):
  ```json
  {
    "result": 0.065
  }
  ```
