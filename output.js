// making border uniform throughout the form
var x = window.matchMedia("(max-width: 992px)");
myFunction(x);
x.addListener(myFunction);

function myFunction(x) {
var div_list = document.querySelectorAll('.brdr');
var div_array = [...div_list];
if (x.matches) {
div_array.forEach(div => {
div.style.cssText  = "border-right:1px solid black !important;border-bottom:none !important; min-height: 30px; !important";
});
} else{
div_array.forEach(div => {
div.style.cssText  = "";
});
}
}
const data = {
"application":"new",
"kyc_no.":"",
"account":"normal",
"applicant_prefix":"md",
"applicant_first_name":"mohtesham",
"applicant_middle_name":"",
"applicant_last_name":"",
"maiden_prefix":"",
"maiden_first_name":"",
"maiden_middle_name":"",
"maiden_last_name":"",
"father_prefix":"",
"father_first_name":"",
"father_middle_name":"",
"father_last_name":"",
"mother_prefix":"",
"mother_first_name":"",
"mother_middle_name":"",
"mother_last_name":"",
"date_of_birth":"2022-07-22",
"pan_no":"abcde1234f",
"gender":"male",
"marital":"unmarried",
"nationality":"indian",
"resident":"resident individual",
"OVD":"passport no",
"passport_no":"a1234567",
"photo":{},
"address_line1":"a",
"address_line2":"",
"address_line3":"",
"city":"a",
"district":"a",
"pin_code":"123456",
"state_code":"a",
"country_code":"",
"same":"on",
"OVDs":"passport-no",
"passportno":"a1234567",
"current_address_line1":"a",
"current_address_line2":"",
"current_address_line3":"",
"current_city":"a",
"current_district":"a",
"current_pin_code":"123456",
"current_state_code":"a",
"current_country_code":"",
"office_telephone":"",
"resident_telephone":"",
"mobile_no":"",
"email_id":"",
"remark":"",
"place":"",
"sign":{},
"ipv":"",
"date":"",
"emp_name":"",
"emp_code":"",
"emp_designation":"",
"emp_branch":"",
"signature":{},
"stamp":{}
}
if(document.getElementById('o-new').value == data.application){
document.getElementById('o-new').checked = true;
}
if(document.getElementById('o-update').value == data.application){
document.getElementById('o-update').checked = true;
}
if(document.getElementById('o-normal').value == data.account){
document.getElementById('o-normal').checked = true;
}
if(document.getElementById('o-minor').value == data.account){
document.getElementById('o-minor').checked = true;
}
if(document.getElementById('o-f2f').value == data.account){
document.getElementById('o-f2f').checked = true;
}
if(document.getElementById('o-male').value == data.gender){
document.getElementById('o-male').checked = true;
}
if(document.getElementById('o-female').value == data.gender){
document.getElementById('o-female').checked = true;
}
if(document.getElementById('o-trans').value == data.gender){
document.getElementById('o-trans').checked = true;
}
if(document.getElementById('o-married').value == data.marital){
document.getElementById('o-married').checked = true;
}
if(document.getElementById('o-unmarried').value == data.marital){
document.getElementById('o-unmarried').checked = true;
}
if(document.getElementById('o-other').value == data.marital){
document.getElementById('o-other').checked = true;
}
if(document.getElementById('o-indian').value == data.nationality){
document.getElementById('o-indian').checked = true;
}
if(document.getElementById('o-others').value == data.nationality){
document.getElementById('o-others').checked = true;
}
if(document.getElementById('o-ri').value == data.resident){
document.getElementById('o-ri').checked = true;
}
if(document.getElementById('o-nri').value == data.resident){
document.getElementById('o-nri').checked = true;
}
if(document.getElementById('o-fn').value == data.resident){
document.getElementById('o-fn').checked = true;
}
if(document.getElementById('o-pio').value == data.resident){
document.getElementById('o-pio').checked = true;
}
if(document.getElementById('o-pn').value == data.OVD){
document.getElementById('o-pn').checked = true;
document.getElementById('o-psprt').innerHTML += data.passport_no;
}
if(document.getElementById('o-vc').value == data.OVD){
document.getElementById('o-vc').checked = true;
document.getElementById('o-vic').innerHTML += data.voter_no;
}
if(document.getElementById('o-dlc').value == data.OVD){
document.getElementById('o-dlc').checked = true;
document.getElementById('o-dl').innerHTML += data.driving_licence;
}
if(document.getElementById('o-njcc').value == data.OVD){
document.getElementById('o-njcc').checked = true;
document.getElementById('o-njc').innerHTML += data.nrega_job_card;
}
if(document.getElementById('o-nprc').value == data.OVD){
document.getElementById('o-nprc').checked = true;
document.getElementById('o-npr').innerHTML += data.npr_letter;
}
if(document.getElementById('o-ppa').value == data.OVD){
document.getElementById('o-ppa').checked = true;
document.getElementById('o-adhr').innerHTML += data.proof_of_possession_of_addhar;
}
if(document.getElementById('o-eka').value == data.OVD){
document.getElementById('o-eka').checked = true;
document.getElementById('o-e-kyc').innerHTML += data.e_kyc_authentication;
}
if(document.getElementById('o-ova').value == data.OVD){
document.getElementById('o-ova').checked = true;
document.getElementById('o-verification').innerHTML += data.offline_verification_of_aadhaar;
}
if(data.same == "on"){
document.getElementById('o-same').checked = true;
document.getElementById('o-pn').checked = false;
document.getElementById('o-vc').checked = false;
document.getElementById('o-dlc').checked = false;
document.getElementById('o-njcc').checked = false;
document.getElementById('o-nprc').checked = false;
document.getElementById('o-ppa').checked = false;
document.getElementById('o-eka').checked = false;
document.getElementById('o-ova').checked = false;
} else {
if(document.getElementById('o-pn1').value == data.OVDs){
document.getElementById('o-pn1').checked = true;
document.getElementById('o-psprt1').innerHTML += data.passportno;
}
if(document.getElementById('o-vc1').value == data.OVDs){
document.getElementById('o-vc1').checked = true;
document.getElementById('o-vic1').innerHTML += data.voterno;
}
if(document.getElementById('o-dlc1').value == data.OVDs){
document.getElementById('o-dlc1').checked = true;
document.getElementById('o-dl1').innerHTML += data.drivinglicence;
}
if(document.getElementById('o-njcc1').value == data.OVDs){
document.getElementById('o-njcc1').checked = true;
document.getElementById('o-njc1').innerHTML += data.nregajobcard;
}
if(document.getElementById('o-nprc1').value == data.OVDs){
document.getElementById('o-nprc1').checked = true;
document.getElementById('o-npr1').innerHTML += data.nprletter;
}
if(document.getElementById('o-ppa1').value == data.OVDs){
document.getElementById('o-ppa1').checked = true;
document.getElementById('o-adhr1').innerHTML += data.proofofpossessionofaddhar;
}
if(document.getElementById('o-eka1').value == data.OVDs){
document.getElementById('o-eka1').checked = true;
document.getElementById('o-e-kyc1').innerHTML += data.ekycauthentication;
}
if(document.getElementById('o-ova1').value == data.OVDs){
document.getElementById('o-ova1').checked = true;
document.getElementById('o-verification1').innerHTML += data.offlineverificationofaadhaar;
}
if(document.getElementById('o-dpa1').value == data.OVDs){
document.getElementById('o-dpa1').checked = true;
document.getElementById('o-dpa').innerHTML += data.deemedproofofaddress;
}
document.getElementById('o-cadd1').innerHTML += data.current_address_line1;
document.getElementById('o-cadd2').innerHTML += data.current_address_line2;
document.getElementById('o-cadd3').innerHTML += data.current_address_line3;
document.getElementById('o-ccity1').innerHTML += data.current_city;
document.getElementById('o-cdist1').innerHTML += data.current_district;
document.getElementById('o-cpin1').innerHTML += data.current_pin_code;
document.getElementById('o-cstate1').innerHTML += data.current_state_code;
document.getElementById('o-ciso1').innerHTML += data.current_country_code;
}
document.getElementById('o-prefix').innerHTML += data.applicant_prefix;
document.getElementById('o-fname').innerHTML += data.applicant_first_name;
document.getElementById('o-mname').innerHTML += data.applicant_middle_name;
document.getElementById('o-lname').innerHTML += data.applicant_last_name;
document.getElementById('o-mprefix').innerHTML += data.maiden_prefix;
document.getElementById('o-mfname').innerHTML += data.maiden_first_name;
document.getElementById('o-mmname').innerHTML += data.maiden_middle_name;
document.getElementById('o-mlname').innerHTML += data.maiden_last_name;
document.getElementById('o-fprefix').innerHTML += data.father_prefix;
document.getElementById('o-ffname').innerHTML += data.father_first_name;
document.getElementById('o-fmname').innerHTML += data.father_middle_name;
document.getElementById('o-flname').innerHTML += data.father_last_name;
document.getElementById('o-moprefix').innerHTML += data.mother_prefix;
document.getElementById('o-mofname').innerHTML += data.mother_first_name;
document.getElementById('o-momname').innerHTML += data.mother_middle_name;
document.getElementById('o-molname').innerHTML += data.mother_last_name;
document.getElementById('o-dob').innerHTML += data.date_of_birth;
document.getElementById('o-pan').innerHTML += data.pan_no;
document.getElementById('o-add1').innerHTML += data.address_line1;
document.getElementById('o-add2').innerHTML += data.address_line2;
document.getElementById('o-add3').innerHTML += data.address_line3;
document.getElementById('o-city1').innerHTML += data.city;
document.getElementById('o-dist1').innerHTML += data.district;
document.getElementById('o-pin1').innerHTML += data.pin_code;
document.getElementById('o-state1').innerHTML += data.state_code;
document.getElementById('o-iso1').innerHTML += data.country_code;
document.getElementById('o-off').innerHTML += data.office_telephone;
document.getElementById('o-res').innerHTML += data.resident_telephone;
document.getElementById('o-mob').innerHTML += data.mobile_no;
document.getElementById('o-email').innerHTML += data.email_id;
document.getElementById('o-remark').innerHTML += data.remark;
document.getElementById('o-place').innerHTML += data.place;
document.getElementById('o-off').innerHTML += data.office_telephone;
if(document.getElementById('o-cc').value == data.doc){
document.getElementById('o-cc').checked = true;
}
if(document.getElementById('o-uidai').value == data.doc){
document.getElementById('o-uidai').checked = true;
}
if(document.getElementById('o-ov').value == data.doc){
document.getElementById('o-ov').checked = true;
}
if(document.getElementById('o-dkp').value == data.doc){
document.getElementById('o-dkp').checked = true;
}
if(document.getElementById('o-ed').value == data.doc){
document.getElementById('o-ed').checked = true;
}
if(document.getElementById('o-vb').value == data.doc){
document.getElementById('o-vb').checked = true;
}
document.getElementById('o-ipv').innerHTML += data.ipv;
document.getElementById('o-date').innerHTML += data.date;
document.getElementById('o-emp-name').innerHTML += data.emp_name;
document.getElementById('o-emp-code').innerHTML += data.emp_code;
document.getElementById('o-emp-desig').innerHTML += data.emp_designation;
document.getElementById('o-emp-branch').innerHTML += data.emp_branch;