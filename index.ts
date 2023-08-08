import "frida-il2cpp-bridge";

const furbyPackets = [
    "FURBY_PKT_RSSI",
    "FURBY_PKT_FIRMWARE_VERSION",
    "FURBY_PKT_POWER_CHANGE",
    "FURBY_PKT_REPORT_POWER",
    "FURBY_PKT_COMM_TEST",
    "FURBY_PKT_SET_TIMESTAMP",
    "FURBY_PKT_REPORT_TIMESTAMP",
    "FURBY_PKT_DISCONNECT",
    "FURBY_PKT_ACK_MODE",
    "FURBY_PKT_BUFFER_OVERRUN",
    "FURBY_PKT_MUTE_AUDIO",
    "FURBY_PKT_SET_CONN_PARAM",
    "FURBY_PKT_REPORT_CONN_PARAM",
    "FURBY_PKT_PLAY_SEQUENCE_MOOD",
    "FURBY_PKT_PLAY_SEQUENCE_INDEX",
    "FURBY_PKT_PLAY_SEQUENCE_SUBINDEX",
    "FURBY_PKT_PLAY_SEQUENCE_SPECIFIC",
    "FURBY_PKT_SET_ANTENNA_COLOR",
    "FURBY_PKT_MESSAGES",
    "FURBY_PKT_SET_NAME",
    "FURBY_PKT_PHYSICAL_INPUTS",
    "FURBY_PKT_IM_HERE",
    "FURBY_PKT_CURRENT_MODE",
    "FURBY_PKT_SET_MOOD_METER",
    "FURBY_PKT_SET_STATE",
    "FURBY_PKT_FILE_TRANSFER_MESSAGE",
    "FURBY_PKT_LANGUAGE",
    "FURBY_PKT_FURBY_MET",
    "FURBY_PKT_F2F_INFO",
    "FURBY_PKT_SEND_NOTIFICATION",
    "FURBY_PKT_SEND_CUSTOM_NOTIFICATION",
    "FURBY_PKT_QUEUE_SEQUENCE_MOOD",
    "FURBY_PKT_QUEUE_SEQUENCE_INDEX",
    "FURBY_PKT_QUEUE_SEQUENCE_SUBINDEX",
    "FURBY_PKT_QUEUE_SEQUENCE_SPECIFIC",
    "FURBY_PKT_CANCEL_QUEUED_SEQUENCE",
    "FURBY_PKT_FILE_TRANSFER_REQUEST",
    "FURBY_PKT_FILE_TRANSFER_DATA",
    "FURBY_PKT_FAST_FILE_TRANSFER_DATA",
    "FURBY_PKT_FACTORY_RESET",
    "FURBY_PKT_FILE_DELETE",
    "FURBY_PKT_GET_FILE_SIZE",
    "FURBY_PKT_GET_FILE_CHECKSUM",
    "FURBY_PKT_GET_FREE_SPACE",
    "FURBY_PKT_LOAD_DLC",
    "FURBY_PKT_ACTIVATE_DLC",
    "FURBY_PKT_DEACTIVATE_DLC",
    "FURBY_PKT_GET_SLOTS_INFO",
    "FURBY_PKT_GET_SLOT_INFO",
    "FURBY_PKT_DELETE_SLOT",
    "FURBY_PKT_SET_BODY_CAM_MOTOR",
    "FURBY_PKT_SET_LCD_BACKLIGHT",
    "FURBY_PKT_TOGGLE_DEBUG_SCREEN",
    "FURBY_PKT_REPORT_DLC",
    "FURBY_PKT_ACTIVATE_GROUPS",
    "FURBY_PKT_GET_ACTIVE_GROUPS",
    "FURBY_PKT_TIMED_ACTIVATE_GROUPS",
    "FURBY_PKT_DELETE_TIMED_GROUPS",
    "FURBY_PKT_FACTORY_DATA_TEST",
    "FURBY_PKT_FACTORY_DATA_TEST_FAIL",
    "FURBY_PKT_TOGGLE_FURBY_TO_FURBY",
    "FURBY_PKT_GP_FIRMWARE_VERSION",
    "scanForServices",
    "scanForDFUServices",
    "acceptedDeviceNames",
    "acceptedDFUDeviceNames",
]

const furbyMethods = [
    "get_FURBY_SERVICE_UUID",
    "get_FURBY_CHAR_DATA_NOTIFY_UUID",
    "get_FURBY_CHAR_DATA_WRITE_UUID",
    "get_FURBY_CHAR_CTRL_RSSI_UUID",
    "get_FURBY_CHAR_CTRL_NOTIFY_UUID",
    "get_FURBY_CHAR_CTRL_WRITE_UUID",
    "get_FURBY_CHAR_FILE_WRITE_UUID",
    "get_FURBY_CHAR_P2P_NOTIFY_UUID",
    "get_FURBY_CHAR_P2P_WRITE_UUID",
    "get_ScanForServices",
    "get_ScanForDFUServices",
    "get_AcceptedDeviceNames",
    "get_AcceptedDFUDeviceNames",
]

Il2Cpp.perform(() => {
    // code here
    console.log(Il2Cpp.unityVersion);

    // Dump furby BTLE data when it launches
    Il2Cpp.domain.assembly("Assembly-CSharp").image.class("FurbyBTLEData").method(".cctor").implementation=function(...a){
        const btleDataClass = this.method(".cctor").invoke(...a);

        console.log("BTLEData initialised");
        //console.log(this);

        console.log("Packet dump:");
        for (const packet of furbyPackets) {
            console.log(packet + ': ' + this.field(packet).value);
        }

        console.log("\n\nmethod dump:");
        for (const method of furbyMethods) {
            console.log(method + ': ' + this.method(method).invoke());
        }
        return btleDataClass
    }

    /*const Equals = Il2Cpp.domain.assembly("Assembly-CSharp").image.class("FurbyBTLEData").method("cctor");
    Il2Cpp.trace().methods(Equals).and().attach();

    console.log("attempting to get the testinterface class");
    const TestInterface = Il2Cpp.domain.assembly("Assembly-CSharp").image.tryClass("FurbyBTLETestInterface")!; //.

    console.log("attempting to get the testinterface instance");
    Il2Cpp.gc.choose(TestInterface).forEach((instance: Il2Cpp.Object) => {
        console.log(instance.class.type.name);
        if (instance.class.type.name == "FurbyBTLETestInterface") {
            console.log("INVOKING DEBUG STUFF");
            instance.method("ShowDataCommandes").invoke();
        }
    });*/
});