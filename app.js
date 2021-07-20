const gallery=document.getElementById('gallery');
const popup=document.getElementById('popup');
const selectedImage=document.getElementById('selectedImage');
const imageIndexes=[1,2,3,4,5,6];
const selectedIndex=null;
imageIndexes.forEach(i=>{
    const image=document.createElement('img');
   image.src=`images/Snapchat-${i}.jpg`;
   // image.src=`https://ik.imagekit.io/kox0zytm7qw/Snapchat-${i}_fRDTAQJqC.jpg?updatedAt=1626790410681`;
    
    
    image.alt=`my gallery photos of ${i}`;
    image.classList.add("galleryImg");

    image.addEventListener("click",()=>{
        popup.style.transform=`translateY(0)`;
        selectedImage.src=`images/Snapchat-${i}.jpg`;
        selectedImage.alt=`my gallery photos of ${i}`;

    })

    gallery.appendChild(image);
})
popup.addEventListener("click",()=>{
    popup.style.transform=`translateY(-100%)`;
    popup.src='';
    popup.alt='';
})
