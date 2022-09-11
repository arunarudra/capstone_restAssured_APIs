Feature: Perfom the CRUD operations

  Scenario: to perform the GET operation on medicare DB and display most viewed product
    Given The base uri is "http://localhost:8082/medicare/json/data/mv/products"
    When I perform GET operation
    Then Response code should be 200