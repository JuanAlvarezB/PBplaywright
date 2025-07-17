import {Page, Locator} from "@playwright/test";
import {datos} from "../utils/datos";
import * as elemento from '../pages/localizadiresLogin';

export class agregarAlCarrito{

    private btnAddBackPack: Locator;
    private btnGoToCart: Locator;
    private btnCheckout: Locator;
    private inputFirstName: Locator;
    private inputLastName: Locator;
    private inputPostalCode: Locator;
    private btnContinue: Locator;
    private btnFinish: Locator;
    page: Page;


    constructor(page: Page){
        this.page = page;
        this.btnAddBackPack = page.locator(elemento.BTN_ADD_BACKPACK);
        this.btnGoToCart = page.locator(elemento.BTN_GO_TO_CART);
        this.btnCheckout = page.locator(elemento.BTN_CHECKOUT);
        this.inputFirstName = page.locator(elemento.INPUT_FIRST_NAME);
        this.inputLastName = page.locator(elemento.INPUT_LAST_NAME);
        this.inputPostalCode = page.locator(elemento.INPUT_POSTAL_CODE);
        this.btnContinue = page.locator(elemento.BTN_CONTINUE);
        this.btnFinish = page.locator(elemento.BTN_FINISH);
    }


    async agregarProducto(){
        await this.btnAddBackPack.click();
        await this.btnGoToCart.click();
        await this.btnCheckout.click();
        await this.inputFirstName.fill(datos.firtName);
        await this.inputLastName.fill(datos.lastName);
        await this.inputPostalCode.fill(datos.postalCode);
        await this.btnContinue.click();
        await this.btnFinish.dragTo(this.page.locator(elemento.BTN_FINISH));
    }
}


