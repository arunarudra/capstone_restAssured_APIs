$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/GETByCategory.feature");
formatter.feature({
  "name": "Perfom the CRUD operations",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "to perform the GET operation on medicare DB and display Categorywie product",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "The base uri is \"http://localhost:8082/medicare/json/data/category/3/products\"",
  "keyword": "Given "
});
formatter.match({
  "location": "GetRequestprodlist.the_base_uri_is(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I perform GET operation",
  "keyword": "When "
});
formatter.match({
  "location": "GetRequestprodlist.i_perform_GET_operation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Response code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "GetRequestprodlist.response_code_should_be(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/java/features/GETByMP.feature");
formatter.feature({
  "name": "Perfom the CRUD operations",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "to perform the GET operation on medicare DB and display most viewed product",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "The base uri is \"http://localhost:8082/medicare/json/data/mp/products\"",
  "keyword": "Given "
});
formatter.match({
  "location": "GetRequestprodlist.the_base_uri_is(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I perform GET operation",
  "keyword": "When "
});
formatter.match({
  "location": "GetRequestprodlist.i_perform_GET_operation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Response code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "GetRequestprodlist.response_code_should_be(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/java/features/GETByMV.feature");
formatter.feature({
  "name": "Perfom the CRUD operations",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "to perform the GET operation on medicare DB and display most viewed product",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "The base uri is \"http://localhost:8082/medicare/json/data/mv/products\"",
  "keyword": "Given "
});
formatter.match({
  "location": "GetRequestprodlist.the_base_uri_is(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I perform GET operation",
  "keyword": "When "
});
formatter.match({
  "location": "GetRequestprodlist.i_perform_GET_operation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Response code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "GetRequestprodlist.response_code_should_be(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/java/features/GETRequest.feature");
formatter.feature({
  "name": "Perfom the CRUD operations",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "to perform the GET operation on medicare DB and display all products",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "The base uri is \"http://localhost:8082/medicare/json/data/all/products\"",
  "keyword": "Given "
});
formatter.match({
  "location": "GetRequestprodlist.the_base_uri_is(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I perform GET operation",
  "keyword": "When "
});
formatter.match({
  "location": "GetRequestprodlist.i_perform_GET_operation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Response code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "GetRequestprodlist.response_code_should_be(Integer)"
});
formatter.result({
  "status": "passed"
});
});