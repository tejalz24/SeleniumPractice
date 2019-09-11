const {Builder, By, Key, } = require ("selenium-webdriver");

const driver = new Builder().forBrowser("firefox").build();

async function checkBox(){
try {
    await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/checkbox-form");
    await driver.findElement(By.id('name')).sendKeys("Tejal");
    await driver.findElement(By.id('comment')).sendKeys("Optional");
    await driver.findElement(By.xpath("//input [@value='one-bed-appartment']//following-sibling::span")).click();
    await driver.findElement(By.xpath("//input [@type='checkbox']//following-sibling::span")).click();
    await driver.findElement(By.xpath("//nb-checkbox[@value='dinner']//input [@type='checkbox']//following-sibling::span")).click();
    await driver.findElement(By.name('submit')).click();

} catch (error) {
    console.log(error);
}
}

checkBox();