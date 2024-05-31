import { BasePage } from "./BasePage";

export class SelectablePage extends BasePage{
    static get url() {
        return "";
    }

    static get clickGridButton(){
        return cy.get("[tabindex='-1']");
    }
    static get clickButton(){
        return cy.get("[class='list-group-item list-group-item-action']");
    }
    static get validateActiveButton(){
        return cy.get('[class="list-group-item active list-group-item-action"]');
    }
    static get validateNotActiveButton(){
        return cy.get('[class="list-group-item list-group-item-action"]');
    }

    


}