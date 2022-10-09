var activeDoc = app.activeDocument;
var pos = 0;
var masterIndex = 1;

for (var index = 1; index < 16; index++) {
    for (var i = 1; i < 5; i++) {
     var imageFile = File("~");

        masterIndex++;
        if (i === 1){
            pos = -1250;
        }
        if (i === 2){
            pos = -450;
        }
        if (i === 3){
            pos = 350;
        }
        if (i === 4){
            pos = 1150;
        }
        if(imageFile.exists) {
            placeFile(imageFile, pos);
        } else{
            alert("Error with " + "pic ("+ masterIndex +").jpg");
        }
    }
    var saveIn = File("~")
    activeDoc.exportDocument(saveIn, ExportType.SAVEFORWEB);
    activeDoc.activeLayer.remove();
    activeDoc.activeLayer.remove();
    activeDoc.activeLayer.remove();
    activeDoc.activeLayer.remove();
}

alert("Done");


function placeFile(placeFile, pos) {  

    var desc21 = new ActionDescriptor();  

    desc21.putPath( charIDToTypeID('null'), new File(placeFile) );  

    desc21.putEnumerated( charIDToTypeID('FTcs'), charIDToTypeID('QCSt'), charIDToTypeID('Qcsa') );  

    var desc22 = new ActionDescriptor();  

    desc22.putUnitDouble( charIDToTypeID('Hrzn'), charIDToTypeID('#Pxl'), pos);  

    desc22.putUnitDouble( charIDToTypeID('Vrtc'), charIDToTypeID('#Pxl'), 0 );  

    desc21.putObject( charIDToTypeID('Ofst'), charIDToTypeID('Ofst'), desc22 );  

    executeAction( charIDToTypeID('Plc '), desc21, DialogModes.NO );  

}

