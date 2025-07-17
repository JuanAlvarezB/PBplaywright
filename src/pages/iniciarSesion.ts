import {Page, Locator} from "@playwright/test";
import {datos} from "../utils/datos";
import * as elemento from '../pages/localizadiresLogin';

export class iniciarSesion{
    private username: Locator;
    private password: Locator;
    private btnIniciar: Locator;
    page: Page;



    constructor(page: Page){
    this.username = page.locator(elemento.TXT_USUARIO);
    this.password = page.locator(elemento.TXT_CONTRASEÑA);
    this.btnIniciar = page.locator(elemento.BTN_LOGIN);
}

async logIn(){
    await this.username.fill(datos.usuario);
    await this.password.fill(datos.password);
    await this.btnIniciar.click();
}


}

