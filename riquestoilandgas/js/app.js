const chars = document.querySelectorAll('.text path');

chars.forEach(char =>{
    const totalLength = char.getTotalLength();
    console.log("Total Length: ", totalLength); 
})