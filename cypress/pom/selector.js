export default class HomePage {
    static title(){
       return cy.get('[data-reactid=".0.0.0"]').contains('todos')
    }

    static addField() {
      return cy.get('[class="new-todo"]')
    }

    static viewList(string) {
        return cy.get('[class="view"]').contains(string)
    }

    static checkTask(index){
        return cy.get('[class="toggle"]').eq(index)
    }

    static verifiedCheck(index){
        return cy.get('[class="completed"]').eq(index)
    }

    static deleteTask(index){
        return cy.get('[class="destroy"]').eq(index)
    }

    static filter(type){
        return cy.get('[class="filters"]').contains(type)
    }

    static taskCount(int){
        return cy.get('[class="todo-count"]').contains(int)
    }
}