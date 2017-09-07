// -----------------------轮播图部分-------------------------
$(function() {
    // 获取轮播图数据
    $.ajax({
            url: 'http://127.0.0.1:9091/api/getlunbo',
            dataType: 'json',
            success: function(data) {
                // console.log(data);
                $('.swiper-wrapper').append(template('sliderTemplate', data))
                var swiper = new Swiper('.swiper-container', {
                    pagination: '.swiper-pagination',
                    paginationClickable: true,
                    spaceBetween: 30,
                    centeredSlides: true,
                    autoplay: 2500,
                    autoplayDisableOnInteraction: false,
                    loop: true
                });
            }
        })
})

// -----------------------tab栏 部分-------------------------
$(function() {
    $('#tab ul').on('click', 'li', function() {
        $(this).siblings('li').removeClass('tabColor');
        $(this).addClass('tabColor');
    })
})

// ------------------------内容部分---------------------------
// 1.新增连载部分
$(function() {
        $.ajax({
            url: 'http://127.0.0.1:9091/api/gethometab/1',
            dataType: 'json',
            success: function(data) {
                // console.log(data);
                $('#content ul').append(template('xzTemplate', data));
            }
        })

        $('.tab-1').click(function() {
            $.ajax({
                url: 'http://127.0.0.1:9091/api/gethometab/1',
                dataType: 'json',
                success: function(data) {
                    $('#content ul').html('');
                    $('#content ul').append(template('xzTemplate', data));
                }
            })
        })

    })
    // 2.新增完结
    $(function () {
        $('.tab-2').click(function () {
            $.ajax({
                url: 'http://127.0.0.1:9091/api/gethometab/2',
                dataType: 'json',
                success: function (data) {
                    $('#content ul').html('');
                    $('#content ul').append(template('xzTemplate', data));
                }
            })
        })
    })
    // 3.推荐游戏
    $(function () {
        $('.tab-3').click(function () {
            $.ajax({
                url: 'http://127.0.0.1:9091/api/gethometab/3',
                dataType: 'json',
                success: function (data) {
                    $('#content ul').html('');
                    $('#content ul').append(template('xzTemplate', data));
                }
            })
        })
    })
    // 4.推荐完结
    $(function() {
        $('.tab-4').click(function() {
            $.ajax({
                url: 'http://127.0.0.1:9091/api/gethometab/4',
                dataType: 'json',
                success: function(data) {
                    $('#content ul').html('');
                    $('#content ul').append(template('xzTemplate', data));
                }
            })
        })
    })

// -----------------------侧边栏部分---------------------
$(function() {
        var hamburgerClick = 1
        $('.hamburger').click(function() {
            hamburgerClick++
            if (hamburgerClick % 2) {
                $('#sidebar').css({
                    left: -220 + "px"
                });
                $('.right-content').css({
                    left: 0
                })
            } else {
                $('#sidebar').css({
                    left: 0
                });
                $('.right-content').css({
                    left: 220 + 'px'
                })
                $('#shade').show();
            }
        })

})
    // ------------------------遮罩层-------------------------
$(function() {
    $('#shade').click(function() {
        $('#sidebar').css({
            left: -220 + "px"
        });
        $('.right-content').css({
            left: 0
        })
        $('#shade').hide();
    })
})