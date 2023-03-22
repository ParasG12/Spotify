console.log("welcome to spotify");
 let audio = new Audio('1.mp3.mp3');
 let index = 0;
 let masterSongName = document.getElementById('masterSongName')
 masterSongName.innertext='Love me like you do-By Justin beiber';
// audio.play()
let masterPlay = document.getElementById('masterPlay')
let progressBar = document.getElementById('myprogressBar');
let gif = document.getElementById('gif');
let songItem = Array.from(document.getElementsByClassName('songItem'))
let songItemPlay = Array.from(document.getElementsByClassName('songItemPlay'))

let songs = [
    {song:"Let me love you -By Justin beiber",src:"1.mp3.mp3", cover:"1.jpg"},    {song:"Attention-By Charlie puth",src:"2nd.mp3", cover:"2.jpg"},    {song:"Bewafa - By Imran khan",src:"3rd.mp3", cover:"3.jpg"},
    {song:"See you again-By Charlie puth",src:"4th.mp3", cover:"4.jpg"},    {song:"Cheap Thrills - By Sia",src:"5th.mp3", cover:"5.jpg"},
    {song:"Faded-By Alna Walker",src:"6th.mp3", cover:"6.jpg"},    {song:"Shape Of You - By Ed sheeran",src:"7th.mp3", cover:"7.jpg"},    {song:"Despacito",src:"8th.mp3", cover:"8.jpg"},
    // {song:"salam-e-ishq",src:"7.mp3", cover:"1.jpg"}

]
masterPlay.addEventListener('click',()=>{
    if(audio.paused||audio.currentTime<=0){
        audio.play()
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
        gif.style.opacity='1'

    }
    else{
        audio.pause()
        masterPlay.classList.add('fa-circle-play')
        masterPlay.classList.remove('fa-circle-pause')
        gif.style.opacity="0"


    }


})
songItem.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName('img')[0].src=songs[i].cover;
    element.getElementsByClassName('song')[0].innerText=songs[i].song;





})
 const makeAllSongPlay = ()=>{
     songItemPlay.forEach((element)=>{
         element.classList.remove('fa-circle-pause');
    element.classList.add('fa-circle-play')

    })



 }
songItemPlay.forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        if(e.target.classList.contains('fa-circle-pause')){
            e.target.classList.remove('fa-circle-pause')
            e.target.classList.add('fa-circle-play');
            audio.pause()
            audio.currentTime=0;

        }
        else{
    
         makeAllSongPlay()
         
         

         
         index = Number.parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play')
        e.target.classList.add('fa-circle-pause')
        masterSongName.innerHTML=`${songs[index].song}`
        audio.currentTime=0;
        audio.src=`${songs[index].src}`
        audio.play()
        gif.style.opacity='1'
        masterPlay.classList.remove('fa-circle.play')
        masterPlay.classList.add('fa-circle-pause')
         }
        }
      

    )


})

audio.addEventListener('timeupdate',()=>{
  
    progress = ((audio.currentTime/audio.duration)*100)
    console.log(progress);
    progressBar.value=progress;



})
progressBar.addEventListener('change',()=>{
    audio.currentTime=progressBar.value*audio.duration/100;

})
document.getElementById('next').addEventListener('click',()=>{
    if(index>=7){
        index=0;
    }

    else{  index=index+1;}
  
    audio.currentTime=0;
    audio.src=`${songs[index].src}`
    masterSongName.innerHTML=`${songs[index].song}`
    audio.play()
    gif.style.opacity='1'
    masterPlay.classList.remove('fa-circle-play')
    masterPlay.classList.add('fa-circle-pause')


})
document.getElementById('previous').addEventListener('click',()=>{
    if(index<=0){
        index=0;
    }

    else{  index=index-1;}
  
  
    audio.currentTime=0;
    audio.src=`${songs[index].src}`
    masterSongName.innerHTML=`${songs[index].song}`
    audio.play()
    gif.style.opacity='1'
    masterPlay.classList.remove('fa-circle-play')
    masterPlay.classList.add('fa-circle-pause')


})

