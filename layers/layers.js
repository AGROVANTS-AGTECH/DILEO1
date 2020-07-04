var wms_layers = [];


        var lyr_googlesat_0 = new ol.layer.Tile({
            'title': 'google sat',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_27OCT2019_ZONIFICACION_1 = new ol.format.GeoJSON();
var features_27OCT2019_ZONIFICACION_1 = format_27OCT2019_ZONIFICACION_1.readFeatures(json_27OCT2019_ZONIFICACION_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_27OCT2019_ZONIFICACION_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_27OCT2019_ZONIFICACION_1.addFeatures(features_27OCT2019_ZONIFICACION_1);
var lyr_27OCT2019_ZONIFICACION_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_27OCT2019_ZONIFICACION_1, 
                style: style_27OCT2019_ZONIFICACION_1,
                interactive: true,
    title: '27OCT2019_ZONIFICACION<br />\
    <img src="styles/legend/27OCT2019_ZONIFICACION_1_0.png" /> 100%<br />\
    <img src="styles/legend/27OCT2019_ZONIFICACION_1_1.png" /> 80%<br />\
    <img src="styles/legend/27OCT2019_ZONIFICACION_1_2.png" /> 60%<br />\
    <img src="styles/legend/27OCT2019_ZONIFICACION_1_3.png" /> 40%<br />\
    <img src="styles/legend/27OCT2019_ZONIFICACION_1_4.png" /> 20%<br />\
    <img src="styles/legend/27OCT2019_ZONIFICACION_1_5.png" /> 0%<br />'
        });
var format_16NOV2019_ZONIFICACION_2 = new ol.format.GeoJSON();
var features_16NOV2019_ZONIFICACION_2 = format_16NOV2019_ZONIFICACION_2.readFeatures(json_16NOV2019_ZONIFICACION_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_16NOV2019_ZONIFICACION_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_16NOV2019_ZONIFICACION_2.addFeatures(features_16NOV2019_ZONIFICACION_2);
var lyr_16NOV2019_ZONIFICACION_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_16NOV2019_ZONIFICACION_2, 
                style: style_16NOV2019_ZONIFICACION_2,
                interactive: true,
    title: '16NOV2019_ZONIFICACION<br />\
    <img src="styles/legend/16NOV2019_ZONIFICACION_2_0.png" /> 100%<br />\
    <img src="styles/legend/16NOV2019_ZONIFICACION_2_1.png" /> 80%<br />\
    <img src="styles/legend/16NOV2019_ZONIFICACION_2_2.png" /> 60%<br />\
    <img src="styles/legend/16NOV2019_ZONIFICACION_2_3.png" /> 40%<br />\
    <img src="styles/legend/16NOV2019_ZONIFICACION_2_4.png" /> 20%<br />\
    <img src="styles/legend/16NOV2019_ZONIFICACION_2_5.png" /> 0%<br />'
        });
var format_16DIC2019_ZONIFICACION_3 = new ol.format.GeoJSON();
var features_16DIC2019_ZONIFICACION_3 = format_16DIC2019_ZONIFICACION_3.readFeatures(json_16DIC2019_ZONIFICACION_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_16DIC2019_ZONIFICACION_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_16DIC2019_ZONIFICACION_3.addFeatures(features_16DIC2019_ZONIFICACION_3);
var lyr_16DIC2019_ZONIFICACION_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_16DIC2019_ZONIFICACION_3, 
                style: style_16DIC2019_ZONIFICACION_3,
                interactive: true,
    title: '16DIC2019_ZONIFICACION<br />\
    <img src="styles/legend/16DIC2019_ZONIFICACION_3_0.png" /> 100%<br />\
    <img src="styles/legend/16DIC2019_ZONIFICACION_3_1.png" /> 80%<br />\
    <img src="styles/legend/16DIC2019_ZONIFICACION_3_2.png" /> 60%<br />\
    <img src="styles/legend/16DIC2019_ZONIFICACION_3_3.png" /> 40%<br />\
    <img src="styles/legend/16DIC2019_ZONIFICACION_3_4.png" /> 20%<br />\
    <img src="styles/legend/16DIC2019_ZONIFICACION_3_5.png" /> 0%<br />'
        });
var format_14ABR2020_ZONIFICACION_4 = new ol.format.GeoJSON();
var features_14ABR2020_ZONIFICACION_4 = format_14ABR2020_ZONIFICACION_4.readFeatures(json_14ABR2020_ZONIFICACION_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_14ABR2020_ZONIFICACION_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_14ABR2020_ZONIFICACION_4.addFeatures(features_14ABR2020_ZONIFICACION_4);
var lyr_14ABR2020_ZONIFICACION_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_14ABR2020_ZONIFICACION_4, 
                style: style_14ABR2020_ZONIFICACION_4,
                interactive: true,
    title: '14ABR2020_ZONIFICACION<br />\
    <img src="styles/legend/14ABR2020_ZONIFICACION_4_0.png" /> 100%<br />\
    <img src="styles/legend/14ABR2020_ZONIFICACION_4_1.png" /> 80%<br />\
    <img src="styles/legend/14ABR2020_ZONIFICACION_4_2.png" /> 60%<br />\
    <img src="styles/legend/14ABR2020_ZONIFICACION_4_3.png" /> 40%<br />\
    <img src="styles/legend/14ABR2020_ZONIFICACION_4_4.png" /> 20%<br />\
    <img src="styles/legend/14ABR2020_ZONIFICACION_4_5.png" /> 0%<br />'
        });
var lyr_27OCT2019_NDVI_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "27OCT2019_NDVI",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/27OCT2019_NDVI_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-7609514.734796, -3868064.698022, -7608338.392409, -3867769.874196]
                            })
                        });
var lyr_16NOV2019_NDVI_6 = new ol.layer.Image({
                            opacity: 1,
                            title: "16NOV2019_NDVI",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/16NOV2019_NDVI_6.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-7609514.834761, -3868064.858919, -7608337.732345, -3867769.622461]
                            })
                        });
var lyr_16DIC2019_NDVI_7 = new ol.layer.Image({
                            opacity: 1,
                            title: "16DIC2019_NDVI",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/16DIC2019_NDVI_7.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-7609520.308006, -3868068.703637, -7608336.520409, -3867769.575981]
                            })
                        });
var lyr_14ABR2020_NDVI_8 = new ol.layer.Image({
                            opacity: 1,
                            title: "14ABR2020_NDVI",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/14ABR2020_NDVI_8.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-7609518.545596, -3868065.803345, -7608337.263791, -3867769.410983]
                            })
                        });
var format_lotes_9 = new ol.format.GeoJSON();
var features_lotes_9 = format_lotes_9.readFeatures(json_lotes_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lotes_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lotes_9.addFeatures(features_lotes_9);
var lyr_lotes_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_lotes_9, 
                style: style_lotes_9,
                interactive: false,
                title: '<img src="styles/legend/lotes_9.png" /> lotes'
            });

lyr_googlesat_0.setVisible(true);lyr_27OCT2019_ZONIFICACION_1.setVisible(true);lyr_16NOV2019_ZONIFICACION_2.setVisible(true);lyr_16DIC2019_ZONIFICACION_3.setVisible(true);lyr_14ABR2020_ZONIFICACION_4.setVisible(true);lyr_27OCT2019_NDVI_5.setVisible(true);lyr_16NOV2019_NDVI_6.setVisible(true);lyr_16DIC2019_NDVI_7.setVisible(true);lyr_14ABR2020_NDVI_8.setVisible(true);lyr_lotes_9.setVisible(true);
var layersList = [lyr_googlesat_0,lyr_27OCT2019_ZONIFICACION_1,lyr_16NOV2019_ZONIFICACION_2,lyr_16DIC2019_ZONIFICACION_3,lyr_14ABR2020_ZONIFICACION_4,lyr_27OCT2019_NDVI_5,lyr_16NOV2019_NDVI_6,lyr_16DIC2019_NDVI_7,lyr_14ABR2020_NDVI_8,lyr_lotes_9];
lyr_27OCT2019_ZONIFICACION_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Join_Count': 'Join_Count', 'TARGET_FID': 'TARGET_FID', 'ID_1': 'ID_1', 'GRIDCODE': 'GRIDCODE', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_16NOV2019_ZONIFICACION_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Join_Count': 'Join_Count', 'TARGET_FID': 'TARGET_FID', 'Id': 'Id', 'ID_1': 'ID_1', 'GRIDCODE': 'GRIDCODE', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_16DIC2019_ZONIFICACION_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Join_Count': 'Join_Count', 'TARGET_FID': 'TARGET_FID', 'Id': 'Id', 'ID_1': 'ID_1', 'GRIDCODE': 'GRIDCODE', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_14ABR2020_ZONIFICACION_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Join_Count': 'Join_Count', 'TARGET_FID': 'TARGET_FID', 'gridcode': 'gridcode', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_lotes_9.set('fieldAliases', {'id': 'id', 'area': 'area', });
lyr_27OCT2019_ZONIFICACION_1.set('fieldImages', {'OBJECTID': 'Range', 'Join_Count': 'Range', 'TARGET_FID': 'Range', 'ID_1': 'TextEdit', 'GRIDCODE': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_16NOV2019_ZONIFICACION_2.set('fieldImages', {'OBJECTID': 'Range', 'Join_Count': 'Range', 'TARGET_FID': 'Range', 'Id': 'Range', 'ID_1': 'TextEdit', 'GRIDCODE': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_16DIC2019_ZONIFICACION_3.set('fieldImages', {'OBJECTID': 'Range', 'Join_Count': 'Range', 'TARGET_FID': 'Range', 'Id': 'Range', 'ID_1': 'TextEdit', 'GRIDCODE': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_14ABR2020_ZONIFICACION_4.set('fieldImages', {'OBJECTID': 'Range', 'Join_Count': 'Range', 'TARGET_FID': 'Range', 'gridcode': 'Range', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_lotes_9.set('fieldImages', {'id': 'TextEdit', 'area': 'TextEdit', });
lyr_27OCT2019_ZONIFICACION_1.set('fieldLabels', {'OBJECTID': 'no label', 'Join_Count': 'no label', 'TARGET_FID': 'no label', 'ID_1': 'no label', 'GRIDCODE': 'inline label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_16NOV2019_ZONIFICACION_2.set('fieldLabels', {'OBJECTID': 'no label', 'Join_Count': 'no label', 'TARGET_FID': 'no label', 'Id': 'no label', 'ID_1': 'no label', 'GRIDCODE': 'inline label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_16DIC2019_ZONIFICACION_3.set('fieldLabels', {'OBJECTID': 'no label', 'Join_Count': 'no label', 'TARGET_FID': 'no label', 'Id': 'no label', 'ID_1': 'no label', 'GRIDCODE': 'inline label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_14ABR2020_ZONIFICACION_4.set('fieldLabels', {'OBJECTID': 'no label', 'Join_Count': 'no label', 'TARGET_FID': 'no label', 'gridcode': 'inline label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_lotes_9.set('fieldLabels', {'id': 'no label', 'area': 'no label', });
lyr_lotes_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});