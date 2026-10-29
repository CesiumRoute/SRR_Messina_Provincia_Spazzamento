var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 0.700000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Ucriaspazzamentomeccanico_1 = new ol.format.GeoJSON();
var features_Ucriaspazzamentomeccanico_1 = format_Ucriaspazzamentomeccanico_1.readFeatures(json_Ucriaspazzamentomeccanico_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ucriaspazzamentomeccanico_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ucriaspazzamentomeccanico_1.addFeatures(features_Ucriaspazzamentomeccanico_1);
var lyr_Ucriaspazzamentomeccanico_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ucriaspazzamentomeccanico_1, 
                style: style_Ucriaspazzamentomeccanico_1,
                popuplayertitle: 'Ucria spazzamento meccanico',
                interactive: true,
    title: 'Ucria spazzamento meccanico<br />\
    <img src="styles/legend/Ucriaspazzamentomeccanico_1_0.png" /> C<br />' });
var format_Ucriaspazzamentomanuale_2 = new ol.format.GeoJSON();
var features_Ucriaspazzamentomanuale_2 = format_Ucriaspazzamentomanuale_2.readFeatures(json_Ucriaspazzamentomanuale_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ucriaspazzamentomanuale_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ucriaspazzamentomanuale_2.addFeatures(features_Ucriaspazzamentomanuale_2);
var lyr_Ucriaspazzamentomanuale_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ucriaspazzamentomanuale_2, 
                style: style_Ucriaspazzamentomanuale_2,
                popuplayertitle: 'Ucria spazzamento manuale',
                interactive: true,
    title: 'Ucria spazzamento manuale<br />\
    <img src="styles/legend/Ucriaspazzamentomanuale_2_0.png" /> A<br />\
    <img src="styles/legend/Ucriaspazzamentomanuale_2_1.png" /> B<br />' });
var format_Spazzamentomeccanico_3 = new ol.format.GeoJSON();
var features_Spazzamentomeccanico_3 = format_Spazzamentomeccanico_3.readFeatures(json_Spazzamentomeccanico_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Spazzamentomeccanico_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Spazzamentomeccanico_3.addFeatures(features_Spazzamentomeccanico_3);
var lyr_Spazzamentomeccanico_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Spazzamentomeccanico_3, 
                style: style_Spazzamentomeccanico_3,
                popuplayertitle: 'Spazzamento meccanico',
                interactive: true,
    title: 'Spazzamento meccanico<br />\
    <img src="styles/legend/Spazzamentomeccanico_3_0.png" /> B<br />' });
var format_Spazzamentomanuale_4 = new ol.format.GeoJSON();
var features_Spazzamentomanuale_4 = format_Spazzamentomanuale_4.readFeatures(json_Spazzamentomanuale_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Spazzamentomanuale_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Spazzamentomanuale_4.addFeatures(features_Spazzamentomanuale_4);
var lyr_Spazzamentomanuale_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Spazzamentomanuale_4, 
                style: style_Spazzamentomanuale_4,
                popuplayertitle: 'Spazzamento manuale',
                interactive: true,
    title: 'Spazzamento manuale<br />\
    <img src="styles/legend/Spazzamentomanuale_4_0.png" /> A<br />' });
var format_Torrenovaspazzamentomeccanico_5 = new ol.format.GeoJSON();
var features_Torrenovaspazzamentomeccanico_5 = format_Torrenovaspazzamentomeccanico_5.readFeatures(json_Torrenovaspazzamentomeccanico_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Torrenovaspazzamentomeccanico_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Torrenovaspazzamentomeccanico_5.addFeatures(features_Torrenovaspazzamentomeccanico_5);
var lyr_Torrenovaspazzamentomeccanico_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Torrenovaspazzamentomeccanico_5, 
                style: style_Torrenovaspazzamentomeccanico_5,
                popuplayertitle: 'Torrenova spazzamento meccanico',
                interactive: true,
    title: 'Torrenova spazzamento meccanico<br />\
    <img src="styles/legend/Torrenovaspazzamentomeccanico_5_0.png" /> D<br />' });
var format_Torrenovaspazzamentomanuale_6 = new ol.format.GeoJSON();
var features_Torrenovaspazzamentomanuale_6 = format_Torrenovaspazzamentomanuale_6.readFeatures(json_Torrenovaspazzamentomanuale_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Torrenovaspazzamentomanuale_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Torrenovaspazzamentomanuale_6.addFeatures(features_Torrenovaspazzamentomanuale_6);
var lyr_Torrenovaspazzamentomanuale_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Torrenovaspazzamentomanuale_6, 
                style: style_Torrenovaspazzamentomanuale_6,
                popuplayertitle: 'Torrenova spazzamento manuale',
                interactive: true,
    title: 'Torrenova spazzamento manuale<br />\
    <img src="styles/legend/Torrenovaspazzamentomanuale_6_0.png" /> A<br />\
    <img src="styles/legend/Torrenovaspazzamentomanuale_6_1.png" /> B<br />\
    <img src="styles/legend/Torrenovaspazzamentomanuale_6_2.png" /> C<br />' });
var format_Sinagraspazzamentomeccanico_7 = new ol.format.GeoJSON();
var features_Sinagraspazzamentomeccanico_7 = format_Sinagraspazzamentomeccanico_7.readFeatures(json_Sinagraspazzamentomeccanico_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sinagraspazzamentomeccanico_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sinagraspazzamentomeccanico_7.addFeatures(features_Sinagraspazzamentomeccanico_7);
var lyr_Sinagraspazzamentomeccanico_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sinagraspazzamentomeccanico_7, 
                style: style_Sinagraspazzamentomeccanico_7,
                popuplayertitle: 'Sinagra spazzamento meccanico',
                interactive: true,
    title: 'Sinagra spazzamento meccanico<br />\
    <img src="styles/legend/Sinagraspazzamentomeccanico_7_0.png" /> B<br />' });
var format_Sinagraspazzamentomanuale_8 = new ol.format.GeoJSON();
var features_Sinagraspazzamentomanuale_8 = format_Sinagraspazzamentomanuale_8.readFeatures(json_Sinagraspazzamentomanuale_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sinagraspazzamentomanuale_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sinagraspazzamentomanuale_8.addFeatures(features_Sinagraspazzamentomanuale_8);
var lyr_Sinagraspazzamentomanuale_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sinagraspazzamentomanuale_8, 
                style: style_Sinagraspazzamentomanuale_8,
                popuplayertitle: 'Sinagra spazzamento manuale',
                interactive: true,
    title: 'Sinagra spazzamento manuale<br />\
    <img src="styles/legend/Sinagraspazzamentomanuale_8_0.png" /> A<br />' });
var format_SantoStefanodiCamastraspazzamentomeccanico_9 = new ol.format.GeoJSON();
var features_SantoStefanodiCamastraspazzamentomeccanico_9 = format_SantoStefanodiCamastraspazzamentomeccanico_9.readFeatures(json_SantoStefanodiCamastraspazzamentomeccanico_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SantoStefanodiCamastraspazzamentomeccanico_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SantoStefanodiCamastraspazzamentomeccanico_9.addFeatures(features_SantoStefanodiCamastraspazzamentomeccanico_9);
var lyr_SantoStefanodiCamastraspazzamentomeccanico_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SantoStefanodiCamastraspazzamentomeccanico_9, 
                style: style_SantoStefanodiCamastraspazzamentomeccanico_9,
                popuplayertitle: 'Santo Stefano di Camastra spazzamento meccanico',
                interactive: true,
    title: 'Santo Stefano di Camastra spazzamento meccanico<br />\
    <img src="styles/legend/SantoStefanodiCamastraspazzamentomeccanico_9_0.png" /> B<br />\
    <img src="styles/legend/SantoStefanodiCamastraspazzamentomeccanico_9_1.png" /> C<br />' });
var format_SantoStefanodiCamastraspazzamentomanuale_10 = new ol.format.GeoJSON();
var features_SantoStefanodiCamastraspazzamentomanuale_10 = format_SantoStefanodiCamastraspazzamentomanuale_10.readFeatures(json_SantoStefanodiCamastraspazzamentomanuale_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SantoStefanodiCamastraspazzamentomanuale_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SantoStefanodiCamastraspazzamentomanuale_10.addFeatures(features_SantoStefanodiCamastraspazzamentomanuale_10);
var lyr_SantoStefanodiCamastraspazzamentomanuale_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SantoStefanodiCamastraspazzamentomanuale_10, 
                style: style_SantoStefanodiCamastraspazzamentomanuale_10,
                popuplayertitle: 'Santo Stefano di Camastra spazzamento manuale',
                interactive: true,
    title: 'Santo Stefano di Camastra spazzamento manuale<br />\
    <img src="styles/legend/SantoStefanodiCamastraspazzamentomanuale_10_0.png" /> A<br />' });
var format_SantAngelodiBrolospazzamentomeccanico_11 = new ol.format.GeoJSON();
var features_SantAngelodiBrolospazzamentomeccanico_11 = format_SantAngelodiBrolospazzamentomeccanico_11.readFeatures(json_SantAngelodiBrolospazzamentomeccanico_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SantAngelodiBrolospazzamentomeccanico_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SantAngelodiBrolospazzamentomeccanico_11.addFeatures(features_SantAngelodiBrolospazzamentomeccanico_11);
var lyr_SantAngelodiBrolospazzamentomeccanico_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SantAngelodiBrolospazzamentomeccanico_11, 
                style: style_SantAngelodiBrolospazzamentomeccanico_11,
                popuplayertitle: 'Sant\'Angelo di Brolo spazzamento meccanico',
                interactive: true,
    title: 'Sant\'Angelo di Brolo spazzamento meccanico<br />\
    <img src="styles/legend/SantAngelodiBrolospazzamentomeccanico_11_0.png" /> B<br />' });
var format_SantAngelodiBrolospazzamentomanuale_12 = new ol.format.GeoJSON();
var features_SantAngelodiBrolospazzamentomanuale_12 = format_SantAngelodiBrolospazzamentomanuale_12.readFeatures(json_SantAngelodiBrolospazzamentomanuale_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SantAngelodiBrolospazzamentomanuale_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SantAngelodiBrolospazzamentomanuale_12.addFeatures(features_SantAngelodiBrolospazzamentomanuale_12);
var lyr_SantAngelodiBrolospazzamentomanuale_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SantAngelodiBrolospazzamentomanuale_12, 
                style: style_SantAngelodiBrolospazzamentomanuale_12,
                popuplayertitle: 'Sant\'Angelo di Brolo spazzamento manuale',
                interactive: true,
    title: 'Sant\'Angelo di Brolo spazzamento manuale<br />\
    <img src="styles/legend/SantAngelodiBrolospazzamentomanuale_12_0.png" /> A<br />' });
var format_SantAgatadiMilitellospazzamentomeccanico_13 = new ol.format.GeoJSON();
var features_SantAgatadiMilitellospazzamentomeccanico_13 = format_SantAgatadiMilitellospazzamentomeccanico_13.readFeatures(json_SantAgatadiMilitellospazzamentomeccanico_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SantAgatadiMilitellospazzamentomeccanico_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SantAgatadiMilitellospazzamentomeccanico_13.addFeatures(features_SantAgatadiMilitellospazzamentomeccanico_13);
var lyr_SantAgatadiMilitellospazzamentomeccanico_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SantAgatadiMilitellospazzamentomeccanico_13, 
                style: style_SantAgatadiMilitellospazzamentomeccanico_13,
                popuplayertitle: 'Sant\'Agata di Militello spazzamento meccanico',
                interactive: true,
    title: 'Sant\'Agata di Militello spazzamento meccanico<br />\
    <img src="styles/legend/SantAgatadiMilitellospazzamentomeccanico_13_0.png" /> 1<br />\
    <img src="styles/legend/SantAgatadiMilitellospazzamentomeccanico_13_1.png" /> 2<br />\
    <img src="styles/legend/SantAgatadiMilitellospazzamentomeccanico_13_2.png" /> 3<br />\
    <img src="styles/legend/SantAgatadiMilitellospazzamentomeccanico_13_3.png" /> 4<br />' });
var format_SantAgatadiMilitellospazzamentomanuale_14 = new ol.format.GeoJSON();
var features_SantAgatadiMilitellospazzamentomanuale_14 = format_SantAgatadiMilitellospazzamentomanuale_14.readFeatures(json_SantAgatadiMilitellospazzamentomanuale_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SantAgatadiMilitellospazzamentomanuale_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SantAgatadiMilitellospazzamentomanuale_14.addFeatures(features_SantAgatadiMilitellospazzamentomanuale_14);
var lyr_SantAgatadiMilitellospazzamentomanuale_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SantAgatadiMilitellospazzamentomanuale_14, 
                style: style_SantAgatadiMilitellospazzamentomanuale_14,
                popuplayertitle: 'Sant\'Agata di Militello spazzamento manuale',
                interactive: true,
    title: 'Sant\'Agata di Militello spazzamento manuale<br />\
    <img src="styles/legend/SantAgatadiMilitellospazzamentomanuale_14_0.png" /> A<br />\
    <img src="styles/legend/SantAgatadiMilitellospazzamentomanuale_14_1.png" /> B1<br />\
    <img src="styles/legend/SantAgatadiMilitellospazzamentomanuale_14_2.png" /> B2<br />\
    <img src="styles/legend/SantAgatadiMilitellospazzamentomanuale_14_3.png" /> C1<br />\
    <img src="styles/legend/SantAgatadiMilitellospazzamentomanuale_14_4.png" /> C2<br />\
    <img src="styles/legend/SantAgatadiMilitellospazzamentomanuale_14_5.png" /> D1<br />\
    <img src="styles/legend/SantAgatadiMilitellospazzamentomanuale_14_6.png" /> D2<br />\
    <img src="styles/legend/SantAgatadiMilitellospazzamentomanuale_14_7.png" /> D3<br />\
    <img src="styles/legend/SantAgatadiMilitellospazzamentomanuale_14_8.png" /> E1<br />\
    <img src="styles/legend/SantAgatadiMilitellospazzamentomanuale_14_9.png" /> E2<br />\
    <img src="styles/legend/SantAgatadiMilitellospazzamentomanuale_14_10.png" /> E3<br />\
    <img src="styles/legend/SantAgatadiMilitellospazzamentomanuale_14_11.png" /> E4<br />' });
var format_SanTeodorospazzamentomeccanico_15 = new ol.format.GeoJSON();
var features_SanTeodorospazzamentomeccanico_15 = format_SanTeodorospazzamentomeccanico_15.readFeatures(json_SanTeodorospazzamentomeccanico_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SanTeodorospazzamentomeccanico_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SanTeodorospazzamentomeccanico_15.addFeatures(features_SanTeodorospazzamentomeccanico_15);
var lyr_SanTeodorospazzamentomeccanico_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SanTeodorospazzamentomeccanico_15, 
                style: style_SanTeodorospazzamentomeccanico_15,
                popuplayertitle: 'San Teodoro spazzamento meccanico',
                interactive: true,
    title: 'San Teodoro spazzamento meccanico<br />\
    <img src="styles/legend/SanTeodorospazzamentomeccanico_15_0.png" /> B<br />' });
var format_SanTeodorospazzamentomanuale_16 = new ol.format.GeoJSON();
var features_SanTeodorospazzamentomanuale_16 = format_SanTeodorospazzamentomanuale_16.readFeatures(json_SanTeodorospazzamentomanuale_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SanTeodorospazzamentomanuale_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SanTeodorospazzamentomanuale_16.addFeatures(features_SanTeodorospazzamentomanuale_16);
var lyr_SanTeodorospazzamentomanuale_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SanTeodorospazzamentomanuale_16, 
                style: style_SanTeodorospazzamentomanuale_16,
                popuplayertitle: 'San Teodoro spazzamento manuale',
                interactive: true,
    title: 'San Teodoro spazzamento manuale<br />\
    <img src="styles/legend/SanTeodorospazzamentomanuale_16_0.png" /> A1<br />\
    <img src="styles/legend/SanTeodorospazzamentomanuale_16_1.png" /> A2<br />' });
var format_SanPieroPattispazzamentomeccanico_17 = new ol.format.GeoJSON();
var features_SanPieroPattispazzamentomeccanico_17 = format_SanPieroPattispazzamentomeccanico_17.readFeatures(json_SanPieroPattispazzamentomeccanico_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SanPieroPattispazzamentomeccanico_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SanPieroPattispazzamentomeccanico_17.addFeatures(features_SanPieroPattispazzamentomeccanico_17);
var lyr_SanPieroPattispazzamentomeccanico_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SanPieroPattispazzamentomeccanico_17, 
                style: style_SanPieroPattispazzamentomeccanico_17,
                popuplayertitle: 'San Piero Patti spazzamento meccanico',
                interactive: true,
    title: 'San Piero Patti spazzamento meccanico<br />\
    <img src="styles/legend/SanPieroPattispazzamentomeccanico_17_0.png" /> B<br />' });
var format_SanPieroPattispazzamentomanuale_18 = new ol.format.GeoJSON();
var features_SanPieroPattispazzamentomanuale_18 = format_SanPieroPattispazzamentomanuale_18.readFeatures(json_SanPieroPattispazzamentomanuale_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SanPieroPattispazzamentomanuale_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SanPieroPattispazzamentomanuale_18.addFeatures(features_SanPieroPattispazzamentomanuale_18);
var lyr_SanPieroPattispazzamentomanuale_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SanPieroPattispazzamentomanuale_18, 
                style: style_SanPieroPattispazzamentomanuale_18,
                popuplayertitle: 'San Piero Patti spazzamento manuale',
                interactive: true,
    title: 'San Piero Patti spazzamento manuale<br />\
    <img src="styles/legend/SanPieroPattispazzamentomanuale_18_0.png" /> A<br />' });
var format_SanMarcospazzamentomeccanico_19 = new ol.format.GeoJSON();
var features_SanMarcospazzamentomeccanico_19 = format_SanMarcospazzamentomeccanico_19.readFeatures(json_SanMarcospazzamentomeccanico_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SanMarcospazzamentomeccanico_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SanMarcospazzamentomeccanico_19.addFeatures(features_SanMarcospazzamentomeccanico_19);
var lyr_SanMarcospazzamentomeccanico_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SanMarcospazzamentomeccanico_19, 
                style: style_SanMarcospazzamentomeccanico_19,
                popuplayertitle: 'San Marco spazzamento meccanico',
                interactive: true,
    title: 'San Marco spazzamento meccanico<br />\
    <img src="styles/legend/SanMarcospazzamentomeccanico_19_0.png" /> B<br />' });
var format_SanMarcospazzamentomanuale_20 = new ol.format.GeoJSON();
var features_SanMarcospazzamentomanuale_20 = format_SanMarcospazzamentomanuale_20.readFeatures(json_SanMarcospazzamentomanuale_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SanMarcospazzamentomanuale_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SanMarcospazzamentomanuale_20.addFeatures(features_SanMarcospazzamentomanuale_20);
var lyr_SanMarcospazzamentomanuale_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SanMarcospazzamentomanuale_20, 
                style: style_SanMarcospazzamentomanuale_20,
                popuplayertitle: 'San Marco spazzamento manuale',
                interactive: true,
    title: 'San Marco spazzamento manuale<br />\
    <img src="styles/legend/SanMarcospazzamentomanuale_20_0.png" /> A<br />' });
var format_SanFratellospazzamentomeccanico_21 = new ol.format.GeoJSON();
var features_SanFratellospazzamentomeccanico_21 = format_SanFratellospazzamentomeccanico_21.readFeatures(json_SanFratellospazzamentomeccanico_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SanFratellospazzamentomeccanico_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SanFratellospazzamentomeccanico_21.addFeatures(features_SanFratellospazzamentomeccanico_21);
var lyr_SanFratellospazzamentomeccanico_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SanFratellospazzamentomeccanico_21, 
                style: style_SanFratellospazzamentomeccanico_21,
                popuplayertitle: 'San Fratello spazzamento meccanico',
                interactive: true,
    title: 'San Fratello spazzamento meccanico<br />\
    <img src="styles/legend/SanFratellospazzamentomeccanico_21_0.png" /> D<br />' });
var format_SanFratellospazzamentomanuale_22 = new ol.format.GeoJSON();
var features_SanFratellospazzamentomanuale_22 = format_SanFratellospazzamentomanuale_22.readFeatures(json_SanFratellospazzamentomanuale_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SanFratellospazzamentomanuale_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SanFratellospazzamentomanuale_22.addFeatures(features_SanFratellospazzamentomanuale_22);
var lyr_SanFratellospazzamentomanuale_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SanFratellospazzamentomanuale_22, 
                style: style_SanFratellospazzamentomanuale_22,
                popuplayertitle: 'San Fratello spazzamento manuale',
                interactive: true,
    title: 'San Fratello spazzamento manuale<br />\
    <img src="styles/legend/SanFratellospazzamentomanuale_22_0.png" /> A<br />\
    <img src="styles/legend/SanFratellospazzamentomanuale_22_1.png" /> B<br />\
    <img src="styles/legend/SanFratellospazzamentomanuale_22_2.png" /> C<br />' });
var format_RodiMilicispazzamentomeccanico_23 = new ol.format.GeoJSON();
var features_RodiMilicispazzamentomeccanico_23 = format_RodiMilicispazzamentomeccanico_23.readFeatures(json_RodiMilicispazzamentomeccanico_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RodiMilicispazzamentomeccanico_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RodiMilicispazzamentomeccanico_23.addFeatures(features_RodiMilicispazzamentomeccanico_23);
var lyr_RodiMilicispazzamentomeccanico_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RodiMilicispazzamentomeccanico_23, 
                style: style_RodiMilicispazzamentomeccanico_23,
                popuplayertitle: 'Rodi Milici spazzamento meccanico',
                interactive: true,
    title: 'Rodi Milici spazzamento meccanico<br />\
    <img src="styles/legend/RodiMilicispazzamentomeccanico_23_0.png" /> B<br />' });
var format_RodiMilicispazzamentomanuale_24 = new ol.format.GeoJSON();
var features_RodiMilicispazzamentomanuale_24 = format_RodiMilicispazzamentomanuale_24.readFeatures(json_RodiMilicispazzamentomanuale_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RodiMilicispazzamentomanuale_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RodiMilicispazzamentomanuale_24.addFeatures(features_RodiMilicispazzamentomanuale_24);
var lyr_RodiMilicispazzamentomanuale_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RodiMilicispazzamentomanuale_24, 
                style: style_RodiMilicispazzamentomanuale_24,
                popuplayertitle: 'Rodi Milici spazzamento manuale',
                interactive: true,
    title: 'Rodi Milici spazzamento manuale<br />\
    <img src="styles/legend/RodiMilicispazzamentomanuale_24_0.png" /> A<br />' });
var format_Pirainospazzamentomeccanico_25 = new ol.format.GeoJSON();
var features_Pirainospazzamentomeccanico_25 = format_Pirainospazzamentomeccanico_25.readFeatures(json_Pirainospazzamentomeccanico_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pirainospazzamentomeccanico_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pirainospazzamentomeccanico_25.addFeatures(features_Pirainospazzamentomeccanico_25);
var lyr_Pirainospazzamentomeccanico_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pirainospazzamentomeccanico_25, 
                style: style_Pirainospazzamentomeccanico_25,
                popuplayertitle: 'Piraino spazzamento meccanico',
                interactive: true,
    title: 'Piraino spazzamento meccanico<br />\
    <img src="styles/legend/Pirainospazzamentomeccanico_25_0.png" /> B<br />\
    <img src="styles/legend/Pirainospazzamentomeccanico_25_1.png" /> C estivo<br />' });
var format_Pirainospazzamentomanuale_26 = new ol.format.GeoJSON();
var features_Pirainospazzamentomanuale_26 = format_Pirainospazzamentomanuale_26.readFeatures(json_Pirainospazzamentomanuale_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pirainospazzamentomanuale_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pirainospazzamentomanuale_26.addFeatures(features_Pirainospazzamentomanuale_26);
var lyr_Pirainospazzamentomanuale_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pirainospazzamentomanuale_26, 
                style: style_Pirainospazzamentomanuale_26,
                popuplayertitle: 'Piraino spazzamento manuale',
                interactive: true,
    title: 'Piraino spazzamento manuale<br />\
    <img src="styles/legend/Pirainospazzamentomanuale_26_0.png" /> A<br />' });
var format_Pettineospazzamentomeccanico_27 = new ol.format.GeoJSON();
var features_Pettineospazzamentomeccanico_27 = format_Pettineospazzamentomeccanico_27.readFeatures(json_Pettineospazzamentomeccanico_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pettineospazzamentomeccanico_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pettineospazzamentomeccanico_27.addFeatures(features_Pettineospazzamentomeccanico_27);
var lyr_Pettineospazzamentomeccanico_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pettineospazzamentomeccanico_27, 
                style: style_Pettineospazzamentomeccanico_27,
                popuplayertitle: 'Pettineo spazzamento meccanico',
                interactive: true,
    title: 'Pettineo spazzamento meccanico<br />\
    <img src="styles/legend/Pettineospazzamentomeccanico_27_0.png" /> B<br />' });
var format_Pettineospazzamentomanuale_28 = new ol.format.GeoJSON();
var features_Pettineospazzamentomanuale_28 = format_Pettineospazzamentomanuale_28.readFeatures(json_Pettineospazzamentomanuale_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pettineospazzamentomanuale_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pettineospazzamentomanuale_28.addFeatures(features_Pettineospazzamentomanuale_28);
var lyr_Pettineospazzamentomanuale_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pettineospazzamentomanuale_28, 
                style: style_Pettineospazzamentomanuale_28,
                popuplayertitle: 'Pettineo spazzamento manuale',
                interactive: true,
    title: 'Pettineo spazzamento manuale<br />\
    <img src="styles/legend/Pettineospazzamentomanuale_28_0.png" /> A<br />' });
var format_Pattispazzamentomeccanico_29 = new ol.format.GeoJSON();
var features_Pattispazzamentomeccanico_29 = format_Pattispazzamentomeccanico_29.readFeatures(json_Pattispazzamentomeccanico_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pattispazzamentomeccanico_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pattispazzamentomeccanico_29.addFeatures(features_Pattispazzamentomeccanico_29);
var lyr_Pattispazzamentomeccanico_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pattispazzamentomeccanico_29, 
                style: style_Pattispazzamentomeccanico_29,
                popuplayertitle: 'Patti spazzamento meccanico',
                interactive: true,
    title: 'Patti spazzamento meccanico<br />\
    <img src="styles/legend/Pattispazzamentomeccanico_29_0.png" /> E<br />' });
var format_Pattispazzamentomanuale_30 = new ol.format.GeoJSON();
var features_Pattispazzamentomanuale_30 = format_Pattispazzamentomanuale_30.readFeatures(json_Pattispazzamentomanuale_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pattispazzamentomanuale_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pattispazzamentomanuale_30.addFeatures(features_Pattispazzamentomanuale_30);
var lyr_Pattispazzamentomanuale_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pattispazzamentomanuale_30, 
                style: style_Pattispazzamentomanuale_30,
                popuplayertitle: 'Patti spazzamento manuale',
                interactive: true,
    title: 'Patti spazzamento manuale<br />\
    <img src="styles/legend/Pattispazzamentomanuale_30_0.png" /> A1<br />\
    <img src="styles/legend/Pattispazzamentomanuale_30_1.png" /> A2<br />\
    <img src="styles/legend/Pattispazzamentomanuale_30_2.png" /> A3<br />\
    <img src="styles/legend/Pattispazzamentomanuale_30_3.png" /> A4<br />\
    <img src="styles/legend/Pattispazzamentomanuale_30_4.png" /> B1<br />\
    <img src="styles/legend/Pattispazzamentomanuale_30_5.png" /> B2<br />\
    <img src="styles/legend/Pattispazzamentomanuale_30_6.png" /> B3<br />\
    <img src="styles/legend/Pattispazzamentomanuale_30_7.png" /> C1<br />\
    <img src="styles/legend/Pattispazzamentomanuale_30_8.png" /> C2<br />\
    <img src="styles/legend/Pattispazzamentomanuale_30_9.png" /> D1<br />\
    <img src="styles/legend/Pattispazzamentomanuale_30_10.png" /> D2<br />' });
var format_Oliverispazzamentomeccanico_31 = new ol.format.GeoJSON();
var features_Oliverispazzamentomeccanico_31 = format_Oliverispazzamentomeccanico_31.readFeatures(json_Oliverispazzamentomeccanico_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Oliverispazzamentomeccanico_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Oliverispazzamentomeccanico_31.addFeatures(features_Oliverispazzamentomeccanico_31);
var lyr_Oliverispazzamentomeccanico_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Oliverispazzamentomeccanico_31, 
                style: style_Oliverispazzamentomeccanico_31,
                popuplayertitle: 'Oliveri spazzamento meccanico',
                interactive: true,
    title: 'Oliveri spazzamento meccanico<br />\
    <img src="styles/legend/Oliverispazzamentomeccanico_31_0.png" /> B<br />\
    <img src="styles/legend/Oliverispazzamentomeccanico_31_1.png" /> C<br />' });
var format_Oliverispazzamentomanuale_32 = new ol.format.GeoJSON();
var features_Oliverispazzamentomanuale_32 = format_Oliverispazzamentomanuale_32.readFeatures(json_Oliverispazzamentomanuale_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Oliverispazzamentomanuale_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Oliverispazzamentomanuale_32.addFeatures(features_Oliverispazzamentomanuale_32);
var lyr_Oliverispazzamentomanuale_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Oliverispazzamentomanuale_32, 
                style: style_Oliverispazzamentomanuale_32,
                popuplayertitle: 'Oliveri spazzamento manuale',
                interactive: true,
    title: 'Oliveri spazzamento manuale<br />\
    <img src="styles/legend/Oliverispazzamentomanuale_32_0.png" /> A<br />' });
var format_NovaradiSiciliaspazzamentomeccanico_33 = new ol.format.GeoJSON();
var features_NovaradiSiciliaspazzamentomeccanico_33 = format_NovaradiSiciliaspazzamentomeccanico_33.readFeatures(json_NovaradiSiciliaspazzamentomeccanico_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NovaradiSiciliaspazzamentomeccanico_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NovaradiSiciliaspazzamentomeccanico_33.addFeatures(features_NovaradiSiciliaspazzamentomeccanico_33);
var lyr_NovaradiSiciliaspazzamentomeccanico_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NovaradiSiciliaspazzamentomeccanico_33, 
                style: style_NovaradiSiciliaspazzamentomeccanico_33,
                popuplayertitle: 'Novara di Sicilia spazzamento meccanico',
                interactive: true,
    title: 'Novara di Sicilia spazzamento meccanico<br />\
    <img src="styles/legend/NovaradiSiciliaspazzamentomeccanico_33_0.png" /> C<br />' });
var format_NovaradiSiciliaspazzamentomanuale_34 = new ol.format.GeoJSON();
var features_NovaradiSiciliaspazzamentomanuale_34 = format_NovaradiSiciliaspazzamentomanuale_34.readFeatures(json_NovaradiSiciliaspazzamentomanuale_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NovaradiSiciliaspazzamentomanuale_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NovaradiSiciliaspazzamentomanuale_34.addFeatures(features_NovaradiSiciliaspazzamentomanuale_34);
var lyr_NovaradiSiciliaspazzamentomanuale_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NovaradiSiciliaspazzamentomanuale_34, 
                style: style_NovaradiSiciliaspazzamentomanuale_34,
                popuplayertitle: 'Novara di Sicilia spazzamento manuale',
                interactive: true,
    title: 'Novara di Sicilia spazzamento manuale<br />\
    <img src="styles/legend/NovaradiSiciliaspazzamentomanuale_34_0.png" /> A<br />\
    <img src="styles/legend/NovaradiSiciliaspazzamentomanuale_34_1.png" /> B<br />' });
var format_NASOspazzamentomeccanico_35 = new ol.format.GeoJSON();
var features_NASOspazzamentomeccanico_35 = format_NASOspazzamentomeccanico_35.readFeatures(json_NASOspazzamentomeccanico_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NASOspazzamentomeccanico_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NASOspazzamentomeccanico_35.addFeatures(features_NASOspazzamentomeccanico_35);
var lyr_NASOspazzamentomeccanico_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NASOspazzamentomeccanico_35, 
                style: style_NASOspazzamentomeccanico_35,
                popuplayertitle: 'NASO spazzamento meccanico',
                interactive: true,
    title: 'NASO spazzamento meccanico<br />\
    <img src="styles/legend/NASOspazzamentomeccanico_35_0.png" /> B<br />' });
var format_NASOspazzamentomanuale_36 = new ol.format.GeoJSON();
var features_NASOspazzamentomanuale_36 = format_NASOspazzamentomanuale_36.readFeatures(json_NASOspazzamentomanuale_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NASOspazzamentomanuale_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NASOspazzamentomanuale_36.addFeatures(features_NASOspazzamentomanuale_36);
var lyr_NASOspazzamentomanuale_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NASOspazzamentomanuale_36, 
                style: style_NASOspazzamentomanuale_36,
                popuplayertitle: 'NASO spazzamento manuale',
                interactive: true,
    title: 'NASO spazzamento manuale<br />\
    <img src="styles/legend/NASOspazzamentomanuale_36_0.png" /> A<br />' });
var format_MontalbanoEliconaspazzamentomeccanico_37 = new ol.format.GeoJSON();
var features_MontalbanoEliconaspazzamentomeccanico_37 = format_MontalbanoEliconaspazzamentomeccanico_37.readFeatures(json_MontalbanoEliconaspazzamentomeccanico_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MontalbanoEliconaspazzamentomeccanico_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MontalbanoEliconaspazzamentomeccanico_37.addFeatures(features_MontalbanoEliconaspazzamentomeccanico_37);
var lyr_MontalbanoEliconaspazzamentomeccanico_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MontalbanoEliconaspazzamentomeccanico_37, 
                style: style_MontalbanoEliconaspazzamentomeccanico_37,
                popuplayertitle: 'Montalbano Elicona spazzamento meccanico',
                interactive: true,
    title: 'Montalbano Elicona spazzamento meccanico<br />\
    <img src="styles/legend/MontalbanoEliconaspazzamentomeccanico_37_0.png" /> B<br />' });
var format_MontalbanoEliconaspazzamentomanuale_38 = new ol.format.GeoJSON();
var features_MontalbanoEliconaspazzamentomanuale_38 = format_MontalbanoEliconaspazzamentomanuale_38.readFeatures(json_MontalbanoEliconaspazzamentomanuale_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MontalbanoEliconaspazzamentomanuale_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MontalbanoEliconaspazzamentomanuale_38.addFeatures(features_MontalbanoEliconaspazzamentomanuale_38);
var lyr_MontalbanoEliconaspazzamentomanuale_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MontalbanoEliconaspazzamentomanuale_38, 
                style: style_MontalbanoEliconaspazzamentomanuale_38,
                popuplayertitle: 'Montalbano Elicona spazzamento manuale',
                interactive: true,
    title: 'Montalbano Elicona spazzamento manuale<br />\
    <img src="styles/legend/MontalbanoEliconaspazzamentomanuale_38_0.png" /> A<br />' });
var format_Montagnarealespazzamentomeccanico_39 = new ol.format.GeoJSON();
var features_Montagnarealespazzamentomeccanico_39 = format_Montagnarealespazzamentomeccanico_39.readFeatures(json_Montagnarealespazzamentomeccanico_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Montagnarealespazzamentomeccanico_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Montagnarealespazzamentomeccanico_39.addFeatures(features_Montagnarealespazzamentomeccanico_39);
var lyr_Montagnarealespazzamentomeccanico_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Montagnarealespazzamentomeccanico_39, 
                style: style_Montagnarealespazzamentomeccanico_39,
                popuplayertitle: 'Montagnareale spazzamento meccanico',
                interactive: true,
    title: 'Montagnareale spazzamento meccanico<br />\
    <img src="styles/legend/Montagnarealespazzamentomeccanico_39_0.png" /> B<br />' });
var format_Montagnarealespazzamentomanuale_40 = new ol.format.GeoJSON();
var features_Montagnarealespazzamentomanuale_40 = format_Montagnarealespazzamentomanuale_40.readFeatures(json_Montagnarealespazzamentomanuale_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Montagnarealespazzamentomanuale_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Montagnarealespazzamentomanuale_40.addFeatures(features_Montagnarealespazzamentomanuale_40);
var lyr_Montagnarealespazzamentomanuale_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Montagnarealespazzamentomanuale_40, 
                style: style_Montagnarealespazzamentomanuale_40,
                popuplayertitle: 'Montagnareale spazzamento manuale',
                interactive: true,
    title: 'Montagnareale spazzamento manuale<br />\
    <img src="styles/legend/Montagnarealespazzamentomanuale_40_0.png" /> A<br />' });
var format_Mistrettaspazzamentomeccanico_41 = new ol.format.GeoJSON();
var features_Mistrettaspazzamentomeccanico_41 = format_Mistrettaspazzamentomeccanico_41.readFeatures(json_Mistrettaspazzamentomeccanico_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mistrettaspazzamentomeccanico_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mistrettaspazzamentomeccanico_41.addFeatures(features_Mistrettaspazzamentomeccanico_41);
var lyr_Mistrettaspazzamentomeccanico_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mistrettaspazzamentomeccanico_41, 
                style: style_Mistrettaspazzamentomeccanico_41,
                popuplayertitle: 'Mistretta spazzamento meccanico',
                interactive: true,
    title: 'Mistretta spazzamento meccanico<br />\
    <img src="styles/legend/Mistrettaspazzamentomeccanico_41_0.png" /> E<br />' });
var format_Mistrettaspazzamentomanuale_42 = new ol.format.GeoJSON();
var features_Mistrettaspazzamentomanuale_42 = format_Mistrettaspazzamentomanuale_42.readFeatures(json_Mistrettaspazzamentomanuale_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mistrettaspazzamentomanuale_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mistrettaspazzamentomanuale_42.addFeatures(features_Mistrettaspazzamentomanuale_42);
var lyr_Mistrettaspazzamentomanuale_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mistrettaspazzamentomanuale_42, 
                style: style_Mistrettaspazzamentomanuale_42,
                popuplayertitle: 'Mistretta spazzamento manuale',
                interactive: true,
    title: 'Mistretta spazzamento manuale<br />\
    <img src="styles/legend/Mistrettaspazzamentomanuale_42_0.png" /> A<br />\
    <img src="styles/legend/Mistrettaspazzamentomanuale_42_1.png" /> B<br />\
    <img src="styles/legend/Mistrettaspazzamentomanuale_42_2.png" /> C<br />\
    <img src="styles/legend/Mistrettaspazzamentomanuale_42_3.png" /> D<br />' });
var format_Mirtospazzamentomeccanico_43 = new ol.format.GeoJSON();
var features_Mirtospazzamentomeccanico_43 = format_Mirtospazzamentomeccanico_43.readFeatures(json_Mirtospazzamentomeccanico_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mirtospazzamentomeccanico_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mirtospazzamentomeccanico_43.addFeatures(features_Mirtospazzamentomeccanico_43);
var lyr_Mirtospazzamentomeccanico_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mirtospazzamentomeccanico_43, 
                style: style_Mirtospazzamentomeccanico_43,
                popuplayertitle: 'Mirto spazzamento meccanico',
                interactive: true,
    title: 'Mirto spazzamento meccanico<br />\
    <img src="styles/legend/Mirtospazzamentomeccanico_43_0.png" /> B<br />' });
var format_Mirtospazzamentomanuale_44 = new ol.format.GeoJSON();
var features_Mirtospazzamentomanuale_44 = format_Mirtospazzamentomanuale_44.readFeatures(json_Mirtospazzamentomanuale_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mirtospazzamentomanuale_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mirtospazzamentomanuale_44.addFeatures(features_Mirtospazzamentomanuale_44);
var lyr_Mirtospazzamentomanuale_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mirtospazzamentomanuale_44, 
                style: style_Mirtospazzamentomanuale_44,
                popuplayertitle: 'Mirto spazzamento manuale',
                interactive: true,
    title: 'Mirto spazzamento manuale<br />\
    <img src="styles/legend/Mirtospazzamentomanuale_44_0.png" /> A<br />' });
var format_MilitelloRosmarinospazzamentomeccanico_45 = new ol.format.GeoJSON();
var features_MilitelloRosmarinospazzamentomeccanico_45 = format_MilitelloRosmarinospazzamentomeccanico_45.readFeatures(json_MilitelloRosmarinospazzamentomeccanico_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MilitelloRosmarinospazzamentomeccanico_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MilitelloRosmarinospazzamentomeccanico_45.addFeatures(features_MilitelloRosmarinospazzamentomeccanico_45);
var lyr_MilitelloRosmarinospazzamentomeccanico_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MilitelloRosmarinospazzamentomeccanico_45, 
                style: style_MilitelloRosmarinospazzamentomeccanico_45,
                popuplayertitle: 'Militello Rosmarino spazzamento meccanico',
                interactive: true,
    title: 'Militello Rosmarino spazzamento meccanico<br />\
    <img src="styles/legend/MilitelloRosmarinospazzamentomeccanico_45_0.png" /> B<br />' });
var format_MilitelloRosmarinospazzamentomanuale_46 = new ol.format.GeoJSON();
var features_MilitelloRosmarinospazzamentomanuale_46 = format_MilitelloRosmarinospazzamentomanuale_46.readFeatures(json_MilitelloRosmarinospazzamentomanuale_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MilitelloRosmarinospazzamentomanuale_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MilitelloRosmarinospazzamentomanuale_46.addFeatures(features_MilitelloRosmarinospazzamentomanuale_46);
var lyr_MilitelloRosmarinospazzamentomanuale_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MilitelloRosmarinospazzamentomanuale_46, 
                style: style_MilitelloRosmarinospazzamentomanuale_46,
                popuplayertitle: 'Militello Rosmarino spazzamento manuale',
                interactive: true,
    title: 'Militello Rosmarino spazzamento manuale<br />\
    <img src="styles/legend/MilitelloRosmarinospazzamentomanuale_46_0.png" /> A<br />' });
var format_MazzarrSantAndreaspazzamentomeccanico_47 = new ol.format.GeoJSON();
var features_MazzarrSantAndreaspazzamentomeccanico_47 = format_MazzarrSantAndreaspazzamentomeccanico_47.readFeatures(json_MazzarrSantAndreaspazzamentomeccanico_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MazzarrSantAndreaspazzamentomeccanico_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MazzarrSantAndreaspazzamentomeccanico_47.addFeatures(features_MazzarrSantAndreaspazzamentomeccanico_47);
var lyr_MazzarrSantAndreaspazzamentomeccanico_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MazzarrSantAndreaspazzamentomeccanico_47, 
                style: style_MazzarrSantAndreaspazzamentomeccanico_47,
                popuplayertitle: 'Mazzarrà Sant\'Andrea spazzamento meccanico',
                interactive: true,
    title: 'Mazzarrà Sant\'Andrea spazzamento meccanico<br />\
    <img src="styles/legend/MazzarrSantAndreaspazzamentomeccanico_47_0.png" /> B<br />' });
var format_MazzarrSantAndreaspazzamentomanuale_48 = new ol.format.GeoJSON();
var features_MazzarrSantAndreaspazzamentomanuale_48 = format_MazzarrSantAndreaspazzamentomanuale_48.readFeatures(json_MazzarrSantAndreaspazzamentomanuale_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MazzarrSantAndreaspazzamentomanuale_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MazzarrSantAndreaspazzamentomanuale_48.addFeatures(features_MazzarrSantAndreaspazzamentomanuale_48);
var lyr_MazzarrSantAndreaspazzamentomanuale_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MazzarrSantAndreaspazzamentomanuale_48, 
                style: style_MazzarrSantAndreaspazzamentomanuale_48,
                popuplayertitle: 'Mazzarrà Sant\'Andrea spazzamento manuale',
                interactive: true,
    title: 'Mazzarrà Sant\'Andrea spazzamento manuale<br />\
    <img src="styles/legend/MazzarrSantAndreaspazzamentomanuale_48_0.png" /> A<br />' });
var format_Longispazzamentomeccanico_49 = new ol.format.GeoJSON();
var features_Longispazzamentomeccanico_49 = format_Longispazzamentomeccanico_49.readFeatures(json_Longispazzamentomeccanico_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Longispazzamentomeccanico_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Longispazzamentomeccanico_49.addFeatures(features_Longispazzamentomeccanico_49);
var lyr_Longispazzamentomeccanico_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Longispazzamentomeccanico_49, 
                style: style_Longispazzamentomeccanico_49,
                popuplayertitle: 'Longi spazzamento meccanico',
                interactive: true,
    title: 'Longi spazzamento meccanico<br />\
    <img src="styles/legend/Longispazzamentomeccanico_49_0.png" /> B<br />' });
var format_Longispazzamentomanuale_50 = new ol.format.GeoJSON();
var features_Longispazzamentomanuale_50 = format_Longispazzamentomanuale_50.readFeatures(json_Longispazzamentomanuale_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Longispazzamentomanuale_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Longispazzamentomanuale_50.addFeatures(features_Longispazzamentomanuale_50);
var lyr_Longispazzamentomanuale_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Longispazzamentomanuale_50, 
                style: style_Longispazzamentomanuale_50,
                popuplayertitle: 'Longi spazzamento manuale',
                interactive: true,
    title: 'Longi spazzamento manuale<br />\
    <img src="styles/legend/Longispazzamentomanuale_50_0.png" /> A<br />' });
var format_Librizzispazzamentomeccanico_51 = new ol.format.GeoJSON();
var features_Librizzispazzamentomeccanico_51 = format_Librizzispazzamentomeccanico_51.readFeatures(json_Librizzispazzamentomeccanico_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Librizzispazzamentomeccanico_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Librizzispazzamentomeccanico_51.addFeatures(features_Librizzispazzamentomeccanico_51);
var lyr_Librizzispazzamentomeccanico_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Librizzispazzamentomeccanico_51, 
                style: style_Librizzispazzamentomeccanico_51,
                popuplayertitle: 'Librizzi spazzamento meccanico',
                interactive: true,
    title: 'Librizzi spazzamento meccanico<br />\
    <img src="styles/legend/Librizzispazzamentomeccanico_51_0.png" /> B<br />' });
var format_Librizzispazzamentomanuale_52 = new ol.format.GeoJSON();
var features_Librizzispazzamentomanuale_52 = format_Librizzispazzamentomanuale_52.readFeatures(json_Librizzispazzamentomanuale_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Librizzispazzamentomanuale_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Librizzispazzamentomanuale_52.addFeatures(features_Librizzispazzamentomanuale_52);
var lyr_Librizzispazzamentomanuale_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Librizzispazzamentomanuale_52, 
                style: style_Librizzispazzamentomanuale_52,
                popuplayertitle: 'Librizzi spazzamento manuale',
                interactive: true,
    title: 'Librizzi spazzamento manuale<br />\
    <img src="styles/legend/Librizzispazzamentomanuale_52_0.png" /> A<br />' });
var format_GioiosaMareaspazzamentomeccanico_53 = new ol.format.GeoJSON();
var features_GioiosaMareaspazzamentomeccanico_53 = format_GioiosaMareaspazzamentomeccanico_53.readFeatures(json_GioiosaMareaspazzamentomeccanico_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GioiosaMareaspazzamentomeccanico_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GioiosaMareaspazzamentomeccanico_53.addFeatures(features_GioiosaMareaspazzamentomeccanico_53);
var lyr_GioiosaMareaspazzamentomeccanico_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GioiosaMareaspazzamentomeccanico_53, 
                style: style_GioiosaMareaspazzamentomeccanico_53,
                popuplayertitle: 'Gioiosa Marea spazzamento meccanico',
                interactive: true,
    title: 'Gioiosa Marea spazzamento meccanico<br />\
    <img src="styles/legend/GioiosaMareaspazzamentomeccanico_53_0.png" /> D<br />' });
var format_GioiosaMareaspazzamentomanuale_54 = new ol.format.GeoJSON();
var features_GioiosaMareaspazzamentomanuale_54 = format_GioiosaMareaspazzamentomanuale_54.readFeatures(json_GioiosaMareaspazzamentomanuale_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GioiosaMareaspazzamentomanuale_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GioiosaMareaspazzamentomanuale_54.addFeatures(features_GioiosaMareaspazzamentomanuale_54);
var lyr_GioiosaMareaspazzamentomanuale_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GioiosaMareaspazzamentomanuale_54, 
                style: style_GioiosaMareaspazzamentomanuale_54,
                popuplayertitle: 'Gioiosa Marea spazzamento manuale',
                interactive: true,
    title: 'Gioiosa Marea spazzamento manuale<br />\
    <img src="styles/legend/GioiosaMareaspazzamentomanuale_54_0.png" /> A<br />\
    <img src="styles/legend/GioiosaMareaspazzamentomanuale_54_1.png" /> B<br />\
    <img src="styles/legend/GioiosaMareaspazzamentomanuale_54_2.png" /> C<br />' });
var format_GalatiMamertinospazzamentomeccanico_55 = new ol.format.GeoJSON();
var features_GalatiMamertinospazzamentomeccanico_55 = format_GalatiMamertinospazzamentomeccanico_55.readFeatures(json_GalatiMamertinospazzamentomeccanico_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GalatiMamertinospazzamentomeccanico_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GalatiMamertinospazzamentomeccanico_55.addFeatures(features_GalatiMamertinospazzamentomeccanico_55);
var lyr_GalatiMamertinospazzamentomeccanico_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GalatiMamertinospazzamentomeccanico_55, 
                style: style_GalatiMamertinospazzamentomeccanico_55,
                popuplayertitle: 'Galati Mamertino spazzamento meccanico',
                interactive: true,
    title: 'Galati Mamertino spazzamento meccanico<br />\
    <img src="styles/legend/GalatiMamertinospazzamentomeccanico_55_0.png" /> C<br />' });
var format_GalatiMamertinospazzamentomanuale_56 = new ol.format.GeoJSON();
var features_GalatiMamertinospazzamentomanuale_56 = format_GalatiMamertinospazzamentomanuale_56.readFeatures(json_GalatiMamertinospazzamentomanuale_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GalatiMamertinospazzamentomanuale_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GalatiMamertinospazzamentomanuale_56.addFeatures(features_GalatiMamertinospazzamentomanuale_56);
var lyr_GalatiMamertinospazzamentomanuale_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GalatiMamertinospazzamentomanuale_56, 
                style: style_GalatiMamertinospazzamentomanuale_56,
                popuplayertitle: 'Galati Mamertino spazzamento manuale',
                interactive: true,
    title: 'Galati Mamertino spazzamento manuale<br />\
    <img src="styles/legend/GalatiMamertinospazzamentomanuale_56_0.png" /> A<br />\
    <img src="styles/legend/GalatiMamertinospazzamentomanuale_56_1.png" /> B<br />' });
var format_Frazzanospazzamentomeccanico_57 = new ol.format.GeoJSON();
var features_Frazzanospazzamentomeccanico_57 = format_Frazzanospazzamentomeccanico_57.readFeatures(json_Frazzanospazzamentomeccanico_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Frazzanospazzamentomeccanico_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Frazzanospazzamentomeccanico_57.addFeatures(features_Frazzanospazzamentomeccanico_57);
var lyr_Frazzanospazzamentomeccanico_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Frazzanospazzamentomeccanico_57, 
                style: style_Frazzanospazzamentomeccanico_57,
                popuplayertitle: 'Frazzano spazzamento meccanico',
                interactive: true,
    title: 'Frazzano spazzamento meccanico<br />\
    <img src="styles/legend/Frazzanospazzamentomeccanico_57_0.png" /> B<br />' });
var format_Frazzanospazzamentomanuale_58 = new ol.format.GeoJSON();
var features_Frazzanospazzamentomanuale_58 = format_Frazzanospazzamentomanuale_58.readFeatures(json_Frazzanospazzamentomanuale_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Frazzanospazzamentomanuale_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Frazzanospazzamentomanuale_58.addFeatures(features_Frazzanospazzamentomanuale_58);
var lyr_Frazzanospazzamentomanuale_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Frazzanospazzamentomanuale_58, 
                style: style_Frazzanospazzamentomanuale_58,
                popuplayertitle: 'Frazzano spazzamento manuale',
                interactive: true,
    title: 'Frazzano spazzamento manuale<br />\
    <img src="styles/legend/Frazzanospazzamentomanuale_58_0.png" /> A<br />' });
var format_FrancavilladiSiciliaspazzamentomeccanico_59 = new ol.format.GeoJSON();
var features_FrancavilladiSiciliaspazzamentomeccanico_59 = format_FrancavilladiSiciliaspazzamentomeccanico_59.readFeatures(json_FrancavilladiSiciliaspazzamentomeccanico_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FrancavilladiSiciliaspazzamentomeccanico_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FrancavilladiSiciliaspazzamentomeccanico_59.addFeatures(features_FrancavilladiSiciliaspazzamentomeccanico_59);
var lyr_FrancavilladiSiciliaspazzamentomeccanico_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FrancavilladiSiciliaspazzamentomeccanico_59, 
                style: style_FrancavilladiSiciliaspazzamentomeccanico_59,
                popuplayertitle: 'Francavilla di Sicilia spazzamento meccanico',
                interactive: true,
    title: 'Francavilla di Sicilia spazzamento meccanico<br />\
    <img src="styles/legend/FrancavilladiSiciliaspazzamentomeccanico_59_0.png" /> D<br />' });
var format_FrancavilladiSiciliaspazzamentomanuale_60 = new ol.format.GeoJSON();
var features_FrancavilladiSiciliaspazzamentomanuale_60 = format_FrancavilladiSiciliaspazzamentomanuale_60.readFeatures(json_FrancavilladiSiciliaspazzamentomanuale_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FrancavilladiSiciliaspazzamentomanuale_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FrancavilladiSiciliaspazzamentomanuale_60.addFeatures(features_FrancavilladiSiciliaspazzamentomanuale_60);
var lyr_FrancavilladiSiciliaspazzamentomanuale_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FrancavilladiSiciliaspazzamentomanuale_60, 
                style: style_FrancavilladiSiciliaspazzamentomanuale_60,
                popuplayertitle: 'Francavilla di Sicilia spazzamento manuale',
                interactive: true,
    title: 'Francavilla di Sicilia spazzamento manuale<br />\
    <img src="styles/legend/FrancavilladiSiciliaspazzamentomanuale_60_0.png" /> A1<br />\
    <img src="styles/legend/FrancavilladiSiciliaspazzamentomanuale_60_1.png" /> A2<br />\
    <img src="styles/legend/FrancavilladiSiciliaspazzamentomanuale_60_2.png" /> A3<br />\
    <img src="styles/legend/FrancavilladiSiciliaspazzamentomanuale_60_3.png" /> B<br />\
    <img src="styles/legend/FrancavilladiSiciliaspazzamentomanuale_60_4.png" /> C1<br />\
    <img src="styles/legend/FrancavilladiSiciliaspazzamentomanuale_60_5.png" /> C2<br />' });
var format_FondachelliFantinaspazzamentomeccanico_61 = new ol.format.GeoJSON();
var features_FondachelliFantinaspazzamentomeccanico_61 = format_FondachelliFantinaspazzamentomeccanico_61.readFeatures(json_FondachelliFantinaspazzamentomeccanico_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FondachelliFantinaspazzamentomeccanico_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FondachelliFantinaspazzamentomeccanico_61.addFeatures(features_FondachelliFantinaspazzamentomeccanico_61);
var lyr_FondachelliFantinaspazzamentomeccanico_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FondachelliFantinaspazzamentomeccanico_61, 
                style: style_FondachelliFantinaspazzamentomeccanico_61,
                popuplayertitle: 'Fondachelli-Fantina spazzamento meccanico',
                interactive: true,
    title: 'Fondachelli-Fantina spazzamento meccanico<br />\
    <img src="styles/legend/FondachelliFantinaspazzamentomeccanico_61_0.png" /> B<br />' });
var format_FondachelliFantinaspazzamentomanuale_62 = new ol.format.GeoJSON();
var features_FondachelliFantinaspazzamentomanuale_62 = format_FondachelliFantinaspazzamentomanuale_62.readFeatures(json_FondachelliFantinaspazzamentomanuale_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FondachelliFantinaspazzamentomanuale_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FondachelliFantinaspazzamentomanuale_62.addFeatures(features_FondachelliFantinaspazzamentomanuale_62);
var lyr_FondachelliFantinaspazzamentomanuale_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FondachelliFantinaspazzamentomanuale_62, 
                style: style_FondachelliFantinaspazzamentomanuale_62,
                popuplayertitle: 'Fondachelli-Fantina spazzamento manuale',
                interactive: true,
    title: 'Fondachelli-Fantina spazzamento manuale<br />\
    <img src="styles/legend/FondachelliFantinaspazzamentomanuale_62_0.png" /> A<br />' });
var format_Florestaspazzamentomeccanico_63 = new ol.format.GeoJSON();
var features_Florestaspazzamentomeccanico_63 = format_Florestaspazzamentomeccanico_63.readFeatures(json_Florestaspazzamentomeccanico_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Florestaspazzamentomeccanico_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Florestaspazzamentomeccanico_63.addFeatures(features_Florestaspazzamentomeccanico_63);
var lyr_Florestaspazzamentomeccanico_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Florestaspazzamentomeccanico_63, 
                style: style_Florestaspazzamentomeccanico_63,
                popuplayertitle: 'Floresta spazzamento meccanico',
                interactive: true,
    title: 'Floresta spazzamento meccanico<br />\
    <img src="styles/legend/Florestaspazzamentomeccanico_63_0.png" /> B<br />' });
var format_Florestaspazzamentomanuale_64 = new ol.format.GeoJSON();
var features_Florestaspazzamentomanuale_64 = format_Florestaspazzamentomanuale_64.readFeatures(json_Florestaspazzamentomanuale_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Florestaspazzamentomanuale_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Florestaspazzamentomanuale_64.addFeatures(features_Florestaspazzamentomanuale_64);
var lyr_Florestaspazzamentomanuale_64 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Florestaspazzamentomanuale_64, 
                style: style_Florestaspazzamentomanuale_64,
                popuplayertitle: 'Floresta spazzamento manuale',
                interactive: true,
    title: 'Floresta spazzamento manuale<br />\
    <img src="styles/legend/Florestaspazzamentomanuale_64_0.png" /> A<br />' });
var format_Falconespazzamentomeccanico_65 = new ol.format.GeoJSON();
var features_Falconespazzamentomeccanico_65 = format_Falconespazzamentomeccanico_65.readFeatures(json_Falconespazzamentomeccanico_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Falconespazzamentomeccanico_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Falconespazzamentomeccanico_65.addFeatures(features_Falconespazzamentomeccanico_65);
var lyr_Falconespazzamentomeccanico_65 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Falconespazzamentomeccanico_65, 
                style: style_Falconespazzamentomeccanico_65,
                popuplayertitle: 'Falcone spazzamento meccanico',
                interactive: true,
    title: 'Falcone spazzamento meccanico<br />\
    <img src="styles/legend/Falconespazzamentomeccanico_65_0.png" /> B<br />\
    <img src="styles/legend/Falconespazzamentomeccanico_65_1.png" /> C<br />' });
var format_Falconespazzamentomanuale_66 = new ol.format.GeoJSON();
var features_Falconespazzamentomanuale_66 = format_Falconespazzamentomanuale_66.readFeatures(json_Falconespazzamentomanuale_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Falconespazzamentomanuale_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Falconespazzamentomanuale_66.addFeatures(features_Falconespazzamentomanuale_66);
var lyr_Falconespazzamentomanuale_66 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Falconespazzamentomanuale_66, 
                style: style_Falconespazzamentomanuale_66,
                popuplayertitle: 'Falcone spazzamento manuale',
                interactive: true,
    title: 'Falcone spazzamento manuale<br />\
    <img src="styles/legend/Falconespazzamentomanuale_66_0.png" /> A<br />' });
var format_CastellUmbertospazzamentomeccanico_67 = new ol.format.GeoJSON();
var features_CastellUmbertospazzamentomeccanico_67 = format_CastellUmbertospazzamentomeccanico_67.readFeatures(json_CastellUmbertospazzamentomeccanico_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CastellUmbertospazzamentomeccanico_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CastellUmbertospazzamentomeccanico_67.addFeatures(features_CastellUmbertospazzamentomeccanico_67);
var lyr_CastellUmbertospazzamentomeccanico_67 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CastellUmbertospazzamentomeccanico_67, 
                style: style_CastellUmbertospazzamentomeccanico_67,
                popuplayertitle: 'Castell\'Umberto spazzamento meccanico',
                interactive: true,
    title: 'Castell\'Umberto spazzamento meccanico<br />\
    <img src="styles/legend/CastellUmbertospazzamentomeccanico_67_0.png" /> B<br />\
    <img src="styles/legend/CastellUmbertospazzamentomeccanico_67_1.png" /> C<br />' });
var format_CastellUmbertospazzamentomanuale_68 = new ol.format.GeoJSON();
var features_CastellUmbertospazzamentomanuale_68 = format_CastellUmbertospazzamentomanuale_68.readFeatures(json_CastellUmbertospazzamentomanuale_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CastellUmbertospazzamentomanuale_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CastellUmbertospazzamentomanuale_68.addFeatures(features_CastellUmbertospazzamentomanuale_68);
var lyr_CastellUmbertospazzamentomanuale_68 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CastellUmbertospazzamentomanuale_68, 
                style: style_CastellUmbertospazzamentomanuale_68,
                popuplayertitle: 'Castell\'Umberto spazzamento manuale',
                interactive: true,
    title: 'Castell\'Umberto spazzamento manuale<br />\
    <img src="styles/legend/CastellUmbertospazzamentomanuale_68_0.png" /> A<br />' });
var format_Tusaspazzamento_69 = new ol.format.GeoJSON();
var features_Tusaspazzamento_69 = format_Tusaspazzamento_69.readFeatures(json_Tusaspazzamento_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tusaspazzamento_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tusaspazzamento_69.addFeatures(features_Tusaspazzamento_69);
var lyr_Tusaspazzamento_69 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tusaspazzamento_69, 
                style: style_Tusaspazzamento_69,
                popuplayertitle: 'Tusa spazzamento',
                interactive: true,
    title: 'Tusa spazzamento<br />\
    <img src="styles/legend/Tusaspazzamento_69_0.png" /> A<br />\
    <img src="styles/legend/Tusaspazzamento_69_1.png" /> A1<br />\
    <img src="styles/legend/Tusaspazzamento_69_2.png" /> B1<br />\
    <img src="styles/legend/Tusaspazzamento_69_3.png" /> B2<br />\
    <img src="styles/legend/Tusaspazzamento_69_4.png" /> B3<br />\
    <img src="styles/legend/Tusaspazzamento_69_5.png" /> C1<br />\
    <img src="styles/legend/Tusaspazzamento_69_6.png" /> C2<br />\
    <img src="styles/legend/Tusaspazzamento_69_7.png" /> C3<br />\
    <img src="styles/legend/Tusaspazzamento_69_8.png" /> D1<br />\
    <img src="styles/legend/Tusaspazzamento_69_9.png" /> D2<br />\
    <img src="styles/legend/Tusaspazzamento_69_10.png" /> D3<br />\
    <img src="styles/legend/Tusaspazzamento_69_11.png" /> E<br />\
    <img src="styles/legend/Tusaspazzamento_69_12.png" /> F<br />\
    <img src="styles/legend/Tusaspazzamento_69_13.png" /> <br />' });
var format_Tripispazzamentomanuale_70 = new ol.format.GeoJSON();
var features_Tripispazzamentomanuale_70 = format_Tripispazzamentomanuale_70.readFeatures(json_Tripispazzamentomanuale_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tripispazzamentomanuale_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tripispazzamentomanuale_70.addFeatures(features_Tripispazzamentomanuale_70);
var lyr_Tripispazzamentomanuale_70 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tripispazzamentomanuale_70, 
                style: style_Tripispazzamentomanuale_70,
                popuplayertitle: 'Tripi spazzamento manuale',
                interactive: true,
    title: 'Tripi spazzamento manuale<br />\
    <img src="styles/legend/Tripispazzamentomanuale_70_0.png" /> A<br />' });
var format_SantaDomenicaVittoriaspazzamentomanuale_71 = new ol.format.GeoJSON();
var features_SantaDomenicaVittoriaspazzamentomanuale_71 = format_SantaDomenicaVittoriaspazzamentomanuale_71.readFeatures(json_SantaDomenicaVittoriaspazzamentomanuale_71, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SantaDomenicaVittoriaspazzamentomanuale_71 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SantaDomenicaVittoriaspazzamentomanuale_71.addFeatures(features_SantaDomenicaVittoriaspazzamentomanuale_71);
var lyr_SantaDomenicaVittoriaspazzamentomanuale_71 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SantaDomenicaVittoriaspazzamentomanuale_71, 
                style: style_SantaDomenicaVittoriaspazzamentomanuale_71,
                popuplayertitle: 'Santa Domenica Vittoria spazzamento manuale',
                interactive: true,
    title: 'Santa Domenica Vittoria spazzamento manuale<br />\
    <img src="styles/legend/SantaDomenicaVittoriaspazzamentomanuale_71_0.png" /> A<br />\
    <img src="styles/legend/SantaDomenicaVittoriaspazzamentomanuale_71_1.png" /> B<br />' });
var format_SanSalvatorediFitaliaspazzamentomanualeemeccanico_72 = new ol.format.GeoJSON();
var features_SanSalvatorediFitaliaspazzamentomanualeemeccanico_72 = format_SanSalvatorediFitaliaspazzamentomanualeemeccanico_72.readFeatures(json_SanSalvatorediFitaliaspazzamentomanualeemeccanico_72, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SanSalvatorediFitaliaspazzamentomanualeemeccanico_72 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SanSalvatorediFitaliaspazzamentomanualeemeccanico_72.addFeatures(features_SanSalvatorediFitaliaspazzamentomanualeemeccanico_72);
var lyr_SanSalvatorediFitaliaspazzamentomanualeemeccanico_72 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SanSalvatorediFitaliaspazzamentomanualeemeccanico_72, 
                style: style_SanSalvatorediFitaliaspazzamentomanualeemeccanico_72,
                popuplayertitle: 'San Salvatore di Fitalia spazzamento manuale e meccanico',
                interactive: true,
    title: 'San Salvatore di Fitalia spazzamento manuale e meccanico<br />\
    <img src="styles/legend/SanSalvatorediFitaliaspazzamentomanualeemeccanico_72_0.png" /> A<br />\
    <img src="styles/legend/SanSalvatorediFitaliaspazzamentomanualeemeccanico_72_1.png" /> B<br />' });
var format_RoccellaValdemonespazzamentomanuale_73 = new ol.format.GeoJSON();
var features_RoccellaValdemonespazzamentomanuale_73 = format_RoccellaValdemonespazzamentomanuale_73.readFeatures(json_RoccellaValdemonespazzamentomanuale_73, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RoccellaValdemonespazzamentomanuale_73 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RoccellaValdemonespazzamentomanuale_73.addFeatures(features_RoccellaValdemonespazzamentomanuale_73);
var lyr_RoccellaValdemonespazzamentomanuale_73 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RoccellaValdemonespazzamentomanuale_73, 
                style: style_RoccellaValdemonespazzamentomanuale_73,
                popuplayertitle: 'Roccella Valdemone spazzamento manuale',
                interactive: true,
    title: 'Roccella Valdemone spazzamento manuale<br />\
    <img src="styles/legend/RoccellaValdemonespazzamentomanuale_73_0.png" /> A<br />' });
var format_Reitanospazzamentomanuale_74 = new ol.format.GeoJSON();
var features_Reitanospazzamentomanuale_74 = format_Reitanospazzamentomanuale_74.readFeatures(json_Reitanospazzamentomanuale_74, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Reitanospazzamentomanuale_74 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Reitanospazzamentomanuale_74.addFeatures(features_Reitanospazzamentomanuale_74);
var lyr_Reitanospazzamentomanuale_74 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Reitanospazzamentomanuale_74, 
                style: style_Reitanospazzamentomanuale_74,
                popuplayertitle: 'Reitano spazzamento manuale',
                interactive: true,
    title: 'Reitano spazzamento manuale<br />\
    <img src="styles/legend/Reitanospazzamentomanuale_74_0.png" /> A<br />\
    <img src="styles/legend/Reitanospazzamentomanuale_74_1.png" /> B<br />' });
var format_Raccujaspazzamentomeccanico_75 = new ol.format.GeoJSON();
var features_Raccujaspazzamentomeccanico_75 = format_Raccujaspazzamentomeccanico_75.readFeatures(json_Raccujaspazzamentomeccanico_75, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Raccujaspazzamentomeccanico_75 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Raccujaspazzamentomeccanico_75.addFeatures(features_Raccujaspazzamentomeccanico_75);
var lyr_Raccujaspazzamentomeccanico_75 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Raccujaspazzamentomeccanico_75, 
                style: style_Raccujaspazzamentomeccanico_75,
                popuplayertitle: 'Raccuja spazzamento meccanico',
                interactive: true,
    title: 'Raccuja spazzamento meccanico<br />\
    <img src="styles/legend/Raccujaspazzamentomeccanico_75_0.png" /> B<br />' });
var format_Raccujaspazzamentomanuale_76 = new ol.format.GeoJSON();
var features_Raccujaspazzamentomanuale_76 = format_Raccujaspazzamentomanuale_76.readFeatures(json_Raccujaspazzamentomanuale_76, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Raccujaspazzamentomanuale_76 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Raccujaspazzamentomanuale_76.addFeatures(features_Raccujaspazzamentomanuale_76);
var lyr_Raccujaspazzamentomanuale_76 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Raccujaspazzamentomanuale_76, 
                style: style_Raccujaspazzamentomanuale_76,
                popuplayertitle: 'Raccuja spazzamento manuale',
                interactive: true,
    title: 'Raccuja spazzamento manuale<br />\
    <img src="styles/legend/Raccujaspazzamentomanuale_76_0.png" /> A<br />' });
var format_MottadAffermospazzamentomanuale_77 = new ol.format.GeoJSON();
var features_MottadAffermospazzamentomanuale_77 = format_MottadAffermospazzamentomanuale_77.readFeatures(json_MottadAffermospazzamentomanuale_77, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MottadAffermospazzamentomanuale_77 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MottadAffermospazzamentomanuale_77.addFeatures(features_MottadAffermospazzamentomanuale_77);
var lyr_MottadAffermospazzamentomanuale_77 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MottadAffermospazzamentomanuale_77, 
                style: style_MottadAffermospazzamentomanuale_77,
                popuplayertitle: 'Motta d\'Affermo spazzamento manuale',
                interactive: true,
    title: 'Motta d\'Affermo spazzamento manuale<br />\
    <img src="styles/legend/MottadAffermospazzamentomanuale_77_0.png" /> A<br />\
    <img src="styles/legend/MottadAffermospazzamentomanuale_77_1.png" /> B<br />' });
var format_MottaCamastraspazzamentomanuale_78 = new ol.format.GeoJSON();
var features_MottaCamastraspazzamentomanuale_78 = format_MottaCamastraspazzamentomanuale_78.readFeatures(json_MottaCamastraspazzamentomanuale_78, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MottaCamastraspazzamentomanuale_78 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MottaCamastraspazzamentomanuale_78.addFeatures(features_MottaCamastraspazzamentomanuale_78);
var lyr_MottaCamastraspazzamentomanuale_78 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MottaCamastraspazzamentomanuale_78, 
                style: style_MottaCamastraspazzamentomanuale_78,
                popuplayertitle: 'Motta Camastra spazzamento manuale',
                interactive: true,
    title: 'Motta Camastra spazzamento manuale<br />\
    <img src="styles/legend/MottaCamastraspazzamentomanuale_78_0.png" /> A<br />' });
var format_MoioAlcantaraspazzamentomanuale_79 = new ol.format.GeoJSON();
var features_MoioAlcantaraspazzamentomanuale_79 = format_MoioAlcantaraspazzamentomanuale_79.readFeatures(json_MoioAlcantaraspazzamentomanuale_79, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MoioAlcantaraspazzamentomanuale_79 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MoioAlcantaraspazzamentomanuale_79.addFeatures(features_MoioAlcantaraspazzamentomanuale_79);
var lyr_MoioAlcantaraspazzamentomanuale_79 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MoioAlcantaraspazzamentomanuale_79, 
                style: style_MoioAlcantaraspazzamentomanuale_79,
                popuplayertitle: 'Moio Alcantara spazzamento manuale',
                interactive: true,
    title: 'Moio Alcantara spazzamento manuale<br />\
    <img src="styles/legend/MoioAlcantaraspazzamentomanuale_79_0.png" /> A<br />\
    <img src="styles/legend/MoioAlcantaraspazzamentomanuale_79_1.png" /> B<br />' });
var format_Malvagnaspazzamentomanuale_80 = new ol.format.GeoJSON();
var features_Malvagnaspazzamentomanuale_80 = format_Malvagnaspazzamentomanuale_80.readFeatures(json_Malvagnaspazzamentomanuale_80, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Malvagnaspazzamentomanuale_80 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Malvagnaspazzamentomanuale_80.addFeatures(features_Malvagnaspazzamentomanuale_80);
var lyr_Malvagnaspazzamentomanuale_80 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Malvagnaspazzamentomanuale_80, 
                style: style_Malvagnaspazzamentomanuale_80,
                popuplayertitle: 'Malvagna spazzamento manuale',
                interactive: true,
    title: 'Malvagna spazzamento manuale<br />\
    <img src="styles/legend/Malvagnaspazzamentomanuale_80_0.png" /> A<br />\
    <img src="styles/legend/Malvagnaspazzamentomanuale_80_1.png" /> B<br />' });
var format_Granitispazzamentomanuale_81 = new ol.format.GeoJSON();
var features_Granitispazzamentomanuale_81 = format_Granitispazzamentomanuale_81.readFeatures(json_Granitispazzamentomanuale_81, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Granitispazzamentomanuale_81 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Granitispazzamentomanuale_81.addFeatures(features_Granitispazzamentomanuale_81);
var lyr_Granitispazzamentomanuale_81 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Granitispazzamentomanuale_81, 
                style: style_Granitispazzamentomanuale_81,
                popuplayertitle: 'Graniti spazzamento manuale',
                interactive: true,
    title: 'Graniti spazzamento manuale<br />\
    <img src="styles/legend/Granitispazzamentomanuale_81_0.png" /> A<br />\
    <img src="styles/legend/Granitispazzamentomanuale_81_1.png" /> B<br />' });
var format_FicarraspazzamentomanualeDACANCELLARE_82 = new ol.format.GeoJSON();
var features_FicarraspazzamentomanualeDACANCELLARE_82 = format_FicarraspazzamentomanualeDACANCELLARE_82.readFeatures(json_FicarraspazzamentomanualeDACANCELLARE_82, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FicarraspazzamentomanualeDACANCELLARE_82 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FicarraspazzamentomanualeDACANCELLARE_82.addFeatures(features_FicarraspazzamentomanualeDACANCELLARE_82);
var lyr_FicarraspazzamentomanualeDACANCELLARE_82 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FicarraspazzamentomanualeDACANCELLARE_82, 
                style: style_FicarraspazzamentomanualeDACANCELLARE_82,
                popuplayertitle: 'Ficarra spazzamento manuale DA CANCELLARE',
                interactive: true,
    title: 'Ficarra spazzamento manuale DA CANCELLARE<br />\
    <img src="styles/legend/FicarraspazzamentomanualeDACANCELLARE_82_0.png" /> A<br />' });
var format_Cesarospazzamento_83 = new ol.format.GeoJSON();
var features_Cesarospazzamento_83 = format_Cesarospazzamento_83.readFeatures(json_Cesarospazzamento_83, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cesarospazzamento_83 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cesarospazzamento_83.addFeatures(features_Cesarospazzamento_83);
var lyr_Cesarospazzamento_83 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cesarospazzamento_83, 
                style: style_Cesarospazzamento_83,
                popuplayertitle: 'Cesaro spazzamento',
                interactive: true,
    title: 'Cesaro spazzamento<br />\
    <img src="styles/legend/Cesarospazzamento_83_0.png" /> A<br />\
    <img src="styles/legend/Cesarospazzamento_83_1.png" /> B<br />\
    <img src="styles/legend/Cesarospazzamento_83_2.png" /> C<br />' });
var format_CasteldiLuciospazzamentomanuale_84 = new ol.format.GeoJSON();
var features_CasteldiLuciospazzamentomanuale_84 = format_CasteldiLuciospazzamentomanuale_84.readFeatures(json_CasteldiLuciospazzamentomanuale_84, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CasteldiLuciospazzamentomanuale_84 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CasteldiLuciospazzamentomanuale_84.addFeatures(features_CasteldiLuciospazzamentomanuale_84);
var lyr_CasteldiLuciospazzamentomanuale_84 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CasteldiLuciospazzamentomanuale_84, 
                style: style_CasteldiLuciospazzamentomanuale_84,
                popuplayertitle: 'Castel di Lucio spazzamento manuale',
                interactive: true,
    title: 'Castel di Lucio spazzamento manuale<br />\
    <img src="styles/legend/CasteldiLuciospazzamentomanuale_84_0.png" /> A<br />\
    <img src="styles/legend/CasteldiLuciospazzamentomanuale_84_1.png" /> B<br />' });
var format_Caroniaspazzamento_85 = new ol.format.GeoJSON();
var features_Caroniaspazzamento_85 = format_Caroniaspazzamento_85.readFeatures(json_Caroniaspazzamento_85, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Caroniaspazzamento_85 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Caroniaspazzamento_85.addFeatures(features_Caroniaspazzamento_85);
var lyr_Caroniaspazzamento_85 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Caroniaspazzamento_85, 
                style: style_Caroniaspazzamento_85,
                popuplayertitle: 'Caronia spazzamento',
                interactive: true,
    title: 'Caronia spazzamento<br />\
    <img src="styles/legend/Caroniaspazzamento_85_0.png" /> A<br />\
    <img src="styles/legend/Caroniaspazzamento_85_1.png" /> B<br />\
    <img src="styles/legend/Caroniaspazzamento_85_2.png" /> C<br />' });
var format_CapriLeonespazzamento_86 = new ol.format.GeoJSON();
var features_CapriLeonespazzamento_86 = format_CapriLeonespazzamento_86.readFeatures(json_CapriLeonespazzamento_86, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CapriLeonespazzamento_86 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CapriLeonespazzamento_86.addFeatures(features_CapriLeonespazzamento_86);
var lyr_CapriLeonespazzamento_86 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CapriLeonespazzamento_86, 
                style: style_CapriLeonespazzamento_86,
                popuplayertitle: 'Capri Leone spazzamento',
                interactive: true,
    title: 'Capri Leone spazzamento<br />\
    <img src="styles/legend/CapriLeonespazzamento_86_0.png" /> A<br />\
    <img src="styles/legend/CapriLeonespazzamento_86_1.png" /> B<br />\
    <img src="styles/legend/CapriLeonespazzamento_86_2.png" /> C<br />\
    <img src="styles/legend/CapriLeonespazzamento_86_3.png" /> D<br />\
    <img src="styles/legend/CapriLeonespazzamento_86_4.png" /> E<br />\
    <img src="styles/legend/CapriLeonespazzamento_86_5.png" /> F<br />' });
var format_CapodOrlandospazzamento_87 = new ol.format.GeoJSON();
var features_CapodOrlandospazzamento_87 = format_CapodOrlandospazzamento_87.readFeatures(json_CapodOrlandospazzamento_87, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CapodOrlandospazzamento_87 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CapodOrlandospazzamento_87.addFeatures(features_CapodOrlandospazzamento_87);
var lyr_CapodOrlandospazzamento_87 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CapodOrlandospazzamento_87, 
                style: style_CapodOrlandospazzamento_87,
                popuplayertitle: 'Capo d\'Orlando spazzamento',
                interactive: true,
    title: 'Capo d\'Orlando spazzamento<br />\
    <img src="styles/legend/CapodOrlandospazzamento_87_0.png" /> A<br />\
    <img src="styles/legend/CapodOrlandospazzamento_87_1.png" /> B<br />\
    <img src="styles/legend/CapodOrlandospazzamento_87_2.png" /> C<br />\
    <img src="styles/legend/CapodOrlandospazzamento_87_3.png" /> D<br />\
    <img src="styles/legend/CapodOrlandospazzamento_87_4.png" /> E<br />\
    <img src="styles/legend/CapodOrlandospazzamento_87_5.png" /> F<br />\
    <img src="styles/legend/CapodOrlandospazzamento_87_6.png" /> G<br />\
    <img src="styles/legend/CapodOrlandospazzamento_87_7.png" /> H1<br />\
    <img src="styles/legend/CapodOrlandospazzamento_87_8.png" /> H2<br />\
    <img src="styles/legend/CapodOrlandospazzamento_87_9.png" /> H3<br />\
    <img src="styles/legend/CapodOrlandospazzamento_87_10.png" /> H4<br />' });
var format_Capizzispazzamento_88 = new ol.format.GeoJSON();
var features_Capizzispazzamento_88 = format_Capizzispazzamento_88.readFeatures(json_Capizzispazzamento_88, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Capizzispazzamento_88 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Capizzispazzamento_88.addFeatures(features_Capizzispazzamento_88);
var lyr_Capizzispazzamento_88 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Capizzispazzamento_88, 
                style: style_Capizzispazzamento_88,
                popuplayertitle: 'Capizzi spazzamento',
                interactive: true,
    title: 'Capizzi spazzamento<br />\
    <img src="styles/legend/Capizzispazzamento_88_0.png" /> A1<br />\
    <img src="styles/legend/Capizzispazzamento_88_1.png" /> A2<br />\
    <img src="styles/legend/Capizzispazzamento_88_2.png" /> B1<br />\
    <img src="styles/legend/Capizzispazzamento_88_3.png" /> B2<br />\
    <img src="styles/legend/Capizzispazzamento_88_4.png" /> C1<br />\
    <img src="styles/legend/Capizzispazzamento_88_5.png" /> C2<br />\
    <img src="styles/legend/Capizzispazzamento_88_6.png" /> <br />' });
var format_Brolospazzamento_89 = new ol.format.GeoJSON();
var features_Brolospazzamento_89 = format_Brolospazzamento_89.readFeatures(json_Brolospazzamento_89, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Brolospazzamento_89 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Brolospazzamento_89.addFeatures(features_Brolospazzamento_89);
var lyr_Brolospazzamento_89 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Brolospazzamento_89, 
                style: style_Brolospazzamento_89,
                popuplayertitle: 'Brolo spazzamento',
                interactive: true,
    title: 'Brolo spazzamento<br />\
    <img src="styles/legend/Brolospazzamento_89_0.png" /> A<br />\
    <img src="styles/legend/Brolospazzamento_89_1.png" /> B<br />\
    <img src="styles/legend/Brolospazzamento_89_2.png" /> C<br />\
    <img src="styles/legend/Brolospazzamento_89_3.png" /> D1<br />\
    <img src="styles/legend/Brolospazzamento_89_4.png" /> D2<br />\
    <img src="styles/legend/Brolospazzamento_89_5.png" /> D3<br />\
    <img src="styles/legend/Brolospazzamento_89_6.png" /> E1<br />\
    <img src="styles/legend/Brolospazzamento_89_7.png" /> E2<br />\
    <img src="styles/legend/Brolospazzamento_89_8.png" /> E3<br />\
    <img src="styles/legend/Brolospazzamento_89_9.png" /> F1<br />\
    <img src="styles/legend/Brolospazzamento_89_10.png" /> F2<br />\
    <img src="styles/legend/Brolospazzamento_89_11.png" /> F3<br />\
    <img src="styles/legend/Brolospazzamento_89_12.png" /> G<br />\
    <img src="styles/legend/Brolospazzamento_89_13.png" /> H<br />\
    <img src="styles/legend/Brolospazzamento_89_14.png" /> I<br />' });
var format_Basicspazzamentomeccanico_90 = new ol.format.GeoJSON();
var features_Basicspazzamentomeccanico_90 = format_Basicspazzamentomeccanico_90.readFeatures(json_Basicspazzamentomeccanico_90, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Basicspazzamentomeccanico_90 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Basicspazzamentomeccanico_90.addFeatures(features_Basicspazzamentomeccanico_90);
var lyr_Basicspazzamentomeccanico_90 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Basicspazzamentomeccanico_90, 
                style: style_Basicspazzamentomeccanico_90,
                popuplayertitle: 'Basicò spazzamento meccanico',
                interactive: true,
    title: 'Basicò spazzamento meccanico<br />\
    <img src="styles/legend/Basicspazzamentomeccanico_90_0.png" /> MECCANICO<br />\
    <img src="styles/legend/Basicspazzamentomeccanico_90_1.png" /> <br />' });
var format_Basicspazzamentomanuale_91 = new ol.format.GeoJSON();
var features_Basicspazzamentomanuale_91 = format_Basicspazzamentomanuale_91.readFeatures(json_Basicspazzamentomanuale_91, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Basicspazzamentomanuale_91 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Basicspazzamentomanuale_91.addFeatures(features_Basicspazzamentomanuale_91);
var lyr_Basicspazzamentomanuale_91 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Basicspazzamentomanuale_91, 
                style: style_Basicspazzamentomanuale_91,
                popuplayertitle: 'Basicò spazzamento manuale',
                interactive: true,
    title: 'Basicò spazzamento manuale<br />\
    <img src="styles/legend/Basicspazzamentomanuale_91_0.png" /> MANUALE<br />' });
var format_AlcaraliFusispazzamento_92 = new ol.format.GeoJSON();
var features_AlcaraliFusispazzamento_92 = format_AlcaraliFusispazzamento_92.readFeatures(json_AlcaraliFusispazzamento_92, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AlcaraliFusispazzamento_92 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlcaraliFusispazzamento_92.addFeatures(features_AlcaraliFusispazzamento_92);
var lyr_AlcaraliFusispazzamento_92 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AlcaraliFusispazzamento_92, 
                style: style_AlcaraliFusispazzamento_92,
                popuplayertitle: 'Alcara li Fusi spazzamento',
                interactive: true,
    title: 'Alcara li Fusi spazzamento<br />\
    <img src="styles/legend/AlcaraliFusispazzamento_92_0.png" /> A<br />\
    <img src="styles/legend/AlcaraliFusispazzamento_92_1.png" /> B<br />\
    <img src="styles/legend/AlcaraliFusispazzamento_92_2.png" /> <br />' });
var format_Acquedolcispazzamento_93 = new ol.format.GeoJSON();
var features_Acquedolcispazzamento_93 = format_Acquedolcispazzamento_93.readFeatures(json_Acquedolcispazzamento_93, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Acquedolcispazzamento_93 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Acquedolcispazzamento_93.addFeatures(features_Acquedolcispazzamento_93);
var lyr_Acquedolcispazzamento_93 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Acquedolcispazzamento_93, 
                style: style_Acquedolcispazzamento_93,
                popuplayertitle: 'Acquedolci spazzamento',
                interactive: true,
    title: 'Acquedolci spazzamento<br />\
    <img src="styles/legend/Acquedolcispazzamento_93_0.png" /> A1<br />\
    <img src="styles/legend/Acquedolcispazzamento_93_1.png" /> A2<br />\
    <img src="styles/legend/Acquedolcispazzamento_93_2.png" /> B<br />\
    <img src="styles/legend/Acquedolcispazzamento_93_3.png" /> C<br />\
    <img src="styles/legend/Acquedolcispazzamento_93_4.png" /> <br />' });
var format_limiti57comuni_94 = new ol.format.GeoJSON();
var features_limiti57comuni_94 = format_limiti57comuni_94.readFeatures(json_limiti57comuni_94, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_limiti57comuni_94 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_limiti57comuni_94.addFeatures(features_limiti57comuni_94);
var lyr_limiti57comuni_94 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_limiti57comuni_94, 
                style: style_limiti57comuni_94,
                popuplayertitle: 'limiti 57 comuni',
                interactive: true,
                title: '<img src="styles/legend/limiti57comuni_94.png" /> limiti 57 comuni'
            });
var group_Acquedolci = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Acquedolci'});
var group_AlcaraliFusi = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Alcara li Fusi'});
var group_Basic = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Basicò'});
var group_Brolo = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Brolo'});
var group_Capizzi = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Capizzi'});
var group_CapodOrlando = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Capo d\'Orlando'});
var group_CapriLeone = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Capri Leone'});
var group_Caronia = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Caronia'});
var group_CasteldiLucio = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Castel di Lucio'});
var group_CastellUmberto = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Castell\'Umberto'});
var group_Cesar = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Cesarò'});
var group_Ficarra = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Ficarra'});
var group_Falcone = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Falcone'});
var group_Floresta = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Floresta'});
var group_FondachelliFantina = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Fondachelli-Fantina'});
var group_FrancavilladiSicilia = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Francavilla di Sicilia'});
var group_Frazzan = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Frazzanò'});
var group_GalatiMamertino = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Galati Mamertino'});
var group_GioiosaMarea = new ol.layer.Group({
                                layers: [lyr_GioiosaMareaspazzamentomeccanico_53,lyr_GioiosaMareaspazzamentomanuale_54,],
                                fold: 'close',
                                title: 'Gioiosa Marea'});
var group_Graniti = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Graniti'});
var group_Librizzi = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Librizzi'});
var group_Longi = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Longi'});
var group_Malvagna = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Malvagna'});
var group_Mazzarr = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Mazzarrà'});
var group_MilitelloRosmarino = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Militello Rosmarino'});
var group_Mirto = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Mirto'});
var group_Mistretta = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Mistretta'});
var group_MoioAlcantara = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Moio Alcantara'});
var group_Montagnareale = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Montagnareale'});
var group_MonralbanoElicona = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Monralbano Elicona'});
var group_MottaCamastra = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Motta Camastra'});
var group_MottadAffermo = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Motta d\'Affermo'});
var group_Naso = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Naso'});
var group_NovaradiSicilia = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Novara di Sicilia'});
var group_Oliveri = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Oliveri'});
var group_Patti = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Patti'});
var group_Pettineo = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Pettineo'});
var group_Piraino = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Piraino'});
var group_Raccuja = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Raccuja'});
var group_Reitano = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Reitano'});
var group_RoccellaValdemone = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Roccella Valdemone'});
var group_RodMilici = new ol.layer.Group({
                                layers: [lyr_RodiMilicispazzamentomeccanico_23,lyr_RodiMilicispazzamentomanuale_24,],
                                fold: 'close',
                                title: 'Rodì Milici'});
var group_SanFratello = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'San Fratello'});
var group_SanMarcodAlunzio = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'San Marco d\'Alunzio'});
var group_SanPieroPatti = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'San Piero Patti'});
var group_SanSalvatorediFitalia = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'San Salvatore di Fitalia'});
var group_SanTeodoro = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'San Teodoro'});
var group_SantaDomenicaVittoria = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Santa Domenica Vittoria'});
var group_SantAgatadiMilitello = new ol.layer.Group({
                                layers: [lyr_SantAgatadiMilitellospazzamentomeccanico_13,lyr_SantAgatadiMilitellospazzamentomanuale_14,],
                                fold: 'close',
                                title: 'Sant\'Agata di Militello'});
var group_SantAngelodiBrolo = new ol.layer.Group({
                                layers: [lyr_SantAngelodiBrolospazzamentomeccanico_11,lyr_SantAngelodiBrolospazzamentomanuale_12,],
                                fold: 'close',
                                title: 'Sant\'Angelo di Brolo'});
var group_SantoStefanodiCamastra = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Santo Stefano di Camastra'});
var group_Sinagra = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Sinagra'});
var group_Torrenova = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Torrenova'});
var group_Tortorici = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Tortorici'});
var group_Tripi = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Tripi'});
var group_Tusa = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Tusa'});
var group_Ucria = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Ucria'});
var group_Spazzamento = new ol.layer.Group({
                                layers: [lyr_Tusaspazzamento_69,lyr_Tripispazzamentomanuale_70,lyr_SantaDomenicaVittoriaspazzamentomanuale_71,lyr_SanSalvatorediFitaliaspazzamentomanualeemeccanico_72,lyr_RoccellaValdemonespazzamentomanuale_73,lyr_Reitanospazzamentomanuale_74,lyr_Raccujaspazzamentomeccanico_75,lyr_Raccujaspazzamentomanuale_76,lyr_MottadAffermospazzamentomanuale_77,lyr_MottaCamastraspazzamentomanuale_78,lyr_MoioAlcantaraspazzamentomanuale_79,lyr_Malvagnaspazzamentomanuale_80,lyr_Granitispazzamentomanuale_81,lyr_FicarraspazzamentomanualeDACANCELLARE_82,lyr_Cesarospazzamento_83,lyr_CasteldiLuciospazzamentomanuale_84,lyr_Caroniaspazzamento_85,lyr_CapriLeonespazzamento_86,lyr_CapodOrlandospazzamento_87,lyr_Capizzispazzamento_88,lyr_Brolospazzamento_89,lyr_Basicspazzamentomeccanico_90,lyr_Basicspazzamentomanuale_91,lyr_AlcaraliFusispazzamento_92,lyr_Acquedolcispazzamento_93,],
                                fold: 'open',
                                title: 'Spazzamento'});
var group_CastellUmbertospazzamento = new ol.layer.Group({
                                layers: [lyr_CastellUmbertospazzamentomeccanico_67,lyr_CastellUmbertospazzamentomanuale_68,],
                                fold: 'close',
                                title: 'Castell\'Umberto spazzamento'});
var group_Falconespazzamento = new ol.layer.Group({
                                layers: [lyr_Falconespazzamentomeccanico_65,lyr_Falconespazzamentomanuale_66,],
                                fold: 'close',
                                title: 'Falcone spazzamento'});
var group_Florestaspazzamento = new ol.layer.Group({
                                layers: [lyr_Florestaspazzamentomeccanico_63,lyr_Florestaspazzamentomanuale_64,],
                                fold: 'close',
                                title: 'Floresta spazzamento'});
var group_FondachelliFantinaspazzamento = new ol.layer.Group({
                                layers: [lyr_FondachelliFantinaspazzamentomeccanico_61,lyr_FondachelliFantinaspazzamentomanuale_62,],
                                fold: 'close',
                                title: 'Fondachelli-Fantina spazzamento'});
var group_FrancavilladiSiciliaspazzamento = new ol.layer.Group({
                                layers: [lyr_FrancavilladiSiciliaspazzamentomeccanico_59,lyr_FrancavilladiSiciliaspazzamentomanuale_60,],
                                fold: 'close',
                                title: 'Francavilla di Sicilia spazzamento'});
var group_Frazzanospazzamento = new ol.layer.Group({
                                layers: [lyr_Frazzanospazzamentomeccanico_57,lyr_Frazzanospazzamentomanuale_58,],
                                fold: 'close',
                                title: 'Frazzano spazzamento'});
var group_Galatispazzamento = new ol.layer.Group({
                                layers: [lyr_GalatiMamertinospazzamentomeccanico_55,lyr_GalatiMamertinospazzamentomanuale_56,],
                                fold: 'close',
                                title: 'Galati spazzamento'});
var group_Librizzispazzamento = new ol.layer.Group({
                                layers: [lyr_Librizzispazzamentomeccanico_51,lyr_Librizzispazzamentomanuale_52,],
                                fold: 'close',
                                title: 'Librizzi spazzamento'});
var group_Longispazzamento = new ol.layer.Group({
                                layers: [lyr_Longispazzamentomeccanico_49,lyr_Longispazzamentomanuale_50,],
                                fold: 'close',
                                title: 'Longi spazzamento'});
var group_MazzarSpazzamento = new ol.layer.Group({
                                layers: [lyr_MazzarrSantAndreaspazzamentomeccanico_47,lyr_MazzarrSantAndreaspazzamentomanuale_48,],
                                fold: 'close',
                                title: 'Mazzarà Spazzamento'});
var group_MilitelloRosmarinoSpazzamento = new ol.layer.Group({
                                layers: [lyr_MilitelloRosmarinospazzamentomeccanico_45,lyr_MilitelloRosmarinospazzamentomanuale_46,],
                                fold: 'close',
                                title: 'Militello Rosmarino Spazzamento'});
var group_MirtoSpazzamento = new ol.layer.Group({
                                layers: [lyr_Mirtospazzamentomeccanico_43,lyr_Mirtospazzamentomanuale_44,],
                                fold: 'close',
                                title: 'Mirto Spazzamento'});
var group_Mistrettaspazzamento = new ol.layer.Group({
                                layers: [lyr_Mistrettaspazzamentomeccanico_41,lyr_Mistrettaspazzamentomanuale_42,],
                                fold: 'close',
                                title: 'Mistretta spazzamento'});
var group_Montagnarealespazzamento = new ol.layer.Group({
                                layers: [lyr_Montagnarealespazzamentomeccanico_39,lyr_Montagnarealespazzamentomanuale_40,],
                                fold: 'close',
                                title: 'Montagnareale spazzamento'});
var group_MontalbanoElicona = new ol.layer.Group({
                                layers: [lyr_MontalbanoEliconaspazzamentomeccanico_37,lyr_MontalbanoEliconaspazzamentomanuale_38,],
                                fold: 'close',
                                title: 'Montalbano Elicona'});
var group_NasoSpazzamento = new ol.layer.Group({
                                layers: [lyr_NASOspazzamentomeccanico_35,lyr_NASOspazzamentomanuale_36,],
                                fold: 'close',
                                title: 'Naso Spazzamento'});
var group_NovaradiSiciliaSpazzamento = new ol.layer.Group({
                                layers: [lyr_NovaradiSiciliaspazzamentomeccanico_33,lyr_NovaradiSiciliaspazzamentomanuale_34,],
                                fold: 'close',
                                title: 'Novara di Sicilia Spazzamento'});
var group_Olivierispazzamento = new ol.layer.Group({
                                layers: [lyr_Oliverispazzamentomeccanico_31,lyr_Oliverispazzamentomanuale_32,],
                                fold: 'close',
                                title: 'Olivieri spazzamento'});
var group_Pattispazzamento = new ol.layer.Group({
                                layers: [lyr_Pattispazzamentomeccanico_29,lyr_Pattispazzamentomanuale_30,],
                                fold: 'close',
                                title: 'Patti spazzamento'});
var group_Pettineospazzamento = new ol.layer.Group({
                                layers: [lyr_Pettineospazzamentomeccanico_27,lyr_Pettineospazzamentomanuale_28,],
                                fold: 'close',
                                title: 'Pettineo spazzamento'});
var group_Pirainospazzamento = new ol.layer.Group({
                                layers: [lyr_Pirainospazzamentomeccanico_25,lyr_Pirainospazzamentomanuale_26,],
                                fold: 'close',
                                title: 'Piraino spazzamento'});
var group_SanFratellospazzamento = new ol.layer.Group({
                                layers: [lyr_SanFratellospazzamentomeccanico_21,lyr_SanFratellospazzamentomanuale_22,],
                                fold: 'close',
                                title: 'San Fratello spazzamento'});
var group_SanMarcoSpazzamento = new ol.layer.Group({
                                layers: [lyr_SanMarcospazzamentomeccanico_19,lyr_SanMarcospazzamentomanuale_20,],
                                fold: 'close',
                                title: 'San Marco Spazzamento'});
var group_SanPieroPattiSpazzamento = new ol.layer.Group({
                                layers: [lyr_SanPieroPattispazzamentomeccanico_17,lyr_SanPieroPattispazzamentomanuale_18,],
                                fold: 'close',
                                title: 'San Piero Patti Spazzamento'});
var group_SanTeodoroSpazzamento = new ol.layer.Group({
                                layers: [lyr_SanTeodorospazzamentomeccanico_15,lyr_SanTeodorospazzamentomanuale_16,],
                                fold: 'close',
                                title: 'San Teodoro Spazzamento'});
var group_SantoStefanodiCamastraspazzamento = new ol.layer.Group({
                                layers: [lyr_SantoStefanodiCamastraspazzamentomeccanico_9,lyr_SantoStefanodiCamastraspazzamentomanuale_10,],
                                fold: 'close',
                                title: 'Santo Stefano di Camastra spazzamento'});
var group_Sinagraspazzamento = new ol.layer.Group({
                                layers: [lyr_Sinagraspazzamentomeccanico_7,lyr_Sinagraspazzamentomanuale_8,],
                                fold: 'close',
                                title: 'Sinagra spazzamento'});
var group_Torrenovaspazzamento = new ol.layer.Group({
                                layers: [lyr_Torrenovaspazzamentomeccanico_5,lyr_Torrenovaspazzamentomanuale_6,],
                                fold: 'close',
                                title: 'Torrenova spazzamento'});
var group_Tortoricispazzamento = new ol.layer.Group({
                                layers: [lyr_Spazzamentomeccanico_3,lyr_Spazzamentomanuale_4,],
                                fold: 'close',
                                title: 'Tortorici spazzamento'});
var group_Ucriaspazzamento = new ol.layer.Group({
                                layers: [lyr_Ucriaspazzamentomeccanico_1,lyr_Ucriaspazzamentomanuale_2,],
                                fold: 'close',
                                title: 'Ucria spazzamento'});

lyr_GoogleSatellite_0.setVisible(true);lyr_Ucriaspazzamentomeccanico_1.setVisible(true);lyr_Ucriaspazzamentomanuale_2.setVisible(true);lyr_Spazzamentomeccanico_3.setVisible(true);lyr_Spazzamentomanuale_4.setVisible(true);lyr_Torrenovaspazzamentomeccanico_5.setVisible(true);lyr_Torrenovaspazzamentomanuale_6.setVisible(true);lyr_Sinagraspazzamentomeccanico_7.setVisible(true);lyr_Sinagraspazzamentomanuale_8.setVisible(true);lyr_SantoStefanodiCamastraspazzamentomeccanico_9.setVisible(true);lyr_SantoStefanodiCamastraspazzamentomanuale_10.setVisible(true);lyr_SantAngelodiBrolospazzamentomeccanico_11.setVisible(true);lyr_SantAngelodiBrolospazzamentomanuale_12.setVisible(true);lyr_SantAgatadiMilitellospazzamentomeccanico_13.setVisible(true);lyr_SantAgatadiMilitellospazzamentomanuale_14.setVisible(true);lyr_SanTeodorospazzamentomeccanico_15.setVisible(true);lyr_SanTeodorospazzamentomanuale_16.setVisible(true);lyr_SanPieroPattispazzamentomeccanico_17.setVisible(true);lyr_SanPieroPattispazzamentomanuale_18.setVisible(true);lyr_SanMarcospazzamentomeccanico_19.setVisible(true);lyr_SanMarcospazzamentomanuale_20.setVisible(true);lyr_SanFratellospazzamentomeccanico_21.setVisible(true);lyr_SanFratellospazzamentomanuale_22.setVisible(true);lyr_RodiMilicispazzamentomeccanico_23.setVisible(true);lyr_RodiMilicispazzamentomanuale_24.setVisible(true);lyr_Pirainospazzamentomeccanico_25.setVisible(true);lyr_Pirainospazzamentomanuale_26.setVisible(true);lyr_Pettineospazzamentomeccanico_27.setVisible(true);lyr_Pettineospazzamentomanuale_28.setVisible(true);lyr_Pattispazzamentomeccanico_29.setVisible(true);lyr_Pattispazzamentomanuale_30.setVisible(true);lyr_Oliverispazzamentomeccanico_31.setVisible(true);lyr_Oliverispazzamentomanuale_32.setVisible(true);lyr_NovaradiSiciliaspazzamentomeccanico_33.setVisible(true);lyr_NovaradiSiciliaspazzamentomanuale_34.setVisible(true);lyr_NASOspazzamentomeccanico_35.setVisible(true);lyr_NASOspazzamentomanuale_36.setVisible(true);lyr_MontalbanoEliconaspazzamentomeccanico_37.setVisible(true);lyr_MontalbanoEliconaspazzamentomanuale_38.setVisible(true);lyr_Montagnarealespazzamentomeccanico_39.setVisible(true);lyr_Montagnarealespazzamentomanuale_40.setVisible(true);lyr_Mistrettaspazzamentomeccanico_41.setVisible(true);lyr_Mistrettaspazzamentomanuale_42.setVisible(true);lyr_Mirtospazzamentomeccanico_43.setVisible(true);lyr_Mirtospazzamentomanuale_44.setVisible(true);lyr_MilitelloRosmarinospazzamentomeccanico_45.setVisible(true);lyr_MilitelloRosmarinospazzamentomanuale_46.setVisible(true);lyr_MazzarrSantAndreaspazzamentomeccanico_47.setVisible(true);lyr_MazzarrSantAndreaspazzamentomanuale_48.setVisible(true);lyr_Longispazzamentomeccanico_49.setVisible(true);lyr_Longispazzamentomanuale_50.setVisible(true);lyr_Librizzispazzamentomeccanico_51.setVisible(true);lyr_Librizzispazzamentomanuale_52.setVisible(true);lyr_GioiosaMareaspazzamentomeccanico_53.setVisible(true);lyr_GioiosaMareaspazzamentomanuale_54.setVisible(true);lyr_GalatiMamertinospazzamentomeccanico_55.setVisible(true);lyr_GalatiMamertinospazzamentomanuale_56.setVisible(true);lyr_Frazzanospazzamentomeccanico_57.setVisible(true);lyr_Frazzanospazzamentomanuale_58.setVisible(true);lyr_FrancavilladiSiciliaspazzamentomeccanico_59.setVisible(true);lyr_FrancavilladiSiciliaspazzamentomanuale_60.setVisible(true);lyr_FondachelliFantinaspazzamentomeccanico_61.setVisible(true);lyr_FondachelliFantinaspazzamentomanuale_62.setVisible(true);lyr_Florestaspazzamentomeccanico_63.setVisible(true);lyr_Florestaspazzamentomanuale_64.setVisible(true);lyr_Falconespazzamentomeccanico_65.setVisible(true);lyr_Falconespazzamentomanuale_66.setVisible(true);lyr_CastellUmbertospazzamentomeccanico_67.setVisible(true);lyr_CastellUmbertospazzamentomanuale_68.setVisible(true);lyr_Tusaspazzamento_69.setVisible(true);lyr_Tripispazzamentomanuale_70.setVisible(true);lyr_SantaDomenicaVittoriaspazzamentomanuale_71.setVisible(true);lyr_SanSalvatorediFitaliaspazzamentomanualeemeccanico_72.setVisible(true);lyr_RoccellaValdemonespazzamentomanuale_73.setVisible(true);lyr_Reitanospazzamentomanuale_74.setVisible(true);lyr_Raccujaspazzamentomeccanico_75.setVisible(true);lyr_Raccujaspazzamentomanuale_76.setVisible(true);lyr_MottadAffermospazzamentomanuale_77.setVisible(true);lyr_MottaCamastraspazzamentomanuale_78.setVisible(true);lyr_MoioAlcantaraspazzamentomanuale_79.setVisible(true);lyr_Malvagnaspazzamentomanuale_80.setVisible(true);lyr_Granitispazzamentomanuale_81.setVisible(true);lyr_FicarraspazzamentomanualeDACANCELLARE_82.setVisible(true);lyr_Cesarospazzamento_83.setVisible(true);lyr_CasteldiLuciospazzamentomanuale_84.setVisible(true);lyr_Caroniaspazzamento_85.setVisible(true);lyr_CapriLeonespazzamento_86.setVisible(true);lyr_CapodOrlandospazzamento_87.setVisible(true);lyr_Capizzispazzamento_88.setVisible(true);lyr_Brolospazzamento_89.setVisible(true);lyr_Basicspazzamentomeccanico_90.setVisible(true);lyr_Basicspazzamentomanuale_91.setVisible(true);lyr_AlcaraliFusispazzamento_92.setVisible(true);lyr_Acquedolcispazzamento_93.setVisible(true);lyr_limiti57comuni_94.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_Ucriaspazzamento,group_Tortoricispazzamento,group_Torrenovaspazzamento,group_Sinagraspazzamento,group_SantoStefanodiCamastraspazzamento,group_SantAngelodiBrolo,group_SantAgatadiMilitello,group_SanTeodoroSpazzamento,group_SanPieroPattiSpazzamento,group_SanMarcoSpazzamento,group_SanFratellospazzamento,group_RodMilici,group_Pirainospazzamento,group_Pettineospazzamento,group_Pattispazzamento,group_Olivierispazzamento,group_NovaradiSiciliaSpazzamento,group_NasoSpazzamento,group_MontalbanoElicona,group_Montagnarealespazzamento,group_Mistrettaspazzamento,group_MirtoSpazzamento,group_MilitelloRosmarinoSpazzamento,group_MazzarSpazzamento,group_Longispazzamento,group_Librizzispazzamento,group_GioiosaMarea,group_Galatispazzamento,group_Frazzanospazzamento,group_FrancavilladiSiciliaspazzamento,group_FondachelliFantinaspazzamento,group_Florestaspazzamento,group_Falconespazzamento,group_CastellUmbertospazzamento,group_Spazzamento,lyr_limiti57comuni_94];
lyr_Ucriaspazzamentomeccanico_1.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'ZONA': 'ZONA', 'TIPO': 'TIPO', 'LUNGHEZZA': 'LUNGHEZZA', });
lyr_Ucriaspazzamentomanuale_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'ZONA': 'ZONA', 'TIPO': 'TIPO', 'LUNGHEZZA': 'LUNGHEZZA', });
lyr_Spazzamentomeccanico_3.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'LUNGHEZZA': 'LUNGHEZZA', 'ZONA': 'ZONA', 'TIPO': 'TIPO', });
lyr_Spazzamentomanuale_4.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'LUNGHEZZA': 'LUNGHEZZA', 'ZONE': 'ZONE', 'TIPO': 'TIPO', });
lyr_Torrenovaspazzamentomeccanico_5.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'ZONA': 'ZONA', 'TIPO': 'TIPO', 'LUNGHEZZA': 'LUNGHEZZA', });
lyr_Torrenovaspazzamentomanuale_6.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'ZONA': 'ZONA', 'TIPO': 'TIPO', 'LUNGHEZZA': 'LUNGHEZZA', });
lyr_Sinagraspazzamentomeccanico_7.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'ZONA': 'ZONA', 'TIPO': 'TIPO', 'LUNGHEZZA': 'LUNGHEZZA', });
lyr_Sinagraspazzamentomanuale_8.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'ZONA': 'ZONA', 'TIPO': 'TIPO', 'LUNGHEZZA': 'LUNGHEZZA', });
lyr_SantoStefanodiCamastraspazzamentomeccanico_9.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'ZONA': 'ZONA', 'TIPO': 'TIPO', 'LUNGHEZZA': 'LUNGHEZZA', });
lyr_SantoStefanodiCamastraspazzamentomanuale_10.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'ZONA': 'ZONA', 'TIPO': 'TIPO', 'LUNGHEZZA': 'LUNGHEZZA', });
lyr_SantAngelodiBrolospazzamentomeccanico_11.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'ZONA': 'ZONA', 'TIPO': 'TIPO', 'LUNGHEZZA': 'LUNGHEZZA', });
lyr_SantAngelodiBrolospazzamentomanuale_12.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'ZONA': 'ZONA', 'TIPO': 'TIPO', 'LUNGHEZZA': 'LUNGHEZZA', });
lyr_SantAgatadiMilitellospazzamentomeccanico_13.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'ZONA': 'ZONA', 'TIPO': 'TIPO', 'LUNGHEZZA': 'LUNGHEZZA', });
lyr_SantAgatadiMilitellospazzamentomanuale_14.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'ZONA': 'ZONA', 'TIPO': 'TIPO', 'LUNGHEZZA': 'LUNGHEZZA', });
lyr_SanTeodorospazzamentomeccanico_15.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'ZONA': 'ZONA', 'TIPO': 'TIPO', 'LUNGHEZZA': 'LUNGHEZZA', });
lyr_SanTeodorospazzamentomanuale_16.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'ZONA': 'ZONA', 'TIPO': 'TIPO', 'LUNGHEZZA': 'LUNGHEZZA', });
lyr_SanPieroPattispazzamentomeccanico_17.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'ZONA': 'ZONA', 'TIPO': 'TIPO', 'LUNGHEZZA': 'LUNGHEZZA', });
lyr_SanPieroPattispazzamentomanuale_18.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'ZONA': 'ZONA', 'TIPO': 'TIPO', 'LUNGHEZZA': 'LUNGHEZZA', });
lyr_SanMarcospazzamentomeccanico_19.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'ZONA': 'ZONA', 'TIPO': 'TIPO', 'LUNGHEZZA': 'LUNGHEZZA', });
lyr_SanMarcospazzamentomanuale_20.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'ZONA': 'ZONA', 'TIPO': 'TIPO', 'LUNGHEZZA': 'LUNGHEZZA', });
lyr_SanFratellospazzamentomeccanico_21.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'LUNGHEZZA': 'LUNGHEZZA', 'ZONA': 'ZONA', 'TIPO': 'TIPO', });
lyr_SanFratellospazzamentomanuale_22.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'LUNGHEZZA': 'LUNGHEZZA', 'ZONA': 'ZONA', 'TIPO': 'TIPO', });
lyr_RodiMilicispazzamentomeccanico_23.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'LUNGHEZZA': 'LUNGHEZZA', 'ZONA': 'ZONA', 'TIPO': 'TIPO', });
lyr_RodiMilicispazzamentomanuale_24.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'LUNGHEZZA': 'LUNGHEZZA', 'ZONA': 'ZONA', 'TIPO': 'TIPO', });
lyr_Pirainospazzamentomeccanico_25.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'surface': 'surface', 'name': 'name', 'maxspeed': 'maxspeed', 'lanes': 'lanes', 'highway': 'highway', 'ZONA': 'ZONA', 'TIPO': 'TIPO', 'LUNGHEZZA': 'LUNGHEZZA', });
lyr_Pirainospazzamentomanuale_26.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'surface': 'surface', 'name': 'name', 'maxspeed': 'maxspeed', 'lanes': 'lanes', 'highway': 'highway', 'ZONA': 'ZONA', 'TIPO': 'TIPO', 'LUNGHEZZA': 'LUNGHEZZA', });
lyr_Pettineospazzamentomeccanico_27.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'LUNGHEZZA': 'LUNGHEZZA', 'ZONA': 'ZONA', 'TIPO': 'TIPO', });
lyr_Pettineospazzamentomanuale_28.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'COMUNE': 'COMUNE', 'LUNGHEZZA': 'LUNGHEZZA', 'ZONA': 'ZONA', 'TIPO': 'TIPO', });
lyr_Pattispazzamentomeccanico_29.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'ZONA': 'ZONA', 'TIPO': 'TIPO', 'LUNGHEZZA': 'LUNGHEZZA', });
lyr_Pattispazzamentomanuale_30.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'ZONA': 'ZONA', 'TIPO': 'TIPO', 'LUNGHEZZA': 'LUNGHEZZA', });
lyr_Oliverispazzamentomeccanico_31.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'ZONA': 'ZONA', 'TIPO': 'TIPO', 'LUNGHEZZA': 'LUNGHEZZA', });
lyr_Oliverispazzamentomanuale_32.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'ZONA': 'ZONA', 'TIPO': 'TIPO', 'LUNGHEZZA': 'LUNGHEZZA', });
lyr_NovaradiSiciliaspazzamentomeccanico_33.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'LUNGHEZZA': 'LUNGHEZZA', 'ZONA': 'ZONA', 'TIPO': 'TIPO', });
lyr_NovaradiSiciliaspazzamentomanuale_34.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'LUNGHEZZA': 'LUNGHEZZA', 'ZONA': 'ZONA', 'TIPO': 'TIPO', });
lyr_NASOspazzamentomeccanico_35.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'ZONA': 'ZONA', 'TIPO': 'TIPO', 'LUNGHEZZA': 'LUNGHEZZA', });
lyr_NASOspazzamentomanuale_36.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'ZONA': 'ZONA', 'TIPO': 'TIPO', 'LUNGHEZZA': 'LUNGHEZZA', });
lyr_MontalbanoEliconaspazzamentomeccanico_37.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'LUNGHEZZA': 'LUNGHEZZA', 'ZONA': 'ZONA', });
lyr_MontalbanoEliconaspazzamentomanuale_38.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'LUNGHEZZA': 'LUNGHEZZA', 'ZONA': 'ZONA', });
lyr_Montagnarealespazzamentomeccanico_39.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'ZONA': 'ZONA', 'TIPO': 'TIPO', 'LUNGHEZZA': 'LUNGHEZZA', });
lyr_Montagnarealespazzamentomanuale_40.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'ZONA': 'ZONA', 'TIPO': 'TIPO', 'LUNGHEZZA': 'LUNGHEZZA', });
lyr_Mistrettaspazzamentomeccanico_41.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'LUNGHEZZA': 'LUNGHEZZA', 'ZONA': 'ZONA', 'TIPO': 'TIPO', });
lyr_Mistrettaspazzamentomanuale_42.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'COMUNE': 'COMUNE', 'LUNGHEZZA': 'LUNGHEZZA', 'ZONA': 'ZONA', 'TIPO': 'TIPO', });
lyr_Mirtospazzamentomeccanico_43.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'LUNGHEZZA': 'LUNGHEZZA', 'ZONA': 'ZONA', 'TIPO': 'TIPO', });
lyr_Mirtospazzamentomanuale_44.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'LUNGHEZZA': 'LUNGHEZZA', 'ZONA': 'ZONA', 'TIPO': 'TIPO', });
lyr_MilitelloRosmarinospazzamentomeccanico_45.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'ZONA': 'ZONA', 'MODALITA\'': 'MODALITA\'', 'LUNGHEZZA': 'LUNGHEZZA', });
lyr_MilitelloRosmarinospazzamentomanuale_46.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'ZONA': 'ZONA', 'MODALITA\'': 'MODALITA\'', 'LUNGHEZZA': 'LUNGHEZZA', });
lyr_MazzarrSantAndreaspazzamentomeccanico_47.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'ZONA': 'ZONA', 'MODALITA\'': 'MODALITA\'', 'LUNGHEZZA': 'LUNGHEZZA', });
lyr_MazzarrSantAndreaspazzamentomanuale_48.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'ZONA': 'ZONA', 'MODALITA\'': 'MODALITA\'', 'LUNGHEZZA': 'LUNGHEZZA', });
lyr_Longispazzamentomeccanico_49.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'LUNGHEZZA': 'LUNGHEZZA', 'ZONA': 'ZONA', 'TIPO': 'TIPO', });
lyr_Longispazzamentomanuale_50.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'LUNGHEZZA': 'LUNGHEZZA', 'ZONA': 'ZONA', 'TIPO': 'TIPO', });
lyr_Librizzispazzamentomeccanico_51.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'ZONA': 'ZONA', 'MODALITA\'': 'MODALITA\'', 'LUNGHEZZA': 'LUNGHEZZA', });
lyr_Librizzispazzamentomanuale_52.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'ZONA': 'ZONA', 'MODALITA\'': 'MODALITA\'', 'LUNGHEZZA': 'LUNGHEZZA', });
lyr_GioiosaMareaspazzamentomeccanico_53.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'ZONA': 'ZONA', 'MODALITA\'': 'MODALITA\'', 'LUNGHEZZA': 'LUNGHEZZA', });
lyr_GioiosaMareaspazzamentomanuale_54.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'ZONA': 'ZONA', 'MODALITA\'': 'MODALITA\'', 'LUNGHEZZA': 'LUNGHEZZA', });
lyr_GalatiMamertinospazzamentomeccanico_55.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'LUNGHEZZA': 'LUNGHEZZA', 'ZONA': 'ZONA', 'TIPO': 'TIPO', });
lyr_GalatiMamertinospazzamentomanuale_56.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'LUNGHEZZA': 'LUNGHEZZA', 'ZONA': 'ZONA', 'TIPO': 'TIPO', });
lyr_Frazzanospazzamentomeccanico_57.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'LUNGHEZZA': 'LUNGHEZZA', 'ZONA': 'ZONA', 'TIPO': 'TIPO', });
lyr_Frazzanospazzamentomanuale_58.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'LUNGHEZZA': 'LUNGHEZZA', 'ZONA': 'ZONA', 'TIPO': 'TIPO', });
lyr_FrancavilladiSiciliaspazzamentomeccanico_59.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'ZONA': 'ZONA', 'MODALITA\'': 'MODALITA\'', 'LUNGHEZZA': 'LUNGHEZZA', });
lyr_FrancavilladiSiciliaspazzamentomanuale_60.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'ZONA': 'ZONA', 'MODALITA\'': 'MODALITA\'', 'LUNGHEZZA': 'LUNGHEZZA', });
lyr_FondachelliFantinaspazzamentomeccanico_61.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'ZONA': 'ZONA', 'MODALITA\'': 'MODALITA\'', 'LUNGHEZZA': 'LUNGHEZZA', });
lyr_FondachelliFantinaspazzamentomanuale_62.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'ZONA': 'ZONA', 'MODALITA\'': 'MODALITA\'', 'LUNGHEZZA': 'LUNGHEZZA', });
lyr_Florestaspazzamentomeccanico_63.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'ZONA': 'ZONA', 'MODALITA\'': 'MODALITA\'', 'LUNGHEZZA': 'LUNGHEZZA', });
lyr_Florestaspazzamentomanuale_64.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'ZONA': 'ZONA', 'MODALITA\'': 'MODALITA\'', 'LUNGHEZZA': 'LUNGHEZZA', });
lyr_Falconespazzamentomeccanico_65.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'ZONA': 'ZONA', 'MODALITA\'': 'MODALITA\'', 'LUNGHEZZA': 'LUNGHEZZA', });
lyr_Falconespazzamentomanuale_66.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'ZONA': 'ZONA', 'MODALITA\'': 'MODALITA\'', 'LUNGHEZZA': 'LUNGHEZZA', });
lyr_CastellUmbertospazzamentomeccanico_67.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'ZONA': 'ZONA', 'MODALITA\'': 'MODALITA\'', 'LUNGHEZZA': 'LUNGHEZZA', });
lyr_CastellUmbertospazzamentomanuale_68.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'ZONA': 'ZONA', 'MODALITA\'': 'MODALITA\'', 'LUNGHEZZA': 'LUNGHEZZA', });
lyr_Tusaspazzamento_69.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'ZONA': 'ZONA', 'TIPO': 'TIPO', 'LUNGHEZZA': 'LUNGHEZZA', });
lyr_Tripispazzamentomanuale_70.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'ZONA': 'ZONA', 'TIPO': 'TIPO', 'LUNGHEZZA': 'LUNGHEZZA', });
lyr_SantaDomenicaVittoriaspazzamentomanuale_71.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'LUNGHEZZA': 'LUNGHEZZA', 'ZONA': 'ZONA', 'TIPO': 'TIPO', });
lyr_SanSalvatorediFitaliaspazzamentomanualeemeccanico_72.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'LUNGHEZZA': 'LUNGHEZZA', 'ZONA': 'ZONA', 'TIPO': 'TIPO', });
lyr_RoccellaValdemonespazzamentomanuale_73.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'TIPO': 'TIPO', 'ZONA': 'ZONA', 'LUNGHEZZA': 'LUNGHEZZA', });
lyr_Reitanospazzamentomanuale_74.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'ZONA': 'ZONA', 'TIPO': 'TIPO', 'LUNGHEZZA': 'LUNGHEZZA', });
lyr_Raccujaspazzamentomeccanico_75.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'ZONA': 'ZONA', 'TIPO': 'TIPO', 'LUNGHEZZA': 'LUNGHEZZA', });
lyr_Raccujaspazzamentomanuale_76.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'ZONA': 'ZONA', 'TIPO': 'TIPO', 'LUNGHEZZA': 'LUNGHEZZA', });
lyr_MottadAffermospazzamentomanuale_77.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'LUNGHEZZA': 'LUNGHEZZA', 'ZONA': 'ZONA', 'TIPO': 'TIPO', });
lyr_MottaCamastraspazzamentomanuale_78.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'ZONA': 'ZONA', 'TIPO': 'TIPO', 'LUNGHEZZA': 'LUNGHEZZA', });
lyr_MoioAlcantaraspazzamentomanuale_79.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'ZONA': 'ZONA', 'TIPO': 'TIPO', 'LUNGHEZZA': 'LUNGHEZZA', });
lyr_Malvagnaspazzamentomanuale_80.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'ZONA': 'ZONA', 'MODALITA\'': 'MODALITA\'', 'LUNGHEZZA': 'LUNGHEZZA', });
lyr_Granitispazzamentomanuale_81.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'ZONA': 'ZONA', 'MODALITA\'': 'MODALITA\'', 'LUNGHEZZA': 'LUNGHEZZA', });
lyr_FicarraspazzamentomanualeDACANCELLARE_82.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'LUNGHEZZA': 'LUNGHEZZA', 'ZONA': 'ZONA', 'TIPO': 'TIPO', });
lyr_Cesarospazzamento_83.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'LUNGHEZZA': 'LUNGHEZZA', 'ZONA': 'ZONA', 'TIPO': 'TIPO', });
lyr_CasteldiLuciospazzamentomanuale_84.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'LUNGHEZZA': 'LUNGHEZZA', 'ZONA': 'ZONA', 'TIPO': 'TIPO', });
lyr_Caroniaspazzamento_85.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'MODALITA\'': 'MODALITA\'', 'ZONA': 'ZONA', 'LUNGHEZZA': 'LUNGHEZZA', });
lyr_CapriLeonespazzamento_86.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'MODALITA\'': 'MODALITA\'', 'ZONA': 'ZONA', 'LUNGHEZZA': 'LUNGHEZZA', });
lyr_CapodOrlandospazzamento_87.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'MODALITA\'': 'MODALITA\'', 'FREQUENZA': 'FREQUENZA', 'LUNGHEZZA': 'LUNGHEZZA', 'ZONA': 'ZONA', });
lyr_Capizzispazzamento_88.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'ZONA': 'ZONA', 'LUNGHEZZA': 'LUNGHEZZA', });
lyr_Brolospazzamento_89.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'ZONA': 'ZONA', 'MODALITA\'': 'MODALITA\'', 'LUNGHEZZA': 'LUNGHEZZA', });
lyr_Basicspazzamentomeccanico_90.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'MODALITA\'': 'MODALITA\'', 'LUNGHEZZA': 'LUNGHEZZA', 'ZONA': 'ZONA', });
lyr_Basicspazzamentomanuale_91.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'MODALITA\'': 'MODALITA\'', 'LUNGHEZZA': 'LUNGHEZZA', 'ZONA': 'ZONA', });
lyr_AlcaraliFusispazzamento_92.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'MODALITA\'': 'MODALITA\'', 'LUNGHEZZA': 'LUNGHEZZA', 'ZONA': 'ZONA', });
lyr_Acquedolcispazzamento_93.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', 'MODALITA\'': 'MODALITA\'', 'LUNGHEZZA': 'LUNGHEZZA', 'ZONA': 'ZONA', });
lyr_limiti57comuni_94.set('fieldAliases', {'COD_RIP': 'COD_RIP', 'COD_REG': 'COD_REG', 'COD_PROV': 'COD_PROV', 'COD_CM': 'COD_CM', 'COD_UTS': 'COD_UTS', 'PRO_COM': 'PRO_COM', 'PRO_COM_T': 'PRO_COM_T', 'COMUNE': 'COMUNE', 'COMUNE_A': 'COMUNE_A', 'CC_UTS': 'CC_UTS', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Sub-Ambito': 'Sub-Ambito', 'SPAMPA': 'SPAMPA', });
lyr_Ucriaspazzamentomeccanico_1.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'ZONA': 'TextEdit', 'TIPO': 'TextEdit', 'LUNGHEZZA': 'TextEdit', });
lyr_Ucriaspazzamentomanuale_2.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'ZONA': 'TextEdit', 'TIPO': 'TextEdit', 'LUNGHEZZA': 'TextEdit', });
lyr_Spazzamentomeccanico_3.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'LUNGHEZZA': 'TextEdit', 'ZONA': 'TextEdit', 'TIPO': '', });
lyr_Spazzamentomanuale_4.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'LUNGHEZZA': 'TextEdit', 'ZONE': 'TextEdit', 'TIPO': '', });
lyr_Torrenovaspazzamentomeccanico_5.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'ZONA': 'TextEdit', 'TIPO': 'TextEdit', 'LUNGHEZZA': 'TextEdit', });
lyr_Torrenovaspazzamentomanuale_6.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'ZONA': 'TextEdit', 'TIPO': 'TextEdit', 'LUNGHEZZA': 'TextEdit', });
lyr_Sinagraspazzamentomeccanico_7.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'ZONA': 'TextEdit', 'TIPO': 'TextEdit', 'LUNGHEZZA': 'TextEdit', });
lyr_Sinagraspazzamentomanuale_8.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'ZONA': 'TextEdit', 'TIPO': 'TextEdit', 'LUNGHEZZA': 'TextEdit', });
lyr_SantoStefanodiCamastraspazzamentomeccanico_9.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'ZONA': 'TextEdit', 'TIPO': 'TextEdit', 'LUNGHEZZA': 'TextEdit', });
lyr_SantoStefanodiCamastraspazzamentomanuale_10.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'ZONA': 'TextEdit', 'TIPO': 'TextEdit', 'LUNGHEZZA': 'TextEdit', });
lyr_SantAngelodiBrolospazzamentomeccanico_11.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'ZONA': 'TextEdit', 'TIPO': 'TextEdit', 'LUNGHEZZA': 'TextEdit', });
lyr_SantAngelodiBrolospazzamentomanuale_12.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'ZONA': 'TextEdit', 'TIPO': 'TextEdit', 'LUNGHEZZA': 'TextEdit', });
lyr_SantAgatadiMilitellospazzamentomeccanico_13.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'ZONA': 'TextEdit', 'TIPO': 'TextEdit', 'LUNGHEZZA': 'TextEdit', });
lyr_SantAgatadiMilitellospazzamentomanuale_14.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'ZONA': 'TextEdit', 'TIPO': 'TextEdit', 'LUNGHEZZA': 'TextEdit', });
lyr_SanTeodorospazzamentomeccanico_15.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'ZONA': 'TextEdit', 'TIPO': 'TextEdit', 'LUNGHEZZA': 'TextEdit', });
lyr_SanTeodorospazzamentomanuale_16.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'ZONA': 'TextEdit', 'TIPO': 'TextEdit', 'LUNGHEZZA': 'TextEdit', });
lyr_SanPieroPattispazzamentomeccanico_17.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'ZONA': 'TextEdit', 'TIPO': 'TextEdit', 'LUNGHEZZA': 'TextEdit', });
lyr_SanPieroPattispazzamentomanuale_18.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'ZONA': 'TextEdit', 'TIPO': 'TextEdit', 'LUNGHEZZA': 'TextEdit', });
lyr_SanMarcospazzamentomeccanico_19.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'ZONA': 'TextEdit', 'TIPO': 'TextEdit', 'LUNGHEZZA': 'TextEdit', });
lyr_SanMarcospazzamentomanuale_20.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'ZONA': 'TextEdit', 'TIPO': 'TextEdit', 'LUNGHEZZA': 'TextEdit', });
lyr_SanFratellospazzamentomeccanico_21.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'LUNGHEZZA': 'TextEdit', 'ZONA': 'TextEdit', 'TIPO': '', });
lyr_SanFratellospazzamentomanuale_22.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'LUNGHEZZA': 'TextEdit', 'ZONA': 'TextEdit', 'TIPO': '', });
lyr_RodiMilicispazzamentomeccanico_23.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'LUNGHEZZA': 'TextEdit', 'ZONA': 'TextEdit', 'TIPO': '', });
lyr_RodiMilicispazzamentomanuale_24.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'LUNGHEZZA': 'TextEdit', 'ZONA': 'TextEdit', 'TIPO': '', });
lyr_Pirainospazzamentomeccanico_25.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'surface': 'TextEdit', 'name': 'TextEdit', 'maxspeed': 'TextEdit', 'lanes': 'TextEdit', 'highway': 'TextEdit', 'ZONA': 'TextEdit', 'TIPO': 'TextEdit', 'LUNGHEZZA': 'TextEdit', });
lyr_Pirainospazzamentomanuale_26.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'surface': 'TextEdit', 'name': 'TextEdit', 'maxspeed': 'TextEdit', 'lanes': 'TextEdit', 'highway': 'TextEdit', 'ZONA': 'TextEdit', 'TIPO': 'TextEdit', 'LUNGHEZZA': 'TextEdit', });
lyr_Pettineospazzamentomeccanico_27.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'LUNGHEZZA': 'TextEdit', 'ZONA': 'TextEdit', 'TIPO': '', });
lyr_Pettineospazzamentomanuale_28.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'COMUNE': 'TextEdit', 'LUNGHEZZA': 'TextEdit', 'ZONA': 'TextEdit', 'TIPO': '', });
lyr_Pattispazzamentomeccanico_29.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'ZONA': 'TextEdit', 'TIPO': 'TextEdit', 'LUNGHEZZA': 'TextEdit', });
lyr_Pattispazzamentomanuale_30.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'ZONA': 'TextEdit', 'TIPO': 'TextEdit', 'LUNGHEZZA': 'TextEdit', });
lyr_Oliverispazzamentomeccanico_31.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'ZONA': 'TextEdit', 'TIPO': 'TextEdit', 'LUNGHEZZA': 'TextEdit', });
lyr_Oliverispazzamentomanuale_32.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'ZONA': 'TextEdit', 'TIPO': 'TextEdit', 'LUNGHEZZA': 'TextEdit', });
lyr_NovaradiSiciliaspazzamentomeccanico_33.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'LUNGHEZZA': 'TextEdit', 'ZONA': 'TextEdit', 'TIPO': '', });
lyr_NovaradiSiciliaspazzamentomanuale_34.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'LUNGHEZZA': 'TextEdit', 'ZONA': 'TextEdit', 'TIPO': '', });
lyr_NASOspazzamentomeccanico_35.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'ZONA': 'TextEdit', 'TIPO': 'TextEdit', 'LUNGHEZZA': 'TextEdit', });
lyr_NASOspazzamentomanuale_36.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'ZONA': 'TextEdit', 'TIPO': 'TextEdit', 'LUNGHEZZA': 'TextEdit', });
lyr_MontalbanoEliconaspazzamentomeccanico_37.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'LUNGHEZZA': 'TextEdit', 'ZONA': 'TextEdit', });
lyr_MontalbanoEliconaspazzamentomanuale_38.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'LUNGHEZZA': 'TextEdit', 'ZONA': 'TextEdit', });
lyr_Montagnarealespazzamentomeccanico_39.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'ZONA': 'TextEdit', 'TIPO': 'TextEdit', 'LUNGHEZZA': 'TextEdit', });
lyr_Montagnarealespazzamentomanuale_40.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'ZONA': 'TextEdit', 'TIPO': 'TextEdit', 'LUNGHEZZA': 'TextEdit', });
lyr_Mistrettaspazzamentomeccanico_41.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'LUNGHEZZA': 'TextEdit', 'ZONA': 'TextEdit', 'TIPO': '', });
lyr_Mistrettaspazzamentomanuale_42.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'COMUNE': 'TextEdit', 'LUNGHEZZA': 'TextEdit', 'ZONA': 'TextEdit', 'TIPO': '', });
lyr_Mirtospazzamentomeccanico_43.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'LUNGHEZZA': 'TextEdit', 'ZONA': 'TextEdit', 'TIPO': 'TextEdit', });
lyr_Mirtospazzamentomanuale_44.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'LUNGHEZZA': 'TextEdit', 'ZONA': 'TextEdit', 'TIPO': 'TextEdit', });
lyr_MilitelloRosmarinospazzamentomeccanico_45.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'ZONA': 'TextEdit', 'MODALITA\'': 'TextEdit', 'LUNGHEZZA': 'TextEdit', });
lyr_MilitelloRosmarinospazzamentomanuale_46.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'ZONA': 'TextEdit', 'MODALITA\'': 'TextEdit', 'LUNGHEZZA': 'TextEdit', });
lyr_MazzarrSantAndreaspazzamentomeccanico_47.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'ZONA': 'TextEdit', 'MODALITA\'': 'TextEdit', 'LUNGHEZZA': 'TextEdit', });
lyr_MazzarrSantAndreaspazzamentomanuale_48.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'ZONA': 'TextEdit', 'MODALITA\'': 'TextEdit', 'LUNGHEZZA': 'TextEdit', });
lyr_Longispazzamentomeccanico_49.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'LUNGHEZZA': 'TextEdit', 'ZONA': 'TextEdit', 'TIPO': '', });
lyr_Longispazzamentomanuale_50.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'LUNGHEZZA': 'TextEdit', 'ZONA': 'TextEdit', 'TIPO': '', });
lyr_Librizzispazzamentomeccanico_51.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'ZONA': 'TextEdit', 'MODALITA\'': 'TextEdit', 'LUNGHEZZA': 'TextEdit', });
lyr_Librizzispazzamentomanuale_52.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'ZONA': 'TextEdit', 'MODALITA\'': 'TextEdit', 'LUNGHEZZA': 'TextEdit', });
lyr_GioiosaMareaspazzamentomeccanico_53.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'ZONA': 'TextEdit', 'MODALITA\'': 'TextEdit', 'LUNGHEZZA': 'TextEdit', });
lyr_GioiosaMareaspazzamentomanuale_54.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'ZONA': 'TextEdit', 'MODALITA\'': 'TextEdit', 'LUNGHEZZA': 'TextEdit', });
lyr_GalatiMamertinospazzamentomeccanico_55.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'LUNGHEZZA': 'TextEdit', 'ZONA': 'TextEdit', 'TIPO': '', });
lyr_GalatiMamertinospazzamentomanuale_56.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'LUNGHEZZA': 'TextEdit', 'ZONA': 'TextEdit', 'TIPO': '', });
lyr_Frazzanospazzamentomeccanico_57.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'LUNGHEZZA': 'TextEdit', 'ZONA': 'TextEdit', 'TIPO': '', });
lyr_Frazzanospazzamentomanuale_58.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'LUNGHEZZA': 'TextEdit', 'ZONA': 'TextEdit', 'TIPO': '', });
lyr_FrancavilladiSiciliaspazzamentomeccanico_59.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'ZONA': 'TextEdit', 'MODALITA\'': 'TextEdit', 'LUNGHEZZA': 'TextEdit', });
lyr_FrancavilladiSiciliaspazzamentomanuale_60.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'ZONA': 'TextEdit', 'MODALITA\'': 'TextEdit', 'LUNGHEZZA': 'TextEdit', });
lyr_FondachelliFantinaspazzamentomeccanico_61.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'ZONA': 'TextEdit', 'MODALITA\'': 'TextEdit', 'LUNGHEZZA': 'TextEdit', });
lyr_FondachelliFantinaspazzamentomanuale_62.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'ZONA': 'TextEdit', 'MODALITA\'': 'TextEdit', 'LUNGHEZZA': 'TextEdit', });
lyr_Florestaspazzamentomeccanico_63.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'ZONA': 'TextEdit', 'MODALITA\'': 'TextEdit', 'LUNGHEZZA': 'TextEdit', });
lyr_Florestaspazzamentomanuale_64.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'ZONA': 'TextEdit', 'MODALITA\'': 'TextEdit', 'LUNGHEZZA': 'TextEdit', });
lyr_Falconespazzamentomeccanico_65.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'ZONA': 'TextEdit', 'MODALITA\'': 'TextEdit', 'LUNGHEZZA': 'TextEdit', });
lyr_Falconespazzamentomanuale_66.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'ZONA': 'TextEdit', 'MODALITA\'': 'TextEdit', 'LUNGHEZZA': 'TextEdit', });
lyr_CastellUmbertospazzamentomeccanico_67.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'ZONA': 'TextEdit', 'MODALITA\'': 'TextEdit', 'LUNGHEZZA': 'TextEdit', });
lyr_CastellUmbertospazzamentomanuale_68.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'ZONA': 'TextEdit', 'MODALITA\'': 'TextEdit', 'LUNGHEZZA': 'TextEdit', });
lyr_Tusaspazzamento_69.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'ZONA': 'TextEdit', 'TIPO': 'TextEdit', 'LUNGHEZZA': 'TextEdit', });
lyr_Tripispazzamentomanuale_70.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'ZONA': 'TextEdit', 'TIPO': 'TextEdit', 'LUNGHEZZA': 'TextEdit', });
lyr_SantaDomenicaVittoriaspazzamentomanuale_71.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'LUNGHEZZA': 'TextEdit', 'ZONA': 'TextEdit', 'TIPO': 'TextEdit', });
lyr_SanSalvatorediFitaliaspazzamentomanualeemeccanico_72.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'LUNGHEZZA': 'TextEdit', 'ZONA': 'TextEdit', 'TIPO': '', });
lyr_RoccellaValdemonespazzamentomanuale_73.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'TIPO': 'TextEdit', 'ZONA': 'TextEdit', 'LUNGHEZZA': 'TextEdit', });
lyr_Reitanospazzamentomanuale_74.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'ZONA': 'TextEdit', 'TIPO': 'TextEdit', 'LUNGHEZZA': 'TextEdit', });
lyr_Raccujaspazzamentomeccanico_75.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'ZONA': 'TextEdit', 'TIPO': 'TextEdit', 'LUNGHEZZA': 'TextEdit', });
lyr_Raccujaspazzamentomanuale_76.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'ZONA': 'TextEdit', 'TIPO': 'TextEdit', 'LUNGHEZZA': 'TextEdit', });
lyr_MottadAffermospazzamentomanuale_77.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'LUNGHEZZA': 'TextEdit', 'ZONA': 'TextEdit', 'TIPO': '', });
lyr_MottaCamastraspazzamentomanuale_78.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'ZONA': 'TextEdit', 'TIPO': 'TextEdit', 'LUNGHEZZA': 'TextEdit', });
lyr_MoioAlcantaraspazzamentomanuale_79.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'ZONA': 'TextEdit', 'TIPO': 'TextEdit', 'LUNGHEZZA': 'TextEdit', });
lyr_Malvagnaspazzamentomanuale_80.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'ZONA': 'TextEdit', 'MODALITA\'': 'TextEdit', 'LUNGHEZZA': 'TextEdit', });
lyr_Granitispazzamentomanuale_81.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'ZONA': 'TextEdit', 'MODALITA\'': 'TextEdit', 'LUNGHEZZA': 'TextEdit', });
lyr_FicarraspazzamentomanualeDACANCELLARE_82.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'LUNGHEZZA': 'TextEdit', 'ZONA': 'TextEdit', 'TIPO': '', });
lyr_Cesarospazzamento_83.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'LUNGHEZZA': 'TextEdit', 'ZONA': 'TextEdit', 'TIPO': '', });
lyr_CasteldiLuciospazzamentomanuale_84.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'LUNGHEZZA': 'TextEdit', 'ZONA': 'TextEdit', 'TIPO': '', });
lyr_Caroniaspazzamento_85.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'MODALITA\'': 'TextEdit', 'ZONA': 'TextEdit', 'LUNGHEZZA': 'TextEdit', });
lyr_CapriLeonespazzamento_86.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'MODALITA\'': 'TextEdit', 'ZONA': 'TextEdit', 'LUNGHEZZA': 'TextEdit', });
lyr_CapodOrlandospazzamento_87.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'MODALITA\'': 'TextEdit', 'FREQUENZA': 'TextEdit', 'LUNGHEZZA': 'TextEdit', 'ZONA': 'TextEdit', });
lyr_Capizzispazzamento_88.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'ZONA': 'TextEdit', 'LUNGHEZZA': 'TextEdit', });
lyr_Brolospazzamento_89.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'ZONA': 'TextEdit', 'MODALITA\'': 'TextEdit', 'LUNGHEZZA': 'TextEdit', });
lyr_Basicspazzamentomeccanico_90.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'MODALITA\'': 'TextEdit', 'LUNGHEZZA': 'TextEdit', 'ZONA': '', });
lyr_Basicspazzamentomanuale_91.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'MODALITA\'': 'TextEdit', 'LUNGHEZZA': 'TextEdit', 'ZONA': '', });
lyr_AlcaraliFusispazzamento_92.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'MODALITA\'': 'TextEdit', 'LUNGHEZZA': 'TextEdit', 'ZONA': 'TextEdit', });
lyr_Acquedolcispazzamento_93.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', 'MODALITA\'': 'TextEdit', 'LUNGHEZZA': 'TextEdit', 'ZONA': 'TextEdit', });
lyr_limiti57comuni_94.set('fieldImages', {'COD_RIP': 'TextEdit', 'COD_REG': 'TextEdit', 'COD_PROV': 'TextEdit', 'COD_CM': 'TextEdit', 'COD_UTS': 'TextEdit', 'PRO_COM': 'TextEdit', 'PRO_COM_T': 'TextEdit', 'COMUNE': 'TextEdit', 'COMUNE_A': 'TextEdit', 'CC_UTS': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Sub-Ambito': 'TextEdit', 'SPAMPA': 'TextEdit', });
lyr_Ucriaspazzamentomeccanico_1.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'ZONA': 'header label - always visible', 'TIPO': 'header label - always visible', 'LUNGHEZZA': 'hidden field', });
lyr_Ucriaspazzamentomanuale_2.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'ZONA': 'header label - always visible', 'TIPO': 'header label - always visible', 'LUNGHEZZA': 'hidden field', });
lyr_Spazzamentomeccanico_3.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'LUNGHEZZA': 'hidden field', 'ZONA': 'header label - always visible', 'TIPO': 'header label - always visible', });
lyr_Spazzamentomanuale_4.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'LUNGHEZZA': 'hidden field', 'ZONE': 'header label - always visible', 'TIPO': 'header label - always visible', });
lyr_Torrenovaspazzamentomeccanico_5.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'ZONA': 'header label - always visible', 'TIPO': 'header label - always visible', 'LUNGHEZZA': 'hidden field', });
lyr_Torrenovaspazzamentomanuale_6.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'ZONA': 'header label - always visible', 'TIPO': 'header label - always visible', 'LUNGHEZZA': 'hidden field', });
lyr_Sinagraspazzamentomeccanico_7.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'ZONA': 'header label - always visible', 'TIPO': 'header label - always visible', 'LUNGHEZZA': 'hidden field', });
lyr_Sinagraspazzamentomanuale_8.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'ZONA': 'hidden field', 'TIPO': 'header label - always visible', 'LUNGHEZZA': 'hidden field', });
lyr_SantoStefanodiCamastraspazzamentomeccanico_9.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'ZONA': 'hidden field', 'TIPO': 'header label - always visible', 'LUNGHEZZA': 'hidden field', });
lyr_SantoStefanodiCamastraspazzamentomanuale_10.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'ZONA': 'header label - always visible', 'TIPO': 'header label - always visible', 'LUNGHEZZA': 'hidden field', });
lyr_SantAngelodiBrolospazzamentomeccanico_11.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'ZONA': 'header label - always visible', 'TIPO': 'header label - always visible', 'LUNGHEZZA': 'hidden field', });
lyr_SantAngelodiBrolospazzamentomanuale_12.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'ZONA': 'header label - always visible', 'TIPO': 'header label - always visible', 'LUNGHEZZA': 'hidden field', });
lyr_SantAgatadiMilitellospazzamentomeccanico_13.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'ZONA': 'header label - always visible', 'TIPO': 'header label - always visible', 'LUNGHEZZA': 'hidden field', });
lyr_SantAgatadiMilitellospazzamentomanuale_14.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'ZONA': 'header label - always visible', 'TIPO': 'header label - always visible', 'LUNGHEZZA': 'hidden field', });
lyr_SanTeodorospazzamentomeccanico_15.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'ZONA': 'header label - always visible', 'TIPO': 'header label - always visible', 'LUNGHEZZA': 'hidden field', });
lyr_SanTeodorospazzamentomanuale_16.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'ZONA': 'header label - always visible', 'TIPO': 'header label - always visible', 'LUNGHEZZA': 'hidden field', });
lyr_SanPieroPattispazzamentomeccanico_17.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'ZONA': 'header label - always visible', 'TIPO': 'header label - always visible', 'LUNGHEZZA': 'hidden field', });
lyr_SanPieroPattispazzamentomanuale_18.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'ZONA': 'header label - always visible', 'TIPO': 'header label - always visible', 'LUNGHEZZA': 'hidden field', });
lyr_SanMarcospazzamentomeccanico_19.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'ZONA': 'header label - always visible', 'TIPO': 'header label - always visible', 'LUNGHEZZA': 'hidden field', });
lyr_SanMarcospazzamentomanuale_20.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'ZONA': 'header label - always visible', 'TIPO': 'header label - always visible', 'LUNGHEZZA': 'hidden field', });
lyr_SanFratellospazzamentomeccanico_21.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'LUNGHEZZA': 'hidden field', 'ZONA': 'header label - always visible', 'TIPO': 'header label - always visible', });
lyr_SanFratellospazzamentomanuale_22.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'LUNGHEZZA': 'hidden field', 'ZONA': 'header label - always visible', 'TIPO': 'header label - always visible', });
lyr_RodiMilicispazzamentomeccanico_23.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'LUNGHEZZA': 'hidden field', 'ZONA': 'header label - always visible', 'TIPO': 'header label - always visible', });
lyr_RodiMilicispazzamentomanuale_24.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'LUNGHEZZA': 'hidden field', 'ZONA': 'header label - always visible', 'TIPO': 'header label - always visible', });
lyr_Pirainospazzamentomeccanico_25.set('fieldLabels', {'fid': 'hidden field', 'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'surface': 'hidden field', 'name': 'hidden field', 'maxspeed': 'hidden field', 'lanes': 'hidden field', 'highway': 'hidden field', 'ZONA': 'header label - always visible', 'TIPO': 'header label - always visible', 'LUNGHEZZA': 'hidden field', });
lyr_Pirainospazzamentomanuale_26.set('fieldLabels', {'fid': 'hidden field', 'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'surface': 'hidden field', 'name': 'hidden field', 'maxspeed': 'hidden field', 'lanes': 'hidden field', 'highway': 'hidden field', 'ZONA': 'header label - always visible', 'TIPO': 'header label - always visible', 'LUNGHEZZA': 'hidden field', });
lyr_Pettineospazzamentomeccanico_27.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'LUNGHEZZA': 'hidden field', 'ZONA': 'header label - always visible', 'TIPO': 'header label - always visible', });
lyr_Pettineospazzamentomanuale_28.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'COMUNE': 'hidden field', 'LUNGHEZZA': 'hidden field', 'ZONA': 'header label - always visible', 'TIPO': 'header label - always visible', });
lyr_Pattispazzamentomeccanico_29.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'ZONA': 'header label - always visible', 'TIPO': 'header label - always visible', 'LUNGHEZZA': 'hidden field', });
lyr_Pattispazzamentomanuale_30.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'ZONA': 'header label - always visible', 'TIPO': 'header label - always visible', 'LUNGHEZZA': 'hidden field', });
lyr_Oliverispazzamentomeccanico_31.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'ZONA': 'header label - always visible', 'TIPO': 'header label - always visible', 'LUNGHEZZA': 'hidden field', });
lyr_Oliverispazzamentomanuale_32.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'ZONA': 'header label - always visible', 'TIPO': 'header label - always visible', 'LUNGHEZZA': 'hidden field', });
lyr_NovaradiSiciliaspazzamentomeccanico_33.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'LUNGHEZZA': 'hidden field', 'ZONA': 'header label - always visible', 'TIPO': 'header label - always visible', });
lyr_NovaradiSiciliaspazzamentomanuale_34.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'LUNGHEZZA': 'hidden field', 'ZONA': 'header label - always visible', 'TIPO': 'header label - always visible', });
lyr_NASOspazzamentomeccanico_35.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'ZONA': 'header label - always visible', 'TIPO': 'header label - always visible', 'LUNGHEZZA': 'hidden field', });
lyr_NASOspazzamentomanuale_36.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'ZONA': 'header label - always visible', 'TIPO': 'header label - always visible', 'LUNGHEZZA': 'hidden field', });
lyr_MontalbanoEliconaspazzamentomeccanico_37.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'LUNGHEZZA': 'hidden field', 'ZONA': 'header label - always visible', });
lyr_MontalbanoEliconaspazzamentomanuale_38.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'LUNGHEZZA': 'hidden field', 'ZONA': 'header label - always visible', });
lyr_Montagnarealespazzamentomeccanico_39.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'ZONA': 'header label - always visible', 'TIPO': 'header label - always visible', 'LUNGHEZZA': 'hidden field', });
lyr_Montagnarealespazzamentomanuale_40.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'ZONA': 'header label - always visible', 'TIPO': 'header label - always visible', 'LUNGHEZZA': 'hidden field', });
lyr_Mistrettaspazzamentomeccanico_41.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'LUNGHEZZA': 'hidden field', 'ZONA': 'header label - always visible', 'TIPO': 'no label', });
lyr_Mistrettaspazzamentomanuale_42.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'COMUNE': 'hidden field', 'LUNGHEZZA': 'hidden field', 'ZONA': 'header label - always visible', 'TIPO': 'no label', });
lyr_Mirtospazzamentomeccanico_43.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'LUNGHEZZA': 'hidden field', 'ZONA': 'header label - always visible', 'TIPO': 'header label - always visible', });
lyr_Mirtospazzamentomanuale_44.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'LUNGHEZZA': 'hidden field', 'ZONA': 'header label - always visible', 'TIPO': 'header label - always visible', });
lyr_MilitelloRosmarinospazzamentomeccanico_45.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'ZONA': 'header label - always visible', 'MODALITA\'': 'header label - always visible', 'LUNGHEZZA': 'hidden field', });
lyr_MilitelloRosmarinospazzamentomanuale_46.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'ZONA': 'header label - always visible', 'MODALITA\'': 'header label - always visible', 'LUNGHEZZA': 'hidden field', });
lyr_MazzarrSantAndreaspazzamentomeccanico_47.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'ZONA': 'header label - always visible', 'MODALITA\'': 'header label - always visible', 'LUNGHEZZA': 'hidden field', });
lyr_MazzarrSantAndreaspazzamentomanuale_48.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'ZONA': 'header label - always visible', 'MODALITA\'': 'header label - always visible', 'LUNGHEZZA': 'hidden field', });
lyr_Longispazzamentomeccanico_49.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'LUNGHEZZA': 'hidden field', 'ZONA': 'header label - always visible', 'TIPO': 'header label - always visible', });
lyr_Longispazzamentomanuale_50.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'LUNGHEZZA': 'hidden field', 'ZONA': 'header label - always visible', 'TIPO': 'header label - always visible', });
lyr_Librizzispazzamentomeccanico_51.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'ZONA': 'header label - always visible', 'MODALITA\'': 'header label - always visible', 'LUNGHEZZA': 'hidden field', });
lyr_Librizzispazzamentomanuale_52.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'ZONA': 'header label - always visible', 'MODALITA\'': 'header label - always visible', 'LUNGHEZZA': 'hidden field', });
lyr_GioiosaMareaspazzamentomeccanico_53.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'ZONA': 'header label - always visible', 'MODALITA\'': 'header label - always visible', 'LUNGHEZZA': 'hidden field', });
lyr_GioiosaMareaspazzamentomanuale_54.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'ZONA': 'hidden field', 'MODALITA\'': 'header label - always visible', 'LUNGHEZZA': 'hidden field', });
lyr_GalatiMamertinospazzamentomeccanico_55.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'LUNGHEZZA': 'hidden field', 'ZONA': 'header label - always visible', 'TIPO': 'header label - always visible', });
lyr_GalatiMamertinospazzamentomanuale_56.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'LUNGHEZZA': 'hidden field', 'ZONA': 'header label - always visible', 'TIPO': 'header label - always visible', });
lyr_Frazzanospazzamentomeccanico_57.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'LUNGHEZZA': 'hidden field', 'ZONA': 'header label - always visible', 'TIPO': 'header label - always visible', });
lyr_Frazzanospazzamentomanuale_58.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'LUNGHEZZA': 'hidden field', 'ZONA': 'header label - always visible', 'TIPO': 'header label - always visible', });
lyr_FrancavilladiSiciliaspazzamentomeccanico_59.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'ZONA': 'header label - always visible', 'MODALITA\'': 'header label - always visible', 'LUNGHEZZA': 'hidden field', });
lyr_FrancavilladiSiciliaspazzamentomanuale_60.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'ZONA': 'header label - always visible', 'MODALITA\'': 'header label - always visible', 'LUNGHEZZA': 'hidden field', });
lyr_FondachelliFantinaspazzamentomeccanico_61.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'ZONA': 'header label - always visible', 'MODALITA\'': 'header label - always visible', 'LUNGHEZZA': 'hidden field', });
lyr_FondachelliFantinaspazzamentomanuale_62.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'ZONA': 'header label - always visible', 'MODALITA\'': 'header label - always visible', 'LUNGHEZZA': 'hidden field', });
lyr_Florestaspazzamentomeccanico_63.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'ZONA': 'header label - always visible', 'MODALITA\'': 'header label - always visible', 'LUNGHEZZA': 'hidden field', });
lyr_Florestaspazzamentomanuale_64.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'ZONA': 'header label - always visible', 'MODALITA\'': 'header label - always visible', 'LUNGHEZZA': 'hidden field', });
lyr_Falconespazzamentomeccanico_65.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'ZONA': 'header label - always visible', 'MODALITA\'': 'header label - always visible', 'LUNGHEZZA': 'hidden field', });
lyr_Falconespazzamentomanuale_66.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'ZONA': 'header label - always visible', 'MODALITA\'': 'header label - always visible', 'LUNGHEZZA': 'hidden field', });
lyr_CastellUmbertospazzamentomeccanico_67.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'ZONA': 'header label - always visible', 'MODALITA\'': 'header label - always visible', 'LUNGHEZZA': 'hidden field', });
lyr_CastellUmbertospazzamentomanuale_68.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'ZONA': 'header label - always visible', 'MODALITA\'': 'header label - always visible', 'LUNGHEZZA': 'hidden field', });
lyr_Tusaspazzamento_69.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'ZONA': 'header label - always visible', 'TIPO': 'header label - always visible', 'LUNGHEZZA': 'hidden field', });
lyr_Tripispazzamentomanuale_70.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'ZONA': 'header label - always visible', 'TIPO': 'header label - always visible', 'LUNGHEZZA': 'hidden field', });
lyr_SantaDomenicaVittoriaspazzamentomanuale_71.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'LUNGHEZZA': 'hidden field', 'ZONA': 'header label - always visible', 'TIPO': 'header label - always visible', });
lyr_SanSalvatorediFitaliaspazzamentomanualeemeccanico_72.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'LUNGHEZZA': 'hidden field', 'ZONA': 'header label - always visible', 'TIPO': 'header label - always visible', });
lyr_RoccellaValdemonespazzamentomanuale_73.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'TIPO': 'header label - always visible', 'ZONA': 'header label - always visible', 'LUNGHEZZA': 'hidden field', });
lyr_Reitanospazzamentomanuale_74.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'ZONA': 'header label - always visible', 'TIPO': 'header label - always visible', 'LUNGHEZZA': 'hidden field', });
lyr_Raccujaspazzamentomeccanico_75.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'ZONA': 'header label - always visible', 'TIPO': 'header label - always visible', 'LUNGHEZZA': 'hidden field', });
lyr_Raccujaspazzamentomanuale_76.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'ZONA': 'header label - always visible', 'TIPO': 'header label - always visible', 'LUNGHEZZA': 'hidden field', });
lyr_MottadAffermospazzamentomanuale_77.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'LUNGHEZZA': 'hidden field', 'ZONA': 'hidden field', 'TIPO': 'header label - always visible', });
lyr_MottaCamastraspazzamentomanuale_78.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'ZONA': 'header label - always visible', 'TIPO': 'header label - always visible', 'LUNGHEZZA': 'hidden field', });
lyr_MoioAlcantaraspazzamentomanuale_79.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'ZONA': 'header label - always visible', 'TIPO': 'header label - always visible', 'LUNGHEZZA': 'hidden field', });
lyr_Malvagnaspazzamentomanuale_80.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'ZONA': 'header label - always visible', 'MODALITA\'': 'header label - always visible', 'LUNGHEZZA': 'hidden field', });
lyr_Granitispazzamentomanuale_81.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'ZONA': 'header label - always visible', 'MODALITA\'': 'header label - always visible', 'LUNGHEZZA': 'hidden field', });
lyr_FicarraspazzamentomanualeDACANCELLARE_82.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'LUNGHEZZA': 'hidden field', 'ZONA': 'header label - always visible', 'TIPO': 'header label - always visible', });
lyr_Cesarospazzamento_83.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'LUNGHEZZA': 'hidden field', 'ZONA': 'header label - always visible', 'TIPO': 'header label - always visible', });
lyr_CasteldiLuciospazzamentomanuale_84.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'LUNGHEZZA': 'hidden field', 'ZONA': 'header label - always visible', 'TIPO': 'header label - always visible', });
lyr_Caroniaspazzamento_85.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'MODALITA\'': 'header label - always visible', 'ZONA': 'header label - always visible', 'LUNGHEZZA': 'header label - always visible', });
lyr_CapriLeonespazzamento_86.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'MODALITA\'': 'header label - always visible', 'ZONA': 'header label - always visible', 'LUNGHEZZA': 'header label - always visible', });
lyr_CapodOrlandospazzamento_87.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'MODALITA\'': 'header label - always visible', 'FREQUENZA': 'hidden field', 'LUNGHEZZA': 'hidden field', 'ZONA': 'header label - always visible', });
lyr_Capizzispazzamento_88.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'ZONA': 'header label - always visible', 'LUNGHEZZA': 'hidden field', });
lyr_Brolospazzamento_89.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'ZONA': 'header label - always visible', 'MODALITA\'': 'header label - always visible', 'LUNGHEZZA': 'hidden field', });
lyr_Basicspazzamentomeccanico_90.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'MODALITA\'': 'header label - always visible', 'LUNGHEZZA': 'hidden field', 'ZONA': 'header label - always visible', });
lyr_Basicspazzamentomanuale_91.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'MODALITA\'': 'header label - always visible', 'LUNGHEZZA': 'hidden field', 'ZONA': 'header label - always visible', });
lyr_AlcaraliFusispazzamento_92.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'MODALITA\'': 'header label - always visible', 'LUNGHEZZA': 'hidden field', 'ZONA': 'header label - always visible', });
lyr_Acquedolcispazzamento_93.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'hidden field', 'surface': 'hidden field', 'maxspeed': 'hidden field', 'ref': 'hidden field', 'MODALITA\'': 'header label - always visible', 'LUNGHEZZA': 'hidden field', 'ZONA': 'header label - always visible', });
lyr_limiti57comuni_94.set('fieldLabels', {'COD_RIP': 'hidden field', 'COD_REG': 'hidden field', 'COD_PROV': 'hidden field', 'COD_CM': 'hidden field', 'COD_UTS': 'hidden field', 'PRO_COM': 'hidden field', 'PRO_COM_T': 'hidden field', 'COMUNE': 'header label - always visible', 'COMUNE_A': 'hidden field', 'CC_UTS': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'Sub-Ambito': 'hidden field', 'SPAMPA': 'hidden field', });
lyr_limiti57comuni_94.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});