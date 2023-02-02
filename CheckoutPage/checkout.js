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

  container.append(walletDiv);
}

document.getElementById("card").addEventListener("click", cardInfo);

function cardInfo() {
  let container = document.getElementById("paymentSectionDiv");
  container.textContent = "";

  let cardDiv = document.createElement("div");
  cardDiv.id = "cardItemBox";

  let addCard = document.createElement("div");
  addCard.textContent = "Add New Card";
  addCard.style.fontWeight = "600";

  let upperSection = document.createElement("div");
  upperSection.id = "upperImagesLine";

  let weAccept = document.createElement("div");
  weAccept.textContent = "We Accept";

  let imgDiv = document.createElement("div");

  let img1 = document.createElement("img");
  img1.src =
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,e_trim/Visa_lztyeu";

  let img2 = document.createElement("img");
  img2.src =
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,e_trim/Mastercard_wqoea2";

  let img3 = document.createElement("img");
  img3.src =
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,e_trim/Amex_ozga1w";

  let img4 = document.createElement("img");
  img4.src =
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,e_trim/Zeta_zybqrc";

  let img5 = document.createElement("img");
  img5.src =
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,e_trim/RuPayColoured_oyd73s_soebkd";

  imgDiv.append(img1, img2, img3, img4, img5);
  upperSection.append(weAccept, imgDiv);

  let paymentForm = document.createElement("form");
  paymentForm.id = "cardDetailsForm";

  let div1 = document.createElement("div");
  div1.className = "cardform";

  let cardInput = document.createElement("input");
  cardInput.type = "tel";
  cardInput.required.id = "cardNumber";
  cardInput.className = "cardform__input";
  cardInput.autocomplete = "off";
  cardInput.placeholder = "";

  let cardNoLabel = document.createElement("label");
  cardNoLabel.for = "cardNumber";
  cardNoLabel.className = "cardform__label";
  cardNoLabel.textContent = "Card Number";

  div1.append(cardInput, cardNoLabel);

  let div2 = document.createElement("div");
  div2.id = "make2InputInSingleRow";

  let cardValidityDiv = document.createElement("div");
  cardValidityDiv.id = "validCard";
  cardValidityDiv.className = "cardform";

  let validCardInput = document.createElement("input");
  validCardInput.type = "tel";
  validCardInput.required.id = "cardValidity";
  validCardInput.className = "cardform__input";
  validCardInput.autocomplete = "off";
  validCardInput.placeholder = "";

  let validCardLabel = document.createElement("label");
  validCardLabel.for = "cardValidity";
  validCardLabel.className = "cardform__label";
  validCardLabel.textContent = "Valid through(MM/YY)";

  cardValidityDiv.append(validCardInput, validCardLabel);

  let cvvDiv = document.createElement("div");
  cvvDiv.id = "cvvCard";
  cvvDiv.className = "cardform";

  let cvvInput = document.createElement("input");
  cvvInput.type = "number";
  cvvInput.type = "password";
  cvvInput.required.id = "cardCVV";
  cvvInput.className = "cardform__input";
  cvvInput.autocomplete = "off";
  cvvInput.placeholder = "";

  let cvvLabel = document.createElement("label");
  cvvLabel.for = "cardCVV";
  cvvLabel.className = "cardform__label";
  cvvLabel.textContent = "CVV";

  cvvDiv.append(cvvInput, cvvLabel);

  div2.append(cardValidityDiv, cvvDiv);

  let div3 = document.createElement("div");
  div3.className = "cardform";

  let nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.required.id = "cardnameOnCard";
  nameInput.className = "cardform__input";
  nameInput.autocomplete = "off";
  nameInput.placeholder = "";

  let nameLable = document.createElement("label");
  nameLable.for = "nameOnCard";
  nameLable.className = "cardform__label";
  nameLable.textContent = "Name on card";

  div3.append(nameInput, nameLable);

  let div4 = document.createElement("div");
  div4.className = "payBtn";

  let btn = document.createElement("button");
  btn.textContent = "PAY";

  div4.append(btn);

  cardDiv.append(addCard, upperSection, div1, div2, div3, div4);
  container.append(cardDiv);
}

document.getElementById("banking").addEventListener("click", bankingInfo);

function bankingInfo() {
  let container = document.getElementById("paymentSectionDiv");
  container.textContent = "";

  let bankingDiv = document.createElement("div");
  bankingDiv.id = "bankingItemBox";

  let banks = document.createElement("div");
  banks.id = "upperBanks";

  let hdfcDiv = document.createElement("div");
  hdfcDiv.id = "hdfc";
  hdfcDiv.className = "upperBankInnerBox";
  hdfcDiv.addEventListener("click", function changeColour() {
    hdfcDiv.style.border = "2px solid green";
    iciciDiv.style.border = "0.5px solid lightgray";
    sbiDiv.style.border = "0.5px solid lightgray";
    axisDiv.style.border = "0.5px solid lightgray";
    kotakDiv.style.border = "0.5px solid lightgray";
  });

  let hImg = document.createElement("img");
  hImg.src =
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_80/PaymentLogos/paymentIcons/netbanking/hdfc";

  let hH3 = document.createElement("h3");
  hH3.textContent = "HDFC";

  hdfcDiv.append(hImg, hH3);

  let iciciDiv = document.createElement("div");
  iciciDiv.id = "icici";
  iciciDiv.className = "upperBankInnerBox";
  iciciDiv.addEventListener("click", function changeColour() {
    hdfcDiv.style.border = "0.5px solid lightgray";
    iciciDiv.style.border = "2px solid green";
    sbiDiv.style.border = "0.5px solid lightgray";
    axisDiv.style.border = "0.5px solid lightgray";
    kotakDiv.style.border = "0.5px solid lightgray";
  });

  let iImg = document.createElement("img");
  iImg.src =
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_80/PaymentLogos/paymentIcons/netbanking/icici";

  let iH3 = document.createElement("h3");
  iH3.textContent = "ICICI";

  iciciDiv.append(iImg, iH3);

  let sbiDiv = document.createElement("div");
  sbiDiv.id = "sbi";
  sbiDiv.className = "upperBankInnerBox";
  sbiDiv.addEventListener("click", function changeColour() {
    hdfcDiv.style.border = "0.5px solid lightgray";
    sbiDiv.style.border = "2px solid green";
    iciciDiv.style.border = "0.5px solid lightgray";
    axisDiv.style.border = "0.5px solid lightgray";
    kotakDiv.style.border = "0.5px solid lightgray";
  });

  let sImg = document.createElement("img");
  sImg.src =
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_80/PaymentLogos/paymentIcons/netbanking/sbi";

  let sH3 = document.createElement("h3");
  sH3.textContent = "SBI";

  sbiDiv.append(sImg, sH3);

  let axisDiv = document.createElement("div");
  axisDiv.id = "axis";
  axisDiv.className = "upperBankInnerBox";
  axisDiv.addEventListener("click", function changeColour() {
    hdfcDiv.style.border = "0.5px solid lightgray";
    axisDiv.style.border = "2px solid green";
    iciciDiv.style.border = "0.5px solid lightgray";
    sbiDiv.style.border = "0.5px solid lightgray";
    kotakDiv.style.border = "0.5px solid lightgray";
  });

  let aImg = document.createElement("img");
  aImg.src =
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_80/PaymentLogos/paymentIcons/netbanking/axis";
  let aH3 = document.createElement("h3");
  aH3.textContent = "AXIS";

  axisDiv.append(aImg, aH3);

  let kotakDiv = document.createElement("div");
  kotakDiv.id = "kotak";
  kotakDiv.className = "upperBankInnerBox";
  kotakDiv.addEventListener("click", function changeColour() {
    hdfcDiv.style.border = "0.5px solid lightgray";
    kotakDiv.style.border = "2px solid green";
    iciciDiv.style.border = "0.5px solid lightgray";
    axisDiv.style.border = "0.5px solid lightgray";
    sbiDiv.style.border = "0.5px solid lightgray";
  });

  let kImg = document.createElement("img");
  kImg.src =
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_80/kotak_gjlw24";
  let kH3 = document.createElement("h3");
  kH3.textContent = "KOTAK";

  kotakDiv.append(kImg, kH3);

  banks.append(hdfcDiv, iciciDiv, sbiDiv, axisDiv, kotakDiv);

  let div4 = document.createElement("div");
  div4.className = "bankPayBtn";

  let btn = document.createElement("button");
  btn.textContent = "PAY";

  div4.append(btn);

  bankingDiv.append(banks, div4);

  container.append(bankingDiv);
}

document.getElementById("upi").addEventListener("click", upiInfo);

function upiInfo() {
  let container = document.getElementById("paymentSectionDiv");
  container.textContent = "";

  let mainDiv = document.createElement("div");
  mainDiv.id = "upiItemBox";

  let div1 = document.createElement("div");
  div1.id = "upiItemBoxFirstInnerDiv";

  let img1 = document.createElement("img");
  img1.src =
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_309,h_84,e_trim/UPI-logo_fjr18d";

  let text = document.createElement("p");
  text.textContent =
    "Transfer money from your bank account using UPI with your registered VPA";

  let span = document.createElement("span");
  span.textContent = "HOW IT WORKS";

  div1.append(img1, text, span);

  let div2 = document.createElement("div");
  div2.id = "imagesLine";

  let innerDiv1 = document.createElement("div");
  innerDiv1.id = "imagesLine";
  innerDiv1.textContent = "WE ACCEPT";

  let innerDiv2 = document.createElement("div");
  innerDiv2.id = "imagesLineImageDiv";

  let image1 = document.createElement("img");
  image1.src =
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/GooglePay_lh8a267";

  let image2 = document.createElement("img");
  image2.src =
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PhonePe_x1g54c7";

  let image3 = document.createElement("img");
  image3.src =
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/BHIM_lkkvup7";

  let image4 = document.createElement("img");
  image4.src =
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Pockets_vxwejm7";

  innerDiv2.append(image1, image2, image3, image4);

  let innerDiv3 = document.createElement("div");
  innerDiv3.textContent = "& more";

  div2.append(innerDiv1, innerDiv2, innerDiv3);

  let hr = document.createElement("hr");

  let h3Pay = document.createElement("h3");
  h3Pay.textContent = "Pay Via New VPA";

  let addP = document.createElement("p");
  addP.textContent = "You must have a Virtual Payment Address";

  let upiForm = document.createElement("form");
  upiForm.id = "upiDetailsForm";

  let formDiv = document.createElement("div");
  formDiv.className = "upiform";

  let formInput = document.createElement("input");
  formInput.type = "text";
  formInput.required.id = "upiId";
  formInput.className = "upiform__input";
  formInput.autocomplete = "off";
  formInput.placeholder = "";

  let formLabel = document.createElement("label");
  formLabel.for = "upiId";
  formLabel.className = "upiform__label";
  formLabel.textContent = "Enter VPA";

  formDiv.append(formInput, formLabel);

  upiForm.append(formDiv);

  let div4 = document.createElement("div");
  div4.className = "bankPayBtn";

  let btn = document.createElement("button");
  btn.textContent = "PAY";

  div4.append(btn);

  mainDiv.append(div1, div2, hr, h3Pay, addP, upiForm, div4);

  container.append(mainDiv);
}
