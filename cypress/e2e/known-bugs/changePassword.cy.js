const {home} = require('../../pages/OrangeHRM') // POM
const {dashboard} = require('../../pages/OrangeDashboard') //POM
const {username, password, newPassword, licenseExpires, birthday} = Cypress.env('AdminUser') // Variables ENV
import { faker, Faker } from '@faker-js/faker' // Faker - Random Data

describe('Known Bugs - OrangeHRM', ()=> {
    beforeEach('Ingresar a la pagina', ()=> {

        // Visitar la siguiente URL:
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

          // Realizar un Login:
          home.enterUsername(username)
          home.enterPassword(password)
          home.submitButton()

          // Validar que el login fue exitoso:
          cy.url().should('contains', 'dashboard/index')
          dashboard.elements.miCuenta().should('exist')
          
    });

    it('BUG - El sitio no permite un cambio de contraseña exitoso', ()=> {

        cy.url().should('contains', 'dashboard/index')

        // Cambiar Contraseña:
        dashboard.clickPerfil()
        dashboard.cambiarPass()
        cy.url().should('contain', 'updatePassword')
        dashboard.typePass(password)
        dashboard.typeNewPassword(newPassword)
        dashboard.confirmNewPass(newPassword)
        dashboard.clickSave()
        dashboard.elements.cartel().should('exist').and('be.visible').and('contain', 'Successfully Saved')

        // Realizar Un Logout:
        dashboard.clickPerfil()
        dashboard.hacerLogout()
        cy.url().should('contains', 'auth/login')

        // Logearse con la Nueva Contraseña:
        home.enterUsername(username)
        home.enterPassword(newPassword)
        home.submitButton()
        cy.wait(2000)

        // Validar que el cambio de contraseña realmente fue exitoso:
        dashboard.elements.alerta().should('not.exist')
        cy.url().should('contains', 'dashboard/index')

        // Fallo el Caso de Prueba debido a un FIX del sitio
    })

});