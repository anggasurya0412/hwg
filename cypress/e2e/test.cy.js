import HomePage from "../pom/selector";
const baseUrl = 'https://todomvc.com/examples/react/#/'
const addTask1= 'Go to H Club SCBD'
const addTask2= 'Buy a bottle of Singleton'
const addTask3= 'Dance the night out!'
describe('example to-do app', () => {
    beforeEach(() => {
      cy.visit(baseUrl);
      HomePage.title().should('be.visible')
  // add task
      HomePage.addField().type(`${addTask1}{enter}`)
      HomePage.viewList(addTask1).should('be.visible')
      HomePage.addField().type(`${addTask2}{enter}`)
      HomePage.viewList(addTask2).should('be.visible')
      HomePage.addField().type(`${addTask3}{enter}`)
      HomePage.viewList(addTask3).should('be.visible')

    })
  
    it('Checklist first task should success', () => {
      HomePage.checkTask(0).click()
      HomePage.verifiedCheck(0).should('be.visible')
    })

    it('Delete second task should success', () => {
      HomePage.deleteTask(1).click({force: true})
      HomePage.viewList(addTask2).should('not.exist')
    })

    it('filter based on active task should success', () => {
      HomePage.checkTask(0).click()
      HomePage.verifiedCheck(0).should('be.visible')
      HomePage.filter('Active').click()
      HomePage.viewList(addTask1).should('not.exist')
      HomePage.viewList(addTask2).should('be.visible')
      HomePage.viewList(addTask3).should('be.visible')
    })

    it('filter based on complete task should success', () => {
      HomePage.checkTask(0).click()
      HomePage.verifiedCheck(0).should('be.visible')
      HomePage.filter('Completed').click()
      HomePage.viewList(addTask1).should('be.visible')
      HomePage.verifiedCheck(0).should('be.visible')
      HomePage.viewList(addTask2).should('not.exist')
      HomePage.viewList(addTask3).should('not.exist')
    })
  })