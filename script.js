const billamount=document.querySelector('#bill-amount');
const cashgiven=document.querySelector('#cash-given');
const checkbtn=document.querySelector('#check');
const msg=document.querySelector('#error-msg')
const notesArray=document.querySelectorAll('.notes');
const availableNotes=[2000,500,100,20,10,1];
checkbtn.addEventListener('click',function()
{
    msg.style.display="none";
    if(billamount.value>0)
    {
          if(cashgiven.value> billamount.value)
          {
            const amountTobeReturned=cashgiven.value-billamount.value
            calculateChange(amountTobeReturned)
          }
          else
          {
              showMessage('No Cash To be returned')
          }
    }
    else{
     showMessage('Cannot put Negative Value')
    }
})


function calculateChange(amountTobeReturned)
{
    console.log(amountTobeReturned)
for (let i=0;i<availableNotes.length;i++)
{
    let  numofNotes=Math.trunc(amountTobeReturned/availableNotes[i]);
    console.log(numofNotes)
    amountTobeReturned %=availableNotes[i];
    notesArray[i].innerText=numofNotes;
    console.log(notesArray[i])

}
}

function showMessage(message)
{
    msg.style.display="block";
    msg.innerText=message
}