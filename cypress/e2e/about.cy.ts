describe('About Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/about');
      })
    it('loads successfully', () => {
      cy.get("h1").contains('About me');
    });
    it('the h2 contains correct text', () => {
        cy.get("[data-test=h2-about]").contains("Testing Next.js Applications with Cypress")
    })
    it("allows user to input email", ()=>{
        cy.get('input[type=email]')
    })
    it('contains link to blog page', () => {
      cy.contains('Go to myblog')
        .should('have.attr', 'href', '/blog')
        .click();
  
      // Jika Anda ingin memverifikasi bahwa navigasi berhasil, Anda bisa menambahkan asserstion tambahan di sini.
      // Contoh:
      // cy.url().should('include', '/blog');
    });
  });
  