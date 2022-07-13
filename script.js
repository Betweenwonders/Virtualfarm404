

// function definitions
const rotateScene = function ( event ) {
    
    rX -= event.originalEvent.movementY / 100
    rY += event.originalEvent.movementX / 100

    if (rX>-45 && rX<-20){
        $scene.css('--rX', rX + 'deg');
        $scarecrowFront.css( ' --rY', -rY+'deg' );
    } else (
        rX=-32,
        rY=42
        // gsap.to('.scene',{transform:'rotateY(42deg) rotateX(-32deg)',duration:3, ease:"expo.out"})
        )

    if (rY>10 && rY<60){
    $scene.css('--rY', rY + 'deg');
    $scarecrowFront.css( '--rY', -rY+'deg' );
    } else (
        rX=-32,
        rY=42
        // gsap.to('.scene',{transform:'rotateY(42deg) rotateX(-32deg)',duration:3, ease:"expo.out"})
        )

}


////scene rotate constrain

const rotateconstraint = function () {

}

//variable declarations
let $window = $( window );
let $scene = $( '.scene' );
let rX = -32;
let rY = 42;

let $scarecrowFront = $( '.scarecrow .front' );





// script initialisation
$window.on( 'mousedown', function () {
    $window.on( 'mousemove', rotateScene)
} );

$window.on( 'mouseup', function () {
    $window.off('mousemove', rotateScene)
} );

$( '.face' ).prop( 'draggable', false );




/////////////////House///////////////////////////////////////////////


$( '.house').on( 'mouseover', function () {

    $('#door').css('content','url(images/door_animated.gif)');
})

$( '.house').on( 'mouseleave', function () {
    $('#door').css('content','url(images/house_slidingdoor.png)');
})



///click on house
$( '.house').on( 'click', function () {
    

    $('.housemenu').css('visibility','visible');

  

    $( '.housemenu').on( 'click', function () {
        $('.housemenu').css('visibility','hidden');

    })
})


//////click on farming////////////////////////////////




var isplanted1 = false;
var isplanted2 = false;
var isplanted3 = false;
var isplanted4 = false;
var isplanted5 = false;
var isplanted6 = false;

const callItemlist = function(){

    $('.items_UI').css('visibility','visible');
    $('.carrot').css('visibility','visible');

}

const closeItemlist = function(){
    $('.items_UI').css('visibility','hidden');
    $('.item').css('visibility','hidden');

}


$('.place1').on( 'click', function () {

    if (isplanted1==false){
        
    // $('.items_UI').css('visibility','visible');

    // $('.carrot').css('visibility','visible');
    callItemlist();

    
    $( '.next').on( 'click', function () {
        // $('.items_UI').css('visibility','hidden');
        // $('.item').css('visibility','hidden');
        closeItemlist();
    })

    }
  
})

$('.place2').on( 'click', function () {

    if (isplanted2==false){
        
    // $('.items_UI').css('visibility','visible');

    // $('.carrot').css('visibility','visible');
    callItemlist();

    
    $( '.next').on( 'click', function () {
        // $('.items_UI').css('visibility','hidden');
        // $('.item').css('visibility','hidden');
        closeItemlist();
    })

    }
  
})

$('.place3').on( 'click', function () {

    if (isplanted3==false){
        
    // $('.items_UI').css('visibility','visible');

    // $('.carrot').css('visibility','visible');
    callItemlist();

    
    $( '.next').on( 'click', function () {
        // $('.items_UI').css('visibility','hidden');
        // $('.item').css('visibility','hidden');
        closeItemlist();
    })

    }
  
})


$('.place4').on( 'click', function () {

    if (isplanted4==false){
        
    // $('.items_UI').css('visibility','visible');

    // $('.carrot').css('visibility','visible');
    callItemlist();

    
    $( '.next').on( 'click', function () {
        // $('.items_UI').css('visibility','hidden');
        // $('.item').css('visibility','hidden');
        closeItemlist();
    })

    }
  
})


$('.flowerplace1').on( 'click', function () {

    if (isplanted5==false){
        
    // $('.items_UI').css('visibility','visible');

    // $('.carrot').css('visibility','visible');
    callItemlist();

    
    $( '.next').on( 'click', function () {
        // $('.items_UI').css('visibility','hidden');
        // $('.item').css('visibility','hidden');
        closeItemlist();
    })

    }
  
})

$('.flowerplace2').on( 'click', function () {

    if (isplanted6==false){
        
    // $('.items_UI').css('visibility','visible');

    // $('.carrot').css('visibility','visible');
    callItemlist();

    
    $( '.next').on( 'click', function () {
        // $('.items_UI').css('visibility','hidden');
        // $('.item').css('visibility','hidden');
        closeItemlist();
    })

    }
  
})

$('.place1').on( 'click', function () {

    if (isplanted1==false){
        
    // $('.items_UI').css('visibility','visible');

    // $('.carrot').css('visibility','visible');
    callItemlist();

    
    $( '.next').on( 'click', function () {
        // $('.items_UI').css('visibility','hidden');
        // $('.item').css('visibility','hidden');
        closeItemlist();
    })

    }
  
})


/////what did the user click////////////////////////////////

var chosen = 1;

////////itemchoose/////////
$( '.1').on( 'click', function () {

    $('.carrot').css('visibility','visible');
    $('.strawberry').css('visibility','hidden');
    $('.pumpkin').css('visibility','hidden');
    $('.corn').css('visibility','hidden');
    $('.cabbage').css('visibility','hidden');
    $('.lavender').css('visibility','hidden');
    $('.daisy').css('visibility','hidden');
    $('.rose').css('visibility','hidden');
    chosen =1;

})

$( '.2').on( 'click', function () {

    $('.carrot').css('visibility','hidden');
    $('.strawberry').css('visibility','visible');
    $('.pumpkin').css('visibility','hidden');
    $('.corn').css('visibility','hidden');
    $('.cabbage').css('visibility','hidden');
    $('.lavender').css('visibility','hidden');
    $('.daisy').css('visibility','hidden');
    $('.rose').css('visibility','hidden');
    chosen = 2;
    console.log(chosen);

})

$( '.3').on( 'click', function () {

    $('.carrot').css('visibility','hidden');
    $('.strawberry').css('visibility','hidden');
    $('.pumpkin').css('visibility','visible');
    $('.corn').css('visibility','hidden');
    $('.cabbage').css('visibility','hidden');
    $('.lavender').css('visibility','hidden');
    $('.daisy').css('visibility','hidden');
    $('.rose').css('visibility','hidden');
    chosen = 3;

})

$( '.4').on( 'click', function () {

    $('.carrot').css('visibility','hidden');
    $('.strawberry').css('visibility','hidden');
    $('.pumpkin').css('visibility','hidden');
    $('.corn').css('visibility','visible');
    $('.cabbage').css('visibility','hidden');
    $('.lavender').css('visibility','hidden');
    $('.daisy').css('visibility','hidden');
    $('.rose').css('visibility','hidden');
    chosen = 4;
    console.log(chosen);

})

$( '.5').on( 'click', function () {

    $('.carrot').css('visibility','hidden');
    $('.strawberry').css('visibility','hidden');
    $('.pumpkin').css('visibility','hidden');
    $('.corn').css('visibility','hidden');
    $('.cabbage').css('visibility','visible');
    $('.lavender').css('visibility','hidden');
    $('.daisy').css('visibility','hidden');
    $('.rose').css('visibility','hidden');
    chosen = 5;
    console.log(chosen);

})

$( '.6').on( 'click', function () {

    $('.carrot').css('visibility','hidden');
    $('.strawberry').css('visibility','hidden');
    $('.pumpkin').css('visibility','hidden');
    $('.corn').css('visibility','hidden');
    $('.cabbage').css('visibility','hidden');
    $('.lavender').css('visibility','visible');
    $('.daisy').css('visibility','hidden');
    $('.rose').css('visibility','hidden');
    chosen = 6;
    console.log(chosen);

})
$( '.7').on( 'click', function () {

    $('.carrot').css('visibility','hidden');
    $('.strawberry').css('visibility','hidden');
    $('.pumpkin').css('visibility','hidden');
    $('.corn').css('visibility','hidden');
    $('.cabbage').css('visibility','hidden');
    $('.lavender').css('visibility','hidden');
    $('.daisy').css('visibility','visible');
    $('.rose').css('visibility','hidden');
    chosen = 7;
    console.log(chosen);

})
$( '.8').on( 'click', function () {

    $('.carrot').css('visibility','hidden');
    $('.strawberry').css('visibility','hidden');
    $('.pumpkin').css('visibility','hidden');
    $('.corn').css('visibility','hidden');
    $('.cabbage').css('visibility','hidden');
    $('.lavender').css('visibility','hidden');
    $('.daisy').css('visibility','hidden');
    $('.rose').css('visibility','visible');
    chosen = 8;
    console.log(chosen);

})


///////lets plant!!!////

$( '.place1').on( 'click', function () {
    
    $( '.okay').on( 'click', function () {

        $('.place1').css('opacity','100')
        closeItemlist();
        isplanted1 = true;
    
    })
})

$( '.place2').on( 'click', function () {
    
    $( '.okay').on( 'click', function () {

        $('.place2').css('opacity','100')
        closeItemlist();
        isplanted2 = true;
    
    })
})

$( '.place3').on( 'click', function () {
    
    $( '.okay').on( 'click', function () {

        $('.place3').css('opacity','100')
        closeItemlist();
        isplanted3 = true;
    
    })
})

$( '.place4').on( 'click', function () {
    
    $( '.okay').on( 'click', function () {

        $('.place4').css('opacity','100')
        closeItemlist();
        isplanted4 = true;
    
    })
})

$( '.flowerplace1').on( 'click', function () {
    
    $( '.okay').on( 'click', function () {

        $('.flowerplace1').css('opacity','100')
        closeItemlist();
        isplanted5 = true;
    
    })
})

$( '.flowerplace2').on( 'click', function () {
    
    $( '.okay').on( 'click', function () {

        $('.flowerplace2').css('opacity','100')
        closeItemlist();
        isplanted6 = true;
    
    })
})





















////////////dropfruit////////////////////////////////



const getfruit= function(){
    // const x = Math.random();
    // console.log(x)
    let y= ".apple"


    // if (x>0.5){
        console.log(y)
        $(y).css('visibility','visible');
    // }
}

const getfruit2= function(){
    // const x = Math.random();
    // console.log(x)
    let y= ".cherry"
    // if (x>0.5){
        console.log(y)
        $(y).css('visibility','visible');
    // }
}

    ////tree shake fall//
    $( '.tree3').on( 'click', function () {

        $('#tree3face1').css('content','url(images/palmtree_shake.gif)');
        $('#tree3face2').css('content','url(images/palmtree_shake.gif)');
    
        setTimeout(function(){ 
        
            $('#tree3face1').css('content','url(images/palmtree.png)');
            $('#tree3face2').css('content','url(images/palmtree.png)');
            
            ; }, 1800);
    
    })

    $( '.tree4').on( 'click', function () {

        $('#tree4face1').css('content','url(images/palmtree_shake.gif)');
        $('#tree4face2').css('content','url(images/palmtree_shake.gif)');
    
        setTimeout(function(){ 
        
            $('#tree4face1').css('content','url(images/palmtree.png)');
            $('#tree4face2').css('content','url(images/palmtree.png)');
            
            ; }, 1800);
    
    })

    ////tree shake normal tree
    $( '.tree').on( 'click', function () {

    $('#tree1face1').css('content','url(images/tree_shake.gif)');
    $('#tree1face2').css('content','url(images/tree_shake.gif)');


    setTimeout(function(){ 
    
        $('#tree1face1').css('content','url(images/tree.png)');
        $('#tree1face2').css('content','url(images/tree.png)');

        getfruit();

            setTimeout(function(){ 
    


            $('.apple').css('visibility','hidden');
    
            
            ; }, 2000);

        
     ; }, 1800);



})

$( '.tree2').on( 'click', function () {

    $('#tree2face1').css('content','url(images/tree_shake.gif)');
    $('#tree2face2').css('content','url(images/tree_shake.gif)');

    setTimeout(function(){ 
    
        $('#tree2face1').css('content','url(images/tree.png)');
        $('#tree2face2').css('content','url(images/tree.png)');

        getfruit2();

            setTimeout(function(){ 
    

    
            $('.cherry').css('visibility','hidden');

            // $('.orange').css('visibility','hidden');
    
            
            ; }, 2000);
        
        ; }, 1800);

})

    
    ////tree shake fall//




///CHANGE DAY/NIGHt////////////////////////////////

var days = 0;

$('.sun').on('click', function(){


    gsap.to('.sun',{x:500,y:-500,delay:-2,duration:1,ease: "expo.out"})
    gsap.to('.moon',{marginLeft:'0px',marginTop:'0px',delay:-2,duration:2,ease: "expo.out"})
        $('.moon').css('visibility','visible');
    gsap.to('body',{backgroundPosition:'0px -200px',duration:2, ease: Linear.easeNone})
    gsap.to('.face',{filter:'brightness(0.8)',duration:2, ease: "expo.out"})
    // gsap.to('.soundbutton',{filter:'brightness(1.2)'})
    // gsap.to('.mutebutton',{filter:'brightness(1.2)'})


})

$('.moon').on('click', function(){

    gsap.to('body',{backgroundPosition:'0px -2200px',duration:1, ease: Linear.easeNone})
    gsap.to('.face',{filter:'brightness(1.05)',duration:2, ease: Linear.easeNone})
    gsap.to('.sun',{x:-25,y:20,delay:-2,duration:2,ease: "expo.out"})
    gsap.to('.moon',{marginLeft:'-200px',marginTop:'-200px',delay:-2,duration:2,ease: "expo.out"})


    if (isplanted1==true || isplanted2==true || isplanted3==true || isplanted4==true || isplanted5==true || isplanted6==true ){

        days+=2
        console.log(days)

    }


    if (isplanted1==true && days==2){$('.place1').css('content','url(images/crops/carrot_growing3.png');}

    if (isplanted2==true && days==2){$('.place2').css('content','url(images/crops/straw_growing3.png');}
    
    if (isplanted3==true && days==2){$('.place3').css('content','url(images/crops/pumpkin_growing3.png');}
    
    if (isplanted4==true && days==2){$('.place4').css('content','url(images/crops/corn_growing3.png');}
    
    if (isplanted5==true && days==2){$('.flowerplace1').css('content','url(images/crops/rose_growing3.png');}
    
    if (isplanted6==true && days==2){$('.flowerplace2').css('content','url(images/crops/daisy_growing3.png');}

    ////////////////////////////////

    if (isplanted1==true && days==4){$('.place1').css('content','url(images/crops/carrot_growing4.png');}

    if (isplanted2==true && days==4){$('.place2').css('content','url(images/crops/straw_growing4.png');}
    
    if (isplanted3==true && days==4){$('.place3').css('content','url(images/crops/pumpkin_growing4.png');}
    
    if (isplanted4==true && days==4){$('.place4').css('content','url(images/crops/corn_growing4.png');}
    
    if (isplanted5==true && days==4){$('.flowerplace1').css('content','url(images/crops/rose_growing4.png');}
    
    if (isplanted6==true && days==4){$('.flowerplace2').css('content','url(images/crops/daisy_growing4.png');}

    ////////////////////////////////////////////////////////////////

    if (isplanted1==true && days==6){$('.place1').css('content','url(images/crops/carrot_growing5.png');}

    if (isplanted2==true && days==6){$('.place2').css('content','url(images/crops/straw_growing5.png');}
    
    if (isplanted3==true && days==6){$('.place3').css('content','url(images/crops/pumpkin_growing5.png');}
    
    if (isplanted4==true && days==6){$('.place4').css('content','url(images/crops/corn_growing5.png');}
    
    if (isplanted5==true && days==6){$('.flowerplace1').css('content','url(images/crops/rose_growing5.png')
    
    $('.flowerplace1').on('click', function(){
        $('.flowerplace1').css('opacity','0');
        isplanted5 = false;
    })

    ;}
    
    if (isplanted6==true && days==6){$('.flowerplace2').css('content','url(images/crops/daisy_growing5.png')
    
    $('.flowerplace2').on('click', function(){
        $('.flowerplace2').css('opacity','0');
        isplanted6 = false;
    })

    ;}  

    ////////////////////////////////////////////////////////////////////////

    if (isplanted1==true && days==8){$('.place1').css('content','url(images/crops/carrot_growing6.png')

    $('.place1').on('click', function(){
        $('.place1').css('opacity','0');
        isplanted1 = false;
    })

    ;}

    if (isplanted2==true && days==8){$('.place2').css('content','url(images/crops/straw_growing6.png')
    $('.place2').on('click', function(){
        $('.place2').css('opacity','0');
        isplanted2 = false;
    })

    ;}
    
    if (isplanted3==true && days==8){$('.place3').css('content','url(images/crops/pumpkin_growing6.png')
    
    $('.place3').on('click', function(){
        $('.place3').css('opacity','0');
        isplanted3 = false;
    })

    ;}
    
    if (isplanted4==true && days==8){$('.place4').css('content','url(images/crops/corn_growing6.png')
    
    $('.place4').on('click', function(){
        $('.place4').css('opacity','0');
        isplanted4 = false;
    })

    ;}
    
    if (isplanted5==true && days==8){$('.flowerplace1').css('content','url(images/crops/rose_growing6.png')
    
    $('.flowerplace1').on('click', function(){
        $('.flowerplace1').css('opacity','0');
        isplanted5 = false;
    })

    ;}
    
    if (isplanted6==true && days==8){$('.flowerplace2').css('content','url(images/crops/daisy_growing6.png')
    
    $('.flowerplace2').on('click', function(){
        $('.flowerplace2').css('opacity','0');
        isplanted6 = false;
    })
    ;}
 
    

    ///////season////////////////////////////////
    if (days==2){$('.land .top').css('content','url(images/land_top.png)')
    $('.wildflowers img').css('content','url(images/flowers.gif)')
    $('.land .side').css('content','url(images/land_sides.png)')
    $('.land .side2').css('content','url(images/land_sides.png)')
    $('.scarecrow img').css('content','url(images/scarecrow.png)')
    

    ;}
    if (days==4){$('.land .top').css('content','url(images/season_summer.png)')
    $('.wildflowers img').css('content','url(images/flowers_summer.gif)')
    $('.land .side').css('content','url(images/land_sides_summer.png)')
    $('.land .side2').css('content','url(images/land_sides_summer.png)')
    $('.lotus1').css('content','url(images/lotus_summer.gif)')
    $('.lotus2').css('content','url(images/lotus_summer.gif)')
    $('.lotus3').css('content','url(images/lotus_summer.gif)')
    $('.bubble').css('content','url(images/bubbles_summer.gif)')
    $('.bubble2').css('content','url(images/bubbles_summer.gif)')
    $('.bubble3').css('content','url(images/bubbles_summer.gif')
    $('.scarecrow img').css('content','url(images/scarecrow_summer.png)')
    $('.grass .grass1').css('content','url(images/grass_summer.png)')
    $('.grass .grass2').css('content','url(images/grass_summer.png)')
    $('.grass2 .grass1').css('content','url(images/grass_summer.png)')
    $('.grass2 .grass2').css('content','url(images/grass_summer.png)')
    $('.grass2 .grass3').css('content','url(images/grass_summer.png)')
    $('.grass3 .grass1').css('content','url(images/grass_summer.png)')
    $('.grass3 .grass2').css('content','url(images/grass_summer.png)')
    $('.grass3 .grass3').css('content','url(images/grass_summer.png)')
    $('#tree1face1').css('content','url(images/tree_summer.png)');
    $('#tree1face2').css('content','url(images/tree_summer.png)');
    $('#tree2face1').css('content','url(images/tree_summer.png)');
    $('#tree2face2').css('content','url(images/tree_summer.png)');
    $('#tree3face1').css('content','url(images/palmtree_summer.png)');
    $('#tree3face2').css('content','url(images/palmtree_summer.png)');
    $('#tree4face1').css('content','url(images/palmtree_summer.png)');
    $('#tree4face2').css('content','url(images/palmtree_summer.png)');
    


    ;}
    if (days==6){$('.land .top').css('content','url(images/season_fall.png)')
    $('.wildflowers img').css('content','url(images/flowers_fall.gif)')
    $('.land .side').css('content','url(images/land_sides_fall.png)')
    $('.land .side2').css('content','url(images/land_sides_fall.png)')
    $('.fence .front').css('content','url(images/fence_fall.png)')
    $('.fence .left').css('content','url(images/fence_fall.png)')
    $('.fence .right').css('content','url(images/fence2_fall.png)')
    $('.lotus1').css('content','url(images/lotus_fall.gif)')
    $('.lotus2').css('content','url(images/lotus_fall.gif)')
    $('.lotus3').css('content','url(images/lotus_fall.gif)')
    $('.bubble').css('content','url(images/bubbles.gif)')
    $('.bubble2').css('content','url(images/bubbles.gif)')
    $('.bubble3').css('content','url(images/bubbles.gif')
    $('.scarecrow img').css('content','url(images/scarecrow_fall.png)')
    $('#tree1face1').css('content','url(images/tree_fall.png)')
    $('#tree1face2').css('content','url(images/tree_fall.png)')
    $('#tree2face1').css('content','url(images/tree_fall.png)')
    $('#tree2face2').css('content','url(images/tree_fall.png)')
    $('#tree3face1').css('content','url(images/palmtree_fall.png)')
    $('#tree3face2').css('content','url(images/palmtree_fall.png)')
    $('#tree4face1').css('content','url(images/palmtree_fall.png)')
    $('#tree4face2').css('content','url(images/palmtree_fall.png)')

    $('.grass .grass1').css('content','url(images/grass_fall.png)')
    $('.grass .grass2').css('content','url(images/grass_fall.png)')
    $('.grass2 .grass1').css('content','url(images/grass_fall.png)')
    $('.grass2 .grass2').css('content','url(images/grass_fall.png)')
    $('.grass2 .grass3').css('content','url(images/grass_fall.png)')
    $('.grass3 .grass1').css('content','url(images/grass_fall.png)')
    $('.grass3 .grass2').css('content','url(images/grass_fall.png)')
    $('.grass3 .grass3').css('content','url(images/grass_fall.png)')

    

    ////tree shake fall//
    $( '.tree3').on( 'click', function () {

        $('#tree3face1').css('content','url(images/palmtree_shake_fall.gif)');
        $('#tree3face2').css('content','url(images/palmtree_shake_fall.gif)');
    
        setTimeout(function(){ 
        
            $('#tree3face1').css('content','url(images/palmtree_fall.png)');
            $('#tree3face2').css('content','url(images/palmtree_fall.png)');
            
            ; }, 1800);
    
    })

    $( '.tree4').on( 'click', function () {

        $('#tree4face1').css('content','url(images/palmtree_shake_fall.gif)');
        $('#tree4face2').css('content','url(images/palmtree_shake_fall.gif)');
    
        setTimeout(function(){ 
        
            $('#tree4face1').css('content','url(images/palmtree_fall.png)');
            $('#tree4face2').css('content','url(images/palmtree_fall.png)');
            
            ; }, 1800);
    
    })

    ////tree shake normal tree
    $( '.tree').on( 'click', function () {

    $('#tree1face1').css('content','url(images/tree_shake_fall.gif)');
    $('#tree1face2').css('content','url(images/tree_shake_fall.gif)');


    setTimeout(function(){ 
    
        $('#tree1face1').css('content','url(images/tree_fall.png)');
        $('#tree1face2').css('content','url(images/tree_fall.png)');

        getfruit();

            setTimeout(function(){ 
    


            $('.apple').css('visibility','hidden');
    
            
            ; }, 2000);

        
     ; }, 1800);



})

$( '.tree2').on( 'click', function () {

    $('#tree2face1').css('content','url(images/tree_shake_fall.gif)');
    $('#tree2face2').css('content','url(images/tree_shake_fall.gif)');

    setTimeout(function(){ 
    
        $('#tree2face1').css('content','url(images/tree_fall.png)');
        $('#tree2face2').css('content','url(images/tree_fall.png)');

        getfruit2();

            setTimeout(function(){ 
    

    
            $('.cherry').css('visibility','hidden');

            // $('.orange').css('visibility','hidden');
    
            
            ; }, 2000);
        
        ; }, 1800);

})

    
    ////tree shake fall//


    ;}
    if (days==8){
        $('.fence .front').css('content','url(images/fence_winter.png)')
        $('.fence .left').css('content','url(images/fence_winter.png)')
        $('.fence .right').css('content','url(images/fence2_winter.png)')
        $('.land .top').css('content','url(images/season_winter.png)')
        $('.wildflowers img').css('content','url(images/flowers_winter.gif)')
        $('.land .side').css('content','url(images/land_sides_winter.png)')
        $('.land .side2').css('content','url(images/land_sides_winter.png)')
        $('.lotus1').css('visibility','hidden')
        $('.lotus2').css('visibility','hidden')
        $('.lotus3').css('visibility','hidden')
        $('.scarecrow img').css('content','url(images/scarecrow_winter.png)')
        $('#tree1face1').css('content','url(images/tree_winter.png)')
        $('#tree1face2').css('content','url(images/tree_winter.png)')
        $('#tree2face1').css('content','url(images/tree_winter.png)')
        $('#tree2face2').css('content','url(images/tree_winter.png)')
        $('#tree3face1').css('content','url(images/palmtree_winter.png)')
        $('#tree3face2').css('content','url(images/palmtree_winter.png)')
        $('#tree4face1').css('content','url(images/palmtree_winter.png)')
        $('#tree4face2').css('content','url(images/palmtree_winter.png)')
        $('.house .roof1').css('content','url(images/house_roof_winter.png)')
        $('.house .roof2').css('content','url(images/house_roof_winter.png)')
        $('.house .front').css('content','url(images/house_front_winter.png)')
        $('.house .mid').css('content','url(images/house_midpillar_winter.png)')
        $('.house .left').css('content','url(images/house_sides_winter.png)')
        $('.grass .grass1').css('content','url(images/grass_winter.png)')
        $('.grass .grass2').css('content','url(images/grass_winter.png)')
        $('.grass2 .grass1').css('content','url(images/grass_winter.png)')
        $('.grass2 .grass2').css('content','url(images/grass_winter.png)')
        $('.grass2 .grass3').css('content','url(images/grass_winter.png)')
        $('.grass3 .grass1').css('content','url(images/grass_winter.png)')
        $('.grass3 .grass2').css('content','url(images/grass_winter.png)')
        $('.grass3 .grass3').css('content','url(images/grass_winter.png)')
        

        



    ;}
    
    if(days==10){

        days=0

        $('.land .top').css('content','url(images/land_top.png)')
        $('.land .side').css('content','url(images/land_sides.png)')
        $('.land .side2').css('content','url(images/land_sides.png)')
        $('.wildflowers img').css('content','url(images/flowers.gif)')
        $('.scarecrow img').css('content','url(images/scarecrow.png)')

        $('.farm .face').css('opacity','0');

        $('.fence .front').css('content','url(images/fence.png)')
        $('.fence .left').css('content','url(images/fence.png)')
        $('.fence .right').css('content','url(images/fence2.png)')
        $('#tree1face1').css('content','url(images/tree.png)')
        $('#tree1face2').css('content','url(images/tree.png)')
        $('#tree2face1').css('content','url(images/tree.png)')
        $('#tree2face2').css('content','url(images/tree.png)')
        $('#tree3face1').css('content','url(images/palmtree.png)')
        $('#tree3face2').css('content','url(images/palmtree.png)')
        $('#tree4face1').css('content','url(images/palmtree.png)')
        $('#tree4face2').css('content','url(images/palmtree.png)')
        $('.house .roof1').css('content','url(images/house_roof.png)')
        $('.house .roof2').css('content','url(images/house_roof.png)')
        $('.house .front').css('content','url(images/house_front.png)')
        $('.house .mid').css('content','url(images/house_midpillar.png)')
        $('.house .left').css('content','url(images/house_sides.png)')

        $('.grass .grass1').css('content','url(images/grass.png)')
        $('.grass .grass2').css('content','url(images/grass.png)')
        $('.grass2 .grass1').css('content','url(images/grass.png)')
        $('.grass2 .grass2').css('content','url(images/grass.png)')
        $('.grass2 .grass3').css('content','url(images/grass.png)')
        $('.grass3 .grass1').css('content','url(images/grass.png)')
        $('.grass3 .grass2').css('content','url(images/grass.png)')
        $('.grass3 .grass3').css('content','url(images/grass.png)')



        isplanted1=false;
        isplanted2=false;
        isplanted3=false;
        isplanted4=false;
        isplanted5=false;
        isplanted6=false;

    }

    
})


///////////growing plant////////////////////////////////
////change season////////////////////////////////

// if (isplanted1==true && days==2){$('.place1').css('content','url(images/crops/carrot_growing3.png');}

// if (isplanted2==true && days==2){$('.place2').css('content','url(images/crops/straw_growing3.png');}

// if (isplanted3==true && days==2){$('.place3').css('content','url(images/crops/pumpkin_growing3.png');}

// if (isplanted4==true && days==2){$('.place4').css('content','url(images/crops/corn_growing3.png');}

// if (isplanted5==true && days==2){$('.flowerplace1').css('content','url(images/crops/rose_growing3.png');}

// if (isplanted6==true && days==2){$('.flowerplace2').css('content','url(images/crops/daisy_growing3.png');}





//     $('.place2').css('content','url(images/crops/straw_growing3.png');
//     $('.place3').css('content','url(images/crops/pumpkin_growing3.png');
//     $('.place4').css('content','url(images/crops/corn_growing3.png');
//     $('.flowerplace1').css('content','url(images/crops/rose_growing3.png');
//     $('.flowerplace2').css('content','url(images/crops/daisy_growing3.png');




$( document ).ready(function() {
    console.log( "ready!" );
    gsap.to('.clouds',{transform:'translate3D(1000px,-5px,5px)',duration:30, repeat:-1, ease: Linear.easeNone})

});



////souund



$('.soundbutton').on( 'click', function () {

    $('audio')[0].play();


})


$('.mutebutton').on( 'click', function () {

    $('audio')[0].pause()


})