from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time
import unittest

# Configura las opciones del navegador para la emulación de dispositivos móviles
mobile_emulation = {
    "deviceMetrics": {"width": 390, "height": 844, "pixelRatio": 3.0},
    "userAgent": "Mozilla/5.0 (Linux; Android 11; Pixel 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Mobile Safari/537.36"
}

chrome_options = webdriver.ChromeOptions()
chrome_options.add_experimental_option("mobileEmulation", mobile_emulation)

# Inicializa el navegador con las opciones configuradas
driver = webdriver.Chrome(options=chrome_options)
#driver.set_window_size(390, 844)               Adaptación a resolucion de pantalla🦙 



url = 'https://cookmatch-8s768rki6-andycambras-projects.vercel.app/'
driver.get(url)
print(driver.title)


button_Search = driver.find_element(By.XPATH, "//button[contains(.,'SEARCH RECIPES')]")
button_Search.click()
time.sleep(1)

ingredientes_clave = ["eggs", "rice", "lettuce"]

# Encuentra el campo de entrada y el botón "Add"
campo_entrada = driver.find_element(By.XPATH, "//input[contains(@type,'text')]")  # Reemplaza 'ID_DEL_CAMPO_DE_ENTRADA' con el ID del campo de entrada
boton_add = driver.find_element(By.XPATH, "//button[@type='submit'][contains(.,'Add')]")  # Reemplaza 'ID_DEL_BOTÓN_ADD' con el ID del botón "Add"

# Itera a través de los ingredientes clave y realiza la búsqueda
for ingrediente in ingredientes_clave:
    campo_entrada.clear()
    campo_entrada.send_keys(ingrediente)
    campo_entrada.send_keys(Keys.RETURN)  # Presiona la tecla Enter (puedes usar Keys.ENTER en lugar de Keys.RETURN si prefieres)
    time.sleep(1)  # Espera brevemente para que la búsqueda se complete
    boton_add.click()
    time.sleep(1)  # Espera antes de pasar al siguiente ingrediente

    # Verificar si los ingredientes se agregaron correctamente
for ingrediente in ingredientes_clave:
    elemento_agregado = driver.find_element(By.XPATH, f"//div[contains(.,'{ingrediente}')]")
    if elemento_agregado.is_displayed():
        print(f"El ingrediente '{ingrediente}' se agrego correctamente.")
    else:
        print(f"Prueba fallida: El ingrediente '{ingrediente}' no se agregó correctamente.")

button_Delete = driver.find_element(By.XPATH, "/html[1]/body[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/button[1]")

button_Delete.click()
print("Ingrediente eliminado") 
time.sleep(1)

category = driver.find_element(By.XPATH, "//button[contains(.,'Vegan')]")
category.click()

butthon_Search_Recipies = driver.find_element(By.XPATH, "//button[contains(.,'Search Recipies')]")
butthon_Search_Recipies.click()

driver.execute_script("window.history.go(-1)")

time.sleep(5)
driver.quit()







