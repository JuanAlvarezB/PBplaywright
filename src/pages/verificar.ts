import {Page, Locator, expect} from "@playwright/test";
import {datos} from "../utils/datos";
import * as elemento from '../pages/localizadiresLogin';

export class verificar{


    private textoValidar: Locator;
    private labelOne: Locator;
    private labelTwo: Locator;
    private labelThree: Locator;
    page: Page;


    constructor(page: Page){
        this.textoValidar = page.locator(elemento.TXT_LABEL_PRODUCTS);
        this.labelOne = page.locator(elemento.TXT_LABEL_ONE);
        this.labelTwo = page.locator(elemento.TXT_LABEL_TWO);
        this.labelThree = page.locator(elemento.TXT_LABEL_THREE);
    }

    async validar(){

        await expect(this.textoValidar).toBeVisible();
        
    }


    async validarCompra(){
        await expect(this.labelOne).toContainText(datos.textoOne);
        await expect(this.labelTwo).toContainText(datos.textoTwo);
        await expect(this.labelThree).toContainText(datos.textoThree);
    }



}