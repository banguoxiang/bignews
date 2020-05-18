$(function(){
    // var data = new FormData()
    $.ajax({
        type:'get',
        url:BigNew.user_detail,
        success:function(res){
            $('#form input[name=username]').val(res.data.username)
            $('#form input[name=nickname]').val(res.data.nickname)
            $('#form input[name=email]').val(res.data.email)
            $('#form input[name=password]').val(res.data.password)
            $('#form input[name=userPic]').attr('src',res.data.userPic)
        }
    })

    // 图片预览功能
    $('#exampleInputFile').on('change',function(){
        var file = this.files[0]
        var url = URL.createObjectURL(file)
        $('.user_pic').attr('src',url)
    })

    // 给修改按钮注册事件
    $('#form').on('submit',function(e){
        e.preventDefault()
        var data = new FormData(this)
        $.ajax({
            type:'post',
            url:BigNew.user_edit,
            data:data,
            contentType:false,
            processData:false,
            success:function(res){
                if(res.code==200){
                    $.ajax({
                        type:'get',
                        url:BigNew.user_info,
                        success:function(res){
                            if(res.code==200){
                                // 显示登陆的用户名 
                                parent.$('.user_info span ').text(res.data.nickname)
                                    
                                // 显示登陆的头像
                                parent.$('.user_info img').attr('src', res.data.userPic)
                                    
                                // 个人中心的图片也设置一样
                                parent.$('.user_center_link img').attr('src', res.data.userPic)
                            }
                        }
                    })
                }
            }
        })
    })
})