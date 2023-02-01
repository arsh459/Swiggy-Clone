document.getElementById("wallet").addEventListener("click", walletInfo);

function walletInfo() {
  let container = document.getElementById("paymentSectionDiv");
  container.textContent = "";
  let walletDiv = document.createElement("div");
  walletDiv.id = "walletItemBox";

  let amazonPay = document.createElement("div");
  amazonPay.className = "itemBoxInnerDivs";
  let image = document.createElement("img");
  image.src =
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_80/Amazon_Pay_Logos/Pay/logo_pay-primary-fullcolor-positive";

  let titleAmazon = document.createElement("h3");
  titleAmazon.textContent = "Amazon Pay";

  let linkAmazon = document.createElement("button");
  linkAmazon.textContent = "PAY";

  amazonPay.append(image, titleAmazon, linkAmazon);

  let paytm = document.createElement("div");
  paytm.className = "itemBoxInnerDivs";
  let imagePaytm = document.createElement("img");
  imagePaytm.src =
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_80/paytm_wcxbwf";

  let titlePaytm = document.createElement("h3");
  titlePaytm.textContent = "Paytm (Wallet + Postpaid)";

  let linkPaytm = document.createElement("p");
  linkPaytm.textContent = "LINK ACCOUNT";

  paytm.append(imagePaytm, titlePaytm, linkPaytm);

  let phonepe = document.createElement("div");
  phonepe.className = "itemBoxInnerDivs";

  let imagePhonepe = document.createElement("img");
  imagePhonepe.src =
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_80/phonepe_icon_aca9jf";

  let titlePhonepe = document.createElement("h3");
  titlePhonepe.textContent = "Phone Pe (Wallet/UPI/Cards)";

  let linkPhonepe = document.createElement("p");
  linkPhonepe.textContent = "LINK ACCOUNT";

  phonepe.append(imagePhonepe, titlePhonepe, linkPhonepe);

  let mobiquick = document.createElement("div");
  mobiquick.className = "itemBoxInnerDivs";
  let imageMobiquick = document.createElement("img");
  imageMobiquick.src =
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_80/v1612413183/PaymentLogos/Mobikwik";

  let titleMobiquick = document.createElement("h3");
  titleMobiquick.textContent = "MobiKwik";

  let linkMobiquick = document.createElement("p");
  linkMobiquick.textContent = "LINK ACCOUNT";

  mobiquick.append(imageMobiquick, titleMobiquick, linkMobiquick);

  let freecharge = document.createElement("div");
  freecharge.className = "itemBoxInnerDivs";
  let imageFreecharge = document.createElement("img");
  imageFreecharge.src =
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_80/freecharge_ya2xfq";

  let titleFreecharge = document.createElement("h3");
  titleFreecharge.textContent = "Freecharge";

  let linkFreecharge = document.createElement("p");
  linkFreecharge.textContent = "LINK ACCOUNT";

  freecharge.append(imageFreecharge, titleFreecharge, linkFreecharge);

  walletDiv.append(amazonPay, paytm, phonepe, mobiquick, freecharge);

  console.log(walletDiv);
  container.append(walletDiv);
  console.log(container);
}
