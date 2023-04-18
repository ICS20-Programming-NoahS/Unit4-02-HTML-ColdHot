// Copyright (c) 2023 Noah Smith All rights reserved
//
// Created by: Noah Smith
// Created on: Apr 2023
// This file contains the JS functions for index.html


"use strict";

/**
 * This function determines whether or not the temperature is cold or hot
 */
function hotcold() {
  let result = "";
  let temperature = parseFloat(document.getElementById("hot-cold").value);
  
  if (temperature >= 5) {
    result = "It is hot!";
  }
  else {
    result = "It is cold!";
  }
  
  document.getElementById("result").innerHTML = result;
}
