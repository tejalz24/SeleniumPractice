const {Builder, By, } = require ("selenium-webdriver");

const driver = new Builder().forBrowser("firefox").build();

async function dropdown(){

    try {
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/dropdown-form");
        const dropdown1 = driver.findElement(By.xpath("//nb-select[@formcontrolname='select1']/button"));
        dropdown1.click();
        await driver.findElement(By.xpath("//nb-option[@value='1']")).click();
        await driver.findElement(By.xpath("//nb-option[@value='4']")).click();
        dropdown1.click();
        await driver.findElement(By.css("select#selectCar option:nth-of-type(2)")).click();
        const dropdown2 = driver.findElement(By.css("button[class='btn-primary opened top']"));
        dropdown2.click();
        await driver.findElement(By.css("button[class*='\" opened']")).click();
        await driver.findElement(By.css("nb-option:nth-of-type(3)")).click();
        await driver.findElement(By.xpath("//select [@formcontrolname='select4'] ")).click();
        await driver.findElement(By.css("option[value='opel']")).click();
        await driver.findElement(By.id('submit')).click();

    } catch (error) {
        console.log(error);
    }
}
dropdown();