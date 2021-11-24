// // jQuery(document).ready(function(이벤트_객체){실행문});
// // $(document).ready(function(){실행문});
// // 이 문서에 함수 적용 준비
// // jQuery(document) == 선택자
// // .ready == 메소드 == 동작
// // jQuery==$

// $(document).ready(function(){
//     $('header').hover(function(){
//         //mouse on, logo의 이미지 변해야 한다
//         //attr('속성명','속성값') 속성을 바꾸는 함수 attr
//         $('.logo img').attr('src','images/logo_o.png');
//     },function(){
//         //1. mouse out, logo의 이미지 원래도 돌아와야 한다
//         //2. top에 있을때만 돌아가야 하기 때문에 조건문 추가
//         if(TOP==0){
//             $('.logo img').attr('src','images/logo.png');
//         }
//     });
//     // 서브메뉴
//     $('nav ul li').hover(function(){
//         $('header').addClass('on');    //header에 on 클래스 추가. height10rem
//         $('.inner').stop().slideDown(300);
//     },function(){
//         $('header').removeClass('on');
//         $('.inner').stop().slideUp(100);   
//     });
    
//     // 스크롤 시
//     // window(돔객체), window 메뉴에서 top에서 스크롤 한 거리를 설정하는 메소드.
//     // 현재는 0의 위치에 있다.
//     var TOP=$(window).scrollTop();
//     $(window).scroll(function(){
//         TOP=$(window).scrollTop();
//         // console.log(TOP);
//         // if(조건문){
//         //     조건이 만족 시 실행
//         // }else{
//         //     앞의 조건이 만족하지 않을 시 실행
//         // } 
//         if(TOP==0){ //조건이 참일시는 TOP값이 0 일때
//             $('header').removeClass('bg');  // TOP의 위치가 0일시 header라는 선택자에 bg라는 클레스를 삭제 해라
//             $('.logo img').attr('src','images/logo.png');
//         }else{
//             $('header').addClass('bg');     // TOP의 위치가 0이 아닐 시 bg를 적용 해라
//             $('.logo img').attr('src','images/logo_o.png');
//         }

//         // section2
//         var serTitleOffset=$('.sec3 .title').offset().top;    //TOP으로부터 좌표값을 알아내는 메소드
//         //  Number는 음수도 양수로 바꿔줌
//         serTitleOffset=Number(serTitleOffset)-700;
//         if(TOP>serTitleOffset){
//             $('.sec3, .sec3 .title, .sec3 .subTitle, .expert').addClass('on');
//         }

//         //  section3
//         var serTitleOffset=$('.sec3 .title').offset().top;
//         serTitleOffset=Number(serTitleOffset)-700;
//         if(TOP>serTitleOffset){
//             $('.sec3, .sec3 .title, .sec3 .subTitle, .expert').addClass('on');
//         }
//     });

// });
$(document).ready(function(){ 
    $('header').hover(function(){
        $('.logo img').attr('src','images/logo_o.png');
    },function(){
        if(TOP==0){
            $('.logo img').attr('src','images/logo.png');
        }
    });
    
    /* 서브메뉴 */
    $('nav ul li').hover(function(){
        $('header').addClass('on');
        $('.inner').stop().slideDown(    
        );
    },function(){
        $('header').removeClass('on');
        $('.inner').stop().slideUp(     
        );
    });
    
        /* 스크롤했을 때 */
        var TOP=$(window).scrollTop();
        $(window).scroll(function(){
            TOP=$(window).scrollTop();
        
            if(TOP==0){
            $('header').removeClass('bg');  
                $('.logo img').attr('src','images/logo.png');
            }else{
            $('.logo img').attr('src','images/logo_o.png');
        }
        
        /* sec2 */
        var serTitleOffset=$('.sec2 .title').offset().top;
        serTitleOffset=Number(serTitleOffset)-700;
        
        if(TOP>serTitleOffset){
        $('.sec2 .title,.sec2 .subTitle, .service').addClass('on');
        }

        /* sec3 */
        var serTitleOffset=$('.sec3 .title').offset().top;
        serTitleOffset=Number(serTitleOffset)-700;
        if(TOP>serTitleOffset){
            $('.sec3, .sec3 .title, .sec3 .subTitle, .expert').addClass('on');
        }

        });


    });

