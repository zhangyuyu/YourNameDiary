$(function() {
    $("#deleteDiary").on('click', function() {
            if (confirm("确定要删除吗?")) {
                var diaryid = $(this).attr('diaryid');
                console.log(diaryid);
                $.ajax({
                    url : '/your-name-diary/diary/' + diaryid,
                    dateType : 'json',
                    type : 'DELETE'
                }).done(function (data) {
                    console.log(data);
                    if(data){
                        alert("删除成功");
                        window.location.href = '/your-name-diary/diary';
                    }
                });
            } else {

            }
        });
})