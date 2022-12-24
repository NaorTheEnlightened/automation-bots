(async () => {
   const playwright = require("playwright");
 
   const browser = await playwright.chromium.launch({ headless: false });
 
   const page = await browser.newPage();
   await page.goto(
     "https://app.upay.co.il/API6/s.php?m=YzBOVnUrQmt1SjZDUC8yS2pOSG0wZz09"
   );
 
   await page.fill("#manualamount", 123);
   await page.fill("#cardnumber", 123);
   await page.fill("#expirydate", "12/27");
   await page.fill("#cvv", 123);
   // cardOwnerName && (await page.fill("#cardownername", cardOwnerName));
   // cellphoneNotify && (await page.fill("#cellphonenotify", cellphoneNotify));
 
   let errorMessage = "";
   page.on("dialog", async (dialog) => {
     errorMessage = dialog.message();
     if (errorMessage) {
      // console.log(errorMessage);
     //   res.send({ message: errorMessage });
     }
   });
    
   await page.click("id=submit");
 //   browser.close()
 })()
   