var edgeSize = 100;
var timer = null;
var enable= false;


var isMobile = {
    Android: function() {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    iPhone: function() {
          return navigator.userAgent.match(/iPhone/i);
      },
    iPad: function() {
          return navigator.userAgent.match(/iPad/i);
      },
    Opera: function() {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
  };
  if ( isMobile.any() ) {
  
  //alert("Mobile");
  
    

} else {
 // alert("PC");
  
}

if ( isMobile.iPhone() ) {
 // alert("iPhone Mobile");
 document.getElementById("contentslider").style.margin = "-500px 0px -500px 0px";
}

if ( isMobile.Android() ) {
 // alert("Android Mobile");
 document.getElementById("contentslider").style.margin = "-500px 0px -500px 0px";
}


if ( isMobile.iPad() ) {
  // alert("Android Mobile");
  document.getElementById("contentslider").style.margin = "-300px 0px -300px 0px";
 }

var ball=document.getElementById("ball");
var ballimg = document.getElementById("ud");

    var cb = document.getElementById("chkbox");
	var bt = document.getElementById("btntext");


	function onoff()
	{
	  if (cb.checked==false)
	  {
        bt.innerHTML = "Click to Enable HOVER AUTO SCROLL mode";
        enable=false;
        ballimg.style.display="none";
	  }
	  else
	  {
        bt.innerHTML = "Click to Disable HOVER AUTO SCROLL mode";
        enable=true;
        if ( isMobile.any() ) {
  
            ballimg.style.display="block";
            

        } else {
          ballimg.style.display="none";
          
        }
        
        if ( isMobile.iPhone() ) {
        ballimg.style.display="block";
        
        }
        
        if ( isMobile.Android() ) {
            ballimg.style.display="block";
            
        }
      
	  }
	}
    
  
   
       
window.addEventListener( "deviceorientation", handleOrientationEvent,false);
window.addEventListener( "mousemove", handleMousemove, false );


//drawGridLines();

function handleOrientationEvent(event)  {
   
    if (enable== true){
 
        
    var viewportX = ball.offsetLeft;
    var viewportY = ball.offsetTop;

    // Get the viewport dimensions.
    var viewportWidth = document.documentElement.clientWidth;
    var viewportHeight = document.documentElement.clientHeight;
    var edgeTop = edgeSize;
    var edgeLeft = edgeSize;
    var edgeBottom = ( viewportHeight - edgeSize );
    var edgeRight = ( viewportWidth - edgeSize );

    var isInLeftEdge = ( viewportX < edgeLeft );
    var isInRightEdge = ( viewportX > edgeRight );
    var isInTopEdge = ( viewportY < edgeTop );
    var isInBottomEdge = ( viewportY > edgeBottom );
    if ( ! ( isInLeftEdge || isInRightEdge || isInTopEdge || isInBottomEdge ) ) {

        clearTimeout( timer );
        return;

    }

    var documentWidth = Math.max(
        document.body.scrollWidth,
        document.body.offsetWidth,
        document.body.clientWidth,
        document.documentElement.scrollWidth,
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
    );
    var documentHeight = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.body.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight,
        document.documentElement.clientHeight
    );
    var maxScrollX = ( documentWidth - viewportWidth );
    var maxScrollY = ( documentHeight - viewportHeight );
    (function checkForWindowScroll() {

        clearTimeout( timer );

        if ( adjustWindowScroll() ) {

            timer = setTimeout( checkForWindowScroll, 30 );

        }

    })();
    function adjustWindowScroll() {
        var currentScrollX = window.pageXOffset;
        var currentScrollY = window.pageYOffset;
        var canScrollUp = ( currentScrollY > 0 );
        var canScrollDown = ( currentScrollY < maxScrollY );
        var canScrollLeft = ( currentScrollX > 0 );
        var canScrollRight = ( currentScrollX < maxScrollX );
        var nextScrollX = currentScrollX;
        var nextScrollY = currentScrollY;
        var maxStep = 50;

        if ( isInTopEdge && canScrollUp ) {

            var intensity = ( ( edgeTop - viewportY ) / edgeSize );

            nextScrollY = ( nextScrollY - ( maxStep * intensity ) );

        } else if ( isInBottomEdge && canScrollDown ) {

            var intensity = ( ( viewportY - edgeBottom ) / edgeSize );

            nextScrollY = ( nextScrollY + ( maxStep * intensity ) );

        }

        nextScrollX = Math.max( 0, Math.min( maxScrollX, nextScrollX ) );
        nextScrollY = Math.max( 0, Math.min( maxScrollY, nextScrollY ) );

        if (
            ( nextScrollX !== currentScrollX ) ||
            ( nextScrollY !== currentScrollY )
            ) {

            window.scrollTo( nextScrollX, nextScrollY );
            return( true );

        } else {

            return( false );

        }

    }
    console.log("mx:",viewportX);
    console.log("my:",viewportY);
    console.log("bx:",ball.offsetLeft);
    console.log("by:",ball.offsetTop);
document.getElementById("valx").innerHTML=ball.viewportX;

    }


}

function handleMousemove( event ) {

    
    
    if (enable==true) {
 
    var viewportX = event.clientX;
    var viewportY = event.clientY;

    // Get the viewport dimensions.
    var viewportWidth = document.documentElement.clientWidth;
    var viewportHeight = document.documentElement.clientHeight;
    var edgeTop = edgeSize;
    var edgeLeft = edgeSize;
    var edgeBottom = ( viewportHeight - edgeSize );
    var edgeRight = ( viewportWidth - edgeSize );

    var isInLeftEdge = ( viewportX < edgeLeft );
    var isInRightEdge = ( viewportX > edgeRight );
    var isInTopEdge = ( viewportY < edgeTop );
    var isInBottomEdge = ( viewportY > edgeBottom );
    if ( ! ( isInLeftEdge || isInRightEdge || isInTopEdge || isInBottomEdge ) ) {

        clearTimeout( timer );
        return;

    }

    var documentWidth = Math.max(
        document.body.scrollWidth,
        document.body.offsetWidth,
        document.body.clientWidth,
        document.documentElement.scrollWidth,
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
    );
    var documentHeight = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.body.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight,
        document.documentElement.clientHeight
    );
    var maxScrollX = ( documentWidth - viewportWidth );
    var maxScrollY = ( documentHeight - viewportHeight );
    (function checkForWindowScroll() {

        clearTimeout( timer );

        if ( adjustWindowScroll() ) {

            timer = setTimeout( checkForWindowScroll, 30 );

        }

    })();
    function adjustWindowScroll() {
        var currentScrollX = window.pageXOffset;
        var currentScrollY = window.pageYOffset;
        var canScrollUp = ( currentScrollY > 0 );
        var canScrollDown = ( currentScrollY < maxScrollY );
        var canScrollLeft = ( currentScrollX > 0 );
        var canScrollRight = ( currentScrollX < maxScrollX );
        var nextScrollX = currentScrollX;
        var nextScrollY = currentScrollY;
        var maxStep = 50;

        if ( isInTopEdge && canScrollUp ) {

            var intensity = ( ( edgeTop - viewportY ) / edgeSize );

            nextScrollY = ( nextScrollY - ( maxStep * intensity ) );

        } else if ( isInBottomEdge && canScrollDown ) {

            var intensity = ( ( viewportY - edgeBottom ) / edgeSize );

            nextScrollY = ( nextScrollY + ( maxStep * intensity ) );

        }

        nextScrollX = Math.max( 0, Math.min( maxScrollX, nextScrollX ) );
        nextScrollY = Math.max( 0, Math.min( maxScrollY, nextScrollY ) );

        if (
            ( nextScrollX !== currentScrollX ) ||
            ( nextScrollY !== currentScrollY )
            ) {

            window.scrollTo( nextScrollX, nextScrollY );
            return( true );

        } else {

            return( false );

        }

    }

}


}


/*
var isMobile = {
    Android: function() {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    iPhone: function() {
          return navigator.userAgent.match(/iPhone/i);
      },
    iPad: function() {
          return navigator.userAgent.match(/iPad/i);
      },
    Opera: function() {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
  };
  
  //test
  if ( isMobile.any() ) {
  
      
  } else {
    ballimg.style.display="none";
  }
  
  if ( isMobile.iPhone() ) {
  
  }
  
  if ( isMobile.Android() ) {
 
  }

*/
/*
function drawGridLines() {

    var increment = 100;
    var incrementCount = 100;
    var maxDimension = ( increment * incrementCount );

    // Draw the boxes that make up the grid.
    for ( var x = 0 ; x < incrementCount ; x++ ) {
        for ( var y = 0 ; y < incrementCount ; y++ ) {

            var xOffset = ( x * increment );
            var yOffset = ( y * increment );

            var box = document.createElement( "span" );
            box.style.position = "absolute";
            box.style.top = ( yOffset + "px" );
            box.style.left = ( xOffset + "px" );
            box.style.height = ( increment + "px" );
            box.style.width = ( increment + "px" );
            box.style.border = "1px solid #CCCCCC";
            box.style.font = "11px sans-serif";
            box.style.color = "#999999" ;
            box.style.boxSizing = "border-box";
            box.style.padding = "5px 5px 5px 5px";
            box.innerText = ( xOffset + ", " + yOffset );
            document.body.appendChild( box );

        }
    }

}


*/