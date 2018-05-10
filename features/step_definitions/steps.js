const { client } = require("nightwatch-cucumber");
const { Given, When, Then } = require("cucumber");

Given(/^There are no existing todos$/, () => {
  const todoPage = client.page.todo();

  return todoPage.navigate().waitForElementVisible("@body", 1000);
});
When(/^I add a new todo$/, () => {});
Then(/^A new, incomplete todo should be added to my list$/, () => {});
