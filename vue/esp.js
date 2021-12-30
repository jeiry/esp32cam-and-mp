/* eslint-disable */

export default {
    components: {
    },
    data() {
        return {
            url: "",
            websocket: null
        }
    },
    mounted() {

        this.initWebSocket();
    },
    created() {
    },
    methods: {
        initWebSocket() {
            var that = this
            var wsUri = "ws://192.168.31.181:5765/";
            this.websocket = new WebSocket(wsUri);
            this.websocket.onopen = function (evt) {
                that.onOpen(evt)
            };
            this.websocket.onclose = function (evt) {
                that.onClose(evt)
            };
            this.websocket.onmessage = function (evt) {
                that.onMessage(evt)
            };
            this.websocket.onerror = function (evt) {
                that.onError(evt)
            };
        },
        onOpen(evt) {
            console.log("CONNECTED")
        },
        onClose(evt) {
            console.log("DISCONNECTED")
        },
        onMessage(evt) {
            var reader = new FileReader();

            reader.onload = function (eve) {
                if (eve.target.readyState == FileReader.DONE) {
                    var img = document.getElementById("show");
                    img.src = this.result;
                }
            };
            reader.readAsDataURL(event.data);
        },
        onError(evt) {
            console.log(evt.data)
        }
    }
}
