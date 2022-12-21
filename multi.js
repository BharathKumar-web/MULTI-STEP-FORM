
    var job1,job2,job3;
    var educ1,educ2,educ3;
    var faName
    var sex1,sex2,sex3
    var laName
    var phNo,mail;
    var addr;

const slides=document.querySelectorAll('.form')
const btnRight=document.querySelector('.nextBtn')
const subm=document.querySelector(".sub")
let currentSlide=0;
let lastSlide=slides.length;


const moveSlide=function(slide)
{
    slides.forEach((s,i)=> (s.style.transform=
        `translateX(${100*(i-slide)}%)`));
       
}
moveSlide(0)


const nextSlide=function()

{ 
   
faName=document.getElementById("firstName").value
laName=document.getElementById("lastName").value
phNo=document.getElementById("phNumber").value
 mail=document.getElementById("email").value
 addr=document.getElementById("addre").value


 currentSlide++;

if(currentSlide===lastSlide-2)
{
    document.querySelector(".hidBtyn").style.display='none'
    document.querySelector(".hideBtn").style.display="none"
    document.querySelector(".hidButn").style.display="block"
    document.querySelector(".hidBtnEd").style.display='none'
}
if(currentSlide===lastSlide-1)
{
    document.querySelector(".hidBtyn").style.display='none'
    document.querySelector(".hideBtn").style.display="none"
    document.querySelector(".hidButn").style.display="none"
    document.querySelector(".hidBtnEd").style.display='none'
}
if(currentSlide===lastSlide-4)
{
    document.querySelector(".hideBtn").style.display="none"
    document.querySelector(".hidButn").style.display="none"
    document.querySelector(".hidBtyn").style.display='block'
    
}
if(currentSlide===lastSlide-3)
{
    document.querySelector(".hideBtn").style.display="none"
    document.querySelector(".hidButn").style.display="none"
    document.querySelector(".hidBtyn").style.display='none'
    document.querySelector(".hidBtnEd").style.display='block'
    
}
    moveSlide(currentSlide) 
}

function submit()
{
 
     faName=document.getElementById("firstName").value
    laName=document.getElementById("lastName").value
     phNo=document.getElementById("phNumber").value
     mail=document.getElementById("email").value
     addr=document.getElementById("addre").value
     
    document.getElementById('p').innerHTML="First Name: " +faName;
    document.getElementById('ln').innerHTML="Last Name: " +laName;+"<br>"
    document.getElementById('pn').innerHTML="ContactNo: "+phNo
    document.getElementById('em').innerHTML="E-Mail: "+mail
    document.getElementById('ads').innerHTML="Address: "+addr
    
    if(document.getElementById("male").checked)
    {
        sex1=document.getElementById("male").value
        document.getElementById('gender').innerHTML="Gender: "+sex1
    }
    
   else if(document.getElementById("fmale").checked)
    {
        sex2=document.getElementById("fmale").value
        document.getElementById('gender').innerHTML="Gender: "+sex2
    }
  else  if(document.getElementById("others").checked)
    {
        sex3=document.getElementById("others").value
        document.getElementById('gender').innerHTML="Gender: "+sex3
    }
   
    if(document.getElementById("job1").checked)
    {
        job1=document.getElementById("job1").value
        document.getElementById('jb').innerHTML="Applying For: "+job1
    }
    else if(document.getElementById("job2").checked)
    {
        job2=document.getElementById("job2").value
        document.getElementById('jb').innerHTML="Applying For: "+job2
    }
   else if(document.getElementById("job3").checked)
    {
        job3=document.getElementById("job3").value
        document.getElementById('jb').innerHTML="Applying For: "+job3
    }
    
    if(document.getElementById("edu1").checked)
    {
        educ1=document.getElementById("edu1").value
        document.getElementById('qual').innerHTML="Qualification: "+educ1
    }
   else if(document.getElementById("edu2").checked)
    {
        educ2=document.getElementById("edu2").value
        document.getElementById('qual').innerHTML="Qualification: "+educ2
    }
    
   else if(document.getElementById("edu3").checked)
    {
        educ3=document.getElementById("edu3").value
        document.getElementById('qual').innerHTML="Qualification: "+educ3
        
    }
   
    

   
 
if(mail&&addr!='string')
{
   nextSlide() 
}
else{
  alert('please enter correct value ')

}
// const h2 = document.getElementById("name");
// let html = `

// <p> Qualification ${educ}</p>`;
// h2.insertAdjacentHTML("afterend", html);


}



function first()
{

    console.log(currentSlide , 'currentSlide')
    
    faName=document.getElementById("firstName").value
    laName=document.getElementById("lastName").value
    if(faName&&laName!= null )
    {
        nextSlide() 
    }
    else{
       
       
       alert("please enter valid name")
    }


}

function three()
{

    console.log(currentSlide , 'currentSlide')
   

    if(document.getElementById("male").checked|| document.getElementById("fmale").checked 
    ||document.getElementById("others").checked )
    {
        sex1=document.getElementById("male").value
        sex2=document.getElementById("fmale").value
        sex3=document.getElementById("others").value

    }
    if(document.getElementById("job1").checked||
        document.getElementById("job2").checked||
        document.getElementById("job3").checked==true)
        {
        job1=document.getElementById("job1").value
        job2=document.getElementById("job2").value
        job3=document.getElementById("job3").value
        nextSlide() 
        
        }
 else{
   alert(' please fill all the field')
 }


 
}

function four()
{

    if(document.getElementById("edu1").checked|| document.getElementById("edu2").checked 
    ||document.getElementById("edu3").checked==true)
    {
        educ1=document.getElementById("edu1").value
        educ2=document.getElementById("edu2").value
        educ3=document.getElementById("edu3").value
        nextSlide() 
    }
    else{
        alert('please choose one of them')
    }
}


