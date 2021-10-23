const LinksSocialMedia = {
  whatsapp: '5551980440329',
  linkedin: 'arthur-ilha/',
  instagram: 'arthur.ilha1',

  
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    let linkedinLink = "in/";
    let whatsappLink = "send?phone=";

    if(social == "linkedin")linkedinLink = '';
    li.children[0].href = `https://${social}.com/${linkedinLink}${linksSocialMedia[social]}`;
    
    if(social == "whatsapp")whatsapp = '';
    li.children[0].href = `https://api.${social}.com/${whatsappLink}${linksSocialMedia[social]}`;

    
    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}}`
  }
}


const LinksSocialMedia2 = {
  facebook: 'arthurilha01',
  twitter: 'ArthurIlha2',
  pix:'arthur.ilha'
}

function changeSocialMediaLinks2() {
  for (let li of socialLinks2.children) {
    const social = li.getAttribute('class')
   
    
    if(social == "pi")
    li.children[0].href = `https://${social}.me/${LinksSocialMedia[social]}}`
  }
  
    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}}`
}
