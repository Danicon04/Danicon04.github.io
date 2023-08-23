// NAV DROP DOWN START
// document.querySelector('.Open').addEventListener('click',()=>{
//     document.querySelector('.nav-link').style.display='flex';
//     document.querySelector('.Open').style.display='none'
//     document.querySelector('.Close').style.display='inline-block'
// })

// document.querySelector('.Close').addEventListener('click',()=>{
//     document.querySelector('.nav-link').style.display='none';
//     document.querySelector('.Open').style.display='inline-block'
//     document.querySelector('.Close').style.display='none'
// }) 

document.querySelector('.Open').addEventListener('click', () => {
    document.querySelector('.nav-link').style.display = 'flex';
    document.querySelector('.Open').style.display = 'none';
    document.querySelector('.Close').style.display = 'inline-block';
  });
  
  document.querySelector('.Close').addEventListener('click', () => {
    document.querySelector('.nav-link').style.display = 'none';
    document.querySelector('.Open').style.display = 'inline-block';
    document.querySelector('.Close').style.display = 'none';
  });
  
// NAV DROP DOWN END


// INLINE CHECK START
document.querySelector('.inline').addEventListener('click',()=>{
    document.querySelector('.inline input').classList.toggle('red')
})

// INLINE CHECK END 