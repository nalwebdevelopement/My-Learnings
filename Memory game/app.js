let noofattempt = 0;
const showcolor4 = () =>

{
    document.body.querySelector("#box4").style.backgroundColor = "goldenrod";
    //alert (document.body.querySelector("#box4").getAttributeNames)
    noofattempt++
    at(noofattempt);



}
const showcolor3 = () =>

    {
        document.body.querySelector("#box3").style.backgroundColor = "red";
        noofattempt++
        at(noofattempt);


        //alert (document.body.querySelector("#box4").getAttributeNames)
    
    
    }
const showcolor2 = () =>

        {
            document.body.querySelector("#box2").style.backgroundColor = "red";
            noofattempt++
            at(noofattempt);


            //alert (document.body.querySelector("#box4").getAttributeNames)
        
        
        }
const showcolor1 = () =>

            {
                let b1 = document.body.querySelector("#box1")
                b1.style.backgroundColor = "goldenrod";
                noofattempt++
                at(noofattempt);
                



                //alert (document.body.querySelector("#box4").getAttributeNames)
            
            
 }
 function at(noofattempt1)
{
 
 let pa = document.getElementById("attempts");
 pa.textContent = noofattempt1
 if(noofattempt1 >= 6)
{
    alert("Stop the Game");
}
}
 


