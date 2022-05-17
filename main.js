const faqs = document.querySelectorAll(".faq__item");
const answer = document.querySelectorAll("faq__answer");
console.log(faqs);


let i;
for(i=0; i<faqs.length; i++){
    faqs[i].addEventListener("click" ,function(){
        answer.classList.toggle("active");
         if (answer.style.display === "block") {
              answer.style.display = "none";
        }  
        else {
              answer.style.display = "block";
        }
    })
}
