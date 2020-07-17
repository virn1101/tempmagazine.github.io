window.onload= function(){
    for(var i=0; i<5; i++){
    document.getElementsByClassName("containeranim")[i].style.visibility="hidden";
    }
  }
  function fun(){
    for(var i=0; i<5; i++){
    document.getElementsByClassName("containeranim")[i].style.visibility="visible";
    document.getElementsByClassName("containeranim")[i].classList.add('containeranim1');
    document.getElementsByClassName("profile-card")[i].classList.add('profile-card1');
    document.getElementsByClassName("allchars")[i].classList.add('allchars1');
    document.getElementsByClassName("headeranim")[i].classList.add('headeranim1');
    document.getElementsByClassName("profile-bio")[i].classList.add('profile-bio1');
    }

  }
  function nofun(){
 for(var i=0; i<5; i++){
      document.getElementsByClassName("containeranim")[i].style.visibility="hidden";
    }

  }

  const gambitGalleryIsInView = el => {
	const scroll = window.scrollY || window.pageYOffset
	const boundsTop = el.getBoundingClientRect().top + scroll
  console.log(document.querySelector( '.tester' ).offsetHeight);
	const viewport = {
		top: scroll,
 // 	bottom: scroll + window.innerHeight,
  bottom: scroll + document.querySelector( '.tester' ).offsetHeight,
 
	}
	
    const bounds = {
		top: boundsTop,
  	bottom: boundsTop + el.clientHeight,
 // bottom: boundsTop + document.querySelector( '.tester' ).offsetHeight,
	}
	
	return ( bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom ) 
		|| ( bounds.top <= viewport.bottom && bounds.top >= viewport.top );
}


// Usage.
document.addEventListener( 'DOMContentLoaded', () => {
	const tester = document.querySelector( '.tester' )
//	const answer = document.querySelector( '.answer' )
	
	const handler = () => raf( () => {
  //  answer.innerHTML = 'Is the div visible? ' + ( gambitGalleryIsInView( tester ) ? 'Yes' : 'No' )
  //  gambitGalleryIsInView( tester ) ? fun() : nofun() ;
  if(gambitGalleryIsInView( tester )){
    fun();
  }
	} )
	
	handler()
	window.addEventListener( 'scroll', handler )
} )

// requestAnimationFrame
const raf = 
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function( callback ) {
        window.setTimeout( callback, 1000 / 60 )
    }
