function digitalClock(){
    const time=new Date()
    let hours=time.getHours().toString().padStart(2,'0')
    let mintues=time.getMinutes().toString().padStart(2,'0')
    let seconds=time.getSeconds().toString().padStart(2,'0')
    let milliseconds=time.getMilliseconds().toString().padStart(3,'0')

    document.getElementById('clock').textContent=`${hours}:${mintues}:${seconds}:${milliseconds}`;
}
setInterval(digitalClock,1000)
digitalClock()


