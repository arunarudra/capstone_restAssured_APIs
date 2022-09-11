Feature: Perfom the CRUD operations

  Scenario: to perform the GET operation on medicare DB and display Categorywie product
    Given The base uri is "http://localhost:8082/medicare/json/data/category/3/products"
    When I perform GET operation
    Then Response code should be 200