$(function(){
    $('.login_form').on('submit',function(e){
        e.preventDefault()
        $('.modal').modal('show')
        $.ajax({
            type:'post',
            url:BigNew.user_login,
            data:$(this).serialize(),
            beforeSend:function(){
                var flag=false
                $('.login_form input[name]').each(function(index,ele){
                    if($.trim($(ele).val())==''){
                        flag = true
                    }
                })
                if(flag){
                    $('.modal-body p').text('输入内容不能为空！')
                    return false
                }
            },
            success:function(res){
                $('.modal-body p').text(res.msg)
                if(res.code==200){
                    $('.modal').on('hidden.bs.modal', function (e) {
                        localStorage.setItem('token',res.token)
                        window.location.href = './index.html'

                      })
                }
            }
        })
    })
})