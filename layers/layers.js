var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var lyr_AREA1_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "AREA 1",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/AREA1_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13890564.321810, 984565.045890, 13891412.084323, 985016.405199]
                            })
                        });
var lyr_AREA2_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "AREA 2",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/AREA2_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13890680.340558, 985019.084861, 13891528.722503, 985470.761419]
                            })
                        });
var format_AREA1_3 = new ol.format.GeoJSON();
var features_AREA1_3 = format_AREA1_3.readFeatures(json_AREA1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AREA1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA1_3.addFeatures(features_AREA1_3);
var lyr_AREA1_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AREA1_3, 
                style: style_AREA1_3,
                interactive: true,
                title: 'AREA 1'
            });
var format_AREA2_4 = new ol.format.GeoJSON();
var features_AREA2_4 = format_AREA2_4.readFeatures(json_AREA2_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AREA2_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA2_4.addFeatures(features_AREA2_4);
var lyr_AREA2_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AREA2_4, 
                style: style_AREA2_4,
                interactive: true,
                title: 'AREA 2'
            });
var format_LagonglongOsamisproperties_5 = new ol.format.GeoJSON();
var features_LagonglongOsamisproperties_5 = format_LagonglongOsamisproperties_5.readFeatures(json_LagonglongOsamisproperties_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LagonglongOsamisproperties_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LagonglongOsamisproperties_5.addFeatures(features_LagonglongOsamisproperties_5);
var lyr_LagonglongOsamisproperties_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LagonglongOsamisproperties_5, 
                style: style_LagonglongOsamisproperties_5,
                interactive: true,
    title: 'Lagonglong Osamis properties<br />\
    <img src="styles/legend/LagonglongOsamisproperties_5_0.png" /> PROPERTY 1<br />\
    <img src="styles/legend/LagonglongOsamisproperties_5_1.png" /> PROPERTY 2<br />\
    <img src="styles/legend/LagonglongOsamisproperties_5_2.png" /> PROPERTY 3<br />\
    <img src="styles/legend/LagonglongOsamisproperties_5_3.png" /> <br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_AREA1_1.setVisible(true);lyr_AREA2_2.setVisible(true);lyr_AREA1_3.setVisible(true);lyr_AREA2_4.setVisible(true);lyr_LagonglongOsamisproperties_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_AREA1_1,lyr_AREA2_2,lyr_AREA1_3,lyr_AREA2_4,lyr_LagonglongOsamisproperties_5];
lyr_AREA1_3.set('fieldAliases', {'fid': 'fid', 'field_1': 'field_1', 'field_2': 'field_2', 'field_3': 'field_3', });
lyr_AREA2_4.set('fieldAliases', {'fid': 'fid', 'field_1': 'field_1', 'field_2': 'field_2', 'field_3': 'field_3', });
lyr_LagonglongOsamisproperties_5.set('fieldAliases', {'fid': 'fid', 'PROPERTY': 'PROPERTY', });
lyr_AREA1_3.set('fieldImages', {'fid': 'TextEdit', 'field_1': 'TextEdit', 'field_2': 'TextEdit', 'field_3': 'TextEdit', });
lyr_AREA2_4.set('fieldImages', {'fid': 'TextEdit', 'field_1': 'TextEdit', 'field_2': 'TextEdit', 'field_3': 'TextEdit', });
lyr_LagonglongOsamisproperties_5.set('fieldImages', {'fid': 'TextEdit', 'PROPERTY': 'TextEdit', });
lyr_AREA1_3.set('fieldLabels', {'fid': 'no label', 'field_1': 'no label', 'field_2': 'no label', 'field_3': 'inline label', });
lyr_AREA2_4.set('fieldLabels', {'fid': 'no label', 'field_1': 'no label', 'field_2': 'no label', 'field_3': 'inline label', });
lyr_LagonglongOsamisproperties_5.set('fieldLabels', {'fid': 'no label', 'PROPERTY': 'no label', });
lyr_LagonglongOsamisproperties_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});