let mobileNumber = prompt("Enter mobile number:");
if(mobileNumber<=9999999999){
    let rechargeAmount = Number(prompt("Enter recharge amount:"));
    let activatedBenifits ;
    let gst;
    let finalAmount;
    if(rechargeAmount>=1000){
        activatedBenifits="Unlimited Data upto3months + Unlimited Calls ";
    }
    else if(rechargeAmount>=500){
        activatedBenifits=" unlimited Data+ Unlimited Call +per month";
    }
    else if(rechargeAmount>=300){
        activatedBenifits = "5GB/day + 100 Calls/day";
    }
    else{
        activatedBenifits = "Basic plan";
    }
    gst=rechargeAmount*18/100;
    finalAmount=rechargeAmount+gst;

    document.getElementById("mobile").innerHTML=`<h1>Mobile Recharge Application</h1>`+`Mobile Number :${mobileNumber}<br>`+`Recharge Amount :${rechargeAmount}<br>`+`Activated Benefits :${activatedBenifits}<br>`+`GST :${gst}<br>`+`Final Amount :${finalAmount}`;
}
else{
    document.getElementById("mobile").innerHTML=`Invalid Number`
}