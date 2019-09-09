const {Builder, By,} = require ("selenium-webdriver");

const driver = new Builder().forBrowser("firefox").build();

async function simpleRegistration() {

  try {
    await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/simple-registration");
    await driver.findElement(By.id("email")).sendKeys("tejal@gmail.com");
    await driver.findElement(By.xpath('//input [@id="password"]')).sendKeys("Tejal");
    await driver.findElement(By.name('submit')).click();
  } catch (error) {
    console.log(error);
  }
}

simpleRegistration();

