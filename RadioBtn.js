const {Builder, By, Alert, } = require ("selenium-webdriver");

const driver = new Builder().forBrowser("firefox").build();

async function radioButton(){
try {
    await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/radio-button-form");
    await driver.findElement(By.id('title')).sendKeys("This is the radio button test");
    await driver.findElement(By.name("description")).sendKeys("This is the radio button test description");
    await driver.findElement
    (By.xpath("//input [@value='option2']//following-sibling::span")).click();
   // await driver.findElement(By.css('div:nth-child(2) > label > span.custom-control-indicator')).click();
    await driver.findElement(By.xpath(`//button [contains(text(),'Register')]`)).click();
        
} catch (error) {
    console.log(error);
}

}

radioButton();