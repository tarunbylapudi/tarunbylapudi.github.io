
setTimeout(() => {
    const profilevisits = document.getElementById('profilevisits');
    profilevisits.style.display = 'hidden'; 
  }, 1000);
  

 function websiteVisits(response) {
   // document.querySelector("#visits").textContent = response.value;

    var CountFunction=setInterval(countAnimation,40)
    let count=0;

    function countAnimation(){
        count++;
        document.querySelector("#visits").textContent=count;

        if (count==response.value) {

            clearInterval(CountFunction)
            
        }

    }
}