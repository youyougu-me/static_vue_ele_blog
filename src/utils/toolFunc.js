
//平滑
export function move(total) {
    let distance = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset//获取滚动条的高度(兼容三种浏览器版本)
    //平滑滚动的效果，把总距离分成50个小段，每10ms执行一次
    let step = total / 50
    if (total > distance) { //当div到窗口的距离>滚动条的距离，向下滑动，此时滑动的距离是total
        smoothDown() //向下滑动
    } else {
        let newTotal = distance - total //当div到窗口的距离<滚动条的距离，向上滑动，此时滑动的距离是distance - total
        step = newTotal / 50;
        smoothUp()
    }

    //向下滑动
    function smoothDown() {
        if (distance < total) {
            distance = distance + step
            document.body.scrollTop = distance
            document.documentElement.scrollTop = distance
            window.pageYOffset = total;
            setTimeout(smoothDown, 5)
        } else {
            document.body.scrollTop = total
            document.documentElement.scrollTop = total
            window.pageYOffset = total;
        }
    }

    //向上滑动
    function smoothUp() {
        if (distance > total) {
            distance -= step
            document.body.scrollTop = distance
            document.documentElement.scrollTop = distance
            window.pageYOffset = total;
            setTimeout(smoothUp, 10)
        } else {
            document.body.scrollTop = total
            document.documentElement.scrollTop = total
            window.pageYOffset = total;
        }
    }
}
