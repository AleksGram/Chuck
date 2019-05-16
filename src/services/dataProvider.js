
export default class DataProvider {
    constructor (path) {
        this.socket = new WebSocket(path);
    
    };

    initSocket = (socket) => {
        socket.onopen = () => { console.log('Socket opened');}
        socket.onmessage = (e) => {
            this.showFrame()
        };
    }

    showFrame = () => {
        const frame  = document.createElement("iframe");
        frame.setAttribute("src", "about:blank");
        frame.style.width = "640px";
        frame.style.height = "480px";
        document.body.appendChild(frame);

        const ifrDoc = frame.contentWindow.document;
        const info = document.createElement('div');
        info.innerHTML = '<button id="iframeButton"> Hello from iFrame bro </button>'
        ifrDoc.body.append(info);

        const ibutton = ifrDoc.getElementById('iframeButton');
        ibutton.addEventListener('click', ()=>{
            frame.parentNode.removeChild(frame);
        })
    }

}


