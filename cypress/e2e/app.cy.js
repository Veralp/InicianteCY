import assert from 'assert' 

class RegisterForm {
   elements = {
    titleInput: () => cy.get('#title'),
    titleFeedback:() =>cy.get('#titleFeedback'),
    imageUrlInput: () => cy.get ('#imageUrl'),
    urlFeedback:() =>cy.get('#urlFeedback'),
    SubmitBtn:()=> cy.get('#btnSubmit')
   }
typeTitle(text) {
  if(text)return;
  this.elements.titleInput().type(text)
}
typeUrl(text){
  if(text)return;
  this.elements.imageUrlInput().type(text)
 }
clickSubmit() {
  this.elements.SubmitBtn().click()
}
}
const registerForm = new RegisterForm()
const colors = {
  errors: 'rgb(220, 53, 69)',
  success:''
}

describe('Image Registration', () => {
  describe('Submitting an image with invalid inputs ', () => {
    after (() => {
    cy.clearAllLocalStorage()
    }

    )
    const input = {
      title:'',
      URL: ''
    }
  it('Given I am on the image resgistration page', () => {
    cy.visit('/')
  })
  it ('When I enter "${input.title}" in the title field',() =>{
    registerForm.typeTitle(' + input.title')
  })
  it ('Then I enter "${input.title}" in the URL field', () =>{
    registerForm.typeUrl('titulo + input.url')
  })
  it ('Then I click  in the submit button', ()=> {
    registerForm.clickSubmit()
  }) 
  it ('Then I should see  "Please type a title for the image " message above  the title field', () =>{
    //registerForm.elements.titleFeedback().should(elements =>{
      //debugger
      registerForm.elements.titleFeedback ().should('contains.text', 'Please type a title for the image')
    })
    it ('And I should see "Please type a valid URL" message above the imageURL field',() => {
     registerForm.elements.urlFeedback().should('contains.text','Please type a valid URL')
    })
    it (' And I should see an exclamation icon the title and URL fields',()=> {
        registerForm.elements.titleInput().should(([element])=>{
          const styles = window.getComputedStyle(element)
          const border = styles.getPropertyValue('border-right-color')
          //debugger
          assert.strictEqual(border, colors.errors)
        })

      }) 

      
    })
})
  

  
  
  

