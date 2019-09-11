const {Builder, By, } = require ("selenium-webdriver");
const driver = new Builder().forBrowser("firefox").build();

async function datepicker(){
try {

    await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/datepicker-form");
    await driver.findElement(By.css("input[formcontrolname='dateOne']")).sendKeys("Sep 4, 2019");
    await driver.findElement(By.css("input[formcontrolname='dateTwo']")).sendKeys("Sep 11, 2019 - Sep 27, 2019");
    await driver.findElement(By.css("#submit")).click();
    
} catch (error) {
    console.log(error);
}
}
datepicker();
