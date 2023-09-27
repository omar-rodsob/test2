Feature: Compra Exitosa
  Scenario: Compra exitosa
    Given un cliente con acceso a la plataforma
    When seleccione los productos preferidos de la seccion "Promociones"
    Then podra realizar el pago de manera exitosa