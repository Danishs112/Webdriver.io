import { Given, When, Then } from "@cucumber/cucumber";


Given(/^I am on the (.*) page$/, async (page) => {
    // await LoginPage.visit(page)
    browser.url(`/${page}`)
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    // await LoginPage.login(username, password)
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    // await expect(SecurePage.flashAlert).toBeExisting();
    // await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});

