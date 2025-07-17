import { test, expect } from '@playwright/test';
import { iniciarSesion } from '../src/pages/iniciarSesion'; 
import {verificar} from '../src/pages/verificar';
import { agregarAlCarrito } from '../src/pages/agregarAlCarrito';

test.describe('Feature: Yo como usuario deseo iniciar sesión y realizar una compra', () => {


  let context;

  test.beforeEach(async({browser, page})=>
  { context = await browser.newContext();
    await page.setViewportSize({width: 1920, height: 1080});
  })

  test.afterEach(async({})=>{
    await context.close();
  })

  test('Logearme en la pagina', async ({ page }) => {
    const sesion = new iniciarSesion(page);
    const verifica = new verificar(page);
    test.setTimeout(20000);
    await page.goto('/');
    await sesion.logIn();
    await verifica.validar();
  })
  
  test('realizo una compra',async({page})=>{

    const sesion = new iniciarSesion(page);
    const agregarAlCarrit = new agregarAlCarrito(page);
    const validar = new verificar(page);
    test.setTimeout(20000);
    await page.goto('/');
    await sesion.logIn();
    await agregarAlCarrit.agregarProducto();
    await validar.validarCompra();
  })
})

