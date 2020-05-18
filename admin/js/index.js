$(function(){
    $.ajax({
        type:'get',
        url:BigNew.user_info,
        success:function(res){
            if(res.code==200){
                // 显示登陆的用户名 
                $('.user_info span ').text(res.data.nickname)
                    
                // 显示登陆的头像
                $('.user_info img').attr('src', res.data.userPic)
                    
                // 个人中心的图片也设置一样
                $('.user_center_link img').attr('src', res.data.userPic)
            }
        }
    })

    $('.level01').on('click',function(){
        $(this).addClass('active').siblings().removeClass('active')
        if($(this).index()==1){
            // $('.menu .level02').slideToggle()
            $('.menu .level02').slideToggle() // 实现切换
            $('.menu .level02 li:eq(0)').trigger('click')
        }
    })

    $('.menu .level02 li').on('click',function(){
        // 4.2 当前被单击的li标签要添加类active 其余的要移除类active
        $(this).addClass('active').siblings().removeClass('active')
      })
    
    // 退出功能
    $('.logout').on('click',function(){
        window.location.href = './login.html'
        localStorage.removeItem('token')
    })

    
})